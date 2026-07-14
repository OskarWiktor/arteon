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
  variant?: 'centered' | 'bare';
};

/**
 * Render a feature card: a vertically centered panel with an icon, title,
 * optional description and optional point list.
 *
 * @param idx - Index appended to generated IDs to ensure uniqueness (default: `0`)
 * @param title - Heading text for the feature; used to generate the element IDs
 * @param description - Optional descriptive content displayed under the title
 * @param points - Optional list of short feature points rendered as list items
 * @param icon - Optional override for the icon displayed; when omitted a small dot is used
 * @param variant - `'centered'` (default) is the centered card with a white background; `'bare'` is the same card without its background/shadow
 * @returns A React element representing the feature card section with appropriate accessibility attributes and microdata
 */
export default function FeatureCard({
  idx = 0,
  title,
  description,
  points,
  icon,
  variant = 'centered',
}: FeatureCardProps) {
  const base = String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-');
  const headingId = `feature-${base}-${idx}`;
  const descId = description ? `feature-desc-${base}-${idx}` : undefined;

  const displayIcon = icon || (
    <span className='inline-block h-6 w-6 rounded-xs bg-black' />
  );

  return (
    <Card
      as='section'
      aria-labelledby={headingId}
      aria-describedby={descId}
      padding='md'
      interactive={variant !== 'bare'}
      className={cn(
        'h-full flex-col! gap-3',
        // Identical to the centered card, only without the surface: no
        // background and no shadow.
        variant === 'bare' && 'bg-transparent shadow-none',
        flexCenterClasses,
      )}
      {...{ itemScope: true, itemType: 'https://schema.org/Thing' }}
    >
      <div
        className={cn(
          'h-16 w-16 rounded-lg bg-primary-light text-primary',
          flexCenterClasses,
        )}
      >
        {displayIcon}
      </div>
      <h3
        id={headingId}
        className='h5 font-semibold! text-dark'
        itemProp='name'
      >
        {title}
      </h3>

      {description && (
        <div id={descId} className='text-left leading-6' itemProp='description'>
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
