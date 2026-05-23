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
