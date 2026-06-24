'use client';

import { useRef, useState } from 'react';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/buttons/Button';
import ToolAlert from '@/components/atoms/ToolAlert';
import FileDropzone from '@/components/molecules/FileDropzone';
import InputRangeWithLabel from '@/components/molecules/form/InputRangeWithLabel';
import ToolFileRow from '@/components/molecules/tools/ToolFileRow';
import ToolProgressBar from '@/components/molecules/tools/ToolProgressBar';
import Card from '@/components/organisms/Card';
import FormatSelector from '@/components/organisms/tools/FormatPicker/FormatSelector';
import { useConversionQueue } from '@/hooks/useConversionQueue';
import { cn } from '@/lib/clsx';
import { useDictionary } from '@/lib/LocaleContext';
import {
  getConversionStatusBadgeVariant,
  getConversionStatusLabel,
} from '@/lib/tools/conversionStatus';
import {
  FORMAT_EXTENSION,
  FORMAT_LABELS,
  hasQualitySlider,
} from '@/lib/tools/image/imageFormatConverter';
import { flexCenterBetweenClasses } from '@/lib/uiClasses';
import type { ImageFormatConverterProps } from '@/types/tools/image-format-converter';
import { downloadBlob } from '@/utils/download';
import { formatBytes } from '@/utils/formatBytes';

/**
 * Replace all `{{key}}` placeholders in a string with corresponding values.
 *
 * @param str - Template string containing placeholders in the form `{{key}}`
 * @param vars - Mapping from placeholder keys (without braces) to replacement strings
 * @returns The input string with every occurrence of each `{{key}}` replaced by `vars[key]`
 */
function tpl(str: string, vars: Record<string, string>): string {
  return Object.entries(vars).reduce(
    (s, [k, v]) => s.replace(new RegExp(`\\{\\{${k}\\}\\}`, 'g'), v),
    str,
  );
}

