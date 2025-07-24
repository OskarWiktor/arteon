'use client';

import { useState } from 'react';

import Filters from '@/components/components/Filters';
import HeroBaner from '@/components/components/HeroBaner';
import ProjectsGrid from '@/components/components/ProjectsGrid';
import SectionBasic from '@/components/ui/SectionBasic';

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <HeroBaner title="Projekty, które rosną razem z marką" />
      <Filters selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ProjectsGrid selectedCategory={selectedCategory} />
      <SectionBasic
        title="Gotowy, by stworzyć projekt dopasowany do Twojej marki?"
        description="Opisz swoją działalność a my przygotujemy dla Ciebie bezpłatny plan działania"
        imageSrc="/assets/test.jpg"
        imageAlt="Zaproszenie do kontaktu"
        buttonText="Przejdź do formularza"
        buttonLink="/kontakt"
      ></SectionBasic>
    </>
  );
}
