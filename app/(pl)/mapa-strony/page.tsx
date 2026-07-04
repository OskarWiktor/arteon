import type { Metadata } from 'next';
import Divider from '@/components/atoms/Divider';
import InlineLink from '@/components/atoms/InlineLink';
import { JsonLd } from '@/components/atoms/JsonLd';
import Wrapper from '@/components/atoms/Wrapper';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import projectsData from '@/data/pl/projects.json';
import {
  getAllArticlePreviews,
  getPrimaryCategorySlug,
} from '@/lib/blogDataService';
import {
  TOOL_REGISTRY,
  getToolHref,
  getToolTitle,
} from '@/lib/i18n/toolRegistry';
import type { ArticlePreview } from '@/types/article';
import { siteUrl } from '@/utils/absoluteUrl';
import { slugify } from '@/utils/slugify';
import type { NavItem } from './SitemapPageClient';

export const metadata: Metadata = {
  title: 'Mapa strony | Arteon',
  description:
    'Mapa strony Arteon - przegląd najważniejszych sekcji i podstron: usługi, realizacje, blog, narzędzia, informacje.',
  alternates: { canonical: 'https://www.arteonagency.pl/mapa-strony' },
};

type Project = {
  slug: string;
  title: string;
};

const GRAPHIC_SERVICES_SOURCE = [
  {
    name: 'Projekt wizytówki',
    path: '/uslugi/projekty-graficzne/projekt-wizytowki',
  },
  { name: 'Projekt ulotki', path: '/uslugi/projekty-graficzne/projekt-ulotki' },
  {
    name: 'Teczka ofertowa',
    path: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej',
  },
  {
    name: 'Papier firmowy',
    path: '/uslugi/projekty-graficzne/projekt-papieru-firmowego',
  },
  {
    name: 'Odzież firmowa',
    path: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
  },
  { name: 'Projekt logo', path: '/uslugi/projekty-graficzne/projekt-logo' },
  {
    name: 'Projekt katalogu',
    path: '/uslugi/projekty-graficzne/projekt-katalogu',
  },
  {
    name: 'Identyfikacja wizualna',
    path: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
  },
  {
    name: 'Projekt graficzny strony',
    path: '/uslugi/projekty-graficzne/projekt-graficzny-strony',
  },
  {
    name: 'Szablony postów na media społecznościowe',
    path: '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe',
  },
  {
    name: 'Kupony rabatowe i vouchery',
    path: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera',
  },
  {
    name: 'Projekt cennika',
    path: '/uslugi/projekty-graficzne/projekt-cennika',
  },
  {
    name: 'Karty lojalnościowe',
    path: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
  },
  {
    name: 'Projekt menu restauracji',
    path: '/uslugi/projekty-graficzne/projekt-menu-restauracji',
  },
];

const GRAPHIC_SERVICES: NavItem[] = GRAPHIC_SERVICES_SOURCE.map(s => ({
  title: s.name,
  href: s.path,
}));

const services: NavItem[] = [
  {
    href: '/uslugi/tworzenie-stron-wordpress',
    title: 'Strony WordPress',
    children: [
      {
        href: '/uslugi/tworzenie-stron-wordpress/optymalizacja-strony-wordpress',
        title: 'Optymalizacja stron WordPress',
      },
    ],
  },
  { href: '/uslugi/sklepy-internetowe', title: 'Sklepy internetowe' },
  { href: '/uslugi/blogi-internetowe', title: 'Blogi internetowe' },
  {
    href: '/uslugi/projekty-graficzne',
    title: 'Projekty graficzne',
    children: GRAPHIC_SERVICES,
  },
  { href: '/uslugi/tworzenie-tresci', title: 'Tworzenie treści' },
  {
    href: '/uslugi/marketing',
    title: 'Marketing',
    children: [
      { href: '/uslugi/marketing/audyt-seo', title: 'Audyt SEO' },
      {
        href: '/uslugi/marketing/optymalizacja-seo',
        title: 'Optymalizacja SEO',
      },
      {
        href: '/uslugi/marketing/pozycjonowanie-stron',
        title: 'Pozycjonowanie stron',
      },
    ],
  },
];

