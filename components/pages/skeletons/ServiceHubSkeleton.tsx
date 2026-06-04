import CTABannerSkeleton from '../../organisms/skeletons/CTABannerSkeleton';
import DividerSkeleton from '../../organisms/skeletons/GapSkeleton';
import HeroBannerSkeleton from '../../organisms/skeletons/HeroBannerSkeleton';
import SectionStepsSkeleton from '../../organisms/skeletons/SectionStepsSkeleton';

export default function ServiceHubSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <div className='m-auto w-[94%] max-w-355 2xl:max-w-none'>
        <DividerSkeleton variant='space' />
        <SectionStepsSkeleton cols={3} />
        <DividerSkeleton variant='line' />
        <SectionStepsSkeleton cols={2} />
        <DividerSkeleton variant='line' />
        <SectionStepsSkeleton cols={3} />
        <DividerSkeleton variant='line' />
        <SectionStepsSkeleton cols={3} />
        <DividerSkeleton variant='space' />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
