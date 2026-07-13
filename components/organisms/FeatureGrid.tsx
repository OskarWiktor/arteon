import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';
import { columnGapClasses } from '@/lib/uiClasses';
import FeatureCard from './FeatureCard';
import SectionHeader from '../molecules/SectionHeader';

type FeatureItem = {
  title: string;
  description?: ReactNode;
  points?: string[];
  icon?: ReactNode;
};

interface FeatureGridProps {
  /** Optional — omit when the heading is provided separately (e.g. a SectionBar above). */
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  items: FeatureItem[];
  columns?: 2 | 3 | 4 | 6 | 8;
  variant?: 'default' | 'centered' | 'bare';
}

const GRID_CLASSES: Record<2 | 3 | 4 | 6 | 8, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
  6: 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  8: 'sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8',
};

export default function FeatureGrid({
  title,
  subtitle,
  description,
  items,
  columns = 2,
  variant = 'default',
}: FeatureGridProps) {
  const sectionId = title
    ? `featuregrid-${String(title)
        .toString()
        .toLowerCase()
        .replace(/[^a-z0-9]+/gi, '-')}`
    : undefined;

  const gridClasses = GRID_CLASSES[columns];

  return (
    <section
      id={sectionId}
      aria-labelledby={sectionId ? `${sectionId}-h` : undefined}
      {...{ itemScope: true, itemType: 'https://schema.org/ItemList' }}
    >
      {title && (
        <SectionHeader
          subtitle={subtitle}
          title={title}
          description={description}
          subtitleId={sectionId ? `${sectionId}-sub` : undefined}
          titleId={`${sectionId}-h`}
        />
      )}

      <ul className={cn('grid', gridClasses, columnGapClasses)}>
        {items.map((item, idx) => (
          <li
            className='h-full'
            key={idx}
            {...{
              itemProp: 'itemListElement',
              itemScope: true,
              itemType: 'https://schema.org/ListItem',
            }}
          >
            <meta itemProp='position' content={(idx + 1).toString()} />
            <FeatureCard idx={idx} {...item} variant={variant} />
          </li>
        ))}
      </ul>
    </section>
  );
}
