'use client';

import { cn } from '@/lib/clsx';
import { focusRingClasses } from '@/lib/uiClasses';

type CarouselDotsProps = {
  isScrollable: boolean;
  currentSlide: number;
  maxSlides: number;
  onDotClick: (index: number) => void;
  carouselNavigationLabel: string;
  goToSlideLabel: string;
  ofLabel: string;
  slideLabel: string;
  /**
   * `start` (default) offsets the dots to clear the bottom-left nav arrows.
   * `center` drops that offset so the dots can sit in a centered nav row.
   */
  align?: 'start' | 'center';
};

export function CarouselDots({
  isScrollable,
  currentSlide,
  maxSlides,
  onDotClick,
  carouselNavigationLabel,
  goToSlideLabel,
  ofLabel,
  slideLabel,
  align = 'start',
}: CarouselDotsProps) {
  if (!isScrollable || maxSlides <= 1) return null;

  return (
    <>
      <div
        className={cn(
          'flex md:gap-2',
          align === 'center' ? 'justify-center' : 'mt-2 ml-40 justify-start',
        )}
        role='group'
        aria-label={carouselNavigationLabel}
      >
        {Array.from({ length: maxSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            aria-label={`${goToSlideLabel} ${i + 1} ${ofLabel} ${maxSlides}`}
            aria-current={i === currentSlide ? 'true' : undefined}
            className={cn('cursor-pointer p-1', focusRingClasses)}
          >
            <span
              aria-hidden='true'
              className={cn(
                'mx-auto block h-3 w-4 rounded-sm transition md:w-8',
                i === currentSlide ? 'bg-[#380911]' : 'bg-[#C6B7A2]',
              )}
            />
          </button>
        ))}
      </div>

      <p className='sr-only' aria-live='polite'>
        {slideLabel} {Math.min(currentSlide + 1, maxSlides)} {ofLabel}{' '}
        {maxSlides}
      </p>
    </>
  );
}
