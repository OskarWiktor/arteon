'use client';

import { useRef, useEffect, useState } from 'react';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

import Wrapper from '../ui/Wrapper';
import ProjectCard from '../ui/ProjectCard';

import allProjects from '@/data/projects.json';
import type { Project } from '@/types/project';
import SlideInOnView from '../animations/SlideInOnView';

const projects = [...(allProjects.projects as Project[])].sort(() => Math.random() - 0.5).slice(0, 7);

export default function ProjectsOverview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlides, setMaxSlides] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

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
  }, [cardWidth]);

  return (
    <Wrapper>
      <motion.section
        className="mt-16 w-full px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        aria-labelledby="projects-heading"
        role="region"
      >
        <SlideInOnView >
          <h2 id="projects-heading" className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Nasze Projekty
          </h2>
        </SlideInOnView>

        <div className="relative mt-2">
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 left-2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-lg border-x-1 border-amber-500 cursor-pointer transition hover:bg-amber-500 hover:scale-105 focus-visible:outline-black md:block"
            aria-label="Przesuń w lewo"
          >
            <RiArrowLeftSLine className="h-6 w-6" />
          </button>

          <div ref={scrollRef} className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth py-4" aria-label="Karuzela z projektami" tabIndex={0}>
            {projects.map((project, i) => (
              <div
                key={project.slug}
                ref={i === 0 ? cardRef : null}
                className="min-w-[300px] md:min-w-[350px]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 right-2 z-10 hidden -translate-y-1/2 rounded-full bg-white border-x-1 border-amber-500 p-2 shadow-lg cursor-pointer transition hover:bg-amber-500 hover:scale-105 focus-visible:outline-black md:block"
            aria-label="Przesuń w prawo"
          >
            <RiArrowRightSLine className="h-6 w-6 " />
          </button>
        </div>

        {maxSlides > 1 && (
          <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Nawigacja karuzeli projektów">
            {Array.from({ length: maxSlides }).map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === currentSlide}
                aria-label={`Pokaż projekt ${i + 1}`}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                  }
                }}
                className={`h-2 w-2 rounded-full transition duration-300 focus-visible:outline-black cursor-pointer ${i === currentSlide ? 'bg-amber-500 hover:bg-amber-700' : 'bg-gray-300 hover:bg-gray-500'}`}
              />
            ))}
          </div>
        )}
      </motion.section>
    </Wrapper>
  );
}
