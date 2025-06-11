import HeroBanner from '@/components/sections/HeroBaner';
import HowWeWork from '@/components/sections/HowWeWork';
import Mission from '@/components/sections/Mission';
import ProjectsOverview from '@/components/sections/ProjectsOverview';
import TechStack from '@/components/sections/TechStack';
import WhyUs from '@/components/sections/WhyUs';

export default function Home() {
  return (
    <>
      <HeroBanner title="Lorem Ipsum Lorem Ipsum" subtitle="lorem ipsum" description="njkbasdka sbdjabsd bjkbsajdb" buttonAccent="more info" />
      <Mission />
      <WhyUs />
      <ProjectsOverview />
      <HowWeWork />
      <TechStack />
    </>
  );
}
