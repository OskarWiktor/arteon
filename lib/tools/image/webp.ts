import { canvasToBlob } from '@/utils/canvasToBlob';
import { loadImage } from '@/utils/loadImage';
import { readFileAsDataUrl } from '@/utils/readFileAsDataUrl';

import type {
  ConvertImageFileToWebpErrorMessages,
  ConvertImageFileToWebpSmartOptions,
  ConvertImageFileToWebpSmartResult,
} from '@/types/tools/image';
export type {
  ConvertImageFileToWebpErrorMessages,
  ConvertImageFileToWebpSmartOptions,
  ConvertImageFileToWebpSmartResult,
} from '@/types/tools/image';

export function getWebpFileName(originalFileName: string): string {
  return originalFileName.replace(/\.[^.]+$/, '.webp');
}

const MAX_CANVAS_DIM = 16384;
const MAX_CANVAS_PIXELS = 268_435_456;

export async function convertImageFileToWebp(
  file: File,
  quality: number,
  messages: ConvertImageFileToWebpErrorMessages,
): Promise<Blob> {
  const dataUrl = await readFileAsDataUrl(file, { errorMessage: messages.fileLoadErrorMessage });
  const img = await loadImage(dataUrl, { errorMessage: messages.imageLoadErrorMessage });

  let w = img.naturalWidth || img.width;
  let h = img.naturalHeight || img.height;

  if (!w || !h) {
    throw new Error(messages.imageLoadErrorMessage);
  }

  // Guard: canvas dimension limits to prevent silent failures on very large images
  if (w > MAX_CANVAS_DIM || h > MAX_CANVAS_DIM || w * h > MAX_CANVAS_PIXELS) {
    const scale = Math.min(
      MAX_CANVAS_DIM / w,
      MAX_CANVAS_DIM / h,
      Math.sqrt(MAX_CANVAS_PIXELS / (w * h)),
    );
    w = Math.round(w * scale);
    h = Math.round(h * scale);
  }

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error(messages.canvasNotSupportedErrorMessage);
  }

  ctx.drawImage(img, 0, 0, w, h);

  return canvasToBlob(canvas, 'image/webp', quality / 100, messages.webpGenerationErrorMessage);
}

export async function convertImageFileToWebpSmart(
  file: File,
  originalSize: number,
  options: ConvertImageFileToWebpSmartOptions,
): Promise<ConvertImageFileToWebpSmartResult> {
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
