import Image from 'next/image';
import Link from 'next/link';
import type { ProjectPreview } from '@/types/project';
import Button from './buttons/Button';

const ui = {
  pl: {
    projectUrlPrefix: '/realizacje',
    projectDetails: 'Szczegóły projektu',
    projectImageAlt: 'Zrzut ekranu projektu',
  },
} as const;

type Props = { project: ProjectPreview; size?: 'small' | 'normal' };

export default function ProjectCardSplit({ project, size = 'normal' }: Props) {
  const t = ui.pl;
  const sizeClass = size === 'normal' ? 'aspect-[5/3]' : 'aspect-[2/1]';

  return (
    <Link
      href={`${t.projectUrlPrefix}/${project.slug}`}
      className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <article className="surface-card-lift flex h-full flex-col overflow-hidden">
        <div className={`relative ${sizeClass} w-full`}>
          <Image src={project.image} alt={`${t.projectImageAlt} ${project.title}`} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" quality={85} />
        </div>

        <div className="flex grow flex-col px-6 py-4 md:px-7 md:py-5">
          <h3 className="h5 line-clamp-2">{project.title}</h3>
          <p className={`text-light mt-2 text-base ${size === 'normal' ? 'line-clamp-3' : 'line-clamp-2'}`}>{project.short}</p>

          <div className="mt-auto">
            <div className="mt-4 mb-2 h-px w-full bg-gray-200" aria-hidden="true" />
            <Button variant="normal" size="small" arrow className="border-0 shadow-none hover:translate-y-0 hover:shadow-none">
              {t.projectDetails}
            </Button>
          </div>
        </div>
      </article>
    </Link>
  );
}
