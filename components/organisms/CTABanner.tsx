import Image from 'next/image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';
import Wrapper from '../atoms/Wrapper';
import ButtonGroup from '../molecules/ButtonGroup';
import SectionHeader from '../molecules/SectionHeader';

interface CTABannerProps {
  title?: ReactNode;
  description?: ReactNode;
  btnOne?: string;
  btnOneHref?: string;
  btnTwo?: string;
  btnTwoHref?: string;
  backgroundImage?: string;
  overlay?: 'none' | 'black' | 'white';
}

/**
 * Closing call-to-action banner over a background image.
 * - `overlay='black'`: dark section (fixed black overlay + light text), visually
 *   dark in both themes by design.
 * - `overlay='white'` / `'none'`: a themed surface (overlay and text follow the
 *   active light/dark theme).
 */
export default function CTABanner({
  title,
  description,
  btnOne,
  btnOneHref,
  btnTwo,
  btnTwoHref,
  backgroundImage,
  overlay = 'none',
}: CTABannerProps) {
  const hasBg = Boolean(backgroundImage);
  const isBlack = overlay === 'black';

  return (
    <section
      className={cn(
        'relative flex h-auto min-h-90 overflow-hidden md:min-h-110',
        isBlack ? 'bg-black' : 'bg-white',
      )}
      data-section='final-cta'
    >
      {hasBg && backgroundImage && (
        <Image
          src={backgroundImage}
          alt={typeof title === 'string' ? title : 'CTA background'}
          fill
          sizes='100vw'
          className='object-cover object-center'
        />
      )}
      {hasBg && overlay !== 'none' && (
        <div
          aria-hidden='true'
          className={cn(
            'pointer-events-none absolute inset-0 z-0',
            isBlack ? 'bg-black/40' : 'bg-white/80',
          )}
        />
      )}

      <Wrapper className='relative flex h-auto justify-center md:items-center'>
        <div
          className={cn(
            'max-w-[100vw] rounded-lg px-6 py-4 md:max-w-[65%] md:p-8 md:text-center lg:p-10',
            isBlack && 'bg-[#0D0103]/80 text-on-dark',
            overlay === 'white' && 'bg-white/70 text-dark',
            overlay === 'none' && 'text-dark',
          )}
        >
          <SectionHeader
            title={title}
            description={description}
            descriptionClassName={cn(
              'mx-auto text-base leading-relaxed md:text-lg',
              isBlack ? 'text-on-dark!' : 'text-light!',
            )}
          />

          <ButtonGroup
            btnOne={btnOne}
            btnOneHref={btnOneHref}
            btnTwo={btnTwo}
            btnTwoHref={btnTwoHref}
            align='center'
            ariaLabel='Działania sekcji'
          />
        </div>
      </Wrapper>
    </section>
  );
}
