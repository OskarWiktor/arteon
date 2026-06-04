import { cn } from '@/lib/utils';
import Shimmer from '../../atoms/skeletons/Shimmer';
import Card from '../Card';

interface SectionStepsSkeletonProps {
  cols?: 2 | 3 | 4;
}

export default function SectionStepsSkeleton({
  cols = 3,
}: SectionStepsSkeletonProps) {
  const gridClass =
    cols === 2
      ? 'sm:grid-cols-2'
      : cols === 4
        ? 'sm:grid-cols-2 lg:grid-cols-4'
        : 'sm:grid-cols-2 lg:grid-cols-3';
  const hasImages = cols === 2;

  return (
    <div className='space-y-4'>
      <Shimmer className='h-4 w-32' />
      <Shimmer className='h-7 w-1/3' />
      <Shimmer className='h-4 w-3/5' />
      <div className={cn('mt-4 grid gap-4', gridClass)}>
        {Array.from({ length: cols }).map((_, i) => (
          <Card key={i} interactive={false} variant='outlined'>
            {hasImages && (
              <Shimmer className='aspect-video w-full rounded-none! bg-neutral-300!' />
            )}
            <div className='space-y-3 p-6'>
              {!hasImages && <Shimmer className='h-10 w-10 rounded-lg!' />}
              <Shimmer className='h-5 w-3/4' />
              <Shimmer className='h-3.5 w-full' />
              <Shimmer className='h-3.5 w-5/6' />
              {hasImages && <Shimmer className='mt-2 h-9 w-40 rounded-lg!' />}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
