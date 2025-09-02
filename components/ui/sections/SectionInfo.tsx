'use client';

import Wrapper from '../Wrapper';
import Button from '../Button';
import { ReactNode } from 'react';

interface SectionInfoProps {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
}

export default function SectionInfo({ id, title, subtitle, description, btnOne, btnOneLink, btnTwo, btnTwoLink, children }: SectionInfoProps) {
  const headingId = `${id}-heading`;
  const subtitleId = subtitle ? `${id}-subtitle` : undefined;
  const descriptionId = description ? `${id}-desc` : undefined;
  const describedBy = [subtitleId, descriptionId].filter(Boolean).join(' ') || undefined;

  return (
    <section id={id} className="w-full" aria-labelledby={headingId} aria-describedby={describedBy}>
      <Wrapper className="flex flex-col">
        {subtitle && (
          <span id={subtitleId} className="text-xl tracking-widest text-[#5e5e5e] uppercase">
            {subtitle}
          </span>
        )}

        <h2 id={headingId} className="mb-2 lg:mb-4">
          {title}
        </h2>

        {description && <p id={descriptionId}>{description}</p>}

        {children}

        {(btnOne || btnTwo) && (
          <div className="mt-6 flex flex-wrap gap-3 md:mt-8 lg:mt-10" aria-label="Działania sekcji">
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
