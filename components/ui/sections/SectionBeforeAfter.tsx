'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RiExpandLeftRightLine } from 'react-icons/ri';
import Wrapper from '../Wrapper';

interface SectionBeforeAfterProps {
  title?: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function SectionBeforeAfter({
  title,
  beforeImage,
  afterImage,
  beforeLabel = 'Przed',
  afterLabel = 'Po',
}: SectionBeforeAfterProps) {
  const [position, setPosition] = useState(50);

  return (
    <section data-section="before-after" aria-labelledby={title ? 'before-after-title' : undefined}>
      <Wrapper>
        {title && (
          <h2 id="before-after-title" className="h4 mb-6 reveal-animation">
            {title}
          </h2>
        )}

        <div className="mx-auto max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
            <div className="absolute inset-0">
              <Image
                src={afterImage}
                alt={afterLabel}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 672px, 100vw"
              />
            </div>

            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={beforeImage}
                alt={beforeLabel}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 672px, 100vw"
              />
            </div>

            <div className="absolute inset-y-0" style={{ left: `${position}%` }}>
              <div className="absolute top-1/2 left-1/2 h-full w-1 -translate-x-1/2 bg-white shadow-lg" />
              <button
                type="button"
                className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
              >
                <RiExpandLeftRightLine className="h-5 w-5 text-slate-800" />
              </button>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
              aria-label="Suwak porównania przed i po"
            />

            <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-sm text-white">{beforeLabel}</div>
            <div className="absolute right-4 bottom-4 rounded-full bg-black/70 px-3 py-1 text-sm text-white">{afterLabel}</div>
          </div>

          <p className="text-light mt-4 text-center text-sm">Przesuń suwak, aby porównać</p>
        </div>
      </Wrapper>
    </section>
  );
}
