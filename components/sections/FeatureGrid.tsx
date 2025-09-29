import { ReactNode } from 'react';
import FeatureCard from '../ui/FeatureCard';

export type FeatureItem = {
  title: string;
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
  return (
    <section>
      {subtitle && <span className="text-base tracking-wider uppercase text-[#5e5e5e]">{subtitle}</span>}
      <h2 className="md:mt-2">{title}</h2>
      {description && <p className="mt-3">{description}</p>}

      <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 lg:mt-10">
        {items.map((item, idx) => (
          <FeatureCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
