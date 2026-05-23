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
import type {
  BreadcrumbsDictionary,
  ContactFormDictionary,
  ToolsCarouselDictionary,
  LanguageSwitcherDictionary,
  MobileNavDictionary,
  InfoBannerDictionary,
} from '@/lib/i18n/get-dictionary';

import plDict from '@/data/pl/dictionary.json';
import enDict from '@/data/en/dictionary.json';
import deDict from '@/data/de/dictionary.json';
import esDict from '@/data/es/dictionary.json';
import frDict from '@/data/fr/dictionary.json';
import ptDict from '@/data/pt/dictionary.json';
import itDict from '@/data/it/dictionary.json';
import roDict from '@/data/ro/dictionary.json';
import nlDict from '@/data/nl/dictionary.json';
import huDict from '@/data/hu/dictionary.json';
import csDict from '@/data/cs/dictionary.json';
import svDict from '@/data/sv/dictionary.json';
import daDict from '@/data/da/dictionary.json';
import noDict from '@/data/no/dictionary.json';
import fiDict from '@/data/fi/dictionary.json';
import elDict from '@/data/el/dictionary.json';

const dicts = {
  pl: plDict,
  en: enDict,
  de: deDict,
  es: esDict,
  fr: frDict,
  pt: ptDict,
  it: itDict,
  ro: roDict,
  nl: nlDict,
  hu: huDict,
  cs: csDict,
  sv: svDict,
  da: daDict,
  no: noDict,
  fi: fiDict,
  el: elDict,
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
  ro: {
    lang: 'ro',
    hreflang: 'ro',
    label: 'RO',
    name: 'Română',
    toolsBasePath: '/ro/instrumente',
    toolsIndexHref: '/ro/instrumente',
    aboutHref: '/ro/despre-noi',
    contactHref: '/ro/contact',
    privacyHref: '/ro/politica-de-confidentialitate',
    termsHref: '/ro/termeni-si-conditii',
  },
  nl: {
    lang: 'nl',
    hreflang: 'nl',
    label: 'NL',
    name: 'Nederlands',
    toolsBasePath: '/nl/tools',
    toolsIndexHref: '/nl/tools',
    aboutHref: '/nl/over-ons',
    contactHref: '/nl/contact',
    privacyHref: '/nl/privacybeleid',
    termsHref: '/nl/gebruiksvoorwaarden',
  },
  hu: {
    lang: 'hu',
    hreflang: 'hu',
    label: 'HU',
    name: 'Magyar',
    toolsBasePath: '/hu/eszkozok',
    toolsIndexHref: '/hu/eszkozok',
    aboutHref: '/hu/rolunk',
    contactHref: '/hu/kapcsolat',
    privacyHref: '/hu/adatvedelmi-iranyelvek',
    termsHref: '/hu/felhasznalasi-feltetelek',
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
  sv: {
    lang: 'sv',
    hreflang: 'sv',
    label: 'SV',
    name: 'Svenska',
    toolsBasePath: '/sv/verktyg',
    toolsIndexHref: '/sv/verktyg',
    aboutHref: '/sv/om-oss',
    contactHref: '/sv/kontakt',
    privacyHref: '/sv/integritetspolicy',
    termsHref: '/sv/anvandarvillkor',
  },
  da: {
    lang: 'da',
    hreflang: 'da',
    label: 'DA',
    name: 'Dansk',
    toolsBasePath: '/da/vaerktojer',
    toolsIndexHref: '/da/vaerktojer',
    aboutHref: '/da/om-os',
    contactHref: '/da/kontakt',
    privacyHref: '/da/privatlivspolitik',
    termsHref: '/da/brugsvilkar',
  },
  no: {
    lang: 'no',
    hreflang: 'no',
    label: 'NO',
    name: 'Norsk',
    toolsBasePath: '/no/verktoy',
    toolsIndexHref: '/no/verktoy',
    aboutHref: '/no/om-oss',
    contactHref: '/no/kontakt',
    privacyHref: '/no/personvernpolicy',
    termsHref: '/no/bruksvilkar',
  },
  fi: {
    lang: 'fi',
    hreflang: 'fi',
    label: 'FI',
    name: 'Suomi',
    toolsBasePath: '/fi/tyokalut',
    toolsIndexHref: '/fi/tyokalut',
    aboutHref: '/fi/tietoa-meista',
    contactHref: '/fi/yhteystiedot',
    privacyHref: '/fi/tietosuojakaytanto',
    termsHref: '/fi/kayttoehdot',
  },
  el: {
    lang: 'el',
    hreflang: 'el',
    label: 'EL',
    name: 'Ελληνικά',
    toolsBasePath: '/el/ergaleia',
    toolsIndexHref: '/el/ergaleia',
    aboutHref: '/el/sxetika-me-emas',
    contactHref: '/el/epikoinonia',
    privacyHref: '/el/politiki-aporritou',
    termsHref: '/el/oroi-chrisis',
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

export const DESKTOP_ONLY_UI: Record<Locale, DesktopOnlyUi> = Object.fromEntries(
  Object.entries(dicts).map(([k, d]) => [k, d.desktopOnly]),
) as Record<Locale, DesktopOnlyUi>;

export const BREADCRUMBS_UI: Record<Locale, BreadcrumbsDictionary> = Object.fromEntries(
  Object.entries(dicts).map(([k, d]) => [k, d.breadcrumbs]),
) as Record<Locale, BreadcrumbsDictionary>;

export const CONTACT_FORM_UI: Record<Locale, ContactFormDictionary> = Object.fromEntries(
  Object.entries(dicts).map(([k, d]) => [k, d.contactForm]),
) as Record<Locale, ContactFormDictionary>;

export const TOOLS_CAROUSEL_UI: Record<Locale, ToolsCarouselDictionary> = Object.fromEntries(
  Object.entries(dicts).map(([k, d]) => [k, d.toolsCarousel]),
) as Record<Locale, ToolsCarouselDictionary>;

export const LANGUAGE_SWITCHER_UI: Record<Locale, LanguageSwitcherDictionary> = Object.fromEntries(
  Object.entries(dicts).map(([k, d]) => [k, d.languageSwitcher]),
) as Record<Locale, LanguageSwitcherDictionary>;

export const MOBILE_NAV_UI: Record<Locale, MobileNavDictionary> = Object.fromEntries(
  Object.entries(dicts).map(([k, d]) => [k, d.mobileNav]),
) as Record<Locale, MobileNavDictionary>;

export const INFO_BANNER_UI: Record<Locale, InfoBannerDictionary> = Object.fromEntries(
  Object.entries(dicts).map(([k, d]) => [k, d.infoBanner]),
) as Record<Locale, InfoBannerDictionary>;
