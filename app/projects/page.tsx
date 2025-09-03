import HeroBaner from '@/components/sections/HeroBaner';
import ProjectWithFilters from '@/components/sections/projects/ProjectsWithFilters';
import Gap from '@/components/ui/Gap';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import { generatePageMetadata } from '@/lib/generatePageMetadata';

export async function generateMetadata() {
  return generatePageMetadata('projects');
}

export default function Page() {
  return (
    <>
      <HeroBaner title="Projekty, które rosną razem z marką" backgroundImage="/assets/bg/abstract-bg12.jpg" overlay="black" />

      <Gap size="sm" />

      <ProjectWithFilters />

      <Gap />

      <SectionBasic
        id="go-to-contact"
        title="Zacznijmy współpracę"
        description="Masz pytania lub potrzebujesz wyceny niestandardowego projektu? Skontaktuj się z nami, a my przygotujemy ofertę."
        imageSrc="/assets/test.jpg"
        imageAlt="Kontakt z Arteon"
        btnOneLink="/contact"
        btnOne="Kontakt"
      />

      <Gap />
    </>
  );
}
