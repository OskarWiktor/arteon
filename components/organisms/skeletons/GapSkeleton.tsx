import Divider from '@/components/atoms/Divider';

interface GapSkeletonProps {
  variant?: 'line' | 'space';
}

/**
 * Section spacer for skeletons. Delegates to the real {@link Divider} so the
 * vertical rhythm between skeleton sections matches the loaded page exactly:
 * `line` renders the medium divider with its hairline, `space` renders the
 * smaller blank spacer used at the top/bottom of content areas.
 */
export default function GapSkeleton({ variant = 'line' }: GapSkeletonProps) {
  if (variant === 'line') {
    return <Divider size='md' line />;
  }

  return <Divider size='sm' />;
}
