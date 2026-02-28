import type { Locale } from '@/types/locale';
import type { ToolItemKey } from '@/types/tools/common';
import { getToolHref } from '@/lib/i18n/tool-registry';

import type { ImageFormat, OutputFormat } from './types';

export interface ConversionRouteDef {
  source: ImageFormat;
  target: OutputFormat;
  toolKey: ToolItemKey;
  desktopOnly: boolean;
}

export interface ConversionRoute extends ConversionRouteDef {
  href: string;
}

const CONVERSION_ROUTE_DEFS: ConversionRouteDef[] = [
  { source: 'png', target: 'jpg', toolKey: 'pngToJpg', desktopOnly: false },
  { source: 'jpg', target: 'png', toolKey: 'jpgToPng', desktopOnly: false },
  { source: 'webp', target: 'jpg', toolKey: 'webpToJpg', desktopOnly: false },
  { source: 'webp', target: 'png', toolKey: 'webpToPng', desktopOnly: false },
  { source: 'svg', target: 'png', toolKey: 'svgToPng', desktopOnly: false },
  { source: 'svg', target: 'jpg', toolKey: 'svgToJpg', desktopOnly: false },
  { source: 'bmp', target: 'jpg', toolKey: 'bmpToJpg', desktopOnly: false },
  { source: 'bmp', target: 'png', toolKey: 'bmpToPng', desktopOnly: false },
  { source: 'gif', target: 'png', toolKey: 'gifToPng', desktopOnly: false },
  { source: 'gif', target: 'jpg', toolKey: 'gifToJpg', desktopOnly: false },
  { source: 'jpg', target: 'webp', toolKey: 'jpgToWebpSimple', desktopOnly: true },
  { source: 'png', target: 'webp', toolKey: 'pngToWebpSimple', desktopOnly: true },
  { source: 'svg', target: 'webp', toolKey: 'svgToWebp', desktopOnly: false },
  { source: 'gif', target: 'webp', toolKey: 'gifToWebp', desktopOnly: false },
  { source: 'bmp', target: 'webp', toolKey: 'bmpToWebp', desktopOnly: false },
  { source: 'avif', target: 'jpg', toolKey: 'avifToJpg', desktopOnly: false },
  { source: 'avif', target: 'png', toolKey: 'avifToPng', desktopOnly: false },
  { source: 'avif', target: 'webp', toolKey: 'avifToWebp', desktopOnly: false },
  { source: 'heic', target: 'jpg', toolKey: 'heicToJpg', desktopOnly: false },
  { source: 'heic', target: 'png', toolKey: 'heicToPng', desktopOnly: false },
  { source: 'heic', target: 'webp', toolKey: 'heicToWebp', desktopOnly: false },
  { source: 'tiff', target: 'jpg', toolKey: 'tiffToJpg', desktopOnly: false },
  { source: 'tiff', target: 'png', toolKey: 'tiffToPng', desktopOnly: false },
  { source: 'tiff', target: 'webp', toolKey: 'tiffToWebp', desktopOnly: false },
  // → AVIF target
  { source: 'jpg', target: 'avif', toolKey: 'jpgToAvif', desktopOnly: false },
  { source: 'png', target: 'avif', toolKey: 'pngToAvif', desktopOnly: false },
  { source: 'webp', target: 'avif', toolKey: 'webpToAvif', desktopOnly: false },
  { source: 'svg', target: 'avif', toolKey: 'svgToAvif', desktopOnly: false },
  { source: 'bmp', target: 'avif', toolKey: 'bmpToAvif', desktopOnly: false },
  { source: 'gif', target: 'avif', toolKey: 'gifToAvif', desktopOnly: false },
  { source: 'heic', target: 'avif', toolKey: 'heicToAvif', desktopOnly: false },
  { source: 'tiff', target: 'avif', toolKey: 'tiffToAvif', desktopOnly: false },
  // → GIF target
  { source: 'jpg', target: 'gif', toolKey: 'jpgToGif', desktopOnly: false },
  { source: 'png', target: 'gif', toolKey: 'pngToGif', desktopOnly: false },
  { source: 'webp', target: 'gif', toolKey: 'webpToGif', desktopOnly: false },
  { source: 'svg', target: 'gif', toolKey: 'svgToGif', desktopOnly: false },
  { source: 'bmp', target: 'gif', toolKey: 'bmpToGif', desktopOnly: false },
  // → TIFF target
  { source: 'jpg', target: 'tiff', toolKey: 'jpgToTiff', desktopOnly: false },
  { source: 'png', target: 'tiff', toolKey: 'pngToTiff', desktopOnly: false },
  { source: 'webp', target: 'tiff', toolKey: 'webpToTiff', desktopOnly: false },
  { source: 'svg', target: 'tiff', toolKey: 'svgToTiff', desktopOnly: false },
  { source: 'bmp', target: 'tiff', toolKey: 'bmpToTiff', desktopOnly: false },
  { source: 'avif', target: 'tiff', toolKey: 'avifToTiff', desktopOnly: false },
  { source: 'heic', target: 'tiff', toolKey: 'heicToTiff', desktopOnly: false },
];

export function getConversionRoutes(locale: Locale): ConversionRoute[] {
  return CONVERSION_ROUTE_DEFS.map((def) => ({
    ...def,
    href: getToolHref(def.toolKey, locale),
  })).filter((r) => r.href !== '#');
}

export function getConversionRoute(source: ImageFormat, target: OutputFormat, locale: Locale): ConversionRoute | undefined {
  const href = getToolHref(CONVERSION_ROUTE_DEFS.find((r) => r.source === source && r.target === target)?.toolKey ?? ('pngToJpg' as ToolItemKey), locale);
  const def = CONVERSION_ROUTE_DEFS.find((r) => r.source === source && r.target === target);
  if (!def || href === '#') return undefined;
  return { ...def, href };
}

export const SOURCE_FORMATS: ImageFormat[] = ['jpg', 'png', 'webp', 'svg', 'bmp', 'gif', 'avif', 'heic', 'tiff'];
export const TARGET_FORMATS: OutputFormat[] = ['jpg', 'png', 'webp', 'avif', 'gif', 'tiff'];

export function getAvailableTargets(source: ImageFormat, locale: Locale): OutputFormat[] {
  return getConversionRoutes(locale)
    .filter((r) => r.source === source)
    .map((r) => r.target);
}

export function getAvailableSources(target: OutputFormat, locale: Locale): ImageFormat[] {
  return getConversionRoutes(locale)
    .filter((r) => r.target === target)
    .map((r) => r.source);
}
