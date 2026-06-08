import { cn } from '@/lib/clsx';

interface ShimmerProps {
  className?: string;
}

export default function Shimmer({ className }: ShimmerProps) {
  return (
    <div className={cn('animate-pulse rounded-md bg-neutral-100', className)} />
  );
}
