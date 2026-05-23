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
