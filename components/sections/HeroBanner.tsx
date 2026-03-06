'use client';

import Image from 'next/image';
import Button from '../ui/buttons/Button';
import ButtonGroup from '../ui/buttons/ButtonGroup';
import Eyebrow from '../ui/typography/Eyebrow';
import type { ReactNode } from 'react';
import Wrapper from '../ui/Wrapper';

function getFallbackAltFromImagePath(imagePath: string): string | undefined {
  const filename = imagePath.split('/').pop();
  if (!filename) return undefined;

  const withoutQuery = filename.split('?')[0];
  const withoutExt = withoutQuery.replace(/\.[a-z0-9]+$/i, '');
  const decoded = decodeURIComponent(withoutExt);
  const cleaned = decoded.replace(/[-_]+/g, ' ').trim();

  return cleaned || undefined;
}

interface HeroBannerProps {
  buttonTopOne?: string;
  buttonTopOneLink?: string;
  buttonTopTwo?: string;
  buttonTopTwoLink?: string;
  buttonTopThree?: string;
  buttonTopThreeLink?: string;
  buttonTopFour?: string;
  buttonTopFourLink?: string;
  subtitle?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  buttonAccent?: string;
  buttonAccentLink?: string;
  buttonSecond?: string;
  buttonSecondLink?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  emitImageMicrodata?: boolean;
  variant?: 'left' | 'center' | 'right';
  overlay?: 'none' | 'black' | 'white';
  size?: 'default' | 'tools';
  contentMaxWidthClass?: string;
}

export default function HeroBanner({
  buttonTopOne,
  buttonTopOneLink,
  buttonTopTwo,
  buttonTopTwoLink,
  buttonTopThree,
  buttonTopThreeLink,
  buttonTopFour,
  buttonTopFourLink,
  subtitle,
  title,
  description,
  buttonAccent,
  buttonAccentLink,
  buttonSecond,
  buttonSecondLink,
  backgroundImage,
  backgroundImageAlt,
  emitImageMicrodata = false,
  variant = 'left',
  overlay = 'none',
  size = 'default',
}: HeroBannerProps) {
  const isTools = size === 'tools';
  const hasBg = isTools ? false : Boolean(backgroundImage);

  const isDarkOverlay = isTools ? false : overlay === 'black';

  const overlayClass = overlay === 'black' ? 'bg-black/70' : overlay === 'white' ? 'bg-white/80' : '';

  const toneTextClass = isDarkOverlay ? 'text-white' : 'text-dark';
  const toneMutedClass = isDarkOverlay ? 'text-white' : 'text-dark opacity-80';

  const baseBg = isTools ? 'bg-transparent' : overlay === 'black' ? 'bg-black' : 'bg-white';
  const contentBgClass = isTools ? '' : overlay === 'black' ? 'bg-black/60' : overlay === 'white' ? 'bg-white/50' : '';

  const textAlign = variant === 'center' ? 'text-left md:text-center' : variant === 'right' ? 'text-right' : 'text-left';

  const justify = variant === 'center' ? 'justify-center' : variant === 'right' ? 'justify-end' : 'justify-start';

  const contentAnchor = variant === 'right' ? 'ml-auto' : variant === 'center' ? 'mx-auto' : '';

  const topButtons = [
    { text: buttonTopOne, link: buttonTopOneLink },
    { text: buttonTopTwo, link: buttonTopTwoLink },
    { text: buttonTopThree, link: buttonTopThreeLink },
    { text: buttonTopFour, link: buttonTopFourLink },
  ].filter(({ text }) => Boolean(text));

  const computedBackgroundAlt = backgroundImageAlt || (typeof title === 'string' ? title : undefined) || (backgroundImage ? getFallbackAltFromImagePath(backgroundImage) : undefined) || '';

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      aria-describedby={description ? 'hero-description' : undefined}
      className={
        isTools
          ? `relative ${baseBg} flex h-auto items-center overflow-hidden pt-4 pb-2 md:pt-7`
          : `relative ${baseBg} flex h-auto min-h-[400px] items-center overflow-hidden py-10 md:min-h-[440px] md:py-0 lg:min-h-[460px]`
      }
    >
      {hasBg && backgroundImage && (
        <Image
          src={backgroundImage}
          alt={computedBackgroundAlt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
          itemProp={emitImageMicrodata ? 'image' : undefined}
          unoptimized
        />
      )}
      {hasBg && overlay !== 'none' && <div aria-hidden="true" className={`absolute inset-0 ${overlayClass}`} />}
      <Wrapper className="relative flex h-auto items-center">
        <div
          className={`max-w-[100vw] ${isTools ? 'text-center md:w-[100%]' : 'md:max-w-[65%]'} ${contentAnchor} ${textAlign} ${toneTextClass} ${isTools ? '' : 'rounded-2xl p-5 pt-4 md:p-7'} ${contentBgClass} hyphens-auto`}
        >
          {subtitle && (
            <Eyebrow variant="hero" className={` ${toneMutedClass}`}>
              {subtitle}
            </Eyebrow>
          )}
          {topButtons.length > 0 && (
            <nav aria-label="Szybkie linki" className="mt-4">
              <ul className={`max-w-[92vw] ${justify} flex flex-wrap gap-2 md:gap-3`}>
                {topButtons.map(({ text, link }, i) => (
                  <li key={i}>
                    <Button size="small" link={link}>
                      {text as ReactNode}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {title && (
            <h1 id="hero-title" className={`text-wrap:pretty text-wrap ${isTools ? 'h4 text-center' : ''}`}>
              {title}
            </h1>
          )}
          {description && (
            <p id="hero-description" className={`text-wrap:pretty ${isTools ? 'mt-2 text-center md:mt-3' : 'mt-3 md:mt-5'} text-base leading-relaxed ${isDarkOverlay ? 'text-white' : 'text-mid'}`}>
              {description}
            </p>
          )}
          {(buttonAccent || buttonSecond) && (
            <ButtonGroup
              btnOne={buttonAccent}
              btnOneLink={buttonAccentLink}
              btnOneVariant="accent"
              btnTwo={buttonSecond}
              btnTwoLink={buttonSecondLink}
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
