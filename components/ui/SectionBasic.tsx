'use client';

import { ReactNode, useId } from 'react';
import Image from 'next/image';
import Wrapper from './Wrapper';
import SlideInOnView from '../animations/SlideInOnView';

interface SectionBasicProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  variant?: 'left' | 'right';
  children?: ReactNode;
}

export default function SectionBasic({ title, description, imageSrc, imageAlt = '', variant = 'right', children }: SectionBasicProps) {
  const titleId = useId();
  const descId = useId();

  return (
    <section className="mt-20 w-full bg-gray-300" aria-labelledby={titleId} aria-describedby={description ? descId : undefined} role="region">
      <Wrapper className={`flex flex-col lg:flex-row ${variant === 'left' ? 'lg:flex-row-reverse' : ''}`}>
        <div className="w-full lg:w-1/2">
          <SlideInOnView direction={variant === 'left' ? 'right' : 'left'}>
            <div className="flex flex-col">
              <Image src={imageSrc} alt={imageAlt} className="h-auto w-full" width={1200} height={800} priority />
            </div>
          </SlideInOnView>
        </div>

        <div className="w-full lg:w-1/2">
          <SlideInOnView direction={variant}>
            <div className="flex flex-col p-4 md:px-8 lg:px-8" role="group" aria-labelledby={titleId} aria-describedby={description ? descId : undefined}>
              <h3 id={titleId} className="text-4xl font-semibold" tabIndex={0}>
                {title}
              </h3>
              {description && (
                <p id={descId} className="mt-4" tabIndex={0}>
                  {description}
                </p>
              )}
              {children}
            </div>
          </SlideInOnView>
        </div>
      </Wrapper>
    </section>
  );
}