const portfolioIndex: NavItem = {
  title: 'Wszystkie realizacje',
  href: '/realizacje',
};

const portfolioItems: NavItem[] = (
  (projectsData as { projects: Project[] }).projects || []
).map(p => ({
  title: p.title,
  href: `/realizacje/${p.slug}`,
}));

const articlePreviews = getAllArticlePreviews();
const blogCategories: NavItem[] =
  buildBlogCategoriesFromArticles(articlePreviews);

const blogArticleItems: NavItem[] = articlePreviews.map(a => ({
  title: a.title,
  href: `/edukacja/${getPrimaryCategorySlug(a)}/${a.slug}`,
}));

// Every tool available in PL, derived from the registry so the sitemap can
// never drift out of sync with what actually exists (the old hardcoded list
// covered only 9 of ~95 tools).
const tools: NavItem[] = TOOL_REGISTRY.filter(tool => tool.locales.pl)
  .map(tool => ({
    title: getToolTitle(tool.key, 'pl'),
    href: getToolHref(tool.key, 'pl'),
  }))
  .sort((a, b) => a.title.localeCompare(b.title, 'pl'));

const infoPages: NavItem[] = [
  { title: 'Strona główna', href: '/' },
  { title: 'Usługi', href: '/uslugi' },
  { title: 'Realizacje', href: '/realizacje' },
  { title: 'Edukacja', href: '/edukacja' },
  { title: 'Narzędzia', href: '/narzedzia' },
  { title: 'O nas', href: '/o-nas' },
  { title: 'Kontakt', href: '/kontakt' },
  { title: 'Polityka prywatności', href: '/polityka-prywatnosci' },
  { title: 'Regulamin świadczenia usług', href: '/regulamin' },
  { title: 'Mapa strony', href: '/mapa-strony' },
];

