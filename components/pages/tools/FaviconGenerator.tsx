'use client';
import Image from 'next/image';
import { useState } from 'react';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/buttons/Button';
import InputColor from '@/components/atoms/form/InputColor';
import ToolAlert from '@/components/atoms/ToolAlert';
import ToolInfo from '@/components/atoms/ToolInfo';
import FileDropzone from '@/components/molecules/FileDropzone';
import InputCheckboxWithLabel from '@/components/molecules/form/InputCheckboxWithLabel';
import ToolFileRow from '@/components/molecules/tools/ToolFileRow';
import ToolUploadContent from '@/components/molecules/tools/ToolUploadContent';
import Card from '@/components/organisms/Card';
import { ui } from '@/lib/i18n/tools/favicon';
import { useLocale } from '@/lib/LocaleContext';
import { rgbToHex } from '@/lib/tools/color/convert';
import {
  type FaviconOutputFile,
  generateFaviconOutputs,
} from '@/lib/tools/faviconGenerator';
import {
  isSupportedImageUploadType,
  SUPPORTED_IMAGE_UPLOAD_TYPES,
} from '@/lib/tools/image/uploadTypes';
import { flexCenterBetweenClasses, flexCenterClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';
import type { Locale } from '@/types/locale';
import type { ToolStatus } from '@/types/tools/common';
import { downloadFromUrl } from '@/utils/download';
import { formatBytes } from '@/utils/formatBytes';
import { loadImage } from '@/utils/loadImage';
import { revokeObjectUrl } from '@/utils/objectUrl';
import { createZipBlob, type ZipFileInput } from '@/utils/zip';

/**
 * Builds a web app manifest JSON string from generated favicon outputs.
 *
 * @param outputs - Generated favicon output entries; only entries with `type === 'png'` and a numeric `size` are included in the manifest's `icons` array.
 * @param backgroundColor - Color used for `theme_color` and `background_color` in the manifest.
 * @param locale - Locale selector for `name` and `short_name` (`'pl'` => Polish, `'de'` => German, any other value => English).
 * @returns A pretty-printed JSON string representing a web app manifest with `icons`, localized `name` and `short_name`, `theme_color`, `background_color`, and `display: 'standalone'`.
 */
function createWebmanifest(
  outputs: FaviconOutputFile[],
  backgroundColor: string,
  locale: Locale = 'pl',
) {
  const icons = outputs
    .filter(o => o.type === 'png' && typeof o.size === 'number')
    .map(o => ({
      src: o.fileName,
      sizes: `${o.size}x${o.size}`,
      type: 'image/png',
    }));

  const manifest = {
    name:
      locale === 'pl'
        ? 'Twoja strona'
        : locale === 'de'
          ? 'Ihre Website'
          : 'Your website',
    short_name: locale === 'pl' ? 'Strona' : locale === 'de' ? 'Seite' : 'Site',
    icons,
    theme_color: backgroundColor,
    background_color: backgroundColor,
    display: 'standalone',
  };

  return JSON.stringify(manifest, null, 2);
}

const PNG_SIZES = [16, 32, 180, 192, 512];

const DEFAULT_BACKGROUND_COLOR = rgbToHex({ r: 255, g: 255, b: 255 });

/**
 * Interactive component for creating, previewing, and downloading favicons from an uploaded image.
 *
 * Creates temporary object URLs for the source preview and generated files and revokes them when no longer needed.
 *
 * @returns The component's rendered JSX element tree.
 */
export default function FaviconGenerator() {
  const locale = useLocale();
  const t = ui[locale];
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [sourcePreviewUrl, setSourcePreviewUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<ToolStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const [selectedSizes, setSelectedSizes] = useState<number[]>([
    16, 32, 180, 192, 512,
  ]);
  const [includeIco, setIncludeIco] = useState(true);
  const [transparentBackground, setTransparentBackground] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    DEFAULT_BACKGROUND_COLOR,
  );
  const [includeWebmanifest, setIncludeWebmanifest] = useState(false);
  const [autoDownload, setAutoDownload] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  const [outputs, setOutputs] = useState<FaviconOutputFile[]>([]);

  function revokeOutputs(urls: FaviconOutputFile[]) {
    urls.forEach(o => revokeObjectUrl(o.url));
  }

  function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;

    if (!isSupportedImageUploadType(file)) {
      setError(t.supportedFormatsOnly);
      setSourceFile(null);
      if (sourcePreviewUrl) {
        revokeObjectUrl(sourcePreviewUrl);
        setSourcePreviewUrl(null);
      }
      return;
    }

    setError(null);
    setStatus('idle');
    setOutputs(prev => {
      revokeOutputs(prev);
      return [];
    });

    revokeObjectUrl(sourcePreviewUrl);

    const preview = URL.createObjectURL(file);
    setSourceFile(file);
    setSourcePreviewUrl(preview);
  }

  function toggleSize(size: number) {
    setSelectedSizes(prev => {
      if (prev.includes(size)) {
        return prev.filter(s => s !== size);
      }
      return [...prev, size].sort((a, b) => a - b);
    });
  }

  async function handleGenerate(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!sourceFile || !sourcePreviewUrl) {
      setError(t.addBaseImage);
      return;
    }

    if (!selectedSizes.length && !includeIco) {
      setError(t.selectAtLeastOne);
      return;
    }

    setStatus('processing');
    setOutputs(prev => {
      revokeOutputs(prev);
      return [];
    });

    try {
      const img = await loadImage(sourcePreviewUrl, {
        crossOrigin: 'anonymous',
        errorMessage: t.imageLoadError,
      });

      const newOutputs = await generateFaviconOutputs({
        img,
        pngSizes: selectedSizes,
        includeIco,
        backgroundColor,
        transparentBackground,
        faviconIcoLabel: t.faviconIcoLabel,
        canvasNotSupportedErrorMessage: t.canvasNotSupported,
        pngGenerationErrorMessage: t.pngGenerationError,
        onOutput: output => {
          if (autoDownload) {
            downloadFromUrl(output.url, output.fileName);
          }
        },
      });

      setOutputs(newOutputs);
      setStatus('done');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setError(err instanceof Error ? err.message : t.unexpectedError);
    }
  }

  async function handleDownloadZip() {
    if (!outputs.length) return;

    setError(null);
    setIsZipping(true);

    try {
      const files: ZipFileInput[] = [];

      for (const output of outputs) {
        const res = await fetch(output.url);
        const blob = await res.blob();
        const buffer = await blob.arrayBuffer();
        files.push({ path: output.fileName, data: new Uint8Array(buffer) });
      }

      if (includeWebmanifest) {
        const manifest = createWebmanifest(outputs, backgroundColor, locale);
        const manifestBytes = new TextEncoder().encode(manifest);
        files.push({ path: 'site.webmanifest', data: manifestBytes });
      }

      const zipBlob = createZipBlob(files);
      const zipUrl = URL.createObjectURL(zipBlob);
      downloadFromUrl(zipUrl, 'favicons.zip');
      setTimeout(() => revokeObjectUrl(zipUrl), 2000);
    } catch (err) {
      console.error(err);
      setError(t.zipGenerationError);
    } finally {
      setIsZipping(false);
    }
  }

  function handleDownloadAll() {
    if (!outputs.length) return;

    outputs.forEach(item => {
      downloadFromUrl(item.url, item.fileName);
    });
  }

  function handleClear() {
    setStatus('idle');
    setError(null);
    setOutputs(prev => {
      revokeOutputs(prev);
      return [];
    });

    if (sourcePreviewUrl) {
      revokeObjectUrl(sourcePreviewUrl);
      setSourcePreviewUrl(null);
    }
    setSourceFile(null);
  }

  const totalSize = outputs.reduce((sum, file) => sum + file.sizeBytes, 0);

  const hasSource = !!sourceFile;
  const isProcessing = status === 'processing';
  const anyOutputs = outputs.length > 0;

  return (
    <>
      <div className='grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]'>
        <Card interactive={false} padding='lg'>
          <form onSubmit={handleGenerate} className='space-y-6'>
            <div>
              <h2 className='h6 mb-2'>{t.addBaseImageLabel}</h2>
              <FileDropzone
                accept={SUPPORTED_IMAGE_UPLOAD_TYPES.join(',')}
                onFiles={handleFiles}
              >
                <ToolUploadContent
                  dragLabel={t.dragDropImage}
                  clickLabel={t.clickToSelect}
                  formatsLabel={t.supportedFormats}
                />
              </FileDropzone>
              {sourceFile && (
                <p className='tool-meta mt-2'>
                  {t.selectedFile} <strong>{sourceFile.name}</strong> (
                  {formatBytes(sourceFile.size)})
                </p>
              )}
              {error && (
                <ToolAlert variant='error' className='mt-2'>
                  {error}
                </ToolAlert>
              )}
            </div>

            <div>
              <h3 className='h6 mt-8 mb-2'>{t.setSizesAndBackground}</h3>

              <ToolInfo>
                <p className='tool-value mb-2!'>{t.pngSizes}</p>
                <div className='flex flex-wrap gap-2'>
                  {PNG_SIZES.map(size => {
                    const checked = selectedSizes.includes(size);
                    return (
                      <label
                        key={size}
                        htmlFor={`size-${size}`}
                        className={cn(
                          'inline-flex cursor-pointer items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium',
                          checked
                            ? 'border-black bg-primary text-white'
                            : 'border-neutral-200 bg-white hover:bg-neutral-100',
                        )}
                      >
                        <InputCheckboxWithLabel
                          id={`size-${size}`}
                          checked={checked}
                          onChange={() => toggleSize(size)}
                          label={''}
                        />
                        {size}x{size}
                      </label>
                    );
                  })}
                </div>
              </ToolInfo>

              <ToolInfo className='mt-4 gap-2'>
                <InputCheckboxWithLabel
                  id='transparent-bg'
                  checked={transparentBackground}
                  onChange={setTransparentBackground}
                  label={t.transparentBackground}
                />

                <div className='flex items-center gap-2'>
                  <span className='tool-meta'>{t.backgroundColor}</span>
                  <InputColor
                    value={backgroundColor}
                    onChange={e => setBackgroundColor(e.target.value)}
                    disabled={transparentBackground}
                    className='h-8! w-7!'
                  />
                </div>
              </ToolInfo>

              <ToolInfo className='mt-4 flex flex-wrap items-center gap-2'>
                <InputCheckboxWithLabel
                  id='include-ico'
                  checked={includeIco}
                  onChange={setIncludeIco}
                  label={t.generateFaviconIco}
                />
                <InputCheckboxWithLabel
                  id='include-webmanifest'
                  checked={includeWebmanifest}
                  onChange={setIncludeWebmanifest}
                  label={t.includeWebmanifest}
                />
                <InputCheckboxWithLabel
                  id='auto-download'
                  checked={autoDownload}
                  onChange={setAutoDownload}
                  label={t.autoDownload}
                />
              </ToolInfo>
            </div>

            <div>
              <h3 className='h6 mt-8 mb-2'>{t.generateAndDownload}</h3>

              <div className='flex flex-wrap gap-3'>
                <Button
                  type='submit'
                  variant='accent'
                  size='small'
                  disabled={!hasSource || isProcessing}
                  className='disabled:opacity-60'
                >
                  {isProcessing ? t.generating : t.generate}
                </Button>
                <Button
                  onClick={handleDownloadAll}
                  type='button'
                  size='small'
                  disabled={!anyOutputs}
                  className='disabled:opacity-40'
                >
                  {t.downloadAll}
                </Button>
                <Button
                  onClick={handleDownloadZip}
                  type='button'
                  size='small'
                  disabled={!anyOutputs || isProcessing || isZipping}
                  className='disabled:opacity-40'
                >
                  {t.downloadZip}
                </Button>
                <Button
                  onClick={handleClear}
                  type='button'
                  size='small'
                  disabled={isProcessing || (!hasSource && !anyOutputs)}
                  className='disabled:opacity-40'
                >
                  {t.clear}
                </Button>
              </div>

              {status === 'processing' && (
                <ToolAlert variant='info' className='mt-2'>
                  {t.processing}
                </ToolAlert>
              )}
              {isZipping && (
                <ToolAlert variant='info' className='mt-2'>
                  {t.zipping}
                </ToolAlert>
              )}
              {status === 'done' && !error && (
                <ToolAlert variant='success' className='mt-2'>
                  {t.done}
                </ToolAlert>
              )}
            </div>
          </form>
        </Card>

        <Card interactive={false} padding='lg'>
          <div className={cn('gap-2', flexCenterBetweenClasses)}>
            <h2 className='h6'>{t.previewAndFiles}</h2>
            {anyOutputs && (
              <p className='tool-meta'>
                {t.totalSize} <strong>{formatBytes(totalSize)}</strong>
              </p>
            )}
          </div>

          {!hasSource && !anyOutputs && (
            <div className='space-y-2 text-sm!'>
              {[
                { name: 'favicon.ico', label: 'ICO 32x32', size: '1.1 KB' },
                {
                  name: 'favicon-16x16.png',
                  label: 'PNG 16x16',
                  size: '0.4 KB',
                },
                {
                  name: 'favicon-32x32.png',
                  label: 'PNG 32x32',
                  size: '0.8 KB',
                },
                {
                  name: 'apple-touch-icon.png',
                  label: 'PNG 180x180',
                  size: '5.2 KB',
                },
                {
                  name: 'android-chrome-192x192.png',
                  label: 'PNG 192x192',
                  size: '6.1 KB',
                },
                {
                  name: 'android-chrome-512x512.png',
                  label: 'PNG 512x512',
                  size: '18.7 KB',
                },
              ].map(f => (
                <ToolFileRow
                  key={f.name}
                  name={f.name}
                  meta={
                    <>
                      {f.label} · {f.size}
                    </>
                  }
                  actions={
                    <Badge variant='success' size='md'>
                      {t.done}
                    </Badge>
                  }
                />
              ))}
            </div>
          )}

          {hasSource && (
            <ToolInfo className='flex flex-wrap items-center gap-4'>
              <div>
                <p className='tool-value mb-2'>{t.previewBaseImage}</p>
                <div className='flex items-center gap-3'>
                  <div className='flex items-center gap-2'>
                    <div
                      className={cn(
                        'h-10 w-10 overflow-hidden rounded border border-neutral-300 bg-white',
                        flexCenterClasses,
                      )}
                    >
                      {}
                      {sourcePreviewUrl && (
                        <Image
                          src={sourcePreviewUrl}
                          alt={t.previewFavicon}
                          className='h-full w-full object-cover'
                        />
                      )}
                    </div>
                    <span className='tool-meta'>{t.approximatePreview}</span>
                  </div>

                  <div className='hidden items-center gap-2 md:flex'>
                    <div
                      className={cn(
                        'h-12 w-12 overflow-hidden rounded border border-neutral-300 bg-white',
                        flexCenterClasses,
                      )}
                    >
                      {}
                      {sourcePreviewUrl && (
                        <Image
                          src={sourcePreviewUrl}
                          alt={t.largeIconPreview}
                          className='h-full w-full object-cover'
                        />
                      )}
                    </div>
                    <span className='tool-meta'>{t.largeIconPreview}</span>
                  </div>
                </div>
              </div>
            </ToolInfo>
          )}

          {anyOutputs && (
            <div className='space-y-2 text-sm!'>
              {outputs.map(item => (
                <ToolFileRow
                  key={item.id}
                  name={item.fileName}
                  meta={
                    <>
                      {item.label} · {formatBytes(item.sizeBytes)}
                    </>
                  }
                  preview={
                    <button
                      type='button'
                      onClick={() =>
                        open(item.url, '_blank', 'noopener,noreferrer')
                      }
                      className='hidden h-10 w-10 overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 md:block'
                      title={t.clickToPreview}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.url}
                        alt={item.fileName}
                        className='h-full w-full object-cover'
                      />
                    </button>
                  }
                  actions={
                    <Badge
                      as='a'
                      href={item.url}
                      download={item.fileName}
                      size='md'
                      className='cursor-pointer border-black/15'
                    >
                      {t.download}
                    </Badge>
                  }
                />
              ))}
            </div>
          )}
        </Card>
      </div>
    </>
  );
}
