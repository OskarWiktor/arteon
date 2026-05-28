'use client';

import { useId, type ElementType, type ReactNode } from 'react';
import Image from 'next/image';
import SectionHeader from '../../molecules/SectionHeader';
import Wrapper from '../../atoms/Wrapper';
import ButtonGroup from '../../molecules/ButtonGroup';
import Card from '../Card';
import { cn } from '@/lib/utils';
import { flexCenterClasses } from '@/lib/ui-classes';

interface SectionStepItem {
  icon?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  topImageSrc?: string;
  topImageAlt?: string;
  title: ReactNode;
  subtitle?: string;
  description: ReactNode;
  highlight?: boolean;
}

interface SectionStepsProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  btnOne?: string;
  btnOneVariant?: 'accent' | 'dark';
  btnOneHref?: string;
  btnTwo?: string;
  btnTwoHref?: string;
  description?: ReactNode;
  grid?: 'one' | 'two' | 'three' | 'four';
  items: SectionStepItem[];
  backgroundImage?: string;
  overlay?: 'none' | 'black' | 'white';
  disclaimer?: ReactNode;
  showIndex?: boolean;
  variant?: 'default' | 'contact';
  inlineIcon?: boolean;
}

export default function SectionSteps({
  title,
  subtitle,
  description,
  btnOne,
  btnOneVariant = 'accent',
  btnOneHref,
  btnTwo,
  btnTwoHref,
  items,
  grid,
  backgroundImage,
  overlay = 'none',
  disclaimer,
  showIndex = false,
  variant = 'default',
  inlineIcon = false,
}: SectionStepsProps) {
  const autoId = useId();
  const titleId = `steps-title-${autoId}`;
  const hasBg = Boolean(backgroundImage);
  const isDark = overlay === 'black';
  const overlayClass =
    overlay === 'black' ? 'bg-black/70' : overlay === 'white' ? 'bg-white/70' : '';
  const toneTextClass = isDark ? 'text-white' : 'text-dark';
  const toneMutedClass = isDark ? 'text-white/80' : 'text-mid';
  const bgPadY = hasBg ? 'py-16 md:py-24' : '';

  const count = items?.length ?? 0;

  const resolvedGrid: 'one' | 'two' | 'three' | 'four' = (() => {
    if (grid) return grid;

    if (count === 1) return 'one';
    if (count === 2) return 'two';
    if (count === 3 || count === 6 || count === 9) return 'three';
    if (count === 4 || count === 8 || count === 12) return 'four';

    return 'one';
  })();

  let gridColsSm = 'sm:grid-cols-1';
  let gridColsMd = '';
  let gridColsLg = '';

  if (resolvedGrid === 'one') {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-1';
    gridColsLg = 'lg:grid-cols-1';
  } else if (resolvedGrid === 'two') {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-2';
    gridColsLg = 'lg:grid-cols-2';
  } else if (resolvedGrid === 'three') {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-2';
    gridColsLg = 'lg:grid-cols-3';
  } else if (resolvedGrid === 'four') {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-2';
    gridColsLg = 'lg:grid-cols-4';
  }

  const Tag: ElementType = hasBg ? Wrapper : 'div';

  return (
    <section
      className={cn('relative pb-2', hasBg ? 'bg-cover bg-center' : '', bgPadY)}
      style={hasBg ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      data-section='steps'
      aria-labelledby={title ? titleId : undefined}
    >
      {hasBg && overlay !== 'none' && (
        <div
          aria-hidden='true'
          className={cn('pointer-events-none absolute inset-0 z-0', overlayClass)}
        />
      )}

      <Tag className='relative z-10'>
        <SectionHeader
          SubtitleClassName={cn(hasBg ? 'text-white' : 'text-light')}
          subtitle={subtitle}
          titleClassName={toneTextClass}
          titleId={titleId}
          title={title}
          descriptionClassName={toneMutedClass}
          description={description}
        />

        <ExpandableStepsList
          items={items}
          gridColsSm={gridColsSm}
          gridColsMd={gridColsMd}
          gridColsLg={gridColsLg}
          showIndex={showIndex}
          variant={variant}
          inlineIcon={inlineIcon}
          isHighlighted={item => item.highlight === true}
        />

        <ButtonGroup
          btnOne={btnOne}
          btnOneHref={btnOneHref}
          btnTwo={btnTwo}
          btnTwoHref={btnTwoHref}
          ariaLabel='Działania sekcji'
        />

        {disclaimer && (
          <div className='mt-4 md:mt-5 lg:mt-6'>
            <p className={cn(hasBg ? 'text-white' : 'text-light')}>{disclaimer}</p>
          </div>
        )}
      </Tag>
    </section>
  );
}

interface ExpandableStepsListProps {
  items: SectionStepItem[];
  gridColsSm: string;
  gridColsMd: string;
  gridColsLg: string;
  showIndex: boolean;
  variant: 'default' | 'contact';
  inlineIcon: boolean;
  isHighlighted: (item: SectionStepItem) => boolean;
}

function ExpandableStepsList({
  items,
  gridColsSm,
  gridColsMd,
  gridColsLg,
  showIndex,
  variant,
  inlineIcon,
  isHighlighted,
}: ExpandableStepsListProps) {
  return (
    <ol
      className={cn('grid grid-cols-1 gap-4 md:auto-rows-fr', gridColsSm, gridColsMd, gridColsLg)}
    >
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
        const hasVisual = showIndex || icon || imageSrc;
        const highlighted = isHighlighted(item);
        const useInline = inlineIcon && !topImageSrc;

        const visualNode = showIndex ? (
          <span className='text-base font-semibold'>{index + 1}</span>
        ) : imageSrc ? (
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
              className={cn(
                'flex h-full w-full flex-col gap-0',
                variant === 'contact' ? 'text-center' : '',
                highlighted ? 'bg-primary text-white shadow-lg' : 'border border-neutral-200',
              )}
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
                <div
                  className={cn(
                    'mb-4 flex',
                    variant === 'contact' ? 'justify-center' : 'justify-start',
                  )}
                >
                  <div
                    className={cn(
                      'h-12 w-12 rounded-lg',
                      flexCenterClasses,
                      highlighted ? 'bg-white/20 text-white' : 'bg-primary-light text-primary',
                    )}
                  >
                    {visualNode}
                  </div>
                </div>
              )}

              {useInline ? (
                <h3
                  className={cn(
                    'h5 mb-1 flex items-center gap-2',
                    highlighted ? 'text-white' : 'text-dark',
                  )}
                >
                  {hasVisual && (
                    <span className={cn('shrink-0', highlighted ? 'text-white' : 'text-primary')}>
                      {visualNode}
                    </span>
                  )}
                  <span>{itemTitle}</span>
                </h3>
              ) : (
                <h3 className={cn('h5 mb-1', highlighted ? 'text-white' : 'text-dark')}>
                  {itemTitle}
                </h3>
              )}

              {itemSubtitle && (
                <span className={cn('text-base', highlighted ? 'text-white/80' : 'text-light')}>
                  {itemSubtitle}
                </span>
              )}

              <div
                className={cn(
                  'z-10 mt-2 flex flex-1 flex-col',
                  highlighted ? 'text-white/80' : 'text-light',
                )}
              >
                {itemDesc}
              </div>
            </Card>
          </li>
        );
      })}
    </ol>
  );
}
