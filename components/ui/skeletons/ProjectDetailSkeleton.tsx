import HeroBannerSkeleton from './HeroBannerSkeleton';
import BreadcrumbsSkeleton from './BreadcrumbsSkeleton';
import CarouselSkeleton from './CarouselSkeleton';
import FaqSkeleton from './FaqSkeleton';
import GapSkeleton from './GapSkeleton';
import CTABannerSkeleton from './CTABannerSkeleton';
import Shimmer from './Shimmer';

export default function ProjectDetailSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <BreadcrumbsSkeleton />
      <div className="m-auto w-[94%] max-w-[1420px]">
        <GapSkeleton variant="space" />
        <div className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-[1fr_300px]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <Shimmer key={i} className="h-7 w-24 !rounded-full" />
              ))}
            </div>
            <Shimmer className="h-4 w-full !rounded-md" />
            <Shimmer className="h-4 w-5/6 !rounded-md" />
            <Shimmer className="aspect-video w-full !rounded-xl !bg-neutral-300" />
            <Shimmer className="h-4 w-full !rounded-md" />
            <Shimmer className="h-4 w-full !rounded-md" />
            <Shimmer className="h-4 w-4/5 !rounded-md" />
            <Shimmer className="mt-4 h-6 w-2/5 !rounded-md" />
            <Shimmer className="h-4 w-full !rounded-md" />
            <Shimmer className="h-4 w-5/6 !rounded-md" />
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-3 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
              <Shimmer className="h-5 w-3/4 !rounded-md" />
              {Array.from({ length: 6 }).map((_, i) => (
                <Shimmer key={i} className="h-3.5 w-full !rounded-md" />
              ))}
            </div>
          </aside>
        </div>
        <GapSkeleton variant="line" />
        <FaqSkeleton count={4} />
        <GapSkeleton variant="line" />
        <CarouselSkeleton variant="project" />
        <GapSkeleton variant="space" />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
