import type { ReactNode } from 'react';

type FeatureCardProps = {
  idx?: number;
  title: string;
  description?: ReactNode;
  points?: string[];
  icon?: ReactNode;
  variant?: 'default' | 'centered';
};

export default function FeatureCard({ idx = 0, title, description, points, icon, variant = 'default' }: FeatureCardProps) {
  const base = String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-');
  const headingId = `feature-${base}-${idx}`;
  const descId = description ? `feature-desc-${base}-${idx}` : undefined;

  const displayIcon = icon || <span className="inline-block h-2 w-2 rounded-[2px] bg-black" />;

  if (variant === 'centered') {
    return (
      <section aria-labelledby={headingId} aria-describedby={descId} className="surface-card-soft flex h-full flex-col items-center p-4 text-center" {...{ itemScope: true, itemType: 'https://schema.org/Thing' }}>
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">{displayIcon}</div>
        <h3 id={headingId} className="h6 text-dark mb-1" itemProp="name">
          {title}
        </h3>

        {description && (
          <div id={descId} className="text-light text-left text-[15px] leading-6" itemProp="description">
            {description}
          </div>
        )}

        {Array.isArray(points) && points.length > 0 && (
          <ul className="mt-2 space-y-2" role="list">
            {points.map((pt, i) => (
              <li key={i} className="flex items-center justify-center gap-1">
                <span className="text-light text-base">{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }

  return (
    <section aria-labelledby={headingId} aria-describedby={descId} className="surface-card-soft flex h-full gap-4 p-4" {...{ itemScope: true, itemType: 'https://schema.org/Thing' }}>
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">{displayIcon}</div>
      <div className="flex flex-col">
        <h3 id={headingId} className="h6 text-dark mb-1" itemProp="name">
          {title}
        </h3>

        {description && (
          <div id={descId} className="text-light text-[15px] leading-6" itemProp="description">
            {description}
          </div>
        )}

        {Array.isArray(points) && points.length > 0 && (
          <ul className="mt-2 space-y-2" role="list">
            {points.map((pt, i) => (
              <li key={i} className="flex items-start gap-1">
                <span className="text-light text-base">{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
