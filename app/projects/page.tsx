'use client';

import { useState } from 'react';

import Filters from '@/components/sections/Filters';
import HeroBaner from '@/components/sections/HeroBaner';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import SectionBasic from '@/components/ui/SectionBasic';

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <HeroBaner title="Lorem Ipsum Lorem Ipsum" description="njkbasdka sbdjabsd bjkbsajdb" />
      <Filters selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ProjectsGrid selectedCategory={selectedCategory} />
      <SectionBasic
        title="Strony internetowe dopasowane do Ciebie"
        description="Tworzymy witryny, które działają i wyglądają. Łączymy estetykę, strategię i wydajność, by Twoja marka zyskała nową jakość."
        imageSrc="/assets/test.jpg"
        imageAlt="Projektowanie stron"
        buttonText="Zobacz ofertę"
        buttonLink="/oferta"
      >
        <ul className="list-disc pl-5 text-gray-800 md:text-lg">
          <li>Indywidualny projekt graficzny</li>
          <li>Pełna optymalizacja SEO i dostępność</li>
          <li>Integracja z CMS lub e-commerce</li>
        </ul>
      </SectionBasic>
    </>
  );
}
