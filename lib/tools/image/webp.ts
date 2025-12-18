import { canvasToBlob } from '@/lib/tools/canvasToBlob';
import { loadImage } from '@/lib/tools/loadImage';
import { readFileAsDataUrl } from '@/lib/tools/readFileAsDataUrl';

export type ConvertImageFileToWebpErrorMessages = {
  fileLoadErrorMessage: string;
  imageLoadErrorMessage: string;
  canvasNotSupportedErrorMessage: string;
  webpGenerationErrorMessage: string;
};

export function getWebpFileName(originalFileName: string): string {
  return originalFileName.replace(/\.[^.]+$/, '.webp');
}

export async function convertImageFileToWebp(file: File, quality: number, messages: ConvertImageFileToWebpErrorMessages): Promise<Blob> {
  const dataUrl = await readFileAsDataUrl(file, { errorMessage: messages.fileLoadErrorMessage });
  const img = await loadImage(dataUrl, { errorMessage: messages.imageLoadErrorMessage });

  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error(messages.canvasNotSupportedErrorMessage);
  }

  ctx.drawImage(img, 0, 0);

  return canvasToBlob(canvas, 'image/webp', quality / 100, messages.webpGenerationErrorMessage);
}

export type ConvertImageFileToWebpSmartOptions = ConvertImageFileToWebpErrorMessages & {
  initialQuality: number;
  minQuality?: number;
  step?: number;
};

export type ConvertImageFileToWebpSmartResult = {
  blob: Blob;
  usedQuality: number;
};

export async function convertImageFileToWebpSmart(file: File, originalSize: number, options: ConvertImageFileToWebpSmartOptions): Promise<ConvertImageFileToWebpSmartResult> {
  const minQuality = options.minQuality ?? 60;
  const step = options.step ?? 5;

  let q = options.initialQuality;
  let lastBlob: Blob | null = null;
  let usedQuality = options.initialQuality;

  while (q >= minQuality) {
    const blob = await convertImageFileToWebp(file, q, options);
    lastBlob = blob;
    usedQuality = q;

    if (blob.size <= originalSize || q === minQuality) {
      break;
    }

    q -= step;
  }

  if (!lastBlob) {
    throw new Error(options.webpGenerationErrorMessage);
  }

  return { blob: lastBlob, usedQuality };
}
