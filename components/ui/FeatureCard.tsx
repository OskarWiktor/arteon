import type { ReactNode } from 'react';
import IconText from './IconText';
import Text from './typography/Text';

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
      className="flex h-full flex-col rounded-2xl bg-white px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:px-6 md:py-4"
      {...{ itemScope: true, itemType: 'https://schema.org/Thing' }}
    >
      <IconText icon={displayIcon} iconClassName="inline-flex items-center justify-center">
        <h3 id={headingId} className="h6 font-semibold text-dark" itemProp="name">
          {title}
        </h3>
      </IconText>

      {description && (
        <Text variant="small" tone="muted" as="div" id={descId} className="mt-1 leading-6" itemProp="description">
          {description}
        </Text>
      )}

      {Array.isArray(points) && points.length > 0 && (
        <ul className="mt-2 space-y-2" role="list">
          {points.map((pt, i) => (
            <li key={i} className="flex items-start gap-1">
              <Text variant="body" tone="muted" as="span">
                {pt}
              </Text>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
