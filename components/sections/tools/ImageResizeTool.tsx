'use client';

import Button from '@/components/ui/buttons/Button';
import Badge from '@/components/ui/Badge';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import ToolFileDropzone from '@/components/ui/tools/ToolFileDropzone';
import ToolSection from '@/components/ui/tools/ToolSection';
import { exportCroppedImage } from '@/components/sections/tools/ImageResizeTool/exportCroppedImage';
import { getCropRect, getGridStroke } from '@/components/sections/tools/ImageResizeTool/cropMath';
import { useCropDrag } from '@/components/sections/tools/ImageResizeTool/useCropDrag';
import type { ActiveTool, GridColor, OutputFormat, ResizeMode, ShapeAspect, ShapeType } from '@/components/sections/tools/ImageResizeTool/types';
import ToolButton from '@/components/ui/tools/ToolButton';
import { formatBytes } from '@/lib/tools/formatBytes';
import { getFileFormatLabel } from '@/lib/tools/fileFormat';
import { revokeObjectUrl } from '@/lib/tools/objectUrl';
import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { MdAlignHorizontalCenter, MdAlignVerticalCenter } from 'react-icons/md';
import { RiZoomInLine, RiDragMove2Line, RiGridLine, RiRulerLine, RiLayoutGridLine, RiCropLine, RiImageLine } from 'react-icons/ri';

const ui = {
  pl: {
    imageLoadError: 'Nie udało się wczytać obrazu.',
    canvasNotSupported: 'Twoja przeglądarka nie obsługuje kontekstu 2D.',
    fileGenerationError: 'Nie udało się wygenerować pliku.',
    addImageFirst: 'Dodaj najpierw zdjęcie.',
    setValidDimensions: 'Ustaw poprawne wymiary docelowe.',
    addImage: 'Dodaj zdjęcie',
    dragDropImage: 'Przeciągnij i upuść zdjęcie tutaj',
    clickToSelect: 'lub kliknij, aby wybrać plik z dysku',
    supportedFormats: 'Obsługiwane: JPG, PNG, WebP',
    currentFile: 'Aktualny plik:',
    imageParams: 'Parametry obrazu',
    noData: 'Brak danych - dodaj zdjęcie.',
    original: 'Oryginalne:',
    aspectRatio: 'Proporcje:',
    target: 'Docelowe:',
    inputFormat: 'Format wejściowy:',
    outputFormat: 'Format wyjściowy:',
    shape: 'Kształt:',
    sourceFile: 'Plik źródłowy:',
    estimatedResult: 'Szacowany wynik:',
    convertAndDownload: 'Konwertuj i pobierz',
    quality: 'Jakość (JPG/WEBP)',
    qualityHelper: 'Niższa wartość oznacza mniejszy plik, ale słabszą jakość obrazu. Dla mediów społecznościowych optymalna wartość to 70–85%.',
    processing: 'Przetwarzanie…',
    resizeAndDownload: 'Zmień rozmiar i pobierz',
    cropTools: 'Narzędzia kadrowania',
    addImageFirstHelper: 'Najpierw dodaj zdjęcie po lewej stronie. Potem pojawią się ustawienia kadru i podgląd.',
    demoOriginal: 'Oryginał: 3000 x 2000 px',
    demoTarget: 'Docelowy: 1080 x 1350 px',
    demoFormat: 'Format: WebP',
    demoPreset: 'Instagram post pion · 4:5',
    dimensions: 'Wymiary w px',
    presetsLabel: 'Gotowe formaty',
    shapesLabel: 'Kształty kadru',
    zoom: 'Przybliżenie',
    position: 'Pozycja',
    gridColor: 'Kolor siatki',
    width: 'Szerokość (px)',
    height: 'Wysokość (px)',
    keepAspectRatio: 'Zachowaj proporcje (automatyczny drugi wymiar)',
    category: 'Kategoria',
    format: 'Format',
    selectPreset: 'Wybierz format',
    rectAspect: 'Proporcje prostokąta',
    cropZoom: 'Przybliżenie kadru',
    horizontal: 'Poziom (X)',
    vertical: 'Pion (Y)',
    centerHorizontal: 'Wyśrodkuj poziomo',
    centerVertical: 'Wyśrodkuj pionowo',
    centerCrop: 'Wyśrodkuj kadr',
    cropPreview: 'Podgląd kadru',
    cropPreviewHelper:
      'Jasny obszar pokazuje dokładny kadr, który zostanie zapisany. Zapisany plik będzie miał dokładnie ten rozmiar i fragment obrazu, który widzisz w środku. Dla kształtu koła plik będzie miał przezroczyste tło poza kształtem (PNG / WebP).',
    shapes: {
      rect: 'Prostokąt',
      square: 'Kwadrat',
      circle: 'Koło',
    },
    gridColors: {
      emerald: 'Zielony',
      white: 'Biały',
      black: 'Czarny',
      red: 'Czerwony',
      yellow: 'Żółty',
    },
    categories: {
      social: 'media społecznościowe',
      web: 'WWW',
    },
    presets: {
      igSquare: 'Instagram - post kwadrat (1080x1080)',
      igPortrait: 'Instagram - post pion (1080x1350)',
      igStory: 'Instagram - story / reels (1080x1920)',
      fbPost: 'Facebook - post (1200x630)',
      fbCover: 'Facebook - cover strony (820x360)',
      liPost: 'LinkedIn - post (1200x1200)',
      liBanner: 'LinkedIn - baner profilu (1584x396)',
      ogImage: 'OG image (1200x630)',
      cover: 'Grafika do artykułu (1600x900)',
      banner: 'Baner strony (1920x600)',
      thumb: 'Miniatura artykułu (800x600)',
      hero: 'Hero sekcji (1920x1080)',
      bg: 'Tło sekcji (1920x1280)',
    },
  },
} as const;

