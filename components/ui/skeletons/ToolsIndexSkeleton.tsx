import HeroBannerSkeleton from './HeroBannerSkeleton';
import SectionStepsSkeleton from './SectionStepsSkeleton';
import SectionInfoSkeleton from './SectionInfoSkeleton';
import FaqSkeleton from './FaqSkeleton';
import GapSkeleton from './GapSkeleton';
import CTABannerSkeleton from './CTABannerSkeleton';

export default function ToolsIndexSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <div className="m-auto w-[94%] max-w-[1420px]">
        <GapSkeleton variant="space" />
        <SectionStepsSkeleton cols={3} />
        <GapSkeleton variant="line" />
        <SectionInfoSkeleton />
        <GapSkeleton variant="line" />
        <SectionStepsSkeleton cols={4} />
        <GapSkeleton variant="line" />
        <FaqSkeleton count={5} />
        <GapSkeleton variant="space" />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
