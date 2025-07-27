'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/project';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="min-w-82 rounded-md shadow" role="group" aria-label={`Karta projektu ${project.title}`}>
      <div className="relative h-40 w-full overflow-hidden rounded-md shadow-md transition-shadow hover:shadow-xl sm:h-48">
        <Image src={project.image} alt={`Zrzut ekranu projektu ${project.title}`} fill className="object-cover" priority />
      </div>

      <div className="mx-4 my-2 flex flex-col">
        <h6>{project.title}</h6>
        <p>{project.short}</p>
      </div>
    </Link>
  );
}
