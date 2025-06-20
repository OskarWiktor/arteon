'use client';

import { RiArrowRightSLine } from 'react-icons/ri';
import Button from '../ui/Button';
import Link from 'next/link';
import FadeInOnView from '../animations/FadeInOnView';
import SlideInOnView from '../animations/SlideInOnView';
import { useId } from 'react';

interface HeroBannerProps {
  buttonTopOne?: string;
  buttonTopOneLink?: string;
  buttonTopTwo?: string;
  buttonTopTwoLink?: string;
  buttonTopThree?: string;
  buttonTopThreeLink?: string;
  buttonTopFour?: string;
  buttonTopFourLink?: string;
  subtitle?: string;
  title: string;
  description?: string;
  buttonAccent?: string;
  buttonAccentLink?: string;
  buttonSecond?: string;
  buttonSecondLink?: string;
  backgroundImage?: string;
  variant?: 'left' | 'center' | 'right';
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
  variant = 'center',
}: HeroBannerProps) {
  const alignmentClass = variant === 'center' ? 'text-center items-center' : variant === 'right' ? 'text-right items-end' : 'text-left items-start';
  const justifyClass = variant === 'center' ? 'justify-center' : variant === 'right' ? 'justify-end' : 'justify-start';

  const titleId = useId();
  const descId = useId();

  return (
    <FadeInOnView>
      <section
        className={`flex h-[520px] w-full ${backgroundImage ? 'bg-cover bg-center' : ''}`}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
        aria-labelledby={titleId}
        aria-describedby={description ? descId : undefined}
        role="region"
      >
        <div className={`mt-auto mb-auto flex w-full flex-col px-4 md:px-8 ${alignmentClass}`} role="group" aria-labelledby={titleId} aria-describedby={description ? descId : undefined}>
          <SlideInOnView>
            {subtitle && (
              <p className="text-sm text-gray-700 italic md:text-base" aria-label="Podtytuł" tabIndex={0}>
                {subtitle}
              </p>
            )}

            {(buttonTopOne || buttonTopTwo || buttonTopThree || buttonTopFour) && (
              <div className={`mt-4 flex flex-wrap gap-4 ${justifyClass}`}>
                {[
                  { text: buttonTopOne, link: buttonTopOneLink },
                  { text: buttonTopTwo, link: buttonTopTwoLink },
                  { text: buttonTopThree, link: buttonTopThreeLink },
                  { text: buttonTopFour, link: buttonTopFourLink },
                ]
                  .filter(({ text }) => !!text)
                  .map(({ text, link }, i) => (
                    <Button key={i}>{link ? <Link href={link}>{text}</Link> : <span>{text}</span>}</Button>
                  ))}
              </div>
            )}

            <h1 id={titleId} className="mt-6 font-medium text-4xl md:text-6xl" tabIndex={0} aria-label="Nagłówek sekcji">
              {title}
            </h1>

            {description && (
              <p id={descId} className="mt-4 max-w-2xl text-base text-gray-800 md:text-lg" aria-label="Opis" tabIndex={0}>
                {description}
              </p>
            )}

            {(buttonAccent || buttonSecond) && (
              <div className={`mt-10 flex flex-wrap gap-4 ${justifyClass}`}>
                {buttonAccent && (
                  <Button variant="accent">
                    {buttonAccentLink ? <Link href={buttonAccentLink}>{buttonAccent}</Link> : <span>{buttonAccent}</span>}
                    <RiArrowRightSLine className="h-4 w-4" />
                  </Button>
                )}
                {buttonSecond && (
                  <Button>
                    {buttonSecondLink ? <Link href={buttonSecondLink}>{buttonSecond}</Link> : <span>{buttonSecond}</span>}
                    <RiArrowRightSLine className="h-4 w-4" />
                  </Button>
                )}
              </div>
            )}
          </SlideInOnView>
        </div>
      </section>
    </FadeInOnView>
  );
}
