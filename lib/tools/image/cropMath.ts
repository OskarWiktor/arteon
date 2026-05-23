import type { GridColor } from '@/types/tools/image';

export function getCropRect(
  ow: number,
  oh: number,
  targetAspect: number,
  cropX: number,
  cropY: number,
  zoom: number,
) {
  const originalAspect = ow / oh;
  let baseW: number;
  let baseH: number;

  if (originalAspect > targetAspect) {
    baseH = oh;
    baseW = oh * targetAspect;
  } else {
    baseW = ow;
    baseH = ow / targetAspect;
  }

  const zoomClamped = Math.max(1, Math.min(zoom, 10));
  const cropW = baseW / zoomClamped;
  const cropH = baseH / zoomClamped;

  const halfW = cropW / 2;
  const halfH = cropH / 2;

  const minCenterX = halfW;
  const maxCenterX = ow - halfW;
  const minCenterY = halfH;
  const maxCenterY = oh - halfH;

  const centerX = minCenterX + (maxCenterX - minCenterX) * cropX;
  const centerY = minCenterY + (maxCenterY - minCenterY) * cropY;

  const x = centerX - halfW;
  const y = centerY - halfH;

  return { x, y, cropW, cropH, centerX, centerY };
}

export function getGridStroke(color: GridColor): string {
  switch (color) {
    case 'emerald':
      return 'rgba(16, 185, 129, 0.9)';
    case 'white':
      return 'rgba(255, 255, 255, 0.9)';
    case 'black':
      return 'rgba(0, 0, 0, 0.9)';
    case 'red':
      return 'rgba(239, 68, 68, 0.95)';
    case 'yellow':
      return 'rgba(234, 179, 8, 0.95)';
    default:
      return 'rgba(16, 185, 129, 0.9)';
  }
}
