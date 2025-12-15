import type { RGB } from '@/lib/tools/color/types';
import { clamp, rgbToHex } from '@/lib/tools/color/convert';

export type ExtractedColor = {
  hex: string;
  rgb: RGB;
  count: number;
};

export type ExtractPaletteOptions = {
  maxColors?: number;
  bucketSize?: number;
  alphaThreshold?: number;
  minDistance?: number;
};

type Bucket = {
  rgb: RGB;
  count: number;
};

function quantizeChannel(value: number, bucketSize: number): number {
  if (bucketSize <= 1) {
    return clamp(Math.round(value), 0, 255);
  }
  const q = Math.floor(value / bucketSize) * bucketSize;
  return clamp(q, 0, 255);
}

function rgbDistance(a: RGB, b: RGB): number {
  const dr = a.r - b.r;
  const dg = a.g - b.g;
  const db = a.b - b.b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

export function extractPalette(imageData: ImageData, options?: ExtractPaletteOptions): ExtractedColor[] {
  const maxColors = options?.maxColors ?? 12;
  const bucketSize = options?.bucketSize ?? 16;
  const alphaThreshold = options?.alphaThreshold ?? 32;
  const minDistance = options?.minDistance ?? 40;

  const data = imageData.data;
  const buckets = new Map<string, Bucket>();

  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a < alphaThreshold) continue;

    const r = quantizeChannel(data[i], bucketSize);
    const g = quantizeChannel(data[i + 1], bucketSize);
    const b = quantizeChannel(data[i + 2], bucketSize);

    const key = `${r},${g},${b}`;
    const existing = buckets.get(key);

    if (existing) {
      existing.count += 1;
    } else {
      buckets.set(key, { rgb: { r, g, b }, count: 1 });
    }
  }

  const sorted = Array.from(buckets.values()).sort((a, b) => b.count - a.count);

  const result: ExtractedColor[] = [];

  for (const bucket of sorted) {
    if (result.length >= maxColors) break;

    const tooClose = result.some((picked) => rgbDistance(picked.rgb, bucket.rgb) < minDistance);
    if (tooClose) continue;

    result.push({
      rgb: bucket.rgb,
      hex: rgbToHex(bucket.rgb).toLowerCase(),
      count: bucket.count,
    });
  }

  return result;
}
