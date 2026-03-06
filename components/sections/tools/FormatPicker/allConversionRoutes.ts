import type { Locale } from '@/types/locale';
import type { ToolItemKey } from '@/types/tools/common';
import { getToolHref } from '@/lib/i18n/tool-registry';

// ---------------------------------------------------------------------------
// Universal format identifiers used across ALL converters
// ---------------------------------------------------------------------------

export type UniversalFormat = 'jpg' | 'png' | 'webp' | 'gif' | 'bmp' | 'svg' | 'avif' | 'heic' | 'tiff' | 'pdf' | 'csv' | 'json' | 'xml' | 'yaml' | 'markdown' | 'html' | 'base64';

export type FormatCategory = 'images' | 'documents' | 'data' | 'units';

export const FORMAT_CATEGORIES: { key: FormatCategory; formats: UniversalFormat[] }[] = [
  { key: 'images', formats: ['jpg', 'png', 'webp', 'avif', 'gif', 'bmp', 'svg', 'heic', 'tiff'] },
  { key: 'documents', formats: ['pdf'] },
  { key: 'data', formats: ['csv', 'json', 'xml', 'yaml', 'markdown', 'html', 'base64'] },
  { key: 'units', formats: [] },
];

export const FORMAT_DISPLAY_LABELS: Record<UniversalFormat, string> = {
  jpg: 'JPG',
  png: 'PNG',
  webp: 'WebP',
  gif: 'GIF',
  bmp: 'BMP',
  svg: 'SVG',
  avif: 'AVIF',
  heic: 'HEIC',
  tiff: 'TIFF',
  pdf: 'PDF',
  csv: 'CSV',
  json: 'JSON',
  xml: 'XML',
  yaml: 'YAML',
  markdown: 'Markdown',
  html: 'HTML',
  base64: 'Base64',
};

// Category labels per locale
export const CATEGORY_LABELS: Record<FormatCategory, Record<string, string>> = {
  images: {
    pl: 'Obrazy',
    en: 'Images',
    de: 'Bilder',
    es: 'Imágenes',
    fr: 'Images',
    pt: 'Imagens',
    it: 'Immagini',
    ro: 'Imagini',
    nl: 'Afbeeldingen',
    hu: 'Képek',
    cs: 'Obrázky',
    sv: 'Bilder',
    da: 'Billeder',
    no: 'Bilder',
    fi: 'Kuvat',
    el: 'Εικόνες',
  },
  documents: {
    pl: 'Dokumenty',
    en: 'Documents',
    de: 'Dokumente',
    es: 'Documentos',
    fr: 'Documents',
    pt: 'Documentos',
    it: 'Documenti',
    ro: 'Documente',
    nl: 'Documenten',
    hu: 'Dokumentumok',
    cs: 'Dokumenty',
    sv: 'Dokument',
    da: 'Dokumenter',
    no: 'Dokumenter',
    fi: 'Asiakirjat',
    el: 'Έγγραφα',
  },
  data: {
    pl: 'Dane',
    en: 'Data',
    de: 'Daten',
    es: 'Datos',
    fr: 'Données',
    pt: 'Dados',
    it: 'Dati',
    ro: 'Date',
    nl: 'Data',
    hu: 'Adatok',
    cs: 'Data',
    sv: 'Data',
    da: 'Data',
    no: 'Data',
    fi: 'Data',
    el: 'Δεδομένα',
  },
  units: {
    pl: 'Jednostki',
    en: 'Units',
    de: 'Einheiten',
    es: 'Unidades',
    fr: 'Unités',
    pt: 'Unidades',
    it: 'Unità',
    ro: 'Unități',
    nl: 'Eenheden',
    hu: 'Mértékegységek',
    cs: 'Jednotky',
    sv: 'Enheter',
    da: 'Enheder',
    no: 'Enheter',
    fi: 'Yksiköt',
    el: 'Μονάδες',
  },
};

// ---------------------------------------------------------------------------
// Complete conversion map: (source, target) → toolKey
// ---------------------------------------------------------------------------

interface ConversionDef {
  source: UniversalFormat;
  target: UniversalFormat;
  toolKey: ToolItemKey;
}

