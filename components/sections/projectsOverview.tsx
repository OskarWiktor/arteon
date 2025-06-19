import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import Wrapper from '../ui/Wrapper';
import ProjectCard from '../ui/ProjectCard';

export default function ProjectsOverview() {
  return (
    <Wrapper>
      <section className="mt-8 flex w-full flex-col px-4 md:px-8">
        <h2 className="font-serif text-4xl">Projects sdhdahg</h2>
        <div className="relative mt-4 flex gap-4 overflow-hidden py-2">
          <RiArrowLeftSLine className="absolute top-1/2 left-2 z-10 h-10 w-10 -translate-y-1/2 cursor-pointer rounded-full bg-white shadow" />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <RiArrowRightSLine className="absolute top-1/2 right-2 z-10 h-10 w-10 -translate-y-1/2 cursor-pointer rounded-full bg-white shadow" />
        </div>
      </section>
    </Wrapper>
  );
}
