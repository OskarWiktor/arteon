import { notFound } from 'next/navigation';
import Image from 'next/image';

import Wrapper from '@/components/ui/Wrapper';
import Button from '@/components/ui/Button';

import projectsData from '@/data/projects.json';
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
      <Wrapper className="px-4 md:px-6">
        <h1 className="mt-8">{project.title}</h1>
        <h6 className="mt-2 text-sm capitalize">{project.category}</h6>
        <p className="my-4">{project.short}</p>
        {project.link && (
          <Button variant="minimal">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Zobacz stronę
            </a>
          </Button>
        )}
      </Wrapper>
    </>
  );
}
