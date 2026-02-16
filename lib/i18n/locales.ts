import type { Locale, LocaleConfig, LegalLink, NavigationUi, FooterUi, DesktopOnlyUi } from '@/types/locale';
export type { LocaleConfig, LegalLink, NavigationUi, FooterUi, DesktopOnlyUi } from '@/types/locale';

import plDict from '@/dictionaries/pl.json';
import enDict from '@/dictionaries/en.json';
import deDict from '@/dictionaries/de.json';
import esDict from '@/dictionaries/es.json';
import frDict from '@/dictionaries/fr.json';
import ptDict from '@/dictionaries/pt.json';
import itDict from '@/dictionaries/it.json';
import roDict from '@/dictionaries/ro.json';
import nlDict from '@/dictionaries/nl.json';
import huDict from '@/dictionaries/hu.json';
import idDict from '@/dictionaries/id.json';
import viDict from '@/dictionaries/vi.json';
import trDict from '@/dictionaries/tr.json';
import tlDict from '@/dictionaries/tl.json';
import swDict from '@/dictionaries/sw.json';
import msDict from '@/dictionaries/ms.json';
import csDict from '@/dictionaries/cs.json';
import svDict from '@/dictionaries/sv.json';
import sqDict from '@/dictionaries/sq.json';
import daDict from '@/dictionaries/da.json';

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
  id: idDict,
  vi: viDict,
  tr: trDict,
  tl: tlDict,
  sw: swDict,
  ms: msDict,
  cs: csDict,
  sv: svDict,
  sq: sqDict,
  da: daDict,
} as const;

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
  },
  id: {
    lang: 'id',
    hreflang: 'id',
    label: 'ID',
    name: 'Bahasa Indonesia',
    toolsBasePath: '/id/alat',
    toolsIndexHref: '/id/alat',
    aboutHref: '/id/tentang-kami',
    contactHref: '/id/kontak',
    privacyHref: '/id/kebijakan-privasi',
  },
  vi: {
    lang: 'vi',
    hreflang: 'vi',
    label: 'VI',
    name: 'Tiếng Việt',
    toolsBasePath: '/vi/cong-cu',
    toolsIndexHref: '/vi/cong-cu',
    aboutHref: '/vi/ve-chung-toi',
    contactHref: '/vi/lien-he',
    privacyHref: '/vi/chinh-sach-bao-mat',
  },
  tr: {
    lang: 'tr',
    hreflang: 'tr',
    label: 'TR',
    name: 'Türkçe',
    toolsBasePath: '/tr/araclar',
    toolsIndexHref: '/tr/araclar',
    aboutHref: '/tr/hakkimizda',
    contactHref: '/tr/iletisim',
    privacyHref: '/tr/gizlilik-politikasi',
  },
  tl: {
    lang: 'tl',
    hreflang: 'tl',
    label: 'TL',
    name: 'Filipino',
    toolsBasePath: '/tl/mga-kasangkapan',
    toolsIndexHref: '/tl/mga-kasangkapan',
    aboutHref: '/tl/tungkol-sa-amin',
    contactHref: '/tl/makipag-ugnayan',
    privacyHref: '/tl/patakaran-sa-privacy',
  },
  sw: {
    lang: 'sw',
    hreflang: 'sw',
    label: 'SW',
    name: 'Kiswahili',
    toolsBasePath: '/sw/zana',
    toolsIndexHref: '/sw/zana',
    aboutHref: '/sw/kuhusu-sisi',
    contactHref: '/sw/wasiliana-nasi',
    privacyHref: '/sw/sera-ya-faragha',
  },
  ms: {
    lang: 'ms',
    hreflang: 'ms',
    label: 'MS',
    name: 'Bahasa Melayu',
    toolsBasePath: '/ms/alatan',
    toolsIndexHref: '/ms/alatan',
    aboutHref: '/ms/tentang-kami',
    contactHref: '/ms/hubungi-kami',
    privacyHref: '/ms/dasar-privasi',
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
  },
  sq: {
    lang: 'sq',
    hreflang: 'sq',
    label: 'SQ',
    name: 'Shqip',
    toolsBasePath: '/sq/mjetet',
    toolsIndexHref: '/sq/mjetet',
    aboutHref: '/sq/rreth-nesh',
    contactHref: '/sq/kontakti',
    privacyHref: '/sq/politika-e-privatesise',
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
