import type { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import ArticlesList from '@/components/sections/blog/ArticlesList';
import FilterBar from '@/components/sections/blog/FilterBar';
import { getAllArticles, getCategoriesWithCount } from '@/lib/blog';
import { slugify } from '@/utils/slug';

const siteUrl = 'https://www.arteonagency.pl';

export async function generateStaticParams() {
  const cats = getCategoriesWithCount();
  return cats.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const cats = getCategoriesWithCount();
  const current = cats.find((c) => c.slug === params.category);
  const label = current?.label || params.category.replace(/-/g, ' ');
  const url = `${siteUrl}/edukacja/${params.category}`;

  return {
    title: `Edukacja: ${label} | Arteon`,
    description: `Poradniki i wiedza: ${label}. Konkretne wskazówki i przykłady.`,
    alternates: { canonical: url },
    openGraph: { title: `Edukacja: ${label}`, description: `Artykuły: ${label}.`, url, type: 'website' },
  };
}

export default function EdukacjaCategoryPage({ params }: { params: { category: string } }) {
  const cats = getCategoriesWithCount();
  const hasAny = getAllArticles().some((a) => (a.category || []).some((c) => slugify(c) === params.category));

  if (!hasAny) {
    // Opcja A: 404
    // notFound();
    // Opcja B: fallback do głównej listy:
    // return redirect('/edukacja');
  }

  const label = cats.find((c) => c.slug === params.category)?.label ?? params.category.replace(/-/g, ' ');

  return (
    <>
      <HeroBanner
        title={`Edukacja: ${label}`}
        description={`Poradniki i wiedza na temat: ${label}. Sprawdź nasze artykuły`}
        variant="center"
        backgroundImage="/assets/bg/abstract-bg13.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <FilterBar cats={cats} active={params.category} />
        <ArticlesList filterCategorySlug={params.category} />
        <Gap size="sm" />
      </Wrapper>

      {/* JSON-LD: CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `Edukacja: ${label}`,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: getAllArticles()
                .filter((a) => (a.category || []).some((c) => slugify(c) === params.category))
                .map((a, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  url: `${siteUrl}/edukacja/${params.category}/${a.slug}`,
                  name: a.title,
                })),
            },
          }),
        }}
      />
    </>
  );
}
