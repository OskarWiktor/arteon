'use client';

import { useMemo } from 'react';
import type { ProjectCategory, ProjectPreview } from '@/types/project';
import ProjectCard from '../../ui/ProjectCard';

type Props = {
  projects: ProjectPreview[];
  selectedCategories: ProjectCategory[];
};

export default function ProjectsGrid({ projects, selectedCategories }: Props) {
  const filteredProjects = useMemo(() => {
    if (!selectedCategories.length) return projects;
    return projects.filter((p) => {
      const cats = new Set(p.category ?? []);
      return selectedCategories.every((c) => cats.has(c));
    });
  }, [projects, selectedCategories]);

  if (!filteredProjects.length) {
    return <p className="text-light mt-6 text-base">Brak projektów dla wybranych filtrów.</p>;
  }

  return (
    <section className="w-full">
      <div className="grid auto-rows-max grid-cols-1 gap-8 md:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <div key={project.slug} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
