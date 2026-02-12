'use client';

import Button from '@/components/ui/buttons/Button';
import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import Badge from '@/components/ui/Badge';
import ToolFileDropzone from '@/components/ui/tools/ToolFileDropzone';
import ToolUploadContent from '@/components/ui/tools/ToolUploadContent';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { downloadFromUrl } from '@/lib/tools/download';
import { formatBytes } from '@/lib/tools/formatBytes';
import { useWebpQueue } from '@/components/sections/tools/JpgPngToWebp/useWebpQueue';
import { useWebpConversion } from '@/components/sections/tools/JpgPngToWebp/useWebpConversion';
import { useWebpDownloads } from '@/components/sections/tools/JpgPngToWebp/useWebpDownloads';
import { useWebpReportCopy } from '@/components/sections/tools/JpgPngToWebp/useWebpReportCopy';
import { useLocale, type Locale } from '@/lib/LocaleContext';

const ui = {
  pl: {
    fileLoadError: 'Nie udało się wczytać pliku.',
    imageLoadError: 'Nie udało się wczytać obrazu.',
    canvasNotSupported: 'Brak wsparcia dla canvas w przeglądarce.',
    webpGenerationError: 'Nie udało się wygenerować pliku WebP.',
    addJpgPngOnly: 'Dodaj pliki JPG lub PNG - inne formaty są pomijane.',
    addAtLeastOne: 'Dodaj przynajmniej jeden plik JPG lub PNG.',
    allProcessed: 'Wszystkie pliki w kolejce są już przetworzone.',
    conversionError: 'Wystąpił nieoczekiwany błąd podczas konwersji.',
    clipboardNotSupported: 'Kopiowanie do schowka nie jest wspierane w tej przeglądarce.',
    noCompletedConversions: 'Brak zakończonych konwersji do podsumowania.',
    reportCopied: 'Raport skopiowany do schowka.',
    reportCopyError: 'Nie udało się skopiować raportu do schowka.',
    addFiles: 'Dodaj pliki',
    dragDropImages: 'Przeciągnij i upuść obrazy tutaj',
    clickToSelect: 'lub kliknij, aby wybrać pliki z dysku',
    supportedFormats: 'Obsługiwane: JPG, PNG',
    setQuality: 'Ustaw jakość WebP',
    qualityHelper:
      'Niższa wartość = mniejsza waga plików, wyższa = lepsza jakość. 80% to dobry kompromis dla większości stron. Narzędzie automatycznie obniży jakość, jeśli wynikowy plik byłby większy od oryginału.',
    autoDownloadAll: 'Automatycznie pobierz po konwersji',
    autoDownloadModeFiles: 'Pojedyncze pliki',
    autoDownloadModeZip: 'Jedna paczka ZIP',
    includeCsvReport: 'Dołącz raport CSV do ZIP',
    convertAndDownload: 'Konwertuj i pobierz',
    inQueue: 'W kolejce:',
    files: 'plików',
    convert: 'Konwertuj',
    converting: 'Konwertuję…',
    downloadAll: 'Pobierz wszystkie',
    downloadZip: 'Pobierz wszystko (.zip)',
    zipping: 'Przygotowuję paczkę ZIP…',
    zipGenerationError: 'Nie udało się przygotować paczki ZIP.',
    clearAll: 'Wyczyść wszystko',
    copySummary: 'Skopiuj podsumowanie',
    conversionReport: 'Raport konwersji JPG/PNG → WebP:',
    fileCount: 'Liczba plików:',
    totalSizeBefore: 'Łączny rozmiar przed:',
    totalSizeAfter: 'Łączny rozmiar po:',
    savedWeight: 'Zaoszczędzona waga:',
    weightDifference: 'Różnica w wadze:',
    less: 'mniej',
    more: 'więcej',
    previewAndFiles: 'Podgląd i pliki',
    totalSize: 'Łączny rozmiar:',
    totalSaved: 'Zaoszczędzono:',
    totalIncreased: 'Zwiększono:',
    addFilesToStart: 'Dodaj pliki po lewej stronie, aby rozpocząć konwersję JPG/PNG na WebP.',
    demoSummary: 'Łącznie zaoszczędzono:',
    status: {
      pending: 'Oczekuje',
      processing: 'Przetwarzanie…',
      done: 'Gotowe',
      error: 'Błąd',
    },
    actions: {
      download: 'Pobierz',
      preview: 'Podgląd',
      remove: 'Usuń',
      reconvert: 'Konwertuj ponownie',
    },
    queueListAriaLabel: 'Lista plików w kolejce',
    queueFilesHeading: 'Pliki w kolejce',
    downloaded: 'Pobrano',
    readyCount: 'Gotowe',
    pendingCount: 'W trakcie / oczekujące',
    sizeBefore: 'Wielkość przed:',
    sizeAfter: 'Wielkość po:',
    biggerThanOriginal: '(większy niż oryginał - spróbuj niższej jakości)',
    usedQuality: 'Użyta jakość WebP:',
    totalInputSize: 'Łączny rozmiar wejściowy:',
    totalOutputSize: 'Łączny rozmiar po konwersji:',
    demoFiles: [
      { name: 'zdjecie-produktu.jpg', before: '2.4 MB', after: '890 KB', diff: '63%' },
      { name: 'logo-firmy.png', before: '180 KB', after: '45 KB', diff: '75%' },
      { name: 'baner-strony.jpg', before: '500 KB', after: '185 KB', diff: '63%' },
    ],
  },
  en: {
    fileLoadError: 'Failed to load the file.',
    imageLoadError: 'Failed to load the image.',
    canvasNotSupported: 'Canvas is not supported in this browser.',
    webpGenerationError: 'Failed to generate the WebP file.',
    addJpgPngOnly: 'Add JPG or PNG files — other formats are skipped.',
    addAtLeastOne: 'Add at least one JPG or PNG file.',
    allProcessed: 'All files in the queue have already been processed.',
    conversionError: 'An unexpected error occurred during conversion.',
    clipboardNotSupported: 'Clipboard is not supported in this browser.',
    noCompletedConversions: 'No completed conversions to summarize.',
    reportCopied: 'Report copied to clipboard.',
    reportCopyError: 'Failed to copy the report to clipboard.',
    addFiles: 'Add files',
    dragDropImages: 'Drag and drop images here',
    clickToSelect: 'or click to select files from your device',
    supportedFormats: 'Supported: JPG, PNG',
    setQuality: 'Set WebP quality',
    qualityHelper:
      'Lower value = smaller file size, higher = better quality. 80% is a good compromise for most websites. The tool will automatically lower quality if the output file would be larger than the original.',
    autoDownloadAll: 'Auto-download after conversion',
    autoDownloadModeFiles: 'Individual files',
    autoDownloadModeZip: 'Single ZIP archive',
    includeCsvReport: 'Include CSV report in ZIP',
    convertAndDownload: 'Convert and download',
    inQueue: 'In queue:',
    files: 'files',
    convert: 'Convert',
    converting: 'Converting…',
    downloadAll: 'Download all',
    downloadZip: 'Download all (.zip)',
    zipping: 'Preparing ZIP archive…',
    zipGenerationError: 'Failed to prepare the ZIP archive.',
    clearAll: 'Clear all',
    copySummary: 'Copy summary',
    conversionReport: 'JPG/PNG → WebP conversion report:',
    fileCount: 'File count:',
    totalSizeBefore: 'Total size before:',
    totalSizeAfter: 'Total size after:',
    savedWeight: 'Saved weight:',
    weightDifference: 'Weight difference:',
    less: 'less',
    more: 'more',
    previewAndFiles: 'Preview and files',
    totalSize: 'Total size:',
    totalSaved: 'Saved:',
    totalIncreased: 'Increased:',
    addFilesToStart: 'Add files on the left to start converting JPG/PNG to WebP.',
    demoSummary: 'Total saved:',
    status: {
      pending: 'Pending',
      processing: 'Processing…',
      done: 'Done',
      error: 'Error',
    },
    actions: {
      download: 'Download',
      preview: 'Preview',
      remove: 'Remove',
      reconvert: 'Reconvert',
    },
    queueListAriaLabel: 'File queue list',
    queueFilesHeading: 'Files in queue',
    downloaded: 'Downloaded',
    readyCount: 'Ready',
    pendingCount: 'In progress / pending',
    sizeBefore: 'Size before:',
    sizeAfter: 'Size after:',
    biggerThanOriginal: '(larger than original — try lower quality)',
    usedQuality: 'WebP quality used:',
    totalInputSize: 'Total input size:',
    totalOutputSize: 'Total output size:',
    demoFiles: [
      { name: 'product-photo.jpg', before: '2.4 MB', after: '890 KB', diff: '63%' },
      { name: 'company-logo.png', before: '180 KB', after: '45 KB', diff: '75%' },
      { name: 'website-banner.jpg', before: '500 KB', after: '185 KB', diff: '63%' },
    ],
  },
} as const satisfies Record<Locale, unknown>;

