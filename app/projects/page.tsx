import type { Metadata } from 'next';

import HeroBaner from '@/components/components/HeroBaner';
import SectionBasic from '@/components/ui/SectionBasic';
import ProjectWithFilters from '@/components/components/ProjectsWithFilters';

export const metadata: Metadata = {
  title: 'Projekty | Arteon',
  description: 'Zobacz wybrane projekty Arteon: strony internetowe, sklepy, blogi, grafiki i kampanie marketingowe. Tworzymy skuteczne i estetyczne rozwiązania dopasowane do potrzeb klientów.',
  keywords: [
    'projekty Arteon',
    'realizacje stron internetowych',
    'projekty sklepów internetowych',
    'projekty blogów',
    'projekty graficzne',
    'portfolio agencji kreatywnej',
    'portfolio web design',
    'branding i identyfikacja wizualna',
    'realizacje kampanii marketingowych',
    'projekty logo i grafiki',
    'tworzenie nowoczesnych stron',
    'inspiracje web design',
    'case studies stron',
  ],
};

export default function Page() {
  return (
    <>
      <HeroBaner title="Projekty, które rosną razem z marką" />

      <ProjectWithFilters />

      <SectionBasic
        title="Zacznijmy współpracę"
        description="Masz pytania lub potrzebujesz wyceny niestandardowego projektu? Skontaktuj się z nami, a my przygotujemy ofertę."
        imageSrc="/assets/test.jpg"
        imageAlt="Kontakt z Arteon"
        buttonLink="/kontakt"
        buttonText="Kontakt"
      />
    </>
  );
}
