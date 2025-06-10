import { RiArrowRightSLine } from 'react-icons/ri';
import Button from '../ui/button';

interface HeroBannerProps {
  subtitle?: string;
  title: string;
  description?: string;
  buttonAccent?: string;
  buttonSecond?: string;
}

export default function HeroBanner({ subtitle, title, description, buttonAccent, buttonSecond }: HeroBannerProps) {
  return (
    <section className="mt-6 flex h-[520px] w-full">
      <div className="mt-auto mb-auto flex w-full flex-col items-center">
        {subtitle && <p className="italic">{subtitle}</p>}
        <h1 className="font-serif text-7xl">{title}</h1>
        {description && <p className="mt-6">{description}</p>}
        <div className="mt-10 flex gap-6">
          {buttonAccent && (
            <Button variant="accent">
              {buttonAccent}
              <RiArrowRightSLine className="h-4 w-4" />
            </Button>
          )}
          {buttonSecond && (
            <Button>
              {buttonSecond}
              <RiArrowRightSLine className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
