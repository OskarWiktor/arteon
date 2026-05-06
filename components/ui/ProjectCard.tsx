import Image from 'next/image';
import Link from 'next/link';
import type { ProjectPreview } from '@/types/project';

type Props = { project: ProjectPreview; size?: 'small' | 'normal' };

const ArrowIcon = () => (
  <span className="ml-1 flex h-5 w-5 items-center justify-center" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  </span>
);

export default function ProjectCardSplit({ project, size = 'normal' }: Props) {
  const sizeClass = size === 'normal' ? 'aspect-[5/3]' : 'aspect-[2/1]';
  const detailsHref = `/realizacje/${project.slug}`;
  const externalLink = project.link;

  return (
    <article className="surface-card-lift group relative flex h-full flex-col overflow-hidden rounded-lg">
      <div className={`relative ${sizeClass} w-full`}>
        <Image src={project.image} alt={`Zrzut ekranu projektu ${project.title}`} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
      </div>

      <div className="flex grow flex-col px-6 py-4 md:px-7 md:py-5">
        <h3 className="h5 line-clamp-2">{project.title}</h3>
        <p className="text-light mt-2 line-clamp-2">{project.short}</p>

        <div className="mt-auto">
          <div className="mt-4 mb-2 h-px w-full bg-neutral-200" aria-hidden="true" />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            <Link
              href={detailsHref}
              aria-label={`Szczegóły projektu: ${project.title}`}
              className="focus-visible:ring-primary inline-flex items-center rounded-lg transition before:absolute before:inset-0 before:rounded-lg before:content-[''] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Szczegóły projektu
              <ArrowIcon />
            </Link>

            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Sprawdź stronę projektu ${project.title} (otwiera się w nowej karcie)`}
                className="focus-visible:ring-primary text-light hover:text-primary relative z-10 inline-flex items-center rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                Sprawdź stronę
                <ArrowIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
