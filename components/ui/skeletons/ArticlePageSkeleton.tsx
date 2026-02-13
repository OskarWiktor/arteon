import HeroBannerSkeleton from './HeroBannerSkeleton';
import BreadcrumbsSkeleton from './BreadcrumbsSkeleton';
import Shimmer from './Shimmer';
import GapSkeleton from './GapSkeleton';

export default function ArticlePageSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <BreadcrumbsSkeleton />
      <div className="m-auto w-[94%] max-w-[1420px]">
        <GapSkeleton variant="line" />
        <article className="mx-auto max-w-3xl space-y-4">
          <Shimmer className="h-8 w-4/5 !rounded-md" />
          <Shimmer className="h-4 w-full !rounded-md" />
          <Shimmer className="h-4 w-full !rounded-md" />
          <Shimmer className="h-4 w-5/6 !rounded-md" />
          <Shimmer className="mt-4 h-4 w-full !rounded-md" />
          <Shimmer className="h-4 w-full !rounded-md" />
          <Shimmer className="h-4 w-3/4 !rounded-md" />
          <Shimmer className="mt-6 aspect-video w-full !rounded-xl" />
          <Shimmer className="mt-4 h-4 w-full !rounded-md" />
          <Shimmer className="h-4 w-full !rounded-md" />
          <Shimmer className="h-4 w-5/6 !rounded-md" />
          <Shimmer className="mt-4 h-6 w-2/5 !rounded-md" />
          <Shimmer className="h-4 w-full !rounded-md" />
          <Shimmer className="h-4 w-full !rounded-md" />
          <Shimmer className="h-4 w-4/5 !rounded-md" />
        </article>
        <div className="my-20 md:my-32" />
      </div>
    </>
  );
}
