import type { ReactNode } from 'react';
import FeatureCard from '../ui/FeatureCard';
import SectionHeader from '../ui/typography/SectionHeader';
import type { FeatureItem } from '@/types/ui';
export type { FeatureItem } from '@/types/ui';

interface FeatureGridProps {
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  items: FeatureItem[];
  columns?: 2 | 3 | 4 | 6 | 8;
  variant?: 'default' | 'centered';
}

const GRID_CLASSES: Record<2 | 3 | 4 | 6 | 8, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
  6: 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  8: 'sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8',
};

export default function FeatureGrid({ title, subtitle, description, items, columns = 2, variant = 'default' }: FeatureGridProps) {
  const sectionId = `featuregrid-${String(title)
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')}`;

  const gridClasses = GRID_CLASSES[columns];

  return (
    <section id={sectionId} aria-labelledby={`${sectionId}-h`} {...{ itemScope: true, itemType: 'https://schema.org/ItemList' }}>
      <SectionHeader
        subtitle={subtitle}
        title={title}
        description={description}
        subtitleId={`${sectionId}-sub`}
        titleId={`${sectionId}-h`}
      />

      <ul className={`grid gap-4 ${gridClasses}`}>
        {items.map((item, idx) => (
          <li className="h-full" key={idx} {...{ itemProp: 'itemListElement', itemScope: true, itemType: 'https://schema.org/ListItem' }}>
            <meta itemProp="position" content={(idx + 1).toString()} />
            <FeatureCard idx={idx} {...item} variant={variant} />
          </li>
        ))}
      </ul>
    </section>
  );
}
