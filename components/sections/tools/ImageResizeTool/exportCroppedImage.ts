import { canvasToBlob } from '@/lib/tools/canvasToBlob';
import { downloadFromUrl } from '@/lib/tools/download';
import { loadImage } from '@/lib/tools/loadImage';
import { getCropRect } from '@/components/sections/tools/ImageResizeTool/cropMath';
import type { Dims, OutputFormat, ShapeType } from '@/components/sections/tools/ImageResizeTool/types';

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

export async function exportCroppedImage(options: ExportCroppedImageOptions): Promise<{ size: number }> {
  const img = await loadImage(options.imageUrl, { errorMessage: options.imageLoadErrorMessage });

  const canvas = document.createElement('canvas');
  canvas.width = options.dims.width;
  canvas.height = options.dims.height;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error(options.canvasNotSupportedErrorMessage);
  }

  const targetAspect = options.dims.width / options.dims.height;
  const crop = getCropRect(options.originalWidth, options.originalHeight, targetAspect, options.cropX, options.cropY, options.cropZoom);

  const W = options.dims.width;
  const H = options.dims.height;

  ctx.save();
  ctx.translate(W / 2, H / 2);

  if (options.shape === 'circle') {
    const r = Math.min(W, H) / 2;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
  }

  ctx.drawImage(img, crop.x, crop.y, crop.cropW, crop.cropH, -W / 2, -H / 2, W, H);
  ctx.restore();

  const mime = getMime(options.outputFormat);
  const blob = await canvasToBlob(canvas, mime, options.outputFormat === 'png' ? undefined : options.outputQuality, options.fileGenerationErrorMessage);

  const url = URL.createObjectURL(blob);
  const filename = `${options.baseName}-${options.dims.width}x${options.dims.height}.${options.outputFormat}`;

  downloadFromUrl(url, filename);
  URL.revokeObjectURL(url);

  return { size: blob.size };
}
