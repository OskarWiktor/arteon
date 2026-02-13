import Shimmer from './Shimmer';

export default function SectionInfoSkeleton() {
  return (
    <div className="space-y-3">
      <Shimmer className="h-7 w-2/5 !rounded-md" />
      <Shimmer className="h-4 w-full !rounded-md" />
      <Shimmer className="h-4 w-full !rounded-md" />
      <Shimmer className="h-4 w-5/6 !rounded-md" />
      <Shimmer className="mt-2 h-4 w-full !rounded-md" />
      <Shimmer className="h-4 w-4/5 !rounded-md" />
    </div>
  );
}
