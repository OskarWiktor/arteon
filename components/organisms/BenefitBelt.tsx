import type { ReactNode } from 'react';
import Wrapper from '../atoms/Wrapper';
import LogoCarousel from './carousels/LogoCarousel';

type BenefitItem = {
  icon: ReactNode;
  label: string;
};

interface BenefitBeltProps {
  items?: BenefitItem[];
  ariaLabel?: string;
  className?: string;
  variant?: 'default' | 'carousel';
}

export default function BenefitBelt({
  items,
  ariaLabel = 'Kluczowe benefity',
  className,
  variant = 'default',
}: BenefitBeltProps) {
  const data = (items ?? []).slice(0, 6);

  if (variant === 'carousel') {
    return (
      <section className={`relative bg-white ${className}`} aria-label={ariaLabel}>
        <Wrapper className='py-2 md:py-3'>
          <LogoCarousel variant='logo' />
        </Wrapper>
      </section>
    );
  }

  return (
    <section className={`relative bg-white ${className}`} aria-label={ariaLabel}>
      <Wrapper className='py-4'>
        <ul className='flex flex-wrap items-center justify-between gap-y-4'>
          {data.map((item, i) => (
            <li key={i} className='text-primary flex items-center gap-2'>
              <span className='[&_svg]:h-6 [&_svg]:w-6'>{item.icon}</span>
              <span className='text-sm font-medium'>{item.label}</span>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
