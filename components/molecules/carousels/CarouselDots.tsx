'use client';

import { focusRingClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';

type CarouselDotsProps = {
  isScrollable: boolean;
  currentSlide: number;
  maxSlides: number;
  onDotClick: (index: number) => void;
  carouselNavigationLabel: string;
  goToSlideLabel: string;
  ofLabel: string;
  slideLabel: string;
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
}: CarouselDotsProps) {
  if (!isScrollable || maxSlides <= 1) return null;

  return (
    <>
      <div
        className='flex justify-center md:gap-2'
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
                'mx-auto block h-2 w-4 rounded-sm transition md:w-6',
                i === currentSlide ? 'bg-primary' : 'bg-primary-light',
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
