'use client';

import { TriangleLeft, TriangleRight } from '@/components/atoms/icons/Triangle';
import { cn } from '@/lib/clsx';
import { normalIconSizeClasses } from '@/lib/uiClasses';
import { CarouselDots } from './CarouselDots';
import ButtonCircle from '../../atoms/buttons/ButtonCircle';

type CarouselNavCenteredProps = {
  isScrollable: boolean;
  currentSlide: number;
  maxSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  prevLabel: string;
  nextLabel: string;
  carouselNavigationLabel: string;
  goToSlideLabel: string;
  ofLabel: string;
  slideLabel: string;
};

const arrowClasses = 'h-12 w-12 bg-[#1C1F32]';

/**
 * Centered carousel navigation: previous arrow, pagination dots and next arrow
 * on a single centered row below the track. Used where the standard
 * bottom-left overlay arrows + right-aligned dots don't fit (e.g. testimonials).
 */
export function CarouselNavCentered({
  isScrollable,
  currentSlide,
  maxSlides,
  onPrev,
  onNext,
  onDotClick,
  prevLabel,
  nextLabel,
  carouselNavigationLabel,
  goToSlideLabel,
  ofLabel,
  slideLabel,
}: CarouselNavCenteredProps) {
  if (!isScrollable || maxSlides <= 1) return null;

  return (
    <div className='flex items-center justify-center gap-4'>
      <ButtonCircle
        onClick={onPrev}
        ariaLabel={prevLabel}
        className={arrowClasses}
      >
        <TriangleLeft
          className={cn(normalIconSizeClasses, 'mr-1')}
          aria-hidden='true'
        />
      </ButtonCircle>

      <CarouselDots
        isScrollable={isScrollable}
        currentSlide={currentSlide}
        maxSlides={maxSlides}
        onDotClick={onDotClick}
        carouselNavigationLabel={carouselNavigationLabel}
        goToSlideLabel={goToSlideLabel}
        ofLabel={ofLabel}
        slideLabel={slideLabel}
        align='center'
      />

      <ButtonCircle
        onClick={onNext}
        ariaLabel={nextLabel}
        className={arrowClasses}
      >
        <TriangleRight
          className={cn(normalIconSizeClasses, 'ml-1')}
          aria-hidden='true'
        />
      </ButtonCircle>
    </div>
  );
}
