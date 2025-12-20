import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import ArticlesList from '@/components/sections/blog/ArticlesList';
import FilterBar from '@/components/sections/blog/FilterBar';
import { getAllArticles, getCategoriesWithCount, getPrimaryCategorySlug } from '@/lib/blog';
import { slugify } from '@/utils/slug';

const siteUrl = 'https://www.arteonagency.pl';

const DEFAULT_META_DESCRIPTION = (label: string) => `Artykuły i poradniki: ${label}.`;

const DEFAULT_OPEN_GRAPH_DESCRIPTION = (label: string) => `Artykuły: ${label}.`;

const DEFAULT_HERO_DESCRIPTION = (label: string) => `Artykuły i poradniki: ${label}.`;

const CATEGORY_CONTENT_BY_SLUG: Record<
  string,
  {
    heroDescription: string;
    metaDescription: string;
    openGraphDescription: string;
  }
> = {
  seo: {
    heroDescription: 'Artykuły o pozycjonowaniu i widoczności w Google.',
    metaDescription: 'Artykuły o pozycjonowaniu i widoczności w Google.',
    openGraphDescription: 'Artykuły o pozycjonowaniu i widoczności w Google.',
  },
  widocznosc: {
    heroDescription: 'Artykuły o widoczności Twojej marki w sieci.',
    metaDescription: 'Artykuły o widoczności Twojej marki w sieci.',
    openGraphDescription: 'Artykuły o widoczności Twojej marki w sieci.',
  },
  tresci: {
    heroDescription: 'Artykuły o tworzeniu treści i copywritingu.',
    metaDescription: 'Artykuły o tworzeniu treści i copywritingu.',
    openGraphDescription: 'Artykuły o tworzeniu treści i copywritingu.',
  },
  grafika: {
    heroDescription: 'Poradniki o grafice i projektach wizualnych.',
    metaDescription: 'Poradniki o grafice i projektach wizualnych.',
    openGraphDescription: 'Poradniki o grafice i projektach wizualnych.',
  },
  branding: {
    heroDescription: 'Artykuły o brandingu i identyfikacji wizualnej.',
    metaDescription: 'Artykuły o brandingu i identyfikacji wizualnej.',
    openGraphDescription: 'Artykuły o brandingu i identyfikacji wizualnej.',
  },
  zdjecia: {
    heroDescription: 'Poradniki o zdjęciach i grafikach.',
    metaDescription: 'Poradniki o zdjęciach i grafikach.',
    openGraphDescription: 'Poradniki o zdjęciach i grafikach.',
  },
  psychologia: {
    heroDescription: 'Artykuły o psychologii decyzji i zachowaniach klientów.',
    metaDescription: 'Artykuły o psychologii decyzji i zachowaniach klientów.',
    openGraphDescription: 'Artykuły o psychologii decyzji i zachowaniach klientów.',
  },
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const cats = getCategoriesWithCount();
  return cats.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const cats = getCategoriesWithCount();
  const current = cats.find((c) => c.slug === params.category);
  const label = current?.label || params.category.replace(/-/g, ' ');
  const url = `${siteUrl}/edukacja/${params.category}`;

  const content = CATEGORY_CONTENT_BY_SLUG[params.category];
  const description = content?.metaDescription ?? DEFAULT_META_DESCRIPTION(label);
  const openGraphDescription = content?.openGraphDescription ?? DEFAULT_OPEN_GRAPH_DESCRIPTION(label);

  return {
    title: `${label} | Arteon`,
    description,
    alternates: { canonical: `https://www.arteonagency.pl/edukacja/${params.category}` },
    openGraph: { title: label, description: openGraphDescription, url, type: 'website' },
  };
}

export default function EdukacjaCategoryPage({ params }: { params: { category: string } }) {
  const cats = getCategoriesWithCount();
  const hasAny = getAllArticles().some((a) => {
    const allCats = [a.primaryCategory, ...(a.category || [])].filter(Boolean) as string[];
    return allCats.some((c) => slugify(c) === params.category);
  });

  if (!hasAny) {
    notFound();
  }

  const label = cats.find((c) => c.slug === params.category)?.label ?? params.category.replace(/-/g, ' ');

  const content = CATEGORY_CONTENT_BY_SLUG[params.category];
  const heroDescription = content?.heroDescription ?? DEFAULT_HERO_DESCRIPTION(label);

  return (
    <>
      <HeroBanner title={label} description={heroDescription} variant="center" backgroundImage="/assets/bg/abstract-bg13.webp" overlay="black" />
      <Wrapper>
        <Gap size="sm" />
        <FilterBar cats={cats} active={params.category} />
        <ArticlesList filterCategorySlug={params.category} />
        <Gap size="sm" />
      </Wrapper>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: label,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: getAllArticles()
                .filter((a) => {
                  const allCats = [a.primaryCategory, ...(a.category || [])].filter(Boolean) as string[];
                  return allCats.some((c) => slugify(c) === params.category);
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
