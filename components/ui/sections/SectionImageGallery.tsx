'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RiCloseLine, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import Wrapper from '../Wrapper';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface SectionImageGalleryProps {
  title?: string;
  images: GalleryImage[];
}

export default function SectionImageGallery({ title, images }: SectionImageGalleryProps) {
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

  return (
    <section data-section="image-gallery" aria-labelledby={title ? 'gallery-title' : undefined}>
      <Wrapper>
        {title && (
          <h2 id="gallery-title" className="h3 mb-4 md:mb-6 lg:mb-8">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openLightbox(index)}
              className="group focus-visible:ring-primary relative aspect-square overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2"
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover transition group-hover:scale-105" sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw" unoptimized />
              {image.title && (
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
                  <span className="text-sm font-medium text-white">{image.title}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </Wrapper>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Podgląd zdjęcia">
          <button type="button" onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-neutral-300" aria-label="Zamknij">
            <RiCloseLine className="h-8 w-8" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 text-white hover:text-neutral-300"
            aria-label="Poprzednie zdjęcie"
          >
            <RiArrowLeftLine className="h-8 w-8" />
          </button>

          <div className="relative max-h-[80vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image src={images[lightboxIndex].src} alt={images[lightboxIndex].alt} width={1200} height={800} className="max-h-[80vh] w-auto object-contain" unoptimized />
            {images[lightboxIndex].title && <p className="mt-4 text-center text-white">{images[lightboxIndex].title}</p>}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-neutral-300"
            aria-label="Następne zdjęcie"
          >
            <RiArrowRightLine className="h-8 w-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
