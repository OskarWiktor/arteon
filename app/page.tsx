import HeroBanner from '@/components/sections/HeroBaner';
import HowWeWork from '@/components/sections/HowWeWork';
import Mission from '@/components/sections/Mission';
import ProjectsOverview from '@/components/sections/ProjectsOverview';
import TechStack from '@/components/sections/TechStack';
import SectionBasic from '@/components/ui/SectionBasic';

export default function Home() {
  return (
    <>
      <HeroBanner title="Lorem Ipsum Lorem Ipsum" subtitle="lorem ipsum" description="njkbasdka sbdjabsd bjkbsajdb" buttonAccent="more info" backgroundImage="/assets/test.jpg" />
      <Mission />
      <ProjectsOverview />
      <HowWeWork />
      <TechStack />
      <SectionBasic title="test" description="test test" imageSrc="/assets/test.jpg">
        <ul className="list-disc pl-5">
          <li>test</li>
          <li>test</li>
        </ul>
      </SectionBasic>
      <SectionBasic variant="left" title="test" description="test test" imageSrc="/assets/test.jpg">
        <ul className="list-disc pl-5">
          <li>test</li>
          <li>test</li>
        </ul>
      </SectionBasic>
    </>
  );
}
