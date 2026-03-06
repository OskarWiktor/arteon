import Image from 'next/image';
import Link from 'next/link';
import type { ProjectPreview } from '@/types/project';

type Props = { project: ProjectPreview; size?: 'small' | 'normal' };

export default function ProjectCardSplit({ project, size = 'normal' }: Props) {
  const sizeClass = size === 'normal' ? 'aspect-[5/3]' : 'aspect-[2/1]';

  return (
    <Link
      href={`/realizacje/${project.slug}`}
      prefetch={false}
      className="group focus-visible:ring-primary block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <article className="surface-card-lift flex h-full flex-col overflow-hidden">
        <div className={`relative ${sizeClass} w-full`}>
          <Image src={project.image} alt={`Zrzut ekranu projektu ${project.title}`} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" unoptimized />
        </div>

        <div className="flex grow flex-col px-6 py-4 md:px-7 md:py-5">
          <h3 className="h5 line-clamp-2">{project.title}</h3>
          <p className="text-light mt-2 line-clamp-2">{project.short}</p>

          <div className="mt-auto">
            <div className="mt-4 mb-2 h-px w-full bg-neutral-200" aria-hidden="true" />
            <span className="focus-visible:ring-primary inline-flex w-fit cursor-pointer items-center rounded-xl border-0 text-sm font-medium shadow-none transition hover:translate-y-0 hover:shadow-none">
              <span>Szczegóły projektu</span>
              <span className="ml-1 flex h-5 w-5 items-center justify-center" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
