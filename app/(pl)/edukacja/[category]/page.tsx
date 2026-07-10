import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import Filters from '@/components/molecules/Filters';
import ArticlesList from '@/components/organisms/ArticlesList';
import HeroBanner from '@/components/organisms/HeroBanner';
import {
  getAllArticlePreviews,
  getCategoriesWithCount,
  getPrimaryCategorySlug,
} from '@/lib/blogDataService';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { slugify } from '@/utils/slugify';

const DEFAULT_META_DESCRIPTION = (label: string) =>
  `Artykuły i poradniki: ${label}.`;

const DEFAULT_OPEN_GRAPH_DESCRIPTION = (label: string) => `Artykuły: ${label}.`;

const DEFAULT_HERO_DESCRIPTION = (label: string) =>
  `Artykuły i poradniki: ${label}.`;

const CATEGORY_CONTENT_BY_SLUG: Record<
  string,
  {
    heroTitle: string;
    heroDescription: string;
    metaDescription: string;
    openGraphDescription: string;
    heroImage: string;
  }
> = {
  seo: {
    heroTitle: 'Artykuły dotyczące działać seo',
    heroDescription:
      'Artykuły o pozycjonowaniu i widoczności w Google. Dowiedz się, co wpływa na widoczność stron w Google.',
    metaDescription:
      'Dowiedz się, jak poprawić widoczność strony w Google. Sprawdź dostępne praktyczne artykuły o SEO, pozycjonowaniu i optymalizacji .',
    openGraphDescription:
      'Praktyczne artykuły o SEO, pozycjonowaniu i optymalizacji stron w Google.',
    heroImage:
      '/assets/blog/meta-title-i-description-jak-je-napisac/meta-title-i-description-jak-je-napisac.webp',
  },
  tresci: {
    heroTitle: 'Artykuły dotyczące tworzenia treści',
    heroDescription: 'Artykuły o tworzeniu treści i copywritingu.',
    metaDescription:
      'Zobacz, jak pisać treści, które przyciągają klientów i wspierają SEO. Sprawdź dostępne poradniki o copywritingu, nagłówkach i strukturze tekstów na stronę.',
    openGraphDescription:
      'Poradniki o copywritingu, nagłówkach i strukturze tekstów na stronę internetową.',
    heroImage:
      '/assets/blog/faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony/faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony.webp',
  },
  grafika: {
    heroTitle: 'Artykuły dotyczące projektów graficznych',
    heroDescription:
      'Poradniki o grafice i projektach wizualnych. Dowiedz się, jak dobierać kolory, tworzyć spójne projekty i przygotowywać grafiki dla firmy.',
    metaDescription:
      'Dowiedz się, jak dobierać kolory, tworzyć spójne projekty i przygotowywać grafiki dla firmy. Sprawdź dostępne praktyczne poradniki o grafice i designie.',
    openGraphDescription:
      'Praktyczne poradniki o grafice, kolorach i projektach wizualnych dla firm.',
    heroImage:
      '/assets/blog/jak-dobrac-kolory-do-strony-internetowej/jak-dobrac-kolory-do-strony-internetowej.webp',
  },
  psychologia: {
    heroTitle: 'Artykuły dotyczące psychologii w biznesie',
    heroDescription:
      'Artykuły o psychologii decyzji i zachowaniach klientów. Dowiedz się, jak kolory, układ strony i treści wpływają na decyzje klientów.',
    metaDescription:
      'Dowiedz się, jak kolory, układ strony i treści wpływają na decyzje klientów. Sprawdź dostępne artykuły o psychologii sprzedaży i zachowaniach użytkowników.',
    openGraphDescription:
      'Artykuły o psychologii sprzedaży, decyzjach zakupowych i zachowaniach użytkowników.',
    heroImage:
      '/assets/blog/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow.webp',
  },
  strony: {
    heroTitle: 'Artykuły dotyczące stron internetowych',
    heroDescription:
      'Artykuły o stronach internetowych, ich tworzeniu i optymalizacji. Sprawdź, co powinna zawierać dobra strona internetowa.',
    metaDescription:
      'Sprawdź, co powinna zawierać dobra strona internetowa. Sprawdź dostępne artykuły o tworzeniu, optymalizacji i utrzymaniu stron .',
    openGraphDescription:
      'Artykuły o tworzeniu, optymalizacji i utrzymaniu stron internetowych.',
    heroImage:
      '/assets/blog/co-sprawdzic-przed-uruchomieniem-strony/co-sprawdzic-przed-uruchomieniem-strony.webp',
  },
  sklepy: {
    heroTitle: 'Artykuły dotyczące sklepów internetowych',
    heroDescription:
      'Artykuły o sklepach internetowych i e-commerce. Dowiedz się, jak prowadzić skuteczny sklep internetowy.',
    metaDescription:
      'Dowiedz się, jak prowadzić skuteczny sklep internetowy. Sprawdź dostępne artykuły o e-commerce, płatnościach, dostawach i optymalizacji sprzedaży online.',
    openGraphDescription:
      'Artykuły o e-commerce, płatnościach i optymalizacji sklepów internetowych.',
    heroImage:
      '/assets/blog/jak-przygotowac-sklep-internetowy-do-pozycjonowania/jak-przygotowac-sklep-internetowy-do-pozycjonowania.webp',
  },
  marketing: {
    heroTitle: 'Artykuły dotyczące promocji firmy',
    heroDescription:
      'Artykuły o marketingu i promocji firmy. Dowiedz się, jak skutecznie promować firmę w internecie.',
    metaDescription:
      'Dowiedz się, jak skutecznie promować firmę w internecie. Sprawdź dostępne artykuły o marketingu, reklamie i strategiach pozyskiwania klientów online.',
    openGraphDescription:
      'Artykuły o marketingu, reklamie i strategiach pozyskiwania klientów online.',
    heroImage:
      '/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp',
  },
};

