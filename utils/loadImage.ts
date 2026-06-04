import type { LoadImageOptions } from '@/types/tools/image';

export function loadImage(
  url: string,
  options?: LoadImageOptions,
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    if (options?.crossOrigin != null) {
      img.crossOrigin = options.crossOrigin;
    }

    img.onload = () => resolve(img);
    img.onerror = () =>
      reject(new Error(options?.errorMessage ?? 'Failed to load image.'));

    img.src = url;
  });
}
