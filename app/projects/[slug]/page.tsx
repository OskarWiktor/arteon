import { notFound } from 'next/navigation';

import Button from '@/components/ui/Button';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';

import projectsData from '@/data/pl/projects.json';
import type { Project } from '@/types/project';
import HeroBanner from '@/components/sections/HeroBaner';

const projects = projectsData.projects as Project[];

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <>
      <HeroBanner backgroundImage={project.image} />
      <Gap size="sm" />

      <Wrapper>
        <h1 className="h2 mb-2">{project.title}</h1>
        <p className="my-4">
          <span className="text-xl font-bold uppercase">{project.category}</span>
        </p>
        <span className="text-2xl">{project.short}</span>
        <p className="my-4">{project.description}</p>
        {project.link && (
          <Button arrow link={project.link}>
            Zobacz stronę
          </Button>
        )}
        <Gap />
      </Wrapper>
    </>
  );
}
