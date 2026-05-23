import type { FieldMetrics } from '@/types/tools/text';
export type { LengthStatus, FieldMetrics } from '@/types/tools/text';

const TITLE_FONT = '400 20px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const DESCRIPTION_FONT =
  '300 15px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

let measureCanvas: HTMLCanvasElement | null = null;

function countWords(text: string): number {
  return text ? text.split(/\s+/).filter(Boolean).length : 0;
}

function measureTextWidth(text: string, font: string, fallbackAvgPx: number): number {
  if (!text) return 0;

  if (typeof document === 'undefined') {
    return Math.round(text.length * fallbackAvgPx);
  }

  if (!measureCanvas) {
    measureCanvas = document.createElement('canvas');
  }

  const context = measureCanvas.getContext('2d');
  if (!context) {
    return Math.round(text.length * fallbackAvgPx);
  }

  context.font = font;
  const metrics = context.measureText(text);
  return Math.round(metrics.width);
}

function analyzeField(
  text: string,
  font: string,
  fallbackAvgPx: number,
  thresholds: {
    tooShort: { chars: number; pixels: number };
    tooLong: { chars: number; pixels: number };
  },
): FieldMetrics {
  const trimmed = text.trim();
  const chars = trimmed.length;
  const words = countWords(trimmed);
  const pixels = measureTextWidth(trimmed, font, fallbackAvgPx);

  if (!chars) {
    return { chars, words, pixels, status: 'empty' };
  }

  const isTooShort = chars < thresholds.tooShort.chars || pixels < thresholds.tooShort.pixels;
  const isTooLong = chars > thresholds.tooLong.chars || pixels > thresholds.tooLong.pixels;

  if (isTooShort) {
    return { chars, words, pixels, status: 'too-short' };
  }

  if (isTooLong) {
    return { chars, words, pixels, status: 'too-long' };
  }

  return { chars, words, pixels, status: 'ideal' };
}

export function analyzeMetaTitle(text: string): FieldMetrics {
  return analyzeField(text, TITLE_FONT, 9, {
    tooShort: { chars: 35, pixels: 350 },
    tooLong: { chars: 65, pixels: 580 },
  });
}

export function analyzeMetaDescription(text: string): FieldMetrics {
  return analyzeField(text, DESCRIPTION_FONT, 5.8, {
    tooShort: { chars: 100, pixels: 430 },
    tooLong: { chars: 165, pixels: 920 },
  });
}

export function truncateForPreview(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars - 1).trimEnd() + '…';
}
