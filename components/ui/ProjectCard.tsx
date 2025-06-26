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
      <div className="relative h-40 w-full overflow-hidden rounded-t-md sm:h-48">
        <Image src={project.image} alt={`Zrzut ekranu projektu ${project.title}`} fill className="object-cover" priority />
      </div>

      <div className="mx-4 my-2 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 md:text-xl">{project.title}</h3>
        <p className="text-sm text-balance text-gray-700 md:text-base">{project.short}</p>
      </div>
    </Link>
  );
}
