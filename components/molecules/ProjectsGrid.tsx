'use client';

import type { ProjectCategory, ProjectPreview } from '@/types/project';
import CarouselCard from '../organisms/carousels/CarouselCard';

type Props = {
  projects: ProjectPreview[];
  selectedCategories: ProjectCategory[];
};

export default function ProjectsGrid({ projects, selectedCategories }: Props) {
  const filteredProjects = (() => {
    if (!selectedCategories.length) return projects;
    return projects.filter(p => {
      const cats = new Set(p.category ?? []);
      return selectedCategories.every(c => cats.has(c));
    });
  })();

  if (!filteredProjects.length) {
    return <p className='mt-6 text-base text-light'>Brak projektów dla wybranych filtrów.</p>;
  }

  return (
    <section className='w-full'>
      <div className='grid auto-rows-max grid-cols-1 gap-8 md:grid-cols-3'>
        {filteredProjects.map((project, i) => (
          <div
            key={project.slug}
            className='animate-[fade-in_0.4s_ease-out_both]'
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <CarouselCard variant='project' project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