const ALL_CONVERSION_DEFS: ConversionDef[] = [
  // ── Image → Image ──
  { source: 'png', target: 'jpg', toolKey: 'pngToJpg' },
  { source: 'jpg', target: 'png', toolKey: 'jpgToPng' },
  { source: 'webp', target: 'jpg', toolKey: 'webpToJpg' },
  { source: 'webp', target: 'png', toolKey: 'webpToPng' },
  { source: 'svg', target: 'png', toolKey: 'svgToPng' },
  { source: 'svg', target: 'jpg', toolKey: 'svgToJpg' },
  { source: 'bmp', target: 'jpg', toolKey: 'bmpToJpg' },
  { source: 'bmp', target: 'png', toolKey: 'bmpToPng' },
  { source: 'gif', target: 'png', toolKey: 'gifToPng' },
  { source: 'gif', target: 'jpg', toolKey: 'gifToJpg' },
  { source: 'jpg', target: 'webp', toolKey: 'jpgToWebpSimple' },
  { source: 'png', target: 'webp', toolKey: 'pngToWebpSimple' },
  { source: 'svg', target: 'webp', toolKey: 'svgToWebp' },
  { source: 'gif', target: 'webp', toolKey: 'gifToWebp' },
  { source: 'bmp', target: 'webp', toolKey: 'bmpToWebp' },
  { source: 'avif', target: 'jpg', toolKey: 'avifToJpg' },
  { source: 'avif', target: 'png', toolKey: 'avifToPng' },
  { source: 'avif', target: 'webp', toolKey: 'avifToWebp' },
  { source: 'heic', target: 'jpg', toolKey: 'heicToJpg' },
  { source: 'heic', target: 'png', toolKey: 'heicToPng' },
  { source: 'heic', target: 'webp', toolKey: 'heicToWebp' },
  { source: 'tiff', target: 'jpg', toolKey: 'tiffToJpg' },
  { source: 'tiff', target: 'png', toolKey: 'tiffToPng' },
  { source: 'tiff', target: 'webp', toolKey: 'tiffToWebp' },
  { source: 'jpg', target: 'avif', toolKey: 'jpgToAvif' },
  { source: 'png', target: 'avif', toolKey: 'pngToAvif' },
  { source: 'webp', target: 'avif', toolKey: 'webpToAvif' },
  { source: 'svg', target: 'avif', toolKey: 'svgToAvif' },
  { source: 'bmp', target: 'avif', toolKey: 'bmpToAvif' },
  { source: 'gif', target: 'avif', toolKey: 'gifToAvif' },
  { source: 'heic', target: 'avif', toolKey: 'heicToAvif' },
  { source: 'tiff', target: 'avif', toolKey: 'tiffToAvif' },
  { source: 'jpg', target: 'gif', toolKey: 'jpgToGif' },
  { source: 'png', target: 'gif', toolKey: 'pngToGif' },
  { source: 'webp', target: 'gif', toolKey: 'webpToGif' },
  { source: 'svg', target: 'gif', toolKey: 'svgToGif' },
  { source: 'bmp', target: 'gif', toolKey: 'bmpToGif' },
  { source: 'jpg', target: 'tiff', toolKey: 'jpgToTiff' },
  { source: 'png', target: 'tiff', toolKey: 'pngToTiff' },
  { source: 'webp', target: 'tiff', toolKey: 'webpToTiff' },
  { source: 'svg', target: 'tiff', toolKey: 'svgToTiff' },
  { source: 'bmp', target: 'tiff', toolKey: 'bmpToTiff' },
  { source: 'avif', target: 'tiff', toolKey: 'avifToTiff' },
  { source: 'heic', target: 'tiff', toolKey: 'heicToTiff' },

  // ── Image → PDF ──
  { source: 'jpg', target: 'pdf', toolKey: 'jpgToPdf' },
  { source: 'png', target: 'pdf', toolKey: 'pngToPdf' },
  { source: 'webp', target: 'pdf', toolKey: 'webpToPdf' },
  { source: 'bmp', target: 'pdf', toolKey: 'bmpToPdf' },
  { source: 'svg', target: 'pdf', toolKey: 'svgToPdf' },
  { source: 'heic', target: 'pdf', toolKey: 'heicToPdf' },
  { source: 'tiff', target: 'pdf', toolKey: 'tiffToPdf' },

  // ── PDF → Image ──
  { source: 'pdf', target: 'jpg', toolKey: 'pdfToJpg' },
  { source: 'pdf', target: 'png', toolKey: 'pdfToPng' },
  { source: 'pdf', target: 'webp', toolKey: 'pdfToWebp' },

  // ── Data ↔ Data ──
  { source: 'csv', target: 'json', toolKey: 'csvToJson' },
  { source: 'json', target: 'csv', toolKey: 'jsonToCsv' },
  { source: 'xml', target: 'json', toolKey: 'xmlToJson' },
  { source: 'json', target: 'xml', toolKey: 'jsonToXml' },
  { source: 'yaml', target: 'json', toolKey: 'yamlToJson' },
  { source: 'json', target: 'yaml', toolKey: 'jsonToYaml' },
  { source: 'markdown', target: 'html', toolKey: 'markdownToHtml' },
  { source: 'html', target: 'markdown', toolKey: 'htmlToMarkdown' },

  // ── Base64 ──
  { source: 'jpg', target: 'base64', toolKey: 'imageToBase64' },
  { source: 'png', target: 'base64', toolKey: 'imageToBase64' },
  { source: 'webp', target: 'base64', toolKey: 'imageToBase64' },
  { source: 'base64', target: 'jpg', toolKey: 'base64ToImage' },
  { source: 'base64', target: 'png', toolKey: 'base64ToImage' },
  { source: 'base64', target: 'webp', toolKey: 'base64ToImage' },
];

