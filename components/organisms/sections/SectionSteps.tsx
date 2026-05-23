'use client';

import { useId, useState, type ElementType, type ReactNode } from 'react';
import Image from 'next/image';
import { RiArrowDownSLine } from 'react-icons/ri';
import SectionHeader from '../../molecules/SectionHeader';
import Wrapper from '../../atoms/Wrapper';
import ButtonGroup from '../../molecules/ButtonGroup';

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
  expandableContent?: ReactNode;
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
      className={`relative pb-2 ${hasBg ? 'bg-cover bg-center' : ''} ${bgPadY}`}
      style={hasBg ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      data-section='steps'
      aria-labelledby={title ? titleId : undefined}
    >
      {hasBg && overlay !== 'none' && (
        <div
          aria-hidden='true'
          className={`pointer-events-none absolute inset-0 z-0 ${overlayClass}`}
        />
      )}

      <Tag className='relative z-10'>
        <SectionHeader
          SubtitleClassName={`${hasBg ? 'text-white' : 'text-light'}`}
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
          btnOneVariant={btnOneVariant === 'dark' ? 'normal' : btnOneVariant}
          btnTwo={btnTwo}
          btnTwoHref={btnTwoHref}
          spacing='loose'
          ariaLabel='Działania sekcji'
          role='group'
        />

        {disclaimer && (
          <div className='mt-4 md:mt-5 lg:mt-6'>
            <p className={`${hasBg ? 'text-white' : 'text-light'}`}>{disclaimer}</p>
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ol
      className={`grid grid-cols-1 gap-4 md:auto-rows-fr ${gridColsSm} ${gridColsMd} ${gridColsLg}`}
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
          expandableContent,
        } = item;
        const hasVisual = showIndex || icon || imageSrc;
        const highlighted = isHighlighted(item);
        const isExpanded = expandedIndex === index;
        const hasExpandable = Boolean(expandableContent);

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
            <article
              className={`flex h-full w-full flex-col rounded-lg p-4 transition md:p-6 ${variant === 'contact' ? 'text-center' : ''} ${highlighted ? 'bg-primary text-white shadow-lg' : 'border border-neutral-200 bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md'}`}
            >
              {topImageSrc && (
                <div className='mb-4 md:mb-6'>
                  <div className='relative h-52 w-full overflow-hidden rounded-lg md:h-68'>
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
                  className={`mb-4 flex ${variant === 'contact' ? 'justify-center' : 'justify-start'}`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${highlighted ? 'bg-white/20 text-white' : 'bg-primary-light text-primary'}`}
                  >
                    {visualNode}
                  </div>
                </div>
              )}

              {useInline ? (
                <h3
                  className={`h5 mb-1 flex items-center gap-2 ${highlighted ? 'text-white' : 'text-dark'}`}
                >
                  {hasVisual && (
                    <span className={`shrink-0 ${highlighted ? 'text-white' : 'text-primary'}`}>
                      {visualNode}
                    </span>
                  )}
                  <span>{itemTitle}</span>
                </h3>
              ) : hasExpandable ? (
                <button
                  type='button'
                  onClick={() => toggleExpand(index)}
                  className={`flex w-full items-center justify-between text-left ${highlighted ? 'text-white' : 'text-dark'}`}
                  aria-expanded={isExpanded}
                >
                  <h3 className='h5 mb-1'>{itemTitle}</h3>
                  <RiArrowDownSLine
                    className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>
              ) : (
                <h3 className={`h5 mb-1 ${highlighted ? 'text-white' : 'text-dark'}`}>
                  {itemTitle}
                </h3>
              )}

              {itemSubtitle && (
                <span className={`text-base ${highlighted ? 'text-white/80' : 'text-light'}`}>
                  {itemSubtitle}
                </span>
              )}

              <div
                className={`z-10 mt-2 flex flex-1 flex-col ${highlighted ? 'text-white/80' : ''}`}
              >
                {itemDesc}
              </div>

              {hasExpandable && isExpanded && (
                <div
                  className={`mt-4 border-t pt-4 ${highlighted ? 'border-white/20' : 'border-neutral-200'}`}
                >
                  {expandableContent}
                </div>
              )}
            </article>
          </li>
        );
      })}
    </ol>
  );
}
