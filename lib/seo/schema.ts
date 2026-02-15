/**
 * Centralized SEO schema helpers
 *
 * Provides shared constants and builder functions for JSON-LD structured data.
 * All schema generation should use these helpers to ensure consistency.
 *
 * Related files:
 * - utils/absoluteUrl.ts — siteUrl constant and URL helpers
 * - lib/serviceSchema.ts — Service schema builder (uses helpers from here)
 * - lib/i18n/pages/tool-meta.ts — Tool schema builders
 */

import { siteUrl, toAbsoluteUrl } from '@/utils/absoluteUrl';

export const ORG_NAME = 'Arteon';
export const ORG_ID = `${siteUrl}#organization`;
export const ORG_LOGO_PATH = '/icon-512x512.png';
export const ORG_LOGO_URL = toAbsoluteUrl(ORG_LOGO_PATH);
export const ORG_FACEBOOK = 'https://www.facebook.com/people/Arteon/61583260915021/';

export function organizationRef() {
  return { '@type': 'Organization' as const, '@id': ORG_ID };
}

export function publisherBlock() {
  return {
    '@type': 'Organization' as const,
    name: ORG_NAME,
    logo: { '@type': 'ImageObject' as const, url: ORG_LOGO_URL, width: 512, height: 512 },
  };
}

export function publisherRef() {
  return { '@id': ORG_ID };
}

export function websiteRef() {
  return {
    '@type': 'WebSite' as const,
    name: ORG_NAME,
    url: siteUrl,
  };
}
