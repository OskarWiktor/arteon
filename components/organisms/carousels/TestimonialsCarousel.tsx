'use client';

import { useRef } from 'react';
import { CarouselDots } from '@/components/molecules/carousels/CarouselDots';
import { CarouselNavButtons } from '@/components/molecules/carousels/CarouselNavButtons';
import TestimonialCard from '@/components/organisms/carousels/TestimonialCard';
import testimonialsPl from '@/data/pl/testimonials.json';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';
import { focusRingClasses, noScrollbarClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/clsx';
import type { Testimonial } from '@/types/testimonial';
import SectionHeader from '../../molecules/SectionHeader';

const AUTO_PLAY_INTERVAL_MS = 4000;

interface TestimonialsCarouselProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  ids?: string[];
}

export default function TestimonialsCarousel({
  title = 'Opinie od naszych klientów',
  subtitle,
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
      <SectionHeader
        subtitle={subtitle}
        title={title}
        titleId='testimonials-heading'
      />

      <div className='relative'>
        <div
          ref={scrollRef}
          className={cn(
            'flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-8',
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

        <CarouselNavButtons
          isScrollable={isScrollable}
          onPrev={() => scrollByCards('left')}
          onNext={() => scrollByCards('right')}
          prevLabel='Przewiń w lewo'
          nextLabel='Przewiń w prawo'
        />
      </div>

      <CarouselDots
        isScrollable={isScrollable}
        currentSlide={currentSlide}
        maxSlides={maxSlides}
        onDotClick={goToSlide}
        carouselNavigationLabel='Nawigacja karuzeli'
        goToSlideLabel='Przejdź do slajdu'
        ofLabel='z'
        slideLabel='Slajd'
      />
    </section>
  );
}
