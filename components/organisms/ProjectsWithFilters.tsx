'use client';

import { useState } from 'react';
import type { ProjectCategory, ProjectPreview } from '@/types/project';
import Filters from '../molecules/Filters';
import ProjectsGrid from '../molecules/ProjectsGrid';

export default function ProjectsWithFilters({ projects }: { projects: ProjectPreview[] }) {
  const [selectedCategoriesSet, setSelectedCategoriesSet] = useState<Set<ProjectCategory>>(
    new Set(),
  );

  const selectedCategories = Array.from(selectedCategoriesSet);

  const onToggle = (cat: ProjectCategory) => {
    setSelectedCategoriesSet(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const onClear = () => setSelectedCategoriesSet(new Set());

  return (
    <>
      <Filters
        projects={projects}
        selected={selectedCategories}
        onToggle={onToggle}
        onClear={onClear}
      />
      <ProjectsGrid projects={projects} selectedCategories={selectedCategories} />
    </>
  );
}
