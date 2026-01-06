import type { ReactNode } from 'react';
import FeatureCard from '../ui/FeatureCard';
import SectionHeader from '../ui/typography/SectionHeader';

export type FeatureItem = {
  title: string;
  description?: ReactNode;
  points?: string[];
  icon?: ReactNode;
};

interface FeatureGridProps {
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  items: FeatureItem[];
  columns?: 2 | 3;
}

export default function FeatureGrid({ title, subtitle, description, items, columns = 2 }: FeatureGridProps) {
  const sectionId = `featuregrid-${String(title)
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')}`;

  return (
    <section id={sectionId} aria-labelledby={`${sectionId}-h`} {...{ itemScope: true, itemType: 'https://schema.org/ItemList' }}>
      <SectionHeader
        subtitle={subtitle}
        title={title}
        description={description}
        headingLevel="h2"
        eyebrowClassName=""
        subtitleId={`${sectionId}-sub`}
        headingClassName="reveal-animation h4"
        titleId={`${sectionId}-h`}
        descriptionClassName="reveal-animation mt-3"
      />

      <ul className={`mt-6 grid gap-4 md:mt-8 lg:mt-10 ${columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`} role="list">
        {items.map((item, idx) => (
          <li className="h-full" key={idx} {...{ itemProp: 'itemListElement', itemScope: true, itemType: 'https://schema.org/ListItem' }}>
            <meta itemProp="position" content={(idx + 1).toString()} />
            <FeatureCard idx={idx} {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
