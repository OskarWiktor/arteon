import Shimmer from './Shimmer';

export default function BreadcrumbsSkeleton() {
  return (
    <div className="m-auto w-[94%] max-w-[1420px] 2xl:max-w-none">
      <div className="py-6">
        <div className="flex items-center gap-2 text-sm">
          <Shimmer className="h-4 w-4 !rounded-md" />
          <span className="text-neutral-300">/</span>
          <Shimmer className="h-4 w-20 !rounded-md" />
          <span className="text-neutral-300">/</span>
          <Shimmer className="h-4 w-44 !rounded-md" />
        </div>
      </div>
    </div>
  );
}
