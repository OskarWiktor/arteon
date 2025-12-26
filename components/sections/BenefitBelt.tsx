import type { ReactNode } from 'react';
import Wrapper from '../ui/Wrapper';
import IconText from '../ui/IconText';

const ui = {
  pl: {
    defaultAriaLabel: 'Kluczowe benefity',
  },
} as const;

type BenefitItem = {
  icon: ReactNode;
  label: string;
};

interface BenefitBeltProps {
  items: BenefitItem[];
  ariaLabel?: string;
  className?: string;
}

export default function BenefitBelt({ items, ariaLabel = ui.pl.defaultAriaLabel, className = '' }: BenefitBeltProps) {
  const data = (items ?? []).slice(0, 6);

  return (
    <section className={`relative bg-white ${className}`} aria-label={ariaLabel}>
      <Wrapper className="py-2 md:py-3">
        <ul className="text-dark grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:flex-nowrap md:items-center md:gap-0 md:divide-x md:divide-slate-200">
          {data.map((item, i) => (
            <li key={i} className="py-2 md:flex-1 md:justify-center md:px-4 md:first:pl-0 md:last:pr-0 m-auto flex">
              <IconText icon={item.icon} iconClassName="[&_svg]:h-6 [&_svg]:w-6">
                {item.label}
              </IconText>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
