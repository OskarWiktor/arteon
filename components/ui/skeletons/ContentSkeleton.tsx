import Shimmer from './Shimmer';

export default function ContentSkeleton() {
  return (
    <div className="m-auto w-[94%] max-w-[1420px]">
      {/* Divider line gap */}
      <div className="relative my-20 h-px w-full md:my-28">
        <div className="h-px w-full bg-neutral-200" />
      </div>

      {/* SectionInfo skeleton */}
      <div className="space-y-3">
        <Shimmer className="h-7 w-2/5 !rounded-md" />
        <Shimmer className="h-4 w-full !rounded-md" />
        <Shimmer className="h-4 w-full !rounded-md" />
        <Shimmer className="h-4 w-5/6 !rounded-md" />
        <Shimmer className="mt-2 h-4 w-full !rounded-md" />
        <Shimmer className="h-4 w-4/5 !rounded-md" />
      </div>

      {/* Gap */}
      <div className="my-16 md:my-24" />

      {/* SectionSteps skeleton */}
      <div className="space-y-4">
        <Shimmer className="h-7 w-1/3 !rounded-md" />
        <Shimmer className="h-4 w-56 !rounded-md" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-3 rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm">
              <Shimmer className="h-10 w-10 !rounded-xl" />
              <Shimmer className="h-5 w-3/4 !rounded-md" />
              <Shimmer className="h-3.5 w-full !rounded-md" />
              <Shimmer className="h-3.5 w-5/6 !rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Gap */}
      <div className="my-16 md:my-24" />

      {/* FAQ skeleton */}
      <div className="space-y-3">
        <Shimmer className="h-7 w-1/4 !rounded-md" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-black/5 bg-white/80 px-5 py-4 shadow-sm">
            <Shimmer className="h-4 w-3/5 !rounded-md" />
            <Shimmer className="h-5 w-5 !rounded-md" />
          </div>
        ))}
      </div>

      {/* Bottom gap */}
      <div className="my-20 md:my-32" />
    </div>
  );
}
