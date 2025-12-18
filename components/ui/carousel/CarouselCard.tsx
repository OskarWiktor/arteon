'use client';

import type { ReactNode } from 'react';
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
      icon?: ReactNode;
    }
  | {
      variant: 'article';
      article: ArticlePreview;
      href: string;
      readingTimeLabel: string;
      publicationDateLabel: string;
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
    return (
      <Link
        href={props.href}
        className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        <article className="flex h-full flex-col surface-card-lift border border-gray-200 p-4 md:p-6">
          {props.icon ? (
            <div className="mb-4 flex justify-start" aria-hidden>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-500 shadow-sm ring-1 ring-black/5">
                {props.icon}
              </div>
            </div>
          ) : null}

          <h3 className="h4 mb-1 text-dark">{props.title}</h3>

          <div className="mt-auto pt-4">
            <span className="text-sm text-light underline underline-offset-4 transition group-hover:opacity-80">Otwórz narzędzie</span>
          </div>
        </article>
      </Link>
    );
  }

  const { article: a, href, readingTimeLabel, publicationDateLabel } = props;

  return (
    <article className="h-full surface-card">
      <Link href={href} className="block focus:outline-none">
        {a.cover ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black/10">
            <Image src={a.cover} alt={a.title} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
          </div>
        ) : null}
        <div className="p-4">
          <h3 className="h6">{a.title}</h3>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {a.readingTime ? (
              <span className="text-sm text-light">
                {a.readingTime} {readingTimeLabel}
              </span>
            ) : null}
            {a.datePublished ? (
              <span className="text-sm text-light" aria-label={publicationDateLabel}>
                • {a.datePublished}
              </span>
            ) : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
