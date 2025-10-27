import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = 'https://www.arteonagency.pl';

export const metadata: Metadata = {
  title: 'Mapa strony | Arteon',
  description: 'Przegląd najważniejszych sekcji i podstron: usługi, realizacje, blog, informacje.',
  alternates: { canonical: `${BASE_URL}/mapa-strony` },
};

type NavItem = { title: string; href: string; children?: NavItem[] };

const services: NavItem[] = [
  { href: '/uslugi/strony-internetowe', title: 'Strony internetowe' },
  { href: '/uslugi/sklepy-internetowe', title: 'Sklepy internetowe' },
  { href: '/uslugi/blogi-internetowe', title: 'Blogi internetowe' },
  {
    href: '/uslugi/projekty-graficzne',
    title: 'Projekty graficzne',
    children: [
      { href: '/uslugi/projekty-graficzne/projekt-graficzny-strony', title: 'Projekt graficzny strony' },
      { href: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej', title: 'Projekt identyfikacji wizualnej' },
      { href: '/uslugi/projekty-graficzne/projekt-katalogu', title: 'Projekt katalogu' },
      { href: '/uslugi/projekty-graficzne/projekt-logo', title: 'Projekt logo' },
      { href: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej', title: 'Projekt odzieży firmowej' },
      { href: '/uslugi/projekty-graficzne/projekt-papieru-firmowego', title: 'Projekt papieru firmowego' },
      { href: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej', title: 'Projekt teczki ofertowej' },
      { href: '/uslugi/projekty-graficzne/projekt-ulotki', title: 'Projekt ulotki' },
      { href: '/uslugi/projekty-graficzne/projekt-wizytowki', title: 'Projekt wizytówki' },
    ],
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

const portfolioIndex = { title: 'Wszystkie realizacje', href: '/realizacje' };
const portfolioItems: NavItem[] = [
  // { title: 'Nazwa projektu 1', href: '/realizacje/nazwa-projektu-1' },
];

const blogIndex = { title: 'Wszystkie artykuły', href: '/edukacja' };

const blogItems: NavItem[] = [
  //{ title: 'Wszystkie artykuły', href: '/edukacja' },
];

const infoPages: NavItem[] = [
  { title: 'Strona Główna', href: '/' },
  { title: 'O nas', href: '/o-nas' },
  { title: 'Kontakt', href: '/kontakt' },
  { title: 'Polityka prywatności', href: '/polityka-prywatnosci' },
  { title: 'Regulamin świadczenia usług', href: '/regulamin' },
];

export default function SitemapPage() {
  const showAllPortfolio = portfolioItems.length > 0 && portfolioItems.length <= 40;
  const showAllArticles = blogItems.length > 0 && blogItems.length <= 40;

  const jsonLd = buildJsonLd({ services, portfolioItems, infoPages });

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
              <Link href={portfolioIndex.href} className="font-medium underline-offset-4 hover:underline">
                {portfolioIndex.title}
              </Link>
            </p>
            {showAllPortfolio ? (
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {portfolioItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="underline-offset-4 hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="Edukacja">
            <p>
              <Link href={blogIndex.href} className="font-medium underline-offset-4 hover:underline">
                {blogIndex.title}
              </Link>
            </p>
            {showAllArticles ? (
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {blogItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="underline-offset-4 hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="Informacje">
            <ul>
              {infoPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="font-medium underline-offset-4 hover:underline">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </SectionInfo>
        </nav>

        <Gap size="sm" />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Wrapper>
    </>
  );
}

function NestedList({ items }: { items: NavItem[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="font-medium underline-offset-4 hover:underline">
            {item.title}
          </Link>
          {item.children && item.children.length > 0 && (
            <ul className="mt-1 ml-5 space-y-1 text-sm">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link href={item.href} className="font-medium underline-offset-4 hover:underline">
                    {child.title}
                  </Link>
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

function buildJsonLd({ services, portfolioItems, infoPages }: { services: NavItem[]; portfolioItems: NavItem[]; infoPages: NavItem[] }) {
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
