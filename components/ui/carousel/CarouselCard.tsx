'use client';

import Image from 'next/image';
import Link from 'next/link';

import ProjectCard from '@/components/ui/ProjectCard';
import TestimonialCard from '@/components/ui/TestimonialCard';

import type { ArticlePreview } from '@/types/article';
import type { ProjectPreview } from '@/types/project';
import type { Testimonial } from '@/types/testimonial';

type CarouselCardProps =
  | {
      variant: 'project';
      project: ProjectPreview;
    }
  | {
      variant: 'tool';
      title: string;
      href: string;
      description: string;
      image: string;
      buttonLabel?: string;
    }
  | {
      variant: 'article';
      article: ArticlePreview;
      href: string;
      readingTimeLabel: string;
    }
  | {
      variant: 'testimonial';
      item: Testimonial;
    };

export function CarouselCard(props: CarouselCardProps) {
  if (props.variant === 'project') {
    return <ProjectCard project={props.project} size="small" />;
  }

  if (props.variant === 'testimonial') {
    return <TestimonialCard item={props.item} />;
  }

  if (props.variant === 'tool') {
    const label = props.buttonLabel ?? 'Otwórz narzędzie';

    return (
      <article className="surface-card flex h-full flex-col overflow-hidden">
        <Link href={props.href} prefetch={false} className="block focus:outline-none">
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black/10">
            <Image
              src={props.image}
              alt={props.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              unoptimized
            />
          </div>
        </Link>
        <div className="flex flex-1 flex-col p-4 md:p-5">
          <h3 className="h5 text-dark mb-2">{props.title}</h3>
          <p className="text-light mb-4 line-clamp-3 !text-sm">{props.description}</p>
          <div className="mt-auto">
            <Link
              href={props.href}
              prefetch={false}
              className="focus-visible:ring-primary inline-flex w-fit items-center rounded-2xl border border-black/10 bg-white px-3 py-1.5 text-sm font-medium shadow-md transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 md:px-4 md:py-2 md:text-base"
            >
              <span>{label}</span>
              <span className="ml-1 flex h-5 w-5 items-center justify-center" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  const { article: a, href, readingTimeLabel } = props;

  return (
    <article className="surface-card h-full">
      <Link href={href} prefetch={false} className="block focus:outline-none">
        {a.cover ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black/10">
            <Image src={a.cover} alt={a.title} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" unoptimized />
          </div>
        ) : null}
        <div className="p-4">
          <h3 className="h6">{a.title}</h3>
          {a.excerpt ? <p className="text-light mt-2 line-clamp-3 !text-sm">{a.excerpt}</p> : null}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {a.readingTime ? (
              <span className="text-light text-sm">
                {a.readingTime} {readingTimeLabel}
              </span>
            ) : null}
            {a.datePublished ? (
              <span className="text-light text-sm">
                <span className="mx-1">•</span>
                {a.datePublished.split('-').reverse().join('.')}
              </span>
            ) : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
