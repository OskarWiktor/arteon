'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import Wrapper from '../Wrapper';

interface CarouselSlide {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  description?: string;
}

interface SectionImageCarouselProps {
  title?: string;
  slides: CarouselSlide[];
  overlay?: boolean;
  variant?: 'default' | 'fullWidth';
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function SectionImageCarousel({ title, slides, overlay = false, variant = 'default', autoPlay = false, autoPlayInterval = 5000 }: SectionImageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext, slides.length]);

  const aspectClass = variant === 'fullWidth' ? 'aspect-[21/9]' : 'aspect-video';

  return (
    <section data-section="image-carousel" aria-labelledby={title ? 'carousel-title' : undefined}>
      <Wrapper>
        {title && (
          <h2 id="carousel-title" className="h4 reveal-animation mb-6">
            {title}
          </h2>
        )}

        <div className={`relative mx-auto overflow-hidden rounded-2xl ${variant === 'fullWidth' ? 'max-w-full' : 'max-w-4xl'}`}>
          <div className={`relative ${aspectClass}`}>
            {slides.map((slide, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                <Image src={slide.imageSrc} alt={slide.imageAlt} fill className="object-cover" sizes="(min-width:1024px) 896px, 100vw" priority={index === 0} />

                {overlay && (slide.title || slide.description) && (
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6">
                    {slide.title && <h3 className="text-lg font-semibold text-white">{slide.title}</h3>}
                    {slide.description && <p className="text-sm text-white/80">{slide.description}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>

          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrev}
                className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:bg-white"
                aria-label="Poprzedni slajd"
              >
                <RiArrowLeftLine className="h-5 w-5 text-slate-800" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:bg-white"
                aria-label="Następny slajd"
              >
                <RiArrowRightLine className="h-5 w-5 text-slate-800" />
              </button>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 w-8 rounded-full transition ${index === currentSlide ? 'bg-white' : 'bg-white/30'}`}
                    aria-label={`Przejdź do slajdu ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </Wrapper>
    </section>
  );
}
