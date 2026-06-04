'use client';
import Image from 'next/image';
import { useState } from 'react';
import { RiCloseLine, RiArrowLeftLine, RiArrowRightSLine } from 'react-icons/ri';
import SectionHeader from '@/components/molecules/SectionHeader';
import { flexCenterClasses, focusRingClasses, largeIconSizeClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import Wrapper from '../../atoms/Wrapper';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

type SectionImageGalleryGrid = 'two' | 'four' | 'six';

interface SectionImageGalleryProps {
  title?: string;
  images: GalleryImage[];
  grid?: SectionImageGalleryGrid;
  noWrapper?: boolean;
}

const SectionImageGalleryGridClasses: Record<SectionImageGalleryGrid, string> = {
  two: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2',
  four: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  six: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6',
};

export default function SectionImageGallery({
  title,
  images,
  grid = 'four',
  noWrapper = false,
}: SectionImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
  };

  const goToNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
  };

  const galleryContent = (
    <>
      {title && <SectionHeader title={title} />}

      <div className={cn('grid gap-4', SectionImageGalleryGridClasses[grid])}>
        {images.map((image, index) => (
          <button
            key={index}
            type='button'
            onClick={() => openLightbox(index)}
            className={cn(
              'group relative aspect-square overflow-hidden rounded-lg',
              focusRingClasses,
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className='object-cover transition group-hover:scale-105'
              sizes='(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw'
            />
            {image.title && (
              <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition group-hover:opacity-100'>
                <span className='text-sm font-medium text-white'>{image.title}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </>
  );

  return (
    <section data-section='image-gallery' aria-labelledby={title ? 'gallery-title' : undefined}>
      {noWrapper ? galleryContent : <Wrapper>{galleryContent}</Wrapper>}

      {lightboxIndex !== null && (
        <div
          className={cn('fixed inset-0 z-50 bg-black/90 p-4', flexCenterClasses)}
          onClick={closeLightbox}
          role='dialog'
          aria-modal='true'
          aria-label='Podgląd zdjęcia'
        >
          <button
            type='button'
            onClick={closeLightbox}
            className='absolute top-4 right-4 text-white hover:text-neutral-300'
            aria-label='Zamknij'
          >
            <RiCloseLine className={largeIconSizeClasses} />
          </button>

          <button
            type='button'
            onClick={e => {
              e.stopPropagation();
              goToPrev();
            }}
            className='absolute left-4 text-white hover:text-neutral-300'
            aria-label='Poprzednie zdjęcie'
          >
            <RiArrowLeftLine className={largeIconSizeClasses} />
          </button>

          <div className='relative max-h-[80vh] max-w-[90vw]' onClick={e => e.stopPropagation()}>
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1200}
              height={800}
              className='max-h-[80vh] w-auto object-contain'
            />
            {images[lightboxIndex].title && (
              <p className='mt-4 text-center text-white'>{images[lightboxIndex].title}</p>
            )}
          </div>

          <button
            type='button'
            onClick={e => {
              e.stopPropagation();
              goToNext();
            }}
            className='absolute right-4 text-white hover:text-neutral-300'
            aria-label='Następne zdjęcie'
          >
            <RiArrowRightSLine className={largeIconSizeClasses} />
          </button>

          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white'>
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
