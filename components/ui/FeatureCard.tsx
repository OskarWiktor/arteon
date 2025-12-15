import type { ReactNode } from 'react';
import IconText from './IconText';

type FeatureCardProps = {
  idx?: number;
  title: string;
  description?: ReactNode;
  points?: string[];
  icon?: ReactNode;
};

export default function FeatureCard({ idx = 0, title, description, points, icon }: FeatureCardProps) {
  const base = String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-');
  const headingId = `feature-${base}-${idx}`;
  const descId = description ? `feature-desc-${base}-${idx}` : undefined;

  const displayIcon = icon || <span className="inline-block h-2 w-2 rounded-[2px] bg-black" />;

  return (
    <section
      aria-labelledby={headingId}
      aria-describedby={descId}
      className="flex h-full flex-col surface-card-soft px-5 py-3 md:px-6 md:py-4"
      {...{ itemScope: true, itemType: 'https://schema.org/Thing' }}
    >
      <IconText icon={displayIcon} iconClassName="inline-flex items-center justify-center">
        <h3 id={headingId} className="h6 font-semibold text-dark" itemProp="name">
          {title}
        </h3>
      </IconText>

      {description && (
        <div id={descId} className="mt-1 text-sm text-light leading-6" itemProp="description">
          {description}
        </div>
      )}

      {Array.isArray(points) && points.length > 0 && (
        <ul className="mt-2 space-y-2" role="list">
          {points.map((pt, i) => (
            <li key={i} className="flex items-start gap-1">
              <span className="text-base text-light">{pt}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
