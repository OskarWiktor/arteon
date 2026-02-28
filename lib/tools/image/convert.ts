import { canvasToBlob } from '@/utils/canvasToBlob';
import { loadImage } from '@/utils/loadImage';
import { readFileAsDataUrl } from '@/utils/readFileAsDataUrl';

export interface ConvertImageOptions {
  targetMime: string;
  quality?: number;
  errorMessages?: {
    fileLoad?: string;
    imageLoad?: string;
    canvasNotSupported?: string;
    generationError?: string;
    fileTooLarge?: string;
    imageTooLarge?: string;
  };
}

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB
const MAX_CANVAS_DIM = 16384; // Chrome/Edge limit; Firefox ~11180 but we use conservative max
const MAX_CANVAS_PIXELS = 268_435_456; // ~268M pixels (Chrome limit)
const SVG_FALLBACK_SIZE = 1024; // Default size for SVGs without explicit dimensions

function getSvgDimensions(dataUrl: string): { width: number; height: number } | null {
  try {
    const base64Marker = 'base64,';
    const idx = dataUrl.indexOf(base64Marker);
    if (idx === -1) return null;
    const raw = atob(dataUrl.substring(idx + base64Marker.length));
    const wMatch = raw.match(/\bwidth\s*=\s*["'](\d+(?:\.\d+)?)/);
    const hMatch = raw.match(/\bheight\s*=\s*["'](\d+(?:\.\d+)?)/);
    if (wMatch && hMatch) return { width: Math.round(parseFloat(wMatch[1])), height: Math.round(parseFloat(hMatch[1])) };

    const vbMatch = raw.match(/viewBox\s*=\s*["']\s*[\d.]+\s+[\d.]+\s+([\d.]+)\s+([\d.]+)/);
    if (vbMatch) return { width: Math.round(parseFloat(vbMatch[1])), height: Math.round(parseFloat(vbMatch[2])) };
  } catch {
    // Parsing failed — fall through
  }
  return null;
}

export async function convertImage(file: File, options: ConvertImageOptions): Promise<Blob> {
  const { targetMime, quality, errorMessages } = options;

  if (file.size > MAX_FILE_SIZE) {
    throw new Error(errorMessages?.fileTooLarge ?? `Plik jest za duży (maks. ${Math.round(MAX_FILE_SIZE / 1024 / 1024)} MB).`);
  }

  const isSvg = file.type === 'image/svg+xml' || file.name.toLowerCase().endsWith('.svg');

  const dataUrl = await readFileAsDataUrl(file, {
    errorMessage: errorMessages?.fileLoad,
  });

  const img = await loadImage(dataUrl, {
    errorMessage: errorMessages?.imageLoad,
  });

  let w = img.naturalWidth || img.width;
  let h = img.naturalHeight || img.height;

  // SVG fallback: if img reports 0 dimensions, try to parse from SVG source
  if ((!w || !h) && isSvg) {
    const svgDims = getSvgDimensions(dataUrl);
    if (svgDims && svgDims.width > 0 && svgDims.height > 0) {
      w = svgDims.width;
      h = svgDims.height;
    } else {
      w = SVG_FALLBACK_SIZE;
      h = SVG_FALLBACK_SIZE;
    }
  }

  if (!w || !h) {
    throw new Error(errorMessages?.imageLoad ?? 'Invalid image dimensions.');
  }

  // Guard: canvas dimension limits
  if (w > MAX_CANVAS_DIM || h > MAX_CANVAS_DIM || w * h > MAX_CANVAS_PIXELS) {
    const scale = Math.min(MAX_CANVAS_DIM / w, MAX_CANVAS_DIM / h, Math.sqrt(MAX_CANVAS_PIXELS / (w * h)));
    w = Math.round(w * scale);
    h = Math.round(h * scale);
  }

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error(errorMessages?.canvasNotSupported ?? 'Canvas is not supported.');
  }

  // JPG does not support transparency — fill with white background
  if (targetMime === 'image/jpeg') {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);
  }

  ctx.drawImage(img, 0, 0, w, h);

  return canvasToBlob(canvas, targetMime, quality, errorMessages?.generationError);
}
