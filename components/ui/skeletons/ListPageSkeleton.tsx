import HeroBannerSkeleton from './HeroBannerSkeleton';
import BreadcrumbsSkeleton from './BreadcrumbsSkeleton';
import CardGridSkeleton from './CardGridSkeleton';
import GapSkeleton from './GapSkeleton';

export default function ListPageSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <BreadcrumbsSkeleton />
      <div className="m-auto w-[94%] max-w-[1420px]">
        <GapSkeleton variant="line" />
        <CardGridSkeleton count={6} cols={3} />
        <div className="my-20 md:my-32" />
      </div>
    </>
  );
}
