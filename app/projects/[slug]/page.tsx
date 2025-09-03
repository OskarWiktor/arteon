import Image from 'next/image';
import { notFound } from 'next/navigation';

import Button from '@/components/ui/Button';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';

import projectsData from '@/data/pl/projects.json';
import type { Project } from '@/types/project';

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
      <Image src={project.image} alt={project.title} className="max-h-96 w-full object-cover object-center" width={1920} height={1080} />

      <Gap size="sm" />

      <Wrapper>
        <h1>{project.title}</h1>
        <h6 className="mt-2 text-sm capitalize">{project.category}</h6>
        <p className="my-4">{project.short}</p>
        {project.link && (
          <Button variant="glass" link={project.link}>
            Zobacz stronę
          </Button>
        )}
        <Gap />
      </Wrapper>
    </>
  );
}
