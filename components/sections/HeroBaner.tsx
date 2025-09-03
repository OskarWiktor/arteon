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
  title: ReactNode;
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

  const baseBg = overlay === 'black' ? 'bg-neutral-900' : 'bg-white';
  const contentBgClass = overlay === 'black' ? 'bg-black/60' : overlay === 'white' ? 'bg-white/80' : '';

  const textAlign = variant === 'center' ? 'text-center' : variant === 'right' ? 'text-right' : 'text-left';

  const justify = variant === 'center' ? 'justify-center' : variant === 'right' ? 'justify-end' : 'justify-start';

  const contentAnchor = variant === 'right' ? 'ml-auto' : variant === 'center' ? 'mx-auto' : '';

  const topButtons = [
    { text: buttonTopOne, link: buttonTopOneLink },
    { text: buttonTopTwo, link: buttonTopTwoLink },
    { text: buttonTopThree, link: buttonTopThreeLink },
    { text: buttonTopFour, link: buttonTopFourLink },
  ].filter(({ text }) => Boolean(text));

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      aria-describedby={description ? 'hero-description' : undefined}
      className={`relative ${hasBg ? 'bg-cover bg-center' : ''} ${baseBg} flex h-[540px] items-center overflow-hidden`}
      style={hasBg ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {hasBg && overlay !== 'none' && <div aria-hidden="true" className={`absolute inset-0 ${overlayClass}`} />}
      <Wrapper className="relative flex h-[540px] items-center">
        <div className={`md:max-w-[65%] ${contentAnchor} ${textAlign} ${toneTextClass} rounded-2xl p-5 md:p-7 ${contentBgClass}`}>
          {' '}
          {subtitle && <p className={`text-xl tracking-widest uppercase ${toneMutedClass}`}>{subtitle}</p>}
          {topButtons.length > 0 && (
            <nav aria-label="Szybkie linki" className="mt-4">
              <ul className={`flex flex-wrap gap-2 md:gap-3 ${justify}`}>
                {topButtons.map(({ text, link }, i) => (
                  <li key={i}>
                    <Button variant="glass" size="small" link={link}>
                      {text as ReactNode}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <h1 id="hero-title">{title}</h1>
          {description && (
            <p id="hero-description" className={`mt-5 text-lg leading-relaxed ${toneMutedClass}`}>
              {description}
            </p>
          )}
          {(buttonAccent || buttonSecond) && (
            <div className={`mt-8 flex flex-wrap gap-3 ${justify}`}>
              {buttonAccent && (
                <Button arrow variant="accent" link={buttonAccentLink}>
                  {buttonAccent}
                </Button>
              )}
              {buttonSecond && (
                <Button arrow link={buttonSecondLink}>
                  {buttonSecond}
                </Button>
              )}
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  );
}
