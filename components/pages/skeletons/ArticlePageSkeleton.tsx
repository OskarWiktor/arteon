import Divider from '@/components/atoms/Divider';
import { cn } from '@/lib/clsx';
import { columnGapClasses } from '@/lib/uiClasses';
import Shimmer from '../../atoms/skeletons/Shimmer';
import BreadcrumbsSkeleton from '../../organisms/skeletons/BreadcrumbsSkeleton';
import CarouselSkeleton from '../../organisms/skeletons/CarouselSkeleton';
import CTABannerSkeleton from '../../organisms/skeletons/CTABannerSkeleton';
import HeroBannerSkeleton from '../../organisms/skeletons/HeroBannerSkeleton';

/** Placeholder for the article's right-hand share + table-of-contents column. */
function ArticleSidebarSkeleton() {
  return (
    <div className='space-y-6'>
      <div className='flex gap-2'>
        {[0, 1, 2, 3].map(i => (
          <Shimmer key={i} className='h-9 w-9' />
        ))}
      </div>
      <div className='space-y-3'>
        <Shimmer className='h-5 w-2/3' />
        {Array.from({ length: 6 }).map((_, i) => (
          <Shimmer key={i} className='h-3.5 w-full' />
        ))}
      </div>
    </div>
  );
}

export default function ArticlePageSkeleton() {
  return (
    <>
      <HeroBannerSkeleton imageOnly />
      <BreadcrumbsSkeleton />

      <div
        className={cn(
          'm-auto flex w-[94%] max-w-405 flex-col-reverse lg:grid lg:grid-cols-[1fr_300px]',
          columnGapClasses,
        )}
      >
        <div>
          <Shimmer className='h-9 w-4/5 md:h-11' />
          <div className='mt-5 flex flex-wrap gap-2'>
            {['w-28', 'w-40', 'w-32'].map((width, i) => (
              <Shimmer key={i} className={`h-6 ${width}`} />
            ))}
          </div>

          <Divider size='xs' />

          <div className='space-y-4'>
            <Shimmer className='h-4 w-full' />
            <Shimmer className='h-4 w-full' />
            <Shimmer className='h-4 w-5/6' />
            <Shimmer className='mt-6 aspect-video w-full bg-neutral-300!' />
            <Shimmer className='mt-6 h-4 w-full' />
            <Shimmer className='h-4 w-full' />
            <Shimmer className='h-4 w-3/4' />
            <Shimmer className='mt-6 h-6 w-2/5' />
            <Shimmer className='h-4 w-full' />
            <Shimmer className='h-4 w-full' />
            <Shimmer className='h-4 w-4/5' />
          </div>
        </div>

        <ArticleSidebarSkeleton />
      </div>

      <div className='m-auto w-[94%] max-w-405'>
        <Divider />
        <CarouselSkeleton variant='article' />
      </div>

      <Divider />
      <CTABannerSkeleton />
    </>
  );
}
