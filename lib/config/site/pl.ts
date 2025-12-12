// site scaffold only — no production behavior changes while flag disabled

export type SiteKey = 'pl' | 'en';

export const plConfig = {
  siteKey: 'pl' as const,
  // Add site-specific config here when needed
  // For now, keeping it minimal to avoid any production changes
};

