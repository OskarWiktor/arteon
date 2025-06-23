import projectsData from '@/data/projects.json';
import ProjectCard from '../ui/ProjectCard';
import Wrapper from '../ui/Wrapper';
import type { Project } from '@/types/project';

export default function ProjectsGrid() {
  const projects = projectsData.projects as Project[];

  return (
    <section className="w-full px-4 md:px-8">
      <Wrapper>
        <div className="grid auto-rows-max grid-cols-1 gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
