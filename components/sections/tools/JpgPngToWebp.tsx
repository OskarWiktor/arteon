'use client';

import Button from '@/components/ui/Button';
import { DragEvent, FormEvent, useMemo, useState } from 'react';

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
      reject(new Error('Nie udało się wczytać pliku.'));
    };

    reader.onload = () => {
      const img = new Image();

      img.onerror = () => {
        reject(new Error('Nie udało się wczytać obrazu.'));
      };

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Brak wsparcia dla canvas w przeglądarce.'));
          return;
        }

        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Nie udało się wygenerować pliku WebP.'));
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
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [quality, setQuality] = useState(80); // 60-95
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
        setGlobalError('Dodaj pliki JPG lub PNG - inne formaty są pomijane.');
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
      setGlobalError('Dodaj przynajmniej jeden plik JPG lub PNG.');
      return;
    }

    const toProcess = files.filter((f) => f.status === 'pending' || f.status === 'error');
    if (!toProcess.length) {
      setGlobalError('Wszystkie pliki w kolejce są już przetworzone.');
      return;
    }

    setIsConverting(true);
    try {
      for (const item of toProcess) {
        setFiles((prev) => prev.map((f) => (f.id === item.id ? { ...f, status: 'processing', error: undefined, downloaded: autoDownload ? false : f.downloaded } : f)));

        try {
          const webpBlob = await convertToWebp(item.file, quality);
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
                    // jeżeli auto-download, to od razu zaznaczamy jako pobrane
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
                    error: err instanceof Error ? err.message : 'Wystąpił nieoczekiwany błąd podczas konwersji.',
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

  // sekwencyjne pobieranie wszystkich plików
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
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              status: 'pending',
              error: undefined,
              outputSize: undefined,
              ratio: undefined,
              downloadUrl: undefined,
              downloaded: false,
            }
          : f,
      ),
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
      setCopyInfo('Kopiowanie do schowka nie jest wspierane w tej przeglądarce.');
      return;
    }

    const converted = files.filter((f) => f.status === 'done');
    if (!converted.length) {
      setCopyInfo('Brak zakończonych konwersji do podsumowania.');
      return;
    }

    const totalInputLocal = converted.reduce((sum, f) => sum + f.inputSize, 0);
    const totalOutputLocal = converted.reduce((sum, f) => sum + (f.outputSize ?? 0), 0);
    const savedLocal = Math.max(totalInputLocal - totalOutputLocal, 0);
    const savedPercent = totalInputLocal > 0 ? Math.round((savedLocal / totalInputLocal) * 100) : 0;

    const text = [
      `Raport konwersji JPG/PNG → WebP:`,
      `Liczba plików: ${converted.length}`,
      `Łączny rozmiar przed: ${formatBytes(totalInputLocal)}`,
      `Łączny rozmiar po: ${formatBytes(totalOutputLocal)}`,
      `Zaoszczędzona waga: ${formatBytes(savedLocal)} (~${savedPercent}% mniej)`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopyInfo('Raport skopiowany do schowka.');
    } catch {
      setCopyInfo('Nie udało się skopiować raportu do schowka.');
    }
  }

  const total = files.length;
  const completed = files.filter((f) => f.status === 'done' || f.status === 'error').length;

  const progress = total ? Math.round((completed / total) * 100) : 0;
  const visualProgress = progress === 0 ? 0 : progress === 100 ? 100 : 5 + progress * 0.9;

  const totalInput = useMemo(() => files.reduce((sum, f) => sum + f.inputSize, 0), [files]);
  const totalOutput = useMemo(() => files.reduce((sum, f) => sum + (f.outputSize ?? 0), 0), [files]);
  const totalSaved = totalOutput > 0 ? totalInput - totalOutput : 0;

  const anyDone = files.some((f) => f.status === 'done');

  const readyCount = files.filter((f) => f.status === 'done').length;
  const pendingCount = files.filter((f) => f.status === 'pending' || f.status === 'processing').length;

  return (
    <>
      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <section className="space-y-4 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <p className="mb-2 font-semibold uppercase">Dodaj pliki</p>
              <label
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 text-center hover:border-neutral-500 hover:bg-neutral-100"
              >
                <span className="mb-1 text-sm font-medium">Przeciągnij i upuść obrazy tutaj</span>
                <span className="mb-2 text-xs text-[#5e5e5e]">lub kliknij, aby wybrać pliki z dysku</span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm">Obsługiwane: JPG, PNG</span>
                <input type="file" accept="image/jpeg,image/png" multiple onChange={handleFileChange} className="hidden" />
              </label>
              {globalError && <p className="mt-2 text-xs text-red-600">{globalError}</p>}
            </div>

            <div>
              <p className="mt-8 mb-2 font-semibold uppercase">Ustaw jakość WebP</p>
              <div className="flex items-center">
                <input type="range" min={60} max={95} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="p-0!" />
                <span className="w-16 text-right text-neutral-700">{quality}%</span>
              </div>
              <span className="mt-3 text-sm text-[#5e5e5e]">Niższa wartość = mniejsza waga plików, wyższa = lepsza jakość. 80% to dobry kompromis dla większości stron.</span>

              <div className="mt-3 flex items-center">
                <input id="auto-download" type="checkbox" checked={autoDownload} onChange={(e) => setAutoDownload(e.target.checked)} className="h-4 w-4! rounded border-neutral-300 p-0!" />
                <label htmlFor="auto-download" className="pl-2 text-sm! text-neutral-700">
                  Automatycznie pobierz wszystkie pliki po konwersji
                </label>
              </div>
            </div>

            <div>
              <p className="mt-8 mb-2 font-semibold uppercase">Konwertuj i pobierz</p>
              {total > 0 && (
                <div className="mb-3 space-y-2">
                  <div className="flex items-center justify-between text-sm text-[#5e5e5e]">
                    <span>
                      W kolejce: <strong>{total}</strong> plików
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
                  {isConverting ? 'Konwertuję…' : 'Konwertuj pliki'}
                </Button>
                <Button onClick={handleDownloadAll} disabled={!anyDone} className="disabled:opacity-40" size="small">
                  Pobierz wszystkie
                </Button>
                <Button onClick={handleClearAll} disabled={!files.length || isConverting} className="disabled:opacity-40" size="small">
                  Wyczyść listę
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
                      <p>
                        Łącznie zaoszczędzono:{' '}
                        <strong>
                          {formatBytes(Math.max(totalSaved, 0))} {totalSaved > 0 && `(~${Math.round((totalSaved / totalInput) * 100)}% mniej)`}
                        </strong>
                      </p>
                    </>
                  )}
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Button variant="minimal" size="small" onClick={handleCopySummary} disabled={!anyDone} className="disabled:opacity-40">
                  Kopiuj raport konwersji
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

          {files.length === 0 && <p className="text-xs text-[#5e5e5e]">Dodaj pliki po lewej stronie, aby zobaczyć listę kolejki, stan konwersji oraz oszczędność rozmiaru.</p>}

          {files.length > 0 && (
            <div className="space-y-2 text-sm">
              {files.map((item) => {
                const statusLabel = item.status === 'pending' ? 'Oczekuje' : item.status === 'processing' ? 'Przetwarzanie…' : item.status === 'done' ? 'Gotowe' : 'Błąd';

                const statusColor =
                  item.status === 'done'
                    ? 'bg-emerald-100 text-emerald-700'
                    : item.status === 'processing'
                      ? 'bg-blue-100 text-blue-700'
                      : item.status === 'error'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-neutral-100 text-neutral-700';

                const isBigger = item.outputSize != null && item.outputSize > item.inputSize;

                return (
                  <div key={item.id} className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 md:flex-row md:items-center md:justify-between">
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handlePreview(item.id)}
                        className="hidden h-12 w-12 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 md:block"
                        title="Kliknij, aby otworzyć podgląd w nowej karcie"
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
                              {item.ratio != null && item.ratio > 0 && (
                                <>
                                  {' ('}
                                  {Math.round((1 - item.ratio) * 100)}% mniej)
                                </>
                              )}
                              {isBigger && <span className="ml-1 text-[11px] text-amber-700">(większy niż oryginał - spróbuj niższej jakości)</span>}
                            </>
                          )}
                        </p>
                        {item.error && <p className="mt-1 text-xs! text-red-600">{item.error}</p>}
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <span className={`rounded-full px-3 py-1 text-[11px] font-medium ${statusColor}`}>{statusLabel}</span>

                      {item.status === 'done' && item.downloadUrl && (
                        <button type="button" onClick={() => handleDownloadSingle(item.id)} className="cursor-pointer rounded-full border border-black/15 bg-white px-3 py-1 text-[11px]! font-medium">
                          {item.downloaded ? 'Pobrano' : 'Pobierz'}
                        </button>
                      )}

                      {item.status === 'done' && (
                        <button type="button" onClick={() => handleReconvert(item.id)} className="cursor-pointer rounded-full border border-black/10 bg-white px-3 py-1 text-[11px]">
                          Rekonwertuj
                        </button>
                      )}
                      <button type="button" onClick={() => handleRemove(item.id)} className="cursor-pointer rounded-full px-2 py-1 text-xs text-[#5e5e5e] hover:text-neutral-900">
                        Usuń
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
