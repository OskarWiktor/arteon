import ToolPanelSkeleton, { type ToolPanelVariant } from './ToolPanelSkeleton';
import BreadcrumbsSkeleton from '../../organisms/skeletons/BreadcrumbsSkeleton';
import ContentSkeleton from '../../organisms/skeletons/ContentSkeleton';
import HeroBannerSkeleton from '../../organisms/skeletons/HeroBannerSkeleton';

interface ToolPageSkeletonProps {
  variant?: ToolPanelVariant;
}

export default function ToolPageSkeleton({
  variant = 'default',
}: ToolPageSkeletonProps) {
  return (
    <>
      <HeroBannerSkeleton size='compact' />
      <BreadcrumbsSkeleton size='compact' />
      <ToolPanelSkeleton variant={variant} />
      <ContentSkeleton />
    </>
  );
}
