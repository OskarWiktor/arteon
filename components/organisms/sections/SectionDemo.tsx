import { useId, type ReactNode } from 'react';
import { cn } from '@/lib/clsx';
import { columnGapClasses, flexCenterClasses } from '@/lib/uiClasses';
import SectionHeader from '../../molecules/SectionHeader';

type Variant = 'left' | 'right';

interface SectionDemoProps {
  id?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  demo: ReactNode;
  variant?: Variant;
  children?: ReactNode;
}

export default function SectionDemo({
  id,
  title,
  subtitle,
  description,
  demo,
  variant = 'right',
  children,
}: SectionDemoProps) {
  const autoId = useId();
  const headingId = id || `section-demo-${autoId}`;

  return (
    <section id={id} aria-labelledby={headingId} className='w-full'>
      <div className={cn('flex flex-col lg:flex-row', columnGapClasses)}>
        <div
          className={cn('w-full lg:w-2/5', flexCenterClasses, {
            'lg:order-2': variant === 'left',
          })}
        >
          <div className='w-full rounded-lg border border-neutral-200 bg-neutral-50 p-4 md:p-6'>
            {demo}
          </div>
        </div>

        <div
          className={cn('flex w-full lg:w-3/5', {
            'lg:order-1': variant === 'left',
          })}
        >
          <div
            className={cn('flex h-full flex-col justify-center', {
              'lg:pl-2': variant === 'right',
              'lg:pr-2': variant === 'left',
            })}
          >
            <SectionHeader
              subtitle={subtitle}
              title={title}
              description={description}
              titleClassName='h5'
              titleId={headingId}
            />

            {children && <div className='text-balance'>{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
