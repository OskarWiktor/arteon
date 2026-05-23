import HeroBannerSkeleton from './HeroBannerSkeleton';
import SectionStepsSkeleton from './SectionStepsSkeleton';
import SectionInfoSkeleton from './SectionInfoSkeleton';
import FaqSkeleton from './FaqSkeleton';
import DividerSkeleton from './GapSkeleton';
import CTABannerSkeleton from './CTABannerSkeleton';

export default function ToolsIndexSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <div className='m-auto w-[94%] max-w-[1420px] 2xl:max-w-none'>
        <DividerSkeleton variant='space' />
        <SectionStepsSkeleton cols={3} />
        <DividerSkeleton variant='line' />
        <SectionInfoSkeleton />
        <DividerSkeleton variant='line' />
        <SectionStepsSkeleton cols={4} />
        <DividerSkeleton variant='line' />
        <FaqSkeleton count={5} />
        <DividerSkeleton variant='space' />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
