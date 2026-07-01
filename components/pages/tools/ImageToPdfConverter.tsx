'use client';

import { useRef, useState } from 'react';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/buttons/Button';
import ToolAlert from '@/components/atoms/ToolAlert';
import FileDropzone from '@/components/molecules/FileDropzone';
import ToolFileRow from '@/components/molecules/tools/ToolFileRow';
import ToolProgressBar from '@/components/molecules/tools/ToolProgressBar';
import Card from '@/components/organisms/Card';
import FormatSelector from '@/components/organisms/tools/FormatPicker/FormatSelector';
import { cn } from '@/lib/clsx';
import { useDictionary } from '@/lib/LocaleContext';
import {
  getConversionStatusBadgeVariant,
  getConversionStatusLabel,
} from '@/lib/tools/conversionStatus';
import { FORMAT_LABELS } from '@/lib/tools/image/imageToPdf';
import { flexCenterBetweenClasses } from '@/lib/uiClasses';
import type {
  ImageFormat,
  ImageToPdfConverterProps,
  PdfQueueFile,
} from '@/types/tools/image-to-pdf-converter';
import { downloadBlob, downloadFromUrl } from '@/utils/download';
import { formatBytes } from '@/utils/formatBytes';

let fileIdCounter = 0;

async function decodeToCanvas(
  file: File,
  sourceFormat: ImageFormat,
): Promise<HTMLCanvasElement> {
  let blob: Blob = file;

  if (sourceFormat === 'heic') {
    const heic2any = (await import('heic2any')).default;
    const result = await heic2any({ blob: file, toType: 'image/png' });
    blob = Array.isArray(result) ? result[0] : result;
  }

  if (sourceFormat === 'tiff') {
    const UTIF = await import('utif2');
    const buffer = await file.arrayBuffer();
    const ifds = UTIF.decode(buffer);
    UTIF.decodeImage(buffer, ifds[0]);
    const rgba = UTIF.toRGBA8(ifds[0]);
    const w = ifds[0].width;
    const h = ifds[0].height;
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = w;
    tmpCanvas.height = h;
    const tmpCtx = tmpCanvas.getContext('2d');
    if (!tmpCtx) throw new Error('Canvas is not supported.');
    const imageData = tmpCtx.createImageData(w, h);
    imageData.data.set(new Uint8ClampedArray(rgba.buffer));
    tmpCtx.putImageData(imageData, 0, 0);

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas is not supported.');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(tmpCanvas, 0, 0);
    return canvas;
  }

  const url = URL.createObjectURL(blob);
  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error('Image load failed'));
      img.src = url;
    });
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas is not supported.');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    return canvas;
  } finally {
    URL.revokeObjectURL(url);
  }
}

