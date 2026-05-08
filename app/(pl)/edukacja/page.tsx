import type { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import ArticlesList from '@/components/sections/blog/ArticlesList';
import FilterBar from '@/components/sections/blog/FilterBar';
import { getAllArticlePreviews, getCategoriesWithCount, getPrimaryCategorySlug } from '@/lib/blogDataService';
import { siteUrl } from '@/utils/absoluteUrl';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Baza wiedzy o stronach internetowych, sklepach, seo i projektowaniu graficznym - Arteon',
  description: 'Lubimy pomagać i dzielić się wiedzą ze wszystkimi. Znajdziesz tutaj poradniki i artykuły eksperckie o stronach, sklepach, SEO, marketingu czy projektach graficznych',
  alternates: { canonical: 'https://www.arteonagency.pl/edukacja' },
  openGraph: {
    title: 'Baza wiedzy o stronach internetowych, sklepach, seo i projektowaniu graficznym - Arteon',
    description: 'Lubimy pomagać i dzielić się wiedzą ze wszystkimi. Znajdziesz tutaj poradniki i artykuły eksperckie o stronach, sklepach, SEO, marketingu czy projektach graficznych',
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
  name: 'Baza wiedzy o stronach internetowych, sklepach, seo i projektowaniu graficznym - Arteon',
  description: 'Lubimy pomagać i dzielić się wiedzą ze wszystkimi. Znajdziesz tutaj poradniki i artykuły eksperckie o stronach, sklepach, SEO, marketingu czy projektach graficznych',
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
        title="Baza wiedzy o stronach internetowych, sklepach, seo i projektowaniu graficznym"
        description="Lubimy pomagać i dzielić się wiedzą ze wszystkimi. Poniżej znajdziesz artykuły na tematy związane z programowaniem, projektowaniem, psychologią w biznesie, pozycjonowaniem stron a nawet psychologią kolorów"
        backgroundImage="/assets/blog/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <FilterBar cats={cats} />
        <ArticlesList />
        <Gap size="sm" />
      </Wrapper>

      <JsonLd schema={schema} id="schema-edukacja-collection" />
    </>
  );
}
