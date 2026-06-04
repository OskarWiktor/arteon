import BreadcrumbsSkeleton from './BreadcrumbsSkeleton';
import CTABannerSkeleton from './CTABannerSkeleton';
import FaqSkeleton from './FaqSkeleton';
import DividerSkeleton from './GapSkeleton';
import HeroBannerSkeleton from './HeroBannerSkeleton';

export default function FaqPageSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <BreadcrumbsSkeleton />
      <div className='m-auto w-[94%] max-w-355 2xl:max-w-none'>
        <DividerSkeleton variant='space' />
        <FaqSkeleton count={8} />
        <DividerSkeleton variant='space' />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
