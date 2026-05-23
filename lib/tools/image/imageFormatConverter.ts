import type { ImageFormat, OutputFormat } from '@/types/tools/image-format-converter';

export const FORMAT_LABELS: Record<ImageFormat, string> = {
  jpg: 'JPG',
  png: 'PNG',
  webp: 'WebP',
  gif: 'GIF',
  bmp: 'BMP',
  svg: 'SVG',
  avif: 'AVIF',
  heic: 'HEIC',
  tiff: 'TIFF',
};

export const FORMAT_MIME: Record<OutputFormat, string> = {
  jpg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  avif: 'image/avif',
  gif: 'image/gif',
  tiff: 'image/tiff',
};

export const FORMAT_EXTENSION: Record<OutputFormat, string> = {
  jpg: '.jpg',
  png: '.png',
  webp: '.webp',
  avif: '.avif',
  gif: '.gif',
  tiff: '.tiff',
};

export function hasQualitySlider(target: OutputFormat): boolean {
  return target === 'jpg' || target === 'webp' || target === 'avif';
}