export default function ImageToPdfConverter({
  sourceFormat,
  acceptMime,
}: ImageToPdfConverterProps) {
  const { imageConverter: t } = useDictionary();
  const [files, setFiles] = useState<PdfQueueFile[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const filesRef = useRef(files);
  filesRef.current = files;

  const sourceLabel = FORMAT_LABELS[sourceFormat];

  const handleAddFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    setGlobalError(null);
    const all = Array.from(fileList);
    const mimeList = acceptMime.split(',').map(m => m.trim());
    const extMap: Record<string, string[]> = {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp'],
      'image/bmp': ['.bmp'],
      'image/x-ms-bmp': ['.bmp'],
      'image/x-bmp': ['.bmp'],
      'image/svg+xml': ['.svg'],
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
      return allowedExts.some(ext => f.name.toLowerCase().endsWith(ext));
    });
    if (valid.length < all.length) {
      setGlobalError(t.errorWrongFormat.replace('{{format}}', sourceLabel));
    }
    if (valid.length > 0) {
      const entries: PdfQueueFile[] = valid.map(f => ({
        id: `pdf-${++fileIdCounter}`,
        file: f,
        status: 'idle' as const,
        previewUrl: null,
        errorMessage: null,
      }));
      setFiles(prev => [...prev, ...entries]);
    }
  };

  const removeFile = (id: string) => {
    setFiles(prev => {
      const file = prev.find(f => f.id === id);
      if (file?.previewUrl) URL.revokeObjectURL(file.previewUrl);
      return prev.filter(f => f.id !== id);
    });
  };

  const clearAll = () => {
    setFiles(prev => {
      prev.forEach(f => {
        if (f.previewUrl) URL.revokeObjectURL(f.previewUrl);
      });
      return [];
    });
  };

  const handleConvert = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!files.length) {
      setGlobalError(t.errorNoFiles.replace('{{format}}', sourceLabel));
      return;
    }
    setGlobalError(null);
    setIsConverting(true);

    try {
      const { default: jsPDF } = await import('jspdf');

      const pending = filesRef.current.filter(
        f => f.status === 'idle' || f.status === 'error',
      );

      for (const entry of pending) {
        if (!filesRef.current.some(f => f.id === entry.id)) continue;

        setFiles(prev =>
          prev.map(f =>
            f.id === entry.id
              ? { ...f, status: 'processing' as const, errorMessage: null }
              : f,
          ),
        );

        try {
          const canvas = await decodeToCanvas(entry.file, sourceFormat);
          const imgW = canvas.width;
          const imgH = canvas.height;

          const orientation = imgW > imgH ? 'landscape' : 'portrait';
          const pdf = new jsPDF({ orientation, unit: 'pt', format: 'a4' });
          const pageW = pdf.internal.pageSize.getWidth();
          const pageH = pdf.internal.pageSize.getHeight();

          const margin = 20;
          const maxW = pageW - margin * 2;
          const maxH = pageH - margin * 2;
          const scale = Math.min(maxW / imgW, maxH / imgH, 1);
          const drawW = imgW * scale;
          const drawH = imgH * scale;
          const offsetX = (pageW - drawW) / 2;
          const offsetY = (pageH - drawH) / 2;

          const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
          pdf.addImage(dataUrl, 'JPEG', offsetX, offsetY, drawW, drawH);

          const pdfBlob = pdf.output('blob');

          setFiles(prev =>
            prev.map(f =>
              f.id === entry.id
                ? {
                    ...f,
                    status: 'done' as const,
                    previewUrl: URL.createObjectURL(pdfBlob),
                  }
                : f,
            ),
          );
        } catch (err) {
          setFiles(prev =>
            prev.map(f =>
              f.id === entry.id
                ? {
                    ...f,
                    status: 'error' as const,
                    errorMessage:
                      err instanceof Error ? err.message : t.conversionFailed,
                  }
                : f,
            ),
          );
        }
      }
    } catch (err) {
      setGlobalError(
        err instanceof Error ? err.message : t.failedToLoadLibrary,
      );
    }

    setIsConverting(false);
  };

  const handleDownloadSingle = (id: string) => {
    const file = files.find(f => f.id === id);
    if (!file?.previewUrl) return;
    fetch(file.previewUrl)
      .then(r => r.blob())
      .then(blob => {
        const baseName = file.file.name.replace(/\.[^.]+$/, '');
        downloadBlob(blob, `${baseName}.pdf`);
        return undefined;
      })
      .catch(err => {
        console.error('Download failed:', err);
        if (file.previewUrl) {
          downloadFromUrl(
            file.previewUrl,
            `${file.file.name.replace(/\.[^.]+$/, '')}.pdf`,
          );
        }
      });
  };

  const handleDownloadAll = () => {
    const done = files.filter(f => f.status === 'done' && f.previewUrl);
    for (const file of done) {
      fetch(file.previewUrl!)
        .then(r => r.blob())
        .then(blob => {
          const baseName = file.file.name.replace(/\.[^.]+$/, '');
          downloadBlob(blob, `${baseName}.pdf`);
          return undefined;
        })
        .catch(err => {
          console.error('Download failed:', err);
          if (file.previewUrl) {
            downloadFromUrl(
              file.previewUrl,
              `${file.file.name.replace(/\.[^.]+$/, '')}.pdf`,
            );
          }
        });
    }
  };

  const total = files.length;
  const completed = files.filter(
    f => f.status === 'done' || f.status === 'error',
  ).length;
  const progress = total ? Math.round((completed / total) * 100) : 0;
  const doneCount = files.filter(f => f.status === 'done').length;
  const pendingCount = files.filter(
    f => f.status === 'idle' || f.status === 'error',
  ).length;

  return (
    <div className='overflow-hidden'>
      <div className='grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]'>
        <Card interactive={false} padding='lg' variant='outlined'>
          <form onSubmit={handleConvert} className='space-y-4'>
            <div>
              <h2 className='h6 mb-2'>{t.addFiles}</h2>
              <FileDropzone
                accept={acceptMime}
                multiple
                onFiles={handleAddFiles}
                dragLabel={
                  t.dragDrop?.replace('{{format}}', sourceLabel) ??
                  `Drop ${sourceLabel} files here`
                }
                clickLabel={t.clickToSelect}
                formatsLabel={
                  t.supported?.replace('{{format}}', sourceLabel) ??
                  `Supported: ${sourceLabel}`
                }
              />
              {globalError && (
                <ToolAlert variant='error' className='mt-2'>
                  {globalError}
                </ToolAlert>
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
                  disabled={doneCount === 0}
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
                {t.emptyState
                  ?.replace('{{source}}', sourceLabel)
                  .replace('{{target}}', 'PDF') ??
                  `Add ${sourceLabel} files to convert to PDF`}
              </p>
            </div>
          )}

          {files.length > 0 && (
            <div className='space-y-2 text-sm!'>
              {files.map(item => {
                const statusLabel = getConversionStatusLabel(item.status, {
                  idle: t.statusPending,
                  processing: t.statusProcessing,
                  done: t.statusDone,
                  error: t.statusError,
                });

                return (
                  <ToolFileRow
                    key={item.id}
                    name={item.file.name}
                    meta={
                      <>
                        {formatBytes(item.file.size)}
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
      <FormatSelector
        currentSource={sourceFormat}
        currentTarget='pdf'
        hasFiles={files.length > 0}
      />
    </div>
  );
}
