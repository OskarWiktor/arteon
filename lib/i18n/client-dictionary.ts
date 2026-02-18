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
  id: () => import('@/data/id/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  vi: () => import('@/data/vi/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  tr: () => import('@/data/tr/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  tl: () => import('@/data/tl/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  sw: () => import('@/data/sw/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  ms: () => import('@/data/ms/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  cs: () => import('@/data/cs/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  sv: () => import('@/data/sv/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  sq: () => import('@/data/sq/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  da: () => import('@/data/da/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  no: () => import('@/data/no/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  fi: () => import('@/data/fi/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  sk: () => import('@/data/sk/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  hr: () => import('@/data/hr/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  lt: () => import('@/data/lt/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  sl: () => import('@/data/sl/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  el: () => import('@/data/el/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  bg: () => import('@/data/bg/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  ha: () => import('@/data/ha/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  yo: () => import('@/data/yo/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  af: () => import('@/data/af/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
  uk: () => import('@/data/uk/dictionary.json').then((m) => m.default as unknown as ClientDictionary),
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
  };
}

export function getLocaleConfigFor(locale: Locale) {
  return LOCALE_CONFIG[locale];
}
