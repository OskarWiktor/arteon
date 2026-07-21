import { cn } from '@/lib/clsx';
import {
  carouselCardClasses,
  carouselTrackClasses,
  columnGapClasses,
  noScrollbarClasses,
} from '@/lib/uiClasses';
import CarouselCardSkeleton from './CarouselCardSkeleton';
import Shimmer from '../../atoms/skeletons/Shimmer';

type CarouselVariant = 'project' | 'tool' | 'article' | 'testimonial';

interface CarouselSkeletonProps {
  variant?: CarouselVariant;
  count?: number;
}

/**
 * Skeleton for the section-info column that sits beside project/tool/article
 * carousels (subtitle-less title, description lines and an action button).
 */
function SectionInfoColumnSkeleton() {
  return (
    <div className='lg:w-1/3'>
      <Shimmer className='h-4 w-32' />
      <Shimmer className='mt-3 h-8 w-4/5' />
      <Shimmer className='mt-2 h-8 w-3/5' />
      <div className='mt-4 space-y-2'>
        <Shimmer className='h-4 w-full' />
        <Shimmer className='h-4 w-5/6' />
      </div>
      <Shimmer className='mt-6 h-11 w-48' />
    </div>
  );
}

/** Row of pagination dots shown under a carousel track. */
function DotsSkeleton({ count }: { count: number }) {
  return (
    <div className='mt-2 flex justify-center gap-2'>
      {Array.from({ length: Math.min(count, 5) }).map((_, i) => (
        <Shimmer key={i} className='h-2.5 w-2.5 rounded-full' />
      ))}
    </div>
  );
}

/**
 * Skeleton for a single testimonial card, matching the real light `TestimonialCard`
 * (bordered white card, centered star row, quote lines and author name).
 */
function TestimonialCardSkeleton() {
  return (
    <div className='flex h-full w-full flex-col gap-3 overflow-hidden border border-neutral-300 bg-white p-5 shadow-[1px_1px_3px_#C6B7A2] md:p-8'>
      <div className='flex justify-center gap-1'>
        {[0, 1, 2, 3, 4].map(i => (
          <Shimmer key={i} className='h-5 w-5 bg-warning-bg!' />
        ))}
      </div>
      <div className='space-y-2'>
        <Shimmer className='h-4 w-full' />
        <Shimmer className='h-4 w-full' />
        <Shimmer className='h-4 w-4/5' />
      </div>
      <Shimmer className='mt-1 h-6 w-40' />
    </div>
  );
}

/**
 * Skeleton for the testimonials carousel: a centered header with a rating badge,
 * a full-width scroll track of testimonial cards, and centered navigation dots.
 */
function TestimonialsCarouselSkeleton({ count }: { count: number }) {
  return (
    <section className='w-full'>
      <div
        className={cn(
          'mb-6 flex flex-col items-center justify-center md:mb-8 md:flex-row',
          columnGapClasses,
        )}
      >
        <div className='text-center'>
          <Shimmer className='mx-auto h-8 w-72' />
          <Shimmer className='mx-auto mt-2 h-8 w-52' />
        </div>
        <Shimmer className='h-12 w-44' />
      </div>

      <div className={cn(carouselTrackClasses, noScrollbarClasses)}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className='w-[320px] shrink-0 snap-start md:w-105 lg:w-130'
          >
            <TestimonialCardSkeleton />
          </div>
        ))}
      </div>

      <DotsSkeleton count={count} />
    </section>
  );
}

/**
 * Render a carousel skeleton that mirrors the loaded carousel layout: a
 * one-third section-info column beside a two-thirds scroll track of cards for
 * project/tool/article variants, and a dedicated centered layout for testimonials.
 *
 * @param variant - Which carousel to mimic. Defaults to `'project'`.
 * @param count - Number of skeleton cards to render. Defaults to `3`.
 */
export default function CarouselSkeleton({
  variant = 'project',
  count = 3,
}: CarouselSkeletonProps) {
  if (variant === 'testimonial') {
    return <TestimonialsCarouselSkeleton count={count} />;
  }

  return (
    <div className='flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:gap-8'>
      <SectionInfoColumnSkeleton />

      <div className='lg:w-2/3'>
        <div className={cn(carouselTrackClasses, noScrollbarClasses)}>
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className={carouselCardClasses}>
              <CarouselCardSkeleton variant={variant} />
            </div>
          ))}
        </div>

        <DotsSkeleton count={count} />
      </div>
    </div>
  );
}
