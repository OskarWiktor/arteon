import { LOCALE_CONFIG } from '@/lib/i18n/locales';
import type { Locale, LocaleConfig } from '@/types/locale';
import type {
  ToolItemKey,
  ToolDefinition,
  ToolSectionItem,
  ToolsSection,
} from '@/types/tools/common';
import { TOOL_SECTIONS, TOOL_REGISTRY } from './toolRegistryData';

export { TOOL_SECTIONS, TOOL_REGISTRY };
export type {
  ToolItemKey,
  ToolsSectionKey,
  ToolLocaleText,
  ToolDefinition,
  ToolsSectionLocaleText,
  ToolsSectionDefinition,
  ToolSectionItem,
  ToolsSection,
} from '@/types/tools/common';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Get the full href for a tool in a given locale, e.g. `/narzedzia/generator-palet-kolorow` */
export function getToolHref(key: ToolItemKey, locale: Locale): string {
  const tool = TOOL_REGISTRY.find(t => t.key === key);
  if (!tool) return '#';
  const localeText = tool.locales[locale];
  if (!localeText) return '#';
  const config = LOCALE_CONFIG[locale];
  return `${config.toolsBasePath}/${localeText.slug}`;
}

/** Get a tool definition by its key */
export function getToolByKey(key: ToolItemKey): ToolDefinition | undefined {
  return TOOL_REGISTRY.find(t => t.key === key);
}

/** Get the localized title for a tool */
export function getToolTitle(key: ToolItemKey, locale: Locale): string {
  const tool = TOOL_REGISTRY.find(t => t.key === key);
  if (!tool) return key;
  return tool.locales[locale]?.title ?? key;
}

/** Find a tool by its slug in any locale, returns the tool + matched locale */
export function findToolBySlug(
  slug: string,
): { tool: ToolDefinition; locale: Locale } | null {
  for (const tool of TOOL_REGISTRY) {
    for (const [loc, text] of Object.entries(tool.locales)) {
      if (text.slug === slug) return { tool, locale: loc as Locale };
    }
  }
  return null;
}

const LEGAL_PAGE_HREF_KEYS = [
  'aboutHref',
  'contactHref',
  'privacyHref',
  'termsHref',
] as const;

/** Match `currentPath` against one locale-config href key and return its alternate, if any */
function matchLegalPageHref(
  currentPath: string,
  fromConfig: LocaleConfig,
  toConfig: LocaleConfig,
  key: (typeof LEGAL_PAGE_HREF_KEYS)[number],
): string | null {
  const fromHref = fromConfig[key];
  const toHref = toConfig[key];
  return fromHref && currentPath === fromHref && toHref ? toHref : null;
}

/**
 * Given a path and current locale, return the alternate href for a target locale.
 * Works for both tool index and individual tool pages.
 */
export function getAlternateToolHref(
  currentPath: string,
  fromLocale: Locale,
  toLocale: Locale,
): string | null {
  const fromConfig = LOCALE_CONFIG[fromLocale];
  const toConfig = LOCALE_CONFIG[toLocale];

  // Tool index page
  if (currentPath === fromConfig.toolsIndexHref) {
    return toConfig.toolsIndexHref;
  }

  // Individual tool page - extract slug from path
  const prefix = fromConfig.toolsBasePath + '/';
  if (currentPath.startsWith(prefix)) {
    const slug = currentPath.slice(prefix.length).split('/')[0];
    const found = findToolBySlug(slug);
    if (found) {
      const targetSlug = found.tool.locales[toLocale]?.slug;
      if (targetSlug) return `${toConfig.toolsBasePath}/${targetSlug}`;
    }
  }

  // Non-tool pages: about, contact, privacy, terms
  for (const key of LEGAL_PAGE_HREF_KEYS) {
    const match = matchLegalPageHref(currentPath, fromConfig, toConfig, key);
    if (match) return match;
  }

  // Homepage
  const fromHome = fromLocale === 'pl' ? '/' : `/${fromLocale}`;
  if (currentPath === fromHome) {
    return toLocale === 'pl' ? '/' : `/${toLocale}`;
  }

  return null;
}

