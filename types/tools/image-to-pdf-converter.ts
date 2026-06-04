import type { ToolStatus } from '@/types/tools/common';

export type ImageFormat =
  | 'jpg'
  | 'png'
  | 'webp'
  | 'bmp'
  | 'svg'
  | 'heic'
  | 'tiff';

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
