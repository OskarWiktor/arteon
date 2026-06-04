import { flexCenterClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';
import Shimmer from '../../atoms/skeletons/Shimmer';

export default function BenefitBeltSkeleton() {
  return (
    <div className='bg-white py-4'>
      <div
        className={cn(
          'm-auto w-[94%] max-w-[1420px] gap-6 overflow-hidden md:gap-10 2xl:max-w-none',
          flexCenterClasses,
        )}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className='flex shrink-0 items-center gap-2'>
            <Shimmer className='h-5 w-5' />
            <Shimmer className='h-4 w-20' />
          </div>
        ))}
      </div>
    </div>
  );
}
