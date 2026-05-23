import type { ReactNode } from 'react';
import Image from 'next/image';
import ButtonLink from '../../atoms/buttons/ButtonLink';

interface BentoItem {
  title: string;
  description?: string;
  icon?: ReactNode;
  size: 'small' | 'medium' | 'large';
  backgroundImage: string;
  btnLabel?: string;
  btnLink?: string;
}

interface SectionBentoProps {
  title?: string;
  items: BentoItem[];
}

export default function SectionBento({ title, items }: SectionBentoProps) {
  return (
    <section data-section='bento' aria-labelledby={title ? 'bento-title' : undefined}>
      {title && (
        <h2 id='bento-title' className='h3 mb-4 lg:mb-6'>
          {title}
        </h2>
      )}

      <div className='grid auto-rows-[240px] grid-cols-2 gap-3 md:grid-cols-4'>
        {items.map((item, index) => {
          const sizeClass =
            item.size === 'large'
              ? 'col-span-2 row-span-2'
              : item.size === 'medium'
                ? 'col-span-2'
                : '';

          return (
            <div
              key={index}
              className={`relative flex flex-col justify-end overflow-hidden rounded-lg ${sizeClass}`}
            >
              <Image
                src={item.backgroundImage}
                alt={item.title}
                fill
                className='object-cover'
                sizes='(min-width:1024px) 50vw, 100vw'
                aria-hidden='true'
              />
              <div
                className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10'
                aria-hidden='true'
              />

              <div className='relative z-10 p-4'>
                {item.icon && (
                  <div className='mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-white/20 text-white'>
                    {item.icon}
                  </div>
                )}
                <h3 className={item.size === 'large' ? 'h5 mb-1 text-white' : 'h6 mb-1 text-white'}>
                  {item.title}
                </h3>
                <p className='text-sm text-white/80'>{item.description}</p>
                {item.btnLabel && item.btnLink && (
                  <ButtonLink href={item.btnLink} variant='accent' className='mt-3'>
                    {item.btnLabel}
                  </ButtonLink>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
