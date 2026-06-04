import { getCropRect } from '@/lib/tools/image/cropMath';
import type { Dims, OutputFormat, ShapeType } from '@/types/tools/image';
import { canvasToBlob } from '@/utils/canvasToBlob';
import { downloadFromUrl } from '@/utils/download';
import { loadImage } from '@/utils/loadImage';

function getMime(outputFormat: OutputFormat): string {
  switch (outputFormat) {
    case 'png':
      return 'image/png';
    case 'webp':
      return 'image/webp';
    case 'jpg':
    default:
      return 'image/jpeg';
  }
}

type ExportCroppedImageOptions = {
  imageUrl: string;
  originalWidth: number;
  originalHeight: number;
  dims: Dims;
  cropX: number;
  cropY: number;
  cropZoom: number;
  shape: ShapeType;
  outputFormat: OutputFormat;
  outputQuality: number;
  baseName: string;
  imageLoadErrorMessage: string;
  canvasNotSupportedErrorMessage: string;
  fileGenerationErrorMessage: string;
};

export async function exportCroppedImage(
  options: ExportCroppedImageOptions,
): Promise<{ size: number }> {
  const img = await loadImage(options.imageUrl, {
    errorMessage: options.imageLoadErrorMessage,
  });

  const W = options.dims.width;
  const H = options.dims.height;

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error(options.canvasNotSupportedErrorMessage);
  }

  const targetAspect = W / H;
  const crop = getCropRect(
    options.originalWidth,
    options.originalHeight,
    targetAspect,
    options.cropX,
    options.cropY,
    options.cropZoom,
  );

  // JPEG has no transparency — fill white background to prevent black areas
  if (options.outputFormat === 'jpg') {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, W, H);
  }

  ctx.save();

  if (options.shape === 'circle') {
    const r = Math.min(W, H) / 2;
    ctx.beginPath();
    ctx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
  }

  ctx.drawImage(img, crop.x, crop.y, crop.cropW, crop.cropH, 0, 0, W, H);
  ctx.restore();

  const mime = getMime(options.outputFormat);
  const blob = await canvasToBlob(
    canvas,
    mime,
    options.outputFormat === 'png' ? undefined : options.outputQuality,
    options.fileGenerationErrorMessage,
  );

  const url = URL.createObjectURL(blob);
  const filename = `${options.baseName}-${options.dims.width}x${options.dims.height}.${options.outputFormat}`;

  downloadFromUrl(url, filename);
  URL.revokeObjectURL(url);

  return { size: blob.size };
}
