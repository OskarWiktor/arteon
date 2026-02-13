import HeroBannerSkeleton from './HeroBannerSkeleton';
import BreadcrumbsSkeleton from './BreadcrumbsSkeleton';
import SectionInfoSkeleton from './SectionInfoSkeleton';
import SectionStepsSkeleton from './SectionStepsSkeleton';
import FaqSkeleton from './FaqSkeleton';
import GapSkeleton from './GapSkeleton';
import CTABannerSkeleton from './CTABannerSkeleton';

export default function GenericPageSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <BreadcrumbsSkeleton />
      <div className="m-auto w-[94%] max-w-[1420px]">
        <GapSkeleton variant="line" />
        <SectionInfoSkeleton />
        <GapSkeleton variant="space" />
        <SectionStepsSkeleton cols={3} />
        <GapSkeleton variant="line" />
        <FaqSkeleton count={4} />
        <GapSkeleton variant="space" />
        <CTABannerSkeleton />
        <div className="my-20 md:my-32" />
      </div>
    </>
  );
}
