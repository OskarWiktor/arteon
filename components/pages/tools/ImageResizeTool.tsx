'use client';

import Button from '@/components/atoms/buttons/Button';
import ToolAlert from '@/components/atoms/ToolAlert';
import ToolUploadContent from '@/components/molecules/tools/ToolUploadContent';
import { exportCroppedImage } from '@/lib/tools/image/exportCroppedImage';
import { getCropRect, getGridStroke } from '@/lib/tools/image/cropMath';
import { useCropDrag } from '@/hooks/useCropDrag';
import type {
  ActiveTool,
  GridColor,
  OutputFormat,
  ResizeMode,
  ShapeAspect,
  ShapeType,
} from '@/types/tools/image';
import ButtonTool from '@/components/atoms/buttons/ButtonTool';
import { formatBytes } from '@/utils/formatBytes';
import { getFileFormatLabel } from '@/utils/fileFormat';
import { revokeObjectUrl } from '@/utils/objectUrl';
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { MdAlignHorizontalCenter, MdAlignVerticalCenter } from 'react-icons/md';
import {
  RiZoomInLine,
  RiDragMove2Line,
  RiGridLine,
  RiRulerLine,
  RiLayoutGridLine,
  RiCropLine,
  RiImageLine,
} from 'react-icons/ri';
import { useLocale } from '@/lib/LocaleContext';
import { ui, type UiLocale } from '@/lib/i18n/tools/image-resize';
import ButtonPill from '@/components/atoms/buttons/ButtonPill';
import InputWithLabel from '@/components/molecules/form/InputWithLabel';
import InputRangeWithLabel from '@/components/molecules/form/InputRangeWithLabel';
import InputCheckboxWithLabel from '@/components/molecules/form/InputCheckboxWithLabel';
import CropPreview from '@/components/organisms/tools/ImageResizeTool/CropPreview';
import FileDropzone from '@/components/molecules/FileDropzone';
import Card from '@/components/organisms/Card';
import { cn } from '@/lib/utils';
import {
  flexCenterBetweenClasses,
  flexCenterClasses,
  smallIconSizeClasses,
} from '@/lib/ui-classes';

