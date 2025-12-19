import QRCode from 'qrcode';

export type QrDataType = 'url' | 'text' | 'vcard' | 'email' | 'phone';

export type QrOptions = {
  data: string;
  size: number;
  margin: number;
  darkColor: string;
  lightColor: string;
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
};

export type VCardData = {
  firstName: string;
  lastName: string;
  organization?: string;
  title?: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
};

export type EmailData = {
  to: string;
  subject?: string;
  body?: string;
};

export function buildVCardString(data: VCardData): string {
  const lines = ['BEGIN:VCARD', 'VERSION:3.0', `N:${data.lastName};${data.firstName};;;`, `FN:${data.firstName} ${data.lastName}`];

  if (data.organization) lines.push(`ORG:${data.organization}`);
  if (data.title) lines.push(`TITLE:${data.title}`);
  if (data.phone) lines.push(`TEL:${data.phone}`);
  if (data.email) lines.push(`EMAIL:${data.email}`);
  if (data.website) lines.push(`URL:${data.website}`);
  if (data.address) lines.push(`ADR:;;${data.address};;;;`);

  lines.push('END:VCARD');
  return lines.join('\n');
}

export function buildEmailString(data: EmailData): string {
  const params: string[] = [];
  if (data.subject) params.push(`subject=${encodeURIComponent(data.subject)}`);
  if (data.body) params.push(`body=${encodeURIComponent(data.body)}`);
  const query = params.length > 0 ? `?${params.join('&')}` : '';
  return `mailto:${data.to}${query}`;
}

export function buildPhoneString(phone: string): string {
  return `tel:${phone.replace(/\s+/g, '')}`;
}

export async function generateQrPng(options: QrOptions): Promise<string> {
  const dataUrl = await QRCode.toDataURL(options.data, {
    width: options.size,
    margin: options.margin,
    color: {
      dark: options.darkColor,
      light: options.lightColor,
    },
    errorCorrectionLevel: options.errorCorrectionLevel,
  });
  return dataUrl;
}

export async function generateQrSvg(options: QrOptions): Promise<string> {
  const svg = await QRCode.toString(options.data, {
    type: 'svg',
    width: options.size,
    margin: options.margin,
    color: {
      dark: options.darkColor,
      light: options.lightColor,
    },
    errorCorrectionLevel: options.errorCorrectionLevel,
  });
  return svg;
}

export function calculateContrast(hex1: string, hex2: string): number {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  const [r, g, b] = rgb.map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

export function isContrastSufficient(hex1: string, hex2: string): boolean {
  return calculateContrast(hex1, hex2) >= 3;
}
