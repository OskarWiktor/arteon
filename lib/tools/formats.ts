/**
 * Format utilities and type guards
 * Helper functions for format validation and categorization
 */

// Universal Format Type
export type UniversalFormat =
  | 'jpg'
  | 'png'
  | 'webp'
  | 'gif'
  | 'bmp'
  | 'svg'
  | 'avif'
  | 'heic'
  | 'tiff'
  | 'pdf'
  | 'csv'
  | 'json'
  | 'xml'
  | 'yaml'
  | 'markdown'
  | 'html'
  | 'base64';

export type FormatCategory = 'images' | 'documents' | 'data' | 'units';

// Format Display Labels
export const FORMAT_DISPLAY_LABELS: Record<UniversalFormat, string> = {
  jpg: 'JPG',
  png: 'PNG',
  webp: 'WebP',
  gif: 'GIF',
  bmp: 'BMP',
  svg: 'SVG',
  avif: 'AVIF',
  heic: 'HEIC',
  tiff: 'TIFF',
  pdf: 'PDF',
  csv: 'CSV',
  json: 'JSON',
  xml: 'XML',
  yaml: 'YAML',
  markdown: 'Markdown',
  html: 'HTML',
  base64: 'Base64',
} as const;

// Format Categories
export const FORMAT_CATEGORIES: {
  key: FormatCategory;
  formats: UniversalFormat[];
}[] = [
  {
    key: 'images',
    formats: [
      'jpg',
      'png',
      'webp',
      'avif',
      'gif',
      'bmp',
      'svg',
      'heic',
      'tiff',
    ],
  },
  { key: 'documents', formats: ['pdf'] },
  {
    key: 'data',
    formats: ['csv', 'json', 'xml', 'yaml', 'markdown', 'html', 'base64'],
  },
  { key: 'units', formats: [] },
] as const;

// Format Type Guards
export const IMAGE_FORMATS = new Set(
  FORMAT_CATEGORIES.find(c => c.key === 'images')?.formats || [],
);
export const DOCUMENT_FORMATS = new Set(
  FORMAT_CATEGORIES.find(c => c.key === 'documents')?.formats || [],
);
export const DATA_FORMATS = new Set(
  FORMAT_CATEGORIES.find(c => c.key === 'data')?.formats || [],
);

// Helper Functions
export function isImageFormat(format: string): format is UniversalFormat {
  return IMAGE_FORMATS.has(format as UniversalFormat);
}

export function isDocumentFormat(format: string): format is UniversalFormat {
  return DOCUMENT_FORMATS.has(format as UniversalFormat);
}

export function isDataFormat(format: string): format is UniversalFormat {
  return DATA_FORMATS.has(format as UniversalFormat);
}

export function isValidFormat(format: string): format is UniversalFormat {
  return (
    isImageFormat(format) || isDocumentFormat(format) || isDataFormat(format)
  );
}

export function getFormatCategory(
  format: UniversalFormat,
): FormatCategory | null {
  if (isImageFormat(format)) return 'images';
  if (isDocumentFormat(format)) return 'documents';
  if (isDataFormat(format)) return 'data';
  return null;
}

// Format Priority for Display
export const FORMAT_DISPLAY_PRIORITY = {
  jpg: 1,
  png: 2,
  pdf: 3,
  webp: 4,
  svg: 5,
  gif: 6,
  csv: 7,
  json: 8,
  xml: 9,
  html: 10,
  markdown: 11,
  base64: 12,
  bmp: 13,
  avif: 14,
  heic: 15,
  tiff: 16,
  yaml: 17,
} as const;

// Format File Extensions
export const FORMAT_FILE_EXTENSIONS: Record<UniversalFormat, string> = {
  jpg: '.jpg',
  png: '.png',
  webp: '.webp',
  gif: '.gif',
  bmp: '.bmp',
  svg: '.svg',
  avif: '.avif',
  heic: '.heic',
  tiff: '.tiff',
  pdf: '.pdf',
  csv: '.csv',
  json: '.json',
  xml: '.xml',
  yaml: '.yaml',
  markdown: '.md',
  html: '.html',
  base64: '.txt',
} as const;

// MIME Types
export const FORMAT_MIME_TYPES: Record<UniversalFormat, string> = {
  jpg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  gif: 'image/gif',
  bmp: 'image/bmp',
  svg: 'image/svg+xml',
  avif: 'image/avif',
  heic: 'image/heic',
  tiff: 'image/tiff',
  pdf: 'application/pdf',
  csv: 'text/csv',
  json: 'application/json',
  xml: 'application/xml',
  yaml: 'application/x-yaml',
  markdown: 'text/markdown',
  html: 'text/html',
  base64: 'text/plain',
} as const;

// Validation Constants
export const VALIDATION_RULES = {
  MAX_FILE_SIZE: 50 * 1024 * 1024, // 50MB
  SUPPORTED_FORMATS: new Set(Object.keys(FORMAT_MIME_TYPES)),
  MAX_FILENAME_LENGTH: 255,
} as const;

// Error Messages
export const FORMAT_ERROR_MESSAGES = {
  UNSUPPORTED_FORMAT: 'Nieobsługiwany format pliku',
  FILE_TOO_LARGE: 'Plik jest za duży',
  INVALID_FILENAME: 'Nieprawidłowa nazwa pliku',
  UPLOAD_FAILED: 'Wgrywanie pliku nie powiodło',
} as const;

// Helper function to validate file format
export function validateFileFormat(file: File): {
  valid: boolean;
  format?: UniversalFormat;
  error?: string;
} {
  // Check file extension
  const extension = file.name.toLowerCase().split('.').pop();
  if (!extension) {
    return { valid: false, error: FORMAT_ERROR_MESSAGES.INVALID_FILENAME };
  }

  // Find matching format
  const format = Object.entries(FORMAT_FILE_EXTENSIONS).find(
    ([_, ext]) => ext.toLowerCase() === `.${extension}`,
  )?.[0] as UniversalFormat | undefined;

  if (!format) {
    return { valid: false, error: FORMAT_ERROR_MESSAGES.UNSUPPORTED_FORMAT };
  }

  // Check file size
  if (file.size > VALIDATION_RULES.MAX_FILE_SIZE) {
    return { valid: false, error: FORMAT_ERROR_MESSAGES.FILE_TOO_LARGE };
  }

  return { valid: true, format };
}
