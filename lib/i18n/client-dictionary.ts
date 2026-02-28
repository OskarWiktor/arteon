import 'server-only';

import type { Locale } from '@/types/locale';
import type { ClientDictionary } from '@/lib/LocaleContext';
import { LOCALE_CONFIG } from '@/lib/i18n/locale-config';

const dictLoaders: Record<Locale, () => Promise<ClientDictionary>> = {
  pl: () => import('@/data/pl/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  en: () => import('@/data/en/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  de: () => import('@/data/de/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  es: () => import('@/data/es/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  fr: () => import('@/data/fr/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  pt: () => import('@/data/pt/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  it: () => import('@/data/it/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  ro: () => import('@/data/ro/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  nl: () => import('@/data/nl/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  hu: () => import('@/data/hu/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  cs: () => import('@/data/cs/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  sv: () => import('@/data/sv/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  da: () => import('@/data/da/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  no: () => import('@/data/no/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  fi: () => import('@/data/fi/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  el: () => import('@/data/el/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
};

export async function getClientDictionary(locale: Locale): Promise<ClientDictionary> {
  const loader = dictLoaders[locale] ?? dictLoaders.en;
  const full = await loader();
  return {
    nav: full.nav,
    footer: full.footer,
    desktopOnly: full.desktopOnly,
    legal: full.legal,
    breadcrumbs: full.breadcrumbs,
    contactForm: full.contactForm,
    toolsCarousel: full.toolsCarousel,
    languageSwitcher: full.languageSwitcher,
    mobileNav: full.mobileNav,
    infoBanner: full.infoBanner,
    imageConverter: full.imageConverter,
  };
}

export function getLocaleConfigFor(locale: Locale) {
  return LOCALE_CONFIG[locale];
}
