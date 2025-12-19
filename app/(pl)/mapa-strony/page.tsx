import type { Metadata } from 'next';
import Link from 'next/link';

import blogData from '@/data/pl/blog.json';
import projectsData from '@/data/pl/projects.json';
import Wrapper from '@/components/ui/Wrapper';
import { slugify } from '@/utils/slug';

const BASE_URL = 'https://www.arteonagency.pl';

type NavItem = { title: string; href: string; children?: NavItem[] };

type Article = {
  slug: string;
  title: string;
  primaryCategory?: string;
  category?: string[];
};

type Project = {
  slug: string;
  title: string;
};

const GRAPHIC_SERVICES_SOURCE = [
  { name: 'Projekt wizytówki', path: '/uslugi/projekty-graficzne/projekt-wizytowki' },
  { name: 'Projekt ulotki', path: '/uslugi/projekty-graficzne/projekt-ulotki' },
  { name: 'Teczka ofertowa', path: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej' },
  { name: 'Papier firmowy', path: '/uslugi/projekty-graficzne/projekt-papieru-firmowego' },
  { name: 'Odzież firmowa', path: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej' },
  { name: 'Projekt logo', path: '/uslugi/projekty-graficzne/projekt-logo' },
  { name: 'Projekt katalogu', path: '/uslugi/projekty-graficzne/projekt-katalogu' },
  { name: 'Identyfikacja wizualna', path: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej' },
  { name: 'Projekt graficzny strony', path: '/uslugi/projekty-graficzne/projekt-graficzny-strony' },
  { name: 'Szablony postów na social media', path: '/uslugi/projekty-graficzne/szablony-postow-social-media' },
  { name: 'Kupony rabatowe i vouchery', path: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera' },
  { name: 'Projekt cennika', path: '/uslugi/projekty-graficzne/projekt-cennika' },
  { name: 'Karty lojalnościowe', path: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej' },
  { name: 'Projekt menu restauracji', path: '/uslugi/projekty-graficzne/projekt-menu-restauracji' },
];

const GRAPHIC_SERVICES: NavItem[] = GRAPHIC_SERVICES_SOURCE.map((s) => ({
  title: s.name,
  href: s.path,
}));

const services: NavItem[] = [
  { href: '/uslugi/strony-internetowe', title: 'Strony internetowe' },
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
      { href: '/uslugi/marketing/optymalizacja-seo', title: 'Optymalizacja SEO' },
      { href: '/uslugi/marketing/pozycjonowanie-stron', title: 'Pozycjonowanie stron' },
    ],
  },
];

const portfolioIndex: NavItem = { title: 'Wszystkie realizacje', href: '/realizacje' };

const portfolioItems: NavItem[] = ((projectsData as { projects: Project[] }).projects || []).map((p) => ({
  title: p.title,
  href: `/realizacje/${p.slug}`,
}));

function getArticleUrl(article: Article): string {
  const primaryCategory = article.primaryCategory || article.category?.[0] || 'Inne';
  return `/edukacja/${slugify(primaryCategory)}/${article.slug}`;
}

const articles = (blogData as { articles: Article[] }).articles || [];
const blogCategories: NavItem[] = buildBlogCategoriesFromArticles(articles);

const blogArticleItems: NavItem[] = articles.map((a) => ({
  title: a.title,
  href: getArticleUrl(a),
}));

const tools: NavItem[] = [
  { title: 'Konwerter JPG/PNG na WebP', href: '/narzedzia/jpg-png-na-webp-bez-limitu' },
  { title: 'Zmiana rozmiaru i kadrowanie zdjęcia', href: '/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia' },
  { title: 'Generator favicon online', href: '/narzedzia/darmowy-generator-favicon-ico' },
  { title: 'Licznik długości meta title i description', href: '/narzedzia/licznik-dlugosci-meta-title-i-description' },
  { title: 'Darmowy generator stopki mailowej HTML', href: '/narzedzia/darmowy-generator-stopki-mailowej' },
  { title: 'Tester kontrastu kolorów WCAG', href: '/narzedzia/tester-kontrastu-kolorow-wcag' },
  { title: 'Paleta kolorów z obrazu', href: '/narzedzia/generator-palety-kolorow-z-obrazu' },
  { title: 'Generator palet kolorów online', href: '/narzedzia/generator-palet-kolorow-online' },
];

const infoPages: NavItem[] = [
  { title: 'Strona główna', href: '/' },
  { title: 'Usługi', href: '/uslugi' },
  { title: 'Realizacje', href: '/realizacje' },
  { title: 'Edukacja', href: '/edukacja' },
  { title: 'Narzędzia', href: '/narzedzia' },
  { title: 'O nas', href: '/o-nas' },
  { title: 'FAQ', href: '/o-nas/faq' },
  { title: 'Dołącz do sieci', href: '/o-nas/dolacz-do-sieci' },
  { title: 'Kontakt', href: '/kontakt' },
  { title: 'Polityka prywatności', href: '/polityka-prywatnosci' },
  { title: 'Regulamin świadczenia usług', href: '/regulamin' },
  { title: 'Mapa strony', href: '/mapa-strony' },
];

export const metadata: Metadata = {
  title: 'Mapa strony | Arteon',
  description: 'Mapa strony Arteon - przegląd najważniejszych sekcji i podstron: usługi, realizacje, blog, narzędzia, informacje.',
  alternates: { canonical: 'https://www.arteonagency.pl/mapa-strony' },
};

function SitemapSection({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <section className="mb-8">
      <h2 className="h4 mb-4">{title}</h2>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-slate-700 hover:text-slate-900 hover:underline">
              {item.title}
            </Link>
            {item.children && item.children.length > 0 && (
              <ul className="mt-1 ml-4 space-y-1">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className="text-sm text-slate-500 hover:text-slate-700 hover:underline">
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function SitemapPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Wrapper className="py-12">
        <nav aria-label="okruszki" className="mb-6">
          <ol className="flex gap-2 text-sm">
            <li>
              <Link href="/" className="text-slate-700 hover:underline">
                Strona główna
              </Link>
              <span className="ml-2 text-slate-400">/</span>
            </li>
            <li>
              <span className="text-slate-500" aria-current="page">
                Mapa strony
              </span>
            </li>
          </ol>
        </nav>

        <h1 className="h2 mb-8">Mapa strony</h1>

        <SitemapSection title="Usługi" items={services} />
        <SitemapSection title="Realizacje" items={[portfolioIndex, ...portfolioItems]} />
        <SitemapSection title="Edukacja" items={blogArticleItems} />
        <SitemapSection title="Narzędzia" items={tools} />
        <SitemapSection title="Informacje" items={infoPages} />
      </Wrapper>
    </>
  );
}

function abs(url: string) {
  return url.startsWith('http') ? url : `${BASE_URL}${url}`;
}

function toListElements(arr: NavItem[]) {
  return arr.map((i, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    url: abs(i.href),
    name: i.title,
  }));
}

function buildBlogCategoriesFromArticles(articles: Article[]): NavItem[] {
  const categoryMap = new Map<string, NavItem>();

  for (const article of articles) {
    const allCats = [article.primaryCategory, ...(article.category || [])].filter(Boolean) as string[];
    const categories = allCats.length ? Array.from(new Set(allCats)) : ['Inne'];

    for (const catName of categories) {
      const slug = slugify(catName);
      const key = slug;

      if (!categoryMap.has(key)) {
        categoryMap.set(key, {
          title: catName,
          href: `/edukacja/${slug}`,
          children: [],
        });
      }

      const categoryItem = categoryMap.get(key)!;
      categoryItem.children!.push({
        title: article.title,
        href: getArticleUrl(article),
      });
    }
  }

  return Array.from(categoryMap.values()).sort((a, b) => a.title.localeCompare(b.title, 'pl'));
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
  const servicesChildren = services.flatMap((s) => s.children ?? []);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/mapa-strony`,
        name: 'Mapa strony',
        url: `${BASE_URL}/mapa-strony`,
      },
      {
        '@type': 'SiteNavigationElement',
        '@id': `${BASE_URL}/#nav-uslugi`,
        name: 'Usługi',
        url: `${BASE_URL}/uslugi`,
      },
      {
        '@type': 'ItemList',
        '@id': `${BASE_URL}/#sitemap-uslugi`,
        name: 'Mapa strony - Usługi',
        itemListElement: toListElements([...services, ...servicesChildren]),
      },
      {
        '@type': 'SiteNavigationElement',
        '@id': `${BASE_URL}/#nav-edukacja`,
        name: 'Edukacja',
        url: `${BASE_URL}/edukacja`,
      },
      {
        '@type': 'ItemList',
        '@id': `${BASE_URL}/#sitemap-edukacja`,
        name: 'Mapa strony - Edukacja',
        itemListElement: toListElements([{ title: 'Edukacja', href: '/edukacja' }, ...blogCategories, ...blogArticleItems]),
      },
      {
        '@type': 'SiteNavigationElement',
        '@id': `${BASE_URL}/#nav-narzedzia`,
        name: 'Narzędzia',
        url: `${BASE_URL}/narzedzia`,
      },
      {
        '@type': 'ItemList',
        '@id': `${BASE_URL}/#sitemap-narzedzia`,
        name: 'Mapa strony - Narzędzia',
        itemListElement: toListElements([{ title: 'Narzędzia', href: '/narzedzia' }, ...tools]),
      },
      {
        '@type': 'ItemList',
        '@id': `${BASE_URL}/#sitemap-realizacje`,
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
        '@id': `${BASE_URL}/#sitemap-informacje`,
        name: 'Mapa strony - Informacje',
        itemListElement: toListElements(infoPages),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/#breadcrumbs`,
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