export default function JpgPngToWebp() {
  const locale = useLocale();
  const t = ui[locale];

  const { copy } = useCopyToClipboard();
  const [quality, setQuality] = useState(80); // domyślna jakość 80%
  const [autoDownload, setAutoDownload] = useState(false);
  const [autoDownloadMode, setAutoDownloadMode] = useState<'files' | 'zip'>('files');
  const [includeCsvReport, setIncludeCsvReport] = useState(false);
  const [autoZipRequestId, setAutoZipRequestId] = useState(0);
  const handledAutoZipRequestId = useRef(0);
  const { files, setFiles, globalError, setGlobalError, addFiles, removeFile, reconvertFile, clearAll, previewFile } = useWebpQueue({ addJpgPngOnlyError: t.addJpgPngOnly });

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

  const { handleDownloadAll, handleDownloadZip, handleDownloadSingle, isZipping, zipError, setZipError } = useWebpDownloads({
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

  function handleSubmitWithAutoZip(e: FormEvent) {
    const toProcess = files.filter((f) => f.status === 'pending' || f.status === 'error');
    if (autoDownload && autoDownloadMode === 'zip' && toProcess.length) {
      setAutoZipRequestId((prev) => prev + 1);
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
  }, [autoDownload, autoDownloadMode, autoZipRequestId, handleDownloadZip, includeCsvReport, isConverting]);

  const total = files.length;
  const completed = files.filter((f) => f.status === 'done' || f.status === 'error').length;

  const progress = total ? Math.round((completed / total) * 100) : 0;
  const visualProgress = progress === 0 ? 0 : progress === 100 ? 100 : 5 + progress * 0.9;

  const totalInput = useMemo(() => files.reduce((sum, f) => sum + f.inputSize, 0), [files]);
  const totalOutput = useMemo(() => files.reduce((sum, f) => sum + (f.outputSize ?? 0), 0), [files]);
  const totalSaved = totalInput - totalOutput;

  const anyDone = files.some((f) => f.status === 'done');

  const readyCount = files.filter((f) => f.status === 'done').length;
  const pendingCount = files.filter((f) => f.status === 'pending' || f.status === 'processing').length;

  const totalSavedPercent = totalInput > 0 ? Math.round((Math.abs(totalSaved) / totalInput) * 100) : 0;

  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <ToolSection className="space-y-4">
        <form onSubmit={handleSubmitWithAutoZip} className="space-y-4">
          <div>
            <h2 className="h6 mb-2">{t.addFiles}</h2>
            <ToolFileDropzone accept="image/jpeg,image/png" multiple onFiles={addFiles} className="tool-upload-area">
              <ToolUploadContent dragLabel={t.dragDropImages} clickLabel={t.clickToSelect} formatsLabel={t.supportedFormats} />
            </ToolFileDropzone>
            {globalError && (
              <ToolAlert variant="error" className="mt-2">
                {globalError}
              </ToolAlert>
            )}
          </div>

          <div>
            <h3 className="h6 mt-8 mb-2">{t.setQuality}</h3>
            <div className="flex items-center">
              <input type="range" min={60} max={95} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="tool-range" />
              <span className="tool-value w-16 text-right">{quality}%</span>
            </div>
            <span className="tool-meta mt-3">{t.qualityHelper}</span>

            <div className="mt-3 flex items-center">
              <input id="auto-download" type="checkbox" checked={autoDownload} onChange={(e) => setAutoDownload(e.target.checked)} className="tool-checkbox" />
              <label htmlFor="auto-download" className="cursor-pointer pl-2">
                <span className="tool-value">{t.autoDownloadAll}</span>
              </label>
            </div>

            {autoDownload && (
              <div className="mt-3 ml-6 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAutoDownloadMode('files')}
                  disabled={isConverting}
                  className={`tool-button ${autoDownloadMode === 'files' ? 'tool-button-active' : 'tool-button-inactive'} ${isConverting ? 'cursor-not-allowed opacity-40' : ''}`}
                >
                  {t.autoDownloadModeFiles}
                </button>
                <button
                  type="button"
                  onClick={() => setAutoDownloadMode('zip')}
                  disabled={isConverting}
                  className={`tool-button ${autoDownloadMode === 'zip' ? 'tool-button-active' : 'tool-button-inactive'} ${isConverting ? 'cursor-not-allowed opacity-40' : ''}`}
                >
                  {t.autoDownloadModeZip}
                </button>
              </div>
            )}
          </div>

          <div>
            <h3 className="h6 mt-8 mb-2">{t.convertAndDownload}</h3>
            {total > 0 && (
              <div className="mb-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="tool-meta">
                    {t.inQueue} <strong>{total}</strong> {t.files}
                  </span>
                  {total > 0 && (
                    <span className="tool-meta">
                      {locale === 'en' ? 'Completed' : 'Zakończone'}: {completed} / {total}
                    </span>
                  )}
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className="bg-primary h-full rounded-full transition-all"
                    style={{ width: `${visualProgress}%` }}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={progress}
                  />
                </div>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-3">
              <Button variant="accent" disabled={isConverting || !files.length} className="disabled:opacity-60" type="submit" size="small">
                {isConverting ? t.converting : t.convert}
              </Button>
              <Button onClick={handleDownloadAll} disabled={!anyDone} className="disabled:opacity-40" size="small">
                {t.downloadAll}
              </Button>
              <Button onClick={() => void handleDownloadZip({ includeCsvReport })} disabled={!anyDone || isConverting || isZipping} className="disabled:opacity-40" size="small">
                {t.downloadZip}
              </Button>
              <Button onClick={handleClearAll} disabled={!files.length || isConverting} className="disabled:opacity-40" size="small">
                {t.clearAll}
              </Button>
            </div>

            <div className="mt-3 flex items-center">
              <input id="webp-include-csv" type="checkbox" checked={includeCsvReport} onChange={(e) => setIncludeCsvReport(e.target.checked)} disabled={isZipping} className="tool-checkbox" />
              <label htmlFor="webp-include-csv" className="cursor-pointer pl-2">
                <span className="tool-value">{t.includeCsvReport}</span>
              </label>
            </div>

            {zipError && (
              <ToolAlert variant="error" className="mt-2">
                {zipError}
              </ToolAlert>
            )}
            {isZipping && (
              <ToolAlert variant="info" className="mt-2">
                {t.zipping}
              </ToolAlert>
            )}

            {totalInput > 0 && (
              <div className="mt-6">
                <p className="tool-meta">
                  {t.totalInputSize} <strong>{formatBytes(totalInput)}</strong>
                </p>
                {totalOutput > 0 && (
                  <>
                    <p className="tool-meta">
                      {t.totalOutputSize} <strong>{formatBytes(totalOutput)}</strong>
                    </p>
                    <p className="tool-meta">
                      {totalSaved >= 0 ? (
                        <>
                          {t.totalSaved}:{' '}
                          <strong>
                            {formatBytes(totalSaved)} (~{totalSavedPercent}% {t.less})
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

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Button variant="normal" size="small" onClick={handleCopySummary} disabled={!anyDone} className="border-0 shadow-none hover:translate-y-0 hover:shadow-none disabled:opacity-40">
                {t.copySummary}
              </Button>
              {copyInfo && <span className="tool-meta">{copyInfo}</span>}
            </div>
          </div>
        </form>
      </ToolSection>

      <ToolSection aria-label={t.queueListAriaLabel} className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <h2 className="h6">{t.queueFilesHeading}</h2>
          {files.length > 0 && (
            <p className="tool-meta">
              {t.readyCount}: {readyCount} · {t.pendingCount}: {pendingCount}
            </p>
          )}
        </div>

        {files.length === 0 && (
          <>
            <div className="space-y-2 text-sm!">
              {t.demoFiles.map((f) => (
                <div key={f.name} className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="tool-value text-dark truncate">{f.name}</p>
                    <p className="tool-meta">
                      {t.sizeBefore} {f.before} · {t.sizeAfter} {f.after} ({f.diff} {t.less})
                    </p>
                  </div>
                  <Badge variant="success" size="md">
                    {t.status.done}
                  </Badge>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm!">
              <p className="tool-meta">
                {t.demoSummary} <strong>1.96 MB (~64% {t.less})</strong>
              </p>
            </div>
          </>
        )}

        {files.length > 0 && (
          <div className="space-y-2 text-sm!">
            {files.map((item) => {
              const statusLabel = item.status === 'pending' ? t.status.pending : item.status === 'processing' ? t.status.processing : item.status === 'done' ? t.status.done : t.status.error;

              const isBigger = item.outputSize != null && item.outputSize > item.inputSize;

              const diffPercent = item.outputSize != null && item.inputSize > 0 ? Math.round(((item.inputSize - item.outputSize) / item.inputSize) * 100) : null;

              return (
                <div key={item.id} className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 md:flex-row md:items-center md:justify-between">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <button
                      type="button"
                      onClick={() => previewFile(item.id)}
                      className="hidden h-12 w-12 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 md:block"
                      title={t.actions.preview}
                    >
                      {item.previewUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={item.previewUrl} alt={item.file.name} className="h-full w-full object-cover" />
                      )}
                    </button>

                    <div className="min-w-0 flex-1">
                      <div title={item.file.name}>
                        <p className="tool-value text-dark truncate">{item.file.name}</p>
                      </div>
                      <p className="tool-meta">
                        {t.sizeBefore} {formatBytes(item.inputSize)}
                        {item.outputSize != null && (
                          <>
                            {' · '}
                            {t.sizeAfter} {formatBytes(item.outputSize)}{' '}
                            {diffPercent !== null && (
                              <>
                                {' ('}
                                {Math.abs(diffPercent)}% {diffPercent >= 0 ? t.less : t.more}
                                {')'}
                              </>
                            )}
                            {isBigger && <span className="text-warning-text ml-1 text-xs!">{t.biggerThanOriginal}</span>}
                          </>
                        )}
                      </p>
                      {item.usedQuality && (
                        <p className="tool-meta">
                          {t.usedQuality} {item.usedQuality}%
                        </p>
                      )}
                      {item.error && (
                        <ToolAlert variant="error" className="mt-2">
                          {item.error}
                        </ToolAlert>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Badge variant={item.status === 'done' ? 'success' : item.status === 'error' ? 'error' : 'neutral'} size="md">
                      {statusLabel}
                    </Badge>

                    {item.status === 'done' && item.downloadUrl && (
                      <Badge as="button" type="button" onClick={() => handleDownloadSingle(item.id)} variant="default" size="md" className="cursor-pointer border-black/15">
                        {item.downloaded ? t.downloaded : t.actions.download}
                      </Badge>
                    )}

                    {item.status === 'done' && (
                      <Badge as="button" type="button" onClick={() => reconvertFile(item.id)} variant="default" size="md" className="cursor-pointer border-black/10">
                        {t.actions.reconvert}
                      </Badge>
                    )}

                    <Badge as="button" type="button" onClick={() => removeFile(item.id)} variant="default" size="sm" className="text-light hover:text-dark cursor-pointer">
                      {t.actions.remove}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </ToolSection>
    </div>
  );
}
