'use client';

import { useRef, useMemo } from 'react';
import { CarouselDots } from '@/components/ui/carousel/CarouselDots';
import { CarouselNavButtons } from '@/components/ui/carousel/CarouselNavButtons';
import { CarouselCard } from '@/components/ui/carousel/CarouselCard';

import SectionHeaderWithAction from '../../ui/sections/SectionHeaderWithAction';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';
import type { ProjectCategory, ProjectPreview } from '@/types/project';

const ui = {
  pl: {
    defaultTitle: 'Nasze Realizacje',
    seeAllProjects: 'Sprawdź wszystkie realizacje',
    carouselLabel: 'Karuzela projektów',
    scrollLeft: 'Przewiń w lewo',
    scrollRight: 'Przewiń w prawo',
    carouselNavigation: 'Nawigacja karuzeli',
    goToSlide: 'Przejdź do slajdu',
    of: 'z',
    slide: 'Slajd',
    project: 'Projekt',
    urls: {
      projects: '/realizacje',
    },
  },
} as const;

type Props = {
  projects: ProjectPreview[];
  max?: number;
  title?: string;
  subtitle?: string;
  category?: ProjectCategory;
  slugs?: string | string[];
  excludeSlug?: string;
};

export default function ProjectsCarouselClient({ projects, max = 7, title = ui.pl.defaultTitle, subtitle, category, slugs, excludeSlug }: Props) {
  const t = ui.pl;
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const sourceProjects = useMemo<ProjectPreview[]>(() => {
    return projects;
  }, [projects]);

  const finalProjects = useMemo(() => {
    const slugsArray = typeof slugs === 'string' ? [slugs] : slugs;
    let list: ProjectPreview[];

    if (slugsArray && slugsArray.length) {
      const map = new Map(sourceProjects.map((p) => [p.slug, p] as const));
      list = slugsArray.map((s) => map.get(s)).filter(Boolean) as ProjectPreview[];
    } else if (category) {
      list = sourceProjects.filter((p) => (p.category || []).includes(category));
    } else {
      list = sourceProjects;
    }

    if (excludeSlug) {
      list = list.filter((p) => p.slug !== excludeSlug);
    }

    return list.slice(0, max);
  }, [sourceProjects, slugs, category, excludeSlug, max]);

  const { currentSlide, maxSlides, isScrollable, scrollByCards, goToSlide, onKeyDown } = useCarouselScroller({
    itemCount: finalProjects.length,
    scrollRef,
    cardRef,
  });

  if (!finalProjects.length) return null;

  return (
    <section className="w-full" aria-labelledby="projects-heading">
      <SectionHeaderWithAction
        subtitle={subtitle}
        title={title}
        headingLevel="h2"
        headingClassName="reveal-animation md:mb-0"
        titleId="projects-heading"
        actionLabel={t.seeAllProjects}
        actionLink={t.urls.projects}
        actionAriaLabel={t.seeAllProjects}
      />

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
              className="w-[340px] shrink-0 snap-start md:w-[420px] lg:w-[520px]"
              aria-label={`${t.project} ${i + 1} ${t.of} ${finalProjects.length}`}
            >
              <CarouselCard variant="project" project={project} />
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
