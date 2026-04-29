import Shimmer from './Shimmer';

interface SectionStepsSkeletonProps {
  cols?: 2 | 3 | 4;
}

export default function SectionStepsSkeleton({ cols = 3 }: SectionStepsSkeletonProps) {
  const gridClass = cols === 2 ? 'sm:grid-cols-2' : cols === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3';
  const hasImages = cols === 2;

  return (
    <div className="space-y-4">
      <Shimmer className="h-4 w-32 !rounded-md" />
      <Shimmer className="h-7 w-1/3 !rounded-md" />
      <Shimmer className="h-4 w-3/5 !rounded-md" />
      <div className={`mt-4 grid gap-4 ${gridClass}`}>
        {Array.from({ length: cols }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm">
            {hasImages && <Shimmer className="aspect-[16/9] w-full !rounded-none !bg-neutral-300" />}
            <div className="space-y-3 p-6">
              {!hasImages && <Shimmer className="h-10 w-10 !rounded-lg" />}
              <Shimmer className="h-5 w-3/4 !rounded-md" />
              <Shimmer className="h-3.5 w-full !rounded-md" />
              <Shimmer className="h-3.5 w-5/6 !rounded-md" />
              {hasImages && <Shimmer className="mt-2 h-9 w-40 !rounded-lg" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
