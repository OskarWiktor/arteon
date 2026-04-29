import Shimmer from './Shimmer';

interface HeroBannerSkeletonProps {
  size?: 'default' | 'tools';
}

export default function HeroBannerSkeleton({ size = 'default' }: HeroBannerSkeletonProps) {
  if (size === 'tools') {
    return (
      <div className="relative flex items-center overflow-hidden pt-4 pb-2 md:pt-7">
        <div className="m-auto w-[94%] max-w-[1420px] 2xl:max-w-none">
          <div className="flex max-w-[100vw] flex-col items-center md:w-full">
            <Shimmer className="mb-2 h-7 w-4/5 md:w-2/5" />
            <Shimmer className="mb-1 h-4 w-full md:w-3/5" />
            <Shimmer className="h-4 w-2/3 md:w-2/5" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[400px] items-center overflow-hidden bg-black py-10 md:min-h-[440px] md:py-0 lg:min-h-[460px]">
      <div className="m-auto w-[94%] max-w-[1420px] 2xl:max-w-none">
        <div className="max-w-[100vw] rounded-lg bg-black/60 p-5 pt-4 hyphens-auto md:max-w-[65%] md:p-7">
          <Shimmer className="mb-3 h-4 w-24 !rounded-md !bg-white/10" />
          <Shimmer className="mb-3 h-9 w-full !bg-white/15 md:w-4/5" />
          <Shimmer className="mb-2 h-5 w-full !bg-white/10 md:w-3/4" />
          <Shimmer className="h-5 w-2/3 !bg-white/10" />
        </div>
      </div>
    </div>
  );
}