function getImagePresets() {
  const t = ui.pl;
  return {
    social: [
      { key: 'ig-square', label: t.presets.igSquare, width: 1080, height: 1080 },
      { key: 'ig-portrait', label: t.presets.igPortrait, width: 1080, height: 1350 },
      { key: 'ig-story', label: t.presets.igStory, width: 1080, height: 1920 },
      { key: 'fb-post', label: t.presets.fbPost, width: 1200, height: 630 },
      { key: 'fb-cover', label: t.presets.fbCover, width: 820, height: 360 },
      { key: 'li-post', label: t.presets.liPost, width: 1200, height: 1200 },
      { key: 'li-banner', label: t.presets.liBanner, width: 1584, height: 396 },
    ],
    web: [
      { key: 'og-image', label: t.presets.ogImage, width: 1200, height: 630 },
      { key: 'cover', label: t.presets.cover, width: 1600, height: 900 },
      { key: 'banner', label: t.presets.banner, width: 1920, height: 600 },
      { key: 'thumb', label: t.presets.thumb, width: 800, height: 600 },
      { key: 'hero', label: t.presets.hero, width: 1920, height: 1080 },
      { key: 'bg', label: t.presets.bg, width: 1920, height: 1280 },
    ],
  } as const;
}

const IMAGE_PRESETS = getImagePresets();

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
  gridColor: GridColor;
  shape: ShapeType;
  shapeAspect: ShapeAspect;
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
      className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${isActive ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'} ${disabled ? 'cursor-not-allowed opacity-40' : ''}`}
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

function NumberField({ label, suffix, value, min, max, onChange, widthClass = 'w-20!' }: NumberFieldProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-medium">
          {label}
          {suffix ? ` (${suffix})` : ''}
        </span>
      </div>
      <input
        type="number"
        min={min}
        max={max}
        className={`tool-input mt-1 ${widthClass}`}
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
  { value: 'emerald', label: ui.pl.gridColors.emerald },
  { value: 'white', label: ui.pl.gridColors.white },
  { value: 'black', label: ui.pl.gridColors.black },
  { value: 'red', label: ui.pl.gridColors.red },
  { value: 'yellow', label: ui.pl.gridColors.yellow },
];

const SHAPE_OPTIONS: { value: ShapeType; label: string }[] = [
  { value: 'rect', label: ui.pl.shapes.rect },
  { value: 'square', label: ui.pl.shapes.square },
  { value: 'circle', label: ui.pl.shapes.circle },
];

const RECT_ASPECTS: ShapeAspect[] = ['1:1', '4:5', '3:2', '16:9', '9:16'];

const TOOLBAR_ITEMS: { id: ActiveTool; label: string; icon: ReactNode }[] = [
  { id: 'dimensions', label: ui.pl.dimensions, icon: <RiRulerLine className="text-base" /> },
  { id: 'presets', label: ui.pl.presetsLabel, icon: <RiLayoutGridLine className="text-base" /> },
  { id: 'shapes', label: ui.pl.shapesLabel, icon: <RiCropLine className="text-base" /> },
  { id: 'zoom', label: ui.pl.zoom, icon: <RiZoomInLine className="text-base" /> },
  { id: 'position', label: ui.pl.position, icon: <RiDragMove2Line className="text-base" /> },
  { id: 'grid', label: ui.pl.gridColor, icon: <RiGridLine className="text-base" /> },
];

export default function ImageResizeTool() {
  const t = ui.pl;
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
    gridColor: 'emerald',
    shape: 'rect',
    shapeAspect: '4:5',
  });

  const [activeTool, setActiveTool] = useState<ActiveTool>('dimensions');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [estimatedSize, setEstimatedSize] = useState<number | null>(null);

  const { originalWidth, originalHeight, targetWidth, targetHeight } = state;

  const previewRef = useRef<HTMLDivElement | null>(null);

  // sprzątanie URL obiektu
  useEffect(() => {
    return () => {
      revokeObjectUrl(state.imageUrl);
    };
  }, [state.imageUrl]);

  const dims = useMemo(() => {
    if (!originalWidth || !originalHeight || !targetWidth || !targetHeight) return null;
    return { width: targetWidth, height: targetHeight };
  }, [originalWidth, originalHeight, targetWidth, targetHeight]);

  const effectiveDims = useMemo(() => {
    if (dims) return dims;
    if (state.originalWidth && state.originalHeight) {
      return { width: state.originalWidth, height: state.originalHeight };
    }
    return null;
  }, [dims, state.originalWidth, state.originalHeight]);

  const aspectRatioText = useMemo(() => (state.originalWidth && state.originalHeight ? (state.originalWidth / state.originalHeight).toFixed(2) : null), [state.originalWidth, state.originalHeight]);

  const inputFormat = useMemo(() => getFileFormatLabel(state.file), [state.file]);

  const cropEnabled = !!state.imageUrl && !!state.originalWidth && !!state.originalHeight;

  const previewPadding = useMemo(() => {
    if (state.originalWidth && state.originalHeight) {
      return (state.originalHeight / state.originalWidth) * 100;
    }
    return 56.25;
  }, [state.originalWidth, state.originalHeight]);

  const cropRectPreview = useMemo(() => {
    if (!cropEnabled || !state.originalWidth || !state.originalHeight || !effectiveDims) {
      return null;
    }
    const targetAspect = effectiveDims.width / effectiveDims.height;
    const rect = getCropRect(state.originalWidth, state.originalHeight, targetAspect, state.cropX, state.cropY, state.cropZoom);
    return {
      left: `${(rect.x / state.originalWidth) * 100}%`,
      top: `${(rect.y / state.originalHeight) * 100}%`,
      width: `${(rect.cropW / state.originalWidth) * 100}%`,
      height: `${(rect.cropH / state.originalHeight) * 100}%`,
    };
  }, [cropEnabled, effectiveDims, state.originalHeight, state.originalWidth, state.cropX, state.cropY, state.cropZoom]);

  const gridStroke = getGridStroke(state.gridColor);
  const presetList = IMAGE_PRESETS[state.selectedCategory];
  const shapeNeedsAlpha = state.shape === 'circle';
  const selectionShapeClass = state.shape === 'circle' ? 'rounded-full' : 'rounded-md';

  const handleFileChange = (file: File | null) => {
    if (!file) return;

    revokeObjectUrl(state.imageUrl);

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
        selectedPresetKey: null,
      }));
      setError(null);
      setEstimatedSize(null);
      setActiveTool('dimensions');
    };
    img.onerror = () => {
      revokeObjectUrl(url);
      setError(t.imageLoadError);
    };
  };

  const handleDimensionChange = (type: 'width' | 'height', value: number | null) => {
    if (value === null || value <= 0 || Number.isNaN(value)) {
      setState((prev) => ({
        ...prev,
        [type === 'width' ? 'targetWidth' : 'targetHeight']: null,
        mode: 'pixels',
      }));
      return;
    }

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
      const newWidth = value;
      const newHeight = Math.max(1, Math.round(newWidth / aspect));
      setState((prev) => ({
        ...prev,
        targetWidth: newWidth,
        targetHeight: newHeight,
        mode: 'pixels',
      }));
    } else {
      const newHeight = value;
      const newWidth = Math.max(1, Math.round(newHeight * aspect));
      setState((prev) => ({
        ...prev,
        targetHeight: newHeight,
        targetWidth: newWidth,
        mode: 'pixels',
      }));
    }
  };

  const applyShapeOnDimensions = (shape: ShapeType, aspect?: ShapeAspect) => {
    const currentDims = effectiveDims;
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
      shape: 'rect',
    }));
  };

  const handleDownload = () => {
    if (!state.file || !state.imageUrl) {
      setError(t.addImageFirst);
      return;
    }

    if (!dims) {
      setError(t.setValidDimensions);
      return;
    }

    if (!state.originalWidth || !state.originalHeight) {
      setError(t.imageLoadError);
      return;
    }

    setIsProcessing(true);
    setError(null);

    const baseName = state.file.name.replace(/\.[^.]+$/, '');

    void (async () => {
      try {
        const { size } = await exportCroppedImage({
          imageUrl: state.imageUrl!,
          originalWidth: state.originalWidth!,
          originalHeight: state.originalHeight!,
          dims,
          cropX: state.cropX,
          cropY: state.cropY,
          cropZoom: state.cropZoom,
          shape: state.shape,
          outputFormat: state.outputFormat,
          outputQuality: state.outputQuality,
          baseName,
          imageLoadErrorMessage: t.imageLoadError,
          canvasNotSupportedErrorMessage: t.canvasNotSupported,
          fileGenerationErrorMessage: t.fileGenerationError,
        });

        setEstimatedSize(size);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : t.fileGenerationError);
      } finally {
        setIsProcessing(false);
      }
    })();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleDownload();
  };

  const { isDragging, startMoveDrag, startResizeDrag, handlePointerMove, handlePointerUp, handlePointerLeave } = useCropDrag({
    imageUrl: state.imageUrl,
    originalWidth: state.originalWidth,
    originalHeight: state.originalHeight,
    cropX: state.cropX,
    cropY: state.cropY,
    cropZoom: state.cropZoom,
    effectiveDims,
    previewRef,
    setState,
    setActiveTool,
  });

  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2.5fr)]">
      <ToolSection className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="h6 mb-2">{t.addImage}</h2>
            <ToolFileDropzone
              accept="image/*"
              dropEffect="copy"
              onFiles={(files) => handleFileChange(files?.[0] ?? null)}
              className="tool-upload-area"
            >
              <span className="mb-1 text-sm! font-medium">{t.dragDropImage}</span>
              <span className="text-light mb-2 text-xs!">{t.clickToSelect}</span>
              <Badge variant="default" size="sm" className="bg-white shadow-sm">
                {t.supportedFormats}
              </Badge>
            </ToolFileDropzone>
            {state.file && (
              <p className="text-light mt-2 text-xs!">
                {t.currentFile} <strong>{state.file.name}</strong>
              </p>
            )}
          </div>

          <div className="text-light mt-4 rounded-2xl border border-black/10 bg-white/90 p-4 text-xs!">
            <h3 className="h6 mb-2">{t.imageParams}</h3>
            {!state.imageUrl && <p>{t.noData}</p>}
            {state.imageUrl && (
              <div className="space-y-1 text-sm!">
                <p className="text-xs!">
                  {t.original}{' '}
                  <strong>
                    {state.originalWidth} x {state.originalHeight} px
                  </strong>
                </p>
                {aspectRatioText && (
                  <p className="text-xs!">
                    {t.aspectRatio} <strong>{aspectRatioText} : 1</strong>
                  </p>
                )}
                {dims && (
                  <p className="text-xs!">
                    {t.target}{' '}
                    <strong>
                      {dims.width} x {dims.height} px
                    </strong>
                  </p>
                )}
                {inputFormat && (
                  <p className="text-xs!">
                    {t.inputFormat} <strong>{inputFormat}</strong>
                  </p>
                )}
                <p className="text-xs!">
                  {t.outputFormat} <strong>{state.outputFormat.toUpperCase()}</strong>
                </p>
                <p className="text-xs!">
                  {t.shape} <strong>{state.shape === 'rect' ? t.shapes.rect : state.shape === 'square' ? t.shapes.square : t.shapes.circle}</strong>
                </p>
                {state.file && (
                  <p className="text-xs!">
                    {t.sourceFile} <strong>{formatBytes(state.file.size)}</strong>
                  </p>
                )}
                {estimatedSize !== null && (
                  <p className="text-xs!">
                    {t.estimatedResult} <strong>{formatBytes(estimatedSize)}</strong>
                  </p>
                )}
              </div>
            )}
          </div>

          <div>
            <h3 className="h6 mt-4 mb-2">{t.convertAndDownload}</h3>
            <div className="flex flex-wrap gap-3 text-sm!">
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
              <div className="mt-4 space-y-1">
                <label className="flex items-center justify-between text-[14px]! font-medium">
                  <span>{t.quality}</span>
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
                  className="tool-range"
                />
                <p className="text-light text-xs!">{t.qualityHelper}</p>
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="accent" size="small" type="submit" disabled={isProcessing || !state.file} className="disabled:opacity-60">
                {isProcessing ? t.processing : t.resizeAndDownload}
              </Button>
            </div>

            {error && (
              <ToolAlert variant="error" className="mt-2">
                {error}
              </ToolAlert>
            )}
          </div>
        </form>
      </ToolSection>

      <ToolSection className="space-y-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h2 className="h6">{t.cropTools}</h2>
          {dims && (
            <span className="text-light text-xs!">
              {t.target}{' '}
              <strong>
                {dims.width} x {dims.height} px
              </strong>
            </span>
          )}
        </div>

        {!state.imageUrl && (
          <>
            <div className="flex flex-wrap gap-2">
              {TOOLBAR_ITEMS.map((item) => (
                <div key={item.id} className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-1.5 text-[14px]!">
                  <span className="text-neutral-400">{item.icon}</span>
                  <span className="text-light">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="relative mt-4 flex aspect-[4/5] max-h-[340px] items-center justify-center overflow-hidden rounded-2xl border border-neutral-300 bg-neutral-100">
              <div className="flex flex-col items-center gap-2 text-neutral-400">
                <RiImageLine className="text-5xl" aria-hidden="true" />
                <span className="text-sm! font-medium">{t.demoPreset}</span>
              </div>
              <div className="pointer-events-none absolute inset-4 grid grid-cols-3 grid-rows-3 rounded-lg border border-dashed border-neutral-300">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="border border-dashed border-neutral-300/50" />
                ))}
              </div>
            </div>

            <div className="mt-3 space-y-1 text-xs!">
              <p className="text-light">{t.demoOriginal}</p>
              <p className="text-light">{t.demoTarget}</p>
              <p className="text-light">{t.demoFormat}</p>
            </div>
          </>
        )}

        {state.imageUrl && cropEnabled && (
          <>
            <div className="flex flex-wrap gap-2">
              {TOOLBAR_ITEMS.map((item) => (
                <ToolButton key={item.id} id={item.id} icon={item.icon} label={item.label} active={activeTool} onClick={(id) => setActiveTool(id as ActiveTool)} />
              ))}
            </div>

            <div className="mt-3 min-h-26 space-y-3 text-sm!">
              {activeTool === 'dimensions' && (
                <div className="space-y-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="text-[14px]! font-medium">{t.width}</label>
                      <input
                        type="number"
                        min={1}
                        className="tool-input mt-1"
                        value={state.targetWidth ?? ''}
                        onChange={(e) => handleDimensionChange('width', e.target.value ? Number(e.target.value) : null)}
                      />
                    </div>
                    <div>
                      <label className="text-[14px]! font-medium">{t.height}</label>
                      <input
                        type="number"
                        min={1}
                        className="tool-input mt-1"
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
                      className="tool-checkbox"
                    />
                    <span>{t.keepAspectRatio}</span>
                  </label>
                </div>
              )}

              {activeTool === 'presets' && (
                <div className="space-y-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="text-[14px]! font-medium">{t.category}</label>
                      <select
                        className="tool-select mt-1"
                        value={state.selectedCategory}
                        onChange={(e) =>
                          setState((prev) => ({
                            ...prev,
                            selectedCategory: e.target.value as 'social' | 'web',
                            selectedPresetKey: null,
                          }))
                        }
                      >
                        <option value="social">{t.categories.social}</option>
                        <option value="web">{t.categories.web}</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[14px]! font-medium">{t.format}</label>
                      <select
                        className="tool-select mt-1"
                        value={state.selectedPresetKey ?? ''}
                        onChange={(e) => handlePresetChange(e.target.value)}
                      >
                        <option value="">{t.selectPreset}</option>
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
                      <p className="text-light text-xs!">{t.rectAspect}</p>
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
                    label={t.cropZoom}
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
                      label={t.horizontal}
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
                      label={t.vertical}
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
                        title={t.centerHorizontal}
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
                        title={t.centerVertical}
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
                        title={t.centerCrop}
                      >
                        <span>C</span>
                      </button>
                    </div>
                  </div>
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
                <h3 className="h6">{t.cropPreview}</h3>
                {dims && (
                  <span className="text-light text-xs!">
                    {dims.width} x {dims.height} px
                  </span>
                )}
              </div>

              <div ref={previewRef} className="relative w-full overflow-hidden rounded-2xl border border-neutral-300 bg-primary" style={{ paddingBottom: `${previewPadding}%` }}>
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
                      <div className="pointer-events-none absolute inset-0">
                        <div className={`absolute inset-0 shadow-[0_0_0_9999px_rgba(0,0,0,0.55)] ${selectionShapeClass}`} />
                        <div className={`absolute inset-0 grid grid-cols-3 grid-rows-3 overflow-hidden ${selectionShapeClass}`}>
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="border" style={{ borderColor: gridStroke }} />
                          ))}
                        </div>
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
                    </div>
                  )}
                </div>
              </div>

              <p className="text-light mt-2 text-xs!">{t.cropPreviewHelper}</p>
            </div>
          </>
        )}
      </ToolSection>
    </div>
  );
}
