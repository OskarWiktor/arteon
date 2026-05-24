'use client';

import { useRef } from 'react';

import { useLocale, useDictionary, useLocaleConfig } from '@/lib/LocaleContext';
import { getToolsSections } from '@/lib/i18n/tool-registry';
import { CarouselDots } from '@/components/molecules/CarouselDots';
import { CarouselNavButtons } from '@/components/molecules/CarouselNavButtons';
import CarouselCard from '@/components/organisms/carousels/CarouselCard';
import SectionHeader from '@/components/molecules/SectionHeader';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';
import { cn } from '@/lib/utils';
import { focusRingClasses } from '@/lib/ui-classes';

const AUTO_PLAY_INTERVAL_MS = 6000;

type Props = {
  max?: number;
  title?: string;
  subtitle?: string;
};

export default function ToolsCarousel({ max = 10, title, subtitle }: Props) {
  const locale = useLocale();
  const t = useDictionary().toolsCarousel;
  const toolsHref = useLocaleConfig().toolsIndexHref;
  const displayTitle = title ?? t.defaultTitle;
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const toolsSections = getToolsSections(locale);
  const items = (() => {
    const all = toolsSections.flatMap(section => section.items);
    return all.sort((a, b) => (a.carouselOrder ?? 999) - (b.carouselOrder ?? 999)).slice(0, max);
  })();

  const { currentSlide, maxSlides, isScrollable, scrollByCards, goToSlide, onKeyDown } =
    useCarouselScroller({
      itemCount: items.length,
      scrollRef,
      cardRef,
      autoPlay: true,
      autoPlayIntervalMs: AUTO_PLAY_INTERVAL_MS,
    });

  if (!items.length) return null;

  return (
    <section className='w-full' aria-labelledby='tools-heading'>
      <SectionHeader
        subtitle={subtitle}
        title={displayTitle}
        titleId='tools-heading'
        buttonText={t.seeAllTools}
        buttonLink={toolsHref}
      />

      <div className='relative'>
        <div
          ref={scrollRef}
          className={cn(
            'flex gap-4 overflow-x-auto pb-8',
            'no-scrollbar snap-x snap-mandatory scroll-smooth',
            focusRingClasses,
          )}
          role='region'
          aria-roledescription='carousel'
          aria-label={t.carouselLabel}
          aria-live='polite'
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {items.map((tool, i) => (
            <div
              key={tool.key}
              ref={
                i === 0
                  ? (el: HTMLDivElement | null) => {
                      cardRef.current = el;
                    }
                  : null
              }
              className='w-[340px] shrink-0 snap-start md:w-[420px] lg:w-[520px]'
              role='group'
              aria-label={`${t.tool} ${i + 1} ${t.of} ${items.length}`}
            >
              <CarouselCard
                variant='tool'
                title={tool.title}
                href={tool.href}
                description={tool.description}
                image={tool.image}
                buttonLabel={t.openTool}
              />
            </div>
          ))}
        </div>

        <CarouselNavButtons
          isScrollable={isScrollable}
          onPrev={() => scrollByCards('left')}
          onNext={() => scrollByCards('right')}
          prevLabel={t.scrollLeft}
          nextLabel={t.scrollRight}
        />
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
