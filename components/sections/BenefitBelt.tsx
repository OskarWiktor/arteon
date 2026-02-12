import type { ReactNode } from 'react';
import Wrapper from '../ui/Wrapper';
import IconText from '../ui/IconText';

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

export default function BenefitBelt({ items, ariaLabel = 'Kluczowe benefity', className = '', variant = 'default' }: BenefitBeltProps) {
  const data = (items ?? []).slice(0, 6);

  if (variant === 'legacy') {
    return (
      <section className={`relative bg-white ${className}`} aria-label={ariaLabel}>
        <Wrapper className="py-2 md:py-3">
          <ul className="text-dark md:divide-primary-light grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:flex-nowrap md:items-center md:gap-0 md:divide-x">
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
    <section className={`relative bg-white ${className}`} aria-label={ariaLabel}>
      <Wrapper className="py-4">
        <ul className="flex flex-wrap items-center justify-between gap-y-4">
          {data.map((item, i) => (
            <li key={i} className="text-primary flex items-center gap-2">
              <span className="[&_svg]:h-6 [&_svg]:w-6">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
