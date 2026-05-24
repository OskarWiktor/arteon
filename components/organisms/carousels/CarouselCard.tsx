import Image from 'next/image';
import type { ArticlePreview } from '@/types/article';
import type { ProjectPreview } from '@/types/project';
import Card from '../Card';

import InlineLink from '../../atoms/InlineLink';
import Link from 'next/link';
const IMAGE_SIZES = '(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw';

const ArrowIcon = () => (
  <span className='ml-1 flex h-5 w-5 items-center justify-center' aria-hidden='true'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='h-4 w-4'
    >
      <path d='M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z' />
    </svg>
  </span>
);

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
      <Card as='article' variant='default' className='flex h-full flex-col'>
        <InlineLink href={href} prefetch={false} className='block'>
          <div className='relative aspect-[16/9] w-full overflow-hidden border-b border-black/10'>
            <Image src={image} alt={title} fill className='object-cover' sizes={IMAGE_SIZES} />
          </div>
        </InlineLink>
        <div className='flex flex-1 flex-col p-4 md:p-5'>
          <h3 className='h5 text-dark mb-2'>{title}</h3>
          <p className='text-light mb-4 line-clamp-3 !text-sm'>{description}</p>
          <div className='mt-auto'>
            <InlineLink
              href={href}
              prefetch={false}
              className='inline-flex w-fit items-center rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:px-4 md:py-2 md:text-base'
            >
              <span>{buttonLabel}</span>
              <ArrowIcon />
            </InlineLink>
          </div>
        </div>
      </Card>
    );
  }

  if (props.variant === 'article') {
    const { article, href, readingTimeLabel } = props;
    return (
      <Card as='article' variant='default' className='h-full'>
        <Link href={href} prefetch={false} className='block'>
          {article.cover ? (
            <div className='relative aspect-[16/9] w-full overflow-hidden border-b border-black/10'>
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
            <h3 className='h6'>{article.title}</h3>
            {article.excerpt ? (
              <p className='text-light mt-2 line-clamp-3 !text-sm'>{article.excerpt}</p>
            ) : null}
            <div className='mt-3 flex flex-wrap items-center gap-2'>
              {article.readingTime ? (
                <span className='text-light text-sm'>
                  {article.readingTime} {readingTimeLabel}
                </span>
              ) : null}
              {article.datePublished ? (
                <span className='text-light text-sm'>
                  <span className='mx-1'>•</span>
                  {article.datePublished.split('-').reverse().join('.')}
                </span>
              ) : null}
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
    <Card as='article' className='group relative flex h-full flex-col overflow-hidden'>
      <div className={`relative ${aspectClass} w-full`}>
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
              className="inline-flex items-center rounded-lg transition before:absolute before:inset-0 before:rounded-lg before:content-['']"
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
                className='text-light hover:text-primary relative z-10 inline-flex items-center rounded-lg transition'
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
