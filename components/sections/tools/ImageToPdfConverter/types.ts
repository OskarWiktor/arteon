import type { ToolStatus } from '@/types/tools/common';

export type ImageFormat = 'jpg' | 'png' | 'webp' | 'bmp' | 'svg' | 'heic' | 'tiff';

export interface ImageToPdfConverterProps {
  sourceFormat: ImageFormat;
  acceptMime: string;
}

export interface PdfQueueFile {
  id: string;
  file: File;
  status: ToolStatus;
  previewUrl: string | null;
  errorMessage: string | null;
}

export const FORMAT_LABELS: Record<ImageFormat, string> = {
  jpg: 'JPG',
  png: 'PNG',
  webp: 'WebP',
  bmp: 'BMP',
  svg: 'SVG',
  heic: 'HEIC',
  tiff: 'TIFF',
};

export const ACCEPT_MIME: Record<ImageFormat, string> = {
  jpg: 'image/jpeg,.jpg,.jpeg',
  png: 'image/png,.png',
  webp: 'image/webp,.webp',
  bmp: 'image/bmp,image/x-ms-bmp,image/x-bmp,.bmp',
  svg: 'image/svg+xml,.svg',
  heic: 'image/heic,image/heif,.heic,.heif',
  tiff: 'image/tiff,.tiff,.tif',
};
