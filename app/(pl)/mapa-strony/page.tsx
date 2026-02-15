import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import AppLink from '@/components/ui/Link';
import type { Metadata } from 'next';
import type { NavItem } from '@/types/sitemap';

import { getAllArticlePreviews, getPrimaryCategorySlug } from '@/lib/blogDataService';
import { slugify } from '@/utils/slugify';
import { siteUrl } from '@/utils/absoluteUrl';
import type { ArticlePreview } from '@/types/article';
import projectsData from '@/data/pl/projects.json';

export const metadata: Metadata = {
  title: 'Mapa strony | Arteon',
  description: 'Mapa strony Arteon - przegląd najważniejszych sekcji i podstron: usługi, realizacje, blog, narzędzia, informacje.',
  alternates: { canonical: 'https://www.arteonagency.pl/mapa-strony' },
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
  { name: 'Szablony postów na media społecznościowe', path: '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe' },
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
  { href: '/uslugi/tworzenie-stron-wordpress', title: 'Strony WordPress' },
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

const articlePreviews = getAllArticlePreviews();
const blogCategories: NavItem[] = buildBlogCategoriesFromArticles(articlePreviews);

const blogArticleItems: NavItem[] = articlePreviews.map((a) => ({
  title: a.title,
  href: `/edukacja/${getPrimaryCategorySlug(a)}/${a.slug}`,
}));

const tools: NavItem[] = [
  { title: 'Konwerter JPG/PNG na WebP', href: '/narzedzia/jpg-png-na-webp-bez-limitu' },
  { title: 'Zmiana rozmiaru i kadrowanie zdjęcia', href: '/narzedzia/edytor-zdjec-online' },
  { title: 'Generator favicon online', href: '/narzedzia/darmowy-generator-favicon-ico' },
  { title: 'Licznik meta title i description', href: '/narzedzia/licznik-dlugosci-meta-title-i-description' },
  { title: 'Generator stopki mailowej HTML', href: '/narzedzia/darmowy-generator-stopki-mailowej' },
  { title: 'Kontrast i czytelność kolorów', href: '/narzedzia/kontrast-i-czytelnosc-kolorow' },
  { title: 'Generator palet kolorów', href: '/narzedzia/generator-palet-kolorow' },
  { title: 'Ekstraktor kolorów z obrazu', href: '/narzedzia/ekstraktor-kolorow-z-obrazu' },
  { title: 'Generator kodów QR', href: '/narzedzia/darmowy-generator-kodow-qr' },
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

export default function SitemapPage() {
  const showAllPortfolio = portfolioItems.length > 0 && portfolioItems.length <= 40;

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
      <Gap size="sm" />

      <Wrapper>
        <header>
          <h1>Mapa strony</h1>
          <p className="mt-2">Szybki przegląd kluczowych sekcji i podstron. Użyj tej strony, aby szybko dotrzeć do interesującej Cię treści.</p>
        </header>

        <Gap size="sm" />

        <nav aria-label="Mapa strony">
          <SectionInfo title="Usługi">
            <NestedList items={services} />
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="Realizacje">
            <p>
              <AppLink href={portfolioIndex.href} className="font-medium">
                {portfolioIndex.title}
              </AppLink>
            </p>
            {showAllPortfolio ? (
              <ul className="mt-2 space-y-2">
                {portfolioItems.map((item) => (
                  <li key={item.href}>
                    <AppLink href={item.href}>{item.title}</AppLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="Edukacja">
            <p>
              <AppLink href="/edukacja" className="font-medium">
                Wszystkie artykuły
              </AppLink>
            </p>
            <NestedList items={blogCategories} />
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="Narzędzia">
            <p>
              <AppLink href="/narzedzia" className="font-medium">
                Wszystkie narzędzia
              </AppLink>
            </p>
            <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {tools.map((tool) => (
                <li key={tool.href}>
                  <AppLink href={tool.href}>{tool.title}</AppLink>
                </li>
              ))}
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="Informacje">
            <ul>
              {infoPages.map((p) => (
                <li key={p.href}>
                  <AppLink href={p.href} className="font-medium">
                    {p.title}
                  </AppLink>
                </li>
              ))}
            </ul>
          </SectionInfo>
        </nav>

        <Gap size="sm" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Wrapper>
    </>
  );
}

function NestedList({ items }: { items: NavItem[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.href}>
          <AppLink href={item.href} className="font-medium">
            {item.title}
          </AppLink>
          {item.children && item.children.length > 0 && (
            <ul className="mt-1 ml-5 space-y-1 text-sm">
              {item.children.map((child) => (
                <li key={child.href}>
                  <AppLink href={child.href}>{child.title}</AppLink>
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

function buildBlogCategoriesFromArticles(articles: ArticlePreview[]): NavItem[] {
  const categoryMap = new Map<string, NavItem>();

  for (const article of articles) {
    const categories = Array.isArray(article.category) ? article.category : article.category ? [article.category] : ['Inne'];

    for (const catName of categories) {
      const catSlug = slugify(catName);

      if (!categoryMap.has(catSlug)) {
        categoryMap.set(catSlug, {
          title: catName,
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
        itemListElement: toListElements([{ title: 'Edukacja', href: '/edukacja' }, ...blogCategories, ...blogArticleItems]),
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
        itemListElement: toListElements([{ title: 'Narzędzia', href: '/narzedzia' }, ...tools]),
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
