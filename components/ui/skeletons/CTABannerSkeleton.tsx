import Shimmer from './Shimmer';

export default function CTABannerSkeleton() {
  return (
    <div className="bg-neutral-900 px-8 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <Shimmer className="mx-auto mb-4 h-8 w-3/5 !rounded-md !bg-white/15" />
        <Shimmer className="mx-auto mb-2 h-4 w-4/5 !rounded-md !bg-white/10" />
        <Shimmer className="mx-auto mb-6 h-4 w-2/3 !rounded-md !bg-white/10" />
        <Shimmer className="mx-auto h-11 w-40 !rounded-lg !bg-white/15" />
      </div>
    </div>
  );
}
