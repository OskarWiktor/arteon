import QRCode from 'qrcode';
import type { QrOptions, VCardData, EmailData } from '@/types/tools/qr';

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

export { calculateHexContrast as calculateContrast, isHexContrastSufficient as isContrastSufficient } from '@/lib/tools/color/contrast';
