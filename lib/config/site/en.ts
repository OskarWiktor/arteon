// site scaffold only — no production behavior changes while flag disabled

import type { SiteKey } from './pl';

export const enConfig: { siteKey: SiteKey } = {
  siteKey: 'en' as const,
  // Add site-specific config here when needed
  // For now, keeping it minimal to avoid any production changes
  // Values are same as PL to ensure no differences when flag is disabled
};
