'use client';

import { useState } from 'react';

import Filters from '@/components/sections/Filters';
import HeroBaner from '@/components/sections/HeroBaner';
import ProjectsGrid from '@/components/sections/ProjectsGrid';

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <HeroBaner title="Lorem Ipsum Lorem Ipsum" description="njkbasdka sbdjabsd bjkbsajdb" />
      <Filters selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ProjectsGrid selectedCategory={selectedCategory} />
    </>
  );
}
