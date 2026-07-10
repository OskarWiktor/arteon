'use client';

import { useState } from 'react';
import Filters, { type FilterItem } from '@/components/molecules/Filters';
import type { ProjectCategory, ProjectPreview } from '@/types/project';
import ProjectsGrid from '../molecules/ProjectsGrid';

const ORDER: readonly ProjectCategory[] = [
  'strony',
  'sklepy',
  'blogi',
  'projekty graficzne',
  'treści',
] as const;

export default function ProjectsWithFilters({
  projects,
}: {
  projects: ProjectPreview[];
}) {
  const [selectedCategoriesSet, setSelectedCategoriesSet] = useState<
    Set<ProjectCategory>
  >(new Set());

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

  const items: FilterItem[] = (() => {
    const present = new Set<ProjectCategory>();
    for (const p of projects) for (const c of p.category ?? []) present.add(c);
    return ORDER.filter(c => present.has(c)).map(c => ({
      value: c,
      label: c.charAt(0).toUpperCase() + c.slice(1),
    }));
  })();

  return (
    <>
      <Filters
        mode='toggle'
        title='Kliknij aby wybrać typ projektu'
        toolbarAriaLabel='Filtry realizacji'
        items={items}
        selected={selectedCategories}
        onToggle={value => onToggle(value as ProjectCategory)}
        onClear={onClear}
      />
      <ProjectsGrid
        projects={projects}
        selectedCategories={selectedCategories}
      />
    </>
  );
}
