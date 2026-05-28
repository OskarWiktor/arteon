import HeroBannerSkeleton from '../../organisms/skeletons/HeroBannerSkeleton';
import SectionStepsSkeleton from '../../organisms/skeletons/SectionStepsSkeleton';
import SectionInfoSkeleton from '../../organisms/skeletons/SectionInfoSkeleton';
import FaqSkeleton from '../../organisms/skeletons/FaqSkeleton';
import DividerSkeleton from '../../organisms/skeletons/GapSkeleton';
import CTABannerSkeleton from '../../organisms/skeletons/CTABannerSkeleton';

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
