'use client';

import { useState } from 'react';
import Filters from './Filters';
import ProjectsGrid from './ProjectsGrid';
import type { ProjectCategory, ProjectPreview } from '@/types/project';

export default function ProjectsWithFilters({ projects }: { projects: ProjectPreview[] }) {
  const [selectedSet, setSelectedSet] = useState<Set<ProjectCategory>>(new Set());

  const selected = Array.from(selectedSet);

  const onToggle = (cat: ProjectCategory) => {
    setSelectedSet((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const onClear = () => setSelectedSet(new Set());

  return (
    <>
      <Filters projects={projects} selected={selected} onToggle={onToggle} onClear={onClear} />
      <ProjectsGrid projects={projects} selectedCategories={selected} />
    </>
  );
}