function getImagePresets(t: UiLocale) {
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

function getGridColorOptions(t: UiLocale): { value: GridColor; label: string }[] {
  return [
    { value: 'emerald', label: t.gridColors.emerald },
    { value: 'white', label: t.gridColors.white },
    { value: 'black', label: t.gridColors.black },
    { value: 'red', label: t.gridColors.red },
    { value: 'yellow', label: t.gridColors.yellow },
  ];
}

function getShapeOptions(t: UiLocale): { value: ShapeType; label: string }[] {
  return [
    { value: 'rect', label: t.shapes.rect },
    { value: 'square', label: t.shapes.square },
    { value: 'circle', label: t.shapes.circle },
  ];
}

const RECT_ASPECTS: ShapeAspect[] = ['1:1', '4:5', '3:2', '16:9', '9:16'];

function getToolbarItems(t: UiLocale): { id: ActiveTool; label: string; icon: ReactNode }[] {
  return [
    { id: 'dimensions', label: t.dimensions, icon: <RiRulerLine className='text-base' /> },
    { id: 'presets', label: t.presetsLabel, icon: <RiLayoutGridLine className='text-base' /> },
    { id: 'shapes', label: t.shapesLabel, icon: <RiCropLine className='text-base' /> },
    { id: 'zoom', label: t.zoom, icon: <RiZoomInLine className='text-base' /> },
    { id: 'position', label: t.position, icon: <RiDragMove2Line className='text-base' /> },
    { id: 'grid', label: t.gridColor, icon: <RiGridLine className='text-base' /> },
  ];
}

export default function ImageResizeTool() {
  const locale = useLocale();
  const t = ui[locale];
  const IMAGE_PRESETS = getImagePresets(t);
  const GRID_COLOR_OPTIONS = getGridColorOptions(t);
  const SHAPE_OPTIONS = getShapeOptions(t);
  const TOOLBAR_ITEMS = getToolbarItems(t);
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

  const dims =
    !originalWidth || !originalHeight || !targetWidth || !targetHeight
      ? null
      : { width: targetWidth, height: targetHeight };

  const effectiveDims =
    dims ??
    (state.originalWidth && state.originalHeight
      ? { width: state.originalWidth, height: state.originalHeight }
      : null);

  const aspectRatioText =
    state.originalWidth && state.originalHeight
      ? (state.originalWidth / state.originalHeight).toFixed(2)
      : null;

  const inputFormat = getFileFormatLabel(state.file);

  const cropEnabled = !!state.imageUrl && !!state.originalWidth && !!state.originalHeight;

  const previewPadding =
    state.originalWidth && state.originalHeight
      ? (state.originalHeight / state.originalWidth) * 100
      : 56.25;

  const cropRectPreview = (() => {
    if (!cropEnabled || !state.originalWidth || !state.originalHeight || !effectiveDims)
      return null;
    const targetAspect = effectiveDims.width / effectiveDims.height;
    const rect = getCropRect(
      state.originalWidth,
      state.originalHeight,
      targetAspect,
      state.cropX,
      state.cropY,
      state.cropZoom,
    );
    return {
      left: `${(rect.x / state.originalWidth) * 100}%`,
      top: `${(rect.y / state.originalHeight) * 100}%`,
      width: `${(rect.cropW / state.originalWidth) * 100}%`,
      height: `${(rect.cropH / state.originalHeight) * 100}%`,
    };
  })();

  const gridStroke = getGridStroke(state.gridColor);
  const presetList = IMAGE_PRESETS[state.selectedCategory];
  const shapeNeedsAlpha = state.shape === 'circle';
  const selectionShapeClass = state.shape === 'circle' ? 'rounded-lg' : 'rounded-md';

  const handleFileChange = (file: File | null) => {
    if (!file) return;

    revokeObjectUrl(state.imageUrl);

    const url = URL.createObjectURL(file);
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setState(prev => ({
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
      setState(prev => ({
        ...prev,
        [type === 'width' ? 'targetWidth' : 'targetHeight']: null,
        mode: 'pixels',
      }));
      return;
    }

    if (!state.originalWidth || !state.originalHeight) {
      setState(prev => ({
        ...prev,
        [type === 'width' ? 'targetWidth' : 'targetHeight']: value,
        mode: 'pixels',
      }));
      return;
    }

    const keepRatio = state.keepAspectRatio;

    if (!keepRatio) {
      setState(prev => ({
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
      setState(prev => ({
        ...prev,
        targetWidth: newWidth,
        targetHeight: newHeight,
        mode: 'pixels',
      }));
    } else {
      const newHeight = value;
      const newWidth = Math.max(1, Math.round(newHeight * aspect));
      setState(prev => ({
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
      setState(prev => ({
        ...prev,
        targetWidth: side,
        targetHeight: side,
      }));
    } else if (shape === 'rect' && aspect) {
      const [wPart, hPart] = aspect.split(':').map(Number);
      const width = currentDims.width;
      const height = Math.round((width * hPart) / wPart);
      setState(prev => ({
        ...prev,
        targetWidth: width,
        targetHeight: height,
      }));
    }
  };

  const handleShapeChange = (shape: ShapeType) => {
    setState(prev => ({
      ...prev,
      shape,
      selectedPresetKey: shape === 'circle' ? null : prev.selectedPresetKey,
      mode: shape === 'circle' ? 'pixels' : prev.mode,
    }));

    applyShapeOnDimensions(shape, state.shapeAspect);

    if (shape === 'circle' && state.outputFormat === 'jpg') {
      setState(prev => ({
        ...prev,
        outputFormat: 'png',
      }));
    }
  };

  const handleShapeAspectChange = (aspect: ShapeAspect) => {
    setState(prev => ({
      ...prev,
      shapeAspect: aspect,
    }));
    if (state.shape === 'rect') {
      applyShapeOnDimensions('rect', aspect);
    }
  };

  const handlePresetChange = (presetKey: string) => {
    const preset = presetList.find(p => p.key === presetKey);
    if (!preset) return;

    setState(prev => ({
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

  const {
    isDragging,
    startMoveDrag,
    startResizeDrag,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
  } = useCropDrag({
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
    <div className='grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2.5fr)]'>
      <Card interactive={false} padding='lg'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <h2 className='h6 mb-2'>{t.addImage}</h2>
            <FileDropzone
              accept='image/*'
              dropEffect='copy'
              onFiles={files => handleFileChange(files?.[0] ?? null)}
            >
              <ToolUploadContent
                dragLabel={t.dragDropImage}
                clickLabel={t.clickToSelect}
                formatsLabel={t.supportedFormats}
              />
            </FileDropzone>
            {state.file && (
              <p className='tool-meta mt-2'>
                {t.currentFile} <strong>{state.file.name}</strong>
              </p>
            )}
          </div>

          <div className='text-light mt-4 rounded-lg border border-black/10 bg-white/90 p-4 text-xs!'>
            <h3 className='h6 mb-2'>{t.imageParams}</h3>
            {!state.imageUrl && <p>{t.noData}</p>}
            {state.imageUrl && (
              <div className='space-y-1 text-sm!'>
                <p className='text-xs!'>
                  {t.original}{' '}
                  <strong>
                    {state.originalWidth} x {state.originalHeight} px
                  </strong>
                </p>
                {aspectRatioText && (
                  <p className='text-xs!'>
                    {t.aspectRatio} <strong>{aspectRatioText} : 1</strong>
                  </p>
                )}
                {dims && (
                  <p className='text-xs!'>
                    {t.target}{' '}
                    <strong>
                      {dims.width} x {dims.height} px
                    </strong>
                  </p>
                )}
                {inputFormat && (
                  <p className='text-xs!'>
                    {t.inputFormat} <strong>{inputFormat}</strong>
                  </p>
                )}
                <p className='text-xs!'>
                  {t.outputFormat} <strong>{state.outputFormat.toUpperCase()}</strong>
                </p>
                <p className='text-xs!'>
                  {t.shape}{' '}
                  <strong>
                    {state.shape === 'rect'
                      ? t.shapes.rect
                      : state.shape === 'square'
                        ? t.shapes.square
                        : t.shapes.circle}
                  </strong>
                </p>
                {state.file && (
                  <p className='text-xs!'>
                    {t.sourceFile} <strong>{formatBytes(state.file.size)}</strong>
                  </p>
                )}
                {estimatedSize !== null && (
                  <p className='text-xs!'>
                    {t.estimatedResult} <strong>{formatBytes(estimatedSize)}</strong>
                  </p>
                )}
              </div>
            )}
          </div>

          <div>
            <h3 className='h6 mt-4 mb-2'>{t.convertAndDownload}</h3>
            <div className='flex flex-wrap gap-3 text-sm!'>
              {(['jpg', 'png', 'webp'] as OutputFormat[]).map(fmt => (
                <ButtonPill
                  key={fmt}
                  value={fmt}
                  current={state.outputFormat}
                  label={fmt.toUpperCase()}
                  disabled={shapeNeedsAlpha && fmt === 'jpg'}
                  onChange={value =>
                    setState(prev => ({
                      ...prev,
                      outputFormat: value as OutputFormat,
                    }))
                  }
                />
              ))}
            </div>

            {state.outputFormat !== 'png' && (
              <InputRangeWithLabel
                label={t.quality}
                value={Math.round(state.outputQuality * 100)}
                min={60}
                max={100}
                onChange={val => setState(prev => ({ ...prev, outputQuality: val / 100 }))}
                suffix='%'
                helper={t.qualityHelper}
                className='mt-4'
              />
            )}

            <div className='mt-5 flex flex-wrap gap-3'>
              <Button
                variant='accent'
                size='small'
                type='submit'
                disabled={isProcessing || !state.file}
                className='disabled:opacity-60'
              >
                {isProcessing ? t.processing : t.resizeAndDownload}
              </Button>
            </div>

            {error && (
              <ToolAlert variant='error' className='mt-2'>
                {error}
              </ToolAlert>
            )}
          </div>
        </form>
      </Card>

      <Card interactive={false} padding='lg'>
        <div className={cn('mb-2', flexCenterBetweenClasses)}>
          <h2 className='h6'>{t.cropTools}</h2>
          {dims && (
            <span className='tool-meta'>
              {t.target}{' '}
              <strong>
                {dims.width} x {dims.height} px
              </strong>
            </span>
          )}
        </div>

        {!state.imageUrl && (
          <>
            <div className='flex flex-wrap gap-2'>
              {TOOLBAR_ITEMS.map(item => (
                <div key={item.id} className='tool-button tool-button-inactive'>
                  <span className='text-neutral-400'>{item.icon}</span>
                  <span className='text-light'>{item.label}</span>
                </div>
              ))}
            </div>

            <div
              className={cn(
                'relative mt-4 aspect-[4/5] max-h-[340px] overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100',
                flexCenterClasses,
              )}
            >
              <div className='flex flex-col items-center gap-2 text-neutral-400'>
                <RiImageLine className='text-5xl' aria-hidden='true' />
                <span className='text-sm! font-medium'>{t.demoPreset}</span>
              </div>
              <div className='pointer-events-none absolute inset-4 grid grid-cols-3 grid-rows-3 rounded-md border border-dashed border-neutral-300'>
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className='border border-dashed border-neutral-300/50' />
                ))}
              </div>
            </div>

            <div className='mt-3 space-y-1 text-xs!'>
              <p className='text-light'>{t.demoOriginal}</p>
              <p className='text-light'>{t.demoTarget}</p>
              <p className='text-light'>{t.demoFormat}</p>
            </div>
          </>
        )}

        {state.imageUrl && cropEnabled && (
          <>
            <div className='flex flex-wrap gap-2'>
              {TOOLBAR_ITEMS.map(item => (
                <ButtonTool
                  key={item.id}
                  id={item.id}
                  icon={item.icon}
                  label={item.label}
                  active={activeTool}
                  onClick={id => setActiveTool(id as ActiveTool)}
                />
              ))}
            </div>

            <div className='mt-3 min-h-26 space-y-3 text-sm!'>
              {activeTool === 'dimensions' && (
                <div className='space-y-3'>
                  <div className='grid gap-3 md:grid-cols-2'>
                    <div>
                      <InputWithLabel
                        label={t.width}
                        type='number'
                        min={1}
                        value={state.targetWidth != null ? String(state.targetWidth) : ''}
                        onChange={value =>
                          handleDimensionChange('width', value ? Number(value) : null)
                        }
                      />
                    </div>
                    <div>
                      <InputWithLabel
                        label={t.height}
                        type='number'
                        min={1}
                        value={state.targetHeight != null ? String(state.targetHeight) : ''}
                        onChange={value =>
                          handleDimensionChange('height', value ? Number(value) : null)
                        }
                      />
                    </div>
                  </div>

                  <InputCheckboxWithLabel
                    checked={state.keepAspectRatio}
                    onChange={checked =>
                      setState(prev => ({
                        ...prev,
                        keepAspectRatio: checked,
                      }))
                    }
                    label={t.keepAspectRatio}
                  />
                </div>
              )}

              {activeTool === 'presets' && (
                <div className='space-y-3'>
                  <div className='grid gap-3 md:grid-cols-2'>
                    <div>
                      <label className='tool-value'>{t.category}</label>
                      <select
                        className='tool-input mt-1'
                        value={state.selectedCategory}
                        onChange={e =>
                          setState(prev => ({
                            ...prev,
                            selectedCategory: e.target.value as 'social' | 'web',
                            selectedPresetKey: null,
                          }))
                        }
                      >
                        <option value='social'>{t.categories.social}</option>
                        <option value='web'>{t.categories.web}</option>
                      </select>
                    </div>
                    <div>
                      <label className='tool-value'>{t.format}</label>
                      <select
                        className='tool-input mt-1'
                        value={state.selectedPresetKey ?? ''}
                        onChange={e => handlePresetChange(e.target.value)}
                      >
                        <option value=''>{t.selectPreset}</option>
                        {presetList.map(preset => (
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
                <div className='space-y-3'>
                  <div className='flex flex-wrap gap-2'>
                    {SHAPE_OPTIONS.map(opt => (
                      <ButtonPill
                        key={opt.value}
                        value={opt.value}
                        current={state.shape}
                        label={opt.label}
                        onChange={val => handleShapeChange(val as ShapeType)}
                      />
                    ))}
                  </div>

                  {state.shape === 'rect' && (
                    <div className='space-y-2'>
                      <p className='tool-meta'>{t.rectAspect}</p>
                      <div className='flex flex-wrap gap-2'>
                        {RECT_ASPECTS.map(aspect => (
                          <ButtonPill
                            key={aspect}
                            value={aspect}
                            current={state.shapeAspect}
                            label={aspect}
                            onChange={val => handleShapeAspectChange(val as ShapeAspect)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTool === 'zoom' && (
                <div className='space-y-1'>
                  <InputWithLabel
                    type='number'
                    variant='tool'
                    label={`${t.cropZoom} (%)`}
                    value={String(Math.round(state.cropZoom * 100))}
                    min={100}
                    max={300}
                    className='w-20!'
                    onChange={val =>
                      setState(prev => ({
                        ...prev,
                        cropZoom: Number(val) / 100,
                      }))
                    }
                  />
                </div>
              )}

              {activeTool === 'position' && (
                <div className='space-y-3'>
                  <div className='flex flex-wrap items-end gap-4'>
                    <InputWithLabel
                      type='number'
                      variant='tool'
                      label={`${t.horizontal} (%)`}
                      value={String(Math.round(state.cropX * 100))}
                      min={0}
                      max={100}
                      className='w-20!'
                      onChange={val =>
                        setState(prev => ({
                          ...prev,
                          cropX: Number(val) / 100,
                        }))
                      }
                    />
                    <InputWithLabel
                      type='number'
                      variant='tool'
                      label={`${t.vertical} (%)`}
                      value={String(Math.round(state.cropY * 100))}
                      min={0}
                      max={100}
                      className='w-20!'
                      onChange={val =>
                        setState(prev => ({
                          ...prev,
                          cropY: Number(val) / 100,
                        }))
                      }
                    />
                    <div className='flex items-center gap-2 pt-4'>
                      <button
                        type='button'
                        onClick={() =>
                          setState(prev => ({
                            ...prev,
                            cropX: 0.5,
                          }))
                        }
                        className={cn(
                          'h-7 w-7 rounded-lg border border-black/10 bg-white hover:bg-neutral-100',
                          flexCenterClasses,
                        )}
                        title={t.centerHorizontal}
                      >
                        <MdAlignHorizontalCenter className='text-xs' />
                      </button>
                      <button
                        type='button'
                        onClick={() =>
                          setState(prev => ({
                            ...prev,
                            cropY: 0.5,
                          }))
                        }
                        className={cn(
                          'h-7 w-7 rounded-lg border border-black/10 bg-white hover:bg-neutral-100',
                          flexCenterClasses,
                        )}
                        title={t.centerVertical}
                      >
                        <MdAlignVerticalCenter className='text-xs' />
                      </button>
                      <button
                        type='button'
                        onClick={() =>
                          setState(prev => ({
                            ...prev,
                            cropX: 0.5,
                            cropY: 0.5,
                          }))
                        }
                        className={cn(
                          'h-7 w-7 rounded-lg border border-black/10 bg-white hover:bg-neutral-100',
                          flexCenterClasses,
                        )}
                        title={t.centerCrop}
                      >
                        <span>C</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTool === 'grid' && (
                <div className='space-y-2'>
                  <div className='flex flex-wrap gap-2'>
                    {GRID_COLOR_OPTIONS.map(opt => (
                      <ButtonPill
                        key={opt.value}
                        value={opt.value}
                        current={state.gridColor}
                        label={
                          <span className='flex items-center gap-2'>
                            <span
                              className={cn('rounded-lg', smallIconSizeClasses)}
                              style={{ backgroundColor: getGridStroke(opt.value) }}
                            />
                            {opt.label}
                          </span>
                        }
                        onChange={v =>
                          setState(prev => ({
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

            <CropPreview
              imageUrl={state.imageUrl!}
              fileName={state.file?.name || ''}
              previewPadding={previewPadding}
              cropRectPreview={cropRectPreview}
              gridStroke={gridStroke}
              selectionShapeClass={selectionShapeClass}
              isDragging={isDragging}
              previewRef={previewRef}
              startMoveDrag={startMoveDrag}
              startResizeDrag={startResizeDrag}
              handlePointerMove={handlePointerMove}
              handlePointerUp={handlePointerUp}
              handlePointerLeave={handlePointerLeave}
              dims={dims}
              t={t}
            />
          </>
        )}
      </Card>
    </div>
  );
}
