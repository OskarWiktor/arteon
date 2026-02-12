import { loadImage } from '@/utils/loadImage';
import type { GetImageDataOptions } from '@/types/tools/image';
export type { GetImageDataOptions } from '@/types/tools/image';

export async function getDownscaledImageDataFromUrl(url: string, options?: GetImageDataOptions): Promise<ImageData> {
  const img = await loadImage(url, {
    crossOrigin: options?.crossOrigin,
    errorMessage: options?.errorMessage ?? 'Failed to load image.',
  });

  const naturalWidth = img.naturalWidth || img.width;
  const naturalHeight = img.naturalHeight || img.height;

  if (!naturalWidth || !naturalHeight) {
    throw new Error('Invalid image dimensions.');
  }

  const maxDimension = options?.maxDimension ?? 240;
  const scale = Math.min(1, maxDimension / Math.max(naturalWidth, naturalHeight));
  const targetWidth = Math.max(1, Math.round(naturalWidth * scale));
  const targetHeight = Math.max(1, Math.round(naturalHeight * scale));

  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Canvas is not supported.');
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

  return ctx.getImageData(0, 0, targetWidth, targetHeight);
}