export async function generateStaticParams() {
  const cats = getCategoriesWithCount();
  return cats.map(c => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cats = getCategoriesWithCount();
  const current = cats.find(c => c.slug === category);
  const label = current?.label || category.replace(/-/g, ' ');
  const url = `${siteUrl}/edukacja/${category}`;

  const content = CATEGORY_CONTENT_BY_SLUG[category];
  const description =
    content?.metaDescription ?? DEFAULT_META_DESCRIPTION(label);
  const openGraphDescription =
    content?.openGraphDescription ?? DEFAULT_OPEN_GRAPH_DESCRIPTION(label);
  const ogImage = content?.heroImage
    ? toAbsoluteUrl(content.heroImage)
    : toAbsoluteUrl('/assets/ogien.webp');

  const expandedTitles: Record<string, string> = {
    seo: 'Artykuły o SEO i pozycjonowaniu stron - Arteon',
    ux: 'Artykuły o UX i użyteczności stron - Arteon',
    marketing: 'Artykuły dotyczące promocji firmy',
    sklepy: 'Artykuły dotyczące sklepów internetowych',
    psychologia: 'Artykuły dotyczące psychologii w biznesie',
    strony: 'Artykuły dotyczące stron internetowych',
    grafika: 'Artykuły dotyczące projektów graficznych',
  };
  const finalTitle = expandedTitles[category] || `${label} - Arteon`;

  return {
    title: finalTitle,
    description,
    alternates: { canonical: toAbsoluteUrl(`/edukacja/${category}`) },
    openGraph: {
      title: label,
      description: openGraphDescription,
      url,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${label} - Arteon`,
        },
      ],
    },
  };
}

export default async function EdukacjaCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cats = getCategoriesWithCount();
  const hasAny = getAllArticlePreviews().some(a => {
    return (
      typeof a.primaryCategory === 'string' &&
      slugify(a.primaryCategory) === category
    );
  });

  if (!hasAny) {
    notFound();
  }

  const label =
    cats.find(c => c.slug === category)?.label ?? category.replace(/-/g, ' ');

  const content = CATEGORY_CONTENT_BY_SLUG[category];
  const heroDescription =
    content?.heroDescription ?? DEFAULT_HERO_DESCRIPTION(label);
  const heroImage = content?.heroImage ?? '/assets/bg/abstract-bg13.webp';
  const heroTitle = content?.heroTitle;

  return (
    <>
      <HeroBanner
        title={heroTitle}
        description={heroDescription}
        backgroundImage={heroImage}
        overlay='black'
      />
      <Wrapper>
        <Divider size='xs' />
        <Filters
          mode='link'
          title='Filtry artykułów'
          toolbarAriaLabel='Kategorie artykułów'
          items={cats.map(c => ({
            value: c.slug,
            label: c.label,
            count: c.count,
            href: `/edukacja/${c.slug}`,
          }))}
          activeValue={category}
          allHref='/edukacja'
        />
        <ArticlesList filterCategorySlug={category} />
        <Divider size='sm' />
      </Wrapper>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: label,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: getAllArticlePreviews()
                .filter(a => {
                  return (
                    typeof a.primaryCategory === 'string' &&
                    slugify(a.primaryCategory) === category
                  );
                })
                .map((a, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  url: `${siteUrl}/edukacja/${getPrimaryCategorySlug(a)}/${a.slug}`,
                  name: a.title,
                })),
            },
          }),
        }}
      />
    </>
  );
}
