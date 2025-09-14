import HeroBaner from '@/components/sections/HeroBaner';
import ProjectWithFilters from '@/components/sections/projects/ProjectsWithFilters';
import Gap from '@/components/ui/Gap';
import { generatePageMetadata } from '@/lib/generatePageMetadata';

export async function generateMetadata() {
  return generatePageMetadata('projects');
}

export default function ProjectsPage() {
  return (
    <>
      <HeroBaner title="Projekty, które rosną razem z marką" variant="center" backgroundImage="/assets/bg/abstract-bg13.jpg" overlay="black" />

      <Gap size="sm" />

      <ProjectWithFilters />

      <Gap size="sm" />

    </>
  );
}
