import HeroBanner from '@/components/sections/heroBaner';
import Mission from '@/components/sections/mission';
import ProjectsOverview from '@/components/sections/projectsOverview';
import TechStack from '@/components/sections/techStack';

export default function Page() {
  return (
    <>
      <HeroBanner />
      <ProjectsOverview />
      <Mission />
      <TechStack />
    </>
  );
}
