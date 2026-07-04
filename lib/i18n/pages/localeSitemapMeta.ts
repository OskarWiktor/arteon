import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';
import type { Locale } from '@/types/locale';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

/**
 * Per-locale HTML sitemap ("site map") pages. Each lists every tool available in
 * that locale plus the locale's information pages — unlike the tools index, which
 * only surfaces a subset. PL keeps its richer /mapa-strony (services, projects,
 * blog); the other locales get a tools + info hub at the slug below.
 */
interface LocaleSitemapMeta {
  /** Absolute-from-root path of the sitemap page in this locale. */
  path: string;
  title: string;
  description: string;
  intro: string;
  /** Heading for the block of information/legal pages. */
  infoHeading: string;
}

export const LOCALE_SITEMAP_META: Record<Locale, LocaleSitemapMeta> = {
  pl: {
    path: '/mapa-strony',
    title: 'Mapa strony',
    description:
      'Mapa strony Arteon - przegląd wszystkich sekcji i podstron: usługi, realizacje, blog, narzędzia, informacje.',
    intro:
      'Szybki przegląd wszystkich sekcji i podstron. Użyj tej strony, aby dotrzeć do interesującej Cię treści.',
    infoHeading: 'Informacje',
  },
  en: {
    path: '/en/sitemap',
    title: 'Sitemap',
    description:
      'Sitemap of Arteon — every free tool and information page available in English, in one place.',
    intro: 'A complete list of every free tool and page available in English.',
    infoHeading: 'Information',
  },
  de: {
    path: '/de/sitemap',
    title: 'Sitemap',
    description:
      'Sitemap von Arteon — alle kostenlosen Werkzeuge und Informationsseiten auf einen Blick.',
    intro:
      'Eine vollständige Liste aller kostenlosen Werkzeuge und Seiten auf Deutsch.',
    infoHeading: 'Informationen',
  },
  es: {
    path: '/es/mapa-del-sitio',
    title: 'Mapa del sitio',
    description:
      'Mapa del sitio de Arteon — todas las herramientas gratuitas y páginas de información en un solo lugar.',
    intro:
      'Lista completa de todas las herramientas gratuitas y páginas en español.',
    infoHeading: 'Información',
  },
  fr: {
    path: '/fr/plan-du-site',
    title: 'Plan du site',
    description:
      'Plan du site Arteon — tous les outils gratuits et pages d’information au même endroit.',
    intro: 'Liste complète de tous les outils gratuits et pages en français.',
    infoHeading: 'Informations',
  },
  pt: {
    path: '/pt/mapa-do-site',
    title: 'Mapa do site',
    description:
      'Mapa do site da Arteon — todas as ferramentas gratuitas e páginas de informação num só lugar.',
    intro:
      'Lista completa de todas as ferramentas gratuitas e páginas em português.',
    infoHeading: 'Informações',
  },
  it: {
    path: '/it/mappa-del-sito',
    title: 'Mappa del sito',
    description:
      'Mappa del sito Arteon — tutti gli strumenti gratuiti e le pagine informative in un unico posto.',
    intro:
      'Elenco completo di tutti gli strumenti gratuiti e delle pagine in italiano.',
    infoHeading: 'Informazioni',
  },
  cs: {
    path: '/cs/mapa-webu',
    title: 'Mapa webu',
    description:
      'Mapa webu Arteon — všechny bezplatné nástroje a informační stránky na jednom místě.',
    intro: 'Úplný seznam všech bezplatných nástrojů a stránek v češtině.',
    infoHeading: 'Informace',
  },
  el: {
    path: '/el/xartis-istotopou',
    title: 'Χάρτης ιστότοπου',
    description:
      'Χάρτης ιστότοπου της Arteon — όλα τα δωρεάν εργαλεία και οι σελίδες πληροφοριών σε ένα μέρος.',
    intro:
      'Πλήρης κατάλογος όλων των δωρεάν εργαλείων και σελίδων στα ελληνικά.',
    infoHeading: 'Πληροφορίες',
  },
};

/** `alternates` (canonical + hreflang for every locale + x-default) for a sitemap page. */
export function getLocaleSitemapAlternates(locale: Locale) {
  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    languages[LOCALE_CONFIG[loc].hreflang] = toAbsoluteUrl(
      LOCALE_SITEMAP_META[loc].path,
    );
  }
  languages['x-default'] = toAbsoluteUrl(LOCALE_SITEMAP_META.en.path);

  return {
    canonical: toAbsoluteUrl(LOCALE_SITEMAP_META[locale].path),
    languages,
  };
}
