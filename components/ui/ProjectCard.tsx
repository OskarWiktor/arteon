'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/project';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="min-w-82" role="group" aria-label={`Project card ${project.title}`}>
      <div className="relative h-80 w-full overflow-hidden shadow-md transition-shadow hover:shadow-xl">
        <Image src={project.image} alt={`Zrzut ekranu projektu ${project.title}`} fill className="object-cover" priority />
      </div>

      <div className="flex flex-col md:mx-4 md:my-2">
        <h4 className="mt-4">{project.title}</h4>
        <p className="md:mt-2">{project.short}</p>
      </div>
    </Link>
  );
}
