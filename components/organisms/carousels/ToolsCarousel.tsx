'use client';

import { useRef, type ReactNode } from 'react';
import { CarouselDots } from '@/components/molecules/carousels/CarouselDots';
import { CarouselNavButtons } from '@/components/molecules/carousels/CarouselNavButtons';
import CarouselCard from '@/components/organisms/carousels/CarouselCard';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';
import { cn } from '@/lib/clsx';
import { getToolsSections } from '@/lib/i18n/toolRegistry';
import { useLocale, useDictionary, useLocaleConfig } from '@/lib/LocaleContext';
import {
  carouselEdgeFadeClasses,
  focusRingClasses,
  noScrollbarClasses,
} from '@/lib/uiClasses';
import type { ToolItemKey } from '@/types/tools/common';

const AUTO_PLAY_INTERVAL_MS = 6000;

type Props = {
  max?: number;
  title?: string;
  subtitle?: string;
  description?: ReactNode;
  /** Preview images keyed by tool key, sourced from each tool page's own data. */
  images?: Partial<Record<ToolItemKey, string>>;
};

/**
 * Render a localized, accessible tools carousel section with navigation and pagination.
 *
 * The component collects tools for the current locale, orders them by `carouselOrder`, and
 * displays up to `max` items as a horizontally scrollable, auto-playing carousel. If no tools
 * are available for the locale, nothing is rendered.
 *
 * @param max - Maximum number of tool items to display (default 10)
 * @param title - Optional override for the section title
 * @param subtitle - Optional subtitle for the section header
 * @returns The section element containing the carousel, or `null` when there are no tools to display
 */
export default function ToolsCarousel({
  max = 10,
  title,
  subtitle,
  description,
  images,
}: Props) {
  const locale = useLocale();
  const t = useDictionary().toolsCarousel;
  const toolsHref = useLocaleConfig().toolsIndexHref;
  const displayTitle = title ?? t.defaultTitle;
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const toolsSections = getToolsSections(locale);
  const items = (() => {
    const all = toolsSections.flatMap(section => section.items);
    return all
      .toSorted((a, b) => (a.carouselOrder ?? 999) - (b.carouselOrder ?? 999))
      .map(tool => ({ ...tool, image: images?.[tool.key] }))
      .filter((tool): tool is typeof tool & { image: string } =>
        Boolean(tool.image),
      )
      .slice(0, max);
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
    <div className='flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:gap-8'>
      <div className='lg:w-1/3'>
        <SectionInfo
          title={displayTitle}
          subtitle={subtitle}
          description={description}
          descriptionClassName='font-medium italic'
          btnTwo={t.seeAllTools}
          btnTwoHref={toolsHref}
        />
      </div>

      <div className='lg:w-2/3'>
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
                className='w-85 shrink-0 snap-start md:w-105 lg:w-130'
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

          <div aria-hidden='true' className={carouselEdgeFadeClasses} />

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
      </div>
    </div>
  );
}
