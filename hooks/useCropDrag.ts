'use client';

import {
  useRef,
  useState,
  type Dispatch,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
  type SetStateAction,
} from 'react';
import { getCropRect } from '@/lib/tools/image/cropMath';
import type { ActiveTool, Dims } from '@/types/tools/image';

type DragMode = 'none' | 'move' | 'resize';

type DragState = {
  mode: DragMode;
  startX: number;
  startY: number;
  startCropX: number;
  startCropY: number;
  startZoom: number;
  anchorX: number;
  anchorY: number;
  corner: 'tl' | 'tr' | 'bl' | 'br' | null;
};

type CropStateLike = {
  cropX: number;
  cropY: number;
  cropZoom: number;
};

type UseCropDragOptions<State extends CropStateLike> = {
  imageUrl: string | null;
  originalWidth: number | null;
  originalHeight: number | null;
  cropX: number;
  cropY: number;
  cropZoom: number;
  effectiveDims: Dims | null;
  previewRef: RefObject<HTMLDivElement | null>;
  setState: Dispatch<SetStateAction<State>>;
  setActiveTool: Dispatch<SetStateAction<ActiveTool>>;
};

export type MoveUpdateParams = {
  originalWidth: number;
  originalHeight: number;
  effectiveDims: Dims;
  cropZoom: number;
  startCropX: number;
  startCropY: number;
  startX: number;
  startY: number;
  clientX: number;
  clientY: number;
  rectWidth: number;
  rectHeight: number;
};

export function computeMoveCropUpdate(params: MoveUpdateParams): {
  cropX: number;
  cropY: number;
} {
  const {
    originalWidth,
    originalHeight,
    effectiveDims,
    cropZoom,
    startCropX,
    startCropY,
    startX,
    startY,
    clientX,
    clientY,
    rectWidth,
    rectHeight,
  } = params;

  const targetAspect = effectiveDims.width / effectiveDims.height;
  const cropRect = getCropRect(
    originalWidth,
    originalHeight,
    targetAspect,
    startCropX,
    startCropY,
    cropZoom,
  );

  const rangeX = Math.max(originalWidth - cropRect.cropW, 1);
  const rangeY = Math.max(originalHeight - cropRect.cropH, 1);

  const deltaX = clientX - startX;
  const deltaY = clientY - startY;

  const factorX = originalWidth / (rangeX * rectWidth);
  const factorY = originalHeight / (rangeY * rectHeight);

  const nextCropX = Math.min(1, Math.max(0, startCropX + deltaX * factorX));
  const nextCropY = Math.min(1, Math.max(0, startCropY + deltaY * factorY));

  return { cropX: nextCropX, cropY: nextCropY };
}

export type ResizeUpdateParams = {
  originalWidth: number;
  originalHeight: number;
  effectiveDims: Dims;
  anchorX: number;
  anchorY: number;
  clientX: number;
  clientY: number;
  rectLeft: number;
  rectTop: number;
  rectWidth: number;
  rectHeight: number;
};

export function computeResizeCropUpdate(
  params: ResizeUpdateParams,
): { cropX: number; cropY: number; cropZoom: number } | null {
  const {
    originalWidth: ow,
    originalHeight: oh,
    effectiveDims,
    anchorX,
    anchorY,
    clientX,
    clientY,
    rectLeft,
    rectTop,
    rectWidth,
    rectHeight,
  } = params;

  const aspect = effectiveDims.width / effectiveDims.height;

  const relX = (clientX - rectLeft) / rectWidth;
  const relY = (clientY - rectTop) / rectHeight;
  const px = Math.min(1, Math.max(0, relX)) * ow;
  const py = Math.min(1, Math.max(0, relY)) * oh;

  const dx = px - anchorX;
  const dy = py - anchorY;

  if (dx === 0 && dy === 0) return null;

  const signX = dx >= 0 ? 1 : -1;
  const signY = dy >= 0 ? 1 : -1;

  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);

  const wByDx = absDx;
  const hByDx = wByDx / aspect;

  const hByDy = absDy;
  const wByDy = hByDy * aspect;

  let w = wByDx;
  let h = hByDx;

  if (hByDx > absDy) {
    w = wByDy;
    h = hByDy;
  }

  const minSize = Math.max(4, Math.min(ow, oh) * 0.01);
  if (w < minSize || h < minSize) {
    w = minSize;
    h = minSize / aspect;
  }

  let maxH = signY > 0 ? oh - anchorY : anchorY;
  let maxW = signX > 0 ? ow - anchorX : anchorX;
  maxW = Math.max(maxW, minSize);
  maxH = Math.max(maxH, minSize);

  const limitedW = Math.min(w, maxW);
  const limitedH = Math.min(h, maxH);

  let width = limitedW;
  let height = width / aspect;
  if (height > limitedH) {
    height = limitedH;
    width = height * aspect;
  }

  const x0 = signX > 0 ? anchorX : anchorX - width;
  const y0 = signY > 0 ? anchorY : anchorY - height;

  const centerX = x0 + width / 2;
  const centerY = y0 + height / 2;

  const originalAspect = ow / oh;
  const baseW = originalAspect > aspect ? oh * aspect : ow;

  let zoom = baseW / width;
  zoom = Math.max(1, Math.min(10, zoom));

  const halfW = width / 2;
  const halfH = height / 2;
  const minCenterX = halfW;
  const maxCenterX = ow - halfW;
  const minCenterY = halfH;
  const maxCenterY = oh - halfH;

  const clampedCenterX = Math.min(maxCenterX, Math.max(minCenterX, centerX));
  const clampedCenterY = Math.min(maxCenterY, Math.max(minCenterY, centerY));

  const nextCropX =
    (clampedCenterX - minCenterX) / (maxCenterX - minCenterX || 1);
  const nextCropY =
    (clampedCenterY - minCenterY) / (maxCenterY - minCenterY || 1);

  return { cropX: nextCropX, cropY: nextCropY, cropZoom: zoom };
}

