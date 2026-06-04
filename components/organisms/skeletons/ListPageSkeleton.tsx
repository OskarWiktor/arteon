import CardGridSkeleton from './CardGridSkeleton';
import CTABannerSkeleton from './CTABannerSkeleton';
import DividerSkeleton from './GapSkeleton';
import HeroBannerSkeleton from './HeroBannerSkeleton';

interface ListPageSkeletonProps {
  variant?: 'article' | 'project';
}

export default function ListPageSkeleton({
  variant = 'article',
}: ListPageSkeletonProps) {
  return (
    <>
      <HeroBannerSkeleton />
      <div className='m-auto w-[94%] max-w-[1420px] 2xl:max-w-none'>
        <DividerSkeleton variant='space' />
        <CardGridSkeleton count={6} cols={3} variant={variant} />
        <DividerSkeleton variant='space' />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
