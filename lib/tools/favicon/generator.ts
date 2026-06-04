import type { FaviconOutputFile } from '@/types/tools/image';
import { canvasToBlob } from '@/utils/canvasToBlob';
export type { FaviconOutputFile } from '@/types/tools/image';

export function suggestFaviconFileName(size: number | 'ico', type: 'png' | 'ico'): string {
  if (type === 'ico') return 'favicon.ico';

  if (size === 180) return 'apple-touch-icon.png';
  if (size === 192) return 'android-chrome-192x192.png';
  if (size === 512) return 'android-chrome-512x512.png';

  return `favicon-${size}x${size}.png`;
}

async function createPngFromImage(
  img: HTMLImageElement,
  size: number,
  backgroundColor: string,
  transparentBackground: boolean,
  canvasNotSupportedErrorMessage: string,
  pngGenerationErrorMessage: string,
): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error(canvasNotSupportedErrorMessage);
  }

  if (!transparentBackground) {
    ctx.fillStyle = backgroundColor || 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, size, size);
  } else {
    ctx.clearRect(0, 0, size, size);
  }

  const ratio = Math.min(size / img.naturalWidth, size / img.naturalHeight);
  const drawWidth = img.naturalWidth * ratio;
  const drawHeight = img.naturalHeight * ratio;
  const dx = (size - drawWidth) / 2;
  const dy = (size - drawHeight) / 2;

  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, dx, dy, drawWidth, drawHeight);

  return canvasToBlob(canvas, 'image/png', 1, pngGenerationErrorMessage);
}

async function createIcoFromPng(pngBlob: Blob, size: number): Promise<Blob> {
  const pngBuffer = await pngBlob.arrayBuffer();
  const pngBytes = new Uint8Array(pngBuffer);

  const headerSize = 6;
  const entrySize = 16;
  const imageOffset = headerSize + entrySize;
  const totalSize = imageOffset + pngBytes.length;

  const buffer = new ArrayBuffer(totalSize);
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);

  view.setUint16(0, 0, true);
  view.setUint16(2, 1, true);
  view.setUint16(4, 1, true);

  const iconWidth = size === 256 ? 0 : size;
  const iconHeight = iconWidth;

  view.setUint8(6, iconWidth);
  view.setUint8(7, iconHeight);
  view.setUint8(8, 0);
  view.setUint8(9, 0);
  view.setUint16(10, 1, true);
  view.setUint16(12, 32, true);
  view.setUint32(14, pngBytes.length, true);
  view.setUint32(18, imageOffset, true);

  bytes.set(pngBytes, imageOffset);

  return new Blob([buffer], { type: 'image/x-icon' });
}

export async function generateFaviconOutputs(options: {
  img: HTMLImageElement;
  pngSizes: number[];
  includeIco: boolean;
  backgroundColor: string;
  transparentBackground: boolean;
  faviconIcoLabel: string;
  canvasNotSupportedErrorMessage: string;
  pngGenerationErrorMessage: string;
  onOutput?: (output: FaviconOutputFile) => void;
}): Promise<FaviconOutputFile[]> {
  const outputs: FaviconOutputFile[] = [];

  for (const size of options.pngSizes) {
    const pngBlob = await createPngFromImage(
      options.img,
      size,
      options.backgroundColor,
      options.transparentBackground,
      options.canvasNotSupportedErrorMessage,
      options.pngGenerationErrorMessage,
    );
    const url = URL.createObjectURL(pngBlob);
    const fileName = suggestFaviconFileName(size, 'png');

    const output: FaviconOutputFile = {
      id: `${size}-png`,
      label: `${size}x${size} PNG`,
      size,
      type: 'png',
      fileName,
      sizeBytes: pngBlob.size,
      url,
    };

    outputs.push(output);
    options.onOutput?.(output);
  }

  if (options.includeIco) {
    const icoBaseSize = 32;
    const pngBlobForIco = await createPngFromImage(
      options.img,
      icoBaseSize,
      options.backgroundColor,
      options.transparentBackground,
      options.canvasNotSupportedErrorMessage,
      options.pngGenerationErrorMessage,
    );
    const icoBlob = await createIcoFromPng(pngBlobForIco, icoBaseSize);
    const icoUrl = URL.createObjectURL(icoBlob);
    const icoName = suggestFaviconFileName('ico', 'ico');

    const output: FaviconOutputFile = {
      id: 'favicon-ico',
      label: options.faviconIcoLabel,
      size: 'ico',
      type: 'ico',
      fileName: icoName,
      sizeBytes: icoBlob.size,
      url: icoUrl,
    };

    outputs.push(output);
    options.onOutput?.(output);
  }

  return outputs;
}
