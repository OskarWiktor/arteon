import Image from 'next/image';
import type { ArticlePreview } from '@/types/article';
import type { ProjectPreview } from '@/types/project';
import Card from '../Card';

import InlineLink from '../../atoms/InlineLink';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import ArrowIcon from '@/components/atoms/ArrowIcon';
const IMAGE_SIZES = '(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw';

type CarouselCardProps =
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
      variant: 'project';
      project: ProjectPreview;
      size?: 'small' | 'normal';
    };

export default function CarouselCard(props: CarouselCardProps) {
  if (props.variant === 'tool') {
    const { title, href, description, image, buttonLabel = 'Otwórz narzędzie' } = props;
    return (
      <Card as='article' className='group flex h-full flex-col' padding='md'>
        <Link href={href} className='block'>
          <div className='relative aspect-[2/1] w-full overflow-hidden'>
            <Image src={image} alt={title} fill className='object-cover' sizes={IMAGE_SIZES} />
          </div>
        <div className='flex grow flex-col px-6 py-4 md:px-7 md:py-5'>
          <h3 className='h5 line-clamp-2'>{title}</h3>
          <p className='text-light mt-2 line-clamp-2'>{description}</p>
          <div className='mt-4 mb-2 h-px w-full bg-neutral-200' aria-hidden='true' />
          <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'>
            <InlineLink
              href={href}
              className="inline-flex rounded-lg transition before:absolute before:inset-0 before:rounded-lg before:content-['']"
            >
              <span>{buttonLabel}</span>
              <ArrowIcon />
            </InlineLink>
          </div>
        </div>
        </Link>
      </Card>
    );
  }

  if (props.variant === 'article') {
    const { article, href, readingTimeLabel } = props;
    return (
      <Card as='article' className='group relative flex h-full flex-col' padding='md'>
        <Link href={href} prefetch={false} className='block'>
          {article.cover ? (
            <div className='relative aspect-[2/1] w-full overflow-hidden'>
              <Image
                src={article.cover}
                alt={article.title}
                fill
                className='object-cover'
                sizes={IMAGE_SIZES}
              />
            </div>
          ) : null}
          <div className='p-4'>
            <h3 className='h5 line-clamp-2'>{article.title}</h3>
            {article.readingTime ? (
              <span className='text-light inline-flex pt-2 text-sm'>
                {article.readingTime} {readingTimeLabel}
              </span>
            ) : null}
            {article.datePublished ? (
              <span className='text-light inline-flex pt-2 text-sm'>
                <span className='mx-1'>•</span>
                {article.datePublished.split('-').reverse().join('.')}
              </span>
            ) : null}
            {article.excerpt ? (
              <p className='text-light mt-2 line-clamp-3'>{article.excerpt}</p>
            ) : null}
            <div className='mt-4 mb-2 h-px w-full bg-neutral-200' aria-hidden='true' />
            <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'>
              <InlineLink
                href={href}
                className="inline-flex rounded-lg transition before:absolute before:inset-0 before:rounded-lg before:content-['']"
              >
                Przeczytaj artykuł
                <ArrowIcon />
              </InlineLink>
            </div>
          </div>
        </Link>
      </Card>
    );
  }

  const { project, size = 'normal' } = props;
  const aspectClass = size === 'normal' ? 'aspect-[5/3]' : 'aspect-[2/1]';
  const detailsHref = `/realizacje/${project.slug}`;
  const externalLink = project.link;

  return (
    <Card as='article' className='group relative flex h-full flex-col' padding='md'>
      <div className={cn('relative', aspectClass, 'w-full')}>
        <Image
          src={project.image}
          alt={`Zrzut ekranu projektu ${project.title}`}
          fill
          className='object-cover'
          sizes={IMAGE_SIZES}
        />
      </div>

      <div className='flex grow flex-col px-6 py-4 md:px-7 md:py-5'>
        <h3 className='h5 line-clamp-2'>{project.title}</h3>
        <p className='text-light mt-2 line-clamp-2'>{project.short}</p>

        <div className='mt-auto'>
          <div className='mt-4 mb-2 h-px w-full bg-neutral-200' aria-hidden='true' />
          <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'>
            <InlineLink
              href={detailsHref}
              aria-label={`Szczegóły projektu: ${project.title}`}
              className="inline-flex rounded-lg transition before:absolute before:inset-0 before:rounded-lg before:content-['']"
            >
              Szczegóły projektu
              <ArrowIcon />
            </InlineLink>

            {externalLink && (
              <InlineLink
                href={externalLink}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Sprawdź stronę projektu ${project.title} (otwiera się w nowej karcie)`}
                className='text-light hover:text-primary relative z-10 inline-flex rounded-lg transition'
              >
                Sprawdź stronę
                <ArrowIcon />
              </InlineLink>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
