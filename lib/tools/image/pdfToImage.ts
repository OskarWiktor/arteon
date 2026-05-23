import type { OutputImageFormat } from '@/types/tools/pdf-to-image-converter';

export const FORMAT_LABELS: Record<OutputImageFormat, string> = {
  jpg: 'JPG',
  png: 'PNG',
  webp: 'WebP',
};

export const FORMAT_MIME: Record<OutputImageFormat, string> = {
  jpg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
};

export const FORMAT_EXT: Record<OutputImageFormat, string> = {
  jpg: '.jpg',
  png: '.png',
  webp: '.webp',
};
