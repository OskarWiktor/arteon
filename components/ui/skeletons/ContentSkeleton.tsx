import SectionInfoSkeleton from './SectionInfoSkeleton';
import SectionStepsSkeleton from './SectionStepsSkeleton';
import FaqSkeleton from './FaqSkeleton';
import GapSkeleton from './GapSkeleton';

export default function ContentSkeleton() {
  return (
    <div className="m-auto w-[94%] max-w-[1420px]">
      <GapSkeleton variant="line" />
      <SectionInfoSkeleton />
      <GapSkeleton variant="space" />
      <SectionStepsSkeleton cols={3} />
      <GapSkeleton variant="space" />
      <FaqSkeleton count={3} />
      <div className="my-20 md:my-32" />
    </div>
  );
}
