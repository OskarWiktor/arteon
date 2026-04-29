import { OFFER_SECTIONS_PL, ABOUT_NAV_ITEMS_PL } from '@/components/shared/navigation-data/pl';
import searchBlog from '@/data/pl/search-blog.json';
import searchProjects from '@/data/pl/search-projects.json';
import { slugify } from '@/utils/slugify';
import { getToolsList } from '@/lib/i18n/tool-registry';
import { LOCALE_CONFIG } from '@/lib/i18n/locales';

import type { Locale } from '@/types/locale';
import type { SearchCategory, SearchItem } from '@/types/search';
export type { SearchCategory, SearchItem } from '@/types/search';

type SearchBlogEntry = { s: string; t: string; e: string; c: string; k: string[] };
type SearchProjectEntry = { s: string; t: string; d: string; k: string[] };

// ---------------------------------------------------------------------------
// PL-only static pages (services, blog, projects, about sub-pages exist only for PL)
// ---------------------------------------------------------------------------

const STATIC_PAGES_PL: SearchItem[] = [
  {
    title: 'Strona główna',
    description: 'Arteon - strony internetowe, sklepy, marketing i projekty graficzne',
    href: '/',
    category: 'inne',
    categoryLabel: 'Strony',
    keywords: ['home', 'start', 'główna'],
  },
  {
    title: 'Realizacje',
    description: 'Portfolio projektów - strony, sklepy, grafika',
    href: '/realizacje',
    category: 'realizacje',
    categoryLabel: 'Realizacje',
    keywords: ['portfolio', 'projekty', 'case study'],
  },
  {
    title: 'Usługi',
    description: 'Oferta usług - witryny, marketing, projekty graficzne, treści',
    href: '/uslugi',
    category: 'uslugi',
    categoryLabel: 'Usługi',
    keywords: ['oferta', 'cennik'],
  },
  {
    title: 'O nas',
    description: 'Kim jesteśmy, jak pracujemy, technologie',
    href: '/o-nas',
    category: 'inne',
    categoryLabel: 'Strony',
    keywords: ['zespół', 'firma', 'agencja'],
  },
  {
    title: 'Kontakt',
    description: 'Skontaktuj się - formularz, e-mail, telefon',
    href: '/kontakt',
    category: 'inne',
    categoryLabel: 'Strony',
    keywords: ['formularz', 'email', 'telefon', 'wiadomość'],
  },
  {
    title: 'Edukacja',
    description: 'Blog i artykuły o stronach WWW, SEO i marketingu',
    href: '/edukacja',
    category: 'edukacja',
    categoryLabel: 'Edukacja',
    keywords: ['blog', 'artykuły', 'poradniki'],
  },
  {
    title: 'Narzędzia',
    description: 'Darmowe narzędzia online - konwertery, generatory, testery',
    href: '/narzedzia',
    category: 'narzedzia',
    categoryLabel: 'Narzędzia',
    keywords: ['tools', 'generator', 'konwerter'],
  },
];

// ---------------------------------------------------------------------------
// Non-PL static pages (tools index + about + contact + privacy + terms)
// ---------------------------------------------------------------------------

interface StaticPageDef {
  titleKey: string;
  hrefKey: 'toolsIndexHref' | 'aboutHref' | 'contactHref' | 'privacyHref';
  category: SearchCategory;
}

const NON_PL_PAGE_DEFS: StaticPageDef[] = [
  { titleKey: 'toolsIndex', hrefKey: 'toolsIndexHref', category: 'narzedzia' },
  { titleKey: 'about', hrefKey: 'aboutHref', category: 'inne' },
  { titleKey: 'contact', hrefKey: 'contactHref', category: 'inne' },
  { titleKey: 'privacy', hrefKey: 'privacyHref', category: 'inne' },
];

const NON_PL_PAGE_TITLES: Record<string, Record<string, string>> = {
  toolsIndex: {
    en: 'Tools',
    de: 'Werkzeuge',
    es: 'Herramientas',
    fr: 'Outils',
    pt: 'Ferramentas',
    it: 'Strumenti',
    ro: 'Instrumente',
    nl: 'Tools',
    hu: 'Eszközök',
    cs: 'Nástroje',
    sv: 'Verktyg',
    da: 'Værktøjer',
    no: 'Verktøy',
    fi: 'Työkalut',
    el: 'Εργαλεία',
  },
  about: {
    en: 'About',
    de: 'Über uns',
    es: 'Sobre nosotros',
    fr: 'À propos',
    pt: 'Sobre nós',
    it: 'Chi siamo',
    ro: 'Despre noi',
    nl: 'Over ons',
    hu: 'Rólunk',
    cs: 'O nás',
    sv: 'Om oss',
    da: 'Om os',
    no: 'Om oss',
    fi: 'Tietoa meistä',
    el: 'Σχετικά με εμάς',
  },
  contact: {
    en: 'Contact',
    de: 'Kontakt',
    es: 'Contacto',
    fr: 'Contact',
    pt: 'Contacto',
    it: 'Contatto',
    ro: 'Contact',
    nl: 'Contact',
    hu: 'Kapcsolat',
    cs: 'Kontakt',
    sv: 'Kontakt',
    da: 'Kontakt',
    no: 'Kontakt',
    fi: 'Yhteystiedot',
    el: 'Επικοινωνία',
  },
  privacy: {
    en: 'Privacy Policy',
    de: 'Datenschutzrichtlinie',
    es: 'Política de privacidad',
    fr: 'Politique de confidentialité',
    pt: 'Política de privacidade',
    it: 'Informativa sulla privacy',
    ro: 'Politica de confidențialitate',
    nl: 'Privacybeleid',
    hu: 'Adatvédelmi irányelvek',
    cs: 'Zásady ochrany soukromí',
    sv: 'Integritetspolicy',
    da: 'Privatlivspolitik',
    no: 'Personvernpolicy',
    fi: 'Tietosuojakäytäntö',
    el: 'Πολιτική απορρήτου',
  },
};

