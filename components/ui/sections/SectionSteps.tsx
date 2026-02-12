'use client';

import { useState, type ElementType, type JSX, type ReactNode } from 'react';
import Image from 'next/image';
import { RiArrowDownSLine } from 'react-icons/ri';
import Wrapper from '../Wrapper';
import ButtonGroup from '../buttons/ButtonGroup';

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

type HeadingLevel = 'h2' | 'h3';

interface SectionStepsProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  btnOne?: string;
  btnOneVariant?: 'accent' | 'dark';
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
  description?: ReactNode;
  grid?: 'one' | 'two' | 'three' | 'four';
  items: SectionStepItem[];
  backgroundImage?: string;
  overlay?: 'none' | 'black' | 'white';
  disclaimer?: ReactNode;
  headingLevel?: HeadingLevel;
  showIndex?: boolean;
  variant?: 'default' | 'contact';
}

export default function SectionSteps({
  title,
  subtitle,
  description,
  btnOne,
  btnOneVariant = 'accent',
  btnOneLink,
  btnTwo,
  btnTwoLink,
  items,
  grid,
  backgroundImage,
  overlay = 'none',
  disclaimer,
  headingLevel = 'h2',
  showIndex = false,
  variant = 'default',
}: SectionStepsProps) {
  const hasBg = Boolean(backgroundImage);
  const isDark = overlay === 'black';
  const overlayClass = overlay === 'black' ? 'bg-black/70' : overlay === 'white' ? 'bg-white/70' : '';
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

  const SectionHeadingTag = (headingLevel || 'h2') as keyof JSX.IntrinsicElements;
  const ArticleHeadingTag = (headingLevel === 'h2' ? 'h3' : 'h4') as keyof JSX.IntrinsicElements;
  const Tag: ElementType = hasBg ? Wrapper : 'div';

  return (
    <section
      className={`relative ${hasBg ? 'bg-cover bg-center' : ''} ${bgPadY}`}
      style={hasBg ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      data-section="steps"
      aria-labelledby={title ? 'steps-title' : undefined}
    >
      {hasBg && overlay !== 'none' && <div aria-hidden={true} className={`pointer-events-none absolute inset-0 z-0 ${overlayClass}`} />}

      <Tag className="relative z-10">
        {subtitle && <span className={`mb-2 block text-base tracking-wider uppercase md:mb-4 ${hasBg ? 'text-white' : 'text-light'}`}>{subtitle}</span>}

        {title && (
          <SectionHeadingTag id="steps-title" className={`${toneTextClass} h3 mb-4 md:mb-6 lg:mb-8`}>
            {title}
          </SectionHeadingTag>
        )}

        {description && <p className={`mb-4 md:mb-6 lg:mb-8 ${toneMutedClass}`}>{description}</p>}

        <ExpandableStepsList
          items={items}
          gridColsSm={gridColsSm}
          gridColsMd={gridColsMd}
          gridColsLg={gridColsLg}
          showIndex={showIndex}
          variant={variant}
          isHighlighted={(item) => item.highlight === true}
          ArticleHeadingTag={ArticleHeadingTag}
        />

        <ButtonGroup
          btnOne={btnOne}
          btnOneLink={btnOneLink}
          btnOneVariant={btnOneVariant === 'dark' ? 'normal' : btnOneVariant}
          btnTwo={btnTwo}
          btnTwoLink={btnTwoLink}
          spacing="loose"
          ariaLabel="Działania sekcji"
          role="group"
        />

        {disclaimer && (
          <div className="mt-4 md:mt-5 lg:mt-6">
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
  isHighlighted: (item: SectionStepItem) => boolean;
  ArticleHeadingTag: keyof JSX.IntrinsicElements;
}

function ExpandableStepsList({ items, gridColsSm, gridColsMd, gridColsLg, showIndex, variant, isHighlighted, ArticleHeadingTag }: ExpandableStepsListProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ol className={`grid grid-cols-1 gap-4 md:auto-rows-fr ${gridColsSm} ${gridColsMd} ${gridColsLg}`}>
      {items.map((item, index) => {
        const { icon, imageSrc, imageAlt, topImageSrc, topImageAlt, title: itemTitle, description: itemDesc, subtitle: itemSubtitle, expandableContent } = item;
        const hasVisual = showIndex || icon || imageSrc;
        const highlighted = isHighlighted(item);
        const isExpanded = expandedIndex === index;
        const hasExpandable = Boolean(expandableContent);

        return (
          <li key={index} className="flex flex-col items-stretch">
            <article
              className={`flex h-full w-full flex-col p-4 md:p-6 ${variant === 'contact' ? 'text-center' : ''} ${highlighted ? 'bg-primary rounded-2xl text-white shadow-lg' : 'surface-card-lift border border-neutral-200'}`}
            >
              {topImageSrc && (
                <div className="mb-4 md:mb-6">
                  <div className="relative h-52 w-full overflow-hidden rounded-xl md:h-68">
                    <Image
                      src={topImageSrc}
                      alt={topImageAlt ?? ''}
                      fill
                      className="pointer-events-none object-cover select-none"
                      sizes="(min-width:1024px) 50vw, (min-width:768px) 50vw, 100vw"
                      aria-hidden={topImageAlt ? undefined : true}
                    />
                  </div>
                </div>
              )}

              {hasVisual && (
                <div className={`mb-4 flex ${variant === 'contact' ? 'justify-center' : 'justify-start'}`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${highlighted ? 'bg-white/20 text-white' : 'bg-primary-light text-primary'}`}>
                    {showIndex ? (
                      <span className="text-base font-semibold">{index + 1}</span>
                    ) : imageSrc ? (
                      <Image src={imageSrc} alt={imageAlt ?? ''} width={28} height={28} className="pointer-events-none select-none" aria-hidden={imageAlt ? undefined : true} />
                    ) : (
                      icon
                    )}
                  </div>
                </div>
              )}

              {hasExpandable ? (
                <button
                  type="button"
                  onClick={() => toggleExpand(index)}
                  className={`flex w-full items-center justify-between text-left ${highlighted ? 'text-white' : 'text-dark'}`}
                  aria-expanded={isExpanded}
                >
                  <ArticleHeadingTag className="h5 mb-1">{itemTitle}</ArticleHeadingTag>
                  <RiArrowDownSLine className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <ArticleHeadingTag className={`h5 mb-1 ${highlighted ? 'text-white' : 'text-dark'}`}>{itemTitle}</ArticleHeadingTag>
              )}

              {itemSubtitle && <span className={`text-base ${highlighted ? 'text-white/80' : 'text-light'}`}>{itemSubtitle}</span>}

              <div className={`z-10 mt-2 flex flex-1 flex-col ${highlighted ? 'text-white/80' : ''}`}>{itemDesc}</div>

              {hasExpandable && isExpanded && <div className={`mt-4 border-t pt-4 ${highlighted ? 'border-white/20' : 'border-neutral-200'}`}>{expandableContent}</div>}
            </article>
          </li>
        );
      })}
    </ol>
  );
}
