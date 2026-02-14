import { OFFER_SECTIONS_PL, TOOLS_SECTIONS_PL, ABOUT_NAV_ITEMS_PL } from '@/components/shared/navigation-data/pl';
import searchBlog from '@/data/pl/search-blog.json';
import searchProjects from '@/data/pl/search-projects.json';

import type { SearchCategory, SearchItem } from '@/types/search';
export type { SearchCategory, SearchItem } from '@/types/search';

type SearchBlogEntry = { s: string; t: string; e: string; c: string; k: string[] };
type SearchProjectEntry = { s: string; t: string; d: string; k: string[] };

const STATIC_PAGES: SearchItem[] = [
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
    description: 'Skontaktuj się z nami - formularz, e-mail, telefon',
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

function buildToolsIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const section of TOOLS_SECTIONS_PL) {
    for (const item of section.items) {
      items.push({
        title: item.title,
        description: item.description,
        href: item.href,
        category: 'narzedzia',
        categoryLabel: 'Narzędzia',
        keywords: [section.title.toLowerCase()],
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
    href: `/edukacja/${a.c.toLowerCase()}/${a.s}`,
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

let cachedIndex: SearchItem[] | null = null;

export function getSearchIndex(): SearchItem[] {
  if (cachedIndex) return cachedIndex;

  cachedIndex = [...STATIC_PAGES, ...buildServicesIndex(), ...buildToolsIndex(), ...buildAboutIndex(), ...buildBlogIndex(), ...buildProjectsIndex()];

  return cachedIndex;
}

export function searchItems(query: string, limit = 20): SearchItem[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const index = getSearchIndex();

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
