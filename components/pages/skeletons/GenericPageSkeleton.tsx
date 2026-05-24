import HeroBannerSkeleton from '../../organisms/skeletons/HeroBannerSkeleton';
import BenefitBeltSkeleton from '../../organisms/skeletons/BenefitBeltSkeleton';
import CarouselSkeleton from '../../organisms/skeletons/CarouselSkeleton';
import SectionStepsSkeleton from '../../organisms/skeletons/SectionStepsSkeleton';
import DividerSkeleton from '../../organisms/skeletons/GapSkeleton';
import CTABannerSkeleton from '../../organisms/skeletons/CTABannerSkeleton';

export default function GenericPageSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <BenefitBeltSkeleton />
      <div className='m-auto w-[94%] max-w-[1420px] 2xl:max-w-none'>
        <DividerSkeleton variant='space' />
        <CarouselSkeleton variant='project' />
        <DividerSkeleton variant='line' />
        <SectionStepsSkeleton cols={2} />
        <DividerSkeleton variant='line' />
        <CarouselSkeleton variant='tool' />
        <DividerSkeleton variant='line' />
        <CarouselSkeleton variant='testimonial' />
        <DividerSkeleton variant='space' />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
