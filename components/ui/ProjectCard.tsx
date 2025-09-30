import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/project';
import Button from './Button';

type Props = { project: Project; size?: 'small' | 'normal' };

export default function ProjectCardSplit({ project, size = 'normal' }: Props) {
  const sizeClass = size === 'normal' ? 'aspect-[5/3]' : 'aspect-[2/1]';

  return (
    <Link
      href={`/realizacje/${project.slug}`}
      className="group block h-full rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-xl">
        <div className={`relative ${sizeClass} w-full`}>
          <Image src={project.image} alt={`Zrzut ekranu projektu ${project.title}`} fill className="object-cover" quality={100} />
        </div>

        <div className="flex grow flex-col px-6 py-4 md:px-7 md:py-5">
          <span className="h4 line-clamp-2">{project.title}</span>
          <p className={`mt-2 text-[#5e5e5e] ${size === 'normal' ? 'line-clamp-3' : 'line-clamp-2'}`}>{project.short}</p>

          <div className="mt-auto">
            <div className="mt-4 mb-2 h-px w-full bg-gray-200" aria-hidden="true" />
            <Button variant="minimal" size="small" arrow>
              Szczegóły projektu
            </Button>
          </div>
        </div>
      </article>
    </Link>
  );
}
