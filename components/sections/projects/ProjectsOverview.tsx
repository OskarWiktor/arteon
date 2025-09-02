'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

import Wrapper from '../../ui/Wrapper';
import ProjectCard from '../../ui/ProjectCard';
import allProjectsData from '@/data/pl/projects.json';
import type { Project } from '@/types/project';

type Props = {
  projects?: Project[];
  max?: number;
  title?: string;
  subtitle?: string;
};

export default function ProjectsOverview({ projects, max = 7, title = 'Nasze Projekty', subtitle }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlides, setMaxSlides] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const defaultProjects = useMemo(() => {
    return [...(allProjectsData.projects as Project[])].sort(() => Math.random() - 0.5).slice(0, max);
  }, [max]);

  const finalProjects = projects ?? defaultProjects;

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current || !cardWidth) return;
    const offset = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = scrollRef.current;
    const card = cardRef.current;

    const update = () => {
      if (!container || !card) return;
      const cardStyle = getComputedStyle(card);
      const gap = parseInt(cardStyle.marginRight || '16', 10);
      const newCardWidth = card.offsetWidth + gap;

      setCardWidth(newCardWidth);
      const totalWidth = container.scrollWidth;
      const visibleWidth = container.clientWidth;
      const slides = Math.ceil((totalWidth - visibleWidth) / newCardWidth) + 1;

      setMaxSlides(slides);
      setIsScrollable(totalWidth > visibleWidth + 4);
    };

    const handleScroll = () => {
      if (!scrollRef.current || !cardWidth) return;
      const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
      setCurrentSlide(index);
    };

    update();
    container?.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', update);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', update);
    };
  }, [cardWidth, finalProjects]);

  return (
    <Wrapper>
      <section className="w-full">
        {subtitle && <span className="text-xl tracking-widest text-[#5e5e5e] uppercase">{subtitle}</span>}
        <h2 className="md:mb-2">{title}</h2>

        <div className="relative">
          {isScrollable && (
            <button
              onClick={() => scroll('left')}
              className="absolute top-1/2 left-2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full border border-indigo-800 bg-white/60 p-2 shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:block"
              aria-label="Przewiń w lewo"
            >
              <RiArrowLeftSLine className="h-8 w-8" aria-hidden="true" />
            </button>
          )}

          <div ref={scrollRef} className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pt-4 pb-6" aria-label="Karuzela projektów" tabIndex={0}>
            {finalProjects.map((project, i) => (
              <div key={project.slug} ref={i === 0 ? cardRef : null} className="min-w-[340px] md:min-w-[420px] lg:min-w-[520px]">
                <ProjectCard project={project} size="small" />
              </div>
            ))}
          </div>

          {isScrollable && (
            <button
              onClick={() => scroll('right')}
              className="absolute top-1/2 right-2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full border border-indigo-800 bg-white/60 p-2 shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:block"
              aria-label="Przewiń w prawo"
            >
              <RiArrowRightSLine className="h-8 w-8" aria-hidden="true" />
            </button>
          )}
        </div>

        {isScrollable && maxSlides > 1 && (
          <div className="mt-0 flex justify-center gap-2 md:mt-2 lg:mt-4" role="group" aria-label="Nawigacja karuzeli">
            {Array.from({ length: maxSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: i * cardWidth,
                      behavior: 'smooth',
                    });
                  }
                }}
                aria-label={`Przejdź do slajdu ${i + 1} z ${maxSlides}`}
                aria-current={i === currentSlide ? 'true' : undefined}
                className="h-6 w-6 cursor-pointer rounded-full p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span
                  aria-hidden="true"
                  className={`mx-auto block h-3 w-3 rounded-full transition duration-300 ${i === currentSlide ? 'bg-indigo-800 hover:bg-indigo-700' : 'bg-gray-300 hover:bg-gray-500'}`}
                />
              </button>
            ))}
          </div>
        )}

        {isScrollable && maxSlides > 1 && (
          <p className="sr-only" aria-live="polite">
            Slajd {Math.min(currentSlide + 1, maxSlides)} z {maxSlides}
          </p>
        )}
      </section>
    </Wrapper>
  );
}
