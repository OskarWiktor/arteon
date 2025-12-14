'use client';

import Button from '@/components/ui/buttons/Button';
import { useMemo, useState, type DragEvent, type FormEvent } from 'react';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import Text from '@/components/ui/typography/Text';
import Badge from '@/components/ui/Badge';
import Heading from '@/components/ui/typography/Heading';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

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

  const { copy } = useCopyToClipboard();
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

    const ok = await copy(text);
    setCopyInfo(ok ? t.reportCopied : t.reportCopyError);
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
            <Text as="p" variant="small" className="mb-2 font-semibold uppercase">{t.addFiles}</Text>
            <label
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 text-center hover:border-neutral-500 hover:bg-neutral-100"
            >
              <Text as="span" variant="small" className="mb-1 font-medium">{t.dragDropImages}</Text>
              <Text as="span" variant="xs" tone="muted" className="mb-2">{t.clickToSelect}</Text>
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
            <Text as="p" variant="small" className="mt-8 mb-2 font-semibold uppercase">{t.setQuality}</Text>
            <div className="flex items-center">
              <input type="range" min={60} max={95} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="p-0!" />
              <Text as="span" variant="small" tone="dark" className="w-16 text-right">{quality}%</Text>
            </div>
            <Text variant="small" tone="muted" as="span" className="mt-3">
              {t.qualityHelper}
            </Text>

            <div className="mt-3 flex items-center">
              <input id="auto-download" type="checkbox" checked={autoDownload} onChange={(e) => setAutoDownload(e.target.checked)} className="h-4 w-4! rounded border-neutral-300 p-0!" />
              <label htmlFor="auto-download" className="pl-2 cursor-pointer">
                <Text variant="small" tone="dark" as="span">
                  {t.autoDownloadAll}
                </Text>
              </label>
            </div>
          </div>

          <div>
            <Text as="p" variant="small" className="mt-8 mb-2 font-semibold uppercase">{t.convertAndDownload}</Text>
            {total > 0 && (
              <div className="mb-3 space-y-2">
                <div className="flex items-center justify-between">
                  <Text variant="small" tone="muted" as="span">
                    {t.inQueue} <strong>{total}</strong> {t.files}
                  </Text>
                  {total > 0 && (
                    <Text as="span" variant="small" tone="muted">
                      Zakończone: {completed} / {total}
                    </Text>
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
                <Text variant="small" tone="muted" as="p">
                  {t.totalInputSize} <strong>{formatBytes(totalInput)}</strong>
                </Text>
                {totalOutput > 0 && (
                  <>
                    <Text variant="small" tone="muted" as="p">
                      {t.totalOutputSize} <strong>{formatBytes(totalOutput)}</strong>
                    </Text>
                    <Text variant="small" tone="muted" as="p">
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
                    </Text>
                  </>
                )}
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Button variant="normal" size="small" onClick={handleCopySummary} disabled={!anyDone} className="border-0 shadow-none hover:shadow-none hover:translate-y-0 disabled:opacity-40">
                {t.copySummary}
              </Button>
              {copyInfo && <Text variant="xs" tone="muted" as="span">{copyInfo}</Text>}
            </div>
          </div>
        </form>
      </ToolSection>

      <ToolSection aria-label={t.queueListAriaLabel} className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Heading as="h2" className="h6">{t.queueFilesHeading}</Heading>
          {files.length > 0 && (
            <Text variant="small" tone="muted" as="p">
              {t.readyCount}: {readyCount} · {t.pendingCount}: {pendingCount}
            </Text>
          )}
        </div>

        {files.length === 0 && <Text variant="xs" tone="muted" as="p">{t.addFilesToStart}</Text>}

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
                      <div title={item.file.name}>
                        <Text as="p" variant="small" className="truncate font-medium">
                          {item.file.name}
                        </Text>
                      </div>
                      <Text as="p" variant="xs" tone="muted" className="text-xs!">
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
                            {isBigger && <Text as="span" variant="xs" className="ml-1 text-amber-700">{t.biggerThanOriginal}</Text>}
                          </>
                        )}
                      </Text>
                      {item.usedQuality && <Text as="p" variant="xs" tone="muted" className="text-[11px]">{t.usedQuality} {item.usedQuality}%</Text>}
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
                      <Badge as="button" type="button" onClick={() => handleReconvert(item.id)} variant="default" size="md" className="cursor-pointer border-black/10">
                        {t.actions.reconvert}
                      </Badge>
                    )}

                    <Badge as="button" type="button" onClick={() => handleRemove(item.id)} variant="default" size="sm" className="cursor-pointer text-light hover:text-neutral-900">
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


