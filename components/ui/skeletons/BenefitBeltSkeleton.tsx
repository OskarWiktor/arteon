import Shimmer from './Shimmer';

export default function BenefitBeltSkeleton() {
  return (
    <div className="border-b border-neutral-200 bg-white py-4">
      <div className="m-auto flex w-[94%] max-w-[1420px] items-center justify-center gap-6 overflow-hidden md:gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-2">
            <Shimmer className="h-5 w-5 !rounded-md" />
            <Shimmer className="h-4 w-20 !rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
