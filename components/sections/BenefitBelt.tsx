'use client';

import { ReactNode, isValidElement, cloneElement } from 'react';
import Wrapper from '../ui/Wrapper';

type BenefitItem = {
  icon: ReactNode;
  label: string;
};

interface BenefitBeltProps {
  items: BenefitItem[];
  ariaLabel?: string;
  className?: string;
}

export default function BenefitBelt({ items, ariaLabel = 'Kluczowe benefity', className = '' }: BenefitBeltProps) {
  const data = (items ?? []).slice(0, 6);
  const ICON_SIZE_CLASS = 'h-6 w-6';

  const sizedIcon = (node: ReactNode) => {
    if (isValidElement(node)) {
      const prev = (node.props as any)?.className ?? '';
      return cloneElement(node as any, {
        className: `${prev} ${ICON_SIZE_CLASS}`.trim(),
        'aria-hidden': true,
      });
    }
    return (
      <span aria-hidden="true" className={ICON_SIZE_CLASS}>
        {node}
      </span>
    );
  };

  return (
    <section className={`relative bg-white ${className}`} aria-label="Pasek benefitów">
      <Wrapper className="py-2 md:py-3">
        <ul aria-label={ariaLabel} className="grid grid-cols-2 gap-x-3 gap-y-2 text-[#868686] md:flex md:flex-nowrap md:items-center md:gap-0 md:divide-x md:divide-slate-200">
          {data.map((item, i) => (
            <li key={i} className="flex items-center gap-2 py-2 md:flex-1 md:justify-center md:px-4 md:first:pl-0 md:last:pr-0">
              <span className="shrink-0">{sizedIcon(item.icon)}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
