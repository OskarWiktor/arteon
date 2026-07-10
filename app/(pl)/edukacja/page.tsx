import type { Metadata } from 'next';
import Divider from '@/components/atoms/Divider';
import { JsonLd } from '@/components/atoms/JsonLd';
import Wrapper from '@/components/atoms/Wrapper';
import Filters from '@/components/molecules/Filters';
import ArticlesList from '@/components/organisms/ArticlesList';
import HeroBanner from '@/components/organisms/HeroBanner';
import {
  getAllArticlePreviews,
  getCategoriesWithCount,
  getPrimaryCategorySlug,
} from '@/lib/blogDataService';
import { siteUrl } from '@/utils/absoluteUrl';

export const metadata: Metadata = {
  title:
    'Baza wiedzy o stronach internetowych, sklepach, seo i projektowaniu graficznym - Arteon',
  description:
    'Lubimy pomagać i dzielić się wiedzą. Znajdziesz tutaj poradniki i artykuły eksperckie o stronach, sklepach, SEO, marketingu czy projektach graficznych',
  alternates: { canonical: 'https://www.arteonagency.pl/edukacja' },
  openGraph: {
    title:
      'Baza wiedzy o stronach internetowych, sklepach, seo i projektowaniu graficznym - Arteon',
    description:
      'Lubimy pomagać i dzielić się wiedzą. Znajdziesz tutaj poradniki i artykuły eksperckie o stronach, sklepach, SEO, marketingu czy projektach graficznych',
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
  description:
    'Lubimy pomagać i dzielić się wiedzą. Znajdziesz tutaj poradniki i artykuły eksperckie o stronach, sklepach, SEO, marketingu czy projektach graficznych',
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
        title='Baza wiedzy o stronach internetowych, sklepach, seo i projektowaniu graficznym'
        description='Lubimy pomagać i dzielić się wiedzą. Poniżej znajdziesz artykuły związane z programowaniem, projektowaniem, pozycjonowaniem stron a nawet psychologią kolorów'
        backgroundImage='/assets/blog/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty.webp'
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
          allHref='/edukacja'
        />
        <ArticlesList />
        <Divider size='sm' />
      </Wrapper>

      <JsonLd schema={schema} id='schema-edukacja-collection' />
    </>
  );
}
