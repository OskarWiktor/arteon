import type { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import ArticlesList from '@/components/sections/blog/ArticlesList';
import FilterBar from '@/components/sections/blog/FilterBar';
import { getCategoriesWithCount } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Edukacja - poradniki i wiedza | Arteon',
  description: 'Poradniki i artykuły eksperckie o stronach, sklepach, SEO, marketingu czy projektach graficznych. Odwiedź nas i sprawdź',
  alternates: { canonical: '/edukacja' },
  openGraph: {
    title: 'Edukacja - poradniki i wiedza | Arteon',
    description: 'Poradniki i artykuły eksperckie o stronach, sklepach, SEO, marketingu czy projektach graficznych. Odwiedź nas i sprawdź',
    url: 'https://www.arteonagency.pl/edukacja',
    type: 'website',
    // TODO: Add unique OpenGraph image for education/blog page: /assets/og/edukacja.webp (1200x630px)
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/arteon-logo-on-mockup.webp',
      },
    ],
  },
};

export default function EdukacjaPage() {
  const cats = getCategoriesWithCount();

  return (
    <>
      <HeroBanner title="Edukacja" variant="center" backgroundImage="/assets/bg/abstract-bg13.webp" overlay="black" />
      <Wrapper>
        <Gap size="sm" />
        <FilterBar cats={cats} />
        <ArticlesList />
        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
