'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Wrapper from '../Wrapper';
import Button from '../Button';

interface SectionBasicProps {
  title: ReactNode;
  id?: string;
  subtitle?: ReactNode;
  description?: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  variant?: 'left' | 'right';
  children?: ReactNode;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
}

export default function SectionBasic({ id, title, subtitle, description, imageSrc, imageAlt = '', variant = 'right', children, btnOne, btnOneLink, btnTwo, btnTwoLink }: SectionBasicProps) {
  return (
    <section id={id} className="w-full" role="region">
      <Wrapper className={`flex flex-col md:gap-4 lg:flex-row lg:gap-8 ${variant === 'left' ? 'lg:flex-row-reverse' : ''}`}>
        <div className="flex w-full lg:w-1/2">
          <div className="relative h-full min-h-[420px] w-full">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
          </div>
        </div>

        <div className="flex w-full lg:w-1/2">
          <div className={`flex h-full flex-col justify-center py-6 md:py-8 lg:py-8 ${variant === 'right' ? 'md:pl-6' : 'md:pr-6'}`} role="group">
            {subtitle && <span className="text-xl tracking-widest text-[#868686] uppercase">{subtitle}</span>}
            <h3 className="mb-2 lg:mb-2 lg:mb-4" tabIndex={0}>
              {title}
            </h3>
            {description && <p tabIndex={0}>{description}</p>}
            {children && <div className="text-balance">{children}</div>}
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
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
