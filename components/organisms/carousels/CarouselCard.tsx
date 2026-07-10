import ArrowIcon from '@/components/atoms/ArrowIcon';
import CarouselCardShell from '@/components/molecules/carousels/CarouselCardShell';
import type { ArticlePreview } from '@/types/article';
import type { ProjectPreview } from '@/types/project';
import InlineLink from '../../atoms/InlineLink';

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
 * Render a carousel card for a tool, article, or project based on the provided props.
 *
 * @param props - The `CarouselCardProps` that determine the variant and content to render.
 * @returns The rendered carousel card for the given props.
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
        <p className='line-clamp-2 pt-4 text-[#AD9D90]!'>{description}</p>
        <div className='mt-auto'>
          <div
            className='mt-4 mb-2 h-px w-full bg-[#483135]!'
            aria-hidden='true'
          />
          <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'>
            <InlineLink
              href={href}
              aria-label={`${buttonLabel}: ${title}`}
              className="inline-flex rounded-lg text-[#AD9D90]! transition before:absolute before:inset-0 before:rounded-lg before:content-['']"
            >
              <span className='text-[#E5DCD3]!'>{buttonLabel}</span>
              <ArrowIcon />
            </InlineLink>
          </div>
        </div>
      </CarouselCardShell>
    );
  }

  if (props.variant === 'article') {
    const { article, href } = props;
    return (
      <CarouselCardShell
        href={href}
        image={article.cover}
        title={article.title}
      >
        {article.readingTime && article.datePublished && (
          <span className='inline-flex pt-2 text-sm text-[#AD9D90]!'>
            {article.readingTime} min. czytania • {article.datePublished}
          </span>
        )}
        {article.excerpt && (
          <p className='line-clamp-3 pt-4 text-[#AD9D90]!'>{article.excerpt}</p>
        )}
        <div className='mt-auto'>
          <div
            className='mt-4 mb-2 h-px w-full bg-[#483135]!'
            aria-hidden='true'
          />
          <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'>
            <InlineLink
              href={href}
              aria-label={`Przeczytaj artykuł: ${article.title}`}
              className="inline-flex rounded-lg text-[#E5DCD3]! transition before:absolute before:inset-0 before:rounded-lg before:content-['']"
            >
              Przeczytaj artykuł
              <ArrowIcon />
            </InlineLink>
          </div>
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
      imageAspectClassName='aspect-3/2'
    >
      <p className='line-clamp-3 pt-4 text-[#AD9D90]!'>{project.short}</p>

      <div className='mt-auto'>
        <div
          className='mt-4 mb-4 h-px w-full bg-[#483135]!'
          aria-hidden='true'
        />
        <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'>
          <InlineLink
            href={detailsHref}
            aria-label={`Szczegóły projektu: ${project.title}`}
            className="inline-flex rounded-lg text-[#E5DCD3]! transition before:absolute before:inset-0 before:rounded-lg before:content-['']"
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
              className='relative z-10 inline-flex rounded-lg text-[#E5DCD3]! transition hover:text-primary'
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
