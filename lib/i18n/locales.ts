import type { Locale, LocaleConfig, LegalLink, NavigationUi, FooterUi, DesktopOnlyUi } from '@/types/locale';
export type { LocaleConfig, LegalLink, NavigationUi, FooterUi, DesktopOnlyUi } from '@/types/locale';

import plDict from '@/dictionaries/pl.json';
import enDict from '@/dictionaries/en.json';
import deDict from '@/dictionaries/de.json';
import esDict from '@/dictionaries/es.json';
import frDict from '@/dictionaries/fr.json';
import ptDict from '@/dictionaries/pt.json';
import itDict from '@/dictionaries/it.json';

const dicts = { pl: plDict, en: enDict, de: deDict, es: esDict, fr: frDict, pt: ptDict, it: itDict } as const;

export const LOCALE_CONFIG: Record<Locale, LocaleConfig> = {
  pl: {
    lang: 'pl-PL',
    hreflang: 'pl',
    label: 'PL',
    name: 'Polski',
    toolsBasePath: '/narzedzia',
    toolsIndexHref: '/narzedzia',
  },
  en: {
    lang: 'en',
    hreflang: 'en',
    label: 'EN',
    name: 'English',
    toolsBasePath: '/en/tools',
    toolsIndexHref: '/en/tools',
    aboutHref: '/en/about',
    contactHref: '/en/contact',
    privacyHref: '/en/privacy-policy',
  },
  de: {
    lang: 'de',
    hreflang: 'de',
    label: 'DE',
    name: 'Deutsch',
    toolsBasePath: '/de/werkzeuge',
    toolsIndexHref: '/de/werkzeuge',
    aboutHref: '/de/ueber-uns',
    contactHref: '/de/kontakt',
    privacyHref: '/de/datenschutzrichtlinie',
  },
  es: {
    lang: 'es',
    hreflang: 'es',
    label: 'ES',
    name: 'Español',
    toolsBasePath: '/es/herramientas',
    toolsIndexHref: '/es/herramientas',
    aboutHref: '/es/sobre-nosotros',
    contactHref: '/es/contacto',
    privacyHref: '/es/politica-de-privacidad',
  },
  fr: {
    lang: 'fr',
    hreflang: 'fr',
    label: 'FR',
    name: 'Français',
    toolsBasePath: '/fr/outils',
    toolsIndexHref: '/fr/outils',
    aboutHref: '/fr/a-propos',
    contactHref: '/fr/contact',
    privacyHref: '/fr/politique-de-confidentialite',
  },
  pt: {
    lang: 'pt',
    hreflang: 'pt',
    label: 'PT',
    name: 'Português',
    toolsBasePath: '/pt/ferramentas',
    toolsIndexHref: '/pt/ferramentas',
    aboutHref: '/pt/sobre-nos',
    contactHref: '/pt/contacto',
    privacyHref: '/pt/politica-de-privacidade',
  },
  it: {
    lang: 'it',
    hreflang: 'it',
    label: 'IT',
    name: 'Italiano',
    toolsBasePath: '/it/strumenti',
    toolsIndexHref: '/it/strumenti',
    aboutHref: '/it/chi-siamo',
    contactHref: '/it/contatto',
    privacyHref: '/it/informativa-sulla-privacy',
  },
};

export const SUPPORTED_LOCALES = Object.keys(LOCALE_CONFIG) as Locale[];

export function getLocaleConfig(locale: Locale): LocaleConfig {
  return LOCALE_CONFIG[locale];
}

// ---------------------------------------------------------------------------
// Re-exports from centralized dictionaries (dictionaries/*.json)
// ---------------------------------------------------------------------------

export const LEGAL_LINKS: Record<Locale, LegalLink[]> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.legal])) as Record<Locale, LegalLink[]>;

export function getLegalLinks(locale: Locale): LegalLink[] {
  return LEGAL_LINKS[locale];
}

export const NAVIGATION_UI: Record<Locale, NavigationUi> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.nav])) as Record<Locale, NavigationUi>;

export const FOOTER_UI: Record<Locale, FooterUi> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.footer])) as Record<Locale, FooterUi>;

export const DESKTOP_ONLY_UI: Record<Locale, DesktopOnlyUi> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.desktopOnly])) as Record<Locale, DesktopOnlyUi>;
