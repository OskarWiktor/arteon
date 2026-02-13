import Shimmer from './Shimmer';

interface CardGridSkeletonProps {
  count?: number;
  cols?: 2 | 3;
}

export default function CardGridSkeleton({ count = 6, cols = 3 }: CardGridSkeletonProps) {
  const gridClass = cols === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid gap-6 ${gridClass}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-sm">
          <Shimmer className="aspect-[16/10] w-full !rounded-none" />
          <div className="space-y-3 p-5">
            <Shimmer className="h-5 w-3/4 !rounded-md" />
            <Shimmer className="h-3.5 w-full !rounded-md" />
            <Shimmer className="h-3.5 w-5/6 !rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}
