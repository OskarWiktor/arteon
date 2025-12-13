'use client';

import Image from 'next/image';
import Link from 'next/link';

import ProjectCard from '@/components/ui/ProjectCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import Text from '@/components/ui/typography/Text';

import type { Article } from '@/types/article';
import type { Project } from '@/types/project';
import type { Testimonial } from '@/types/testimonial';

type CarouselCardProps =
  | {
      variant: 'project';
      project: Project;
    }
  | {
      variant: 'article';
      article: Article;
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
              <Text variant="small" tone="muted" as="span">
                {a.readingTime} {readingTimeLabel}
              </Text>
            ) : null}
            {a.datePublished ? (
              <Text variant="small" tone="muted" as="span" aria-label={publicationDateLabel}>
                • {a.datePublished}
              </Text>
            ) : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
