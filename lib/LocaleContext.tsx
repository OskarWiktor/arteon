'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';

import type { Locale, LocaleConfig, NavigationUi, FooterUi, DesktopOnlyUi, LegalLink } from '@/types/locale';
export type { Locale } from '@/types/locale';

export interface ClientDictionary {
  nav: NavigationUi;
  footer: FooterUi;
  desktopOnly: DesktopOnlyUi;
  legal: LegalLink[];
  breadcrumbs: { home: string; ariaLabel: string };
  contactForm: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    error: string;
    success: string;
  };
  toolsCarousel: {
    defaultTitle: string;
    seeAllTools: string;
    carouselLabel: string;
    scrollLeft: string;
    scrollRight: string;
    carouselNavigation: string;
    goToSlide: string;
    of: string;
    slide: string;
    tool: string;
    openTool: string;
  };
  languageSwitcher: {
    switchTitle: string;
    toggleLabel: string;
    chooseLabel: string;
    popularLabel: string;
    otherLabel: string;
    closeModalLabel: string;
  };
  mobileNav: { close: string; services: string; contact: string };
  infoBanner: { text: string; linkText: string };
  imageConverter: {
    addFiles: string;
    dragDrop: string;
    clickToSelect: string;
    supported: string;
    setQuality: string;
    qualityHelper: string;
    convertAndDownload: string;
    inQueue: string;
    files: string;
    completed: string;
    converting: string;
    convert: string;
    downloadAll: string;
    clearAll: string;
    totalInput: string;
    totalOutput: string;
    saved: string;
    increased: string;
    less: string;
    more: string;
    queueAriaLabel: string;
    queueHeading: string;
    readyCount: string;
    pendingCount: string;
    emptyState: string;
    statusPending: string;
    statusProcessing: string;
    statusDone: string;
    statusError: string;
    before: string;
    after: string;
    download: string;
    remove: string;
    formatSelectorTo: string;
    formatChangeConfirm: string;
    errorFileLoad: string;
    errorImageLoad: string;
    errorCanvas: string;
    errorGeneration: string;
    errorTooLarge: string;
    errorWrongFormat: string;
    errorNoFiles: string;
    errorAvifNotSupported: string;
  };
}

interface LocaleContextType {
  locale: Locale;
  config: LocaleConfig;
  dict: ClientDictionary;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  value: Locale;
  config: LocaleConfig;
  dict: ClientDictionary;
  children: ReactNode;
}

export function LocaleProvider({ value, config, dict, children }: LocaleProviderProps) {
  const ctx = useMemo(() => ({ locale: value, config, dict }), [value, config, dict]);
  return <LocaleContext.Provider value={ctx}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context.locale;
}

export function useLocaleConfig(): LocaleConfig {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocaleConfig must be used within a LocaleProvider');
  }
  return context.config;
}

export function useDictionary(): ClientDictionary {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useDictionary must be used within a LocaleProvider');
  }
  return context.dict;
}
