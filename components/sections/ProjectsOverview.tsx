'use client';

import { useRef, useEffect, useState } from 'react';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

import Wrapper from '../ui/Wrapper';
import ProjectCard from '../ui/ProjectCard';

export default function ProjectsOverview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlides, setMaxSlides] = useState(0);
  const [cardWidth, setCardWidth] = useState(300);

  const projects = Array.from({ length: 8 });

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const offset = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = scrollRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const update = () => {
      const newCardWidth = card.offsetWidth + 16;
      const totalWidth = container.scrollWidth;
      const visibleWidth = container.clientWidth;

      setCardWidth(newCardWidth);
      setMaxSlides(Math.ceil((totalWidth - visibleWidth) / newCardWidth) + 1);
    };

    const handleScroll = () => {
      if (!scrollRef.current) return;
      const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
      setCurrentSlide(index);
    };

    update();
    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', update);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', update);
    };
  }, [cardWidth]);

  return (
    <Wrapper>
      <motion.section
        className="mt-16 w-full px-4 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        aria-labelledby="projects-heading"
        role="region"
      >
        <h2 id="projects-heading" className="font-serif text-4xl">
          Nasze Projekty
        </h2>

        <div className="relative mt-6">
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            aria-label="Przesuń w lewo"
          >
            <RiArrowLeftSLine className="h-6 w-6" />
          </button>

          <div ref={scrollRef} className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth py-4" aria-label="Karuzela z projektami" tabIndex={0}>
            {projects.map((_, i) => (
              <div key={i} ref={i === 0 ? cardRef : null}>
                <ProjectCard />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            aria-label="Przesuń w prawo"
          >
            <RiArrowRightSLine className="h-6 w-6" />
          </button>
        </div>

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
              className={`h-2 w-2 rounded-full transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                i === currentSlide ? 'bg-gray-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </motion.section>
    </Wrapper>
  );
}
