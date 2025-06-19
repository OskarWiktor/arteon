import { ReactNode } from 'react';
import Wrapper from './Wrapper';

interface SectionBasicProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  variant?: 'left' | 'right';
  children?: ReactNode;
}

export default function SectionBasic({ title, description, imageSrc, imageAlt, variant = 'right', children }: SectionBasicProps) {
  return (
    <section className="mt-20 flex w-full bg-gray-300">
      <Wrapper className={`flex lg:flex-row ${variant === 'left' ? 'flex-col-reverse' : 'flex-col'}`}>
        <div className="w-full lg:w-1/2">
          {variant === 'left' && (
            <div className="flex flex-col p-4 md:px-8 lg:px-8">
              <h3 className="text-4xl font-semibold">{title}</h3>
              <p className="mt-4">{description}</p>
              {children}
            </div>
          )}
          {variant === 'right' && (
            <div className="flex flex-col">
              <img src={imageSrc} alt={imageAlt} className="h-auto w-full" />
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/2">
          {variant === 'right' && (
            <div className="flex flex-col p-4 md:px-8 lg:px-8">
              <h3 className="text-4xl font-semibold">{title}</h3>
              <p className="mt-4">{description}</p>
              {children}
            </div>
          )}
          {variant === 'left' && (
            <div className="flex flex-col">
              <img src={imageSrc} alt={imageAlt} className="h-auto w-full" />
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  );
}
