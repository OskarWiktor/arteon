'use client';

import { ReactNode } from 'react';
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

interface SectionStepsProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
  description?: string;
  items: SectionStepItem[];
  backgroundImage?: string;
  overlay?: 'none' | 'black' | 'white';
}

export default function SectionSteps({ title, subtitle, description, btnOne, btnOneLink, btnTwo, btnTwoLink, items, backgroundImage, overlay = 'none' }: SectionStepsProps) {
  const hasBg = Boolean(backgroundImage);
  const overlayClass = overlay === 'black' ? 'bg-black/55' : overlay === 'white' ? 'bg-white/65' : '';
  const toneTextClass = overlay === 'black' ? 'text-white' : 'text-slate-900';
  const toneMutedClass = overlay === 'black' ? 'text-white/90' : 'text-slate-900/70';
  const bgPadY = hasBg ? 'py-16 md:py-24' : '';

  const count = items?.length ?? 0;

  let gridColsSm = 'sm:grid-cols-1';
  let gridColsMd = '';
  let gridColsLg = '';

  if (count === 1) {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-1';
    gridColsLg = 'lg:grid-cols-1';
  } else if (count === 2) {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-2';
    gridColsLg = 'lg:grid-cols-2';
  } else if (count === 3) {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-1';
    gridColsLg = 'lg:grid-cols-3';
  } else if (count === 4) {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-2';
    gridColsLg = 'lg:grid-cols-4';
  } else if (count === 6) {
    gridColsSm = 'sm:grid-cols-1';
    gridColsMd = 'md:grid-cols-2';
    gridColsLg = 'lg:grid-cols-3';
  }

  return (
    <section role="region" className={`relative ${hasBg ? 'bg-cover bg-center' : ''} ${bgPadY}`} style={hasBg ? { backgroundImage: `url(${backgroundImage})` } : undefined} data-section="steps">
      {hasBg && overlay !== 'none' && <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 ${overlayClass}`} />}

      <Wrapper className="relative z-10 pb-8">
        {subtitle && <span className="text-xl tracking-widest text-[#5e5e5e] uppercase">{subtitle}</span>}
        {title && <h3 className={toneTextClass}>{title}</h3>}
        {description && <p className={`max-w-2xl md:mt-3 ${toneMutedClass}`}>{description}</p>}

        <div className={`mt-6 grid auto-rows-fr grid-cols-1 gap-4 md:mt-8 lg:mt-10 ${gridColsSm} ${gridColsMd} ${gridColsLg}`}>
          {items.map(({ icon, imageSrc, imageAlt, title, description, subtitle }, index) => (
            <div key={index} className="flex flex-col items-stretch" role="group" tabIndex={0}>
              <article
                role="group"
                aria-labelledby={`step-title-${index}`}
                aria-describedby={`step-desc-${index}`}
                className="relative flex h-full w-full flex-col rounded-md border-gray-300 bg-white px-6 py-8 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                {imageSrc ? (
                  <Image src={imageSrc} alt={imageAlt ?? ''} width={128} height={128} className="pointer-events-none absolute top-[-8px] left-2 opacity-10 select-none" aria-hidden />
                ) : (
                  <span className="absolute top-[-8px] left-2 text-9xl font-bold text-gray-800/10" aria-hidden>
                    {icon}
                  </span>
                )}

                <h4 id={`step-title-${index}`} className="z-10" tabIndex={0}>
                  {title}
                </h4>
                {subtitle && <span className="text-[#5e5e5e]">{subtitle}</span>}

                <div id={`step-desc-${index}`} tabIndex={0} className="z-10 mt-2">
                  {description}
                </div>
              </article>
            </div>
          ))}
        </div>

        {btnOne && (
          <div className="mt-6 flex flex-wrap gap-3 md:mt-8 lg:mt-10">
            {btnOne && (
              <Button arrow variant="accent" link={btnOneLink}>
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
      </Wrapper>
    </section>
  );
}