// ---------------------------------------------------------------------------
// Navigation-compatible data structures
// (used by DesktopNavigation, MobileNavigation, Footer, ToolsCarousel)
// ---------------------------------------------------------------------------

/** Build navigation-compatible tool sections for a given locale */
export function getToolsSections(locale: Locale): ToolsSection[] {
  return TOOL_SECTIONS.filter(section => section.locales[locale]).map(
    section => ({
      key: section.key,
      title: section.locales[locale]!.title,
      icon: section.icon,
      items: TOOL_REGISTRY.filter(
        t => t.section === section.key && t.locales[locale],
      )
        .map(tool => ({
          key: tool.key,
          href: getToolHref(tool.key, locale),
          title: tool.locales[locale]!.title,
          description: tool.locales[locale]!.description,
          icon: tool.icon,
          desktopOnly: tool.desktopOnly || undefined,
          carouselOrder: tool.carouselOrder,
        }))
        .sort((a, b) =>
          section.key === 'konwertery' || section.key === 'dokumenty'
            ? a.title.localeCompare(b.title, locale)
            : 0,
        ),
    }),
  );
}

/** Flat list of all tool items for a given locale (used in Footer, etc.) */
export function getToolsList(locale: Locale): ToolSectionItem[] {
  return TOOL_REGISTRY.filter(tool => tool.locales[locale]).map(tool => ({
    key: tool.key,
    href: getToolHref(tool.key, locale),
    title: tool.locales[locale]!.title,
    description: tool.locales[locale]!.description,
    icon: tool.icon,
    desktopOnly: tool.desktopOnly || undefined,
    carouselOrder: tool.carouselOrder,
  }));
}

// ---------------------------------------------------------------------------
// Curated subsets for footer & mobile nav (9 most popular converters)
// ---------------------------------------------------------------------------
const POPULAR_CONVERTER_KEYS: ToolItemKey[] = [
  'jpgToWebpSimple',
  'pngToWebpSimple',
  'webpToJpg',
  'webpToPng',
  'pngToJpg',
  'jpgToPng',
  'svgToPng',
  'bmpToJpg',
  'jpgToAvif',
];

/** Footer tools: all non-converter tools + 9 most popular image converters */
export function getFooterTools(locale: Locale): ToolSectionItem[] {
  const nonConverters = TOOL_REGISTRY.filter(
    t =>
      t.section !== 'konwertery' &&
      t.section !== 'dokumenty' &&
      t.locales[locale],
  );
  const popularConverters = POPULAR_CONVERTER_KEYS.map(key =>
    TOOL_REGISTRY.find(t => t.key === key),
  ).filter((t): t is ToolDefinition => !!t && !!t.locales[locale]);

  return [...nonConverters, ...popularConverters].map(tool => ({
    key: tool.key,
    href: getToolHref(tool.key, locale),
    title: tool.locales[locale]!.title,
    description: tool.locales[locale]!.description,
    icon: tool.icon,
    desktopOnly: tool.desktopOnly || undefined,
    carouselOrder: tool.carouselOrder,
  }));
}

/** Mobile nav tool sections: same as getToolsSections but limits konwertery to 9 popular */
export function getMobileToolsSections(locale: Locale): ToolsSection[] {
  return TOOL_SECTIONS.filter(section => section.locales[locale]).map(
    section => {
      const isConverters = section.key === 'konwertery';
      const tools = isConverters
        ? POPULAR_CONVERTER_KEYS.map(key =>
            TOOL_REGISTRY.find(t => t.key === key),
          ).filter((t): t is ToolDefinition => !!t && !!t.locales[locale])
        : TOOL_REGISTRY.filter(
            t => t.section === section.key && t.locales[locale],
          );

      return {
        key: section.key,
        title: section.locales[locale]!.title,
        icon: section.icon,
        items: tools
          .filter(t => !t.desktopOnly)
          .map(tool => ({
            key: tool.key,
            href: getToolHref(tool.key, locale),
            title: tool.locales[locale]!.title,
            description: tool.locales[locale]!.description,
            icon: tool.icon,
            desktopOnly: tool.desktopOnly || undefined,
            carouselOrder: tool.carouselOrder,
          }))
          .sort((a, b) =>
            isConverters || section.key === 'dokumenty'
              ? a.title.localeCompare(b.title, locale)
              : 0,
          ),
      };
    },
  );
}

