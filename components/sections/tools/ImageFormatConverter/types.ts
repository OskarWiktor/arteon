export type ImageFormat = 'jpg' | 'png' | 'webp' | 'gif' | 'bmp' | 'svg' | 'avif' | 'heic' | 'tiff';
export type OutputFormat = 'jpg' | 'png' | 'webp' | 'avif' | 'gif' | 'tiff';

export type ConversionFileStatus = 'pending' | 'processing' | 'done' | 'error';

export interface ConversionFile {
  id: string;
  file: File;
  status: ConversionFileStatus;
  outputBlob: Blob | null;
  outputUrl: string | null;
  inputSize: number;
  outputSize: number;
  errorMessage: string | null;
}

export interface ImageFormatConverterProps {
  sourceFormat: ImageFormat;
  targetFormat: OutputFormat;
  acceptMime: string;
  defaultQuality?: number;
}

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
