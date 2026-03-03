import type { ToolStatus } from '@/types/tools/common';

export type OutputImageFormat = 'jpg' | 'png' | 'webp';

export interface PdfToImageConverterProps {
  targetFormat: OutputImageFormat;
}

export interface PdfPageFile {
  id: string;
  file: File;
  pageIndex: number;
  pageLabel: string;
  status: ToolStatus;
  outputBlob: Blob | null;
  outputUrl: string | null;
  errorMessage: string | null;
}

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
