import { cn } from '@/lib/utils';
import Shimmer from '../../atoms/skeletons/Shimmer';

interface CardGridSkeletonProps {
  count?: number;
  cols?: 2 | 3;
  variant?: 'article' | 'project';
}

export default function CardGridSkeleton({
  count = 6,
  cols = 3,
  variant = 'article',
}: CardGridSkeletonProps) {
  const gridClass = cols === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';
  const isProject = variant === 'project';
  const imageAspect = isProject ? 'aspect-[5/3]' : 'aspect-[16/10]';

  return (
    <div className={cn('grid gap-6', gridClass)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className='overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm'
        >
          <Shimmer className={cn(imageAspect, 'w-full !rounded-none !bg-neutral-300')} />
          <div className='space-y-3 px-6 py-4 md:px-7 md:py-5'>
            <Shimmer className='h-5 w-3/4' />
            <Shimmer className='h-3.5 w-full' />
            <Shimmer className='h-3.5 w-5/6' />
            {isProject && (
              <>
                <div className='h-px w-full bg-neutral-200' />
                <Shimmer className='h-8 w-36 !rounded-lg' />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
