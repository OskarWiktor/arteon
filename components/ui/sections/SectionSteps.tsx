'use client';

import { ReactNode } from 'react';
import Wrapper from '../Wrapper';

interface SectionStepItem {
  icon?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  borderClassName?: string;
}

interface SectionStepsProps {
  title?: ReactNode;
  items: SectionStepItem[];
  variant?: 'basic' | 'smallMargin';
}

export default function SectionSteps({ title, items, variant = 'basic' }: SectionStepsProps) {
  return (
    <section className={`${variant === 'basic' ? 'mt-18 md:mt-30 lg:mt-38' : 'mt-6'} `} role="region">
      <Wrapper>
        {title && <h3 className="mb-4 md:mb-8">{title}</h3>}
        <div className="mt-2 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon, title, description, borderClassName = 'border-b-amber-500' }, index) => (
            <div key={index} className="flex flex-col items-center" role="group" tabIndex={0}>
              <article
                role="group"
                aria-labelledby={`step-title-${index}`}
                aria-describedby={`step-desc-${index}`}
                className="relative flex h-full flex-col rounded border border-gray-100 px-6 py-4 shadow-md"
              >
                <span className="absolute top-[-8px] left-2 text-9xl font-bold text-gray-800/10">{icon}</span>

                <h5 id={`step-title-${index}`} className={`mt-4 w-fit ${borderClassName} z-10`} tabIndex={0}>
                  {title}
                </h5>
                <p id={`step-desc-${index}`} tabIndex={0} className="z-10 mt-2">
                  {description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
