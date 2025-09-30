'use client';

import Button from '../ui/Button';
import { ReactNode } from 'react';
import Wrapper from '../ui/Wrapper';

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
  variant?: 'left' | 'center' | 'right';
  overlay?: 'none' | 'black' | 'white';
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
  variant = 'left',
  overlay = 'none',
}: HeroBannerProps) {
  const hasBg = Boolean(backgroundImage);

  const overlayClass = overlay === 'black' ? 'bg-black/70' : overlay === 'white' ? 'bg-white/80' : '';

  const toneTextClass = overlay === 'black' ? 'text-white' : 'text-[#080808]';
  const toneMutedClass = overlay === 'black' ? 'text-white' : 'text-[#080808]/80';

  const baseBg = overlay === 'black' ? 'bg-black' : 'bg-white';
  const contentBgClass = overlay === 'black' ? 'bg-[#0000004a]' : overlay === 'white' ? 'bg-white/50' : '';

  const textAlign = variant === 'center' ? 'text-left md:text-center' : variant === 'right' ? 'text-right' : 'text-left';

  const justify = variant === 'center' ? 'justify-center' : variant === 'right' ? 'justify-end' : 'justify-start';

  const contentAnchor = variant === 'right' ? 'ml-auto' : variant === 'center' ? 'mx-auto' : '';

  const topButtons = [
    { text: buttonTopOne, link: buttonTopOneLink },
    { text: buttonTopTwo, link: buttonTopTwoLink },
    { text: buttonTopThree, link: buttonTopThreeLink },
    { text: buttonTopFour, link: buttonTopFourLink },
  ].filter(({ text }) => Boolean(text));

  return (
    <div className={baseBg}>
      <section
        id="hero"
        aria-labelledby="hero-title"
        aria-describedby={description ? 'hero-description' : undefined}
        className={`relative ${hasBg ? 'bg-cover bg-center' : ''} ${baseBg} flex h-auto min-h-[460px] items-center overflow-hidden py-10 md:py-0`}
        style={hasBg ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      >
        {hasBg && overlay !== 'none' && <div aria-hidden="true" className={`absolute inset-0 ${overlayClass}`} />}
        <Wrapper className="relative flex h-auto items-center">
          <div className={`max-w-[100vw] md:max-w-[65%] ${contentAnchor} ${textAlign} ${toneTextClass} rounded-2xl p-4 pt-0 md:p-5 lg:p-7 ${contentBgClass} hyphens-auto`}>
            {subtitle && <p className={`text-base tracking-wide uppercase sm:text-lg ${toneMutedClass}`}>{subtitle}</p>}
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
            {title && <h1 id="hero-title">{title}</h1>}
            {description && (
              <p id="hero-description" className={`mt-3 md:mt-5 text-base leading-relaxed sm:text-lg ${toneMutedClass} max-w-prose [text-wrap:pretty]`}>
                {description}
              </p>
            )}
            {(buttonAccent || buttonSecond) && (
              <div className={`mt-6 md:mt-8 flex flex-wrap gap-3 ${justify}`}>
                {buttonAccent && (
                  <Button arrow link={buttonAccentLink}>
                    {buttonAccent}
                  </Button>
                )}
                {buttonSecond && (
                  <Button arrow variant="accent" link={buttonSecondLink}>
                    {buttonSecond}
                  </Button>
                )}
              </div>
            )}
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
