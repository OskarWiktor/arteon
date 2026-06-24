import {
  clamp,
  hexToRgb,
  hslToRgb,
  normalizeHex,
  rgbToHex,
  rgbToHsl,
} from '@/lib/tools/color/convert';
import type { HSL, PaletteColor, PaletteGroup } from '@/types/tools/color';

export type {
  PaletteColor,
  PaletteGroupId,
  PaletteGroup,
} from '@/types/tools/color';

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
      mkColor(
        rotateHue(baseHsl.h + 180, 0),
        baseHsl.s,
        clamp(baseHsl.l + 10, 5, 95),
      ),
      mkColor(
        rotateHue(baseHsl.h + 180, 0),
        baseHsl.s,
        clamp(baseHsl.l - 10, 5, 95),
      ),
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
      mkColor(
        rotateHue(baseHsl.h + 150, 0),
        baseHsl.s,
        clamp(baseHsl.l + 8, 5, 95),
      ),
      mkColor(
        rotateHue(baseHsl.h + 210, 0),
        baseHsl.s,
        clamp(baseHsl.l - 8, 5, 95),
      ),
    ],
  };

  const pastelS = Math.min(baseHsl.s, 45);
  const pastel: PaletteGroup = {
    id: 'soft-pastel',
    colors: [
      mkColor(baseHsl.h, pastelS, 92),
      mkColor(baseHsl.h, pastelS, 88),
      mkColor(baseHsl.h, pastelS, 84),
      mkColor(baseHsl.h, pastelS, 80),
      mkColor(baseHsl.h, pastelS, 76),
    ],
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
    colors: [
      mkColor(baseHsl.h, Math.max(baseHsl.s, 60), clamp(baseHsl.l, 45, 60)),
      mkColor(baseHsl.h, 6, 98),
      mkColor(baseHsl.h, 6, 94),
      mkColor(baseHsl.h, 6, 88),
      mkColor(baseHsl.h, 6, 30),
    ],
  };

  // --- New palettes ---

  const tetradic: PaletteGroup = {
    id: 'tetradic',
    colors: [
      mkColor(baseHsl.h, baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h, 90), baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h, 180), baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h, 270), baseHsl.s, baseHsl.l),
      mkColor(baseHsl.h, baseHsl.s, clamp(baseHsl.l + 15, 5, 95)),
    ],
  };

  const warmTarget = baseHsl.h > 180 ? baseHsl.h - 180 : baseHsl.h;
  const warmBase =
    warmTarget < 60 ? warmTarget : clamp(warmTarget * 0.3 + 10, 0, 50);
  const warmShift: PaletteGroup = {
    id: 'warm-shift',
    colors: [
      mkColor(warmBase, Math.max(baseHsl.s, 50), 55),
      mkColor(warmBase + 15, Math.max(baseHsl.s, 45), 62),
      mkColor(warmBase + 30, Math.max(baseHsl.s, 40), 68),
      mkColor(warmBase + 8, Math.max(baseHsl.s, 55), 48),
      mkColor(warmBase + 20, Math.max(baseHsl.s, 35), 75),
    ],
  };

  const coolBase = clamp(
    rotateHue(baseHsl.h, 0) > 120 && rotateHue(baseHsl.h, 0) < 280
      ? baseHsl.h
      : 200,
    170,
    260,
  );
  const coolShift: PaletteGroup = {
    id: 'cool-shift',
    colors: [
      mkColor(coolBase, Math.max(baseHsl.s, 40), 50),
      mkColor(coolBase + 15, Math.max(baseHsl.s, 35), 58),
      mkColor(coolBase - 15, Math.max(baseHsl.s, 45), 45),
      mkColor(coolBase + 8, Math.max(baseHsl.s, 30), 65),
      mkColor(coolBase - 8, Math.max(baseHsl.s, 50), 38),
    ],
  };

  const earthBase = clamp(
    baseHsl.h > 180 ? baseHsl.h - 150 : baseHsl.h + 30,
    20,
    60,
  );
  const earthTones: PaletteGroup = {
    id: 'earth-tones',
    colors: [
      mkColor(earthBase, clamp(baseHsl.s * 0.4, 15, 35), 45),
      mkColor(earthBase + 10, clamp(baseHsl.s * 0.35, 12, 30), 55),
      mkColor(earthBase - 5, clamp(baseHsl.s * 0.5, 18, 40), 38),
      mkColor(earthBase + 20, clamp(baseHsl.s * 0.3, 10, 25), 62),
      mkColor(earthBase + 5, clamp(baseHsl.s * 0.45, 15, 35), 50),
    ],
  };

  const neonVibrant: PaletteGroup = {
    id: 'neon-vibrant',
    colors: [
      mkColor(baseHsl.h, 100, 55),
      mkColor(rotateHue(baseHsl.h, 20), 100, 52),
      mkColor(rotateHue(baseHsl.h, -20), 100, 58),
      mkColor(rotateHue(baseHsl.h, 40), 95, 50),
      mkColor(rotateHue(baseHsl.h, -40), 95, 53),
    ],
  };

  const vintageMuted: PaletteGroup = {
    id: 'vintage-muted',
    colors: [
      mkColor(baseHsl.h, clamp(baseHsl.s * 0.4, 20, 40), 62),
      mkColor(rotateHue(baseHsl.h, 30), clamp(baseHsl.s * 0.35, 18, 35), 65),
      mkColor(rotateHue(baseHsl.h, -30), clamp(baseHsl.s * 0.45, 22, 42), 58),
      mkColor(rotateHue(baseHsl.h, 60), clamp(baseHsl.s * 0.3, 15, 32), 68),
      mkColor(rotateHue(baseHsl.h, -60), clamp(baseHsl.s * 0.38, 20, 38), 55),
    ],
  };

  const highContrast: PaletteGroup = {
    id: 'high-contrast',
    colors: [
      mkColor(baseHsl.h, Math.max(baseHsl.s, 60), 10),
      mkColor(baseHsl.h, Math.max(baseHsl.s, 50), 30),
      mkColor(baseHsl.h, Math.max(baseHsl.s, 55), 50),
      mkColor(baseHsl.h, Math.max(baseHsl.s, 40), 75),
      mkColor(baseHsl.h, Math.min(baseHsl.s, 15), 96),
    ],
  };

  const sunsetGradient: PaletteGroup = {
    id: 'sunset-gradient',
    colors: [
      mkColor(baseHsl.h, Math.max(baseHsl.s, 70), 55),
      mkColor(rotateHue(baseHsl.h, 25), Math.max(baseHsl.s, 75), 58),
      mkColor(rotateHue(baseHsl.h, 50), Math.max(baseHsl.s, 70), 52),
      mkColor(rotateHue(baseHsl.h, 75), Math.max(baseHsl.s, 65), 48),
      mkColor(rotateHue(baseHsl.h, 100), Math.max(baseHsl.s, 60), 45),
    ],
  };

  return [
    mono,
    triadic,
    split,
    pastel,
    deep,
    material,
    apple,
    analogous,
    complementary,
    tetradic,
    warmShift,
    coolShift,
    earthTones,
    neonVibrant,
    vintageMuted,
    highContrast,
    sunsetGradient,
  ];
}
