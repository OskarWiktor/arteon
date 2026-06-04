import Card from '@/components/organisms/Card';
import Shimmer from '../../atoms/skeletons/Shimmer';
import DividerSkeleton from '../../organisms/skeletons/GapSkeleton';

export default function PrivacyPageSkeleton() {
  return (
    <>
      <div className='my-8 md:my-12' />
      <div className='m-auto flex w-[94%] max-w-355 flex-col-reverse gap-8 lg:grid lg:grid-cols-[1fr_300px] 2xl:max-w-none'>
        <div className='space-y-0'>
          <Shimmer className='mb-3 h-9 w-3/5' />
          <Shimmer className='mb-6 h-4 w-40' />

          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <DividerSkeleton variant='line' />
              <div className='space-y-3'>
                <Shimmer className='h-6 w-2/5' />
                <Shimmer className='h-4 w-full' />
                <Shimmer className='h-4 w-full' />
                <Shimmer className='h-4 w-4/5' />
              </div>
            </div>
          ))}

          <div className='my-16 md:my-24' />
        </div>

        <div className='hidden lg:block'>
          <Card variant='outlined' className='sticky top-24 space-y-3'>
            <Shimmer className='h-5 w-2/3' />
            <Shimmer className='h-3.5 w-4/5' />
            <Shimmer className='h-3.5 w-full' />
            <Shimmer className='h-3.5 w-3/4' />
            <Shimmer className='h-3.5 w-5/6' />
            <Shimmer className='h-3.5 w-full' />
            <Shimmer className='h-3.5 w-2/3' />
            <Shimmer className='h-3.5 w-4/5' />
            <Shimmer className='h-3.5 w-3/4' />
          </Card>
        </div>
      </div>
    </>
  );
}