function buildStaticPagesForLocale(locale: Locale, categoryLabels: Record<SearchCategory, string>): SearchItem[] {
  if (locale === 'pl') return STATIC_PAGES_PL;

  const config = LOCALE_CONFIG[locale];
  const pages: SearchItem[] = [];

  for (const def of NON_PL_PAGE_DEFS) {
    const href = config[def.hrefKey];
    if (!href) continue;
    const title = NON_PL_PAGE_TITLES[def.titleKey]?.[locale];
    if (!title) continue;

    pages.push({
      title,
      href,
      category: def.category,
      categoryLabel: categoryLabels[def.category],
    });
  }

  return pages;
}

// ---------------------------------------------------------------------------
// PL-only: services, about sub-pages, blog, projects
// ---------------------------------------------------------------------------

function buildServicesIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const section of OFFER_SECTIONS_PL) {
    if (section.hubHref) {
      items.push({
        title: section.title,
        href: section.hubHref,
        category: 'uslugi',
        categoryLabel: 'Usługi',
      });
    }

    for (const item of section.items) {
      items.push({
        title: item.title,
        description: item.desc,
        href: item.href,
        category: 'uslugi',
        categoryLabel: 'Usługi',
      });
    }
  }

  return items;
}

function buildAboutIndex(): SearchItem[] {
  return ABOUT_NAV_ITEMS_PL.map((item) => ({
    title: item.title,
    href: item.href,
    category: 'inne' as SearchCategory,
    categoryLabel: 'Strony',
  }));
}

function buildBlogIndex(): SearchItem[] {
  return (searchBlog as SearchBlogEntry[]).map((a) => ({
    title: a.t,
    description: a.e,
    href: `/edukacja/${slugify(a.c)}/${a.s}`,
    category: 'edukacja',
    categoryLabel: 'Edukacja',
    keywords: a.k,
  }));
}

function buildProjectsIndex(): SearchItem[] {
  return (searchProjects as SearchProjectEntry[]).map((p) => ({
    title: p.t,
    description: p.d,
    href: `/realizacje/${p.s}`,
    category: 'realizacje',
    categoryLabel: 'Realizacje',
    keywords: p.k,
  }));
}

// ---------------------------------------------------------------------------
// Tools index — built from TOOL_REGISTRY for all locales
// ---------------------------------------------------------------------------

function buildToolsIndex(locale: Locale, categoryLabel: string): SearchItem[] {
  return getToolsList(locale).map((tool) => ({
    title: tool.title,
    description: tool.description,
    href: tool.href,
    category: 'narzedzia' as SearchCategory,
    categoryLabel,
  }));
}

// ---------------------------------------------------------------------------
// Per-locale cached index
// ---------------------------------------------------------------------------

const cachedIndexes = new Map<Locale, SearchItem[]>();

export function getSearchIndex(locale: Locale, categoryLabels?: Record<SearchCategory, string>): SearchItem[] {
  const cached = cachedIndexes.get(locale);
  if (cached) return cached;

  const labels: Record<SearchCategory, string> = categoryLabels ?? {
    uslugi: 'Usługi',
    narzedzia: 'Narzędzia',
    edukacja: 'Edukacja',
    realizacje: 'Realizacje',
    inne: 'Strony',
  };

  const toolsLabel = labels.narzedzia;
  const staticPages = buildStaticPagesForLocale(locale, labels);
  const tools = buildToolsIndex(locale, toolsLabel);

  let index: SearchItem[];

  if (locale === 'pl') {
    index = [...staticPages, ...buildServicesIndex(), ...tools, ...buildAboutIndex(), ...buildBlogIndex(), ...buildProjectsIndex()];
  } else {
    index = [...staticPages, ...tools];
  }

  cachedIndexes.set(locale, index);
  return index;
}

export function searchItems(query: string, locale: Locale, limit = 20, categoryLabels?: Record<SearchCategory, string>): SearchItem[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const index = getSearchIndex(locale, categoryLabels);

  const scored = index
    .map((item) => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const descLower = (item.description || '').toLowerCase();
      const keywordsJoined = (item.keywords || []).join(' ').toLowerCase();

      for (const term of terms) {
        if (titleLower.includes(term)) {
          score += titleLower === term ? 100 : titleLower.startsWith(term) ? 50 : 20;
        }
        if (descLower.includes(term)) {
          score += 10;
        }
        if (keywordsJoined.includes(term)) {
          score += 15;
        }
      }

      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);

  return scored;
}

export function groupSearchResults(items: SearchItem[]): Record<SearchCategory, SearchItem[]> {
  const groups: Record<SearchCategory, SearchItem[]> = {
    uslugi: [],
    narzedzia: [],
    edukacja: [],
    realizacje: [],
    inne: [],
  };

  for (const item of items) {
    groups[item.category].push(item);
  }

  return groups;
}
