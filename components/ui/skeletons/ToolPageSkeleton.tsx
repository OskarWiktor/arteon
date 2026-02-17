import HeroBannerSkeleton from './HeroBannerSkeleton';
import BreadcrumbsSkeleton from './BreadcrumbsSkeleton';
import ToolPanelSkeleton, { type ToolPanelVariant } from './ToolPanelSkeleton';
import ContentSkeleton from './ContentSkeleton';

interface ToolPageSkeletonProps {
  variant?: ToolPanelVariant;
}

export default function ToolPageSkeleton({ variant = 'default' }: ToolPageSkeletonProps) {
  return (
    <>
      <HeroBannerSkeleton size="tools" />
      <BreadcrumbsSkeleton size="compact" />
      <ToolPanelSkeleton variant={variant} />
      <ContentSkeleton />
    </>
  );
}
