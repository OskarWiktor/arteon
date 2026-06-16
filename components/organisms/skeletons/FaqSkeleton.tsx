import { cn } from '@/lib/clsx';
import { flexCenterBetweenClasses } from '@/lib/uiClasses';
import Shimmer from '../../atoms/skeletons/Shimmer';
import Card from '../Card';

interface FaqSkeletonProps {
  count?: number;
}

export default function FaqSkeleton({ count = 3 }: FaqSkeletonProps) {
  return (
    <div className='space-y-3'>
      <Shimmer className='h-7 w-1/4' />
      {Array.from({ length: count }).map((_, i) => (
        <Card
          key={i}
          interactive={false}
          variant='outlined'
          className={cn('gap-0', flexCenterBetweenClasses)}
        >
          <Shimmer className='h-4 w-3/5' />
          <Shimmer className='h-5 w-5' />
        </Card>
      ))}
    </div>
  );
}
