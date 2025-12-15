'use client';

import Button from '@/components/ui/buttons/Button';
import { useMemo, useState } from 'react';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import Badge from '@/components/ui/Badge';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { downloadFromUrl } from '@/lib/tools/download';
import { formatBytes } from '@/lib/tools/formatBytes';
import { useWebpQueue } from '@/components/sections/tools/JpgPngToWebp/useWebpQueue';
import { useWebpConversion } from '@/components/sections/tools/JpgPngToWebp/useWebpConversion';
import { useWebpDownloads } from '@/components/sections/tools/JpgPngToWebp/useWebpDownloads';
import { useWebpReportCopy } from '@/components/sections/tools/JpgPngToWebp/useWebpReportCopy';

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
    autoDownloadAll: 'Automatycznie pobierz wszystkie pliki po konwersji',
    convertAndDownload: 'Konwertuj i pobierz',
    inQueue: 'W kolejce:',
    files: 'plików',
    convert: 'Konwertuj',
    converting: 'Konwertuję…',
    downloadAll: 'Pobierz wszystkie',
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
  },
} as const;

// helper do faktycznego pobierania (jedno źródło prawdy)
function triggerDownloadFromUrl(url: string, filename: string) {
  downloadFromUrl(url, filename);
}

export default function JpgPngToWebp() {
  const t = ui.pl;

  const { copy } = useCopyToClipboard();
  const [quality, setQuality] = useState(80); // domyślna jakość 80%
  const [autoDownload, setAutoDownload] = useState(false);
  const {
    files,
    setFiles,
    globalError,
    setGlobalError,
    handleFileChange,
    handleDrop,
    handleDragOver,
    removeFile,
    reconvertFile,
    clearAll,
    previewFile,
  } = useWebpQueue({ addJpgPngOnlyError: t.addJpgPngOnly });

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

  const { handleDownloadAll, handleDownloadSingle } = useWebpDownloads({
    files,
    setFiles,
    triggerDownloadFromUrl,
  });

  function handleClearAll() {
    clearAll();
    setCopyInfo(null);
  }

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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <p className="mb-2 text-sm text-dark font-semibold uppercase">{t.addFiles}</p>
            <label
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 text-center hover:border-neutral-500 hover:bg-neutral-100"
            >
              <span className="mb-1 text-sm text-dark font-medium">{t.dragDropImages}</span>
              <span className="mb-2 text-xs text-light">{t.clickToSelect}</span>
              <Badge variant="default" size="sm" className="bg-white shadow-sm">{t.supportedFormats}</Badge>
              <input type="file" accept="image/jpeg,image/png" multiple onChange={handleFileChange} className="hidden" />
            </label>
            {globalError && (
              <ToolAlert variant="error" className="mt-2">
                {globalError}
              </ToolAlert>
            )}
          </div>

          <div>
            <p className="mt-8 mb-2 text-sm text-dark font-semibold uppercase">{t.setQuality}</p>
            <div className="flex items-center">
              <input type="range" min={60} max={95} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="p-0!" />
              <span className="w-16 text-right text-sm text-mid">{quality}%</span>
            </div>
            <span className="mt-3 text-sm text-light">
              {t.qualityHelper}
            </span>

            <div className="mt-3 flex items-center">
              <input id="auto-download" type="checkbox" checked={autoDownload} onChange={(e) => setAutoDownload(e.target.checked)} className="h-4 w-4! rounded border-neutral-300 p-0!" />
              <label htmlFor="auto-download" className="pl-2 cursor-pointer">
                <span className="text-sm text-mid">{t.autoDownloadAll}</span>
              </label>
            </div>
          </div>

          <div>
            <p className="mt-8 mb-2 text-sm text-dark font-semibold uppercase">{t.convertAndDownload}</p>
            {total > 0 && (
              <div className="mb-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-light">
                    {t.inQueue} <strong>{total}</strong> {t.files}
                  </span>
                  {total > 0 && (
                    <span className="text-sm text-light">Zakończone: {completed} / {total}</span>
                  )}
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className="h-full rounded-full bg-slate-600 transition-all"
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
              <Button onClick={handleClearAll} disabled={!files.length || isConverting} className="disabled:opacity-40" size="small">
                {t.clearAll}
              </Button>
            </div>

            {totalInput > 0 && (
              <div className="mt-6">
                <p className="text-sm text-light">
                  {t.totalInputSize} <strong>{formatBytes(totalInput)}</strong>
                </p>
                {totalOutput > 0 && (
                  <>
                    <p className="text-sm text-light">
                      {t.totalOutputSize} <strong>{formatBytes(totalOutput)}</strong>
                    </p>
                    <p className="text-sm text-light">
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
              <Button variant="normal" size="small" onClick={handleCopySummary} disabled={!anyDone} className="border-0 shadow-none hover:shadow-none hover:translate-y-0 disabled:opacity-40">
                {t.copySummary}
              </Button>
              {copyInfo && <span className="text-xs text-light">{copyInfo}</span>}
            </div>
          </div>
        </form>
      </ToolSection>

      <ToolSection aria-label={t.queueListAriaLabel} className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <h2 className="h6">{t.queueFilesHeading}</h2>
          {files.length > 0 && (
            <p className="text-sm text-light">
              {t.readyCount}: {readyCount} · {t.pendingCount}: {pendingCount}
            </p>
          )}
        </div>

        {files.length === 0 && <p className="text-xs text-light">{t.addFilesToStart}</p>}

        {files.length > 0 && (
          <div className="space-y-2 text-sm">
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
                        <p className="text-sm text-dark truncate font-medium">{item.file.name}</p>
                      </div>
                      <p className="text-xs! text-light">
                        {t.sizeBefore} {formatBytes(item.inputSize)}
                        {item.outputSize != null && (
                          <>
                            {' · '}{t.sizeAfter} {formatBytes(item.outputSize)}{' '}
                            {diffPercent !== null && (
                              <>
                                {' ('}
                                {Math.abs(diffPercent)}% {diffPercent >= 0 ? t.less : t.more}
                                {')'}
                              </>
                            )}
                            {isBigger && <span className="ml-1 text-xs text-amber-700">{t.biggerThanOriginal}</span>}
                          </>
                        )}
                      </p>
                      {item.usedQuality && <p className="text-[11px] text-light">{t.usedQuality} {item.usedQuality}%</p>}
                      {item.error && <ToolAlert variant="error" className="mt-2">{item.error}</ToolAlert>}
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

                    <Badge as="button" type="button" onClick={() => removeFile(item.id)} variant="default" size="sm" className="cursor-pointer text-light hover:text-dark">
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


