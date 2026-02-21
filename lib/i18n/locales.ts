import type { Locale, LocaleConfig, LegalLink, NavigationUi, FooterUi, DesktopOnlyUi } from '@/types/locale';
export type { LocaleConfig, LegalLink, NavigationUi, FooterUi, DesktopOnlyUi } from '@/types/locale';
import type { BreadcrumbsDictionary, ContactFormDictionary, ToolsCarouselDictionary, LanguageSwitcherDictionary, MobileNavDictionary, InfoBannerDictionary } from '@/lib/i18n/get-dictionary';

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
import idDict from '@/data/id/dictionary.json';
import viDict from '@/data/vi/dictionary.json';
import trDict from '@/data/tr/dictionary.json';
import tlDict from '@/data/tl/dictionary.json';
import swDict from '@/data/sw/dictionary.json';
import msDict from '@/data/ms/dictionary.json';
import csDict from '@/data/cs/dictionary.json';
import svDict from '@/data/sv/dictionary.json';
import sqDict from '@/data/sq/dictionary.json';
import daDict from '@/data/da/dictionary.json';
import noDict from '@/data/no/dictionary.json';
import fiDict from '@/data/fi/dictionary.json';
import skDict from '@/data/sk/dictionary.json';
import hrDict from '@/data/hr/dictionary.json';
import ltDict from '@/data/lt/dictionary.json';
import slDict from '@/data/sl/dictionary.json';
import elDict from '@/data/el/dictionary.json';
import bgDict from '@/data/bg/dictionary.json';
import haDict from '@/data/ha/dictionary.json';
import yoDict from '@/data/yo/dictionary.json';
import afDict from '@/data/af/dictionary.json';
import ukDict from '@/data/uk/dictionary.json';
import cebDict from '@/data/ceb/dictionary.json';
import igDict from '@/data/ig/dictionary.json';
import hiDict from '@/data/hi/dictionary.json';

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
  no: noDict,
  fi: fiDict,
  sk: skDict,
  hr: hrDict,
  lt: ltDict,
  sl: slDict,
  el: elDict,
  bg: bgDict,
  ha: haDict,
  yo: yoDict,
  af: afDict,
  uk: ukDict,
  ceb: cebDict,
  ig: igDict,
  hi: hiDict,
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
  },
  sk: {
    lang: 'sk',
    hreflang: 'sk',
    label: 'SK',
    name: 'Slovenčina',
    toolsBasePath: '/sk/nastroje',
    toolsIndexHref: '/sk/nastroje',
    aboutHref: '/sk/o-nas',
    contactHref: '/sk/kontakt',
    privacyHref: '/sk/zasady-ochrany-osobnych-udajov',
  },
  hr: {
    lang: 'hr',
    hreflang: 'hr',
    label: 'HR',
    name: 'Hrvatski',
    toolsBasePath: '/hr/alati',
    toolsIndexHref: '/hr/alati',
    aboutHref: '/hr/o-nama',
    contactHref: '/hr/kontakt',
    privacyHref: '/hr/pravila-privatnosti',
  },
  lt: {
    lang: 'lt',
    hreflang: 'lt',
    label: 'LT',
    name: 'Lietuvių',
    toolsBasePath: '/lt/irankiai',
    toolsIndexHref: '/lt/irankiai',
    aboutHref: '/lt/apie-mus',
    contactHref: '/lt/kontaktai',
    privacyHref: '/lt/privatumo-politika',
  },
  sl: {
    lang: 'sl',
    hreflang: 'sl',
    label: 'SL',
    name: 'Slovenščina',
    toolsBasePath: '/sl/orodja',
    toolsIndexHref: '/sl/orodja',
    aboutHref: '/sl/o-nas',
    contactHref: '/sl/kontakt',
    privacyHref: '/sl/pravilnik-o-zasebnosti',
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
  },
  bg: {
    lang: 'bg',
    hreflang: 'bg',
    label: 'BG',
    name: 'Български',
    toolsBasePath: '/bg/instrumenti',
    toolsIndexHref: '/bg/instrumenti',
    aboutHref: '/bg/za-nas',
    contactHref: '/bg/kontakt',
    privacyHref: '/bg/politika-za-poveritelnost',
  },
  ha: {
    lang: 'ha',
    hreflang: 'ha',
    label: 'HA',
    name: 'Hausa',
    toolsBasePath: '/ha/kayan-aiki',
    toolsIndexHref: '/ha/kayan-aiki',
    aboutHref: '/ha/game-da-mu',
    contactHref: '/ha/tuntube-mu',
    privacyHref: '/ha/manufar-sirri',
  },
  yo: {
    lang: 'yo',
    hreflang: 'yo',
    label: 'YO',
    name: 'Yorùbá',
    toolsBasePath: '/yo/awon-irinse',
    toolsIndexHref: '/yo/awon-irinse',
    aboutHref: '/yo/nipa-wa',
    contactHref: '/yo/kan-si-wa',
    privacyHref: '/yo/ilana-asiri',
  },
  af: {
    lang: 'af',
    hreflang: 'af',
    label: 'AF',
    name: 'Afrikaans',
    toolsBasePath: '/af/gereedskap',
    toolsIndexHref: '/af/gereedskap',
    aboutHref: '/af/oor-ons',
    contactHref: '/af/kontak',
    privacyHref: '/af/privaatheidsbeleid',
  },
  uk: {
    lang: 'uk',
    hreflang: 'uk',
    label: 'UK',
    name: 'Українська',
    toolsBasePath: '/uk/instrumenty',
    toolsIndexHref: '/uk/instrumenty',
    aboutHref: '/uk/pro-nas',
    contactHref: '/uk/kontakt',
    privacyHref: '/uk/polityka-konfidentsiinosti',
  },
  ceb: {
    lang: 'ceb',
    hreflang: 'ceb',
    label: 'CEB',
    name: 'Cebuano',
    toolsBasePath: '/ceb/mga-himan',
    toolsIndexHref: '/ceb/mga-himan',
    aboutHref: '/ceb/mahitungod-kanamo',
    contactHref: '/ceb/kontaka-kami',
    privacyHref: '/ceb/palisiya-sa-pribasiya',
  },
  ig: {
    lang: 'ig',
    hreflang: 'ig',
    label: 'IG',
    name: 'Igbo',
    toolsBasePath: '/ig/ngwa-oru',
    toolsIndexHref: '/ig/ngwa-oru',
    aboutHref: '/ig/maka-anyi',
    contactHref: '/ig/kpoturu-anyi',
    privacyHref: '/ig/iwu-nzuzo',
  },
  hi: {
    lang: 'hi',
    hreflang: 'hi',
    label: 'HI',
    name: 'हिन्दी',
    toolsBasePath: '/hi/upkaran',
    toolsIndexHref: '/hi/upkaran',
    aboutHref: '/hi/hamare-baare-mein',
    contactHref: '/hi/sampark-karein',
    privacyHref: '/hi/gopaneeyata-neeti',
  },
};

