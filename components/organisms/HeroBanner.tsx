import Image from 'next/image';
import type { ReactNode } from 'react';
import { RiCheckLine } from 'react-icons/ri';
import ArrowIcon from '../atoms/ArrowIcon';
import ButtonLink from '../atoms/buttons/ButtonLink';
import InlineLink from '../atoms/InlineLink';
import Subtitle from '../atoms/typography/Subtitle';
import Wrapper from '../atoms/Wrapper';
import ButtonGroup from '../molecules/ButtonGroup';
import RatingBadge from '../molecules/RatingBadge';

interface HeroBannerProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  backgroundImage?: string;
  imageAlt?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  overlay?: 'none' | 'black';
  size?: 'default' | 'compact';
  reputation?: boolean;
}

const TRUST_POINTS = [
  'Brak zaliczek',
  'Indywidualny projekt',
  'Pełna własność',
];

export default function HeroBanner({
  title,
  subtitle,
  description,
  backgroundImage,
  imageAlt,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  size = 'default',
  reputation = false,
}: HeroBannerProps) {
  const titleId = title ? 'hero-title' : undefined;
  const descId = description ? 'hero-description' : undefined;
  const accentLabel = primaryCtaLabel ?? secondaryCtaLabel;
  const accentHref = primaryCtaLabel ? primaryCtaHref : secondaryCtaHref;
  const showLink = Boolean(primaryCtaLabel && secondaryCtaLabel);

  if (size === 'compact') {
    return (
      <section
        id='hero'
        aria-labelledby={titleId}
        aria-describedby={descId}
        className='relative flex h-auto items-center overflow-hidden bg-transparent pt-4 pb-2 md:pt-7'
      >
        <Wrapper className='relative flex h-auto items-center'>
          <div className='max-w-[100vw] text-center hyphens-auto md:w-full'>
            {subtitle && (
              <Subtitle variant='hero' className='text-mid'>
                {subtitle}
              </Subtitle>
            )}
            {title && (
              <h1 id={titleId} className='h4 text-center text-pretty'>
                {title}
              </h1>
            )}
            {description && (
              <p
                id={descId}
                className='mt-2 text-center text-base leading-relaxed text-pretty text-mid! md:mt-3'
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

  return (
    <section
      id='hero'
      aria-labelledby={titleId}
      aria-describedby={descId}
      className='relative isolate overflow-hidden bg-(--background) pt-4 md:pt-0'
    >
      <Image
        src='/assets/grid-bg2.png'
        alt=''
        aria-hidden='true'
        fill
        priority
        sizes='100vw'
        className='pointer-events-none -z-10 object-cover opacity-10'
      />
      <Wrapper>
        <div className='grid items-center gap-8 lg:grid-cols-2 lg:gap-8'>
          <div className='max-w-2xl'>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {title && (
              <h1 id={titleId} className='mt-3 text-pretty'>
                {title}
              </h1>
            )}
            {description && (
              <p
                id={descId}
                className='mt-3 text-base leading-relaxed text-pretty text-mid! md:mt-4 md:text-lg'
              >
                {description}
              </p>
            )}

            {accentLabel && accentHref && (
              <div className='mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-6'>
                <ButtonLink arrow variant='accent' href={accentHref}>
                  {accentLabel}
                </ButtonLink>
                {showLink && secondaryCtaHref && (
                  <InlineLink
                    href={secondaryCtaHref}
                    className='group text-base text-dark'
                  >
                    {secondaryCtaLabel}
                    <ArrowIcon />
                  </InlineLink>
                )}
              </div>
            )}

            {reputation && (
              <div className='mt-6 flex flex-col items-start gap-3'>
                <RatingBadge />
                <ul className='mt-2 flex flex-wrap gap-x-5 gap-y-2'>
                  {TRUST_POINTS.map(point => (
                    <li
                      key={point}
                      className='inline-flex items-center gap-1.5 text-sm text-primary!'
                    >
                      <RiCheckLine className='h-4 w-4 shrink-0 text-mid' />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {backgroundImage && (
            <div className='relative aspect-4/3 w-full overflow-hidden'>
              <Image
                src={backgroundImage}
                alt={imageAlt ?? ''}
                fill
                priority
                fetchPriority='high'
                sizes='(min-width:1024px) 50vw, 100vw'
                quality={80}
                className='object-cover'
              />
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  );
}
