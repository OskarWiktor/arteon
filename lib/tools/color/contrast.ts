import { hexToRgb, hslToRgb, parseHsl } from '@/lib/tools/color/convert';
import type { RGB, RGBA } from '@/types/tools/color';

function parseAlpha(alphaRaw: string | undefined): number | null {
  if (alphaRaw === undefined) return 1;

  const a = alphaRaw.endsWith('%')
    ? Number(alphaRaw.slice(0, -1)) / 100
    : Number(alphaRaw);

  return Number.isNaN(a) || a < 0 || a > 1 ? null : a;
}

function parseRgbaString(trimmed: string): RGBA | null {
  const rgbMatch =
    /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([0-9.]+%?))?\s*\)$/i.exec(
      trimmed,
    );
  if (!rgbMatch) return null;

  const r = Number(rgbMatch[1]);
  const g = Number(rgbMatch[2]);
  const b = Number(rgbMatch[3]);
  if ([r, g, b].some(v => v < 0 || v > 255 || Number.isNaN(v))) {
    return null;
  }

  // Optional capture group: TS types it as `string`, but it is `undefined`
  // at runtime when the alpha part isn't present in the match.
  const a = parseAlpha(rgbMatch[4] as string | undefined);
  if (a === null) return null;

  return { r, g, b, a };
}

export function parseColor(color: string): RGBA | null {
  const trimmed = color.trim();

  if (trimmed.startsWith('#')) {
    const rgb = hexToRgb(trimmed);
    return rgb ? { ...rgb, a: 1 } : null;
  }

  const hsl = parseHsl(trimmed);
  if (hsl) {
    const rgb = hslToRgb({ h: hsl.h, s: hsl.s, l: hsl.l });
    return { ...rgb, a: hsl.a };
  }

  return parseRgbaString(trimmed);
}

function compositeOver(foreground: RGBA, background: RGB): RGB {
  const a = foreground.a;
  const inv = 1 - a;
  const clampChannel = (v: number) => Math.min(255, Math.max(0, v));

  return {
    r: clampChannel(foreground.r * a + background.r * inv),
    g: clampChannel(foreground.g * a + background.g * inv),
    b: clampChannel(foreground.b * a + background.b * inv),
  };
}

function channelToLinear(c: number): number {
  const sRgb = c / 255;
  return sRgb <= 0.03928 ? sRgb / 12.92 : Math.pow((sRgb + 0.055) / 1.055, 2.4);
}

export function relativeLuminance({ r, g, b }: RGB): number {
  const R = channelToLinear(r);
  const G = channelToLinear(g);
  const B = channelToLinear(b);

  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

export function calculateHexContrast(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  if (!rgb1 || !rgb2) return 1;
  const L1 = relativeLuminance(rgb1);
  const L2 = relativeLuminance(rgb2);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

export function isHexContrastSufficient(
  hex1: string,
  hex2: string,
  minRatio = 3,
): boolean {
  return calculateHexContrast(hex1, hex2) >= minRatio;
}

export function getContrastRatio(
  foreground: string,
  background: string,
): number | null {
  const fg = parseColor(foreground);
  const bg = parseColor(background);

  if (!fg || !bg) return null;

  const baseBackground: RGB = { r: 255, g: 255, b: 255 };
  const bgOpaque =
    bg.a < 1
      ? compositeOver(bg, baseBackground)
      : { r: bg.r, g: bg.g, b: bg.b };
  const fgOpaque =
    fg.a < 1 ? compositeOver(fg, bgOpaque) : { r: fg.r, g: fg.g, b: fg.b };

  const L1 = relativeLuminance(fgOpaque);
  const L2 = relativeLuminance(bgOpaque);

  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);

  const ratio = (lighter + 0.05) / (darker + 0.05);

  return ratio;
}
