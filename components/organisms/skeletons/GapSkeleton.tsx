interface GapSkeletonProps {
  variant?: 'line' | 'space';
}

export default function GapSkeleton({ variant = 'line' }: GapSkeletonProps) {
  if (variant === 'line') {
    return (
      <div className='relative my-20 h-px w-full md:my-28'>
        <div className='h-px w-full bg-neutral-200' />
      </div>
    );
  }

  return <div className='my-16 md:my-24' />;
}
