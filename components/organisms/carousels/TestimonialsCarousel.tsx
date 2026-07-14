'use client';

import { useRef } from 'react';
import { CarouselNavCentered } from '@/components/molecules/carousels/CarouselNavCentered';
import RatingBadge from '@/components/molecules/RatingBadge';
import TestimonialCard from '@/components/organisms/carousels/TestimonialCard';
import testimonialsPl from '@/data/pl/testimonials.json';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';
import { cn } from '@/lib/clsx';
import {
  carouselEdgeFadeClasses,
  carouselTrackClasses,
  columnGapClasses,
  focusRingClasses,
  noScrollbarClasses,
} from '@/lib/uiClasses';
import type { Testimonial } from '@/types/testimonial';
import SectionHeader from '../../molecules/SectionHeader';

const AUTO_PLAY_INTERVAL_MS = 4000;

interface TestimonialsCarouselProps {
  title?: string;
  subtitle?: string;
  secondaryTitle?: string;
  /** Aggregate rating shown in the header badge (e.g. 4.9). */
  averageRating?: number;
  /** Total number of reviews shown in the header badge. */
  reviewsCount?: number;
  testimonials?: Testimonial[];
  ids?: string[];
}

export default function TestimonialsCarousel({
  title = 'Zobacz co mówią o nas inni',
  subtitle,
  secondaryTitle,
  averageRating = 4.9,
  reviewsCount = 22,
  testimonials,
  ids,
}: TestimonialsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const source: Testimonial[] = testimonials?.length
    ? testimonials
    : (testimonialsPl as Testimonial[]);

  const items: Testimonial[] = (() => {
    let list = source;
    if (ids?.length) {
      const map = new Map(list.map(t => [t.id, t] as const));
      list = ids.map(id => map.get(id)).filter(Boolean) as Testimonial[];
    }
    return list;
  })();

  const {
    currentSlide,
    maxSlides,
    isScrollable,
    scrollByCards,
    goToSlide,
    onKeyDown,
  } = useCarouselScroller({
    itemCount: items.length,
    scrollRef,
    cardRef,
    autoPlay: true,
    autoPlayIntervalMs: AUTO_PLAY_INTERVAL_MS,
  });

  if (!items.length) return null;

  return (
    <section className='w-full' aria-labelledby='testimonials-heading'>
      <div
        className={cn(
          'mb-6 flex flex-col items-center justify-center md:mb-8 md:flex-row',
          columnGapClasses,
        )}
      >
        <SectionHeader
          subtitle={subtitle}
          title={title}
          secondaryTitle={secondaryTitle}
          titleId='testimonials-heading'
          containerClassName='pb-0! text-center'
        />

        <RatingBadge
          averageRating={averageRating}
          reviewsCount={reviewsCount}
        />
      </div>

      <div className='relative'>
        <div
          ref={scrollRef}
          className={cn(
            carouselTrackClasses,
            noScrollbarClasses,
            focusRingClasses,
          )}
          role='region'
          aria-roledescription='carousel'
          aria-label='Karuzela opinii'
          aria-live='polite'
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              ref={
                i === 0
                  ? (el: HTMLDivElement | null) => {
                      cardRef.current = el;
                    }
                  : null
              }
              className='w-[320px] shrink-0 snap-start md:w-105 lg:w-130'
              role='group'
              aria-label={`Opinia ${i + 1} z ${items.length}`}
            >
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>

        <div aria-hidden='true' className={carouselEdgeFadeClasses} />
      </div>

      <CarouselNavCentered
        isScrollable={isScrollable}
        currentSlide={currentSlide}
        maxSlides={maxSlides}
        onPrev={() => scrollByCards('left')}
        onNext={() => scrollByCards('right')}
        onDotClick={goToSlide}
        prevLabel='Przewiń w lewo'
        nextLabel='Przewiń w prawo'
        carouselNavigationLabel='Nawigacja karuzeli'
        goToSlideLabel='Przejdź do slajdu'
        ofLabel='z'
        slideLabel='Slajd'
      />
    </section>
  );
}
