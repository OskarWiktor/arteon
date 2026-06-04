import type { RefObject } from 'react';
import {
  flexCenterBetweenClasses,
  smallIconSizeClasses,
} from '@/lib/uiClasses';
import { cn } from '@/lib/utils';

type CropRect = {
  left: string;
  top: string;
  width: string;
  height: string;
};

type Props = {
  imageUrl: string;
  fileName: string;
  previewPadding: number;
  cropRectPreview: CropRect | null;
  gridStroke: string;
  selectionShapeClass: string;
  isDragging: boolean;
  previewRef: RefObject<HTMLDivElement | null>;
  startMoveDrag: (e: React.PointerEvent<HTMLDivElement>) => void;
  startResizeDrag: (
    e: React.PointerEvent<HTMLDivElement>,
    corner: 'tl' | 'tr' | 'bl' | 'br',
  ) => void;
  handlePointerMove: (e: React.PointerEvent<HTMLDivElement>) => void;
  handlePointerUp: (e: React.PointerEvent<HTMLDivElement>) => void;
  handlePointerLeave: () => void;
  dims: { width: number; height: number } | null;
  t: {
    cropPreview: string;
    cropPreviewHelper: string;
    previewAlt: string;
  };
};

/**
 * Renders an image preview with an optional draggable, resizable crop rectangle overlay.
 *
 * Renders a header with an optional computed dimensions label, a fixed-aspect preview area (controlled by `previewPadding`) that contains the image, and — when `cropRectPreview` is provided — an interactive crop overlay with a 3x3 grid and corner resize handles.
 *
 * @param cropRectPreview - CSS positioning/size for the overlay (`left`, `top`, `width`, `height` as CSS values). When omitted, no crop overlay is shown.
 * @param previewPadding - Bottom padding percentage used to enforce the preview's aspect ratio (applied as `padding-bottom: {previewPadding}%`).
 * @param gridStroke - CSS color used for the grid cell borders and handle outlines.
 * @param selectionShapeClass - Additional classes applied to the overlay and grid to control selection appearance.
 * @param isDragging - When true, the overlay shows a grabbing cursor.
 * @param previewRef - Ref attached to the preview container element.
 * @param startMoveDrag - Pointer down handler that begins moving the crop rectangle.
 * @param startResizeDrag - Pointer down handler that begins resizing; called with the pointer event and corner identifier ('tl'|'tr'|'bl'|'br').
 * @param handlePointerMove - Pointer move handler used while dragging/resizing.
 * @param handlePointerUp - Pointer up handler to end dragging/resizing.
 * @param handlePointerLeave - Pointer leave handler to abort or finish interactions when the pointer leaves the overlay.
 * @param dims - Optional display dimensions object with `{ width, height }` shown in the header when present.
 * @param t - Localization strings used for labels: `{ cropPreview, cropPreviewHelper, previewAlt }`.
 */
export default function CropPreview({
  imageUrl,
  fileName,
  previewPadding,
  cropRectPreview,
  gridStroke,
  selectionShapeClass,
  isDragging,
  previewRef,
  startMoveDrag,
  startResizeDrag,
  handlePointerMove,
  handlePointerUp,
  handlePointerLeave,
  dims,
  t,
}: Props) {
  return (
    <div>
      <div className={cn('mt-4 mb-2', flexCenterBetweenClasses)}>
        <h3 className='h6'>{t.cropPreview}</h3>
        {dims && (
          <span className='text-xs! text-light'>
            {dims.width} x {dims.height} px
          </span>
        )}
      </div>

      <div
        ref={previewRef}
        className='relative w-full overflow-hidden rounded-lg border border-neutral-300 bg-primary'
        style={{ paddingBottom: `${previewPadding}%` }}
      >
        <div className='absolute inset-0'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={fileName || t.previewAlt}
            className='h-full w-full object-contain'
            draggable={false}
          />

          {cropRectPreview && (
            <div
              onPointerDown={startMoveDrag}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerLeave}
              className={cn(
                'absolute box-border',
                isDragging ? 'cursor-grabbing' : 'cursor-grab',
              )}
              style={{ ...cropRectPreview }}
            >
              <div className='pointer-events-none absolute inset-0'>
                <div
                  className={cn(
                    'absolute inset-0 shadow-[0_0_0_9999px_rgba(0,0,0,0.55)]',
                    selectionShapeClass,
                  )}
                />
                <div
                  className={cn(
                    'absolute inset-0 grid grid-cols-3 grid-rows-3 overflow-hidden',
                    selectionShapeClass,
                  )}
                >
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className='border'
                      style={{ borderColor: gridStroke }}
                    />
                  ))}
                </div>
              </div>

              <div
                className={cn(
                  'absolute -top-1 -left-1 cursor-nwse-resize rounded-xs border-2 bg-white/80',
                  smallIconSizeClasses,
                )}
                style={{ borderColor: gridStroke }}
                onPointerDown={e => startResizeDrag(e, 'tl')}
              />
              <div
                className={cn(
                  'absolute -top-1 -right-1 cursor-nesw-resize rounded-xs border-2 bg-white/80',
                  smallIconSizeClasses,
                )}
                style={{ borderColor: gridStroke }}
                onPointerDown={e => startResizeDrag(e, 'tr')}
              />
              <div
                className={cn(
                  'absolute -bottom-1 -left-1 cursor-nesw-resize rounded-xs border-2 bg-white/80',
                  smallIconSizeClasses,
                )}
                style={{ borderColor: gridStroke }}
                onPointerDown={e => startResizeDrag(e, 'bl')}
              />
              <div
                className={cn(
                  'absolute -right-1 -bottom-1 cursor-nwse-resize rounded-xs border-2 bg-white/80',
                  smallIconSizeClasses,
                )}
                style={{ borderColor: gridStroke }}
                onPointerDown={e => startResizeDrag(e, 'br')}
              />
            </div>
          )}
        </div>
      </div>

      <p className='mt-2 text-xs! text-light'>{t.cropPreviewHelper}</p>
    </div>
  );
}
