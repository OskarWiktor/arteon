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
  ctaText?: string;
  ctaHref?: string;
  backgroundClass?: string;
}

export default function SectionBasic({ title, description, imageSrc, imageAlt = '', variant = 'right', children, ctaText, ctaHref, backgroundClass = 'bg-gray-50' }: SectionBasicProps) {
  const titleId = useId();
  const descId = useId();

  return (
    <section className={`mt-24 w-full ${backgroundClass}`} aria-labelledby={titleId} aria-describedby={description ? descId : undefined} role="region">
      <Wrapper className={`flex flex-col items-center gap-8 lg:flex-row lg:items-start ${variant === 'left' ? 'lg:flex-row-reverse' : ''}`}>
        <div className="w-full lg:w-1/2">
          <SlideInOnView direction={variant === 'left' ? 'right' : 'left'}>
            <div className="relative aspect-[3/2] w-full overflow-hidden shadow-lg">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
            </div>
          </SlideInOnView>
        </div>

        <div className="w-full lg:w-1/2 m-auto">
          <SlideInOnView direction={variant}>
            <div className="flex flex-col gap-5 p-4 md:px-8 lg:px-10" role="group" aria-labelledby={titleId} aria-describedby={description ? descId : undefined}>
              <h3 id={titleId} className="text-3xl leading-tight font-semibold text-gray-900" tabIndex={0}>
                {title}
              </h3>
              {description && (
                <p id={descId} className="text-base leading-relaxed text-gray-700 md:text-lg" tabIndex={0}>
                  {description}
                </p>
              )}
              {children && <div className="prose prose-gray max-w-none text-gray-700">{children}</div>}
              {ctaText && ctaHref && (
                <div className="mt-4">
                  <Button variant="accent">
                    <a href={ctaHref}>{ctaText}</a>
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
