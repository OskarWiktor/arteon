import { flexCenterClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';
import Shimmer from '../../atoms/skeletons/Shimmer';

interface BreadcrumbsSkeletonProps {
  size?: 'default' | 'compact';
}

export default function BreadcrumbsSkeleton({
  size = 'default',
}: BreadcrumbsSkeletonProps) {
  const isCompact = size === 'compact';

  return (
    <div className='m-auto w-[94%] max-w-[1420px] 2xl:max-w-none'>
      <div className={isCompact ? cn('py-3', flexCenterClasses) : 'py-6'}>
        <div className='flex items-center gap-2 text-sm'>
          <Shimmer className='h-4 w-8' />
          <span className='text-neutral-300'>/</span>
          <Shimmer className='h-4 w-20' />
          <span className='text-neutral-300'>/</span>
          <Shimmer className='h-4 w-8' />
        </div>
      </div>
    </div>
  );
}
