// site scaffold only — no production behavior changes while flag disabled

import type { SiteKey } from './config/site/pl';

/**
 * Feature flag: controls whether site detection by domain is enabled.
 * When false, always returns 'pl' regardless of domain.
 */
const SITE_BY_DOMAIN_ENABLED = process.env.SITE_BY_DOMAIN_ENABLED === 'true';

/**
 * Determines site key from hostname.
 * When SITE_BY_DOMAIN_ENABLED is false, always returns 'pl'.
 * When enabled: .pl => 'pl', .com => 'en'
 */
export function getSiteKeyFromHost(host: string): SiteKey {
  if (!SITE_BY_DOMAIN_ENABLED) {
    return 'pl';
  }

  // site scaffold only — no production behavior changes while flag disabled
  if (host.endsWith('.pl')) {
    return 'pl';
  }
  if (host.endsWith('.com')) {
    return 'en';
  }

  // Default to 'pl' if domain doesn't match
  return 'pl';
}

/**
 * Gets the active site key.
 * In server components, pass headers().get('host') or similar.
 * In client components, use window.location.hostname.
 * When SITE_BY_DOMAIN_ENABLED is false, always returns 'pl'.
 */
export function getActiveSiteKey(host?: string): SiteKey {
  if (!SITE_BY_DOMAIN_ENABLED) {
    return 'pl';
  }

  // site scaffold only — no production behavior changes while flag disabled
  if (!host) {
    return 'pl';
  }

  return getSiteKeyFromHost(host);
}

