import HeroBannerSkeleton from '../../organisms/skeletons/HeroBannerSkeleton';
import BreadcrumbsSkeleton from '../../organisms/skeletons/BreadcrumbsSkeleton';
import ToolPanelSkeleton, { type ToolPanelVariant } from './ToolPanelSkeleton';
import ContentSkeleton from '../../organisms/skeletons/ContentSkeleton';

interface ToolPageSkeletonProps {
  variant?: ToolPanelVariant;
}

export default function ToolPageSkeleton({ variant = 'default' }: ToolPageSkeletonProps) {
  return (
    <>
      <HeroBannerSkeleton size='compact' />
      <BreadcrumbsSkeleton size='compact' />
      <ToolPanelSkeleton variant={variant} />
      <ContentSkeleton />
    </>
  );
}
