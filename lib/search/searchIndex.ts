import { OFFER_SECTIONS_PL, TOOLS_SECTIONS_PL, ABOUT_NAV_ITEMS_PL } from '@/components/shared/navigation-data/pl';
import blogData from '@/data/pl/blog.json';
import projectsData from '@/data/pl/projects.json';

export type SearchCategory = 'uslugi' | 'narzedzia' | 'edukacja' | 'realizacje' | 'inne';

export type SearchItem = {
  title: string;
  description?: string;
  href: string;
  category: SearchCategory;
  categoryLabel: string;
  keywords?: string[];
};

const STATIC_PAGES: SearchItem[] = [
  {
    title: 'Strona główna',
    description: 'Arteon — strony internetowe, sklepy, marketing i projekty graficzne',
    href: '/',
    category: 'inne',
    categoryLabel: 'Strony',
    keywords: ['home', 'start', 'główna'],
  },
  {
    title: 'Realizacje',
    description: 'Portfolio projektów — strony, sklepy, grafika',
    href: '/realizacje',
    category: 'realizacje',
    categoryLabel: 'Realizacje',
    keywords: ['portfolio', 'projekty', 'case study'],
  },
  {
    title: 'Usługi',
    description: 'Oferta usług — witryny, marketing, projekty graficzne, treści',
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
    description: 'Skontaktuj się z nami — formularz, e-mail, telefon',
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
    description: 'Darmowe narzędzia online — konwertery, generatory, testery',
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
  return blogData.articles.map((article) => {
    const categorySlug = article.primaryCategory.toLowerCase();
    return {
      title: article.title,
      description: article.excerpt,
      href: `/edukacja/${categorySlug}/${article.slug}`,
      category: 'edukacja',
      categoryLabel: 'Edukacja',
      keywords: article.tags,
    };
  });
}

function buildProjectsIndex(): SearchItem[] {
  return projectsData.projects.map((project) => ({
    title: project.title,
    description: project.short,
    href: `/realizacje/${project.slug}`,
    category: 'realizacje',
    categoryLabel: 'Realizacje',
    keywords: project.category,
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
