import HeroBannerSkeleton from './HeroBannerSkeleton';
import SectionInfoSkeleton from './SectionInfoSkeleton';
import SectionStepsSkeleton from './SectionStepsSkeleton';
import GapSkeleton from './GapSkeleton';
import CTABannerSkeleton from './CTABannerSkeleton';

export default function AboutPageSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <div className="m-auto w-[94%] max-w-[1420px] 2xl:max-w-none">
        <GapSkeleton variant="space" />
        <SectionInfoSkeleton />
        <GapSkeleton variant="line" />
        <SectionStepsSkeleton cols={2} />
        <GapSkeleton variant="line" />
        <SectionStepsSkeleton cols={3} />
        <GapSkeleton variant="line" />
        <SectionInfoSkeleton />
        <GapSkeleton variant="line" />
        <SectionInfoSkeleton />
        <GapSkeleton variant="space" />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
