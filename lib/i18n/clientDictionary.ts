import 'server-only';

import { LOCALE_CONFIG } from '@/lib/i18n/locales';
import type { ClientDictionary } from '@/lib/LocaleContext';
import type { Locale } from '@/types/locale';

const dictLoaders: Record<Locale, () => Promise<ClientDictionary>> = {
  pl: () =>
    import('@/data/pl/dictionary.json').then(
      m => m.default as unknown as ClientDictionary,
    ),
  en: () =>
    import('@/data/en/dictionary.json').then(
      m => m.default as unknown as ClientDictionary,
    ),
  de: () =>
    import('@/data/de/dictionary.json').then(
      m => m.default as unknown as ClientDictionary,
    ),
  es: () =>
    import('@/data/es/dictionary.json').then(
      m => m.default as unknown as ClientDictionary,
    ),
  fr: () =>
    import('@/data/fr/dictionary.json').then(
      m => m.default as unknown as ClientDictionary,
    ),
  pt: () =>
    import('@/data/pt/dictionary.json').then(
      m => m.default as unknown as ClientDictionary,
    ),
  it: () =>
    import('@/data/it/dictionary.json').then(
      m => m.default as unknown as ClientDictionary,
    ),
  cs: () =>
    import('@/data/cs/dictionary.json').then(
      m => m.default as unknown as ClientDictionary,
    ),
};

export async function getClientDictionary(
  locale: Locale,
): Promise<ClientDictionary> {
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
    search: full.search,
    imageConverter: full.imageConverter,
  };
}

export function getLocaleConfigFor(locale: Locale) {
  return LOCALE_CONFIG[locale];
}
