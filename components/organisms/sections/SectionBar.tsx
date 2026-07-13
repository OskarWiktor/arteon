import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';

interface SectionBarProps {
  title: string;
  description?: ReactNode;
  id?: string;
  className?: string;
}

/**
 * A full-width heading bar in the blue (primary) card colours — a light title
 * with an optional description on a navy background. Designed to sit above a
 * bare {@link FeatureGrid} (e.g. the homepage guarantees block).
 */
export default function SectionBar({
  title,
  description,
  id,
  className,
}: SectionBarProps) {
  return (
    <div
      id={id}
      className={cn(
        'rounded-lg bg-primary p-6 text-on-dark md:p-10',
        className,
      )}
    >
      <h2 className='h3 text-on-dark'>{title}</h2>
      {description && <p className='mt-2 text-on-dark!'>{description}</p>}
    </div>
  );
}
