'use client';

import Image from 'next/image';
import { useId, type ReactNode } from 'react';
import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import { flexCenterClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import SectionHeader from '../../molecules/SectionHeader';
import Card from '../Card';

interface SectionStepItem {
  icon?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  topImageSrc?: string;
  topImageAlt?: string;
  title: ReactNode;
  subtitle?: string;
  description: ReactNode;
}

interface SectionStepsProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  buttonText?: string;
  buttonHref?: string;
  description?: ReactNode;
  grid?: SectionStepsGridVariants;
  items: SectionStepItem[];
  inlineIcon?: boolean;
}

type SectionStepsGridVariants = 'one' | 'two' | 'three' | 'four';

const SectionStepsGridClasses: Record<SectionStepsGridVariants, string> = {
  one: 'md:grid-cols-1 lg:grid-cols-1',
  two: 'md:grid-cols-2 lg:grid-cols-2',
  three: 'md:grid-cols-2 lg:grid-cols-3',
  four: 'md:grid-cols-2 lg:grid-cols-4',
};

function resolveGridVariant(
  grid: SectionStepsGridVariants | undefined,
  count: number,
): SectionStepsGridVariants {
  if (grid) return grid;
  if (count === 2) return 'two';
  if (count === 3 || count === 6 || count === 9) return 'three';
  if (count === 4 || count === 8 || count === 12) return 'four';
  return 'one';
}

export default function SectionSteps({
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  items,
  grid,
  inlineIcon = false,
}: SectionStepsProps) {
  const autoId = useId();
  const titleId = `steps-title-${autoId}`;
  const gridClasses = SectionStepsGridClasses[resolveGridVariant(grid, items?.length ?? 0)];

  return (
    <section
      className='relative pb-2'
      data-section='steps'
      aria-labelledby={title ? titleId : undefined}
    >
      <div className='relative z-10'>
        <SectionHeader
          SubtitleClassName='text-light'
          subtitle={subtitle}
          titleClassName='text-dark'
          titleId={titleId}
          title={title}
          descriptionClassName='text-mid'
          description={description}
        />

        <ol className={cn('grid grid-cols-1 gap-4 md:auto-rows-fr', gridClasses)}>
          {items.map((item, index) => {
            const {
              icon,
              imageSrc,
              imageAlt,
              topImageSrc,
              topImageAlt,
              title: itemTitle,
              description: itemDesc,
              subtitle: itemSubtitle,
            } = item;
            const hasVisual = Boolean(icon || imageSrc);
            const useInline = inlineIcon && !topImageSrc;

            const visualNode = imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt ?? ''}
                width={28}
                height={28}
                className='pointer-events-none select-none'
                aria-hidden={imageAlt ? undefined : true}
              />
            ) : (
              icon
            );

            return (
              <li key={index} className='flex flex-col items-stretch'>
                <Card
                  as='article'
                  padding='lg'
                  interactive={false}
                  className='flex h-full w-full flex-col gap-0 border border-neutral-200'
                >
                  {topImageSrc && (
                    <div className='mb-4 md:mb-6'>
                      <div className='relative h-52 w-full overflow-hidden md:h-68'>
                        <Image
                          src={topImageSrc}
                          alt={topImageAlt ?? ''}
                          fill
                          className='pointer-events-none object-cover select-none'
                          sizes='(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw'
                          aria-hidden={topImageAlt ? undefined : true}
                        />
                      </div>
                    </div>
                  )}

                  {!useInline && hasVisual && (
                    <div className='mb-4 flex justify-start'>
                      <div
                        className={cn(
                          'h-12 w-12 rounded-lg bg-primary-light text-primary',
                          flexCenterClasses,
                        )}
                      >
                        {visualNode}
                      </div>
                    </div>
                  )}

                  {useInline ? (
                    <h3 className='h5 mb-1 flex items-center gap-2 text-dark'>
                      {hasVisual && <span className='shrink-0 text-primary'>{visualNode}</span>}
                      <span>{itemTitle}</span>
                    </h3>
                  ) : (
                    <h3 className='h5 mb-1 text-dark'>{itemTitle}</h3>
                  )}

                  {itemSubtitle && <span className='text-base text-light'>{itemSubtitle}</span>}

                  <div className='z-10 mt-2 flex flex-1 flex-col text-light'>{itemDesc}</div>
                </Card>
              </li>
            );
          })}
        </ol>

        {buttonText && buttonHref && <ButtonLink href={buttonHref}>{buttonText}</ButtonLink>}
      </div>
    </section>
  );
}
