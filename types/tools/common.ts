import type { IconType } from 'react-icons';
import type { Locale } from '@/types/locale';

export type ToolStatus = 'idle' | 'processing' | 'done' | 'error';

// ---------------------------------------------------------------------------
// Tool item key - unique identifier for each tool
// ---------------------------------------------------------------------------
export type ToolItemKey =
  | 'jpgToWebp'
  | 'imageResize'
  | 'favicon'
  | 'metaCounter'
  | 'wordCounter'
  | 'loremIpsum'
  | 'emailSignature'
  | 'contrastChecker'
  | 'paletteExtractor'
  | 'colorPalette'
  | 'qrCode'
  | 'pngToJpg'
  | 'jpgToPng'
  | 'webpToJpg'
  | 'webpToPng'
  | 'svgToPng'
  | 'svgToJpg'
  | 'bmpToJpg'
  | 'bmpToPng'
  | 'gifToPng'
  | 'gifToJpg'
  | 'jpgToWebpSimple'
  | 'pngToWebpSimple'
  | 'svgToWebp'
  | 'gifToWebp'
  | 'bmpToWebp'
  | 'avifToJpg'
  | 'avifToPng'
  | 'avifToWebp'
  | 'heicToJpg'
  | 'heicToPng'
  | 'heicToWebp'
  | 'tiffToJpg'
  | 'tiffToPng'
  | 'tiffToWebp'
  | 'jpgToAvif'
  | 'pngToAvif'
  | 'webpToAvif'
  | 'svgToAvif'
  | 'bmpToAvif'
  | 'gifToAvif'
  | 'heicToAvif'
  | 'tiffToAvif'
  | 'jpgToGif'
  | 'pngToGif'
  | 'webpToGif'
  | 'svgToGif'
  | 'bmpToGif'
  | 'jpgToTiff'
  | 'pngToTiff'
  | 'webpToTiff'
  | 'svgToTiff'
  | 'bmpToTiff'
  | 'avifToTiff'
  | 'heicToTiff'
  // PDF converters
  | 'jpgToPdf'
  | 'pngToPdf'
  | 'webpToPdf'
  | 'heicToPdf'
  | 'bmpToPdf'
  | 'tiffToPdf'
  | 'svgToPdf'
  | 'pdfToJpg'
  | 'pdfToPng'
  | 'pdfToWebp'
  // Data converters
  | 'csvToJson'
  | 'jsonToCsv'
  | 'xmlToJson'
  | 'jsonToXml'
  | 'yamlToJson'
  | 'jsonToYaml'
  | 'markdownToHtml'
  | 'htmlToMarkdown'
  // Base64 converters
  | 'imageToBase64'
  | 'base64ToImage'
  // Unit converters - design/graphics
  | 'ptToPx'
  | 'remToPx'
  | 'emToPx'
  | 'cmToPxDpi'
  | 'mmToPxDpi'
  | 'inchesToPxDpi'
  | 'dpiToPpi'
  | 'hexToRgb'
  | 'rgbToHsl'
  | 'rgbToCmyk'
  // Unit converters - programming/technical
  | 'bytesConverter'
  | 'unixTimestamp'
  | 'decToBin'
  | 'decToHex'
  | 'mbpsToMBs'
  | 'vwToPx'
  | 'twToPx';

// ---------------------------------------------------------------------------
// Tool section key - groups tools in navigation / index page
// ---------------------------------------------------------------------------
export type ToolsSectionKey = 'obrazy' | 'seo' | 'email' | 'kolory' | 'druk' | 'konwertery' | 'dokumenty' | 'jednostki';

// ---------------------------------------------------------------------------
// Per-locale text for a single tool (used in nav, carousel, index page)
// ---------------------------------------------------------------------------
export type ToolLocaleText = {
  slug: string;
  title: string;
  description: string;
};

// ---------------------------------------------------------------------------
// Core tool definition - locale-independent
// ---------------------------------------------------------------------------
export type ToolDefinition = {
  key: ToolItemKey;
  section: ToolsSectionKey;
  icon: IconType;
  image: string;
  images?: Partial<Record<Locale, string>>;
  desktopOnly: boolean;
  carouselOrder?: number;
  locales: Partial<Record<Locale, ToolLocaleText>>;
};

// ---------------------------------------------------------------------------
// Per-locale section header text
// ---------------------------------------------------------------------------
export type ToolsSectionLocaleText = {
  title: string;
};

export type ToolsSectionDefinition = {
  key: ToolsSectionKey;
  icon: IconType;
  locales: Partial<Record<Locale, ToolsSectionLocaleText>>;
};

// ---------------------------------------------------------------------------
// Navigation-compatible data structures
// ---------------------------------------------------------------------------
export type ToolSectionItem = {
  key: ToolItemKey;
  href: string;
  title: string;
  description: string;
  image: string;
  icon?: IconType;
  desktopOnly?: boolean;
  carouselOrder?: number;
};

export type ToolsSection = {
  key: ToolsSectionKey;
  title: string;
  icon?: IconType;
  items: ToolSectionItem[];
};

// ---------------------------------------------------------------------------
// EN-specific tool navigation (mirrors PL structure)
// ---------------------------------------------------------------------------
export type ToolSectionItemEN = ToolSectionItem;
export type ToolsSectionEN = ToolsSection;
