import Shimmer from './Shimmer';

interface FaqSkeletonProps {
  count?: number;
}

export default function FaqSkeleton({ count = 3 }: FaqSkeletonProps) {
  return (
    <div className="space-y-3">
      <Shimmer className="h-7 w-1/4 !rounded-md" />
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center justify-between rounded-lg border border-black/5 bg-white/80 px-5 py-4 shadow-sm">
          <Shimmer className="h-4 w-3/5 !rounded-md" />
          <Shimmer className="h-5 w-5 !rounded-md" />
        </div>
      ))}
    </div>
  );
}
