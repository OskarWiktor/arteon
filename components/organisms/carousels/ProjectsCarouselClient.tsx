'use client';

import { useRef } from 'react';
import { CarouselDots } from '@/components/molecules/CarouselDots';
import { CarouselNavButtons } from '@/components/molecules/CarouselNavButtons';
import CarouselCard from '@/components/organisms/carousels/CarouselCard';

import SectionHeader from '@/components/molecules/SectionHeader';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';
import type { ProjectCategory, ProjectPreview } from '@/types/project';
import { cn } from '@/lib/utils';
import { focusRingClasses } from '@/lib/ui-classes';

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
      list = slugsArray.map(s => map.get(s)).filter(Boolean) as ProjectPreview[];
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

  const { currentSlide, maxSlides, isScrollable, scrollByCards, goToSlide, onKeyDown } =
    useCarouselScroller({
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
            'flex gap-4 overflow-x-auto pb-8',
            'no-scrollbar snap-x snap-mandatory scroll-smooth',
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
              className='w-[340px] shrink-0 snap-start md:w-[420px] lg:w-[520px]'
              role='group'
              aria-label={`Projekt ${i + 1} z ${finalProjects.length}`}
            >
              <CarouselCard variant='project' project={project} size='small' />
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
