import Image from 'next/image';
import type { ReactNode } from 'react';
import SectionHeader from '@/components/molecules/SectionHeader';
import { flexCenterClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/clsx';
import ButtonLink from '../../atoms/buttons/ButtonLink';

type BentoItemSize = 'small' | 'medium' | 'large';

interface BentoItem {
  title: string;
  description?: string;
  icon?: ReactNode;
  size: BentoItemSize;
  backgroundImage: string;
  btnLabel?: string;
  btnLink?: string;
}

interface SectionBentoProps {
  title?: string;
  items: BentoItem[];
}

const BentoItemSizeClasses: Record<BentoItemSize, string> = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-2 row-span-1',
  large: 'col-span-2 row-span-2',
};

export default function SectionBento({ title, items }: SectionBentoProps) {
  return (
    <section
      data-section='bento'
      aria-labelledby={title ? 'bento-title' : undefined}
    >
      {title && <SectionHeader title={title} />}

      <div className='grid auto-rows-[240px] grid-cols-2 gap-3 md:grid-cols-4'>
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={cn(
                'relative flex flex-col justify-end overflow-hidden rounded-lg',
                {
                  [BentoItemSizeClasses[item.size]]: true,
                },
              )}
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
                className='absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/10'
                aria-hidden='true'
              />

              <div className='relative z-10 p-4'>
                {item.icon && (
                  <div
                    className={cn(
                      'mb-2 h-9 w-9 rounded-md bg-white/20 text-white',
                      flexCenterClasses,
                    )}
                  >
                    {item.icon}
                  </div>
                )}
                <h3
                  className={cn('mb-1 text-white', {
                    h5: item.size === 'large',
                    h6: item.size !== 'large',
                  })}
                >
                  {item.title}
                </h3>
                <p className='text-sm text-white/80'>{item.description}</p>
                {item.btnLabel && item.btnLink && (
                  <ButtonLink
                    href={item.btnLink}
                    variant='accent'
                    className='mt-3'
                  >
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
