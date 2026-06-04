import CTABannerSkeleton from '../../organisms/skeletons/CTABannerSkeleton';
import DividerSkeleton from '../../organisms/skeletons/GapSkeleton';
import HeroBannerSkeleton from '../../organisms/skeletons/HeroBannerSkeleton';
import SectionInfoSkeleton from '../../organisms/skeletons/SectionInfoSkeleton';
import SectionStepsSkeleton from '../../organisms/skeletons/SectionStepsSkeleton';

export default function AboutPageSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <div className='m-auto w-[94%] max-w-[1420px] 2xl:max-w-none'>
        <DividerSkeleton variant='space' />
        <SectionInfoSkeleton />
        <DividerSkeleton variant='line' />
        <SectionStepsSkeleton cols={2} />
        <DividerSkeleton variant='line' />
        <SectionStepsSkeleton cols={3} />
        <DividerSkeleton variant='line' />
        <SectionInfoSkeleton />
        <DividerSkeleton variant='line' />
        <SectionInfoSkeleton />
        <DividerSkeleton variant='space' />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
