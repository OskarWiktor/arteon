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
  | 'pngToWebpSimple';

// ---------------------------------------------------------------------------
// Tool section key - groups tools in navigation / index page
// ---------------------------------------------------------------------------
export type ToolsSectionKey = 'obrazy' | 'seo' | 'email' | 'kolory' | 'druk' | 'konwertery';

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
