import { flexCenterBetweenClasses, smallIconSizeClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import type { RefObject } from 'react';

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
          <span className='text-light text-xs!'>
            {dims.width} x {dims.height} px
          </span>
        )}
      </div>

      <div
        ref={previewRef}
        className='bg-primary relative w-full overflow-hidden rounded-lg border border-neutral-300'
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
              className={cn('absolute box-border', isDragging ? 'cursor-grabbing' : 'cursor-grab')}
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
                    <div key={i} className='border' style={{ borderColor: gridStroke }} />
                  ))}
                </div>
              </div>

              <div
                className={cn(
                  'absolute -top-1 -left-1 cursor-nwse-resize rounded-[2px] border-2 bg-white/80',
                  smallIconSizeClasses,
                )}
                style={{ borderColor: gridStroke }}
                onPointerDown={e => startResizeDrag(e, 'tl')}
              />
              <div
                className={cn(
                  'absolute -top-1 -right-1 cursor-nesw-resize rounded-[2px] border-2 bg-white/80',
                  smallIconSizeClasses,
                )}
                style={{ borderColor: gridStroke }}
                onPointerDown={e => startResizeDrag(e, 'tr')}
              />
              <div
                className={cn(
                  'absolute -bottom-1 -left-1 cursor-nesw-resize rounded-[2px] border-2 bg-white/80',
                  smallIconSizeClasses,
                )}
                style={{ borderColor: gridStroke }}
                onPointerDown={e => startResizeDrag(e, 'bl')}
              />
              <div
                className={cn(
                  'absolute -right-1 -bottom-1 cursor-nwse-resize rounded-[2px] border-2 bg-white/80',
                  smallIconSizeClasses,
                )}
                style={{ borderColor: gridStroke }}
                onPointerDown={e => startResizeDrag(e, 'br')}
              />
            </div>
          )}
        </div>
      </div>

      <p className='text-light mt-2 text-xs!'>{t.cropPreviewHelper}</p>
    </div>
  );
}
