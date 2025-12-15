import type { RGB } from '@/lib/tools/color/types';
import { hexToRgb } from '@/lib/tools/color/convert';

export function parseColor(color: string): RGB | null {
  const trimmed = color.trim();

  if (trimmed.startsWith('#')) {
    return hexToRgb(trimmed);
  }

  const rgbMatch = trimmed.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([0-9.]+))?\s*\)$/i);

  if (rgbMatch) {
    const r = Number(rgbMatch[1]);
    const g = Number(rgbMatch[2]);
    const b = Number(rgbMatch[3]);

    if ([r, g, b].some((v) => v < 0 || v > 255 || Number.isNaN(v))) {
      return null;
    }

    return { r, g, b };
  }

  return null;
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

export function getContrastRatio(foreground: string, background: string): number | null {
  const fgRgb = parseColor(foreground);
  const bgRgb = parseColor(background);

  if (!fgRgb || !bgRgb) return null;

  const L1 = relativeLuminance(fgRgb);
  const L2 = relativeLuminance(bgRgb);

  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);

  const ratio = (lighter + 0.05) / (darker + 0.05);

  return Math.round(ratio * 100) / 100;
}
