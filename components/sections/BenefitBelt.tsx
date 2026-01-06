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
  variant?: 'default' | 'legacy';
}

export default function BenefitBelt({ items, ariaLabel = ui.pl.defaultAriaLabel, className = '', variant = 'default' }: BenefitBeltProps) {
  const data = (items ?? []).slice(0, 6);

  if (variant === 'legacy') {
    return (
      <section className={`relative bg-white ${className}`} aria-label={ariaLabel}>
        <Wrapper className="py-2 md:py-3">
          <ul className="text-dark grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:flex-nowrap md:items-center md:gap-0 md:divide-x md:divide-slate-200">
            {data.map((item, i) => (
              <li key={i} className="m-auto flex py-2 md:flex-1 md:justify-center md:px-4 md:first:pl-0 md:last:pr-0">
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

  return (
    <section className={`relative ${className}`} aria-label={ariaLabel}>
        <ul className="flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-white p-6">
          {data.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-slate-800">
              <span className="[&_svg]:h-6 [&_svg]:w-6">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
    </section>
  );
}
