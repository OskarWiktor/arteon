'use client';

import { useRef, useEffect, useState } from 'react';
import { RiStarFill, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { CarouselDots } from '@/components/ui/carousel/CarouselDots';
import { CarouselNavButtons } from '@/components/ui/carousel/CarouselNavButtons';
import type { Testimonial } from '@/types/testimonial';
import TestimonialCard from '@/components/ui/TestimonialCard';
import Button from '@/components/ui/buttons/Button';
import SectionHeader from '../ui/typography/SectionHeader';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';

import testimonialsPl from '@/data/pl/testimonials.json';

const AUTO_PLAY_INTERVAL_MS = 4000;

type Props = {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  ids?: string[];
  max?: number;
  variant?: 'default' | 'large';
};

export default function TestimonialsCarousel({ title = 'Opinie współprac i realizacji', subtitle, testimonials, ids, max = 12, variant = 'default' }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const source: Testimonial[] = (testimonials?.length ? testimonials : (testimonialsPl as Testimonial[]));

  const items: Testimonial[] = (() => { let list = source;
    if (ids?.length) {
      const map = new Map(list.map((t) => [t.id, t] as const));
      list = ids.map((id) => map.get(id)).filter(Boolean) as Testimonial[];
    }
    return list.slice(0, max); })();

  const [largeSlide, setLargeSlide] = useState(0);

  const { currentSlide, maxSlides, isScrollable, scrollByCards, goToSlide, onKeyDown } = useCarouselScroller({
    itemCount: items.length,
    scrollRef,
    cardRef,
    autoPlay: true,
    autoPlayIntervalMs: AUTO_PLAY_INTERVAL_MS,
  });

  const handleAutoScrollLarge = () => {
    setLargeSlide((prev) => (prev >= items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (variant !== 'large' || items.length <= 1) return;
    const interval = setInterval(handleAutoScrollLarge, AUTO_PLAY_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [handleAutoScrollLarge, variant, items.length]);

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
    const largePosition = 'absolute top-1/2 -translate-y-1/2 z-10';

    return (
      <section className="w-full" aria-labelledby="testimonials-heading">
        <SectionHeader subtitle={subtitle} title={title} titleId="testimonials-heading" />

        <div className="relative px-12 py-8 md:px-16">
          <div className="mx-auto max-w-3xl text-center" role="region" aria-roledescription="carousel" aria-label="Karuzela opinii" aria-live="polite">
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(5)].map((_, starIdx) => (
                <RiStarFill key={starIdx} className="text-accent h-6 w-6" />
              ))}
            </div>
            <p className="h6 mb-6">&ldquo;{items[largeSlide]?.quote}&rdquo;</p>
            <p className="font-semibold">{items[largeSlide]?.author}</p>
            <p className="text-light text-sm">{items[largeSlide]?.role}</p>
          </div>

          {items.length > 1 && (
            <>
              <Button variant="circle" onClick={handlePrevLarge} ariaLabel="Przewiń w lewo" className={`${largePosition} left-0`}>
                <RiArrowLeftSLine className="h-6 w-6" aria-hidden="true" />
              </Button>
              <Button variant="circle" onClick={handleNextLarge} ariaLabel="Przewiń w prawo" className={`${largePosition} right-0`}>
                <RiArrowRightSLine className="h-6 w-6" aria-hidden="true" />
              </Button>
            </>
          )}
        </div>

        <CarouselDots
          isScrollable={items.length > 1}
          currentSlide={largeSlide}
          maxSlides={items.length}
          onDotClick={handleDotClickLarge}
          carouselNavigationLabel="Nawigacja karuzeli"
          goToSlideLabel="Przejdź do slajdu"
          ofLabel="z"
          slideLabel="Slajd"
        />
      </section>
    );
  }

  return (
    <section className="w-full" aria-labelledby="testimonials-heading">
      <SectionHeader subtitle={subtitle} title={title} titleId="testimonials-heading" />

      <div className="relative">
        <div
          ref={scrollRef}
          className="no-scrollbar focus-visible:ring-primary flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          role="region"
          aria-roledescription="carousel"
          aria-label="Karuzela opinii"
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
              role="group"
              aria-label={`Opinia ${i + 1} z ${items.length}`}
            >
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>

        <CarouselNavButtons isScrollable={isScrollable} onPrev={() => scrollByCards('left')} onNext={() => scrollByCards('right')} prevLabel="Przewiń w lewo" nextLabel="Przewiń w prawo" />
      </div>

      <CarouselDots
        isScrollable={isScrollable}
        currentSlide={currentSlide}
        maxSlides={maxSlides}
        onDotClick={goToSlide}
        carouselNavigationLabel="Nawigacja karuzeli"
        goToSlideLabel="Przejdź do slajdu"
        ofLabel="z"
        slideLabel="Slajd"
      />
    </section>
  );
}
