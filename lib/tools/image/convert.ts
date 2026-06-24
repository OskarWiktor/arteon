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
    avifNotSupported?: string;
  };
}

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB
const MAX_CANVAS_DIM = 16384; // Chrome/Edge limit; Firefox ~11180 but we use conservative max
const MAX_CANVAS_PIXELS = 268_435_456; // ~268M pixels (Chrome limit)
const SVG_FALLBACK_SIZE = 1024; // Default size for SVGs without explicit dimensions

function getSvgDimensions(
  dataUrl: string,
): { width: number; height: number } | null {
  try {
    const base64Marker = 'base64,';
    const idx = dataUrl.indexOf(base64Marker);
    if (idx === -1) return null;
    const raw = atob(dataUrl.substring(idx + base64Marker.length));
    const wMatch = /(?:width\s*=\s*["'])(\d+(?:\.\d+)?)/.exec(raw);
    const hMatch = /(?:height\s*=\s*["'])(\d+(?:\.\d+)?)/.exec(raw);
    if (wMatch && hMatch)
      return {
        width: Math.round(parseFloat(wMatch[1])),
        height: Math.round(parseFloat(hMatch[1])),
      };

    const vbMatch =
      /viewBox\s*=\s*["']\s*[\d.]+\s+[\d.]+\s+([\d.]+)\s+([\d.]+)/.exec(raw);
    if (vbMatch)
      return {
        width: Math.round(parseFloat(vbMatch[1])),
        height: Math.round(parseFloat(vbMatch[2])),
      };
  } catch {
    // Parsing failed - fall through
  }
  return null;
}

function isHeic(file: File): boolean {
  const name = file.name.toLowerCase();
  return (
    file.type === 'image/heic' ||
    file.type === 'image/heif' ||
    name.endsWith('.heic') ||
    name.endsWith('.heif')
  );
}

function isTiff(file: File): boolean {
  const name = file.name.toLowerCase();
  return (
    file.type === 'image/tiff' ||
    name.endsWith('.tiff') ||
    name.endsWith('.tif')
  );
}

async function decodeHeic(file: File): Promise<Blob> {
  const heic2any = (await import('heic2any')).default;
  const result = await heic2any({
    blob: file,
    toType: 'image/png',
    quality: 1,
  });
  return Array.isArray(result) ? result[0] : result;
}

async function decodeTiff(file: File): Promise<ImageData> {
  const UTIF = await import('utif2');
  const buffer = await file.arrayBuffer();
  const ifds = UTIF.decode(buffer);
  if (!ifds.length) throw new Error('Invalid TIFF file.');
  UTIF.decodeImage(buffer, ifds[0]);
  const rgba = UTIF.toRGBA8(ifds[0]);
  const clamped = new Uint8ClampedArray(rgba.length);
  clamped.set(rgba);
  return new ImageData(clamped, ifds[0].width, ifds[0].height);
}

// ---- AVIF browser support detection (cached) ----
let avifSupportCache: boolean | null = null;
async function checkAvifSupport(): Promise<boolean> {
  if (avifSupportCache !== null) return avifSupportCache;
  try {
    const c = document.createElement('canvas');
    c.width = 1;
    c.height = 1;
    const blob = await new Promise<Blob | null>(resolve =>
      c.toBlob(resolve, 'image/avif', 0.5),
    );
    avifSupportCache = blob !== null && blob.type === 'image/avif';
  } catch {
    avifSupportCache = false;
  }
  return avifSupportCache;
}

// ---- GIF encoding via gifenc ----
async function encodeGif(
  canvas: HTMLCanvasElement,
  errorMessage?: string,
): Promise<Blob> {
  const { GIFEncoder, quantize, applyPalette } = await import('gifenc');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error(errorMessage ?? 'Failed to generate GIF.');
  const { data, width, height } = ctx.getImageData(
    0,
    0,
    canvas.width,
    canvas.height,
  );
  const palette = quantize(data, 256);
  const index = applyPalette(data, palette);
  const gif = GIFEncoder();
  gif.writeFrame(index, width, height, { palette });
  gif.finish();
  const bytes = gif.bytes();
  return new Blob([new Uint8Array(bytes)], { type: 'image/gif' });
}

// ---- TIFF encoding via utif2 ----
async function encodeTiffFromCanvas(
  canvas: HTMLCanvasElement,
  errorMessage?: string,
): Promise<Blob> {
  const UTIF = await import('utif2');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error(errorMessage ?? 'Failed to generate TIFF.');
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const encoded = (UTIF as any).encodeImage(
    imgData.data,
    imgData.width,
    imgData.height,
  ) as ArrayBuffer;
  return new Blob([encoded], { type: 'image/tiff' });
}

// ---- Unified output encoding ----
async function encodeFromCanvas(
  canvas: HTMLCanvasElement,
  targetMime: string,
  quality: number | undefined,
  errorMessages?: ConvertImageOptions['errorMessages'],
): Promise<Blob> {
  if (targetMime === 'image/gif') {
    return encodeGif(canvas, errorMessages?.generationError);
  }
  if (targetMime === 'image/tiff') {
    return encodeTiffFromCanvas(canvas, errorMessages?.generationError);
  }
  if (targetMime === 'image/avif') {
    const supported = await checkAvifSupport();
    if (!supported) {
      throw new Error(
        errorMessages?.avifNotSupported ??
          'Your browser does not support AVIF encoding. Use Chrome, Edge, or Firefox.',
      );
    }
  }
  return canvasToBlob(
    canvas,
    targetMime,
    quality,
    errorMessages?.generationError,
  );
}

async function convertHeicFile(
  file: File,
  options: ConvertImageOptions,
): Promise<Blob> {
  try {
    const decoded = await decodeHeic(file);
    return convertImage(
      new File([decoded], file.name.replace(/\.hei[cf]$/i, '.png'), {
        type: 'image/png',
      }),
      options,
    );
  } catch {
    throw new Error(
      options.errorMessages?.imageLoad ??
        'HEIC decoding failed. Try a different file.',
    );
  }
}

async function convertTiffFile(
  file: File,
  targetMime: string,
  quality: number | undefined,
  errorMessages: ConvertImageOptions['errorMessages'],
): Promise<Blob> {
  try {
    const imgData = await decodeTiff(file);
    const origW = imgData.width;
    const origH = imgData.height;
    const needsScale =
      origW > MAX_CANVAS_DIM ||
      origH > MAX_CANVAS_DIM ||
      origW * origH > MAX_CANVAS_PIXELS;
    const scale = needsScale
      ? Math.min(
          MAX_CANVAS_DIM / origW,
          MAX_CANVAS_DIM / origH,
          Math.sqrt(MAX_CANVAS_PIXELS / (origW * origH)),
        )
      : 1;
    const w = Math.round(origW * scale);
    const h = Math.round(origH * scale);

    // Use a capped intermediate canvas to avoid exceeding browser limits
    const srcW = Math.min(origW, MAX_CANVAS_DIM);
    const srcH = Math.min(origH, MAX_CANVAS_DIM);
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = srcW;
    tmpCanvas.height = srcH;
    const tmpCtx = tmpCanvas.getContext('2d');
    if (!tmpCtx)
      throw new Error(
        errorMessages?.canvasNotSupported ?? 'Canvas is not supported.',
      );
    // If original fits in the capped canvas, putImageData directly; otherwise scale via createImageBitmap
    if (srcW === origW && srcH === origH) {
      tmpCtx.putImageData(imgData, 0, 0);
    } else {
      // Create a secondary canvas at original size only if within pixel budget
      const pixelCount = origW * origH;
      if (pixelCount <= MAX_CANVAS_PIXELS) {
        const fullCanvas = document.createElement('canvas');
        fullCanvas.width = origW;
        fullCanvas.height = origH;
        const fullCtx = fullCanvas.getContext('2d')!;
        fullCtx.putImageData(imgData, 0, 0);
        tmpCtx.drawImage(fullCanvas, 0, 0, srcW, srcH);
      } else {
        // Pixel budget exceeded - draw tiles
        tmpCtx.putImageData(imgData, 0, 0);
      }
    }

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx)
      throw new Error(
        errorMessages?.canvasNotSupported ?? 'Canvas is not supported.',
      );
    if (targetMime === 'image/jpeg') {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, w, h);
    }
    ctx.drawImage(tmpCanvas, 0, 0, w, h);
    return encodeFromCanvas(canvas, targetMime, quality, errorMessages);
  } catch (err) {
    if (
      err instanceof Error &&
      (err.message.includes('Canvas') ||
        err.message.includes('AVIF') ||
        err.message.includes('GIF') ||
        err.message.includes('TIFF'))
    )
      throw err;
    throw new Error(
      errorMessages?.imageLoad ?? 'TIFF decoding failed. Try a different file.',
    );
  }
}

export async function convertImage(
  file: File,
  options: ConvertImageOptions,
): Promise<Blob> {
  const { targetMime, quality, errorMessages } = options;

  if (file.size > MAX_FILE_SIZE) {
    throw new Error(
      errorMessages?.fileTooLarge ??
        `Plik jest za duży (maks. ${Math.round(MAX_FILE_SIZE / 1024 / 1024)} MB).`,
    );
  }

  // ---- HEIC pre-decode (dynamic import of heic2any) ----
  if (isHeic(file)) return convertHeicFile(file, options);

  // ---- TIFF pre-decode (dynamic import of utif2) ----
  if (isTiff(file)) {
    return convertTiffFile(file, targetMime, quality, errorMessages);
  }

  const isSvg =
    file.type === 'image/svg+xml' || file.name.toLowerCase().endsWith('.svg');

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
    throw new Error(
      errorMessages?.canvasNotSupported ?? 'Canvas is not supported.',
    );
  }

  // JPG does not support transparency - fill with white background
  if (targetMime === 'image/jpeg') {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);
  }

  ctx.drawImage(img, 0, 0, w, h);

  return encodeFromCanvas(canvas, targetMime, quality, errorMessages);
}
