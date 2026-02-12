import type { HSL, PaletteColor, PaletteGroup } from '@/types/tools/color';
export type { PaletteColor, PaletteGroupId, PaletteGroup } from '@/types/tools/color';
import { clamp, hexToRgb, hslToRgb, normalizeHex, rgbToHex, rgbToHsl } from '@/lib/tools/color/convert';

function rotateHue(h: number, delta: number): number {
  const value = (h + delta) % 360;
  return value < 0 ? value + 360 : value;
}

export function createPaletteFromHex(baseHex: string): PaletteGroup[] {
  const normalized = normalizeHex(baseHex);
  if (!normalized) return [];

  const rgb = hexToRgb(normalized)!;
  const baseHsl = rgbToHsl(rgb);

  const mkColor = (h: number, s: number, l: number): PaletteColor => {
    const hsl: HSL = {
      h: ((h % 360) + 360) % 360,
      s: clamp(s, 0, 100),
      l: clamp(l, 0, 100),
    };
    const rgbColor = hslToRgb(hsl);
    return {
      hex: rgbToHex(rgbColor),
      hsl,
    };
  };

  const mono: PaletteGroup = {
    id: 'monochromatic',
    colors: [
      mkColor(baseHsl.h, baseHsl.s, clamp(baseHsl.l - 25, 5, 95)),
      mkColor(baseHsl.h, baseHsl.s, clamp(baseHsl.l - 12, 5, 95)),
      mkColor(baseHsl.h, baseHsl.s, baseHsl.l),
      mkColor(baseHsl.h, baseHsl.s, clamp(baseHsl.l + 12, 5, 95)),
      mkColor(baseHsl.h, baseHsl.s, clamp(baseHsl.l + 24, 5, 95)),
    ],
  };

  const analogous: PaletteGroup = {
    id: 'analogous',
    colors: [
      mkColor(rotateHue(baseHsl.h - 30, 0), baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h - 15, 0), baseHsl.s, baseHsl.l + 5),
      mkColor(baseHsl.h, baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h + 15, 0), baseHsl.s, baseHsl.l - 5),
      mkColor(rotateHue(baseHsl.h + 30, 0), baseHsl.s, baseHsl.l),
    ],
  };

  const complementary: PaletteGroup = {
    id: 'complementary',
    colors: [
      mkColor(baseHsl.h, baseHsl.s, baseHsl.l),
      mkColor(baseHsl.h, baseHsl.s, clamp(baseHsl.l - 10, 5, 95)),
      mkColor(rotateHue(baseHsl.h + 180, 0), baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h + 180, 0), baseHsl.s, clamp(baseHsl.l + 10, 5, 95)),
      mkColor(rotateHue(baseHsl.h + 180, 0), baseHsl.s, clamp(baseHsl.l - 10, 5, 95)),
    ],
  };

  const triadic: PaletteGroup = {
    id: 'triadic',
    colors: [
      mkColor(baseHsl.h, baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h + 120, 0), baseHsl.s, baseHsl.l - 5),
      mkColor(rotateHue(baseHsl.h + 240, 0), baseHsl.s, baseHsl.l + 5),
      mkColor(rotateHue(baseHsl.h + 120, 0), baseHsl.s, baseHsl.l + 10),
      mkColor(rotateHue(baseHsl.h + 240, 0), baseHsl.s, baseHsl.l - 10),
    ],
  };

  const split: PaletteGroup = {
    id: 'split-complementary',
    colors: [
      mkColor(baseHsl.h, baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h + 150, 0), baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h + 210, 0), baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h + 150, 0), baseHsl.s, clamp(baseHsl.l + 8, 5, 95)),
      mkColor(rotateHue(baseHsl.h + 210, 0), baseHsl.s, clamp(baseHsl.l - 8, 5, 95)),
    ],
  };

  const pastelS = Math.min(baseHsl.s, 45);
  const pastel: PaletteGroup = {
    id: 'soft-pastel',
    colors: [mkColor(baseHsl.h, pastelS, 92), mkColor(baseHsl.h, pastelS, 88), mkColor(baseHsl.h, pastelS, 84), mkColor(baseHsl.h, pastelS, 80), mkColor(baseHsl.h, pastelS, 76)],
  };

  const deepS = Math.max(baseHsl.s, 55);
  const deep: PaletteGroup = {
    id: 'deep-dark',
    colors: [
      mkColor(baseHsl.h, deepS, clamp(baseHsl.l - 5, 5, 95)),
      mkColor(baseHsl.h, deepS, clamp(baseHsl.l - 12, 5, 95)),
      mkColor(baseHsl.h, deepS, clamp(baseHsl.l - 20, 5, 95)),
      mkColor(baseHsl.h, deepS, clamp(baseHsl.l - 28, 5, 95)),
      mkColor(baseHsl.h, deepS, clamp(baseHsl.l - 36, 5, 95)),
    ],
  };

  const material: PaletteGroup = {
    id: 'material-tonal',
    colors: [
      mkColor(baseHsl.h, baseHsl.s * 0.3, 96),
      mkColor(baseHsl.h, baseHsl.s * 0.4, 90),
      mkColor(baseHsl.h, baseHsl.s * 0.6, 80),
      mkColor(baseHsl.h, baseHsl.s * 0.8, 70),
      mkColor(baseHsl.h, baseHsl.s, 60),
    ],
  };

  const apple: PaletteGroup = {
    id: 'apple-minimal',
    colors: [mkColor(baseHsl.h, Math.max(baseHsl.s, 60), clamp(baseHsl.l, 45, 60)), mkColor(baseHsl.h, 6, 98), mkColor(baseHsl.h, 6, 94), mkColor(baseHsl.h, 6, 88), mkColor(baseHsl.h, 6, 30)],
  };

  return [mono, triadic, split, pastel, deep, material, apple, analogous, complementary];
}
