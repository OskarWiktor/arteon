import HeroBannerSkeleton from './HeroBannerSkeleton';
import BenefitBeltSkeleton from './BenefitBeltSkeleton';
import CarouselSkeleton from './CarouselSkeleton';
import SectionStepsSkeleton from './SectionStepsSkeleton';
import GapSkeleton from './GapSkeleton';
import CTABannerSkeleton from './CTABannerSkeleton';

export default function GenericPageSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <BenefitBeltSkeleton />
      <div className="m-auto w-[94%] max-w-[1420px] 2xl:max-w-none">
        <GapSkeleton variant="space" />
        <CarouselSkeleton variant="project" />
        <GapSkeleton variant="line" />
        <SectionStepsSkeleton cols={2} />
        <GapSkeleton variant="line" />
        <CarouselSkeleton variant="tool" />
        <GapSkeleton variant="line" />
        <CarouselSkeleton variant="testimonial" />
        <GapSkeleton variant="space" />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
