'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Wrapper from '../Wrapper';
import Button from '../Button';

interface SectionBasicProps {
  title: ReactNode;
  description?: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  variant?: 'left' | 'right';
  children?: ReactNode;
  buttonText?: string;
  buttonLink?: string;
  id?: string;
}

export default function SectionBasic({ title, description, imageSrc, imageAlt = '', variant = 'right', children, buttonText, buttonLink, id }: SectionBasicProps) {
  return (
    <section id={id} className="mt-18 w-full scroll-mt-32 md:mt-30 lg:mt-38" role="region">
      <Wrapper className={`flex flex-col md:gap-4 lg:flex-row lg:gap-8 ${variant === 'left' ? 'lg:flex-row-reverse' : ''}`}>
        <div className="flex w-full lg:w-1/2">
          <div className="relative h-full min-h-[420px] w-full">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
          </div>
        </div>

        <div className="flex w-full lg:w-1/2">
          <div className={`flex h-full flex-col justify-center py-6 md:py-8 lg:py-8 ${variant === 'right' ? 'md:pl-6' : 'md:pr-6'}`} role="group">
            <h3 className="mb-4" tabIndex={0}>
              {title}
            </h3>
            {description && <p tabIndex={0}>{description}</p>}
            {children && <div className="text-balance">{children}</div>}
            {buttonText && buttonLink && (
              <div className="mt-7">
                <Button variant="dark">
                  <a href={buttonLink}>{buttonText}</a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
