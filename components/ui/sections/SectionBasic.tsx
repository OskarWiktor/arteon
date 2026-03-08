import { useId, type ReactNode } from 'react';
import Image from 'next/image';
import SectionHeader from '../typography/SectionHeader';
import ButtonGroup from '../buttons/ButtonGroup';

type Variant = 'left' | 'right';

interface SectionBasicProps {
  id?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  variant?: Variant;
  children?: ReactNode;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
}

export default function SectionBasic({ id, title, subtitle, description, imageSrc, imageAlt, variant = 'right', children, btnOne, btnOneLink, btnTwo, btnTwoLink }: SectionBasicProps) {
  const autoId = useId();
  const headingId = id || `section-basic-${autoId}`;

  return (
    <section id={id} aria-labelledby={headingId} className="w-full">
      <div className="flex flex-col md:gap-4 lg:flex-row lg:gap-8">
        <div className={`flex w-full lg:w-1/2 ${variant === 'left' ? 'lg:order-2' : ''}`}>
          <div className="relative h-full min-h-[420px] w-full">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
        </div>

        <div className={`flex w-full lg:w-1/2 ${variant === 'left' ? 'lg:order-1' : ''}`}>
          <div className={`flex h-full flex-col justify-center py-6 md:py-8 lg:py-8 ${variant === 'right' ? 'lg:pl-6' : 'lg:pr-6'}`}>
            <SectionHeader subtitle={subtitle} title={title} description={description} headingLevel="h2" headingClassName="" descriptionClassName="" titleId={headingId} />

            {children && <div className="text-balance">{children}</div>}

            <ButtonGroup btnOne={btnOne} btnOneLink={btnOneLink} btnTwo={btnTwo} btnTwoLink={btnTwoLink} spacing="loose" role="group" />
          </div>
        </div>
      </div>
    </section>
  );
}
