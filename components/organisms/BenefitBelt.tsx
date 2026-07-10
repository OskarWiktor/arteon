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
  variant?: 'default' | 'carousel';
}

/**
 * Render a horizontal belt of benefit items or a logo carousel variant.
 *
 * Displays up to six provided benefit items in a responsive list by default,
 * or renders a logo carousel when `variant` is set to `'carousel'`.
 *
 * @param items - Optional list of benefits to display; only the first six items are rendered
 * @param ariaLabel - Accessible label for the section; defaults to `'Kluczowe benefity'`
 * @param variant - Layout variant; `'default'` renders the items list, `'carousel'` renders the logo carousel
 * @returns A React element containing the benefit belt section
 */
export default function BenefitBelt({
  items,
  variant = 'default',
}: BenefitBeltProps) {
  const data = (items ?? []).slice(0, 6);

  if (variant === 'carousel') {
    return (
      <section className='relative bg-[#380911]'>
        <Wrapper className='py-2 md:py-3'>
          <LogoCarousel variant='logo' />
        </Wrapper>
      </section>
    );
  }

  return (
    <section className='relative bg-[#380911]'>
      <Wrapper className='py-4'>
        <ul className='flex flex-wrap items-center justify-between gap-y-4'>
          {data.map((item, i) => (
            <li key={i} className='flex items-center gap-2 text-primary'>
              <span className='[&_svg]:h-6 [&_svg]:w-6'>{item.icon}</span>
              <span className='text-sm font-medium'>{item.label}</span>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
