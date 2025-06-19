import { RiArrowRightSLine } from 'react-icons/ri';
import Button from '../ui/Button';
import Link from 'next/link';
import FadeInOnView from '../animations/FadeInOnView';
import SlideInOnView from '../animations/SlideInOnView';

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
  variant?: 'left' | 'center' | 'right'
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
  variant = 'center'
}: HeroBannerProps) {
  return (
    <FadeInOnView>
      <section className={`flex h-[520px] w-full ${backgroundImage ? 'bg-cover bg-center' : ''}`} style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}>
        <div className="mt-auto mb-auto flex w-full flex-col items-center px-4 md:px-8">
          <SlideInOnView>
            {subtitle && <p className={`italic ${variant === 'center' ? 'text-center' : variant === 'right' ? 'text-right' : 'text-left'}`}>{subtitle}</p>}
            {buttonTopOne && (
              <div className={`flex gap-6 ${variant === 'center' ? 'justify-center' : variant === 'right' ? 'justify-end' : 'justify-start'}`}>
                <Button>{buttonTopOneLink ? <Link href={buttonTopOneLink}>{buttonTopOne}</Link> : <p>{buttonTopOne}</p>}</Button>
                {buttonTopTwo && <Button>{buttonTopTwoLink ? <Link href={buttonTopTwoLink}>{buttonTopTwo}</Link> : <p>{buttonTopTwo}</p>}</Button>}
                {buttonTopThree && <Button>{buttonTopThreeLink ? <Link href={buttonTopThreeLink}>{buttonTopThree}</Link> : <p>{buttonTopThree}</p>}</Button>}
                {buttonTopFour && <Button>{buttonTopFourLink ? <Link href={buttonTopFourLink}>{buttonTopFour}</Link> : <p>{buttonTopFour}</p>}</Button>}
              </div>
            )}
            <h1 className={`font-serif text-7xl ${variant === 'center' ? 'text-center' : variant === 'right' ? 'text-right' : 'text-left'}`}>{title}</h1>
            {description && <p className={`mt-6 ${variant === 'center' ? 'text-center' : variant === 'right' ? 'text-right' : 'text-left'}`}>{description}</p>}
            <div className="mt-10 flex gap-6">
              {buttonAccent && (
                <Button variant="accent">
                  {buttonAccentLink ? <Link href={buttonAccentLink}>{buttonAccent}</Link> : <p>{buttonAccent}</p>}
                  <RiArrowRightSLine className="h-4 w-4" />
                </Button>
              )}
              {buttonSecond && (
                <Button>
                  {buttonSecondLink ? <Link href={buttonSecondLink}>{buttonSecond}</Link> : <p>{buttonSecond}</p>}
                  <RiArrowRightSLine className="h-4 w-4" />
                </Button>
              )}
            </div>
          </SlideInOnView>
        </div>
      </section>
    </FadeInOnView>
  );
}
