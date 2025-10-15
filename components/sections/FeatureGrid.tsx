import { ReactNode } from 'react';
import FeatureCard from '../ui/FeatureCard';

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
}

export default function FeatureGrid({ title, subtitle, description, items }: FeatureGridProps) {
  const sectionId = `featuregrid-${String(title)
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')}`;

  return (
    <section id={sectionId} aria-labelledby={`${sectionId}-h`} {...{ itemScope: true, itemType: 'https://schema.org/ItemList' }}>
      {subtitle && (
        <p id={`${sectionId}-sub`} className="text-base tracking-wider text-[#5e5e5e] uppercase">
          {subtitle}
        </p>
      )}
      <h2 id={`${sectionId}-h`} className="reveal-animation">
        {title}
      </h2>
      {description && <p className="reveal-animation mt-3">{description}</p>}

      <ul className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 lg:mt-10" role="list">
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
