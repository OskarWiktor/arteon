import Shimmer from '../../atoms/skeletons/Shimmer';

export default function SectionInfoSkeleton() {
  return (
    <div className='space-y-3'>
      <Shimmer className='h-7 w-2/5' />
      <Shimmer className='h-4 w-full' />
      <Shimmer className='h-4 w-full' />
      <Shimmer className='h-4 w-5/6' />
      <Shimmer className='mt-2 h-4 w-full' />
      <Shimmer className='h-4 w-4/5' />
    </div>
  );
}
