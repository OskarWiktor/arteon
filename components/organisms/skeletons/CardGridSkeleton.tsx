import { cn } from '@/lib/clsx';
import { columnGapClasses } from '@/lib/uiClasses';
import CarouselCardSkeleton from './CarouselCardSkeleton';

interface CardGridSkeletonProps {
  count?: number;
  variant?: 'article' | 'project';
}

/**
 * Skeleton for the article/project listing grids (`/edukacja`, `/realizacje`).
 * Uses the same dark card placeholder and column gap as the loaded grids, and
 * the matching responsive column counts: projects go 1→3, articles 1→2→3.
 */
export default function CardGridSkeleton({
  count = 6,
  variant = 'article',
}: CardGridSkeletonProps) {
  const gridColumns =
    variant === 'project'
      ? 'grid-cols-1 md:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={cn('grid auto-rows-max', gridColumns, columnGapClasses)}>
      {Array.from({ length: count }).map((_, i) => (
        <CarouselCardSkeleton key={i} variant={variant} />
      ))}
    </div>
  );
}
