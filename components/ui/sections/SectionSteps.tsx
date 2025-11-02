import { ElementType, JSX, ReactNode } from 'react';
import Image from 'next/image';
import Wrapper from '../Wrapper';
import Button from '../Button';

interface SectionStepItem {
  icon?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
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
  /** 🔢 Pokazuje numer w kwadracie zamiast ikony */
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
  const hasBg = Boolean(backgroundImage);
  const overlayClass = overlay === 'black' ? 'bg-black/70' : overlay === 'white' ? 'bg-white/70' : '';
  const toneTextClass = overlay === 'black' ? 'text-white' : 'text-[#080808]';
  const toneMutedClass = overlay === 'black' ? 'text-white' : 'text-[#2B2B2B]';
  const bgPadY = hasBg ? 'py-16 md:py-24' : '';

  const count = items?.length ?? 0;

  // 🔹 logika oryginalnego grida + dodana opcja "three"
  let gridColsSm = 'sm:grid-cols-1';
  let gridColsMd = '';
  let gridColsLg = '';

  if (count === 1 || grid === 'one') {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-1';
    gridColsLg = 'lg:grid-cols-1';
  } else if (count === 2 || grid === 'two') {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-2';
    gridColsLg = 'lg:grid-cols-2';
  } else if (count === 3 || grid === 'three') {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-2';
    gridColsLg = 'lg:grid-cols-3';
  } else if (count === 4 || grid === 'four') {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-2';
    gridColsLg = 'lg:grid-cols-4';
  } else if (count === 6 || count === 9) {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-2';
    gridColsLg = 'lg:grid-cols-3';
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
        {subtitle && <span className={`text-base tracking-wider uppercase ${hasBg ? 'text-white' : 'text-[#5e5e5e]'}`}>{subtitle}</span>}

        {title && (
          <SectionHeadingTag id="steps-title" className={`${toneTextClass} h3 reveal-animation`}>
            {title}
          </SectionHeadingTag>
        )}

        {description && <p className={`reveal-animation pt-3 pb-2 ${toneMutedClass}`}>{description}</p>}

        <ol className={`mt-4 grid auto-rows-fr grid-cols-1 gap-4 md:mt-6 lg:mt-8 ${gridColsSm} ${gridColsMd} ${gridColsLg}`}>
          {items.map(({ icon, imageSrc, imageAlt, title: itemTitle, description: itemDesc, subtitle: itemSubtitle }, index) => {
            const hasVisual = showIndex || icon || imageSrc;

            return (
              <li key={index} className="flex flex-col items-stretch">
                <article className="flex h-full w-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg md:px-6 md:py-8">
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

                  <ArticleHeadingTag className="h4 mb-1 text-[#080808]">{itemTitle}</ArticleHeadingTag>
                  {itemSubtitle && <span className="text-base text-[#5e5e5e]">{itemSubtitle}</span>}

                  <div className="z-10 mt-2 flex flex-1 flex-col">{itemDesc}</div>
                </article>
              </li>
            );
          })}
        </ol>

        {(btnOne || btnTwo) && (
          <div className="mt-6 flex flex-wrap gap-3 md:mt-8 lg:mt-10" role="group" aria-label="Działania sekcji">
            {btnOne && (
              <Button arrow variant={btnOneVariant} link={btnOneLink}>
                {btnOne}
              </Button>
            )}
            {btnTwo && (
              <Button arrow link={btnTwoLink}>
                {btnTwo}
              </Button>
            )}
          </div>
        )}

        {disclaimer && (
          <div className="mt-4 md:mt-5 lg:mt-6">
            <p className={`${hasBg ? 'text-white' : 'text-[#5e5e5e]'}`}>{disclaimer}</p>
          </div>
        )}
      </Tag>
    </section>
  );
}
