'use client';

import Button from '@/components/ui/Button';
import { DragEvent, FormEvent, useMemo, useState } from 'react';

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
    qualityHelper: 'Niższa wartość = mniejsza waga plików, wyższa = lepsza jakość. 80% to dobry kompromis dla większości stron. Narzędzie automatycznie obniży jakość, jeśli wynikowy plik byłby większy od oryginału.',
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
  },
} as const;

type FileStatus = 'pending' | 'processing' | 'done' | 'error';

interface FileItem {
  id: string;
  file: File;
  inputSize: number;
  outputSize?: number;
  ratio?: number;
  status: FileStatus;
  error?: string;
  downloadUrl?: string;
  previewUrl?: string;
  downloaded?: boolean;
  usedQuality?: number;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(value > 10 ? 1 : 2)} ${units[i]}`;
}

function convertToWebp(file: File, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => {
      reject(new Error(ui.pl.fileLoadError));
    };

    reader.onload = () => {
      const img = new Image();

      img.onerror = () => {
        reject(new Error(ui.pl.imageLoadError));
      };

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error(ui.pl.canvasNotSupported));
          return;
        }

        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error(ui.pl.webpGenerationError));
              return;
            }
            resolve(blob);
          },
          'image/webp',
          quality / 100,
        );
      };

      img.src = reader.result as string;
    };

    reader.readAsDataURL(file);
  });
}

async function convertToWebpSmart(item: FileItem, initialQuality: number, minQuality = 60, step = 5): Promise<{ blob: Blob; usedQuality: number }> {
  let q = initialQuality;
  const originalSize = item.inputSize;
  let lastBlob: Blob | null = null;
  let usedQuality = initialQuality;

  while (q >= minQuality) {
    const blob = await convertToWebp(item.file, q);
    lastBlob = blob;
    usedQuality = q;

    // jeśli plik jest mniejszy lub równy oryginałowi - przyjmujemy tę jakość
    if (blob.size <= originalSize || q === minQuality) {
      break;
    }

    // inaczej schodzimy z jakością i próbujemy dalej
    q -= step;
  }

  if (!lastBlob) {
    throw new Error(ui.pl.webpGenerationError);
  }

  return { blob: lastBlob, usedQuality };
}

// helper do faktycznego pobierania (jedno źródło prawdy)
function triggerDownloadFromUrl(url: string, filename: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function JpgPngToWebp() {
  const t = ui.pl;
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [quality, setQuality] = useState(80); // domyślna jakość 80%
  const [autoDownload, setAutoDownload] = useState(false);
  const [copyInfo, setCopyInfo] = useState<string | null>(null);

  function addFiles(list: FileList | null) {
    if (!list?.length) return;
    setGlobalError(null);

    const selected = Array.from(list);
    setFiles((prev) => {
      const existingKeys = new Set(prev.map((f) => `${f.file.name}-${f.file.size}`));

      const newItems: FileItem[] = selected
        .filter((file) => {
          if (!['image/jpeg', 'image/png'].includes(file.type)) return false;
          const key = `${file.name}-${file.size}`;
          if (existingKeys.has(key)) return false;
          existingKeys.add(key);
          return true;
        })
        .map((file, index) => {
          const previewUrl = URL.createObjectURL(file);
          return {
            id: `${Date.now()}-${index}-${file.name}`,
            file,
            inputSize: file.size,
            status: 'pending' as FileStatus,
            previewUrl,
            downloaded: false,
          };
        });

      if (!newItems.length && !prev.length) {
        setGlobalError(t.addJpgPngOnly);
      }

      return [...prev, ...newItems];
    });
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    addFiles(e.target.files);
    e.target.value = '';
  }

  function handleDrop(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    e.stopPropagation();
    addFiles(e.dataTransfer.files);
  }

  function handleDragOver(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setGlobalError(null);
    setCopyInfo(null);

    if (!files.length) {
      setGlobalError(t.addAtLeastOne);
      return;
    }

    const toProcess = files.filter((f) => f.status === 'pending' || f.status === 'error');
    if (!toProcess.length) {
      setGlobalError(t.allProcessed);
      return;
    }

    setIsConverting(true);
    try {
      for (const item of toProcess) {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === item.id
              ? {
                  ...f,
                  status: 'processing',
                  error: undefined,
                  downloaded: autoDownload ? false : f.downloaded,
                }
              : f,
          ),
        );

        try {
          const { blob: webpBlob, usedQuality } = await convertToWebpSmart(item, quality, 60, 5);

          const url = URL.createObjectURL(webpBlob);
          const outputSize = webpBlob.size;
          const ratio = outputSize / item.inputSize;
          const filename = item.file.name.replace(/\.[^.]+$/, '.webp');

          setFiles((prev) =>
            prev.map((f) =>
              f.id === item.id
                ? {
                    ...f,
                    status: 'done',
                    downloadUrl: url,
                    outputSize,
                    ratio,
                    usedQuality,
                    downloaded: autoDownload ? true : f.downloaded,
                  }
                : f,
            ),
          );

          if (autoDownload) {
            triggerDownloadFromUrl(url, filename);
          }
        } catch (err) {
          console.error(err);
          setFiles((prev) =>
            prev.map((f) =>
              f.id === item.id
                ? {
                    ...f,
                    status: 'error',
                    error: err instanceof Error ? err.message : t.conversionError,
                  }
                : f,
            ),
          );
        }
      }
    } finally {
      setIsConverting(false);
    }
  }

  async function handleDownloadAll() {
    const ready = files.filter((f) => f.status === 'done' && f.downloadUrl);
    if (!ready.length) return;

    for (const item of ready) {
      const url = item.downloadUrl!;
      const filename = item.file.name.replace(/\.[^.]+$/, '.webp');

      triggerDownloadFromUrl(url, filename);

      setFiles((prev) =>
        prev.map((f) =>
          f.id === item.id
            ? {
                ...f,
                downloaded: true,
              }
            : f,
        ),
      );

      await sleep(150);
    }
  }

  function handleDownloadSingle(id: string) {
    const item = files.find((f) => f.id === id);
    if (!item || !item.downloadUrl) return;

    const filename = item.file.name.replace(/\.[^.]+$/, '.webp');
    triggerDownloadFromUrl(item.downloadUrl, filename);

    setFiles((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              downloaded: true,
            }
          : f,
      ),
    );
  }

  function handleRemove(id: string) {
    setFiles((prev) => {
      const item = prev.find((f) => f.id === id);
      if (item?.downloadUrl) URL.revokeObjectURL(item.downloadUrl);
      if (item?.previewUrl) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((f) => f.id !== id);
    });
  }

  function handleReconvert(id: string) {
    setFiles((prev) =>
      prev.map((f) => {
        if (f.id !== id) return f;

        if (f.downloadUrl) {
          URL.revokeObjectURL(f.downloadUrl);
        }

        return {
          ...f,
          status: 'pending',
          error: undefined,
          outputSize: undefined,
          ratio: undefined,
          downloadUrl: undefined,
          downloaded: false,
          usedQuality: undefined,
        };
      }),
    );
  }

  function handleClearAll() {
    setFiles((prev) => {
      prev.forEach((f) => {
        if (f.downloadUrl) URL.revokeObjectURL(f.downloadUrl);
        if (f.previewUrl) URL.revokeObjectURL(f.previewUrl);
      });
      return [];
    });
    setGlobalError(null);
    setCopyInfo(null);
  }

  function handlePreview(id: string) {
    const item = files.find((f) => f.id === id);
    if (!item?.previewUrl) return;
    window.open(item.previewUrl, '_blank', 'noopener,noreferrer');
  }

  async function handleCopySummary() {
    if (!navigator.clipboard) {
      setCopyInfo(t.clipboardNotSupported);
      return;
    }

    const converted = files.filter((f) => f.status === 'done');
    if (!converted.length) {
      setCopyInfo(t.noCompletedConversions);
      return;
    }

    const totalInputLocal = converted.reduce((sum, f) => sum + f.inputSize, 0);
    const totalOutputLocal = converted.reduce((sum, f) => sum + (f.outputSize ?? 0), 0);
    const savedLocal = totalInputLocal - totalOutputLocal;
    const savedPercent = totalInputLocal > 0 ? Math.round((Math.abs(savedLocal) / totalInputLocal) * 100) : 0;

    const trendLabel =
      savedLocal >= 0 ? `${t.savedWeight} ${formatBytes(savedLocal)} (~${savedPercent}% ${t.less})` : `${t.weightDifference} ${formatBytes(Math.abs(savedLocal))} (~${savedPercent}% ${t.more})`;

    const text = [
      t.conversionReport,
      `${t.fileCount} ${converted.length}`,
      `${t.totalSizeBefore} ${formatBytes(totalInputLocal)}`,
      `${t.totalSizeAfter} ${formatBytes(totalOutputLocal)}`,
      trendLabel,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopyInfo(t.reportCopied);
    } catch {
      setCopyInfo(t.reportCopyError);
    }
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
      <section className="space-y-4 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <p className="mb-2 font-semibold uppercase">{t.addFiles}</p>
            <label
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 text-center hover:border-neutral-500 hover:bg-neutral-100"
            >
              <span className="mb-1 text-sm font-medium">{t.dragDropImages}</span>
              <span className="mb-2 text-xs text-[#5e5e5e]">{t.clickToSelect}</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm">{t.supportedFormats}</span>
              <input type="file" accept="image/jpeg,image/png" multiple onChange={handleFileChange} className="hidden" />
            </label>
            {globalError && <p className="mt-2 text-xs text-red-600">{globalError}</p>}
          </div>

          <div>
            <p className="mt-8 mb-2 font-semibold uppercase">{t.setQuality}</p>
            <div className="flex items-center">
              <input type="range" min={60} max={95} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="p-0!" />
              <span className="w-16 text-right text-neutral-700">{quality}%</span>
            </div>
            <span className="mt-3 text-sm text-[#5e5e5e]">
              {t.qualityHelper}
            </span>

            <div className="mt-3 flex items-center">
              <input id="auto-download" type="checkbox" checked={autoDownload} onChange={(e) => setAutoDownload(e.target.checked)} className="h-4 w-4! rounded border-neutral-300 p-0!" />
              <label htmlFor="auto-download" className="pl-2 text-sm! text-neutral-700">
                {t.autoDownloadAll}
              </label>
            </div>
          </div>

          <div>
            <p className="mt-8 mb-2 font-semibold uppercase">{t.convertAndDownload}</p>
            {total > 0 && (
              <div className="mb-3 space-y-2">
                <div className="flex items-center justify-between text-sm text-[#5e5e5e]">
                  <span>
                    {t.inQueue} <strong>{total}</strong> {t.files}
                  </span>
                  {total > 0 && (
                    <span>
                      Zakończone: {completed} / {total}
                    </span>
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
                <p className="text-sm! text-[#5e5e5e]">
                  Łączny rozmiar wejściowy: <strong>{formatBytes(totalInput)}</strong>
                </p>
                {totalOutput > 0 && (
                  <>
                    <p className="text-sm! text-[#5e5e5e]">
                      Łączny rozmiar po konwersji: <strong>{formatBytes(totalOutput)}</strong>
                    </p>
                    <p className="text-sm! text-[#5e5e5e]">
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
              <Button variant="minimal" size="small" onClick={handleCopySummary} disabled={!anyDone} className="disabled:opacity-40">
                {t.copySummary}
              </Button>
              {copyInfo && <span className="text-xs text-[#5e5e5e]">{copyInfo}</span>}
            </div>
          </div>
        </form>
      </section>

      <section aria-label="Lista plików w kolejce" className="space-y-2 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <h2 className="h6">Pliki w kolejce</h2>
          {files.length > 0 && (
            <p className="text-sm! text-[#5e5e5e]">
              Gotowe: {readyCount} · W trakcie / oczekujące: {pendingCount}
            </p>
          )}
        </div>

        {files.length === 0 && <p className="text-xs text-[#5e5e5e]">{t.addFilesToStart}</p>}

        {files.length > 0 && (
          <div className="space-y-2 text-sm">
            {files.map((item) => {
              const statusLabel = item.status === 'pending' ? t.status.pending : item.status === 'processing' ? t.status.processing : item.status === 'done' ? t.status.done : t.status.error;

              const statusColor =
                item.status === 'done'
                  ? 'bg-emerald-100 text-emerald-700'
                  : item.status === 'processing'
                    ? 'bg-blue-100 text-blue-700'
                    : item.status === 'error'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-neutral-100 text-neutral-700';

              const isBigger = item.outputSize != null && item.outputSize > item.inputSize;

              const diffPercent = item.outputSize != null && item.inputSize > 0 ? Math.round(((item.inputSize - item.outputSize) / item.inputSize) * 100) : null;

              return (
                <div key={item.id} className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 md:flex-row md:items-center md:justify-between">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handlePreview(item.id)}
                      className="hidden h-12 w-12 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 md:block"
                      title={t.actions.preview}
                    >
                      {item.previewUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={item.previewUrl} alt={item.file.name} className="h-full w-full object-cover" />
                      )}
                    </button>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm! font-medium" title={item.file.name}>
                        {item.file.name}
                      </p>
                      <p className="text-xs! text-[#5e5e5e]">
                        Wielkość przed: {formatBytes(item.inputSize)}
                        {item.outputSize != null && (
                          <>
                            {' · '}Wielkość po: {formatBytes(item.outputSize)}{' '}
                            {diffPercent !== null && (
                              <>
                                {' ('}
                                {Math.abs(diffPercent)}% {diffPercent >= 0 ? t.less : t.more}
                                {')'}
                              </>
                            )}
                            {isBigger && <span className="ml-1 text-[11px] text-amber-700">(większy niż oryginał - spróbuj niższej jakości)</span>}
                          </>
                        )}
                      </p>
                      {item.usedQuality && <p className="text-[11px] text-[#5e5e5e]">Użyta jakość WebP: {item.usedQuality}%</p>}
                      {item.error && <p className="mt-1 text-xs! text-red-600">{item.error}</p>}
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className={`rounded-full px-3 py-1 text-[11px] font-medium ${statusColor}`}>{statusLabel}</span>

                    {item.status === 'done' && item.downloadUrl && (
                      <button type="button" onClick={() => handleDownloadSingle(item.id)} className="cursor-pointer rounded-full border border-black/15 bg-white px-3 py-1 text-[11px]! font-medium">
                        {item.downloaded ? 'Pobrano' : t.actions.download}
                      </button>
                    )}

                    {item.status === 'done' && (
                      <button type="button" onClick={() => handleReconvert(item.id)} className="cursor-pointer rounded-full border border-black/10 bg-white px-3 py-1 text-[11px]">
                        {t.actions.reconvert}
                      </button>
                    )}

                    <button type="button" onClick={() => handleRemove(item.id)} className="cursor-pointer rounded-full px-2 py-1 text-xs text-[#5e5e5e] hover:text-neutral-900">
                      {t.actions.remove}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
