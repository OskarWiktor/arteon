import type { ArticlePreview } from '@/types/article';
import type { ProjectPreview } from '@/types/project';
import InlineLink from '../../atoms/InlineLink';
import ArrowIcon from '@/components/atoms/ArrowIcon';
import CarouselCardShell from '@/components/molecules/carousels/CarouselCardShell';

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
    };

/**
 * Renders a carousel card for a tool, article, or project based on the `variant` prop.
 *
 * @returns A JSX element representing the carousel card for the provided `props.variant`.
 */
export default function CarouselCard(props: CarouselCardProps) {
  if (props.variant === 'tool') {
    const {
      title,
      href,
      description,
      image,
      buttonLabel = 'Otwórz narzędzie',
    } = props;
    return (
      <CarouselCardShell href={href} image={image} title={title}>
        <p className='mt-2 line-clamp-2 text-light'>{description}</p>
        <div
          className='mt-4 mb-2 h-px w-full bg-neutral-200'
          aria-hidden='true'
        />
        <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'>
          <InlineLink
            href={href}
            className="inline-flex rounded-lg transition before:absolute before:inset-0 before:rounded-lg before:content-['']"
          >
            <span>{buttonLabel}</span>
            <ArrowIcon />
          </InlineLink>
        </div>
      </CarouselCardShell>
    );
  }

  if (props.variant === 'article') {
    const { article, href, readingTimeLabel } = props;
    return (
      <CarouselCardShell
        href={href}
        image={article.cover}
        title={article.title}
      >
        {article.readingTime ? (
          <span className='inline-flex pt-2 text-sm text-light'>
            {article.readingTime} {readingTimeLabel}
          </span>
        ) : null}
        {article.datePublished ? (
          <span className='inline-flex pt-2 text-sm text-light'>
            <span className='mx-1'>•</span>
            {article.datePublished.split('-').reverse().join('.')}
          </span>
        ) : null}
        {article.excerpt ? (
          <p className='mt-2 line-clamp-3 text-light'>{article.excerpt}</p>
        ) : null}
        <div
          className='mt-4 mb-2 h-px w-full bg-neutral-200'
          aria-hidden='true'
        />
        <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'>
          <InlineLink
            href={href}
            className="inline-flex rounded-lg transition before:absolute before:inset-0 before:rounded-lg before:content-['']"
          >
            Przeczytaj artykuł
            <ArrowIcon />
          </InlineLink>
        </div>
      </CarouselCardShell>
    );
  }

  const { project } = props;
  const detailsHref = `/realizacje/${project.slug}`;
  const websiteLink = project.link;

  return (
    <CarouselCardShell
      multipleLinks={false}
      href={detailsHref}
      image={project.image}
      title={project.title}
    >
      <p className='mt-2 line-clamp-2 text-light'>{project.short}</p>

      <div className='mt-auto'>
        <div
          className='mt-4 mb-2 h-px w-full bg-neutral-200'
          aria-hidden='true'
        />
        <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'>
          <InlineLink
            href={detailsHref}
            aria-label={`Szczegóły projektu: ${project.title}`}
            className="inline-flex rounded-lg transition before:absolute before:inset-0 before:rounded-lg before:content-['']"
          >
            Szczegóły projektu
            <ArrowIcon />
          </InlineLink>

          {websiteLink && (
            <InlineLink
              href={websiteLink}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Sprawdź stronę projektu ${project.title} (otwiera się w nowej karcie)`}
              className='relative z-10 inline-flex rounded-lg text-light transition hover:text-primary'
            >
              Sprawdź stronę
              <ArrowIcon />
            </InlineLink>
          )}
        </div>
      </div>
    </CarouselCardShell>
  );
}
