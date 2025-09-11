import { ReactNode } from 'react';

type FeatureCardProps = {
  title: string;
  points?: string[];
  icon?: ReactNode;
};

export default function FeatureCard({ title, points, icon }: FeatureCardProps) {
  const id = `feature-${String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')}`;

  return (
    <article aria-labelledby={id} className="rounded-md bg-white px-6 py-4 shadow-sm transition hover:translate-y-[-2px] hover:shadow-md">
      <header className="flex items-center gap-2">
        {icon ? (
          <span aria-hidden="true" className="inline-flex items-center justify-center">
            {icon}
          </span>
        ) : (
          <span aria-hidden="true" className="inline-block h-2 w-2 rounded-[2px] bg-black" />
        )}

        <p id={id} role="heading" aria-level={3} className="font-medium">
          {title}
        </p>
      </header>

      {Array.isArray(points) && points.length > 0 && (
        <ul className="mt-2 space-y-2">
          {points.map((pt, i) => (
            <li key={i} className="flex items-start gap-1 text-base text-[#080808]/70">
              {pt}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
