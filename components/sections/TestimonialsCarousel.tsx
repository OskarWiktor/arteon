'use client';

import { useMemo, useRef, useEffect, useCallback, useState } from 'react';
import { RiStarFill, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
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
  variant?: 'default' | 'large';
  autoScroll?: boolean;
  autoScrollInterval?: number;
};

export default function TestimonialsCarousel({ title = ui.pl.defaultTitle, subtitle, testimonials, ids, max = 12, variant = 'default', autoScroll = false, autoScrollInterval = 5000 }: Props) {
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

  const [largeSlide, setLargeSlide] = useState(0);

  const { currentSlide, maxSlides, isScrollable, scrollByCards, goToSlide, onKeyDown } = useCarouselScroller({
    itemCount: items.length,
    scrollRef,
    cardRef,
  });

  const handleAutoScrollLarge = useCallback(() => {
    setLargeSlide((prev) => (prev >= items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  const handleAutoScrollDefault = useCallback(() => {
    scrollByCards('right');
  }, [scrollByCards]);

  useEffect(() => {
    if (!autoScroll) return;
    if (variant === 'large') {
      const interval = setInterval(handleAutoScrollLarge, autoScrollInterval);
      return () => clearInterval(interval);
    } else {
      if (!isScrollable) return;
      const interval = setInterval(handleAutoScrollDefault, autoScrollInterval);
      return () => clearInterval(interval);
    }
  }, [autoScroll, autoScrollInterval, isScrollable, handleAutoScrollLarge, handleAutoScrollDefault, variant]);

  if (!items.length) return null;

  const handlePrevLarge = () => {
    setLargeSlide((prev) => (prev <= 0 ? items.length - 1 : prev - 1));
  };

  const handleNextLarge = () => {
    setLargeSlide((prev) => (prev >= items.length - 1 ? 0 : prev + 1));
  };

  const handleDotClickLarge = (index: number) => {
    setLargeSlide(index);
  };

  if (variant === 'large') {
    const navBtnLarge =
      'group absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer rounded-full border border-slate-800 bg-slate-800 p-2 text-white shadow-xl ' +
      'transition hover:scale-105 hover:bg-white hover:text-slate-800 focus:outline-none ' +
      'focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

    return (
      <section className="w-full" aria-labelledby="testimonials-heading">
        <SectionHeader subtitle={subtitle} title={title} headingLevel="h2" headingClassName="reveal-animation md:mb-2" titleId="testimonials-heading" />

        <div className="relative px-12 py-8 md:px-16">
          <div className="mx-auto max-w-3xl text-center" role="region" aria-roledescription="carousel" aria-label={t.carouselLabel} aria-live="polite">
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(5)].map((_, starIdx) => (
                <RiStarFill key={starIdx} className="h-6 w-6 text-amber-400" />
              ))}
            </div>
            <p className="h6 mb-6">&ldquo;{items[largeSlide]?.quote}&rdquo;</p>
            <p className="font-semibold">{items[largeSlide]?.author}</p>
            <p className="text-light text-sm">{items[largeSlide]?.role}</p>
          </div>

          {items.length > 1 && (
            <>
              <button type="button" onClick={handlePrevLarge} className={`${navBtnLarge} left-0`} aria-label={t.scrollLeft}>
                <RiArrowLeftSLine className="h-6 w-6" aria-hidden="true" />
              </button>
              <button type="button" onClick={handleNextLarge} className={`${navBtnLarge} right-0`} aria-label={t.scrollRight}>
                <RiArrowRightSLine className="h-6 w-6" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        <CarouselDots
          isScrollable={items.length > 1}
          currentSlide={largeSlide}
          maxSlides={items.length}
          onDotClick={handleDotClickLarge}
          carouselNavigationLabel={t.carouselNavigation}
          goToSlideLabel={t.goToSlide}
          ofLabel={t.of}
          slideLabel={t.slide}
        />
      </section>
    );
  }

  return (
    <section className="w-full" aria-labelledby="testimonials-heading">
      <SectionHeader subtitle={subtitle} title={title} headingLevel="h2" headingClassName="reveal-animation md:mb-2" titleId="testimonials-heading" />

      <div className="relative">
        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pt-4 pb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
