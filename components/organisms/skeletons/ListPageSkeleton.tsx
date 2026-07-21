import Divider from '@/components/atoms/Divider';
import BenefitBeltSkeleton from './BenefitBeltSkeleton';
import CardGridSkeleton from './CardGridSkeleton';
import CTABannerSkeleton from './CTABannerSkeleton';
import HeroBannerSkeleton from './HeroBannerSkeleton';
import Shimmer from '../../atoms/skeletons/Shimmer';

interface ListPageSkeletonProps {
  variant?: 'article' | 'project';
}

/** Placeholder for the filter toolbar shown above the listing grid. */
function FiltersSkeleton() {
  return (
    <div className='mb-6 flex flex-wrap gap-3'>
      {['w-20', 'w-24', 'w-16', 'w-24', 'w-16'].map((width, i) => (
        <Shimmer key={i} className={`h-9 ${width}`} />
      ))}
    </div>
  );
}

export default function ListPageSkeleton({
  variant = 'article',
}: ListPageSkeletonProps) {
  return (
    <>
      <HeroBannerSkeleton />
      <BenefitBeltSkeleton />
      <div className='m-auto w-[94%] max-w-405'>
        <Divider size='xs' />
        <FiltersSkeleton />
        <CardGridSkeleton count={6} variant={variant} />
        <Divider size='sm' />
      </div>
      <CTABannerSkeleton />
    </>
  );
}
