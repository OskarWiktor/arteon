import HeroBaner from '@/components/sections/HeroBaner';
import ProjectWithFilters from '@/components/sections/projects/ProjectsWithFilters';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';

export const metadata = {
  title: 'Portfolio: strony, sklepy, grafika i kampanie | Arteon',
  description: 'Zobacz wybrane realizacje: strony WWW, sklepy online, identyfikacje i kampanie. Projekty, które dowożą wynik.',
  keywords: ['portfolio stron', 'realizacje sklepów', 'case study', 'projekty graficzne', 'kampanie marketingowe'],
  alternates: { canonical: '/realizacje' },
  openGraph: {
    title: 'Portfolio Arteon - projekty, które działają',
    description: 'Strony, sklepy, identyfikacje i kampanie. Konkretne efekty i przejrzty proces.',
    url: 'https://www.arteonagency.pl/realizacje',
    type: 'website',
  },
} as const;

export default function ProjectsPage() {
  return (
    <>
      <HeroBaner title="Projekty, które rosną razem z marką" variant="center" backgroundImage="/assets/bg/abstract-bg13.webp" overlay="black" />

      <Wrapper>
        <Gap size="sm" />

        <ProjectWithFilters />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