export function useCropDrag<State extends CropStateLike>(
  options: UseCropDragOptions<State>,
) {
  const {
    imageUrl,
    originalWidth,
    originalHeight,
    cropX,
    cropY,
    cropZoom,
    effectiveDims,
    previewRef,
    setState,
    setActiveTool,
  } = options;

  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef<DragState>({
    mode: 'none',
    startX: 0,
    startY: 0,
    startCropX: 0.5,
    startCropY: 0.5,
    startZoom: 1,
    anchorX: 0,
    anchorY: 0,
    corner: null,
  });

  const endDrag = () => {
    dragRef.current.mode = 'none';
    setIsDragging(false);
  };

  const startMoveDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!imageUrl || !previewRef.current) return;

    e.currentTarget.setPointerCapture(e.pointerId);

    dragRef.current.mode = 'move';
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
    dragRef.current.startCropX = cropX;
    dragRef.current.startCropY = cropY;
    dragRef.current.startZoom = cropZoom;
    dragRef.current.corner = null;

    setIsDragging(true);
    setActiveTool('position');
  };

  const startResizeDrag = (
    e: ReactPointerEvent<HTMLDivElement>,
    corner: 'tl' | 'tr' | 'bl' | 'br',
  ) => {
    if (!imageUrl || !previewRef.current || !originalWidth || !originalHeight) {
      return;
    }
    if (!effectiveDims) return;

    const targetAspect = effectiveDims.width / effectiveDims.height;
    const cropRect = getCropRect(
      originalWidth,
      originalHeight,
      targetAspect,
      cropX,
      cropY,
      cropZoom,
    );

    let anchorX = cropRect.x;
    let anchorY = cropRect.y;

    switch (corner) {
      case 'tl':
        anchorX = cropRect.x + cropRect.cropW;
        anchorY = cropRect.y + cropRect.cropH;
        break;
      case 'tr':
        anchorX = cropRect.x;
        anchorY = cropRect.y + cropRect.cropH;
        break;
      case 'bl':
        anchorX = cropRect.x + cropRect.cropW;
        anchorY = cropRect.y;
        break;
      case 'br':
        anchorX = cropRect.x;
        anchorY = cropRect.y;
        break;
    }

    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);

    dragRef.current.mode = 'resize';
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
    dragRef.current.startCropX = cropX;
    dragRef.current.startCropY = cropY;
    dragRef.current.startZoom = cropZoom;
    dragRef.current.anchorX = anchorX;
    dragRef.current.anchorY = anchorY;
    dragRef.current.corner = corner;

    setIsDragging(true);
    setActiveTool('zoom');
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current.mode === 'none' || !previewRef.current) return;

    if (!originalWidth || !originalHeight) return;

    const rect = previewRef.current.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    if (!effectiveDims) return;

    const mode = dragRef.current.mode;
    const d = dragRef.current;

    if (mode === 'move') {
      const update = computeMoveCropUpdate({
        originalWidth,
        originalHeight,
        effectiveDims,
        cropZoom,
        startCropX: d.startCropX,
        startCropY: d.startCropY,
        startX: d.startX,
        startY: d.startY,
        clientX: e.clientX,
        clientY: e.clientY,
        rectWidth: rect.width,
        rectHeight: rect.height,
      });
      setState(prev => ({ ...prev, ...update }));
      return;
    }

    if (mode === 'resize') {
      const update = computeResizeCropUpdate({
        originalWidth,
        originalHeight,
        effectiveDims,
        anchorX: d.anchorX,
        anchorY: d.anchorY,
        clientX: e.clientX,
        clientY: e.clientY,
        rectLeft: rect.left,
        rectTop: rect.top,
        rectWidth: rect.width,
        rectHeight: rect.height,
      });
      if (!update) return;
      setState(prev => ({ ...prev, ...update }));
    }
  };

  const handlePointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    endDrag();
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerLeave = () => {
    endDrag();
  };

  return {
    isDragging,
    startMoveDrag,
    startResizeDrag,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
  };
}
