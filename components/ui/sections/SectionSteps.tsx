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
    <section className={`${variant === 'basic' ? 'mt-12 md:mt-16 lg:mt-24' : 'mt-6'} md:px-4`} role="region">
      <Wrapper className="px-4 md:px-6 lg:px-0">
        {title && <h3 className="mb-2 md:mb-4">{title}</h3>}
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {items.map(({ icon, title, description, borderClassName = 'border-b-amber-500' }, index) => (
            <div key={index} className="flex flex-col items-center" role="group" tabIndex={0}>
              <article role="group" aria-labelledby={`step-title-${index}`} aria-describedby={`step-desc-${index}`} className="flex flex-col py-4">
                {icon && <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">{icon}</div>}
                <h5 id={`step-title-${index}`} className={`mb-2 w-fit border-b-2 font-semibold capitalize ${borderClassName}`} tabIndex={0}>
                  {title}
                </h5>
                <p id={`step-desc-${index}`} tabIndex={0} className="text-gray-700">
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
