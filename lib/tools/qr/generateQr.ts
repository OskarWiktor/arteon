import QRCode from 'qrcode';
import type { QrOptions, VCardData, EmailData } from '@/types/tools/qr';

/** Escape special vCard characters: backslash, semicolon, comma, newline */
function escapeVCard(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

export function buildVCardString(data: VCardData): string {
  const fn = escapeVCard(data.firstName);
  const ln = escapeVCard(data.lastName);
  const lines = ['BEGIN:VCARD', 'VERSION:3.0', `N:${ln};${fn};;;`, `FN:${fn} ${ln}`];

  if (data.organization) lines.push(`ORG:${escapeVCard(data.organization)}`);
  if (data.title) lines.push(`TITLE:${escapeVCard(data.title)}`);
  if (data.phone) lines.push(`TEL:${data.phone.replace(/[^\d+\-() ]/g, '')}`);
  if (data.email) lines.push(`EMAIL:${data.email}`);
  if (data.website) lines.push(`URL:${data.website}`);
  if (data.address) lines.push(`ADR:;;${escapeVCard(data.address)};;;;`);

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

export {
  calculateHexContrast as calculateContrast,
  isHexContrastSufficient as isContrastSufficient,
} from '@/lib/tools/color/contrast';
