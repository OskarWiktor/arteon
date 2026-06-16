'use client';

import { useRef } from 'react';
import { CarouselDots } from '@/components/molecules/carousels/CarouselDots';
import { CarouselNavButtons } from '@/components/molecules/carousels/CarouselNavButtons';
import SectionHeader from '@/components/molecules/SectionHeader';
import CarouselCard from '@/components/organisms/carousels/CarouselCard';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';
import { cn } from '@/lib/clsx';
import { focusRingClasses, noScrollbarClasses } from '@/lib/uiClasses';
import type { ProjectCategory, ProjectPreview } from '@/types/project';

const AUTO_PLAY_INTERVAL_MS = 4000;

type Props = {
  projects: ProjectPreview[];
  max?: number;
  title?: string;
  subtitle?: string;
  category?: ProjectCategory;
  slugs?: string | string[];
  excludeSlug?: string;
};

/**
 * Render a horizontally scrollable projects carousel with optional filtering, navigation controls, and pagination dots.
 *
 * The displayed list is determined in this order: explicit `slugs` (a single slug is wrapped into an array), then `category`, then the full `projects` list. If `excludeSlug` is provided that project is removed from the list. The resulting list is truncated to `max` items.
 *
 * @param projects - Array of project previews to source items from
 * @param max - Maximum number of projects to display (default: 10)
 * @param title - Heading title for the section (default: "Nasze Realizacje")
 * @param subtitle - Optional subtitle rendered under the heading
 * @param category - If provided, only projects whose `category` includes this value will be shown (used when `slugs` is not provided)
 * @param slugs - Optional slug or list of slugs specifying the exact order of projects to display; when present, these take precedence over `category`
 * @param excludeSlug - Optional slug of a project to exclude from the final list
 * @returns The carousel section element, or `null` when there are no projects to display
 */
export default function ProjectsCarouselClient({
  projects,
  max = 10,
  title = 'Nasze Realizacje',
  subtitle,
  category,
  slugs,
  excludeSlug,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const finalProjects = (() => {
    const slugsArray = typeof slugs === 'string' ? [slugs] : slugs;
    let list: ProjectPreview[];

    if (slugsArray && slugsArray.length) {
      const map = new Map(projects.map(p => [p.slug, p] as const));
      list = slugsArray
        .map(s => map.get(s))
        .filter(Boolean) as ProjectPreview[];
    } else if (category) {
      list = projects.filter(p => (p.category || []).includes(category));
    } else {
      list = projects;
    }

    if (excludeSlug) {
      list = list.filter(p => p.slug !== excludeSlug);
    }

    return list.slice(0, max);
  })();

  const {
    currentSlide,
    maxSlides,
    isScrollable,
    scrollByCards,
    goToSlide,
    onKeyDown,
  } = useCarouselScroller({
    itemCount: finalProjects.length,
    scrollRef,
    cardRef,
    autoPlay: true,
    autoPlayIntervalMs: AUTO_PLAY_INTERVAL_MS,
  });

  if (!finalProjects.length) return null;

  return (
    <section className='w-full' aria-labelledby='projects-heading'>
      <SectionHeader
        subtitle={subtitle}
        title={title}
        titleId='projects-heading'
        buttonText='Sprawdź wszystkie realizacje'
        buttonLink='/realizacje'
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
          aria-label='Karuzela projektów'
          aria-live='polite'
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {finalProjects.map((project, i) => (
            <div
              key={project.slug}
              ref={
                i === 0
                  ? (el: HTMLDivElement | null) => {
                      cardRef.current = el;
                    }
                  : null
              }
              className='w-85 shrink-0 snap-start md:w-105 lg:w-130'
              role='group'
              aria-label={`Projekt ${i + 1} z ${finalProjects.length}`}
            >
              <CarouselCard variant='project' project={project} />
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
