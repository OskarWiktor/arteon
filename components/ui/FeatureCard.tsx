'use client';

export default function FeatureCard({ title, points }: { title: string; points?: string[] }) {
  const id = `feature-${String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')}`;

  return (
    <article aria-labelledby={id} className="rounded-md bg-white px-6 py-4 shadow-sm transition hover:translate-y-[-2px] hover:shadow-md">
      <header className="flex items-center gap-2">
        <span aria-hidden className="inline-block h-2 w-2 rounded-[2px] bg-black" />
        <p>{title}</p>
      </header>

      {points && (
        <div className="mt-2 space-y-2" role="list">
          {points.map((pt, i) => (
            <span key={i} className="flex items-start gap-1 text-base text-[#080808]/70" role="listitem">
              {pt}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
