import { cn } from '@/lib/clsx';
import Shimmer from '../../atoms/skeletons/Shimmer';

interface HeroBannerSkeletonProps {
  size?: 'default' | 'compact';
  /**
   * When true, mirrors the article/project hero that receives only a
   * `backgroundImage` (no title/description): the text column stays empty and
   * just the image placeholder sits in the right column on desktop.
   */
  imageOnly?: boolean;
}

export default function HeroBannerSkeleton({
  size = 'default',
  imageOnly = false,
}: HeroBannerSkeletonProps) {
  if (size === 'compact') {
    return (
      <section className='relative flex items-center overflow-hidden bg-transparent pt-4 pb-2 md:pt-7'>
        <div className='m-auto w-[94%] max-w-405'>
          <div className='mx-auto max-w-[100vw] text-center md:w-full'>
            <Shimmer className='mx-auto h-8 w-4/5 md:h-9 md:w-2/5' />
            <div className='mx-auto mt-3 max-w-2xl space-y-2'>
              <Shimmer className='mx-auto h-4 w-full md:w-3/5' />
              <Shimmer className='mx-auto h-4 w-2/3 md:w-2/5' />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='relative isolate overflow-hidden bg-(--background) pt-4 md:pt-0'>
      <div className='m-auto w-[94%] max-w-405'>
        <div className='grid items-center gap-8 lg:grid-cols-2 lg:gap-8'>
          {!imageOnly && (
            <div className='max-w-2xl'>
              <Shimmer className='h-5 w-40' />
              <Shimmer className='mt-3 h-9 w-full md:h-11' />
              <Shimmer className='mt-2 h-9 w-3/4 md:h-11' />
              <div className='mt-4 space-y-2 md:mt-5'>
                <Shimmer className='h-4 w-full' />
                <Shimmer className='h-4 w-full' />
                <Shimmer className='h-4 w-2/3' />
              </div>
              <Shimmer className='mt-6 h-12 w-44' />
            </div>
          )}

          <div
            className={cn(
              'relative aspect-4/3 w-full overflow-hidden',
              imageOnly && 'lg:col-start-2',
            )}
          >
            <Shimmer className='h-full w-full bg-neutral-300!' />
          </div>
        </div>
      </div>
    </section>
  );
}
