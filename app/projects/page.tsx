import { getPageMetadata } from '@/data/seo';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

import HeroBaner from '@/components/sections/HeroBaner';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import ProjectWithFilters from '@/components/sections/projects/ProjectsWithFilters';

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const locale = host.endsWith('.pl') ? 'pl' : 'en';

  return getPageMetadata('home', locale);
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
