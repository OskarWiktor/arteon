'use client';

import { RiArrowRightSLine } from 'react-icons/ri';
import Button from '../ui/Button';
import Link from 'next/link';
import { ReactNode } from 'react';

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

  return (
    <section
      className={`flex h-fit min-h-[320px] w-full md:h-[380px] lg:h-[520px] ${backgroundImage ? 'bg-cover bg-center' : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      role="region"
    >
      <div className={`my-auto flex w-full flex-col px-4 md:px-8 ${alignmentClass}`} role="group">
        {subtitle && (
          <span className="italic" tabIndex={0}>
            {subtitle}
          </span>
        )}

        {(buttonTopOne || buttonTopTwo || buttonTopThree || buttonTopFour) && (
          <div className={`mt-4 flex flex-wrap gap-2 md:gap-4 ${justifyClass}`}>
            {[
              { text: buttonTopOne, link: buttonTopOneLink },
              { text: buttonTopTwo, link: buttonTopTwoLink },
              { text: buttonTopThree, link: buttonTopThreeLink },
              { text: buttonTopFour, link: buttonTopFourLink },
            ]
              .filter(({ text }) => !!text)
              .map(({ text, link }, i) => (
                <Button variant="minimal" key={i}>
                  {link ? <Link href={link}>{text}</Link> : <span>{text}</span>}
                </Button>
              ))}
          </div>
        )}

        <h1 className="mt-4 lg:mt-6" tabIndex={0}>
          {title}
        </h1>

        {description && (
          <h5 className="my-2 md:my-4" tabIndex={0}>
            {description}
          </h5>
        )}

        {(buttonAccent || buttonSecond) && (
          <div className={`mt-4 flex flex-wrap gap-4 ${justifyClass}`}>
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
      </div>
    </section>
  );
}
