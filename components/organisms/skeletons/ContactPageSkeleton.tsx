import HeroBannerSkeleton from './HeroBannerSkeleton';
import SectionInfoSkeleton from './SectionInfoSkeleton';
import DividerSkeleton from './GapSkeleton';
import CTABannerSkeleton from './CTABannerSkeleton';
import Shimmer from './Shimmer';

export default function ContactPageSkeleton() {
  return (
    <>
      <HeroBannerSkeleton />
      <div className='m-auto w-[94%] max-w-[1420px] 2xl:max-w-none'>
        <DividerSkeleton variant='space' />
        <SectionInfoSkeleton />
        <DividerSkeleton variant='line' />

        {/* Contact form skeleton */}
        <div className='space-y-4'>
          <Shimmer className='h-7 w-1/4 !rounded-md' />
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='space-y-2'>
              <Shimmer className='h-4 w-24 !rounded-md' />
              <Shimmer className='h-11 w-full !rounded-md' />
            </div>
            <div className='space-y-2'>
              <Shimmer className='h-4 w-20 !rounded-md' />
              <Shimmer className='h-11 w-full !rounded-md' />
            </div>
          </div>
          <div className='space-y-2'>
            <Shimmer className='h-4 w-16 !rounded-md' />
            <Shimmer className='h-11 w-full !rounded-md' />
          </div>
          <div className='space-y-2'>
            <Shimmer className='h-4 w-28 !rounded-md' />
            <Shimmer className='h-32 w-full !rounded-md' />
          </div>
          <Shimmer className='h-11 w-32 !rounded-lg' />
        </div>

        <DividerSkeleton variant='line' />

        {/* Contact details skeleton (2 cards side by side) */}
        <div className='space-y-4'>
          <Shimmer className='h-7 w-1/3 !rounded-md' />
          <div className='grid gap-4 sm:grid-cols-2'>
            {[0, 1].map(i => (
              <div
                key={i}
                className='flex items-start gap-4 rounded-lg border border-black/5 bg-white p-6 shadow-sm'
              >
                <Shimmer className='h-10 w-10 shrink-0 !rounded-lg' />
                <div className='flex-1 space-y-2'>
                  <Shimmer className='h-5 w-1/2 !rounded-md' />
                  <Shimmer className='h-4 w-3/4 !rounded-md' />
                </div>
              </div>
            ))}
          </div>
        </div>

        <DividerSkeleton variant='space' />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
