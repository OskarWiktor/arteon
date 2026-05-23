import HeroBannerSkeleton from './HeroBannerSkeleton';
import BenefitBeltSkeleton from './BenefitBeltSkeleton';
import CarouselSkeleton from './CarouselSkeleton';
import SectionStepsSkeleton from './SectionStepsSkeleton';
import DividerSkeleton from './GapSkeleton';
import CTABannerSkeleton from './CTABannerSkeleton';
import Shimmer from './Shimmer';

function FeatureGridSkeleton() {
  return (
    <div className='space-y-4'>
      <Shimmer className='h-4 w-32 !rounded-md' />
      <Shimmer className='h-7 w-1/3 !rounded-md' />
      <div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className='flex items-start gap-4 rounded-lg border border-black/5 bg-white p-5 shadow-sm'
          >
            <Shimmer className='h-8 w-8 shrink-0 !rounded-md' />
            <Shimmer className='h-5 w-3/4 !rounded-md' />
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkStepsSkeleton() {
  return (
    <div className='space-y-4'>
      <Shimmer className='h-4 w-32 !rounded-md' />
      <Shimmer className='h-7 w-2/5 !rounded-md' />
      <div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className='rounded-lg border border-black/5 bg-white p-5 shadow-sm'>
            <Shimmer className='mb-3 h-10 w-10 !rounded-lg' />
            <Shimmer className='h-5 w-3/4 !rounded-md' />
            <Shimmer className='mt-2 h-3.5 w-full !rounded-md' />
            <Shimmer className='mt-1 h-3.5 w-5/6 !rounded-md' />
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoCarouselSkeleton() {
  return (
    <div className='space-y-4'>
      <Shimmer className='h-7 w-2/5 !rounded-md' />
      <div className='flex gap-6 overflow-hidden md:gap-10 lg:gap-14'>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className='flex shrink-0 items-center gap-2'>
            <Shimmer className='h-6 w-6 !rounded-md' />
            <Shimmer className='h-6 w-24 !rounded-md' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePageSkeleton() {
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
        <FeatureGridSkeleton />
        <DividerSkeleton variant='line' />
        <CarouselSkeleton variant='tool' />
        <DividerSkeleton variant='line' />
        <CarouselSkeleton variant='testimonial' />
        <DividerSkeleton variant='line' />
        <WorkStepsSkeleton />
        <DividerSkeleton variant='line' />
        <LogoCarouselSkeleton />
        <DividerSkeleton variant='line' />
        <SectionStepsSkeleton cols={4} />
        <DividerSkeleton variant='line' />
        <CarouselSkeleton variant='article' />
        <DividerSkeleton variant='space' />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
