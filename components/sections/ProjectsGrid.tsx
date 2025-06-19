import ProjectCard from '../ui/ProjectCard';
import Wrapper from '../ui/Wrapper';

export default function ProjectsGrid() {
  return (
    <section className="w-full px-4 md:px-8">
      <Wrapper>
        <div className="grid auto-rows-max grid-cols-1 gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Wrapper>
    </section>
  );
}
