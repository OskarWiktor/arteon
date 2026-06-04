import Card from '@/components/organisms/Card';
import Shimmer from '../../atoms/skeletons/Shimmer';
import BenefitBeltSkeleton from '../../organisms/skeletons/BenefitBeltSkeleton';
import BreadcrumbsSkeleton from '../../organisms/skeletons/BreadcrumbsSkeleton';
import CarouselSkeleton from '../../organisms/skeletons/CarouselSkeleton';
import CTABannerSkeleton from '../../organisms/skeletons/CTABannerSkeleton';
import FaqSkeleton from '../../organisms/skeletons/FaqSkeleton';
import DividerSkeleton from '../../organisms/skeletons/GapSkeleton';
import HeroBannerSkeleton from '../../organisms/skeletons/HeroBannerSkeleton';
import SectionInfoSkeleton from '../../organisms/skeletons/SectionInfoSkeleton';
import SectionStepsSkeleton from '../../organisms/skeletons/SectionStepsSkeleton';

function FeatureGridSkeleton() {
  return (
    <div className='space-y-4'>
      <Shimmer className='h-4 w-32' />
      <Shimmer className='h-7 w-1/3' />
      <div className='mt-4 grid gap-4 sm:grid-cols-2'>
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} variant='outlined' className='flex items-start gap-4'>
            <Shimmer className='h-8 w-8 shrink-0' />
            <div className='flex-1 space-y-2'>
              <Shimmer className='h-5 w-3/4' />
              <Shimmer className='h-3.5 w-full' />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function PricesSkeleton() {
  return (
    <div className='space-y-4'>
      <Shimmer className='h-7 w-2/5' />
      <div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} padding='md' variant='outlined'>
            <Shimmer className='h-5 w-3/4' />
            <Shimmer className='mt-2 h-7 w-1/2' />
            <Shimmer className='mt-3 h-3.5 w-full' />
            <div className='mt-4 space-y-2'>
              {Array.from({ length: 5 }).map((_, j) => (
                <Shimmer key={j} className='h-3.5 w-5/6' />
              ))}
            </div>
            <Shimmer className='mt-4 h-10 w-full !rounded-lg' />
          </Card>
        ))}
      </div>
    </div>
  );
}

function ContactFormSkeleton() {
  return (
    <div className='grid gap-6 lg:grid-cols-2'>
      <div className='space-y-4'>
        <Shimmer className='h-7 w-3/5' />
        <Shimmer className='h-4 w-full' />
        <Shimmer className='h-4 w-4/5' />
        <Shimmer className='aspect-[4/3] w-full !rounded-lg !bg-neutral-300' />
      </div>
      <Card variant='outlined' padding='md' className='space-y-4'>
        <Shimmer className='h-10 w-full' />
        <Shimmer className='h-10 w-full' />
        <Shimmer className='h-10 w-full' />
        <Shimmer className='h-24 w-full' />
        <Shimmer className='h-10 w-40 !rounded-lg' />
      </Card>
    </div>
  );
}

function BentoSkeleton() {
  return (
    <div className='space-y-4'>
      <Shimmer className='h-7 w-1/3' />
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        <Shimmer className='aspect-[4/3] w-full !rounded-lg !bg-neutral-300 sm:col-span-2 lg:col-span-1 lg:row-span-2' />
        <Shimmer className='aspect-[16/9] w-full !rounded-lg !bg-neutral-300' />
        <Shimmer className='aspect-[16/9] w-full !rounded-lg !bg-neutral-300' />
      </div>
    </div>
  );
}

export default function ServicePageSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <BenefitBeltSkeleton />
      <BreadcrumbsSkeleton />
      <div className='m-auto w-[94%] max-w-[1420px] 2xl:max-w-none'>
        <DividerSkeleton variant='space' />
        <CarouselSkeleton variant='project' />
        <DividerSkeleton variant='line' />
        <SectionInfoSkeleton />
        <DividerSkeleton variant='line' />
        <FeatureGridSkeleton />
        <DividerSkeleton variant='line' />
        <SectionInfoSkeleton />
        <DividerSkeleton variant='line' />
        <CarouselSkeleton variant='testimonial' />
        <DividerSkeleton variant='line' />
        <PricesSkeleton />
        <DividerSkeleton variant='line' />
        <SectionStepsSkeleton cols={4} />
        <DividerSkeleton variant='line' />
        <ContactFormSkeleton />
        <DividerSkeleton variant='line' />
        <FaqSkeleton count={4} />
        <DividerSkeleton variant='line' />
        <BentoSkeleton />
        <DividerSkeleton variant='line' />
        <CarouselSkeleton variant='article' />
        <DividerSkeleton variant='space' />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
