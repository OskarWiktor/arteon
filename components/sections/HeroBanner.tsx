import Image from 'next/image';
import type { ReactNode } from 'react';
import ButtonGroup from '../ui/buttons/ButtonGroup';
import Eyebrow from '../ui/typography/Eyebrow';
import Wrapper from '../ui/Wrapper';

interface HeroBannerProps {
  id?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  primaryCtaLabel?: string;
  primaryCtaLink?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
  variant?: 'left' | 'center' | 'right';
  overlay?: 'none' | 'black' | 'white';
  size?: 'default' | 'compact';
}

export default function HeroBanner({
  id = 'hero',
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundImageAlt,
  primaryCtaLabel,
  primaryCtaLink,
  secondaryCtaLabel,
  secondaryCtaLink,
  variant = 'left',
  overlay = 'none',
  size = 'default',
}: HeroBannerProps) {
  const isCompact = size === 'compact';
  const hasBg = !isCompact && Boolean(backgroundImage);
  const isLightText = !isCompact && overlay !== 'white';

  const baseBg = isCompact ? 'bg-transparent' : overlay === 'white' ? 'bg-white' : 'bg-black';
  const toneTextClass = isLightText ? 'text-white' : 'text-dark';
  const toneMutedClass = isLightText ? 'text-white' : 'text-dark opacity-80';

  const textAlign = variant === 'center' ? 'text-left md:text-center' : variant === 'right' ? 'text-right' : 'text-left';
  const contentAnchor = variant === 'right' ? 'ml-auto' : variant === 'center' ? 'mx-auto' : '';
  const contentWidthClass = isCompact ? 'text-center md:w-[100%]' : variant === 'left' ? 'w-full md:max-w-[75%] lg:max-w-[55%]' : 'md:max-w-[75%]';

  const titleId = title ? `${id}-title` : undefined;
  const descId = description ? `${id}-description` : undefined;

  const sectionClass = isCompact
    ? `relative ${baseBg} flex h-auto items-center overflow-hidden pt-4 pb-2 md:pt-7`
    : `relative ${baseBg} flex h-auto min-h-[400px] items-center overflow-hidden py-10 md:min-h-[460px] md:py-0 lg:min-h-[480px]`;

  return (
    <section id={id} aria-labelledby={titleId} aria-describedby={descId} className={sectionClass}>
      {hasBg && backgroundImage && <Image src={backgroundImage} alt={backgroundImageAlt ?? ''} fill priority fetchPriority="high" sizes="100vw" quality={80} className="object-cover object-center" />}
      {hasBg && overlay !== 'none' && <div aria-hidden="true" className={`absolute inset-0 ${overlay === 'black' ? 'bg-black/70' : 'bg-white/80'}`} />}
      <Wrapper className="relative flex h-auto items-center">
        <div
          className={`max-w-[100vw] ${contentWidthClass} ${contentAnchor} ${textAlign} ${toneTextClass} ${isCompact ? '' : 'rounded-lg p-5 pt-4 md:p-7'} ${hasBg && overlay === 'black' ? 'bg-black/60' : hasBg && overlay === 'white' ? 'bg-white/50' : ''} hyphens-auto`}
        >
          {subtitle && (
            <Eyebrow variant="hero" className={` ${toneMutedClass}`}>
              {subtitle}
            </Eyebrow>
          )}
          {title && (
            <h1 id={titleId} className={`text-pretty ${isCompact ? 'h4 text-center' : ''}`}>
              {title}
            </h1>
          )}
          {description && (
            <p id={descId} className={`text-pretty ${isCompact ? 'mt-2 text-center md:mt-3' : 'mt-3 md:mt-5'} text-base leading-relaxed ${isLightText ? 'text-white' : 'text-mid'}`}>
              {description}
            </p>
          )}
          {(primaryCtaLabel || secondaryCtaLabel) && (
            <ButtonGroup
              btnOne={secondaryCtaLabel}
              btnOneLink={secondaryCtaLink}
              btnOneVariant="normal"
              btnTwo={primaryCtaLabel}
              btnTwoLink={primaryCtaLink}
              btnTwoVariant="accent"
              spacing="loose"
              align={variant === 'center' ? 'center' : variant === 'right' ? 'right' : 'left'}
              className="mt-7 md:mt-8"
            />
          )}
        </div>
      </Wrapper>
    </section>
  );
}
