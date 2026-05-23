import Shimmer from './Shimmer';
import DividerSkeleton from './GapSkeleton';

export default function PrivacyPageSkeleton() {
  return (
    <>
      <div className='my-8 md:my-12' />
      <div className='m-auto flex w-[94%] max-w-[1420px] flex-col-reverse gap-8 lg:grid lg:grid-cols-[1fr_300px] 2xl:max-w-none'>
        {/* Article content */}
        <div className='space-y-0'>
          <Shimmer className='mb-3 h-9 w-3/5 !rounded-md' />
          <Shimmer className='mb-6 h-4 w-40 !rounded-md' />

          {/* Sections */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <DividerSkeleton variant='line' />
              <div className='space-y-3'>
                <Shimmer className='h-6 w-2/5 !rounded-md' />
                <Shimmer className='h-4 w-full !rounded-md' />
                <Shimmer className='h-4 w-full !rounded-md' />
                <Shimmer className='h-4 w-4/5 !rounded-md' />
              </div>
            </div>
          ))}

          <div className='my-16 md:my-24' />
        </div>

        {/* Table of Contents sidebar */}
        <div className='hidden lg:block'>
          <div className='sticky top-24 space-y-3 rounded-lg border border-black/5 bg-white p-5 shadow-sm'>
            <Shimmer className='h-5 w-2/3 !rounded-md' />
            <Shimmer className='h-3.5 w-4/5 !rounded-md' />
            <Shimmer className='h-3.5 w-full !rounded-md' />
            <Shimmer className='h-3.5 w-3/4 !rounded-md' />
            <Shimmer className='h-3.5 w-5/6 !rounded-md' />
            <Shimmer className='h-3.5 w-full !rounded-md' />
            <Shimmer className='h-3.5 w-2/3 !rounded-md' />
            <Shimmer className='h-3.5 w-4/5 !rounded-md' />
            <Shimmer className='h-3.5 w-3/4 !rounded-md' />
          </div>
        </div>
      </div>
    </>
  );
}
