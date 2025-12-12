'use client';

// site scaffold only — no production behavior changes while flag disabled

import { createContext, useContext, type ReactNode } from 'react';
import type { SiteKey } from './config/site/pl'; // Used in SiteContextValue and SiteProviderProps

export interface SiteContextValue {
  siteKey: SiteKey;
}

const SiteContext = createContext<SiteContextValue | undefined>(undefined);

interface SiteProviderProps {
  children: ReactNode;
  siteKey: SiteKey;
}

/**
 * SiteProvider - provides site context to the application.
 * When SITE_BY_DOMAIN_ENABLED is false, siteKey should always be 'pl'.
 */
export function SiteProvider({ children, siteKey }: SiteProviderProps) {
  return <SiteContext.Provider value={{ siteKey }}>{children}</SiteContext.Provider>;
}

/**
 * Hook to access site context.
 * Returns the current siteKey ('pl' | 'en').
 * When SITE_BY_DOMAIN_ENABLED is false, always returns 'pl'.
 */
export function useSite(): SiteContextValue {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
}