// ---------------------------------------------------------------------------
// Curated subsets for desktop navigation submenu (max 8 rows per section)
// ---------------------------------------------------------------------------

/** Top 48 image converters for desktop nav (8 rows × 6 cols) */
const NAV_IMAGE_CONVERTER_KEYS: ToolItemKey[] = [
  'pngToJpg',
  'jpgToPng',
  'webpToJpg',
  'webpToPng',
  'svgToPng',
  'svgToJpg',
  'bmpToJpg',
  'bmpToPng',
  'gifToPng',
  'gifToJpg',
  'jpgToWebpSimple',
  'pngToWebpSimple',
  'svgToWebp',
  'gifToWebp',
  'bmpToWebp',
  'avifToJpg',
  'avifToPng',
  'avifToWebp',
  'heicToJpg',
  'heicToPng',
  'heicToWebp',
  'tiffToJpg',
  'tiffToPng',
  'tiffToWebp',
  'jpgToAvif',
  'pngToAvif',
  'webpToAvif',
  'svgToAvif',
  'tiffToAvif',
  'jpgToGif',
  'pngToGif',
  'webpToGif',
  'svgToGif',
  'jpgToTiff',
  'pngToTiff',
  'webpToTiff',
  'svgToTiff',
  'heicToPdf',
  'jpgToPdf',
  'pngToPdf',
  'webpToPdf',
  'tiffToPdf',
  'svgToPdf',
  'pdfToJpg',
  'pdfToPng',
  'pdfToWebp',
  'imageToBase64',
  'base64ToImage',
];

/** All 15 unit converters for desktop nav */
const NAV_UNIT_CONVERTER_KEYS: ToolItemKey[] = [
  'ptToPx',
  'remToPx',
  'emToPx',
  'cmToPxDpi',
  'pxToCmDpi',
  'mmToPxDpi',
  'pxToMmDpi',
  'inchesToPxDpi',
  'cmToInches',
  'inchesToCm',
  'hexToRgb',
  'rgbToCmyk',
  'bytesConverter',
  'unixTimestamp',
  'decToBin',
  'decToHex',
  'mbpsToMBs',
];

/** Desktop nav tool sections: limits konwertery to 48 and jednostki to 17 */
export function getDesktopToolsSections(locale: Locale): ToolsSection[] {
  return TOOL_SECTIONS.filter(section => section.locales[locale]).map(
    section => {
      const isConverters = section.key === 'konwertery';
      const isUnits = section.key === 'jednostki';

      let tools: ToolDefinition[];
      if (isConverters) {
        tools = NAV_IMAGE_CONVERTER_KEYS.map(key =>
          TOOL_REGISTRY.find(t => t.key === key),
        ).filter((t): t is ToolDefinition => !!t && !!t.locales[locale]);
      } else if (isUnits) {
        tools = NAV_UNIT_CONVERTER_KEYS.map(key =>
          TOOL_REGISTRY.find(t => t.key === key),
        ).filter((t): t is ToolDefinition => !!t && !!t.locales[locale]);
      } else {
        tools = TOOL_REGISTRY.filter(
          t => t.section === section.key && t.locales[locale],
        );
      }

      return {
        key: section.key,
        title: section.locales[locale]!.title,
        icon: section.icon,
        items: tools
          .map(tool => ({
            key: tool.key,
            href: getToolHref(tool.key, locale),
            title: tool.locales[locale]!.title,
            description: tool.locales[locale]!.description,
            icon: tool.icon,
            desktopOnly: tool.desktopOnly || undefined,
            carouselOrder: tool.carouselOrder,
          }))
          .sort((a, b) =>
            isConverters || isUnits || section.key === 'dokumenty'
              ? a.title.localeCompare(b.title, locale)
              : 0,
          ),
      };
    },
  );
}
