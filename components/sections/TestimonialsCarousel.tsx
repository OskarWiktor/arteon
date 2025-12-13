'use client';

import { useMemo, useRef } from 'react';
import { CarouselDots } from '@/components/ui/carousel/CarouselDots';
import { CarouselNavButtons } from '@/components/ui/carousel/CarouselNavButtons';
import type { Testimonial } from '@/types/testimonial';
import { CarouselCard } from '@/components/ui/carousel/CarouselCard';
import SectionHeader from '../ui/typography/SectionHeader';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';

import testimonialsPl from '@/data/pl/testimonials.json';

const ui = {
  pl: {
    defaultTitle: 'Opinie współprac i realizacji',
    carouselLabel: 'Karuzela opinii',
    scrollLeft: 'Przewiń w lewo',
    scrollRight: 'Przewiń w prawo',
    carouselNavigation: 'Nawigacja karuzeli',
    goToSlide: 'Przejdź do slajdu',
    of: 'z',
    slide: 'Slajd',
    testimonial: 'Opinia',
  },
} as const;

type Props = {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  ids?: string[];
  max?: number;
};

export default function TestimonialsCarousel({ title = ui.pl.defaultTitle, subtitle, testimonials, ids, max = 12 }: Props) {
  const t = ui.pl;
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const source: Testimonial[] = useMemo(() => (testimonials?.length ? testimonials : (testimonialsPl as Testimonial[])), [testimonials]);

  const items: Testimonial[] = useMemo(() => {
    let list = source;
    if (ids?.length) {
      const map = new Map(list.map((t) => [t.id, t] as const));
      list = ids.map((id) => map.get(id)).filter(Boolean) as Testimonial[];
    }
    return list.slice(0, max);
  }, [source, ids, max]);

  const { currentSlide, maxSlides, isScrollable, scrollByCards, goToSlide, onKeyDown } = useCarouselScroller({
    itemCount: items.length,
    scrollRef,
    cardRef,
  });

  if (!items.length) return null;

  return (
    <section className="w-full" aria-labelledby="testimonials-heading">
      <SectionHeader
        subtitle={subtitle}
        title={title}
        headingLevel="h2"
        headingClassName="reveal-animation md:mb-2"
        titleId="testimonials-heading"
      />

      <div className="relative">
        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pt-4 pb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          role="region"
          aria-roledescription="carousel"
          aria-label={t.carouselLabel}
          aria-live="polite"
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
              className="w-[320px] shrink-0 snap-start md:w-[420px] lg:w-[520px]"
              aria-label={`${t.testimonial} ${i + 1} ${t.of} ${items.length}`}
            >
              <CarouselCard variant="testimonial" item={item} />
            </div>
          ))}
        </div>

        <CarouselNavButtons isScrollable={isScrollable} onPrev={() => scrollByCards('left')} onNext={() => scrollByCards('right')} prevLabel={t.scrollLeft} nextLabel={t.scrollRight} />
      </div>

      <CarouselDots
        isScrollable={isScrollable}
        currentSlide={currentSlide}
        maxSlides={maxSlides}
        onDotClick={goToSlide}
        carouselNavigationLabel={t.carouselNavigation}
        goToSlideLabel={t.goToSlide}
        ofLabel={t.of}
        slideLabel={t.slide}
      />
    </section>
  );
}
