'use client';

import { useEffect, useState } from 'react';
import ToolAlert from '@/components/atoms/ToolAlert';
import ToolInfo from '@/components/atoms/ToolInfo';
import FileDropzone from '@/components/molecules/FileDropzone';
import ToolColorSwatch from '@/components/molecules/ToolColorSwatch';
import ToolHelper from '@/components/molecules/tools/ToolHelper';
import Card from '@/components/organisms/Card';
import { ui } from '@/lib/i18n/tools/paletteExtractor';
import { useLocale } from '@/lib/LocaleContext';
import {
  extractPalette,
  type ExtractedColor,
} from '@/lib/tools/color/extractPalette';
import { getDownscaledImageDataFromUrl } from '@/lib/tools/image/canvas';
import {
  isSupportedImageUploadType,
  SUPPORTED_IMAGE_UPLOAD_TYPES,
} from '@/lib/tools/image/uploadTypes';
import { flexCenterBetweenClasses, flexCenterClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/clsx';
import type { ToolStatus } from '@/types/tools/common';
import { getFileFormatLabel } from '@/utils/fileFormat';
import { formatBytes } from '@/utils/formatBytes';
import { revokeObjectUrl } from '@/utils/objectUrl';

/**
 * Render a tool UI for selecting an image, previewing it, and extracting a color palette.
 *
 * The component manages image validation, object-URL preview lifecycle, extraction status,
 * and displays extracted color swatches or helpful messages when appropriate.
 *
 * @returns A React element containing the upload dropzone, image preview, status/error alerts, and extracted color swatches.
 */
export default function PaletteExtractor() {
  const locale = useLocale();
  const t = ui[locale];

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [colors, setColors] = useState<ExtractedColor[]>([]);
  const [status, setStatus] = useState<ToolStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const isProcessing = status === 'processing';

  const inputFormat = getFileFormatLabel(file);

  const fileSize = file && formatBytes(file.size);

  function handleFileSelected(next: File) {
    if (!isSupportedImageUploadType(next)) {
      setError(t.unsupportedFormatsOnly);
      setFile(null);
      setColors([]);
      setStatus('error');
      revokeObjectUrl(previewUrl);
      setPreviewUrl(null);
      return;
    }

    setError(null);
    setStatus('idle');
    setColors([]);

    revokeObjectUrl(previewUrl);
    const url = URL.createObjectURL(next);

    setFile(next);
    setPreviewUrl(url);
  }

  function handleFiles(files: FileList | null) {
    const selected = files?.[0];
    if (!selected) return;
    handleFileSelected(selected);
  }

  useEffect(() => {
    return () => {
      revokeObjectUrl(previewUrl);
    };
  }, [previewUrl]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!previewUrl) return;

      setStatus('processing');
      setError(null);
      setColors([]);

      try {
        const imageData = await getDownscaledImageDataFromUrl(previewUrl, {
          errorMessage: t.unexpectedError,
        });
        if (cancelled) return;

        const palette = extractPalette(imageData);
        setColors(palette);
        setStatus('done');
      } catch (err) {
        if (cancelled) return;
        console.error(err);
        setStatus('error');
        setError(err instanceof Error ? err.message : t.unexpectedError);
      }
    }

    void run();

    return () => {
      cancelled = true;
    };
  }, [previewUrl, t.unexpectedError]);

  return (
    <div className='grid gap-4 overflow-hidden md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]'>
      <Card interactive={false} padding='lg' variant='outlined'>
        <div>
          <h2 className='h6 mb-2'>{t.addImageLabel}</h2>
          <FileDropzone
            accept={SUPPORTED_IMAGE_UPLOAD_TYPES.join(',')}
            disabled={isProcessing}
            onFiles={handleFiles}
            dragLabel={t.dragDropImage}
            clickLabel={t.clickToSelect}
            formatsLabel={t.supportedFormats}
          />

          {file && (
            <p className='tool-meta mt-2 truncate'>
              {t.selectedFile}{' '}
              <strong title={file.name}>
                {file.name.length > 30
                  ? `${file.name.slice(0, 27)}…`
                  : file.name}
              </strong>{' '}
              ({fileSize})
            </p>
          )}

          {error && !previewUrl && (
            <ToolAlert variant='error' className='mt-2'>
              {error}
            </ToolAlert>
          )}
        </div>
      </Card>

      <Card interactive={false} padding='lg' variant='outlined'>
        <div className={cn('gap-2', flexCenterBetweenClasses)}>
          <h2 className='h6'>{t.preview}</h2>
          {file && (
            <p className='tool-meta'>
              {fileSize} · <strong>{inputFormat}</strong>
            </p>
          )}
        </div>

        {!previewUrl && (
          <div className='grid gap-2 sm:grid-cols-2'>
            {[
              { hex: '#2C5F2D', rgb: '44, 95, 45' },
              { hex: '#97BC62', rgb: '151, 188, 98' },
              { hex: '#F2E8CF', rgb: '242, 232, 207' },
              { hex: '#D4A373', rgb: '212, 163, 115' },
              { hex: '#6B705C', rgb: '107, 112, 92' },
              { hex: '#A5A58D', rgb: '165, 165, 141' },
            ].map(c => (
              <ToolColorSwatch
                key={c.hex}
                hex={c.hex}
                secondaryText={`rgb(${c.rgb})`}
                ariaLabelPrefix={t.colorPreview}
              />
            ))}
          </div>
        )}

        {status === 'processing' && previewUrl && (
          <ToolAlert variant='info'>{t.processing}</ToolAlert>
        )}

        {status === 'error' && previewUrl && error && (
          <ToolAlert variant='error'>{error}</ToolAlert>
        )}

        {previewUrl && (
          <ToolInfo>
            <div className='flex items-center gap-3'>
              <div
                className={cn(
                  'h-14 w-14 overflow-hidden rounded border border-neutral-300 bg-white',
                  flexCenterClasses,
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl}
                  alt={file?.name || t.previewAlt}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='min-w-0 overflow-hidden'>
                <p className='tool-value truncate text-dark' title={file?.name}>
                  {file?.name}
                </p>
                <ToolHelper className='text-xs!'>{t.copyHint}</ToolHelper>
              </div>
            </div>
          </ToolInfo>
        )}

        {colors.length > 0 && (
          <div className='grid gap-2 sm:grid-cols-2'>
            {colors.map(color => (
              <ToolColorSwatch
                key={color.hex}
                hex={color.hex}
                secondaryText={`rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`}
                ariaLabelPrefix={t.colorPreview}
                copyLabel={t.copy}
                copiedLabel={t.copied}
              />
            ))}
          </div>
        )}

        {colors.length === 0 && previewUrl && status === 'done' && (
          <p className='tool-meta'>{t.empty}</p>
        )}
      </Card>
    </div>
  );
}
