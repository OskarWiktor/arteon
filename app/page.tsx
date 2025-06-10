import HeroBanner from '@/components/sections/heroBaner';
import Mission from '@/components/sections/mission';
import ProjectsOverview from '@/components/sections/projectsOverview';
import TechStack from '@/components/sections/techStack';
import WhyUs from '@/components/sections/whyUs';

export default function Home() {
  return (
    <>
      <HeroBanner title="Lorem Ipsum Lorem Ipsum" subtitle="lorem ipsum" description="njkbasdka sbdjabsd bjkbsajdb" buttonAccent="more info" />
      <Mission />
      <WhyUs />
      <ProjectsOverview />
      <TechStack />
    </>
  );
}
