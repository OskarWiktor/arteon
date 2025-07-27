'use client';

import { useState } from 'react';
import Filters from './Filters';
import ProjectsGrid from './ProjectsGrid';

export default function ProjectWithFilters() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <Filters selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ProjectsGrid selectedCategory={selectedCategory} />
    </>
  );
}
