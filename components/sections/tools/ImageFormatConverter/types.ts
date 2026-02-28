export type ImageFormat = 'jpg' | 'png' | 'webp' | 'gif' | 'bmp' | 'svg';
export type OutputFormat = 'jpg' | 'png' | 'webp';

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
};

export const FORMAT_MIME: Record<OutputFormat, string> = {
  jpg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
};

export const FORMAT_EXTENSION: Record<OutputFormat, string> = {
  jpg: '.jpg',
  png: '.png',
  webp: '.webp',
};

export function hasQualitySlider(target: OutputFormat): boolean {
  return target === 'jpg' || target === 'webp';
}
