import type { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import ArticlesList from '@/components/sections/blog/ArticlesList';
import FilterBar from '@/components/sections/blog/FilterBar';
import { getAllArticles, getCategoriesWithCount, getPrimaryCategorySlug } from '@/lib/blog';
import { toAbsoluteUrl } from '@/lib/url';

const EDUKACJA_HERO_IMAGE = '/assets/blog/e-mail-marketing-dla-malych-firm/e-mail-marketing-dla-malych-firm.webp';

export const metadata: Metadata = {
  title: 'Edukacja - Arteon',
  description: 'Artykuły i poradniki o stronach internetowych, marketingu, grafice i widoczności w sieci.',
  alternates: { canonical: toAbsoluteUrl('/edukacja') },
  openGraph: {
    title: 'Edukacja - Arteon',
    description: 'Artykuły i poradniki o stronach internetowych, marketingu, grafice i widoczności w sieci.',
    url: toAbsoluteUrl('/edukacja'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl(EDUKACJA_HERO_IMAGE),
        width: 1200,
        height: 630,
        alt: 'Edukacja - Arteon',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${toAbsoluteUrl('/edukacja')}#collection`,
  name: 'Edukacja - Arteon',
  description: 'Artykuły i poradniki o stronach internetowych, marketingu, grafice i widoczności w sieci.',
  url: toAbsoluteUrl('/edukacja'),
  mainEntity: {
    '@type': 'ItemList',
    '@id': `${toAbsoluteUrl('/edukacja')}#itemlist`,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: getAllArticles().map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: toAbsoluteUrl(`/edukacja/${getPrimaryCategorySlug(a)}/${a.slug}`),
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
        description="Artykuły i poradniki o stronach internetowych, marketingu, grafice i widoczności w sieci."
        variant="center"
        backgroundImage={EDUKACJA_HERO_IMAGE}
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