export default function ImageFormatConverter({
  sourceFormat,
  targetFormat,
  acceptMime,
  defaultQuality,
}: ImageFormatConverterProps) {
  const { imageConverter: t } = useDictionary();
  const showQuality = hasQualitySlider(targetFormat);
  const initialQuality = defaultQuality ?? (targetFormat === 'webp' ? 80 : 85);
  const [quality, setQuality] = useState(initialQuality);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const qualitySetRef = useRef(false);

  const sourceLabel = FORMAT_LABELS[sourceFormat];
  const targetLabel = FORMAT_LABELS[targetFormat];
  const ext = FORMAT_EXTENSION[targetFormat];

  const errorMessages = {
    fileLoad: t.errorFileLoad,
    imageLoad: t.errorImageLoad,
    canvasNotSupported: t.errorCanvas,
    generationError: tpl(t.errorGeneration, { format: targetLabel }),
    fileTooLarge: t.errorTooLarge,
    avifNotSupported: t.errorAvifNotSupported,
  };

  const {
    files,
    isConverting,
    addFiles,
    clearAll,
    removeFile,
    setQuality: setQueueQuality,
    convertAll,
    totalInputSize,
    totalOutputSize,
    pendingCount,
    doneCount,
  } = useConversionQueue({
    targetFormat,
    errorMessages,
  });

  const handleQualityChange = (v: number) => {
    setQuality(v);
    setQueueQuality(v / 100);
    qualitySetRef.current = true;
  };

  // Set initial quality on mount
  if (!qualitySetRef.current) {
    setQueueQuality(initialQuality / 100);
    qualitySetRef.current = true;
  }

  const handleAddFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    setGlobalError(null);
    const all = Array.from(fileList);
    const mimeList = acceptMime.split(',').map(m => m.trim());
    const extMap: Record<string, string[]> = {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp'],
      'image/gif': ['.gif'],
      'image/bmp': ['.bmp'],
      'image/x-ms-bmp': ['.bmp'],
      'image/x-bmp': ['.bmp'],
      'image/svg+xml': ['.svg'],
      'image/avif': ['.avif'],
      'image/heic': ['.heic'],
      'image/heif': ['.heif'],
      'image/tiff': ['.tiff', '.tif'],
    };
    const directExts = mimeList
      .filter(m => m.startsWith('.'))
      .map(m => m.toLowerCase());
    const allowedExts = [
      ...directExts,
      ...mimeList.filter(m => !m.startsWith('.')).flatMap(m => extMap[m] ?? []),
    ];
    const mimeTypes = mimeList.filter(m => !m.startsWith('.'));
    const valid = all.filter(f => {
      if (f.type && mimeTypes.some(m => f.type === m)) return true;
      const name = f.name.toLowerCase();
      return allowedExts.some(ext => name.endsWith(ext));
    });
    if (valid.length < all.length) {
      setGlobalError(tpl(t.errorWrongFormat, { format: sourceLabel }));
    }
    if (valid.length > 0) addFiles(valid);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!files.length) {
      setGlobalError(tpl(t.errorNoFiles, { format: sourceLabel }));
      return;
    }
    setGlobalError(null);
    void convertAll();
  };

  const handleDownloadSingle = (id: string) => {
    const file = files.find(f => f.id === id);
    if (!file?.outputBlob) return;
    const baseName = file.file.name.replace(/\.[^.]+$/, '');
    downloadBlob(file.outputBlob, `${baseName}${ext}`);
  };

  const handleDownloadAll = () => {
    const done = files.filter(f => f.status === 'done' && f.outputBlob);
    for (const file of done) {
      const baseName = file.file.name.replace(/\.[^.]+$/, '');
      downloadBlob(file.outputBlob!, `${baseName}${ext}`);
    }
  };

  const total = files.length;
  const completed = files.filter(
    f => f.status === 'done' || f.status === 'error',
  ).length;
  const progress = total ? Math.round((completed / total) * 100) : 0;
  const anyDone = doneCount > 0;
  const totalSaved = totalInputSize - totalOutputSize;
  const totalSavedPercent =
    totalInputSize > 0
      ? Math.round((Math.abs(totalSaved) / totalInputSize) * 100)
      : 0;

  return (
    <div className='overflow-hidden'>
      <FormatSelector
        currentSource={sourceFormat}
        currentTarget={targetFormat}
        hasFiles={files.length > 0}
      />

      <div className='grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]'>
        <Card interactive={false} padding='lg' variant='outlined'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <h2 className='h6 mb-2'>{t.addFiles}</h2>
              <FileDropzone
                accept={acceptMime}
                multiple
                onFiles={handleAddFiles}
                dragLabel={tpl(t.dragDrop, { format: sourceLabel })}
                clickLabel={t.clickToSelect}
                formatsLabel={tpl(t.supported, { format: sourceLabel })}
              />
              {globalError && (
                <ToolAlert variant='error' className='mt-2'>
                  {globalError}
                </ToolAlert>
              )}
            </div>

            {showQuality && (
              <div>
                <h3 className='h6 mt-8 mb-2'>
                  {tpl(t.setQuality, { format: targetLabel })}
                </h3>
                <InputRangeWithLabel
                  value={quality}
                  min={60}
                  max={95}
                  onChange={handleQualityChange}
                  suffix='%'
                  helper={t.qualityHelper}
                />
              </div>
            )}

            <div>
              <h3 className='h6 mt-8 mb-2'>{t.convertAndDownload}</h3>
              {total > 0 && (
                <div className='mb-3 space-y-2'>
                  <div className={flexCenterBetweenClasses}>
                    <span className='tool-meta'>
                      {t.inQueue} <strong>{total}</strong> {t.files}
                    </span>
                    <span className='tool-meta'>
                      {t.completed}: {completed} / {total}
                    </span>
                  </div>
                  <ToolProgressBar
                    value={progress}
                    ariaLabel={`${completed} / ${total}`}
                  />
                </div>
              )}

              <div className='mt-4 flex flex-wrap gap-3'>
                <Button
                  variant='accent'
                  disabled={isConverting || !files.length}
                  className='disabled:opacity-60'
                  type='submit'
                  size='small'
                >
                  {isConverting ? t.converting : t.convert}
                </Button>
                <Button
                  onClick={handleDownloadAll}
                  disabled={!anyDone}
                  className='disabled:opacity-40'
                  size='small'
                >
                  {t.downloadAll}
                </Button>
                <Button
                  onClick={clearAll}
                  disabled={!files.length || isConverting}
                  className='disabled:opacity-40'
                  size='small'
                >
                  {t.clearAll}
                </Button>
              </div>

              {totalInputSize > 0 && (
                <div className='mt-6'>
                  <p className='tool-meta'>
                    {t.totalInput}{' '}
                    <strong>{formatBytes(totalInputSize)}</strong>
                  </p>
                  {totalOutputSize > 0 && (
                    <>
                      <p className='tool-meta'>
                        {t.totalOutput}{' '}
                        <strong>{formatBytes(totalOutputSize)}</strong>
                      </p>
                      <p className='tool-meta'>
                        {totalSaved >= 0 ? (
                          <>
                            {t.saved}{' '}
                            <strong>
                              {formatBytes(totalSaved)} (~{totalSavedPercent}%{' '}
                              {t.less})
                            </strong>
                          </>
                        ) : (
                          <>
                            {t.increased}{' '}
                            <strong>
                              {formatBytes(Math.abs(totalSaved))} (~
                              {totalSavedPercent}% {t.more})
                            </strong>
                          </>
                        )}
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          </form>
        </Card>

        <Card
          interactive={false}
          padding='lg'
          aria-label={t.queueAriaLabel}
          variant='outlined'
        >
          <div className={cn('gap-2', flexCenterBetweenClasses)}>
            <h2 className='h6'>{t.queueHeading}</h2>
            {files.length > 0 && (
              <p className='tool-meta'>
                {t.readyCount}: {doneCount} · {t.pendingCount}: {pendingCount}
              </p>
            )}
          </div>

          {files.length === 0 && (
            <div className='rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-6 text-center'>
              <p className='tool-meta'>
                {tpl(t.emptyState, {
                  source: sourceLabel,
                  target: targetLabel,
                })}
              </p>
            </div>
          )}

          {files.length > 0 && (
            <div className='space-y-2 text-sm!'>
              {files.map(item => {
                const statusLabel = getConversionStatusLabel(item.status, {
                  pending: t.statusPending,
                  processing: t.statusProcessing,
                  done: t.statusDone,
                  error: t.statusError,
                });

                const diffPercent =
                  item.outputSize > 0 && item.inputSize > 0
                    ? Math.round(
                        ((item.inputSize - item.outputSize) / item.inputSize) *
                          100,
                      )
                    : null;

                return (
                  <ToolFileRow
                    key={item.id}
                    name={item.file.name}
                    meta={
                      <>
                        {t.before} {formatBytes(item.inputSize)}
                        {item.status === 'done' && item.outputSize > 0 && (
                          <>
                            {' · '}
                            {t.after} {formatBytes(item.outputSize)}
                            {diffPercent !== null && (
                              <>
                                {' ('}
                                {Math.abs(diffPercent)}%{' '}
                                {diffPercent >= 0 ? t.less : t.more}
                                {')'}
                              </>
                            )}
                          </>
                        )}
                        {item.errorMessage && (
                          <span className='ml-1 text-error-text'>
                            {item.errorMessage}
                          </span>
                        )}
                      </>
                    }
                    actions={
                      <div className='flex items-center gap-1'>
                        <Badge
                          variant={getConversionStatusBadgeVariant(item.status)}
                          size='md'
                        >
                          {statusLabel}
                        </Badge>
                        {item.status === 'done' && (
                          <Badge
                            as='button'
                            type='button'
                            onClick={() => handleDownloadSingle(item.id)}
                            variant='default'
                            size='md'
                            className='cursor-pointer border-black/15'
                          >
                            {t.download}
                          </Badge>
                        )}
                        {item.status !== 'processing' && (
                          <Badge
                            as='button'
                            type='button'
                            onClick={() => removeFile(item.id)}
                            variant='default'
                            size='sm'
                            className='cursor-pointer text-light hover:text-dark'
                          >
                            {t.remove}
                          </Badge>
                        )}
                      </div>
                    }
                  />
                );
              })}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
