'use client';

import Image from 'next/image';
import { useState } from 'react';
import { RiExpandLeftRightLine } from 'react-icons/ri';
import InputRange from '@/components/atoms/form/InputRange';
import SectionHeader from '@/components/molecules/SectionHeader';
import { cn } from '@/lib/clsx';
import { flexCenterClasses, normalIconSizeClasses } from '@/lib/uiClasses';
import Wrapper from '../../atoms/Wrapper';

interface SectionBeforeAfterProps {
  title?: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

/**
 * Renders an interactive before/after image comparison with a draggable slider.
 *
 * @param beforeImage - Image source for the "before" view.
 * @param afterImage - Image source for the "after" view.
 * @param title - Optional section title.
 * @param beforeLabel - Label displayed on the before image.
 * @param afterLabel - Label displayed on the after image.
 * @returns The rendered section.
 */
export default function SectionBeforeAfter({
  title,
  beforeImage,
  afterImage,
  beforeLabel = 'Przed',
  afterLabel = 'Po',
}: SectionBeforeAfterProps) {
  const [position, setPosition] = useState(50);

  return (
    <section
      data-section='before-after'
      aria-labelledby={title ? 'before-after-title' : undefined}
    >
      <Wrapper>
        {title && <SectionHeader title={title} />}

        <div className='mx-auto max-w-2xl'>
          <div className='relative aspect-video overflow-hidden rounded-lg shadow-lg'>
            <div className='absolute inset-0'>
              <Image
                src={afterImage}
                alt={afterLabel}
                fill
                className='object-cover'
                sizes='(min-width:1024px) 672px, 100vw'
              />
            </div>

            <div
              className='absolute inset-0'
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={beforeImage}
                alt={beforeLabel}
                fill
                className='object-cover'
                sizes='(min-width:1024px) 672px, 100vw'
              />
            </div>

            <div
              className='absolute inset-y-0'
              style={{ left: `${position}%` }}
            >
              <div className='absolute top-1/2 left-1/2 h-full w-1 -translate-x-1/2 bg-white shadow-lg' />
              <button
                type='button'
                className={cn(
                  'absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white shadow-lg',
                  flexCenterClasses,
                )}
              >
                <RiExpandLeftRightLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              </button>
            </div>

            <InputRange
              min={0}
              max={100}
              value={position}
              onChange={e => setPosition(Number(e.target.value))}
              className='absolute inset-0 h-full cursor-ew-resize opacity-0'
              aria-label='Suwak porównania przed i po'
            />

            <div className='absolute bottom-4 left-4 rounded-lg bg-black/70 px-3 py-1 text-sm text-white'>
              {beforeLabel}
            </div>
            <div className='absolute right-4 bottom-4 rounded-lg bg-black/70 px-3 py-1 text-sm text-white'>
              {afterLabel}
            </div>
          </div>

          <p className='mt-4 text-center text-sm text-light'>
            Przesuń suwak, aby porównać
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
