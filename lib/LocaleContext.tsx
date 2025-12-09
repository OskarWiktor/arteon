'use client';

import { createContext, useContext, type ReactNode } from 'react';

export type Locale = 'pl' | 'en';

interface LocaleContextType {
  locale: Locale;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  value: Locale;
  children: ReactNode;
}

export function LocaleProvider({ value, children }: LocaleProviderProps) {
  return <LocaleContext.Provider value={{ locale: value }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context.locale;
}

