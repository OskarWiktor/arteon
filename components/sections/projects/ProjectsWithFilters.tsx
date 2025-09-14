'use client';

import { useState } from 'react';
import Filters from './Filters';
import ProjectsGrid from './ProjectsGrid';
import type { PrimaryCategory, SecondaryCategory } from '@/types/project';

export default function ProjectWithFilters() {
  const [selected, setSelected] = useState<{ primary: PrimaryCategory | null; secondary: SecondaryCategory | null }>({
    primary: null,
    secondary: null,
  });

  return (
    <>
      <Filters selected={selected} onChange={setSelected} />
      <ProjectsGrid selectedPrimary={selected.primary} selectedSecondary={selected.secondary} />
    </>
  );
}
