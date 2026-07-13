'use client';

import { useRef } from 'react';
import { RiStarFill } from 'react-icons/ri';
import { CarouselNavCentered } from '@/components/molecules/carousels/CarouselNavCentered';
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
import type { Testimonial, TestimonialSource } from '@/types/testimonial';
import SectionHeader from '../../molecules/SectionHeader';

const AUTO_PLAY_INTERVAL_MS = 4000;

/** Review platforms shown in the header badge, linked to their profile. */
const REVIEW_SOURCES: { label: string; source: TestimonialSource }[] = [
  { label: 'Fixly', source: 'fixly' },
  { label: 'Google', source: 'google' },
  { label: 'Oferteo', source: 'oferteo' },
];

/** First available review link for a platform, taken from the testimonials data. */
const reviewSourceHref = (source: TestimonialSource) =>
  (testimonialsPl as Testimonial[]).find(t => t.source === source && t.link)
    ?.link;

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

        <div className='inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#E4D9CA] px-4 py-2.5'>
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
