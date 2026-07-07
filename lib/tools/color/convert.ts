import type { HSL, HSLA, RGB } from '@/types/tools/color';

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function hexToRgb(hex: string): RGB | null {
  let value = hex.trim().replace('#', '');

  if (!/^[0-9A-Fa-f]+$/.test(value)) return null;

  if (value.length === 3 || value.length === 4) {
    // #RGB or #RGBA — expand to 6 chars (ignore alpha)
    value = value
      .slice(0, 3)
      .split('')
      .map(c => c + c)
      .join('');
  } else if (value.length === 8) {
    // #RRGGBBAA — strip alpha channel
    value = value.slice(0, 6);
  } else if (value.length !== 6) {
    return null;
  }

  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);

  if ([r, g, b].some(v => Number.isNaN(v))) return null;

  return { r, g, b };
}

export function rgbToHex({ r, g, b }: RGB): string {
  const toHex = (v: number) => {
    // Guard NaN/Infinity so a bad channel yields "00" instead of "#NaN0000".
    const safe = Number.isFinite(v) ? v : 0;
    const clamped = clamp(Math.round(safe), 0, 255);
    const hex = clamped.toString(16).padStart(2, '0');
    return hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function rgbToHsl({ r, g, b }: RGB): HSL {
  const rN = r / 255;
  const gN = g / 255;
  const bN = b / 255;

  const max = Math.max(rN, gN, bN);
  const min = Math.min(rN, gN, bN);
  const delta = max - min;

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));

    switch (max) {
      case rN:
        h = 60 * (((gN - bN) / delta) % 6);
        break;
      case gN:
        h = 60 * ((bN - rN) / delta + 2);
        break;
      case bN:
        h = 60 * ((rN - gN) / delta + 4);
        break;
      default:
        break;
    }
  }

  if (h < 0) h += 360;

  return {
    h,
    s: s * 100,
    l: l * 100,
  };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
  const sN = clamp(s, 0, 100) / 100;
  const lN = clamp(l, 0, 100) / 100;
  const c = (1 - Math.abs(2 * lN - 1)) * sN;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lN - c / 2;

  let rN = 0;
  let gN = 0;
  let bN = 0;

  if (h >= 0 && h < 60) {
    rN = c;
    gN = x;
  } else if (h >= 60 && h < 120) {
    rN = x;
    gN = c;
  } else if (h >= 120 && h < 180) {
    gN = c;
    bN = x;
  } else if (h >= 180 && h < 240) {
    gN = x;
    bN = c;
  } else if (h >= 240 && h < 300) {
    rN = x;
    bN = c;
  } else {
    rN = c;
    bN = x;
  }

  return {
    r: (rN + m) * 255,
    g: (gN + m) * 255,
    b: (bN + m) * 255,
  };
}

export function normalizeHex(color: string): string | null {
  if (!color) return null;

  const trimmed = color.trim();
  if (!trimmed.startsWith('#')) return null;

  const rgb = hexToRgb(trimmed);
  if (!rgb) return null;

  return rgbToHex(rgb).toLowerCase();
}

export function formatHsl(hsl: HSL): string {
  return `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`;
}

export function parseHsl(color: string): HSLA | null {
  const trimmed = color.trim();
  const wrapperMatch = /^hsla?\((.*)\)$/i.exec(trimmed);
  if (!wrapperMatch) return null;

  const inner = wrapperMatch[1].trim();

  // Numeric token without ambiguous backtracking: an optional sign, then either
  // digits with an optional decimal part, or a leading-dot decimal.
  const NUM = '[+-]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)';

  const commaMatch = new RegExp(
    `^(${NUM})(?:deg)?\\s*,\\s*(${NUM})%\\s*,\\s*(${NUM})%\\s*(?:,\\s*(${NUM}%?)\\s*)?$`,
    'i',
  ).exec(inner);

  const spaceMatch = new RegExp(
    `^(${NUM})(?:deg)?\\s+(${NUM})%\\s+(${NUM})%\\s*(?:/\\s*(${NUM}%?)\\s*)?$`,
    'i',
  ).exec(inner);

  const match = commaMatch ?? spaceMatch;
  if (!match) return null;

  const h = Number(match[1]);
  const s = Number(match[2]);
  const l = Number(match[3]);

  if ([h, s, l].some(v => Number.isNaN(v))) return null;
  if (s < 0 || s > 100 || l < 0 || l > 100) return null;

  let a = 1;
  const alphaRaw = match[4];
  if (alphaRaw) {
    if (alphaRaw.endsWith('%')) {
      a = Number(alphaRaw.slice(0, -1)) / 100;
    } else {
      a = Number(alphaRaw);
    }

    if (Number.isNaN(a) || a < 0 || a > 1) return null;
  }

  return {
    h: ((h % 360) + 360) % 360,
    s,
    l,
    a,
  };
}

export function randomHexColor(): string {
  // Cosmetic color generator, not security-sensitive — Math.random is fine here.
  // eslint-disable-next-line sonarjs/pseudo-random
  const value = Math.floor(Math.random() * 0xffffff);
  return `#${value.toString(16).padStart(6, '0')}`;
}
