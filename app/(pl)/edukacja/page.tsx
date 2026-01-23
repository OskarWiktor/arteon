import type { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import ArticlesList from '@/components/sections/blog/ArticlesList';
import FilterBar from '@/components/sections/blog/FilterBar';
import { getAllArticles, getCategoriesWithCount, getPrimaryCategorySlug } from '@/lib/blogDataService';

const siteUrl = 'https://www.arteonagency.pl';

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
        url: `${siteUrl}/assets/blog/e-mail-marketing-dla-malych-firm/e-mail-marketing-dla-malych-firm.webp`,
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
    itemListElement: getAllArticles().map((a, i) => ({
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
      <HeroBanner title="Edukacja" variant="center" backgroundImage="/assets/blog/e-mail-marketing-dla-malych-firm/e-mail-marketing-dla-malych-firm.webp" overlay="black" />
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