export interface ResolvedRoute {
  source: UniversalFormat;
  target: UniversalFormat;
  toolKey: ToolItemKey;
  href: string;
}

/** Resolve a single conversion pair to a route href for the given locale */
export function getConversionHref(source: UniversalFormat, target: UniversalFormat, locale: Locale): string | null {
  const def = ALL_CONVERSION_DEFS.find((d) => d.source === source && d.target === target);
  if (!def) return null;
  const href = getToolHref(def.toolKey, locale);
  return href === '#' ? null : href;
}

/** Get all resolved routes for a given locale */
export function getAllRoutes(locale: Locale): ResolvedRoute[] {
  return ALL_CONVERSION_DEFS.map((def) => ({
    ...def,
    href: getToolHref(def.toolKey, locale),
  })).filter((r) => r.href !== '#');
}

/** Get all formats that a given source can convert TO (with active routes) */
export function getAvailableTargets(source: UniversalFormat, locale: Locale): UniversalFormat[] {
  return getAllRoutes(locale)
    .filter((r) => r.source === source)
    .map((r) => r.target);
}

/** Get all formats that can convert FROM to a given target (with active routes) */
export function getAvailableSources(target: UniversalFormat, locale: Locale): UniversalFormat[] {
  return getAllRoutes(locale)
    .filter((r) => r.target === target)
    .map((r) => r.source);
}

/** Look up source/target for a given toolKey */
export function getConversionByToolKey(toolKey: string): { source: UniversalFormat; target: UniversalFormat } | null {
  const def = ALL_CONVERSION_DEFS.find((d) => d.toolKey === toolKey);
  return def ? { source: def.source, target: def.target } : null;
}

/** Get all converters that share the same target format (excluding the current one) */
export function getConvertersToSameTarget(toolKey: string, locale: Locale): ResolvedRoute[] {
  const current = ALL_CONVERSION_DEFS.find((d) => d.toolKey === toolKey);
  if (!current) return [];
  return getAllRoutes(locale).filter((r) => r.target === current.target && r.toolKey !== toolKey);
}

/** Get all converters that share the same source format (excluding the current one) */
export function getConvertersFromSameSource(toolKey: string, locale: Locale): ResolvedRoute[] {
  const current = ALL_CONVERSION_DEFS.find((d) => d.toolKey === toolKey);
  if (!current) return [];
  return getAllRoutes(locale).filter((r) => r.source === current.source && r.toolKey !== toolKey);
}
