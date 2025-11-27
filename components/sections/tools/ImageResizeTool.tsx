'use client';

import Button from '@/components/ui/Button';
import { useEffect, useMemo, useRef, useState, type FormEvent, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react';
import { MdAlignHorizontalCenter, MdAlignVerticalCenter } from 'react-icons/md';
import { RiZoomInLine, RiDragMove2Line, RiRotateLockLine, RiGridLine, RiRulerLine, RiLayoutGridLine, RiCropLine } from 'react-icons/ri';

type ResizeMode = 'pixels' | 'preset';
type OutputFormat = 'jpg' | 'png' | 'webp';
type GridColor = 'emerald' | 'white' | 'black' | 'red' | 'yellow';
type ActiveTool = 'dimensions' | 'presets' | 'shapes' | 'zoom' | 'position' | 'rotation' | 'grid';

type ShapeType = 'rect' | 'square' | 'circle';
type ShapeAspect = '1:1' | '4:5' | '5:4' | '3:2' | '2:3' | '16:9' | '9:16';

const IMAGE_PRESETS = {
  social: [
    { key: 'ig-square', label: 'Instagram — post kwadrat (1080x1080)', width: 1080, height: 1080 },
    { key: 'ig-portrait', label: 'Instagram — post pion (1080x1350)', width: 1080, height: 1350 },
    { key: 'ig-story', label: 'Instagram — story / reels (1080x1920)', width: 1080, height: 1920 },
    { key: 'fb-post', label: 'Facebook — post (1200x630)', width: 1200, height: 630 },
    { key: 'fb-cover', label: 'Facebook — cover strony (820x360)', width: 820, height: 360 },
    { key: 'li-post', label: 'LinkedIn — post (1200x1200)', width: 1200, height: 1200 },
    { key: 'li-banner', label: 'LinkedIn — baner profilu (1584x396)', width: 1584, height: 396 },
  ],
  web: [
    { key: 'thumb', label: 'Miniatura artykułu (800x600)', width: 800, height: 600 },
    { key: 'hero', label: 'Hero sekcji (1920x1080)', width: 1920, height: 1080 },
    { key: 'bg', label: 'Tło sekcji (1920x1280)', width: 1920, height: 1280 },
  ],
} as const;

interface ResizeToolState {
  file: File | null;
  imageUrl: string | null;
  originalWidth: number | null;
  originalHeight: number | null;
  mode: ResizeMode;
  keepAspectRatio: boolean;
  targetWidth: number | null;
  targetHeight: number | null;
  selectedCategory: 'social' | 'web';
  selectedPresetKey: string | null;
  outputFormat: OutputFormat;
  outputQuality: number;
  cropX: number;
  cropY: number;
  cropZoom: number;
  rotation: number;
  gridColor: GridColor;
  shape: ShapeType;
  shapeAspect: ShapeAspect;
}

type DragMode = 'none' | 'move' | 'resize' | 'rotate';

interface DragState {
  mode: DragMode;
  startX: number;
  startY: number;
  startCropX: number;
  startCropY: number;
  startZoom: number;
  anchorX: number;
  anchorY: number;
  corner: 'tl' | 'tr' | 'bl' | 'br' | null;
  startRotation: number;
  centerClientX: number;
  centerClientY: number;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(value > 10 ? 1 : 2)} ${units[i]}`;
}

function getCropRect(ow: number, oh: number, targetAspect: number, cropX: number, cropY: number, zoom: number) {
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

function getGridStroke(color: GridColor): string {
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

interface ToolButtonProps {
  id: ActiveTool;
  activeTool: ActiveTool;
  onClick: (id: ActiveTool) => void;
  icon: ReactNode;
  label: string;
}

function ToolButton({ id, activeTool, onClick, icon, label }: ToolButtonProps) {
  const isActive = activeTool === id;

  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-[14px]! ${isActive ? 'bg-slate-600 text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

interface PillButtonProps<T extends string> {
  value: T;
  current: T;
  label: ReactNode;
  onChange: (value: T) => void;
  disabled?: boolean;
}

function PillButton<T extends string>({ value, current, label, onChange, disabled }: PillButtonProps<T>) {
  const isActive = value === current;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && onChange(value)}
      className={`rounded-full border px-3 py-1 text-[14px]! ${
        isActive ? 'bg-slate-600 text-white' : 'border-black/10 bg-white hover:bg-neutral-100'
      } ${disabled ? 'cursor-not-allowed opacity-40' : ''}`}
    >
      {label}
    </button>
  );
}

interface NumberFieldProps {
  label: string;
  suffix?: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  widthClass?: string;
}

function NumberField({ label, value, min, max, onChange, widthClass = 'w-20!' }: NumberFieldProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-medium">{label}</span>
      </div>
      <input
        type="number"
        min={min}
        max={max}
        className={`mt-1 ${widthClass} rounded-md border border-neutral-300 bg-white px-3! py-2! text-xs!`}
        value={value}
        onChange={(e) => {
          const raw = Number(e.target.value) || 0;
          const clamped = Math.min(max, Math.max(min, raw));
          onChange(clamped);
        }}
      />
    </div>
  );
}

const GRID_COLOR_OPTIONS: { value: GridColor; label: string }[] = [
  { value: 'emerald', label: 'Zielony' },
  { value: 'white', label: 'Biały' },
  { value: 'black', label: 'Czarny' },
  { value: 'red', label: 'Czerwony' },
  { value: 'yellow', label: 'Żółty' },
];

const SHAPE_OPTIONS: { value: ShapeType; label: string }[] = [
  { value: 'rect', label: 'Prostokąt' },
  { value: 'square', label: 'Kwadrat' },
  { value: 'circle', label: 'Koło' },
];

const RECT_ASPECTS: ShapeAspect[] = ['1:1', '4:5', '3:2', '16:9', '9:16'];

const TOOLBAR_ITEMS: { id: ActiveTool; label: string; icon: ReactNode }[] = [
  { id: 'dimensions', label: 'Wymiary w px', icon: <RiRulerLine className="text-base" /> },
  { id: 'presets', label: 'Gotowe formaty', icon: <RiLayoutGridLine className="text-base" /> },
  { id: 'shapes', label: 'Kształty kadru', icon: <RiCropLine className="text-base" /> },
  { id: 'zoom', label: 'Przybliżenie', icon: <RiZoomInLine className="text-base" /> },
  { id: 'position', label: 'Pozycja', icon: <RiDragMove2Line className="text-base" /> },
  { id: 'rotation', label: 'Obrót', icon: <RiRotateLockLine className="text-base" /> },
  { id: 'grid', label: 'Kolor siatki', icon: <RiGridLine className="text-base" /> },
];

export default function ImageResizeTool() {
  const [state, setState] = useState<ResizeToolState>({
    file: null,
    imageUrl: null,
    originalWidth: null,
    originalHeight: null,
    mode: 'pixels',
    keepAspectRatio: true,
    targetWidth: null,
    targetHeight: null,
    selectedCategory: 'social',
    selectedPresetKey: null,
    outputFormat: 'jpg',
    outputQuality: 0.85,
    cropX: 0.5,
    cropY: 0.5,
    cropZoom: 1,
    rotation: 0,
    gridColor: 'emerald',
    shape: 'rect',
    shapeAspect: '4:5',
  });

  const [activeTool, setActiveTool] = useState<ActiveTool>('dimensions');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [estimatedSize, setEstimatedSize] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const previewRef = useRef<HTMLDivElement | null>(null);
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
    startRotation: 0,
    centerClientX: 0,
    centerClientY: 0,
  });

  useEffect(() => {
    return () => {
      if (state.imageUrl) URL.revokeObjectURL(state.imageUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dims = useMemo(() => {
    const { originalWidth, originalHeight, targetWidth, targetHeight } = state;
    if (!originalWidth || !originalHeight || !targetWidth || !targetHeight) return null;
    return { width: targetWidth, height: targetHeight };
  }, [state.originalWidth, state.originalHeight, state.targetWidth, state.targetHeight]);

  const aspectRatioText = useMemo(() => (state.originalWidth && state.originalHeight ? (state.originalWidth / state.originalHeight).toFixed(2) : null), [state.originalWidth, state.originalHeight]);

  const inputFormat = useMemo(() => {
    if (!state.file) return null;
    const name = state.file.name;
    const extMatch = name.match(/\.([^.]+)$/);
    if (extMatch && extMatch[1]) return extMatch[1].toUpperCase();
    if (state.file.type && state.file.type.includes('/')) {
      const [, sub] = state.file.type.split('/');
      return sub.toUpperCase();
    }
    return 'N/D';
  }, [state.file]);

  const cropEnabled = !!state.imageUrl && !!dims && !!state.originalWidth && !!state.originalHeight;

  const previewPadding = useMemo(() => {
    if (state.originalWidth && state.originalHeight) {
      return (state.originalHeight / state.originalWidth) * 100;
    }
    return 56.25;
  }, [state.originalWidth, state.originalHeight]);

  const cropRectPreview = useMemo(() => {
    if (!cropEnabled || !state.originalWidth || !state.originalHeight || !dims) return null;
    const targetAspect = dims.width / dims.height;
    const rect = getCropRect(state.originalWidth, state.originalHeight, targetAspect, state.cropX, state.cropY, state.cropZoom);
    return {
      left: `${(rect.x / state.originalWidth) * 100}%`,
      top: `${(rect.y / state.originalHeight) * 100}%`,
      width: `${(rect.cropW / state.originalWidth) * 100}%`,
      height: `${(rect.cropH / state.originalHeight) * 100}%`,
    };
  }, [cropEnabled, dims, state.originalHeight, state.originalWidth, state.cropX, state.cropY, state.cropZoom]);

  const gridStroke = getGridStroke(state.gridColor);
  const presetList = IMAGE_PRESETS[state.selectedCategory];
  const shapeNeedsAlpha = state.shape === 'circle';
  const selectionShapeClass = state.shape === 'circle' ? 'rounded-full' : 'rounded-md';

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    if (state.imageUrl) URL.revokeObjectURL(state.imageUrl);

    const url = URL.createObjectURL(file);
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setState((prev) => ({
        ...prev,
        file,
        imageUrl: url,
        originalWidth: img.width,
        originalHeight: img.height,
        targetWidth: img.width,
        targetHeight: img.height,
        mode: 'pixels',
        cropX: 0.5,
        cropY: 0.5,
        cropZoom: 1,
        rotation: 0,
        selectedPresetKey: null,
        shape: 'rect',
      }));
      setError(null);
      setEstimatedSize(null);
      setActiveTool('dimensions');
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      setError('Nie udało się wczytać obrazu.');
    };
  };

  const handleDimensionChange = (type: 'width' | 'height', value: number | null) => {
    if (!state.originalWidth || !state.originalHeight) {
      setState((prev) => ({
        ...prev,
        [type === 'width' ? 'targetWidth' : 'targetHeight']: value,
        mode: 'pixels',
      }));
      return;
    }

    const keepRatio = state.keepAspectRatio;

    if (!keepRatio) {
      setState((prev) => ({
        ...prev,
        [type === 'width' ? 'targetWidth' : 'targetHeight']: value,
        mode: 'pixels',
      }));
      return;
    }

    const aspect = state.originalWidth / state.originalHeight;

    if (type === 'width') {
      const newWidth = value ?? 0;
      const newHeight = Math.round(newWidth / aspect);
      setState((prev) => ({
        ...prev,
        targetWidth: newWidth,
        targetHeight: newHeight,
        mode: 'pixels',
      }));
    } else {
      const newHeight = value ?? 0;
      const newWidth = Math.round(newHeight * aspect);
      setState((prev) => ({
        ...prev,
        targetHeight: newHeight,
        targetWidth: newWidth,
        mode: 'pixels',
      }));
    }
  };

  const applyShapeOnDimensions = (shape: ShapeType, aspect?: ShapeAspect) => {
    const currentDims = dims;
    if (!currentDims) return;

    if (shape === 'square' || shape === 'circle') {
      const side = Math.min(currentDims.width, currentDims.height);
      setState((prev) => ({
        ...prev,
        targetWidth: side,
        targetHeight: side,
      }));
    } else if (shape === 'rect' && aspect) {
      const [wPart, hPart] = aspect.split(':').map(Number);
      const width = currentDims.width;
      const height = Math.round((width * hPart) / wPart);
      setState((prev) => ({
        ...prev,
        targetWidth: width,
        targetHeight: height,
      }));
    }
  };

  const handleShapeChange = (shape: ShapeType) => {
    setState((prev) => ({
      ...prev,
      shape,
      selectedPresetKey: shape === 'circle' ? null : prev.selectedPresetKey,
      mode: shape === 'circle' ? 'pixels' : prev.mode,
    }));

    applyShapeOnDimensions(shape, state.shapeAspect);

    if (shape === 'circle' && state.outputFormat === 'jpg') {
      setState((prev) => ({
        ...prev,
        outputFormat: 'png',
      }));
    }
  };

  const handleShapeAspectChange = (aspect: ShapeAspect) => {
    setState((prev) => ({
      ...prev,
      shapeAspect: aspect,
    }));
    if (state.shape === 'rect') {
      applyShapeOnDimensions('rect', aspect);
    }
  };

  const handlePresetChange = (presetKey: string) => {
    const preset = presetList.find((p) => p.key === presetKey);
    if (!preset) return;

    setState((prev) => ({
      ...prev,
      selectedPresetKey: presetKey,
      targetWidth: preset.width,
      targetHeight: preset.height,
      mode: 'preset',
      cropX: 0.5,
      cropY: 0.5,
      cropZoom: 1,
      rotation: 0,
      shape: 'rect',
    }));
  };

  const handleDownload = () => {
    if (!state.file || !state.imageUrl) {
      setError('Dodaj najpierw zdjęcie.');
      return;
    }

    if (!dims) {
      setError('Ustaw poprawne wymiary docelowe.');
      return;
    }

    setIsProcessing(true);
    setError(null);

    const img = new Image();
    img.src = state.imageUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = dims.width;
      canvas.height = dims.height;
      const ctx = canvas.getContext('2d');
      if (!ctx || !state.originalWidth || !state.originalHeight) {
        setIsProcessing(false);
        setError('Twoja przeglądarka nie obsługuje kontekstu 2D.');
        return;
      }

      const targetAspect = dims.width / dims.height;
      const crop = getCropRect(state.originalWidth, state.originalHeight, targetAspect, state.cropX, state.cropY, state.cropZoom);

      const rad = (state.rotation * Math.PI) / 180;
      const W = dims.width;
      const H = dims.height;

      ctx.save();
      ctx.translate(W / 2, H / 2);

      if (state.shape === 'circle') {
        const r = Math.min(W, H) / 2;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
      }

      if (state.rotation !== 0) {
        ctx.rotate(rad);
      }

      ctx.drawImage(img, crop.x, crop.y, crop.cropW, crop.cropH, -W / 2, -H / 2, W, H);

      ctx.restore();

      let mime: string = 'image/jpeg';
      if (state.outputFormat === 'png') mime = 'image/png';
      if (state.outputFormat === 'webp') mime = 'image/webp';

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setError('Nie udało się wygenerować pliku.');
            setIsProcessing(false);
            return;
          }

          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          const baseName = state.file!.name.replace(/\.[^.]+$/, '');
          a.download = `${baseName}-${dims.width}x${dims.height}.${state.outputFormat}`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);

          setEstimatedSize(blob.size);
          setIsProcessing(false);
        },
        mime,
        state.outputFormat === 'png' ? undefined : state.outputQuality,
      );
    };

    img.onerror = () => {
      setError('Nie udało się wczytać obrazu.');
      setIsProcessing(false);
    };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleDownload();
  };

  const startMoveDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!state.imageUrl || !previewRef.current) return;

    e.currentTarget.setPointerCapture(e.pointerId);

    dragRef.current.mode = 'move';
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
    dragRef.current.startCropX = state.cropX;
    dragRef.current.startCropY = state.cropY;
    dragRef.current.startZoom = state.cropZoom;
    dragRef.current.corner = null;

    setIsDragging(true);
    setActiveTool('position');
  };

  const startResizeDrag = (e: ReactPointerEvent<HTMLDivElement>, corner: 'tl' | 'tr' | 'bl' | 'br') => {
    if (!state.imageUrl || !previewRef.current || !state.originalWidth || !state.originalHeight) {
      return;
    }
    if (!dims) return;

    const { originalWidth, originalHeight } = state;
    const targetAspect = dims.width / dims.height;

    const cropRect = getCropRect(originalWidth, originalHeight, targetAspect, state.cropX, state.cropY, state.cropZoom);

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
    dragRef.current.startCropX = state.cropX;
    dragRef.current.startCropY = state.cropY;
    dragRef.current.startZoom = state.cropZoom;
    dragRef.current.anchorX = anchorX;
    dragRef.current.anchorY = anchorY;
    dragRef.current.corner = corner;

    setIsDragging(true);
    setActiveTool('zoom');
  };

  const startRotateDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!state.imageUrl || !previewRef.current || !state.originalWidth || !state.originalHeight || !dims) {
      return;
    }

    const previewRect = previewRef.current.getBoundingClientRect();
    const targetAspect = dims.width / dims.height;
    const cropRect = getCropRect(state.originalWidth, state.originalHeight, targetAspect, state.cropX, state.cropY, state.cropZoom);

    const centerNormX = cropRect.centerX / state.originalWidth;
    const centerNormY = cropRect.centerY / state.originalHeight;

    const centerClientX = previewRect.left + centerNormX * previewRect.width;
    const centerClientY = previewRect.top + centerNormY * previewRect.height;

    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);

    dragRef.current.mode = 'rotate';
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
    dragRef.current.startRotation = state.rotation;
    dragRef.current.centerClientX = centerClientX;
    dragRef.current.centerClientY = centerClientY;

    setIsDragging(true);
    setActiveTool('rotation');
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current.mode === 'none' || !previewRef.current) return;

    const { originalWidth, originalHeight } = state;
    if (!originalWidth || !originalHeight) return;

    const rect = previewRef.current.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const mode = dragRef.current.mode;

    if (mode === 'move') {
      if (!dims) return;
      const targetAspect = dims.width / dims.height;

      const cropRect = getCropRect(originalWidth, originalHeight, targetAspect, dragRef.current.startCropX, dragRef.current.startCropY, state.cropZoom);

      const rangeX = Math.max(originalWidth - cropRect.cropW, 1);
      const rangeY = Math.max(originalHeight - cropRect.cropH, 1);

      const deltaX = e.clientX - dragRef.current.startX;
      const deltaY = e.clientY - dragRef.current.startY;

      const factorX = originalWidth / (rangeX * rect.width);
      const factorY = originalHeight / (rangeY * rect.height);

      let nextCropX = dragRef.current.startCropX + deltaX * factorX;
      let nextCropY = dragRef.current.startCropY + deltaY * factorY;

      nextCropX = Math.min(1, Math.max(0, nextCropX));
      nextCropY = Math.min(1, Math.max(0, nextCropY));

      setState((prev) => ({
        ...prev,
        cropX: nextCropX,
        cropY: nextCropY,
      }));
    } else if (mode === 'resize') {
      if (!dims) return;

      const ow = originalWidth;
      const oh = originalHeight;
      const aspect = dims.width / dims.height;

      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      const px = Math.min(1, Math.max(0, relX)) * ow;
      const py = Math.min(1, Math.max(0, relY)) * oh;

      const anchorX = dragRef.current.anchorX;
      const anchorY = dragRef.current.anchorY;

      let dx = px - anchorX;
      let dy = py - anchorY;

      if (dx === 0 && dy === 0) return;

      const signX = dx >= 0 ? 1 : -1;
      const signY = dy >= 0 ? 1 : -1;

      let absDx = Math.abs(dx);
      let absDy = Math.abs(dy);

      let wByDx = absDx;
      let hByDx = wByDx / aspect;

      let hByDy = absDy;
      let wByDy = hByDy * aspect;

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

      let maxW = signX > 0 ? ow - anchorX : anchorX;
      let maxH = signY > 0 ? oh - anchorY : anchorY;
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
      let baseW: number;
      let baseH: number;

      if (originalAspect > aspect) {
        baseH = oh;
        baseW = oh * aspect;
      } else {
        baseW = ow;
        baseH = ow / aspect;
      }

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

      const cropX = (clampedCenterX - minCenterX) / (maxCenterX - minCenterX || 1);
      const cropY = (clampedCenterY - minCenterY) / (maxCenterY - minCenterY || 1);

      setState((prev) => ({
        ...prev,
        cropX,
        cropY,
        cropZoom: zoom,
      }));
    } else if (mode === 'rotate') {
      const { centerClientX, centerClientY, startX, startY, startRotation } = dragRef.current;

      const startAngle = Math.atan2(startY - centerClientY, startX - centerClientX);
      const currentAngle = Math.atan2(e.clientY - centerClientY, e.clientX - centerClientX);

      let deltaDeg = ((currentAngle - startAngle) * 180) / Math.PI;
      if (deltaDeg > 180) deltaDeg -= 360;
      if (deltaDeg < -180) deltaDeg += 360;

      let newRotation = startRotation + deltaDeg;
      newRotation = Math.max(-45, Math.min(45, newRotation));
      newRotation = Math.round(newRotation * 10) / 10;

      setState((prev) => ({
        ...prev,
        rotation: newRotation,
      }));
    }
  };

  const endDrag = () => {
    dragRef.current.mode = 'none';
    setIsDragging(false);
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

  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2.5fr)]">
      <section className="space-y-4 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <p className="mb-2 font-semibold uppercase">Dodaj zdjęcie</p>
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 text-center hover:border-neutral-500 hover:bg-neutral-100">
              <span className="mb-1 text-sm! font-medium">Przeciągnij i upuść zdjęcie tutaj</span>
              <span className="mb-2 text-xs! text-[#5e5e5e]">lub kliknij, aby wybrać plik z dysku</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs! font-medium text-neutral-800 shadow-sm">Obsługiwane: JPG, PNG, WebP</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0] ?? null;
                  handleFileChange(file);
                  e.target.value = '';
                }}
              />
            </label>
            {state.file && (
              <p className="mt-2 text-xs! text-[#5e5e5e]">
                Aktualny plik: <strong>{state.file.name}</strong>
              </p>
            )}
          </div>

          <div className="mt-4 rounded-2xl border border-black/10 bg-white/90 p-4 text-xs! text-[#5e5e5e]">
            <h3 className="h6 mb-2">Parametry obrazu</h3>
            {!state.imageUrl && <p>Brak danych - dodaj zdjęcie.</p>}
            {state.imageUrl && (
              <div className="space-y-1 text-sm!">
                <p className="text-xs!">
                  Oryginalne:{' '}
                  <strong>
                    {state.originalWidth} x {state.originalHeight} px
                  </strong>
                </p>
                {aspectRatioText && (
                  <p className="text-xs!">
                    Proporcje: <strong>{aspectRatioText} : 1</strong>
                  </p>
                )}
                {dims && (
                  <p className="text-xs!">
                    Docelowe:{' '}
                    <strong>
                      {dims.width} x {dims.height} px
                    </strong>
                  </p>
                )}
                {inputFormat && (
                  <p className="text-xs!">
                    Format wejściowy: <strong>{inputFormat}</strong>
                  </p>
                )}
                <p className="text-xs!">
                  Format wyjściowy: <strong>{state.outputFormat.toUpperCase()}</strong>
                </p>
                <p className="text-xs!">
                  Obrót: <strong>{state.rotation}°</strong>
                </p>
                <p className="text-xs!">
                  Kształt: <strong>{state.shape === 'rect' ? 'Prostokąt' : state.shape === 'square' ? 'Kwadrat' : 'Koło'}</strong>
                </p>
                {state.file && (
                  <p className="text-xs!">
                    Plik źródłowy: <strong>{formatBytes(state.file.size)}</strong>
                  </p>
                )}
                {estimatedSize !== null && (
                  <p className="text-xs!">
                    Szacowany wynik: <strong>{formatBytes(estimatedSize)}</strong>
                  </p>
                )}
              </div>
            )}
          </div>

          <div>
            <p className="mt-4 mb-2 font-semibold uppercase">Konwertuj i pobierz</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {(['jpg', 'png', 'webp'] as OutputFormat[]).map((fmt) => (
                <PillButton
                  key={fmt}
                  value={fmt}
                  current={state.outputFormat}
                  label={fmt.toUpperCase()}
                  disabled={shapeNeedsAlpha && fmt === 'jpg'}
                  onChange={(value) =>
                    setState((prev) => ({
                      ...prev,
                      outputFormat: value as OutputFormat,
                    }))
                  }
                />
              ))}
            </div>

            {state.outputFormat !== 'png' && (
              <div className="mt-4 space-y-1 text-sm">
                <label className="flex items-center justify-between text-[14px]! font-medium">
                  <span>Jakość (JPG/WEBP)</span>
                  <span>{Math.round(state.outputQuality * 100)}%</span>
                </label>
                <input
                  type="range"
                  min={60}
                  max={100}
                  value={Math.round(state.outputQuality * 100)}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      outputQuality: Number(e.target.value) / 100,
                    }))
                  }
                  className="w-full! p-0!"
                />
                <p className="text-xs! text-[#5e5e5e]">Niższa jakość = mniejszy plik. Dla sociali często 70-85% to dobry kompromis.</p>
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="accent" size="small" type="submit" disabled={isProcessing || !state.file} className="disabled:opacity-60">
                {isProcessing ? 'Przetwarzanie…' : 'Zmień rozmiar i pobierz'}
              </Button>
            </div>

            {error && (
              <p className="mt-2 text-xs! text-red-600" role="alert">
                {error}
              </p>
            )}
          </div>
        </form>
      </section>

      <section className="space-y-4 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h2 className="h6">Narzędzia kadrowania</h2>
          {dims && (
            <span className="text-xs! text-[#5e5e5e]">
              Docelowe:{' '}
              <strong>
                {dims.width} x {dims.height} px
              </strong>
            </span>
          )}
        </div>

        {!state.imageUrl && <p className="text-xs! text-[#5e5e5e]">Najpierw dodaj zdjęcie po lewej stronie. Potem pojawią się ustawienia kadru i podgląd.</p>}

        {state.imageUrl && cropEnabled && (
          <>
            <div className="flex flex-wrap gap-2">
              {TOOLBAR_ITEMS.map((item) => (
                <ToolButton key={item.id} id={item.id} icon={item.icon} label={item.label} activeTool={activeTool} onClick={setActiveTool} />
              ))}
            </div>

            <div className="mt-3 min-h-26 space-y-3 text-sm!">
              {activeTool === 'dimensions' && (
                <div className="space-y-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="text-[14px]! font-medium">Szerokość (px)</label>
                      <input
                        type="number"
                        min={1}
                        className="mt-1 w-full! rounded-md border border-neutral-300 bg-white px-3! py-2! text-sm!"
                        value={state.targetWidth ?? ''}
                        onChange={(e) => handleDimensionChange('width', e.target.value ? Number(e.target.value) : null)}
                      />
                    </div>
                    <div>
                      <label className="text-[14px]! font-medium">Wysokość (px)</label>
                      <input
                        type="number"
                        min={1}
                        className="mt-1 w-full! rounded-md border border-neutral-300 bg-white px-3! py-2! text-sm!"
                        value={state.targetHeight ?? ''}
                        onChange={(e) => handleDimensionChange('height', e.target.value ? Number(e.target.value) : null)}
                      />
                    </div>
                  </div>

                  <label className="flex items-center gap-2 text-[14px]! font-medium">
                    <input
                      type="checkbox"
                      checked={state.keepAspectRatio}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          keepAspectRatio: e.target.checked,
                        }))
                      }
                      className="h-4 w-4! rounded border-neutral-300 p-0!"
                    />
                    <span>Zachowaj proporcje (automatyczny drugi wymiar)</span>
                  </label>
                </div>
              )}

              {activeTool === 'presets' && (
                <div className="space-y-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="text-[14px]! font-medium">Kategoria</label>
                      <select
                        className="mt-1 w-full! rounded-md border border-neutral-300 bg-white px-3! py-2! text-sm!"
                        value={state.selectedCategory}
                        onChange={(e) =>
                          setState((prev) => ({
                            ...prev,
                            selectedCategory: e.target.value as 'social' | 'web',
                            selectedPresetKey: null,
                          }))
                        }
                      >
                        <option value="social">Social media</option>
                        <option value="web">WWW</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[14px]! font-medium">Format</label>
                      <select
                        className="mt-1 w-full! rounded-md border border-neutral-300 bg-white px-3! py-2! text-sm!"
                        value={state.selectedPresetKey ?? ''}
                        onChange={(e) => handlePresetChange(e.target.value)}
                      >
                        <option value="">Wybierz preset</option>
                        {presetList.map((preset) => (
                          <option key={preset.key} value={preset.key}>
                            {preset.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTool === 'shapes' && (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {SHAPE_OPTIONS.map((opt) => (
                      <PillButton key={opt.value} value={opt.value} current={state.shape} label={opt.label} onChange={(val) => handleShapeChange(val as ShapeType)} />
                    ))}
                  </div>

                  {state.shape === 'rect' && (
                    <div className="space-y-2">
                      <p className="text-xs! text-[#5e5e5e]">Proporcje prostokąta</p>
                      <div className="flex flex-wrap gap-2">
                        {RECT_ASPECTS.map((aspect) => (
                          <PillButton key={aspect} value={aspect} current={state.shapeAspect} label={aspect} onChange={(val) => handleShapeAspectChange(val as ShapeAspect)} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTool === 'zoom' && (
                <div className="space-y-1">
                  <NumberField
                    label="Przybliżenie kadru"
                    suffix="%"
                    value={Math.round(state.cropZoom * 100)}
                    min={100}
                    max={300}
                    onChange={(val) =>
                      setState((prev) => ({
                        ...prev,
                        cropZoom: val / 100,
                      }))
                    }
                  />
                </div>
              )}

              {activeTool === 'position' && (
                <div className="space-y-3">
                  <div className="flex flex-wrap items-end gap-4">
                    <NumberField
                      label="Poziom (X)"
                      suffix="%"
                      value={Math.round(state.cropX * 100)}
                      min={0}
                      max={100}
                      onChange={(val) =>
                        setState((prev) => ({
                          ...prev,
                          cropX: val / 100,
                        }))
                      }
                    />
                    <NumberField
                      label="Pion (Y)"
                      suffix="%"
                      value={Math.round(state.cropY * 100)}
                      min={0}
                      max={100}
                      onChange={(val) =>
                        setState((prev) => ({
                          ...prev,
                          cropY: val / 100,
                        }))
                      }
                    />
                    <div className="flex items-center gap-2 pt-4">
                      <button
                        type="button"
                        onClick={() =>
                          setState((prev) => ({
                            ...prev,
                            cropX: 0.5,
                          }))
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white hover:bg-neutral-100"
                        title="Wyśrodkuj poziomo"
                      >
                        <MdAlignHorizontalCenter className="text-xs" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setState((prev) => ({
                            ...prev,
                            cropY: 0.5,
                          }))
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white hover:bg-neutral-100"
                        title="Wyśrodkuj pionowo"
                      >
                        <MdAlignVerticalCenter className="text-xs" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setState((prev) => ({
                            ...prev,
                            cropX: 0.5,
                            cropY: 0.5,
                          }))
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white hover:bg-neutral-100"
                        title="Wyśrodkuj kadr"
                      >
                        <span>C</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTool === 'rotation' && (
                <div className="space-y-1">
                  <NumberField
                    label="Obrót kadru"
                    suffix="°"
                    value={state.rotation}
                    min={-45}
                    max={45}
                    onChange={(val) =>
                      setState((prev) => ({
                        ...prev,
                        rotation: val,
                      }))
                    }
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        rotation: 0,
                      }))
                    }
                    className="mt-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[14px]! hover:bg-neutral-100"
                  >
                    0°
                  </button>
                </div>
              )}

              {activeTool === 'grid' && (
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {GRID_COLOR_OPTIONS.map((opt) => (
                      <PillButton
                        key={opt.value}
                        value={opt.value}
                        current={state.gridColor}
                        label={
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 rounded-full" style={{ backgroundColor: getGridStroke(opt.value) }} />
                            {opt.label}
                          </span>
                        }
                        onChange={(v) =>
                          setState((prev) => ({
                            ...prev,
                            gridColor: v as GridColor,
                          }))
                        }
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="mt-4 mb-2 flex items-center justify-between">
                <h3 className="h6">Podgląd kadru</h3>
                {dims && (
                  <span className="text-xs! text-[#5e5e5e]">
                    {dims.width} x {dims.height} px
                  </span>
                )}
              </div>

              <div ref={previewRef} className="relative w-full overflow-hidden rounded-2xl border border-neutral-300 bg-slate-600" style={{ paddingBottom: `${previewPadding}%` }}>
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={state.imageUrl!} alt={state.file?.name || 'Podgląd'} className="h-full w-full object-contain" draggable={false} />

                  {cropRectPreview && (
                    <div
                      onPointerDown={startMoveDrag}
                      onPointerMove={handlePointerMove}
                      onPointerUp={handlePointerUp}
                      onPointerLeave={handlePointerLeave}
                      className={`absolute box-border ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                      style={{ ...cropRectPreview }}
                    >
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          transform: `rotate(${state.rotation}deg)`,
                          transformOrigin: '50% 50%',
                        }}
                      >
                        <div className={`absolute inset-0 shadow-[0_0_0_9999px_rgba(0,0,0,0.55)] ${selectionShapeClass}`} />
                        <div className={`absolute inset-0 grid grid-cols-3 grid-rows-3 overflow-hidden ${selectionShapeClass}`}>
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="border" style={{ borderColor: gridStroke }} />
                          ))}
                        </div>
                      </div>

                      <div
                        className="absolute -top-5 left-1/2 h-4 w-4 -translate-x-1/2 cursor-alias rounded-full border bg-white/90 text-center text-[10px]! leading-4 shadow-sm"
                        style={{ borderColor: gridStroke, color: '#111827' }}
                        onPointerDown={startRotateDrag}
                        title="Przeciągnij, aby obrócić kadr"
                      >
                        ⤾
                      </div>

                      <div
                        className="absolute -top-1 -left-1 h-4 w-4 cursor-nwse-resize rounded-[2px] border-2 bg-white/80"
                        style={{ borderColor: gridStroke }}
                        onPointerDown={(e) => startResizeDrag(e, 'tl')}
                      />
                      <div
                        className="absolute -top-1 -right-1 h-4 w-4 cursor-nesw-resize rounded-[2px] border-2 bg-white/80"
                        style={{ borderColor: gridStroke }}
                        onPointerDown={(e) => startResizeDrag(e, 'tr')}
                      />
                      <div
                        className="absolute -bottom-1 -left-1 h-4 w-4 cursor-nesw-resize rounded-[2px] border-2 bg-white/80"
                        style={{ borderColor: gridStroke }}
                        onPointerDown={(e) => startResizeDrag(e, 'bl')}
                      />
                      <div
                        className="absolute -right-1 -bottom-1 h-4 w-4 cursor-nwse-resize rounded-[2px] border-2 bg-white/80"
                        style={{ borderColor: gridStroke }}
                        onPointerDown={(e) => startResizeDrag(e, 'br')}
                      />

                      <div
                        className="absolute -top-4 -left-4 h-4 w-4 cursor-alias rounded-full border bg-white/90 shadow-sm"
                        style={{ borderColor: gridStroke }}
                        onPointerDown={startRotateDrag}
                        title="Obrót z rogu"
                      />
                      <div
                        className="absolute -top-4 -right-4 h-4 w-4 cursor-alias rounded-full border bg-white/90 shadow-sm"
                        style={{ borderColor: gridStroke }}
                        onPointerDown={startRotateDrag}
                        title="Obrót z rogu"
                      />
                      <div
                        className="absolute -bottom-4 -left-4 h-4 w-4 cursor-alias rounded-full border bg-white/90 shadow-sm"
                        style={{ borderColor: gridStroke }}
                        onPointerDown={startRotateDrag}
                        title="Obrót z rogu"
                      />
                      <div
                        className="absolute -right-4 -bottom-4 h-4 w-4 cursor-alias rounded-full border bg-white/90 shadow-sm"
                        style={{ borderColor: gridStroke }}
                        onPointerDown={startRotateDrag}
                        title="Obrót z rogu"
                      />
                    </div>
                  )}
                </div>
              </div>

              <p className="mt-2 text-xs! text-[#5e5e5e]">
                Jasny obszar pokazuje dokładny kadr, który zostanie zapisany. Siatka obraca się razem z kadrem - zapisany plik będzie miał ten sam kąt i fragment obrazu, który widzisz w środku. Dla
                kształtu koła plik będzie miał przezroczyste tło poza kształtem (PNG / WebP).
              </p>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
