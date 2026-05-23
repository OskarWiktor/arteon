// ---------------------------------------------------------------------------
// Special converters for non-numeric conversions (colors, timestamps, bases)
// ---------------------------------------------------------------------------

// ── HEX ↔ RGB ──────────────────────────────────────────────────────────────

export function hexToRgb(hex: string): string {
  const h = hex.replace('#', '').trim();
  if (!/^[0-9A-Fa-f]+$/.test(h)) return '';
  let full: string;
  if (h.length === 3)
    full = h
      .split('')
      .map(c => c + c)
      .join('');
  // #RGB → #RRGGBB
  else if (h.length === 4)
    full = h
      .slice(0, 3)
      .split('')
      .map(c => c + c)
      .join('');
  // #RGBA → use RGB
  else if (h.length === 6)
    full = h; // #RRGGBB
  else if (h.length === 8)
    full = h.slice(0, 6); // #RRGGBBAA → use RGB
  else return '';
  const r = parseInt(full.substring(0, 2), 16);
  const g = parseInt(full.substring(2, 4), 16);
  const b = parseInt(full.substring(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return '';
  return `rgb(${r}, ${g}, ${b})`;
}

export function rgbToHex(rgb: string): string {
  const match = rgb.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (!match) return '';
  const [, rs, gs, bs] = match;
  const r = Math.min(255, Math.max(0, parseInt(rs)));
  const g = Math.min(255, Math.max(0, parseInt(gs)));
  const b = Math.min(255, Math.max(0, parseInt(bs)));
  return `#${r.toString(16).padStart(2, '0').toUpperCase()}${g.toString(16).padStart(2, '0').toUpperCase()}${b.toString(16).padStart(2, '0').toUpperCase()}`;
}

// ── RGB ↔ HSL ──────────────────────────────────────────────────────────────

export function rgbToHsl(rgb: string): string {
  const match = rgb.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (!match) return '';
  const r = parseInt(match[1]) / 255;
  const g = parseInt(match[2]) / 255;
  const b = parseInt(match[3]) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

export function hslToRgb(hsl: string): string {
  const match = hsl.match(/(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?/);
  if (!match) return '';
  const h = parseInt(match[1]) / 360;
  const s = parseInt(match[2]) / 100;
  const l = parseInt(match[3]) / 100;

  if (s === 0) {
    const v = Math.round(l * 255);
    return `rgb(${v}, ${v}, ${v})`;
  }

  const hue2rgb = (p: number, q: number, t: number) => {
    let tt = t;
    if (tt < 0) tt += 1;
    if (tt > 1) tt -= 1;
    if (tt < 1 / 6) return p + (q - p) * 6 * tt;
    if (tt < 1 / 2) return q;
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  return `rgb(${Math.round(hue2rgb(p, q, h + 1 / 3) * 255)}, ${Math.round(hue2rgb(p, q, h) * 255)}, ${Math.round(hue2rgb(p, q, h - 1 / 3) * 255)})`;
}

// ── RGB ↔ CMYK ─────────────────────────────────────────────────────────────

export function rgbToCmyk(rgb: string): string {
  const match = rgb.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (!match) return '';
  const r = parseInt(match[1]) / 255;
  const g = parseInt(match[2]) / 255;
  const b = parseInt(match[3]) / 255;

  const k = 1 - Math.max(r, g, b);
  if (k === 1) return 'cmyk(0%, 0%, 0%, 100%)';

  const c = (1 - r - k) / (1 - k);
  const m = (1 - g - k) / (1 - k);
  const y = (1 - b - k) / (1 - k);

  return `cmyk(${Math.round(c * 100)}%, ${Math.round(m * 100)}%, ${Math.round(y * 100)}%, ${Math.round(k * 100)}%)`;
}

export function cmykToRgb(cmyk: string): string {
  const match = cmyk.match(/(\d+)%?\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*,\s*(\d+)%?/);
  if (!match) return '';
  const c = parseInt(match[1]) / 100;
  const m = parseInt(match[2]) / 100;
  const y = parseInt(match[3]) / 100;
  const k = parseInt(match[4]) / 100;

  const r = Math.round(255 * (1 - c) * (1 - k));
  const g = Math.round(255 * (1 - m) * (1 - k));
  const b = Math.round(255 * (1 - y) * (1 - k));

  return `rgb(${r}, ${g}, ${b})`;
}

// ── Decimal ↔ Binary ───────────────────────────────────────────────────────

export function decToBin(dec: string): string {
  const num = parseInt(dec.trim(), 10);
  if (isNaN(num)) return '';
  if (num < 0) return '-' + (-num >>> 0).toString(2);
  return num.toString(2);
}

export function binToDec(bin: string): string {
  const trimmed = bin.trim();
  if (!/^-?[01]+$/.test(trimmed)) return '';
  const isNeg = trimmed.startsWith('-');
  const val = parseInt(isNeg ? trimmed.slice(1) : trimmed, 2);
  return isNeg ? (-val).toString() : val.toString();
}

// ── Decimal ↔ Hexadecimal ──────────────────────────────────────────────────

export function decToHex(dec: string): string {
  const num = parseInt(dec.trim(), 10);
  if (isNaN(num)) return '';
  if (num < 0) return '-' + (-num >>> 0).toString(16).toUpperCase();
  return num.toString(16).toUpperCase();
}

export function hexToDec(hex: string): string {
  const trimmed = hex.replace('#', '').trim();
  if (!/^-?[0-9A-Fa-f]+$/.test(trimmed)) return '';
  const isNeg = trimmed.startsWith('-');
  const val = parseInt(isNeg ? trimmed.slice(1) : trimmed, 16);
  return isNeg ? (-val).toString() : val.toString();
}

// ── Unix Timestamp ↔ Date ──────────────────────────────────────────────────

export function unixToDate(ts: string): string {
  const num = parseInt(ts.trim(), 10);
  if (isNaN(num)) return '';
  const date = new Date(num * 1000);
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export function dateToUnix(dateStr: string): string {
  const d = new Date(dateStr.trim());
  if (isNaN(d.getTime())) return '';
  return Math.floor(d.getTime() / 1000).toString();
}
