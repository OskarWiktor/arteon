'use client';

import HeroBaner from '@/components/components/HeroBaner';
import ProjectsOverview from '@/components/components/ProjectsOverview';
import SectionInfo from '@/components/ui/SectionInfo';

import allProjectsData from '@/data/projects.json';
import type { Project } from '@/types/project';
import Mission from '@/components/components/Mission';
import SectionBasic from '@/components/ui/SectionBasic';

const allProjects = allProjectsData.projects as Project[];

const selectedSlugs = ['pilka-nozna-pl', 'trilllizo'];

const selectedProjects = allProjects.filter((p) => selectedSlugs.includes(p.slug));

export default function Page() {
  return (
    <>
      <HeroBaner
        title="Lorem Ipsum Lorem Ipsum"
        description="njkbasdka sbdjabsd bjkbsajdb"
        backgroundImage="/assets/test.jpg"
        buttonTopOne="test1"
        buttonTopTwo="test2"
        buttonTopThree="test3"
        buttonTopFour="test4"
      />
      <SectionInfo title="Lorem ipsum uca sdilaw" description="sjdhjakhsd shduhas bda wd wkdw ahjw" />
      <Mission />
      <ProjectsOverview projects={selectedProjects} title="Test projektów wybranych" />
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
