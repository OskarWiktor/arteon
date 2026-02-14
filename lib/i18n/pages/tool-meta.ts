import type { Locale } from '@/types/locale';
import type { ToolItemKey } from '@/types/tools/common';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';
import { TOOL_REGISTRY, getToolHref } from '@/lib/i18n/tool-registry';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';

// ---------------------------------------------------------------------------
// Centralised tool page metadata + alternates + JSON-LD helpers
// ---------------------------------------------------------------------------

/**
 * Generate Next.js `alternates` for a tool page (canonical + all hreflang + x-default).
 * Automatically includes every locale that has a slug for this tool.
 */
export function getToolAlternates(toolKey: ToolItemKey, locale: Locale) {
  const tool = TOOL_REGISTRY.find((t) => t.key === toolKey);
  if (!tool) return {};

  const href = getToolHref(toolKey, locale);

  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    if (tool.locales[loc]) {
      languages[LOCALE_CONFIG[loc].hreflang] = toAbsoluteUrl(getToolHref(toolKey, loc));
    }
  }
  // PL tools live at root (no /pl/ prefix), handled by getToolHref already
  languages['x-default'] = toAbsoluteUrl(getToolHref(toolKey, 'en'));

  return {
    canonical: toAbsoluteUrl(href),
    languages,
  };
}

/**
 * Generate Next.js `alternates` for the tools INDEX page (canonical + all hreflang + x-default).
 */
export function getToolsIndexAlternates(locale: Locale) {
  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    languages[LOCALE_CONFIG[loc].hreflang] = toAbsoluteUrl(LOCALE_CONFIG[loc].toolsIndexHref);
  }
  languages['x-default'] = toAbsoluteUrl(LOCALE_CONFIG['en'].toolsIndexHref);

  return {
    canonical: toAbsoluteUrl(LOCALE_CONFIG[locale].toolsIndexHref),
    languages,
  };
}

/**
 * Generate JSON-LD SoftwareApplication schema for a tool page.
 */
export function getToolSoftwareSchema(opts: {
  toolKey: ToolItemKey;
  locale: Locale;
  name: string;
  alternateName?: string[];
  description: string;
  applicationSubCategory?: string;
  featureList?: string[];
}) {
  const href = getToolHref(opts.toolKey, opts.locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    ...(opts.alternateName?.length ? { alternateName: opts.alternateName } : {}),
    url: toAbsoluteUrl(href),
    applicationCategory: 'UtilitiesApplication',
    ...(opts.applicationSubCategory ? { applicationSubCategory: opts.applicationSubCategory } : {}),
    operatingSystem: 'Any',
    description: opts.description,
    inLanguage: LOCALE_CONFIG[opts.locale].lang,
    isAccessibleForFree: true,
    ...(opts.featureList?.length ? { featureList: opts.featureList } : {}),
    offers: {
      '@type': 'Offer',
      price: 0,
      priceCurrency: opts.locale === 'pl' ? 'PLN' : opts.locale === 'de' ? 'EUR' : opts.locale === 'es' ? 'EUR' : opts.locale === 'fr' ? 'EUR' : opts.locale === 'pt' ? 'EUR' : 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Arteon Agency',
      url: siteUrl,
    },
  };
}

/**
 * Generate JSON-LD HowTo schema for a tool page.
 */
export function getToolHowToSchema(opts: {
  toolKey: ToolItemKey;
  locale: Locale;
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string }[];
}) {
  const href = getToolHref(opts.toolKey, opts.locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    url: toAbsoluteUrl(href),
    totalTime: opts.totalTime ?? 'PT2M',
    step: opts.steps.map((s) => ({
      '@type': 'HowToStep',
      name: s.name,
      text: s.text,
    })),
    publisher: {
      '@type': 'Organization',
      name: 'Arteon Agency',
      url: siteUrl,
    },
  };
}
