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
  disclaimer?: ReactNode;
}

export default function SectionSteps({ title, subtitle, description, btnOne, btnOneLink, btnTwo, btnTwoLink, items, backgroundImage, overlay = 'none', disclaimer }: SectionStepsProps) {
  const hasBg = Boolean(backgroundImage);
  const overlayClass = overlay === 'black' ? 'bg-black/70' : overlay === 'white' ? 'bg-white/70' : '';
  const toneTextClass = overlay === 'black' ? 'text-white' : 'text-[#080808]';
  const toneMutedClass = overlay === 'black' ? 'text-white' : 'text-[#2B2B2B]';
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
    <section className={`relative ${hasBg ? 'bg-cover bg-center' : ''} ${bgPadY}`} style={hasBg ? { backgroundImage: `url(${backgroundImage})` } : undefined} data-section="steps">
      {hasBg && overlay !== 'none' && <div aria-hidden={true} className={`pointer-events-none absolute inset-0 z-0 ${overlayClass}`} />}

      <Wrapper className="relative z-10 pb-8">
        {subtitle && <span className={`text-xl tracking-wider uppercase ${hasBg ? 'text-white' : 'text-[#5e5e5e]'}`}>{subtitle}</span>}
        {title && <h3 className={toneTextClass}>{title}</h3>}
        {description && <p className={`max-w-3xl pt-3 pb-2 ${toneMutedClass}`}>{description}</p>}

        <ol className={`mt-4 grid auto-rows-fr grid-cols-1 gap-4 md:mt-6 lg:mt-8 ${gridColsSm} ${gridColsMd} ${gridColsLg}`}>
          {items.map(({ icon, imageSrc, imageAlt, title: itemTitle, description: itemDesc, subtitle: itemSubtitle }, index) => {
            return (
              <li key={index} className="flex flex-col items-stretch">
                <article className="flex h-full w-full flex-col rounded-md border-gray-300 bg-white px-6 py-8 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  {imageSrc ? (
                    <Image src={imageSrc} alt={imageAlt ?? ''} width={42} height={42} className="pointer-events-none select-none" aria-hidden={imageAlt ? undefined : true} />
                  ) : (
                    <span className="text-3xl font-bold text-amber-500" aria-hidden={true}>
                      {icon}
                    </span>
                  )}

                  <h4 className="z-10">{itemTitle}</h4>
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

        {disclaimer && (
          <div className="mt-4 md:mt-5 lg:mt-6">
            <span className={`${hasBg ? 'text-white' : 'text-[#5e5e5e]'}`}>{disclaimer}</span>
          </div>
        )}
      </Wrapper>
    </section>
  );
}
