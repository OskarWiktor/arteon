import Divider from '@/components/atoms/Divider';
import BreadcrumbsSkeleton from './BreadcrumbsSkeleton';
import CarouselSkeleton from './CarouselSkeleton';
import CTABannerSkeleton from './CTABannerSkeleton';
import HeroBannerSkeleton from './HeroBannerSkeleton';
import Shimmer from '../../atoms/skeletons/Shimmer';

/** Placeholder for the project's right-hand share + table-of-contents column. */
function ProjectSidebarSkeleton() {
  return (
    <div className='space-y-6'>
      <div className='flex gap-2'>
        {[0, 1, 2, 3].map(i => (
          <Shimmer key={i} className='h-9 w-9' />
        ))}
      </div>
      <div className='space-y-3'>
        <Shimmer className='h-5 w-2/3' />
        {Array.from({ length: 5 }).map((_, i) => (
          <Shimmer key={i} className='h-3.5 w-full' />
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetailSkeleton() {
  return (
    <>
      <HeroBannerSkeleton imageOnly />
      <BreadcrumbsSkeleton />

      <div className='m-auto flex w-[94%] max-w-405 flex-col-reverse gap-8 lg:grid lg:grid-cols-[1fr_208px]'>
        <div>
          <Shimmer className='h-9 w-4/5 md:h-11' />
          <Shimmer className='mt-4 h-3.5 w-40' />
          <div className='mt-4 space-y-2'>
            <Shimmer className='h-4 w-full' />
            <Shimmer className='h-4 w-5/6' />
          </div>
          <div className='mt-4 flex flex-wrap gap-1'>
            {['w-24', 'w-28', 'w-20', 'w-32'].map((width, i) => (
              <Shimmer key={i} className={`h-6 ${width}`} />
            ))}
          </div>
          <Shimmer className='mt-4 h-11 w-40' />

          <Divider size='sm' line />

          <Shimmer className='h-7 w-2/5' />
          <div className='mt-4 space-y-2'>
            <Shimmer className='h-4 w-full' />
            <Shimmer className='h-4 w-full' />
            <Shimmer className='h-4 w-4/5' />
          </div>
          <Shimmer className='mt-6 aspect-video w-full bg-neutral-300!' />
          <div className='mt-6 space-y-2'>
            <Shimmer className='h-4 w-full' />
            <Shimmer className='h-4 w-5/6' />
          </div>
        </div>

        <ProjectSidebarSkeleton />
      </div>

      <div className='m-auto w-[94%] max-w-405'>
        <Divider />
        <CarouselSkeleton variant='project' />
      </div>

      <Divider />
      <CTABannerSkeleton />
    </>
  );
}
