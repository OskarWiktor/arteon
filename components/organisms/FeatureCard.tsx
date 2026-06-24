import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';
import { flexCenterClasses } from '@/lib/uiClasses';
import Card from './Card';

type FeatureCardProps = {
  idx?: number;
  title: string;
  description?: ReactNode;
  points?: string[];
  icon?: ReactNode;
  variant?: 'default' | 'centered';
};

/**
 * Render a feature card section with a title, optional description, optional point list, and optional icon.
 *
 * @param idx - Index appended to generated IDs to ensure uniqueness (default: `0`)
 * @param title - Heading text for the feature; used to generate the element IDs
 * @param description - Optional descriptive content displayed under the title
 * @param points - Optional list of short feature points rendered as list items
 * @param icon - Optional override for the icon displayed; when omitted a small dot is used
 * @param variant - Layout variant: `'centered'` renders a vertically centered card, `'default'` renders a horizontal card (default: `'default'`)
 * @returns A React element representing the feature card section with appropriate accessibility attributes and microdata
 */
export default function FeatureCard({
  idx = 0,
  title,
  description,
  points,
  icon,
  variant = 'default',
}: FeatureCardProps) {
  const base = String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-');
  const headingId = `feature-${base}-${idx}`;
  const descId = description ? `feature-desc-${base}-${idx}` : undefined;

  const displayIcon = icon || (
    <span className='inline-block h-2 w-2 rounded-xs bg-black' />
  );

  if (variant === 'centered') {
    return (
      <Card
        as='section'
        aria-labelledby={headingId}
        aria-describedby={descId}
        className={cn('h-full flex-col!', flexCenterClasses)}
        {...{ itemScope: true, itemType: 'https://schema.org/Thing' }}
      >
        <div
          className={cn(
            'mb-3 h-12 w-12 rounded-lg bg-primary-light text-primary',
            flexCenterClasses,
          )}
        >
          {displayIcon}
        </div>
        <h3 id={headingId} className='h6 mb-1 text-dark' itemProp='name'>
          {title}
        </h3>

        {description && (
          <div
            id={descId}
            className='text-left text-[15px] leading-6 text-light'
            itemProp='description'
          >
            {description}
          </div>
        )}

        {Array.isArray(points) && points.length > 0 && (
          <ul className='mt-2 space-y-2'>
            {points.map((pt, i) => (
              <li key={i} className={cn('gap-1', flexCenterClasses)}>
                <span className='text-base text-light'>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    );
  }

  return (
    <Card
      as='section'
      aria-labelledby={headingId}
      aria-describedby={descId}
      className='flex h-full gap-4'
      {...{ itemScope: true, itemType: 'https://schema.org/Thing' }}
    >
      <div
        className={cn(
          'h-12 w-12 shrink-0 rounded-lg bg-primary-light text-primary',
          flexCenterClasses,
        )}
      >
        {displayIcon}
      </div>
      <div className='flex flex-col'>
        <h3 id={headingId} className='h6 mb-1 text-dark' itemProp='name'>
          {title}
        </h3>

        {description && (
          <div
            id={descId}
            className='text-[15px] leading-6 text-light'
            itemProp='description'
          >
            {description}
          </div>
        )}

        {Array.isArray(points) && points.length > 0 && (
          <ul className='mt-2 space-y-2'>
            {points.map((pt, i) => (
              <li key={i} className={cn('gap-1', flexCenterClasses)}>
                <span className='text-base text-light'>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}
