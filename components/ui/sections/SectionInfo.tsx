'use client';

import Button from '../Button';
import { ReactNode } from 'react';

interface SectionInfoProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
  id?: string;
}

export default function SectionInfo({ title, subtitle, description, btnOne, btnOneLink, btnTwo, btnTwoLink, children, id }: SectionInfoProps) {
  return (
    <div id={id}>
      {subtitle && <span className="text-base tracking-wider text-[#5e5e5e] uppercase">{subtitle}</span>}

      <h2 className="reveal-animation mb-2 scroll-mt-26 lg:mb-4">{title}</h2>

      {description && <p>{description}</p>}

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
    </div>
  );
}
