import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';

function Shimmer({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-xl bg-neutral-100 ${className ?? ''}`} />;
}

export default function ToolPageSkeleton() {
  return (
    <Wrapper>
      <Gap size="xl" />

      {/* Breadcrumbs skeleton */}
      <div className="mb-6 flex items-center gap-2">
        <Shimmer className="h-4 w-20" />
        <Shimmer className="h-4 w-4" />
        <Shimmer className="h-4 w-32" />
      </div>

      {/* Hero section skeleton */}
      <div className="mx-auto max-w-3xl text-center">
        <Shimmer className="mx-auto mb-4 h-10 w-3/4" />
        <Shimmer className="mx-auto mb-2 h-5 w-full" />
        <Shimmer className="mx-auto mb-8 h-5 w-2/3" />
      </div>

      {/* Tool panel skeleton */}
      <div className="mx-auto max-w-4xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-4">
          <Shimmer className="h-10 w-10 rounded-lg" />
          <Shimmer className="h-6 w-48" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Shimmer className="h-12 w-full" />
          <Shimmer className="h-12 w-full" />
        </div>

        <Shimmer className="mt-6 h-48 w-full" />

        <div className="mt-6 flex items-center gap-3">
          <Shimmer className="h-10 w-32 rounded-lg" />
          <Shimmer className="h-10 w-32 rounded-lg" />
        </div>
      </div>

      {/* Content section skeleton */}
      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        <Shimmer className="h-8 w-2/3" />
        <Shimmer className="h-4 w-full" />
        <Shimmer className="h-4 w-full" />
        <Shimmer className="h-4 w-5/6" />
        <Shimmer className="mt-6 h-4 w-full" />
        <Shimmer className="h-4 w-4/5" />
      </div>

      <Gap size="xl" />
    </Wrapper>
  );
}
