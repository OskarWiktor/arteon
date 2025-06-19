import { RiArrowRightSLine } from 'react-icons/ri';
import Button from '../ui/Button';
import Link from 'next/link';

interface HeroBannerProps {
  subtitle?: string;
  title: string;
  description?: string;
  buttonAccent?: string;
  buttonAccentLink?: string;
  buttonSecond?: string;
  buttonSecondLink?: string;
  backgroundImage?: string;
}

export default function HeroBanner({ subtitle, title, description, buttonAccent, buttonAccentLink, buttonSecond, buttonSecondLink, backgroundImage }: HeroBannerProps) {
  return (
    <section className={`flex h-[520px] w-full ${backgroundImage ? 'bg-cover bg-center' : ''}`} style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}>
      <div className="mt-auto mb-auto flex w-full flex-col items-center">
        {subtitle && <p className="italic">{subtitle}</p>}
        <h1 className="font-serif text-7xl">{title}</h1>
        {description && <p className="mt-6">{description}</p>}
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
      </div>
    </section>
  );
}
