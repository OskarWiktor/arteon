import type { ElementType, JSX, ReactNode } from 'react';
import Image from 'next/image';
import Wrapper from '../Wrapper';
import ButtonGroup from '../buttons/ButtonGroup';

const ui = {
  pl: {
    sectionActions: 'Działania sekcji',
  },
} as const;

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
}: SectionStepsProps) {
  const t = ui.pl;
  const hasBg = Boolean(backgroundImage);
  const overlayClass = overlay === 'black' ? 'bg-black/70' : overlay === 'white' ? 'bg-white/70' : '';
  const toneTextClass = overlay === 'black' ? 'text-white' : 'text-dark';
  const toneMutedClass = overlay === 'black' ? 'text-white' : 'text-mid';
  const bgPadY = hasBg ? 'py-16 md:py-24' : '';

  const count = items?.length ?? 0;

  const resolvedGrid: 'one' | 'two' | 'three' | 'four' = (() => {
    if (grid) return grid;

    if (count === 1) return 'one';
    if (count === 2) return 'two';
    if (count === 3) return 'three';
    if (count === 4) return 'four';
    if (count === 6 || count === 9) return 'three';

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
        {subtitle && <span className={`text-base tracking-wider uppercase ${hasBg ? 'text-white' : 'text-light'}`}>{subtitle}</span>}

        {title && (
          <SectionHeadingTag id="steps-title" className={`${toneTextClass} h3 reveal-animation`}>
            {title}
          </SectionHeadingTag>
        )}

        {description && <p className={`reveal-animation pt-3 pb-2 ${toneMutedClass}`}>{description}</p>}

        <ol className={`mt-4 grid grid-cols-1 gap-4 md:mt-6 md:auto-rows-fr lg:mt-8 ${gridColsSm} ${gridColsMd} ${gridColsLg}`}>
          {items.map(({ icon, imageSrc, imageAlt, topImageSrc, topImageAlt, title: itemTitle, description: itemDesc, subtitle: itemSubtitle }, index) => {
            const hasVisual = showIndex || icon || imageSrc;

            return (
              <li key={index} className="flex flex-col items-stretch">
                <article className="flex h-full w-full flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg md:p-6">
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
                    <div className="mb-4 flex justify-start">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-600 shadow-sm ring-1 ring-black/5">
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

                  <ArticleHeadingTag className="h4 mb-1 text-dark">{itemTitle}</ArticleHeadingTag>
                  {itemSubtitle && <span className="text-base text-light">{itemSubtitle}</span>}

                  <div className="z-10 mt-2 flex flex-1 flex-col">{itemDesc}</div>
                </article>
              </li>
            );
          })}
        </ol>

        <ButtonGroup
          btnOne={btnOne}
          btnOneLink={btnOneLink}
          btnOneVariant={btnOneVariant === 'dark' ? 'dark' : btnOneVariant}
          btnTwo={btnTwo}
          btnTwoLink={btnTwoLink}
          spacing="loose"
          ariaLabel={t.sectionActions}
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
