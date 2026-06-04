// ---------------------------------------------------------------------------
// Load / read helpers
// ---------------------------------------------------------------------------

export type LoadImageOptions = {
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  errorMessage?: string;
};

export type ReadFileAsDataUrlOptions = {
  errorMessage?: string;
};

// ---------------------------------------------------------------------------
// Canvas
// ---------------------------------------------------------------------------

export type GetImageDataOptions = {
  maxDimension?: number;
  crossOrigin?: LoadImageOptions['crossOrigin'];
  errorMessage?: string;
};

// ---------------------------------------------------------------------------
// WebP conversion
// ---------------------------------------------------------------------------

export type ConvertImageFileToWebpErrorMessages = {
  fileLoadErrorMessage: string;
  imageLoadErrorMessage: string;
  canvasNotSupportedErrorMessage: string;
  webpGenerationErrorMessage: string;
};

export type ConvertImageFileToWebpSmartOptions =
  ConvertImageFileToWebpErrorMessages & {
    initialQuality: number;
    minQuality?: number;
    step?: number;
  };

export type ConvertImageFileToWebpSmartResult = {
  blob: Blob;
  usedQuality: number;
};

// ---------------------------------------------------------------------------
// WebP queue
// ---------------------------------------------------------------------------

export type WebpQueueItemStatus = 'pending' | 'processing' | 'done' | 'error';

export type WebpQueueItem = {
  id: string;
  file: File;
  inputSize: number;
  outputSize?: number;
  ratio?: number;
  status: WebpQueueItemStatus;
  error?: string;
  downloadUrl?: string;
  previewUrl?: string;
  downloaded?: boolean;
  usedQuality?: number;
};

// ---------------------------------------------------------------------------
// WebP report
// ---------------------------------------------------------------------------

export type WebpConversionReportItem = {
  inputSize: number;
  outputSize?: number;
};

export type WebpConversionReportLabels = {
  conversionReport: string;
  fileCount: string;
  totalSizeBefore: string;
  totalSizeAfter: string;
  savedWeight: string;
  weightDifference: string;
  less: string;
  more: string;
};

export type WebpConversionCsvReportItem = {
  name: string;
  inputSize: number;
  outputSize?: number;
  ratio?: number;
  usedQuality?: number;
  status: string;
  error?: string;
};

// ---------------------------------------------------------------------------
// Image resize tool
// ---------------------------------------------------------------------------

export type ResizeMode = 'pixels' | 'preset';
export type OutputFormat = 'jpg' | 'png' | 'webp';
export type GridColor = 'emerald' | 'white' | 'black' | 'red' | 'yellow';
export type ActiveTool =
  | 'dimensions'
  | 'presets'
  | 'shapes'
  | 'zoom'
  | 'position'
  | 'grid';

export type ShapeType = 'rect' | 'square' | 'circle';
export type ShapeAspect =
  | '1:1'
  | '4:5'
  | '5:4'
  | '3:2'
  | '2:3'
  | '16:9'
  | '9:16';

export type Dims = {
  width: number;
  height: number;
};

// ---------------------------------------------------------------------------
// Favicon
// ---------------------------------------------------------------------------

export type FaviconOutputFile = {
  id: string;
  label: string;
  size: number | 'ico';
  type: 'png' | 'ico';
  fileName: string;
  sizeBytes: number;
  url: string;
};
