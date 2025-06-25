'use client';

import { ReactNode, useId } from 'react';
import Image from 'next/image';
import Wrapper from './Wrapper';
import SlideInOnView from '../animations/SlideInOnView';
import Button from './Button';

interface SectionBasicProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  variant?: 'left' | 'right';
  children?: ReactNode;
  buttonText?: string;
  buttonLink?: string;
  id?: string;
}

export default function SectionBasic({ title, description, imageSrc, imageAlt = '', variant = 'right', children, buttonText, buttonLink, id }: SectionBasicProps) {
  const titleId = useId();
  const descId = useId();

  return (
    <section id={id} className='mt-12 w-full scroll-mt-24 md:mt-16 lg:mt-24' aria-labelledby={titleId} aria-describedby={description ? descId : undefined} role="region">
      <Wrapper className={`flex flex-col items-center md:gap-4 lg:flex-row lg:items-start lg:gap-8 ${variant === 'left' ? 'lg:flex-row-reverse' : ''}`}>
        <div className="w-full lg:w-1/2">
          <SlideInOnView direction={variant === 'left' ? 'right' : 'left'}>
            <div className="relative aspect-[3/2] max-h-80 w-full overflow-hidden shadow-lg lg:max-h-full">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
            </div>
          </SlideInOnView>
        </div>

        <div className="m-auto w-full lg:w-1/2">
          <SlideInOnView direction={variant}>
            <div
              className={`flex flex-col py-6 md:py-8 lg:py-8 ${variant === 'right' ? 'px-4 md:pl-6' : 'px-4 md:pr-6'}`}
              role="group"
              aria-labelledby={titleId}
              aria-describedby={description ? descId : undefined}
            >
              <h3 id={titleId} className="text-3xl text-balance leading-tight font-semibold text-gray-900" tabIndex={0}>
                {title}
              </h3>
              {description && (
                <p id={descId} className="mt-2 leading-relaxed text-balance	text-gray-800 md:mt-4 md:text-lg" tabIndex={0}>
                  {description}
                </p>
              )}
              {children && <div className="mt-2 text-gray-800 text-balance">{children}</div>}
              {buttonText && buttonLink && (
                <div className="mt-4 md:mt-6">
                  <Button variant="accent">
                    <a href={buttonLink}>{buttonText}</a>
                  </Button>
                </div>
              )}
            </div>
          </SlideInOnView>
        </div>
      </Wrapper>
    </section>
  );
}
