'use client';

import { DragEvent, FormEvent, useMemo, useState } from 'react';
import Button from '@/components/ui/Button';

type FileStatus = 'idle' | 'processing' | 'done' | 'error';

interface OutputFile {
  id: string;
  label: string;
  size: number | 'ico';
  type: 'png' | 'ico';
  fileName: string;
  sizeBytes: number;
  url: string;
}

const PNG_SIZES = [180, 192, 512];

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(value > 10 ? 1 : 2)} ${units[i]}`;
}

function suggestFileName(size: number | 'ico', type: 'png' | 'ico'): string {
  if (type === 'ico') return 'favicon.ico';

  if (size === 180) return 'apple-touch-icon.webp';
  if (size === 192) return 'android-chrome-192x192.webp';
  if (size === 512) return 'android-chrome-512x512.webp';

  return `favicon-${size}x${size}.webp`;
}

async function createPngFromImage(img: HTMLImageElement, size: number, backgroundColor: string, transparentBackground: boolean): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Brak wsparcia dla canvas w przeglądarce.');
  }

  if (!transparentBackground) {
    ctx.fillStyle = backgroundColor || '#ffffff';
    ctx.fillRect(0, 0, size, size);
  } else {
    ctx.clearRect(0, 0, size, size);
  }

  const ratio = Math.min(size / img.naturalWidth, size / img.naturalHeight);
  const drawWidth = img.naturalWidth * ratio;
  const drawHeight = img.naturalHeight * ratio;
  const dx = (size - drawWidth) / 2;
  const dy = (size - drawHeight) / 2;

  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, dx, dy, drawWidth, drawHeight);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Nie udało się wygenerować pliku PNG.'));
          return;
        }
        resolve(blob);
      },
      'image/png',
      1,
    );
  });
}

async function createIcoFromPng(pngBlob: Blob, size: number): Promise<Blob> {
  const pngBuffer = await pngBlob.arrayBuffer();
  const pngBytes = new Uint8Array(pngBuffer);

  const headerSize = 6;
  const entrySize = 16;
  const imageOffset = headerSize + entrySize;
  const totalSize = imageOffset + pngBytes.length;

  const buffer = new ArrayBuffer(totalSize);
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);

  view.setUint16(0, 0, true);
  view.setUint16(2, 1, true);
  view.setUint16(4, 1, true);

  const iconWidth = size === 256 ? 0 : size;
  const iconHeight = iconWidth;

  view.setUint8(6, iconWidth);
  view.setUint8(7, iconHeight);
  view.setUint8(8, 0);
  view.setUint8(9, 0);
  view.setUint16(10, 1, true);
  view.setUint16(12, 32, true);
  view.setUint32(14, pngBytes.length, true);
  view.setUint32(18, imageOffset, true);

  bytes.set(pngBytes, imageOffset);

  return new Blob([buffer], { type: 'image/x-icon' });
}

export default function FaviconGenerator() {
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [sourcePreviewUrl, setSourcePreviewUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<FileStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const [selectedSizes, setSelectedSizes] = useState<number[]>([180, 192, 512]);
  const [includeIco, setIncludeIco] = useState(true);
  const [transparentBackground, setTransparentBackground] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [autoDownload, setAutoDownload] = useState(false);

  const [outputs, setOutputs] = useState<OutputFile[]>([]);

  function revokeOutputs(urls: OutputFile[]) {
    urls.forEach((o) => {
      if (o.url) URL.revokeObjectURL(o.url);
    });
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = '';

    if (!file) return;

    if (!['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'].includes(file.type)) {
      setError('Obsługiwane są wyłącznie pliki PNG, JPG/JPEG oraz SVG.');
      setSourceFile(null);
      if (sourcePreviewUrl) {
        URL.revokeObjectURL(sourcePreviewUrl);
        setSourcePreviewUrl(null);
      }
      return;
    }

    setError(null);
    setStatus('idle');
    setOutputs((prev) => {
      revokeOutputs(prev);
      return [];
    });

    if (sourcePreviewUrl) {
      URL.revokeObjectURL(sourcePreviewUrl);
    }

    const preview = URL.createObjectURL(file);
    setSourceFile(file);
    setSourcePreviewUrl(preview);
  }

  function handleDrop(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (!['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'].includes(file.type)) {
      setError('Obsługiwane są wyłącznie pliki PNG, JPG/JPEG oraz SVG.');
      setSourceFile(null);
      if (sourcePreviewUrl) {
        URL.revokeObjectURL(sourcePreviewUrl);
        setSourcePreviewUrl(null);
      }
      return;
    }

    setError(null);
    setStatus('idle');
    setOutputs((prev) => {
      revokeOutputs(prev);
      return [];
    });

    if (sourcePreviewUrl) {
      URL.revokeObjectURL(sourcePreviewUrl);
    }

    const preview = URL.createObjectURL(file);
    setSourceFile(file);
    setSourcePreviewUrl(preview);
  }

  function handleDragOver(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  function toggleSize(size: number) {
    setSelectedSizes((prev) => {
      if (prev.includes(size)) {
        return prev.filter((s) => s !== size);
      }
      return [...prev, size].sort((a, b) => a - b);
    });
  }

  async function handleGenerate(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!sourceFile || !sourcePreviewUrl) {
      setError('Najpierw dodaj obraz bazowy (PNG, JPG lub SVG).');
      return;
    }

    if (!selectedSizes.length && !includeIco) {
      setError('Zaznacz przynajmniej jeden rozmiar PNG lub opcję favicon.ico.');
      return;
    }

    setStatus('processing');
    setOutputs((prev) => {
      revokeOutputs(prev);
      return [];
    });

    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';

      const loadPromise = new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Nie udało się wczytać obrazu. Spróbuj ponownie lub użyj innego pliku.'));
      });

      img.src = sourcePreviewUrl;
      await loadPromise;

      const newOutputs: OutputFile[] = [];

      for (const size of selectedSizes) {
        // eslint-disable-next-line no-await-in-loop
        const pngBlob = await createPngFromImage(img, size, backgroundColor, transparentBackground);
        const url = URL.createObjectURL(pngBlob);
        const fileName = suggestFileName(size, 'png');

        newOutputs.push({
          id: `${size}-png`,
          label: `${size}x${size} PNG`,
          size,
          type: 'png',
          fileName,
          sizeBytes: pngBlob.size,
          url,
        });

        if (autoDownload) {
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          a.remove();
        }
      }

      if (includeIco) {
        const icoBaseSize = 32;
        const pngBlobForIco = await createPngFromImage(img, icoBaseSize, backgroundColor, transparentBackground);
        const icoBlob = await createIcoFromPng(pngBlobForIco, icoBaseSize);
        const icoUrl = URL.createObjectURL(icoBlob);
        const icoName = suggestFileName('ico', 'ico');

        newOutputs.push({
          id: 'favicon-ico',
          label: 'favicon.ico (32x32 w kontenerze ICO)',
          size: 'ico',
          type: 'ico',
          fileName: icoName,
          sizeBytes: icoBlob.size,
          url: icoUrl,
        });

        if (autoDownload) {
          const a = document.createElement('a');
          a.href = icoUrl;
          a.download = icoName;
          document.body.appendChild(a);
          a.click();
          a.remove();
        }
      }

      setOutputs(newOutputs);
      setStatus('done');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Wystąpił nieoczekiwany błąd podczas generowania favicon.');
    }
  }

  function handleDownloadAll() {
    if (!outputs.length) return;

    outputs.forEach((item) => {
      const a = document.createElement('a');
      a.href = item.url;
      a.download = item.fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }

  function handleClear() {
    setStatus('idle');
    setError(null);
    setOutputs((prev) => {
      revokeOutputs(prev);
      return [];
    });

    if (sourcePreviewUrl) {
      URL.revokeObjectURL(sourcePreviewUrl);
      setSourcePreviewUrl(null);
    }
    setSourceFile(null);
  }

  const totalSize = useMemo(() => outputs.reduce((sum, file) => sum + file.sizeBytes, 0), [outputs]);

  const hasSource = !!sourceFile;
  const isProcessing = status === 'processing';
  const anyOutputs = outputs.length > 0;

  return (
    <>
      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <section className="space-y-4 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <p className="mb-2 font-semibold uppercase">Dodaj obraz bazowy</p>
              <label
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 text-center hover:border-neutral-500 hover:bg-neutral-100"
              >
                <span className="mb-1 text-sm font-medium">Przeciągnij i upuść obraz tutaj</span>
                <span className="mb-2 text-xs text-[#5e5e5e]">lub kliknij, aby wybrać plik z dysku</span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm">Obsługiwane: PNG, JPG/JPEG, SVG</span>
                <input type="file" accept="image/png,image/jpeg,image/jpg,image/svg+xml" onChange={handleFileChange} className="hidden" />
              </label>
              {sourceFile && (
                <p className="mt-2 text-xs text-[#5e5e5e]">
                  Wybrany plik: <strong>{sourceFile.name}</strong> ({formatBytes(sourceFile.size)})
                </p>
              )}
              {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
            </div>

            <div>
              <p className="mt-8 mb-2 font-semibold uppercase">Ustaw rozmiary i tło</p>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                <p className="mb-2 text-sm! font-semibold tracking-wide text-[#5e5e5e] uppercase">Rozmiary PNG (rekomendacje 2025)</p>
                <div className="flex flex-wrap gap-2">
                  {PNG_SIZES.map((size) => {
                    const checked = selectedSizes.includes(size);
                    return (
                      <label
                        key={size}
                        className={`flex cursor-pointer items-center justify-between rounded-full border px-3 py-1 text-[14px]! font-medium ${
                          checked ? 'border-black bg-slate-600 text-white' : 'border-neutral-300 bg-white text-neutral-800 hover:border-neutral-500'
                        }`}
                      >
                        <input type="checkbox" checked={checked} onChange={() => toggleSize(size)} className="mr-1 h-4 w-4! p-0! align-middle" />
                        {size}x{size}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <input
                    id="transparent-bg"
                    type="checkbox"
                    checked={transparentBackground}
                    onChange={(e) => setTransparentBackground(e.target.checked)}
                    className="h-4 w-4! rounded border-neutral-300 p-0!"
                  />
                  <label htmlFor="transparent-bg" className="text-sm! text-neutral-800">
                    Przezroczyste tło (PNG/ICO)
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm! text-[#5e5e5e]">Kolor tła:</span>
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    disabled={transparentBackground}
                    className="h-8! w-7! cursor-pointer border-none bg-white p-0!"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <input id="include-ico" type="checkbox" checked={includeIco} onChange={(e) => setIncludeIco(e.target.checked)} className="h-4 w-4! rounded border-neutral-300 p-0!" />
                  <label htmlFor="include-ico" className="text-sm! text-neutral-800">
                    Wygeneruj plik <strong>favicon.ico</strong> (bazowo 32x32)
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input id="auto-download" type="checkbox" checked={autoDownload} onChange={(e) => setAutoDownload(e.target.checked)} className="h-4 w-4! rounded border-neutral-300 p-0!" />
                  <label htmlFor="auto-download" className="text-sm! text-neutral-800">
                    Automatycznie pobierz pliki po wygenerowaniu
                  </label>
                </div>
              </div>
            </div>

            <div>
              <p className="mt-8 mb-2 font-semibold uppercase">Wygeneruj i pobierz favicon</p>

              <div className="flex flex-wrap gap-3">
                <Button type="submit" variant="accent" size="small" disabled={!hasSource || isProcessing} className="disabled:opacity-60">
                  {isProcessing ? 'Generuję favicon…' : 'Generuj favicon'}
                </Button>
                <Button onClick={handleDownloadAll} type="button" size="small" disabled={!anyOutputs} className="disabled:opacity-40">
                  Pobierz wszystkie
                </Button>
                <Button onClick={handleClear} type="button" size="small" disabled={isProcessing || (!hasSource && !anyOutputs)} className="disabled:opacity-40">
                  Wyczyść
                </Button>
              </div>

              {status === 'processing' && <p className="mt-2 text-xs text-[#5e5e5e]">Przetwarzam obraz i generuję pliki favicon…</p>}
              {status === 'done' && !error && (
                <p className="mt-2 text-xs text-emerald-700">
                  Gotowe! Wygenerowano nowoczesny zestaw favicon: favicon.ico + apple-touch-icon + ikony PWA (192 i 512 px). Niżej znajdziesz listę plików.
                </p>
              )}
            </div>
          </form>
        </section>

        <section aria-label="Podgląd favicon i lista wygenerowanych plików" className="space-y-4 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <h2 className="h6">Podgląd i pliki favicon</h2>
            {anyOutputs && (
              <p className="text-xs text-[#5e5e5e]">
                Łączny rozmiar: <strong>{formatBytes(totalSize)}</strong>
              </p>
            )}
          </div>

          {!hasSource && !anyOutputs && <p className="text-xs text-[#5e5e5e]">Dodaj obraz po lewej stronie, aby wygenerować favicon.ico oraz zestaw ikon PNG zgodny z aktualnymi wytycznymi.</p>}

          {hasSource && (
            <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-wide text-[#5e5e5e] uppercase">Podgląd obrazu bazowego</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded border border-neutral-300 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {sourcePreviewUrl && <img src={sourcePreviewUrl} alt="Podgląd favicon" className="h-full w-full object-cover" />}
                    </div>
                    <span className="text-xs text-[#5e5e5e]">Przybliżony podgląd favicon w małym rozmiarze</span>
                  </div>

                  <div className="hidden items-center gap-2 md:flex">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded border border-neutral-300 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {sourcePreviewUrl && <img src={sourcePreviewUrl} alt="Podgląd dużej ikony" className="h-full w-full object-cover" />}
                    </div>
                    <span className="text-xs text-[#5e5e5e]">Ikona w większym rozmiarze (np. PWA)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {anyOutputs && (
            <div className="space-y-2 text-sm">
              {outputs.map((item) => (
                <div key={item.id} className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 md:flex-row md:items-center md:justify-between">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <button
                      type="button"
                      onClick={() => window.open(item.url, '_blank', 'noopener,noreferrer')}
                      className="hidden h-10 w-10 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 md:block"
                      title="Kliknij, aby otworzyć podgląd w nowej karcie"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.url} alt={item.fileName} className="h-full w-full object-cover" />
                    </button>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm! font-medium" title={item.fileName}>
                        {item.fileName}
                      </p>
                      <p className="text-xs! text-[#5e5e5e]">
                        {item.label} · {formatBytes(item.sizeBytes)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <a href={item.url} download={item.fileName} className="cursor-pointer rounded-full border border-black/15 bg-white px-3 py-1 text-[11px]! font-medium">
                      Pobierz
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
