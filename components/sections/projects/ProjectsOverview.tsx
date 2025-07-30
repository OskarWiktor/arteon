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
};

export default function ProjectsOverview({ projects, max = 7, title = 'Nasze Projekty' }: Props) {
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
      <section className="mt-12 w-full px-4 md:mt-16 md:px-6 lg:mt-24 lg:px-0" role="region">
        <h2>{title}</h2>

        <div className="relative">
          {isScrollable && (
            <button
              onClick={() => scroll('left')}
              className="absolute top-1/2 left-2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full border-x-1 border-amber-500 bg-white p-2 shadow-lg transition hover:scale-105 hover:bg-amber-500 focus-visible:outline-black md:block"
              aria-label="Go left"
            >
              <RiArrowLeftSLine className="h-6 w-6" />
            </button>
          )}

          <div ref={scrollRef} className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth py-4" aria-label="Carousel with projects" tabIndex={0}>
            {finalProjects.map((project, i) => (
              <div key={project.slug} ref={i === 0 ? cardRef : null} className="min-w-[300px] md:min-w-[350px]">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {isScrollable && (
            <button
              onClick={() => scroll('right')}
              className="absolute top-1/2 right-2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full border-x-1 border-amber-500 bg-white p-2 shadow-lg transition hover:scale-105 hover:bg-amber-500 focus-visible:outline-black md:block"
              aria-label="Go right"
            >
              <RiArrowRightSLine className="h-6 w-6" />
            </button>
          )}
        </div>

        {isScrollable && maxSlides > 1 && (
          <div className="mt-0 flex justify-center gap-2 md:mt-2 lg:mt-4" role="tablist" aria-label="Navigation of projects carousel">
            {Array.from({ length: maxSlides }).map((_, i) => (
              <button
                key={i}
                role="tab"
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                  }
                }}
                className={`h-2 w-2 cursor-pointer rounded-full transition duration-300 focus-visible:outline-black ${
                  i === currentSlide ? 'bg-amber-500 hover:bg-amber-700' : 'bg-gray-300 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        )}
      </section>
    </Wrapper>
  );
}
