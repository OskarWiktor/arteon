'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { RiArrowLeftLine, RiArrowRightSLine } from 'react-icons/ri';
import SectionHeader from '@/components/molecules/SectionHeader';
import { flexCenterClasses, normalIconSizeClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import Wrapper from '../../atoms/Wrapper';

interface CarouselSlide {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  description?: string;
}

type SectionImageCarouselVariant = 'default' | 'fullWidth';

interface SectionImageCarouselProps {
  title?: string;
  slides: CarouselSlide[];
  overlay?: boolean;
  variant?: SectionImageCarouselVariant;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const SectionImageCarouselVariantClasses: Record<SectionImageCarouselVariant, string> = {
  default: 'aspect-video',
  fullWidth: 'aspect-[21/9]',
};

export default function SectionImageCarousel({
  title,
  slides,
  overlay = false,
  variant = 'default',
  autoPlay = false,
  autoPlayInterval = 5000,
}: SectionImageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrev = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext, slides.length]);

  return (
    <section data-section='image-carousel' aria-labelledby={title ? 'carousel-title' : undefined}>
      <Wrapper>
        {title && <SectionHeader title={title} />}

        <div
          className={cn('relative mx-auto overflow-hidden rounded-lg', {
            'max-w-full': variant === 'fullWidth',
            'max-w-4xl': variant === 'default',
          })}
        >
          <div className={cn('relative', SectionImageCarouselVariantClasses[variant])}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn('absolute inset-0 transition-opacity duration-500', {
                  'opacity-100': index === currentSlide,
                  'opacity-0': index !== currentSlide,
                })}
              >
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  className='object-cover'
                  sizes='(min-width:1024px) 896px, 100vw'
                  priority={index === 0}
                />

                {overlay && (slide.title || slide.description) && (
                  <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6'>
                    {slide.title && (
                      <h3 className='text-lg font-semibold text-white'>{slide.title}</h3>
                    )}
                    {slide.description && (
                      <p className='text-sm text-white/80'>{slide.description}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {slides.length > 1 && (
            <>
              <button
                type='button'
                onClick={goToPrev}
                className={cn(
                  'absolute top-1/2 left-4 h-10 w-10 -translate-y-1/2 rounded-lg bg-white/90 shadow-lg transition hover:bg-white',
                  flexCenterClasses,
                )}
                aria-label='Poprzedni slajd'
              >
                <RiArrowLeftLine className={cn('text-primary', normalIconSizeClasses)} />
              </button>

              <button
                type='button'
                onClick={goToNext}
                className={cn(
                  'absolute top-1/2 right-4 h-10 w-10 -translate-y-1/2 rounded-lg bg-white/90 shadow-lg transition hover:bg-white',
                  flexCenterClasses,
                )}
                aria-label='Następny slajd'
              >
                <RiArrowRightSLine className={cn('text-primary', normalIconSizeClasses)} />
              </button>

              <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2'>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type='button'
                    onClick={() => setCurrentSlide(index)}
                    className={cn('h-2 w-8 rounded-lg transition', {
                      'bg-white': index === currentSlide,
                      'bg-white/30': index !== currentSlide,
                    })}
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
