import HeroBanner from '@/components/sections/HeroBanner';
import ProjectWithFilters from '@/components/sections/projects/ProjectsWithFilters';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';

export const metadata = {
  title: 'Portfolio: strony, sklepy, Projekty graficzne i kampanie | Arteon',
  description: 'Zobacz wybrane realizacje: strony WWW, sklepy online, identyfikacje i kampanie. Projekty, które dowożą wynik.',
  alternates: { canonical: '/realizacje' },
  openGraph: {
    title: 'Portfolio Arteon - projekty, które działają',
    description: 'Strony, sklepy, identyfikacje i kampanie. Konkretne efekty i przejrzty proces.',
    url: 'https://www.arteonagency.pl/realizacje',
    type: 'website',
    // TODO: Add unique OpenGraph image for portfolio page: /assets/og/realizacje.webp (1200x630px)
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/arteon-logo-on-mockup.webp',
      },
    ],
  },
} as const;

export default function ProjectsPage() {
  return (
    <>
      <HeroBanner title="Wybrane realizacje" variant="center" backgroundImage="/assets/bg/abstract-bg13.webp" overlay="black" />

      <Wrapper>
        <Gap size="sm" />

        <ProjectWithFilters />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
