'use client';

import { useEffect, useRef, useState } from 'react';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/buttons/Button';
import ButtonPill from '@/components/atoms/buttons/ButtonPill';
import ToolAlert from '@/components/atoms/ToolAlert';
import FileDropzone from '@/components/molecules/FileDropzone';
import InputCheckboxWithLabel from '@/components/molecules/form/InputCheckboxWithLabel';
import InputRangeWithLabel from '@/components/molecules/form/InputRangeWithLabel';
import ToolFileRow from '@/components/molecules/tools/ToolFileRow';
import ToolProgressBar from '@/components/molecules/tools/ToolProgressBar';
import Card from '@/components/organisms/Card';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useWebpConversion } from '@/hooks/useWebpConversion';
import { useWebpDownloads } from '@/hooks/useWebpDownloads';
import { useWebpQueue } from '@/hooks/useWebpQueue';
import { useWebpReportCopy } from '@/hooks/useWebpReportCopy';
import { ui } from '@/lib/i18n/tools/jpgPngWebp';
import { useLocale } from '@/lib/LocaleContext';
import { flexCenterBetweenClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/clsx';
import { downloadFromUrl } from '@/utils/download';
import { formatBytes } from '@/utils/formatBytes';

/**
 * Render the JPG/PNG to WebP conversion tool UI, including file upload, quality and auto-download controls, conversion actions, progress/summary, clipboard report, and per-file queue management.
 *
 * @returns The JSX element for the JPG/PNG to WebP conversion tool.
 */
export default function JpgPngToWebp() {
  const locale = useLocale();
  const t = ui[locale];

  const { copy } = useCopyToClipboard();
  const [quality, setQuality] = useState(80);
  const [autoDownload, setAutoDownload] = useState(false);
  const [autoDownloadMode, setAutoDownloadMode] = useState<'files' | 'zip'>(
    'files',
  );
  const [includeCsvReport, setIncludeCsvReport] = useState(false);
  const [autoZipRequestId, setAutoZipRequestId] = useState(0);
  const handledAutoZipRequestId = useRef(0);
  const {
    files,
    setFiles,
    globalError,
    setGlobalError,
    addFiles,
    removeFile,
    reconvertFile,
    clearAll,
    previewFile,
  } = useWebpQueue({ addJpgPngOnlyError: t.addJpgPngOnly });

  const triggerDownloadFromUrl = downloadFromUrl;

  const { copyInfo, setCopyInfo, handleCopySummary } = useWebpReportCopy({
    files,
    copy,
    labels: {
      clipboardNotSupported: t.clipboardNotSupported,
      noCompletedConversions: t.noCompletedConversions,
      reportCopied: t.reportCopied,
      reportCopyError: t.reportCopyError,
      conversionReport: t.conversionReport,
      fileCount: t.fileCount,
      totalSizeBefore: t.totalSizeBefore,
      totalSizeAfter: t.totalSizeAfter,
      savedWeight: t.savedWeight,
      weightDifference: t.weightDifference,
      less: t.less,
      more: t.more,
    },
  });

  const { isConverting, handleSubmit } = useWebpConversion({
    files,
    setFiles,
    quality,
    autoDownload,
    autoDownloadMode,
    setGlobalError,
    setCopyInfo,
    triggerDownloadFromUrl,
    labels: {
      addAtLeastOne: t.addAtLeastOne,
      allProcessed: t.allProcessed,
      conversionError: t.conversionError,
      fileLoadError: t.fileLoadError,
      imageLoadError: t.imageLoadError,
      canvasNotSupported: t.canvasNotSupported,
      webpGenerationError: t.webpGenerationError,
    },
  });

  const {
    handleDownloadAll,
    handleDownloadZip,
    handleDownloadSingle,
    isZipping,
    zipError,
    setZipError,
  } = useWebpDownloads({
    files,
    setFiles,
    triggerDownloadFromUrl,
    zipGenerationError: t.zipGenerationError,
  });

  function handleClearAll() {
    clearAll();
    setCopyInfo(null);
    setZipError(null);
  }

  function handleSubmitWithAutoZip(e: React.SubmitEvent<HTMLFormElement>) {
    const toProcess = files.filter(
      f => f.status === 'pending' || f.status === 'error',
    );
    if (autoDownload && autoDownloadMode === 'zip' && toProcess.length) {
      setAutoZipRequestId(prev => prev + 1);
    }
    handleSubmit(e);
  }

  useEffect(() => {
    if (!autoZipRequestId) return;
    if (isConverting) return;
    if (handledAutoZipRequestId.current === autoZipRequestId) return;
    if (!autoDownload || autoDownloadMode !== 'zip') return;

    handledAutoZipRequestId.current = autoZipRequestId;
    void handleDownloadZip({ includeCsvReport });
  }, [
    autoDownload,
    autoDownloadMode,
    autoZipRequestId,
    handleDownloadZip,
    includeCsvReport,
    isConverting,
  ]);

  const total = files.length;
  const completed = files.filter(
    f => f.status === 'done' || f.status === 'error',
  ).length;

  const progress = total ? Math.round((completed / total) * 100) : 0;

  const totalInput = files.reduce((sum, f) => sum + f.inputSize, 0);
  const totalOutput = files.reduce((sum, f) => sum + (f.outputSize ?? 0), 0);
  const totalSaved = totalInput - totalOutput;

  const anyDone = files.some(f => f.status === 'done');

  const readyCount = files.filter(f => f.status === 'done').length;
  const pendingCount = files.filter(
    f => f.status === 'pending' || f.status === 'processing',
  ).length;

  const totalSavedPercent =
    totalInput > 0 ? Math.round((Math.abs(totalSaved) / totalInput) * 100) : 0;

  return (
    <div className='grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]'>
      <Card interactive={false} padding='lg'>
        <form onSubmit={handleSubmitWithAutoZip} className='space-y-4'>
          <div>
            <h2 className='h6 mb-2'>{t.addFiles}</h2>
            <FileDropzone
              accept='image/jpeg,image/png'
              multiple
              onFiles={addFiles}
              dragLabel={t.dragDropImages}
              clickLabel={t.clickToSelect}
              formatsLabel={t.supportedFormats}
            />
            {globalError && (
              <ToolAlert variant='error' className='mt-2'>
                {globalError}
              </ToolAlert>
            )}
          </div>

          <div>
            <h3 className='h6 mt-8 mb-2'>{t.setQuality}</h3>
            <InputRangeWithLabel
              value={quality}
              min={60}
              max={95}
              onChange={setQuality}
              suffix='%'
              helper={t.qualityHelper}
            />

            <InputCheckboxWithLabel
              id='auto-download'
              checked={autoDownload}
              onChange={setAutoDownload}
              label={t.autoDownloadAll}
            />

            {autoDownload && (
              <div className='mt-3 ml-6 flex flex-wrap items-center gap-2'>
                <ButtonPill
                  value='files'
                  current={autoDownloadMode}
                  label={t.autoDownloadModeFiles}
                  onChange={v => setAutoDownloadMode(v as 'files' | 'zip')}
                  disabled={isConverting}
                />
                <ButtonPill
                  value='zip'
                  current={autoDownloadMode}
                  label={t.autoDownloadModeZip}
                  onChange={v => setAutoDownloadMode(v as 'files' | 'zip')}
                  disabled={isConverting}
                />
              </div>
            )}
          </div>

          <div>
            <h3 className='h6 mt-8 mb-2'>{t.convertAndDownload}</h3>
            {total > 0 && (
              <div className='mb-3 space-y-2'>
                <div className={flexCenterBetweenClasses}>
                  <span className='tool-meta'>
                    {t.inQueue} <strong>{total}</strong> {t.files}
                  </span>
                  {total > 0 && (
                    <span className='tool-meta'>
                      {t.completed}: {completed} / {total}
                    </span>
                  )}
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
                onClick={() => void handleDownloadZip({ includeCsvReport })}
                disabled={!anyDone || isConverting || isZipping}
                className='disabled:opacity-40'
                size='small'
              >
                {t.downloadZip}
              </Button>
              <Button
                onClick={handleClearAll}
                disabled={!files.length || isConverting}
                className='disabled:opacity-40'
                size='small'
              >
                {t.clearAll}
              </Button>
            </div>

            <InputCheckboxWithLabel
              id='webp-include-csv'
              checked={includeCsvReport}
              onChange={setIncludeCsvReport}
              disabled={isZipping}
              label={t.includeCsvReport}
            />

            {zipError && (
              <ToolAlert variant='error' className='mt-2'>
                {zipError}
              </ToolAlert>
            )}
            {isZipping && (
              <ToolAlert variant='info' className='mt-2'>
                {t.zipping}
              </ToolAlert>
            )}

            {totalInput > 0 && (
              <div className='mt-6'>
                <p className='tool-meta'>
                  {t.totalInputSize} <strong>{formatBytes(totalInput)}</strong>
                </p>
                {totalOutput > 0 && (
                  <>
                    <p className='tool-meta'>
                      {t.totalOutputSize}{' '}
                      <strong>{formatBytes(totalOutput)}</strong>
                    </p>
                    <p className='tool-meta'>
                      {totalSaved >= 0 ? (
                        <>
                          {t.totalSaved}:{' '}
                          <strong>
                            {formatBytes(totalSaved)} (~{totalSavedPercent}%{' '}
                            {t.less})
                          </strong>
                        </>
                      ) : (
                        <>
                          {t.totalIncreased}:{' '}
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

            <div className='mt-6 flex flex-wrap items-center gap-2'>
              <Button
                variant='normal'
                size='small'
                onClick={handleCopySummary}
                disabled={!anyDone}
                className='border-0 shadow-none hover:translate-y-0 hover:shadow-none disabled:opacity-40'
              >
                {t.copySummary}
              </Button>
              {copyInfo && <span className='tool-meta'>{copyInfo}</span>}
            </div>
          </div>
        </form>
      </Card>

      <Card interactive={false} padding='lg'>
        <div className={cn('gap-2', flexCenterBetweenClasses)}>
          <h2 className='h6'>{t.queueFilesHeading}</h2>
          {files.length > 0 && (
            <p className='tool-meta'>
              {t.readyCount}: {readyCount} · {t.pendingCount}: {pendingCount}
            </p>
          )}
        </div>

        {files.length === 0 && (
          <>
            <div className='space-y-2 text-sm!'>
              {t.demoFiles.map(f => (
                <ToolFileRow
                  key={f.name}
                  name={f.name}
                  meta={
                    <>
                      {t.sizeBefore} {f.before} · {t.sizeAfter} {f.after} (
                      {f.diff} {t.less})
                    </>
                  }
                  actions={
                    <Badge variant='success' size='md'>
                      {t.status.done}
                    </Badge>
                  }
                />
              ))}
            </div>

            <div className='rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm!'>
              <p className='tool-meta'>
                {t.demoSummary} <strong>1.96 MB (~64% {t.less})</strong>
              </p>
            </div>
          </>
        )}

        {files.length > 0 && (
          <div className='space-y-2 text-sm!'>
            {files.map(item => {
              const statusLabel =
                item.status === 'pending'
                  ? t.status.pending
                  : item.status === 'processing'
                    ? t.status.processing
                    : item.status === 'done'
                      ? t.status.done
                      : t.status.error;

              const isBigger =
                item.outputSize != null && item.outputSize > item.inputSize;

              const diffPercent =
                item.outputSize != null && item.inputSize > 0
                  ? Math.round(
                      ((item.inputSize - item.outputSize) / item.inputSize) *
                        100,
                    )
                  : null;

              return (
                <div
                  key={item.id}
                  className='flex flex-col gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 md:flex-row md:items-center md:justify-between'
                >
                  <div className='flex min-w-0 flex-1 items-center gap-3'>
                    <button
                      type='button'
                      onClick={() => previewFile(item.id)}
                      className='hidden h-12 w-12 overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 md:block'
                      title={t.actions.preview}
                    >
                      {item.previewUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.previewUrl}
                          alt={item.file.name}
                          className='h-full w-full object-cover'
                        />
                      )}
                    </button>

                    <div className='min-w-0 flex-1'>
                      <div title={item.file.name}>
                        <p className='tool-value truncate text-dark'>
                          {item.file.name}
                        </p>
                      </div>
                      <p className='tool-meta'>
                        {t.sizeBefore} {formatBytes(item.inputSize)}
                        {item.outputSize != null && (
                          <>
                            {' · '}
                            {t.sizeAfter} {formatBytes(item.outputSize)}{' '}
                            {diffPercent !== null && (
                              <>
                                {' ('}
                                {Math.abs(diffPercent)}%{' '}
                                {diffPercent >= 0 ? t.less : t.more}
                                {')'}
                              </>
                            )}
                            {isBigger && (
                              <span className='ml-1 text-xs! text-warning-text'>
                                {t.biggerThanOriginal}
                              </span>
                            )}
                          </>
                        )}
                      </p>
                      {item.usedQuality && (
                        <p className='tool-meta'>
                          {t.usedQuality} {item.usedQuality}%
                        </p>
                      )}
                      {item.error && (
                        <ToolAlert variant='error' className='mt-2'>
                          {item.error}
                        </ToolAlert>
                      )}
                    </div>
                  </div>

                  <div className='flex items-center gap-1'>
                    <Badge
                      variant={
                        item.status === 'done'
                          ? 'success'
                          : item.status === 'error'
                            ? 'error'
                            : 'neutral'
                      }
                      size='md'
                    >
                      {statusLabel}
                    </Badge>

                    {item.status === 'done' && item.downloadUrl && (
                      <Badge
                        as='button'
                        type='button'
                        onClick={() => handleDownloadSingle(item.id)}
                        variant='default'
                        size='md'
                        className='cursor-pointer border-black/15'
                      >
                        {item.downloaded ? t.downloaded : t.actions.download}
                      </Badge>
                    )}

                    {item.status === 'done' && (
                      <Badge
                        as='button'
                        type='button'
                        onClick={() => reconvertFile(item.id)}
                        variant='default'
                        size='md'
                        className='cursor-pointer border-neutral-200'
                      >
                        {t.actions.reconvert}
                      </Badge>
                    )}

                    <Badge
                      as='button'
                      type='button'
                      onClick={() => removeFile(item.id)}
                      variant='default'
                      size='sm'
                      className='cursor-pointer text-light hover:text-dark'
                    >
                      {t.actions.remove}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
}
