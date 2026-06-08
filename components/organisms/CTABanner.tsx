import Image from 'next/image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';
import Wrapper from '../atoms/Wrapper';
import ButtonGroup from '../molecules/ButtonGroup';
import SectionHeader from '../molecules/SectionHeader';

interface CTABannerProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  btnOne?: string;
  btnOneHref?: string;
  btnTwo?: string;
  btnTwoHref?: string;
  backgroundImage?: string;
  backgroundStyle?: 'image' | 'gradient' | 'solid';
  overlay?: 'none' | 'black' | 'white';
}

export default function CTABanner({
  title,
  subtitle,
  description,
  btnOne,
  btnOneHref,
  btnTwo,
  btnTwoHref,
  backgroundImage,
  backgroundStyle = 'image',
  overlay = 'none',
}: CTABannerProps) {
  const hasBg = Boolean(backgroundImage);
  const isGradient = backgroundStyle === 'gradient';
  const isSolid = backgroundStyle === 'solid';
  const overlayClass =
    overlay === 'black'
      ? 'bg-black/70'
      : overlay === 'white'
        ? 'bg-white/80'
        : '';
  const baseBg = isGradient
    ? 'bg-gradient-to-r from-primary to-primary'
    : isSolid
      ? 'bg-primary'
      : overlay === 'black'
        ? 'bg-neutral-900'
        : 'bg-white';

  const toneTextClass =
    isGradient || isSolid || overlay === 'black' ? 'text-white' : 'text-dark';
  const toneMutedClass =
    isGradient || isSolid || overlay === 'black'
      ? 'text-white/90'
      : 'text-light';

  return (
    <section
      className={cn(
        'relative flex h-auto min-h-90 overflow-hidden md:min-h-110',
        baseBg,
      )}
      data-section='final-cta'
    >
      {hasBg && !isGradient && !isSolid && backgroundImage && (
        <Image
          src={backgroundImage}
          alt={typeof title === 'string' ? title : 'CTA background'}
          fill
          sizes='100vw'
          className='object-cover object-center'
        />
      )}
      {hasBg && !isGradient && !isSolid && overlay !== 'none' && (
        <div
          aria-hidden='true'
          className={cn(
            'pointer-events-none absolute inset-0 z-0',
            overlayClass,
          )}
        />
      )}

      <Wrapper className='relative flex h-auto justify-center md:items-center'>
        <div
          className={cn(
            'mt-6 mb-6 max-w-[100vw] rounded-lg p-2 md:m-0 md:max-w-[65%] md:p-5 md:text-center lg:p-7',
            toneTextClass,
            {
              'bg-transparent': isGradient || isSolid,
              'bg-black/50': overlay === 'black',
              'bg-white/70': overlay === 'white',
            },
          )}
        >
          <SectionHeader
            subtitle={subtitle}
            title={title}
            description={description}
            SubtitleVariant='dynamic'
            SubtitleClassName={cn('text-base tracking-wider uppercase', {
              'text-white!': overlay === 'black',
              'text-dark!': overlay !== 'black',
            })}
            descriptionClassName={cn(
              'mx-auto text-base leading-relaxed md:text-lg',
              toneMutedClass,
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
