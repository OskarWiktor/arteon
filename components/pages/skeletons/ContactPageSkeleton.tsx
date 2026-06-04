import Shimmer from '../../atoms/skeletons/Shimmer';
import Card from '../../organisms/Card';
import CTABannerSkeleton from '../../organisms/skeletons/CTABannerSkeleton';
import DividerSkeleton from '../../organisms/skeletons/GapSkeleton';
import HeroBannerSkeleton from '../../organisms/skeletons/HeroBannerSkeleton';
import SectionInfoSkeleton from '../../organisms/skeletons/SectionInfoSkeleton';

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
          <Shimmer className='h-7 w-1/4' />
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='space-y-2'>
              <Shimmer className='h-4 w-24' />
              <Shimmer className='h-11 w-full' />
            </div>
            <div className='space-y-2'>
              <Shimmer className='h-4 w-20' />
              <Shimmer className='h-11 w-full' />
            </div>
          </div>
          <div className='space-y-2'>
            <Shimmer className='h-4 w-16' />
            <Shimmer className='h-11 w-full' />
          </div>
          <div className='space-y-2'>
            <Shimmer className='h-4 w-28' />
            <Shimmer className='h-32 w-full' />
          </div>
          <Shimmer className='h-11 w-32 !rounded-lg' />
        </div>

        <DividerSkeleton variant='line' />

        {/* Contact details skeleton (2 cards side by side) */}
        <div className='space-y-4'>
          <Shimmer className='h-7 w-1/3' />
          <div className='grid gap-4 sm:grid-cols-2'>
            {[0, 1].map(i => (
              <Card
                key={i}
                interactive={false}
                variant='outlined'
                padding='md'
                className='flex items-start gap-4'
              >
                <Shimmer className='h-10 w-10 shrink-0 !rounded-lg' />
                <div className='flex-1 space-y-2'>
                  <Shimmer className='h-5 w-1/2' />
                  <Shimmer className='h-4 w-3/4' />
                </div>
              </Card>
            ))}
          </div>
        </div>

        <DividerSkeleton variant='space' />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
