import { useId, type ReactNode } from 'react';
import Image from 'next/image';
import SectionHeader from '../../molecules/SectionHeader';
import ButtonGroup from '../../molecules/ButtonGroup';

interface SectionBasicProps {
  id?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  variant?: 'left' | 'right';
  children?: ReactNode;
  btnOne?: string;
  btnOneHref?: string;
  btnTwo?: string;
  btnTwoHref?: string;
}

export default function SectionBasic({
  id,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  variant = 'right',
  children,
  btnOne,
  btnOneHref,
  btnTwo,
  btnTwoHref,
}: SectionBasicProps) {
  const autoId = useId();
  const headingId = id || `section-basic-${autoId}`;

  return (
    <section id={id} aria-labelledby={headingId} className='w-full'>
      <div className='flex flex-col md:gap-4 lg:flex-row lg:gap-8'>
        <div className={`flex w-full lg:w-1/2 ${variant === 'left' ? 'lg:order-2' : ''}`}>
          <div className='relative aspect-[4/3] w-full'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className='object-cover'
              sizes='(min-width:1024px) 50vw, 100vw'
            />
          </div>
        </div>

        <div className={`flex w-full lg:w-1/2 ${variant === 'left' ? 'lg:order-1' : ''}`}>
          <div
            className={`flex h-full flex-col justify-center py-6 md:py-8 lg:py-8 ${variant === 'right' ? 'lg:pl-6' : 'lg:pr-6'}`}
          >
            <SectionHeader
              subtitle={subtitle}
              title={title}
              description={description}
              titleId={headingId}
            />

            {children && <div className='text-balance'>{children}</div>}

            <ButtonGroup
              btnOne={btnOne}
              btnOneHref={btnOneHref}
              btnTwo={btnTwo}
              btnTwoHref={btnTwoHref}
              spacing='loose'
              role='group'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
