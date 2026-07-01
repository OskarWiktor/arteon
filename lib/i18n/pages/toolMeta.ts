import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';
import { TOOL_REGISTRY, getToolHref } from '@/lib/i18n/toolRegistry';
import type { Locale } from '@/types/locale';
import type { ToolItemKey } from '@/types/tools/common';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';

// ---------------------------------------------------------------------------
// Centralised tool page metadata + alternates + JSON-LD helpers
// ---------------------------------------------------------------------------

/**
 * Generate Next.js `alternates` for a tool page (canonical + all hreflang + x-default).
 * Automatically includes every locale that has a slug for this tool.
 */
export function getToolAlternates(toolKey: ToolItemKey, locale: Locale) {
  const tool = TOOL_REGISTRY.find(t => t.key === toolKey);
  if (!tool) return {};

  const href = getToolHref(toolKey, locale);

  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    if (tool.locales[loc]) {
      languages[LOCALE_CONFIG[loc].hreflang] = toAbsoluteUrl(
        getToolHref(toolKey, loc),
      );
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
 * Generate Next.js `alternates` for the PL homepage.
 * PL homepage has no multilingual equivalent — only canonical, no hreflang.
 */
export function getHomepageAlternates() {
  return {
    canonical: toAbsoluteUrl('/'),
  };
}

/**
 * Generate Next.js `alternates` for the tools INDEX page (canonical + all hreflang + x-default).
 */
export function getToolsIndexAlternates(locale: Locale) {
  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    languages[LOCALE_CONFIG[loc].hreflang] = toAbsoluteUrl(
      LOCALE_CONFIG[loc].toolsIndexHref,
    );
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
  applicationCategory?: string;
  applicationSubCategory?: string;
  featureList?: string[];
  ogImage?: string;
}) {
  const href = getToolHref(opts.toolKey, opts.locale);
  const pageUrl = toAbsoluteUrl(href);
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    ...(opts.alternateName?.length
      ? { alternateName: opts.alternateName }
      : {}),
    url: pageUrl,
    applicationCategory: opts.applicationCategory || 'UtilitiesApplication',
    ...(opts.applicationSubCategory
      ? { applicationSubCategory: opts.applicationSubCategory }
      : {}),
    operatingSystem: 'Any',
    description: opts.description,
    inLanguage: LOCALE_CONFIG[opts.locale].lang,
    isAccessibleForFree: true,
    ...(opts.featureList?.length ? { featureList: opts.featureList } : {}),
    ...(opts.ogImage ? { screenshot: toAbsoluteUrl(opts.ogImage) } : {}),
    browserRequirements:
      'Requires a modern web browser with JavaScript enabled',
    permissions: 'none',
    offers: {
      '@type': 'Offer',
      price: 0,
      priceCurrency: (() => {
        const m: Record<string, string> = {
          pl: 'PLN',
          de: 'EUR',
          es: 'EUR',
          fr: 'EUR',
          pt: 'EUR',
          it: 'EUR',
          id: 'IDR',
          vi: 'VND',
          tr: 'TRY',
          tl: 'PHP',
          sw: 'TZS',
          ms: 'MYR',
          cs: 'CZK',
          sq: 'ALL',
          sk: 'EUR',
          hr: 'EUR',
          lt: 'EUR',
          sl: 'EUR',
        };
        return m[opts.locale] ?? 'USD';
      })(),
    },
    potentialAction: {
      '@type': 'UseAction',
      target: pageUrl,
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
  ogImage?: string;
}) {
  const href = getToolHref(opts.toolKey, opts.locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    url: toAbsoluteUrl(href),
    inLanguage: LOCALE_CONFIG[opts.locale].lang,
    totalTime: opts.totalTime ?? 'PT2M',
    ...(opts.ogImage ? { image: toAbsoluteUrl(opts.ogImage) } : {}),
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
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

/**
 * Generate JSON-LD WebPage schema for a tool page.
 */
export function getToolWebPageSchema(opts: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  toolName: string;
}) {
  const pageUrl = toAbsoluteUrl(opts.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.title,
    description: opts.description,
    url: pageUrl,
    inLanguage: LOCALE_CONFIG[opts.locale].lang,
    ...(opts.ogImage
      ? {
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: toAbsoluteUrl(opts.ogImage),
          },
        }
      : {}),
    isPartOf: {
      '@type': 'WebSite',
      name: 'Arteon Agency',
      url: siteUrl,
    },
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: opts.toolName,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.text-mid'],
    },
  };
}
