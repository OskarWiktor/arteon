import { generatePageMetadata } from '@/lib/generatePageMetadata';

import HeroBaner from '@/components/sections/HeroBaner';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import ProjectWithFilters from '@/components/sections/projects/ProjectsWithFilters';

export async function generateMetadata() {
  return generatePageMetadata('projects');
}

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