export const SUPPORTED_LOCALES = Object.keys(LOCALE_CONFIG) as Locale[];

export function getLocaleConfig(locale: Locale): LocaleConfig {
  return LOCALE_CONFIG[locale];
}

// ---------------------------------------------------------------------------
// Re-exports from centralized dictionaries (data/{locale}/dictionary.json)
// ---------------------------------------------------------------------------

export const LEGAL_LINKS: Record<Locale, LegalLink[]> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.legal])) as Record<Locale, LegalLink[]>;

export function getLegalLinks(locale: Locale): LegalLink[] {
  return LEGAL_LINKS[locale];
}

export const NAVIGATION_UI: Record<Locale, NavigationUi> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.nav])) as Record<Locale, NavigationUi>;

export const FOOTER_UI: Record<Locale, FooterUi> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.footer])) as Record<Locale, FooterUi>;

export const DESKTOP_ONLY_UI: Record<Locale, DesktopOnlyUi> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.desktopOnly])) as Record<Locale, DesktopOnlyUi>;

export const BREADCRUMBS_UI: Record<Locale, BreadcrumbsDictionary> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.breadcrumbs])) as Record<Locale, BreadcrumbsDictionary>;

export const CONTACT_FORM_UI: Record<Locale, ContactFormDictionary> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.contactForm])) as Record<Locale, ContactFormDictionary>;

export const TOOLS_CAROUSEL_UI: Record<Locale, ToolsCarouselDictionary> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.toolsCarousel])) as Record<Locale, ToolsCarouselDictionary>;

export const LANGUAGE_SWITCHER_UI: Record<Locale, LanguageSwitcherDictionary> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.languageSwitcher])) as Record<
  Locale,
  LanguageSwitcherDictionary
>;

export const MOBILE_NAV_UI: Record<Locale, MobileNavDictionary> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.mobileNav])) as Record<Locale, MobileNavDictionary>;

export const INFO_BANNER_UI: Record<Locale, InfoBannerDictionary> = Object.fromEntries(Object.entries(dicts).map(([k, d]) => [k, d.infoBanner])) as Record<Locale, InfoBannerDictionary>;
