import csDict from '@/data/cs/dictionary.json';
import deDict from '@/data/de/dictionary.json';
import enDict from '@/data/en/dictionary.json';
import esDict from '@/data/es/dictionary.json';
import frDict from '@/data/fr/dictionary.json';
import itDict from '@/data/it/dictionary.json';
import plDict from '@/data/pl/dictionary.json';
import ptDict from '@/data/pt/dictionary.json';
import type {
  BreadcrumbsDictionary,
  ContactFormDictionary,
  ToolsCarouselDictionary,
  LanguageSwitcherDictionary,
  MobileNavDictionary,
  InfoBannerDictionary,
} from '@/lib/i18n/getDictionary';
import type {
  Locale,
  LocaleConfig,
  LegalLink,
  NavigationUi,
  FooterUi,
  DesktopOnlyUi,
} from '@/types/locale';

export type {
  LocaleConfig,
  LegalLink,
  NavigationUi,
  FooterUi,
  DesktopOnlyUi,
} from '@/types/locale';

const dicts = {
  pl: plDict,
  en: enDict,
  de: deDict,
  es: esDict,
  fr: frDict,
  pt: ptDict,
  it: itDict,
  cs: csDict,
} as const;

export const LOCALE_CONFIG: Record<Locale, LocaleConfig> = {
  pl: {
    lang: 'pl-PL',
    hreflang: 'pl',
    label: 'PL',
    name: 'Polski',
    toolsBasePath: '/narzedzia',
    toolsIndexHref: '/narzedzia',
    aboutHref: '/o-nas',
    contactHref: '/kontakt',
    privacyHref: '/polityka-prywatnosci',
    termsHref: '/regulamin',
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
    termsHref: '/en/terms-of-service',
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
    termsHref: '/de/nutzungsbedingungen',
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
    termsHref: '/es/terminos-de-servicio',
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
    termsHref: '/fr/conditions-utilisation',
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
    termsHref: '/pt/termos-de-servico',
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
    termsHref: '/it/termini-di-servizio',
  },
  cs: {
    lang: 'cs',
    hreflang: 'cs',
    label: 'CS',
    name: 'Čeština',
    toolsBasePath: '/cs/nastroje',
    toolsIndexHref: '/cs/nastroje',
    aboutHref: '/cs/o-nas',
    contactHref: '/cs/kontakt',
    privacyHref: '/cs/zasady-ochrany-soukromi',
    termsHref: '/cs/podminky-pouzivani',
  },
};

export const SUPPORTED_LOCALES = Object.keys(LOCALE_CONFIG) as Locale[];

export function getLocaleConfig(locale: Locale): LocaleConfig {
  return LOCALE_CONFIG[locale];
}

// ---------------------------------------------------------------------------
// Re-exports from centralized dictionaries (data/{locale}/dictionary.json)
// ---------------------------------------------------------------------------

export const LEGAL_LINKS: Record<Locale, LegalLink[]> = Object.fromEntries(
  Object.entries(dicts).map(([k, d]) => [k, d.legal]),
) as Record<Locale, LegalLink[]>;

export function getLegalLinks(locale: Locale): LegalLink[] {
  return LEGAL_LINKS[locale];
}

export const NAVIGATION_UI: Record<Locale, NavigationUi> = Object.fromEntries(
  Object.entries(dicts).map(([k, d]) => [k, d.nav]),
) as Record<Locale, NavigationUi>;

export const FOOTER_UI: Record<Locale, FooterUi> = Object.fromEntries(
  Object.entries(dicts).map(([k, d]) => [k, d.footer]),
) as Record<Locale, FooterUi>;

export const DESKTOP_ONLY_UI: Record<Locale, DesktopOnlyUi> =
  Object.fromEntries(
    Object.entries(dicts).map(([k, d]) => [k, d.desktopOnly]),
  ) as Record<Locale, DesktopOnlyUi>;

export const BREADCRUMBS_UI: Record<Locale, BreadcrumbsDictionary> =
  Object.fromEntries(
    Object.entries(dicts).map(([k, d]) => [k, d.breadcrumbs]),
  ) as Record<Locale, BreadcrumbsDictionary>;

export const CONTACT_FORM_UI: Record<Locale, ContactFormDictionary> =
  Object.fromEntries(
    Object.entries(dicts).map(([k, d]) => [k, d.contactForm]),
  ) as Record<Locale, ContactFormDictionary>;

export const TOOLS_CAROUSEL_UI: Record<Locale, ToolsCarouselDictionary> =
  Object.fromEntries(
    Object.entries(dicts).map(([k, d]) => [k, d.toolsCarousel]),
  ) as Record<Locale, ToolsCarouselDictionary>;

export const LANGUAGE_SWITCHER_UI: Record<Locale, LanguageSwitcherDictionary> =
  Object.fromEntries(
    Object.entries(dicts).map(([k, d]) => [k, d.languageSwitcher]),
  ) as Record<Locale, LanguageSwitcherDictionary>;

export const MOBILE_NAV_UI: Record<Locale, MobileNavDictionary> =
  Object.fromEntries(
    Object.entries(dicts).map(([k, d]) => [k, d.mobileNav]),
  ) as Record<Locale, MobileNavDictionary>;

export const INFO_BANNER_UI: Record<Locale, InfoBannerDictionary> =
  Object.fromEntries(
    Object.entries(dicts).map(([k, d]) => [k, d.infoBanner]),
  ) as Record<Locale, InfoBannerDictionary>;
