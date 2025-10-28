import { ReactNode } from 'react';

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

  return (
    <section
      aria-labelledby={headingId}
      aria-describedby={descId}
      className="flex h-full flex-col rounded-2xl bg-white px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:px-6 md:py-4"
      {...{ itemScope: true, itemType: 'https://schema.org/Thing' }}
    >
      <div className="flex items-center gap-2">
        {icon ? (
          <span aria-hidden="true" className="inline-flex items-center justify-center">
            {icon}
          </span>
        ) : (
          <span aria-hidden="true" className="inline-block h-2 w-2 rounded-[2px] bg-black" />
        )}
        <h3 id={headingId} className="h6 font-semibold text-[#080808]" itemProp="name">
          {title}
        </h3>
      </div>

      {description && (
        <div id={descId} className="text-small mt-1 leading-6 text-[#5e5e5e]" itemProp="description">
          {description}
        </div>
      )}

      {Array.isArray(points) && points.length > 0 && (
        <ul className="mt-2 space-y-2" role="list">
          {points.map((pt, i) => (
            <li key={i} className="flex items-start gap-1 text-base text-[#5e5e5e]">
              {pt}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
