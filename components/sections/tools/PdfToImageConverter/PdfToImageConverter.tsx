'use client';

import { useCallback, useRef, useState, type FormEvent } from 'react';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/buttons/Button';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import ToolFileDropzone from '@/components/ui/tools/ToolFileDropzone';
import ToolFileRow from '@/components/ui/tools/ToolFileRow';
import ToolProgressBar from '@/components/ui/tools/ToolProgressBar';
import ToolRangeInput from '@/components/ui/tools/ToolRangeInput';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolUploadContent from '@/components/ui/tools/ToolUploadContent';
import { useDictionary } from '@/lib/LocaleContext';
import { downloadBlob } from '@/utils/download';
import { formatBytes } from '@/utils/formatBytes';

import { FormatSelector } from '@/components/sections/tools/FormatPicker';
import { FORMAT_EXT, FORMAT_LABELS, FORMAT_MIME, type PdfPageFile, type PdfToImageConverterProps } from './types';

let fileIdCounter = 0;

export default function PdfToImageConverter({ targetFormat }: PdfToImageConverterProps) {
  const { imageConverter: t } = useDictionary();
  const [pages, setPages] = useState<PdfPageFile[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [quality, setQuality] = useState(90);
  const qualityRef = useRef(0.9);
  const pagesRef = useRef(pages);
  pagesRef.current = pages;

  const targetLabel = FORMAT_LABELS[targetFormat];
  const ext = FORMAT_EXT[targetFormat];
  const showQuality = targetFormat === 'jpg' || targetFormat === 'webp';

  const handleQualityChange = useCallback((v: number) => {
    setQuality(v);
    qualityRef.current = v / 100;
  }, []);

  const handleAddFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;
      setGlobalError(null);

      const pdfFiles = Array.from(fileList).filter((f) => {
        if (f.type === 'application/pdf') return true;
        return f.name.toLowerCase().endsWith('.pdf');
      });

      if (pdfFiles.length === 0) {
        setGlobalError(t.errorWrongFormat.replace('{{format}}', 'PDF'));
        return;
      }

      // Load PDF pages asynchronously
      void (async () => {
        try {
          const pdfjsLib = await import('pdfjs-dist');
          pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

          for (const pdfFile of pdfFiles) {
            const buffer = await pdfFile.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
            const numPages = pdf.numPages;
            const baseName = pdfFile.name.replace(/\.pdf$/i, '');

            const newPages: PdfPageFile[] = [];
            for (let i = 1; i <= numPages; i++) {
              newPages.push({
                id: `pdi-${++fileIdCounter}`,
                file: pdfFile,
                pageIndex: i,
                pageLabel: `${baseName} - ${t.pageLabel} ${i}/${numPages}`,
                status: 'idle',
                outputBlob: null,
                outputUrl: null,
                errorMessage: null,
              });
            }
            setPages((prev) => [...prev, ...newPages]);
          }
        } catch (err) {
          setGlobalError(err instanceof Error ? err.message : t.failedToLoadPdf);
        }
      })();
    },
    [t],
  );

  const removeFile = useCallback((id: string) => {
    setPages((prev) => {
      const page = prev.find((p) => p.id === id);
      if (page?.outputUrl) URL.revokeObjectURL(page.outputUrl);
      return prev.filter((p) => p.id !== id);
    });
  }, []);

  const clearAll = useCallback(() => {
    setPages((prev) => {
      prev.forEach((p) => {
        if (p.outputUrl) URL.revokeObjectURL(p.outputUrl);
      });
      return [];
    });
  }, []);

  const handleConvert = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (!pages.length) {
        setGlobalError(t.errorNoFiles.replace('{{format}}', 'PDF'));
        return;
      }
      setGlobalError(null);
      setIsConverting(true);

      try {
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

        const mime = FORMAT_MIME[targetFormat];
        const pending = pagesRef.current.filter((p) => p.status === 'idle' || p.status === 'error');

        for (const entry of pending) {
          if (!pagesRef.current.some((p) => p.id === entry.id)) continue;

          setPages((prev) => prev.map((p) => (p.id === entry.id ? { ...p, status: 'processing' as const, errorMessage: null } : p)));

          try {
            const buffer = await entry.file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
            const page = await pdf.getPage(entry.pageIndex);

            const scale = 2; // 2x for good quality
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement('canvas');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) throw new Error(t.canvasNotSupported);

            await page.render({ canvasContext: ctx, viewport, canvas } as never).promise;

            const blob = await new Promise<Blob>((resolve, reject) => {
              canvas.toBlob((b) => (b ? resolve(b) : reject(new Error(t.canvasExportFailed))), mime, targetFormat === 'png' ? undefined : qualityRef.current);
            });

            const url = URL.createObjectURL(blob);

            setPages((prev) => prev.map((p) => (p.id === entry.id ? { ...p, status: 'done' as const, outputBlob: blob, outputUrl: url } : p)));
          } catch (err) {
            setPages((prev) => prev.map((p) => (p.id === entry.id ? { ...p, status: 'error' as const, errorMessage: err instanceof Error ? err.message : t.conversionFailed } : p)));
          }
        }
      } catch (err) {
        setGlobalError(err instanceof Error ? err.message : t.failedToLoadLibrary);
      }

      setIsConverting(false);
    },
    [pages, targetFormat, t],
  );

  const handleDownloadSingle = useCallback(
    (id: string) => {
      const page = pages.find((p) => p.id === id);
      if (!page?.outputBlob) return;
      const baseName = page.file.name.replace(/\.pdf$/i, '');
      downloadBlob(page.outputBlob, `${baseName}-page${page.pageIndex}${ext}`);
    },
    [pages, ext],
  );

  const handleDownloadAll = useCallback(() => {
    const done = pages.filter((p) => p.status === 'done' && p.outputBlob);
    for (const page of done) {
      const baseName = page.file.name.replace(/\.pdf$/i, '');
      downloadBlob(page.outputBlob!, `${baseName}-page${page.pageIndex}${ext}`);
    }
  }, [pages, ext]);

  const total = pages.length;
  const completed = pages.filter((p) => p.status === 'done' || p.status === 'error').length;
  const progress = total ? Math.round((completed / total) * 100) : 0;
  const doneCount = pages.filter((p) => p.status === 'done').length;
  const pendingCount = pages.filter((p) => p.status === 'idle' || p.status === 'error').length;

  return (
    <div className="overflow-hidden">
      <FormatSelector currentSource="pdf" currentTarget={targetFormat} hasFiles={pages.length > 0} />

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <ToolSection className="space-y-4">
          <form onSubmit={handleConvert} className="space-y-4">
            <div>
              <h2 className="h6 mb-2">{t.addFiles}</h2>
              <ToolFileDropzone accept="application/pdf,.pdf" multiple onFiles={handleAddFiles} className="tool-upload-area">
                <ToolUploadContent dragLabel={t.dragDrop.replace('{{format}}', 'PDF')} clickLabel={t.clickToSelect} formatsLabel={t.supported.replace('{{format}}', 'PDF')} />
              </ToolFileDropzone>
              {globalError && (
                <ToolAlert variant="error" className="mt-2">
                  {globalError}
                </ToolAlert>
              )}
            </div>

            {showQuality && (
              <div>
                <h3 className="h6 mt-8 mb-2">{t.setQuality.replace('{{format}}', targetLabel)}</h3>
                <ToolRangeInput value={quality} min={60} max={95} onChange={handleQualityChange} suffix="%" helper={t.qualityHelper} />
              </div>
            )}

            <div>
              <h3 className="h6 mt-8 mb-2">{t.convertAndDownload}</h3>
              {total > 0 && (
                <div className="mb-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="tool-meta">
                      {t.inQueue} <strong>{total}</strong> {t.files}
                    </span>
                    <span className="tool-meta">
                      {t.completed}: {completed} / {total}
                    </span>
                  </div>
                  <ToolProgressBar value={progress} ariaLabel={`${completed} / ${total}`} />
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-3">
                <Button variant="accent" disabled={isConverting || !pages.length} className="disabled:opacity-60" type="submit" size="small">
                  {isConverting ? t.converting : t.convert}
                </Button>
                <Button onClick={handleDownloadAll} disabled={doneCount === 0} className="disabled:opacity-40" size="small">
                  {t.downloadAll}
                </Button>
                <Button onClick={clearAll} disabled={!pages.length || isConverting} className="disabled:opacity-40" size="small">
                  {t.clearAll}
                </Button>
              </div>
            </div>
          </form>
        </ToolSection>

        <ToolSection aria-label={t.queueAriaLabel} className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h2 className="h6">{t.queueHeading}</h2>
            {pages.length > 0 && (
              <p className="tool-meta">
                {t.readyCount}: {doneCount} · {t.pendingCount}: {pendingCount}
              </p>
            )}
          </div>

          {pages.length === 0 && (
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-6 text-center">
              <p className="tool-meta">{t.emptyState.replace('{{source}}', 'PDF').replace('{{target}}', targetLabel)}</p>
            </div>
          )}

          {pages.length > 0 && (
            <div className="space-y-2 text-sm!">
              {pages.map((item) => {
                const statusLabel = item.status === 'idle' ? t.statusPending : item.status === 'processing' ? t.statusProcessing : item.status === 'done' ? t.statusDone : t.statusError;

                return (
                  <ToolFileRow
                    key={item.id}
                    name={item.pageLabel}
                    meta={
                      <>
                        {item.outputBlob ? formatBytes(item.outputBlob.size) : ''}
                        {item.errorMessage && <span className="text-error-text ml-1">{item.errorMessage}</span>}
                      </>
                    }
                    actions={
                      <div className="flex items-center gap-1">
                        <Badge variant={item.status === 'done' ? 'success' : item.status === 'error' ? 'error' : 'neutral'} size="md">
                          {statusLabel}
                        </Badge>
                        {item.status === 'done' && (
                          <Badge as="button" type="button" onClick={() => handleDownloadSingle(item.id)} variant="default" size="md" className="cursor-pointer border-black/15">
                            {t.download}
                          </Badge>
                        )}
                        {item.status !== 'processing' && (
                          <Badge as="button" type="button" onClick={() => removeFile(item.id)} variant="default" size="sm" className="text-light hover:text-dark cursor-pointer">
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
        </ToolSection>
      </div>
    </div>
  );
}
