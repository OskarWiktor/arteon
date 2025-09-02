import { ReactNode } from 'react';
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

export default function BenefitBelt({
  items,
  ariaLabel = 'Kluczowe benefity',
  className = '',
}: BenefitBeltProps) {
  const data = (items ?? []).slice(0, 6);

  return (
    <section className={`relative bg-white ${className}`} aria-label={ariaLabel}>
      <Wrapper className="py-2 md:py-3">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[#5e5e5e] md:flex md:flex-nowrap md:items-center md:gap-0 md:divide-x md:divide-slate-200">
          {data.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 py-2 md:flex-1 md:justify-center md:px-4 md:first:pl-0 md:last:pr-0"
            >
              <span
                aria-hidden="true"
                className="shrink-0 [&_svg]:h-6 [&_svg]:w-6"
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
