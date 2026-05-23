import SectionInfoSkeleton from './SectionInfoSkeleton';
import SectionStepsSkeleton from './SectionStepsSkeleton';
import FaqSkeleton from './FaqSkeleton';
import DividerSkeleton from './GapSkeleton';

export default function ContentSkeleton() {
  return (
    <div className='m-auto w-[94%] max-w-[1420px] 2xl:max-w-none'>
      <DividerSkeleton variant='line' />
      <SectionInfoSkeleton />
      <DividerSkeleton variant='space' />
      <SectionStepsSkeleton cols={3} />
      <DividerSkeleton variant='space' />
      <FaqSkeleton count={3} />
      <div className='my-20 md:my-32' />
    </div>
  );
}
