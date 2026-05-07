import type { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import ArticlesList from '@/components/sections/blog/ArticlesList';
import FilterBar from '@/components/sections/blog/FilterBar';
import { getAllArticlePreviews, getCategoriesWithCount, getPrimaryCategorySlug } from '@/lib/blogDataService';
import { siteUrl } from '@/utils/absoluteUrl';

export const metadata: Metadata = {
  title: 'Edukacja - poradniki i wiedza | Arteon',
  description: 'Poradniki i artykuły eksperckie o stronach, sklepach, SEO, marketingu czy projektach graficznych. Odwiedź nas i sprawdź nasze poradniki.',
  alternates: { canonical: 'https://www.arteonagency.pl/edukacja' },
  openGraph: {
    title: 'Edukacja - poradniki i wiedza | Arteon',
    description: 'Poradniki i artykuły eksperckie o stronach, sklepach, SEO, marketingu czy projektach graficznych. Odwiedź nas i sprawdź nasze poradniki.',
    url: `${siteUrl}/edukacja`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/assets/blog/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty.webp`,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${siteUrl}/edukacja#collection`,
  name: 'Edukacja - poradniki i wiedza | Arteon',
  description: 'Poradniki i artykuły eksperckie o stronach, sklepach, SEO, marketingu czy projektach graficznych. Odwiedź nas i sprawdź nasze poradniki.',
  url: `${siteUrl}/edukacja`,
  mainEntity: {
    '@type': 'ItemList',
    '@id': `${siteUrl}/edukacja#itemlist`,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: getAllArticlePreviews().map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${siteUrl}/edukacja/${getPrimaryCategorySlug(a)}/${a.slug}`,
      name: a.seo?.title || a.title,
    })),
  },
} as const;

export default function EdukacjaPage() {
  const cats = getCategoriesWithCount();

  return (
    <>
      <HeroBanner
        title="Edukacja"
        description="Kompedium wiedzy na temat stron internetowych, projektów graficznych oraz marketingu, psychologi w biznesie i UX"
        backgroundImage="/assets/blog/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <FilterBar cats={cats} />
        <ArticlesList />
        <Gap size="sm" />
      </Wrapper>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
