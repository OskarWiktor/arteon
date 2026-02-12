'use client';

import { useMemo, useRef } from 'react';

import { useLocale, type Locale } from '@/lib/LocaleContext';
import { getToolsSections } from '@/lib/i18n/tool-registry';
import { CarouselDots } from '@/components/ui/carousel/CarouselDots';
import { CarouselNavButtons } from '@/components/ui/carousel/CarouselNavButtons';
import { CarouselCard } from '@/components/ui/carousel/CarouselCard';
import SectionHeaderWithAction from '@/components/ui/sections/SectionHeaderWithAction';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';

const AUTO_PLAY_INTERVAL_MS = 6000;

const ui = {
  pl: {
    defaultTitle: 'Darmowe narzędzia online',
    seeAllTools: 'Zobacz wszystkie narzędzia',
    carouselLabel: 'Karuzela narzędzi',
    scrollLeft: 'Przewiń w lewo',
    scrollRight: 'Przewiń w prawo',
    carouselNavigation: 'Nawigacja karuzeli',
    goToSlide: 'Przejdź do slajdu',
    of: 'z',
    slide: 'Slajd',
    tool: 'Narzędzie',
    openTool: 'Otwórz narzędzie',
    urls: {
      tools: '/narzedzia',
    },
  },
  en: {
    defaultTitle: 'Free online tools',
    seeAllTools: 'See all tools',
    carouselLabel: 'Tools carousel',
    scrollLeft: 'Scroll left',
    scrollRight: 'Scroll right',
    carouselNavigation: 'Carousel navigation',
    goToSlide: 'Go to slide',
    of: 'of',
    slide: 'Slide',
    tool: 'Tool',
    openTool: 'Open tool',
    urls: {
      tools: '/en/tools',
    },
  },
} as const satisfies Record<Locale, unknown>;

type Props = {
  max?: number;
  title?: string;
  subtitle?: string;
};

export default function ToolsCarousel({ max = 10, title, subtitle }: Props) {
  const locale = useLocale();
  const t = ui[locale];
  const displayTitle = title ?? t.defaultTitle;
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const toolsSections = getToolsSections(locale);
  const items = useMemo(() => {
    return toolsSections.flatMap((section) => section.items).slice(0, max);
  }, [max, toolsSections]);

  const { currentSlide, maxSlides, isScrollable, scrollByCards, goToSlide, onKeyDown } = useCarouselScroller({
    itemCount: items.length,
    scrollRef,
    cardRef,
    autoPlay: true,
    autoPlayIntervalMs: AUTO_PLAY_INTERVAL_MS,
  });

  if (!items.length) return null;

  return (
    <section className="w-full" aria-labelledby="tools-heading">
      <SectionHeaderWithAction
        subtitle={subtitle}
        title={displayTitle}
        headingLevel="h2"
        headingClassName=""
        titleId="tools-heading"
        actionLabel={t.seeAllTools}
        actionLink={t.urls.tools}
        actionAriaLabel={t.seeAllTools}
      />

      <div className="relative">
        <div
          ref={scrollRef}
          className="no-scrollbar focus-visible:ring-primary flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          role="region"
          aria-roledescription="carousel"
          aria-label={t.carouselLabel}
          aria-live="polite"
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
              className="w-[340px] shrink-0 snap-start md:w-[420px] lg:w-[520px]"
              aria-label={`${t.tool} ${i + 1} ${t.of} ${items.length}`}
            >
              <CarouselCard variant="tool" title={tool.title} href={tool.href} description={tool.description} image={tool.image} buttonLabel={t.openTool} />
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
