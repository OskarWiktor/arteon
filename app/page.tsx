import HeroBanner from '@/components/sections/HeroBaner';
import HowWeWork from '@/components/sections/HowWeWork';
import Mission from '@/components/sections/Mission';
import ProjectsOverview from '@/components/sections/ProjectsOverview';
import TechStack from '@/components/sections/TechStack';
import SectionBasic from '@/components/ui/SectionBasic';

export default function Home() {
  return (
    <>
      <HeroBanner
        title="Lorem Ipsum Lorem Ipsum"
        description="njkbasdka sbdjabsd bjkbsajdb"
        backgroundImage="/assets/test.jpg"
        buttonTopOne="test1"
        buttonTopTwo="test2"
        buttonTopThree="test3"
        buttonTopFour="test4"
      />
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
