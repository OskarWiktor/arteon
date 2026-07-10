import Image from 'next/image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';
import Subtitle from '../atoms/typography/Subtitle';
import Wrapper from '../atoms/Wrapper';
import ButtonGroup from '../molecules/ButtonGroup';

interface HeroBannerProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  backgroundImage?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  overlay?: 'none' | 'black';
  size?: 'default' | 'compact';
}

/**
 * Page hero. Two shapes:
 * - `default`: a dark banner (optional background image + optional black overlay)
 *   with light text. Visually dark in both themes by design.
 * - `compact`: transparent, themed text that follows the active light/dark theme.
 */
export default function HeroBanner({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  overlay = 'none',
  size = 'default',
}: HeroBannerProps) {
  const isCompact = size === 'compact';
  const hasBg = !isCompact && Boolean(backgroundImage);
  const showOverlay = hasBg && overlay === 'black';

  const titleId = title ? 'hero-title' : undefined;
  const descId = description ? 'hero-description' : undefined;

  return (
    <section
      id='hero'
      aria-labelledby={titleId}
      aria-describedby={descId}
      className={cn(
        'relative flex h-auto items-center overflow-hidden',
        isCompact
          ? 'bg-transparent pt-4 pb-2 md:pt-7'
          : 'min-h-100 bg-black py-10 md:min-h-115 md:py-0 lg:min-h-120',
      )}
    >
      {hasBg && backgroundImage && (
        <Image
          src={backgroundImage}
          alt=''
          fill
          priority
          fetchPriority='high'
          sizes='100vw'
          quality={80}
          className='object-cover object-center'
        />
      )}
      {showOverlay && (
        <div aria-hidden='true' className='absolute inset-0 bg-black/40' />
      )}

      <Wrapper className='relative flex h-auto items-center'>
        <div
          className={cn(
            'max-w-[100vw] hyphens-auto',
            isCompact
              ? 'text-center md:w-full'
              : 'w-full rounded-lg p-4 text-on-dark md:max-w-[75%] md:px-6 md:py-5 lg:max-w-[65%]',
            showOverlay && 'bg-[#0D0103]/80',
          )}
        >
          {subtitle && (
            <Subtitle
              variant='hero'
              className={isCompact ? 'text-mid' : 'text-[#e0d6ce]!'}
            >
              {subtitle}
            </Subtitle>
          )}
          {title && (
            <h1
              id={titleId}
              className={cn('text-pretty', isCompact && 'h4 text-center')}
            >
              {title}
            </h1>
          )}
          {description && (
            <p
              id={descId}
              className={cn(
                'text-base leading-relaxed text-pretty',
                isCompact
                  ? 'mt-2 text-center text-mid! md:mt-3'
                  : 'mt-3 text-[#e0d6ce]! md:mt-4',
              )}
            >
              {description}
            </p>
          )}
          {(primaryCtaLabel || secondaryCtaLabel) && (
            <ButtonGroup
              btnOne={secondaryCtaLabel}
              btnOneHref={secondaryCtaHref}
              btnTwo={primaryCtaLabel}
              btnTwoHref={primaryCtaHref}
              align='left'
            />
          )}
        </div>
      </Wrapper>
    </section>
  );
}
