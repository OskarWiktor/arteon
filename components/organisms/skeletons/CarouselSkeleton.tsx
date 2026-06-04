import { flexCenterBetweenClasses, noScrollbarClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';
import Card from '../Card';
import Shimmer from '../../atoms/skeletons/Shimmer';

type CarouselVariant = 'project' | 'tool' | 'article' | 'testimonial';

interface CarouselSkeletonProps {
  variant?: CarouselVariant;
  count?: number;
}

/**
 * Skeleton placeholder representing a project card used inside a carousel.
 *
 * Renders a fixed-width, non-interactive outlined Card with shimmer placeholders for a media area, title/text lines, a divider, and an action/button.
 *
 * @returns A JSX element containing the project card skeleton
 */
function ProjectCardSkeleton() {
  return (
    <div className='w-85 shrink-0 snap-start md:w-105 lg:w-130'>
      <Card interactive={false} variant='outlined'>
        <Shimmer className='aspect-2/1 w-full rounded-none! bg-neutral-300!' />
        <div className='space-y-3 px-6 py-4 md:px-7 md:py-5'>
          <Shimmer className='h-5 w-3/4' />
          <Shimmer className='h-3.5 w-full' />
          <div className='mt-2 h-px w-full bg-neutral-200' />
          <Shimmer className='h-8 w-36 rounded-lg!' />
        </div>
      </Card>
    </div>
  );
}

/**
 * Renders a skeleton placeholder for a tool card inside the carousel.
 *
 * The skeleton matches the carousel card sizing and layout and composes an outlined,
 * non-interactive Card with a media shimmer and several text/action shimmers.
 *
 * @returns A JSX element representing the tool card skeleton.
 */
function ToolCardSkeleton() {
  return (
    <div className='w-85 shrink-0 snap-start md:w-105 lg:w-130'>
      <Card interactive={false} variant='outlined'>
        <Shimmer className='bg-neutral-250! aspect-video w-full rounded-none! bg-neutral-300!' />
        <div className='space-y-3 p-4 md:p-5'>
          <Shimmer className='h-5 w-3/5' />
          <Shimmer className='h-3.5 w-full' />
          <Shimmer className='h-3.5 w-4/5' />
          <Shimmer className='mt-2 h-9 w-36 rounded-lg!' />
        </div>
      </Card>
    </div>
  );
}

/**
 * Renders a skeleton placeholder for an article-style carousel card.
 *
 * The skeleton includes a video-aspect shimmer header and several line shimmers to mimic title,
 * subtitle, and metadata layout inside an outlined, non-interactive card sized for a carousel.
 *
 * @returns A JSX element representing the article card skeleton
 */
function ArticleCardSkeleton() {
  return (
    <div className='w-85 shrink-0 snap-start md:w-105 lg:w-130'>
      <Card interactive={false} variant='outlined'>
        <Shimmer className='aspect-video w-full rounded-none! bg-neutral-300!' />
        <div className='space-y-2 p-4'>
          <Shimmer className='h-5 w-4/5' />
          <Shimmer className='h-3.5 w-full' />
          <Shimmer className='h-3.5 w-3/4' />
          <div className='flex gap-2 pt-1'>
            <Shimmer className='h-3.5 w-20' />
            <Shimmer className='h-3.5 w-24' />
          </div>
        </div>
      </Card>
    </div>
  );
}

/**
 * Renders a testimonial skeleton card used as a placeholder in carousels.
 *
 * @returns A JSX element containing a centered, outlined testimonial card skeleton with name/title shimmers, a five-item star/score shimmer row, and three centered line shimmers for the testimonial text.
 */
function TestimonialCardSkeleton() {
  return (
    <div className='w-85 shrink-0 snap-start md:w-105 lg:w-130'>
      <Card
        interactive={false}
        variant='outlined'
        padding='lg'
        className='flex flex-col items-center gap-0'
      >
        <Shimmer className='h-6 w-40' />
        <Shimmer className='mt-2 h-4 w-28' />
        <div className='mt-2 flex gap-1'>
          {[1, 2, 3, 4, 5].map(i => (
            <Shimmer key={i} className='h-5 w-5 rounded-sm! bg-amber-100!' />
          ))}
        </div>
        <div className='mt-4 w-full space-y-2'>
          <Shimmer className='mx-auto h-4 w-full' />
          <Shimmer className='mx-auto h-4 w-5/6' />
          <Shimmer className='mx-auto h-4 w-3/4' />
        </div>
      </Card>
    </div>
  );
}

const cardMap: Record<CarouselVariant, () => React.JSX.Element> = {
  project: ProjectCardSkeleton,
  tool: ToolCardSkeleton,
  article: ArticleCardSkeleton,
  testimonial: TestimonialCardSkeleton,
};

/**
 * Render a horizontal carousel skeleton composed of a header, a row of variant-specific skeleton cards, and pagination dots.
 *
 * Renders `count` skeleton cards of the selected `variant` and up to five pagination dots; the card row uses no-scrollbar utility classes and keeps items horizontally scrollable.
 *
 * @param variant - Which skeleton card style to render: `'project' | 'tool' | 'article' | 'testimonial'`. Defaults to `'project'`.
 * @param count - Number of skeleton cards to render. Defaults to `3`.
 * @returns The JSX element for the carousel skeleton (header, card row, and pagination dots).
 */
export default function CarouselSkeleton({
  variant = 'project',
  count = 3,
}: CarouselSkeletonProps) {
  const CardComponent = cardMap[variant];

  return (
    <div className='space-y-4'>
      <div className={flexCenterBetweenClasses}>
        <Shimmer className='h-7 w-1/3' />
        <Shimmer className='h-4 w-32' />
      </div>
      <div
        className={cn(noScrollbarClasses, 'flex gap-4 overflow-hidden pb-2')}
      >
        {Array.from({ length: count }).map((_, i) => (
          <CardComponent key={i} />
        ))}
      </div>
      <div className='flex justify-center gap-2'>
        {Array.from({ length: Math.min(count, 5) }).map((_, i) => (
          <Shimmer key={i} className='h-2.5 w-2.5 rounded-lg!' />
        ))}
      </div>
    </div>
  );
}
