'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Wrapper from '../Wrapper';
import Button from '../Button';

type Variant = 'left' | 'right';

interface SectionBasicProps {
  id: string;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  variant?: Variant;
  children?: ReactNode;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
}

export default function SectionBasic({ id, title, subtitle, description, imageSrc, imageAlt, variant = 'right', children, btnOne, btnOneLink, btnTwo, btnTwoLink }: SectionBasicProps) {
  const headingId = `${id}-heading`;
  const subtitleId = subtitle ? `${id}-subtitle` : undefined;
  const descriptionId = description ? `${id}-desc` : undefined;
  const actionsLabelId = `${id}-actions`;
  const describedBy = [subtitleId, descriptionId].filter(Boolean).join(' ') || undefined;

  return (
    <section id={id} className="w-full" aria-labelledby={headingId} aria-describedby={describedBy}>
      <Wrapper className="flex flex-col md:gap-4 lg:flex-row lg:gap-8">
        {/* Media — ZAWSZE pierwsze w DOM (mobile: obraz nad tekstem) */}
        <div className={`flex w-full lg:w-1/2 ${variant === 'left' ? 'lg:order-2' : ''}`}>
          <div className="relative h-full min-h-[420px] w-full">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
        </div>

        {/* Content */}
        <div className={`flex w-full lg:w-1/2 ${variant === 'left' ? 'lg:order-1' : ''}`}>
          <div className={`flex h-full flex-col justify-center py-6 md:py-8 lg:py-8 ${variant === 'right' ? 'md:pl-6' : 'md:pr-6'}`}>
            {subtitle && (
              <span id={subtitleId} className="text-xl tracking-wider text-[#5e5e5e] uppercase">
                {subtitle}
              </span>
            )}

            <h3 id={headingId} className="mb-2 lg:mb-4">
              {title}
            </h3>

            {description && <p id={descriptionId}>{description}</p>}

            {children && <div className="text-balance">{children}</div>}

            {(btnOne || btnTwo) && (
              <div className="mt-6 flex flex-wrap gap-3 md:mt-8 lg:mt-10" role="group" aria-labelledby={actionsLabelId}>
                <span id={actionsLabelId} className="sr-only">
                  Działania sekcji
                </span>

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