export default function SitemapPage() {
  const showAllPortfolio =
    portfolioItems.length > 0 && portfolioItems.length <= 40;

  const jsonLd = buildJsonLd({
    services,
    portfolioItems,
    infoPages,
    blogCategories,
    blogArticleItems,
    tools,
  });

  return (
    <>
      <Divider size='sm' />

      <Wrapper>
        <header>
          <h1>Mapa strony</h1>
          <p className='mt-2'>
            Szybki przegląd kluczowych sekcji i podstron. Użyj tej strony, aby
            szybko dotrzeć do interesującej Cię treści.
          </p>
        </header>

        <Divider size='sm' />

        <nav aria-label='Mapa strony'>
          <SectionInfo title='Usługi'>
            <NestedList items={services} />
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='Realizacje'>
            <p>
              <InlineLink href={portfolioIndex.href} className='font-medium'>
                {portfolioIndex.title}
              </InlineLink>
            </p>
            {showAllPortfolio ? (
              <ul className='mt-2 space-y-2'>
                {portfolioItems.map(item => (
                  <li key={item.href}>
                    <InlineLink href={item.href}>{item.title}</InlineLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='Edukacja'>
            <p>
              <InlineLink href='/edukacja' className='font-medium'>
                Wszystkie artykuły
              </InlineLink>
            </p>
            <NestedList items={blogCategories} />
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='Narzędzia'>
            <p>
              <InlineLink href='/narzedzia' className='font-medium'>
                Wszystkie narzędzia
              </InlineLink>
            </p>
            <ul className='mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4'>
              {tools.map(tool => (
                <li key={tool.href}>
                  <InlineLink href={tool.href}>{tool.title}</InlineLink>
                </li>
              ))}
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='Informacje'>
            <ul>
              {infoPages.map(p => (
                <li key={p.href}>
                  <InlineLink href={p.href} className='font-medium'>
                    {p.title}
                  </InlineLink>
                </li>
              ))}
            </ul>
          </SectionInfo>
        </nav>

        <Divider size='sm' />

        <JsonLd schema={jsonLd} id='schema-sitemap-itemlist' />
      </Wrapper>
    </>
  );
}

function NestedList({ items }: { items: NavItem[] }) {
  return (
    <ul className='space-y-2'>
      {items.map(item => (
        <li key={item.href}>
          <InlineLink href={item.href} className='font-medium'>
            {item.title}
          </InlineLink>
          {item.children && item.children.length > 0 && (
            <ul className='mt-1 ml-5 space-y-1 text-sm'>
              {item.children.map(child => (
                <li key={child.href}>
                  <InlineLink href={child.href}>{child.title}</InlineLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

function abs(url: string) {
  return url.startsWith('http') ? url : `${siteUrl}${url}`;
}

function toListElements(arr: NavItem[]) {
  return arr.map((i, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    url: abs(i.href),
    name: i.title,
  }));
}

function buildBlogCategoriesFromArticles(
  articles: ArticlePreview[],
): NavItem[] {
  const categoryMap = new Map<string, NavItem>();

  for (const article of articles) {
    const categoryName = article.primaryCategory || 'Inne';
    const catSlug = slugify(categoryName);

    if (!categoryMap.has(catSlug)) {
      categoryMap.set(catSlug, {
        title: categoryName,
        href: `/edukacja/${catSlug}`,
        children: [],
      });
    }

    const categoryItem = categoryMap.get(catSlug)!;
    categoryItem.children!.push({
      title: article.title,
      href: `/edukacja/${getPrimaryCategorySlug(article)}/${article.slug}`,
    });
  }

  return Array.from(categoryMap.values()).sort((a, b) =>
    a.title.localeCompare(b.title, 'pl'),
  );
}

function buildJsonLd({
  services,
  portfolioItems,
  infoPages,
  blogCategories,
  blogArticleItems,
  tools,
}: {
  services: NavItem[];
  portfolioItems: NavItem[];
  infoPages: NavItem[];
  blogCategories: NavItem[];
  blogArticleItems: NavItem[];
  tools: NavItem[];
}) {
  const servicesChildren = services.flatMap(s => s.children ?? []);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/mapa-strony`,
        name: 'Mapa strony',
        url: `${siteUrl}/mapa-strony`,
      },
      {
        '@type': 'SiteNavigationElement',
        '@id': `${siteUrl}/#nav-uslugi`,
        name: 'Usługi',
        url: `${siteUrl}/uslugi`,
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#sitemap-uslugi`,
        name: 'Mapa strony - Usługi',
        itemListElement: toListElements([...services, ...servicesChildren]),
      },
      {
        '@type': 'SiteNavigationElement',
        '@id': `${siteUrl}/#nav-edukacja`,
        name: 'Edukacja',
        url: `${siteUrl}/edukacja`,
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#sitemap-edukacja`,
        name: 'Mapa strony - Edukacja',
        itemListElement: toListElements([
          { title: 'Edukacja', href: '/edukacja' },
          ...blogCategories,
          ...blogArticleItems,
        ]),
      },
      {
        '@type': 'SiteNavigationElement',
        '@id': `${siteUrl}/#nav-narzedzia`,
        name: 'Narzędzia',
        url: `${siteUrl}/narzedzia`,
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#sitemap-narzedzia`,
        name: 'Mapa strony - Narzędzia',
        itemListElement: toListElements([
          { title: 'Narzędzia', href: '/narzedzia' },
          ...tools,
        ]),
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#sitemap-realizacje`,
        name: 'Mapa strony - Realizacje',
        itemListElement:
          portfolioItems.length > 0
            ? toListElements(portfolioItems)
            : [
                {
                  '@type': 'ListItem',
                  position: 1,
                  url: abs('/realizacje'),
                  name: 'Wszystkie realizacje',
                },
              ],
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#sitemap-informacje`,
        name: 'Mapa strony - Informacje',
        itemListElement: toListElements(infoPages),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Start', item: abs('/') },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Mapa strony',
            item: abs('/mapa-strony'),
          },
        ],
      },
    ],
  };
}
