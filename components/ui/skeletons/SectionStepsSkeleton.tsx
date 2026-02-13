import Shimmer from './Shimmer';

interface SectionStepsSkeletonProps {
  cols?: 2 | 3 | 4;
}

export default function SectionStepsSkeleton({ cols = 3 }: SectionStepsSkeletonProps) {
  const gridClass = cols === 2 ? 'sm:grid-cols-2' : cols === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="space-y-4">
      <Shimmer className="h-7 w-1/3 !rounded-md" />
      <Shimmer className="h-4 w-56 !rounded-md" />
      <div className={`mt-4 grid gap-4 ${gridClass}`}>
        {Array.from({ length: cols }).map((_, i) => (
          <div key={i} className="space-y-3 rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm">
            <Shimmer className="h-10 w-10 !rounded-xl" />
            <Shimmer className="h-5 w-3/4 !rounded-md" />
            <Shimmer className="h-3.5 w-full !rounded-md" />
            <Shimmer className="h-3.5 w-5/6 !rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
