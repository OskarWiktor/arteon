import { RiStarFill } from 'react-icons/ri';
import testimonialsPl from '@/data/pl/testimonials.json';
import { cn } from '@/lib/clsx';
import type { Testimonial, TestimonialSource } from '@/types/testimonial';

/** Review platforms shown in the badge, linked to their profile. */
const REVIEW_SOURCES: { label: string; source: TestimonialSource }[] = [
  { label: 'Fixly', source: 'fixly' },
  { label: 'Google', source: 'google' },
  { label: 'Oferteo', source: 'oferteo' },
];

/** First available review link for a platform, taken from the testimonials data. */
const reviewSourceHref = (source: TestimonialSource) =>
  (testimonialsPl as Testimonial[]).find(t => t.source === source && t.link)
    ?.link;

interface RatingBadgeProps {
  /** Aggregate rating, e.g. 4.9. */
  averageRating?: number;
  /** Total number of reviews. */
  reviewsCount?: number;
  className?: string;
}

/**
 * Compact social-proof badge: the average score, a five-star row, the review
 * count and links to the platforms the reviews come from. Shared by the
 * testimonials carousel header and the homepage hero so both stay in sync.
 */
export default function RatingBadge({
  averageRating = 4.9,
  reviewsCount = 22,
  className,
}: RatingBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex shrink-0 items-center gap-3 bg-[#E4D9CA] px-4 py-2.5',
        className,
      )}
    >
      <span className='text-3xl leading-none font-bold text-primary'>
        {averageRating.toFixed(1).replace('.', ',')}
        <span className='sr-only'> na 5</span>
      </span>
      <span aria-hidden='true' className='h-9 w-px bg-primary/15' />
      <div>
        <div className='flex items-center gap-2'>
          <span aria-hidden='true' className='flex gap-0.5 text-[#DCB893]'>
            {Array.from({ length: 5 }).map((_, i) => (
              <RiStarFill key={i} className='h-4 w-4' />
            ))}
          </span>
          <span className='text-sm font-semibold text-primary'>
            {reviewsCount} opinie
          </span>
        </div>
        <span className='mt-1 block text-xs text-mid'>
          {REVIEW_SOURCES.map((s, i) => {
            const href = reviewSourceHref(s.source);
            return (
              <span key={s.source}>
                {i > 0 && ', '}
                {href ? (
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover-underline'
                  >
                    {s.label}
                  </a>
                ) : (
                  s.label
                )}
              </span>
            );
          })}
        </span>
      </div>
    </div>
  );
}
