'use client';

import { useMemo, useState, type DragEvent, type FormEvent } from 'react';
import Button from '@/components/ui/buttons/Button';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolInfo from '@/components/ui/tools/ToolInfo';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import Heading from '@/components/ui/typography/Heading';
import Eyebrow from '@/components/ui/typography/Eyebrow';
import Text from '@/components/ui/typography/Text';
import Badge from '@/components/ui/Badge';

const ui = {
  pl: {
    canvasNotSupported: 'Brak wsparcia dla canvas w przeglądarce.',
    pngGenerationError: 'Nie udało się wygenerować pliku PNG.',
    imageLoadError: 'Nie udało się wczytać obrazu. Spróbuj ponownie lub użyj innego pliku.',
    supportedFormatsOnly: 'Obsługiwane są wyłącznie pliki PNG, JPG/JPEG oraz SVG.',
    addBaseImage: 'Najpierw dodaj obraz bazowy (PNG, JPG lub SVG).',
    selectAtLeastOne: 'Zaznacz przynajmniej jeden rozmiar PNG lub opcję favicon.ico.',
    unexpectedError: 'Wystąpił nieoczekiwany błąd podczas generowania favicon.',
    addBaseImageLabel: 'Dodaj obraz bazowy',
    dragDropImage: 'Przeciągnij i upuść obraz tutaj',
    clickToSelect: 'lub kliknij, aby wybrać plik z dysku',
    supportedFormats: 'Obsługiwane: PNG, JPG/JPEG, SVG',
    selectedFile: 'Wybrany plik:',
    setSizesAndBackground: 'Ustaw rozmiary i tło',
    pngSizes: 'Rozmiary PNG (rekomendacje 2025)',
    transparentBackground: 'Przezroczyste tło (PNG/ICO)',
    backgroundColor: 'Kolor tła:',
    generateFaviconIco: 'Wygeneruj plik favicon.ico (bazowo 32x32)',
    autoDownload: 'Automatycznie pobierz pliki po wygenerowaniu',
    generateAndDownload: 'Wygeneruj i pobierz favicon',
    generating: 'Generuję favicon…',
    generate: 'Generuj favicon',
    downloadAll: 'Pobierz wszystkie',
    clear: 'Wyczyść',
    processing: 'Przetwarzam obraz i generuję pliki favicon…',
    done: 'Gotowe! Wygenerowano nowoczesny zestaw favicon: favicon.ico + apple-touch-icon + ikony PWA (192 i 512 px). Niżej znajdziesz listę plików.',
    previewAndFiles: 'Podgląd i pliki favicon',
    totalSize: 'Łączny rozmiar:',
    addImageToGenerate: 'Dodaj obraz po lewej stronie, aby wygenerować favicon.ico oraz zestaw ikon PNG zgodny z aktualnymi wytycznymi.',
    previewBaseImage: 'Podgląd obrazu bazowego',
    previewFavicon: 'Podgląd favicon',
    approximatePreview: 'Przybliżony podgląd favicon w małym rozmiarze',
    largeIconPreview: 'Ikona w większym rozmiarze (np. PWA)',
    clickToPreview: 'Kliknij, aby otworzyć podgląd w nowej karcie',
    download: 'Pobierz',
    previewAndFilesLabel: 'Podgląd favicon i lista wygenerowanych plików',
    faviconIcoLabel: 'favicon.ico (32x32 w kontenerze ICO)',
  },
} as const;

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
    throw new Error(ui.pl.canvasNotSupported);
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
          reject(new Error(ui.pl.pngGenerationError));
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
  const t = ui.pl;
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
      setError(t.supportedFormatsOnly);
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
      setError(t.supportedFormatsOnly);
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
      setError(t.addBaseImage);
      return;
    }

    if (!selectedSizes.length && !includeIco) {
      setError(t.selectAtLeastOne);
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
        img.onerror = () => reject(new Error(t.imageLoadError));
      });

      img.src = sourcePreviewUrl;
      await loadPromise;

      const newOutputs: OutputFile[] = [];

      for (const size of selectedSizes) {
         
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
          label: t.faviconIcoLabel,
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
      setError(err instanceof Error ? err.message : t.unexpectedError);
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
        <ToolSection className="space-y-4">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <p className="mb-2 font-semibold uppercase">{t.addBaseImageLabel}</p>
              <label
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 text-center hover:border-neutral-500 hover:bg-neutral-100"
              >
                <span className="mb-1 text-sm font-medium">{t.dragDropImage}</span>
                <Text variant="xs" tone="muted" as="span" className="mb-2">
                  {t.clickToSelect}
                </Text>
                <Badge variant="default" size="sm" className="bg-white shadow-sm">{t.supportedFormats}</Badge>
                <input type="file" accept="image/png,image/jpeg,image/jpg,image/svg+xml" onChange={handleFileChange} className="hidden" />
              </label>
              {sourceFile && (
                <Text variant="xs" tone="muted" as="p" className="mt-2">
                  {t.selectedFile} <strong>{sourceFile.name}</strong> ({formatBytes(sourceFile.size)})
                </Text>
              )}
              {error && (
                <ToolAlert variant="error" className="mt-2">
                  {error}
                </ToolAlert>
              )}
            </div>

            <div>
              <p className="mt-8 mb-2 font-semibold uppercase">{t.setSizesAndBackground}</p>

              <ToolInfo>
                <Text variant="small" tone="muted" as="p" className="mb-2! font-semibold tracking-wide uppercase">
                  {t.pngSizes}
                </Text>
                <div className="flex flex-wrap gap-2">
                  {PNG_SIZES.map((size) => {
                    const checked = selectedSizes.includes(size);
                    return (
                      <Badge
                        key={size}
                        as="label"
                        variant={checked ? 'selected' : 'default'}
                        size="lg"
                        className="flex cursor-pointer items-center justify-between"
                        htmlFor={`size-${size}`}
                      >
                        <input type="checkbox" id={`size-${size}`} checked={checked} onChange={() => toggleSize(size)} className="mr-1 h-4 w-4! p-0! align-middle" />
                        {size}x{size}
                      </Badge>
                    );
                  })}
                </div>
              </ToolInfo>

              <ToolInfo className="mt-4 gap-2">
                <div className="flex items-center gap-2">
                  <input
                    id="transparent-bg"
                    type="checkbox"
                    checked={transparentBackground}
                    onChange={(e) => setTransparentBackground(e.target.checked)}
                    className="h-4 w-4! rounded border-neutral-300 p-0!"
                  />
                  <label htmlFor="transparent-bg" className="text-sm! text-neutral-800">
                    {t.transparentBackground}
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <Text variant="small" tone="muted" as="span">
                    {t.backgroundColor}
                  </Text>
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    disabled={transparentBackground}
                    className="h-8! w-7! cursor-pointer border-none bg-white p-0!"
                  />
                </div>
              </ToolInfo>

              <ToolInfo className="mt-4 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2">
                  <input id="include-ico" type="checkbox" checked={includeIco} onChange={(e) => setIncludeIco(e.target.checked)} className="h-4 w-4! rounded border-neutral-300 p-0!" />
                  <label htmlFor="include-ico" className="text-sm! text-neutral-800">
                    {t.generateFaviconIco}
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input id="auto-download" type="checkbox" checked={autoDownload} onChange={(e) => setAutoDownload(e.target.checked)} className="h-4 w-4! rounded border-neutral-300 p-0!" />
                  <label htmlFor="auto-download" className="text-sm! text-neutral-800">
                    {t.autoDownload}
                  </label>
                </div>
              </ToolInfo>
            </div>

            <div>
              <p className="mt-8 mb-2 font-semibold uppercase">{t.generateAndDownload}</p>

              <div className="flex flex-wrap gap-3">
                <Button type="submit" variant="accent" size="small" disabled={!hasSource || isProcessing} className="disabled:opacity-60">
                  {isProcessing ? t.generating : t.generate}
                </Button>
                <Button onClick={handleDownloadAll} type="button" size="small" disabled={!anyOutputs} className="disabled:opacity-40">
                  {t.downloadAll}
                </Button>
                <Button onClick={handleClear} type="button" size="small" disabled={isProcessing || (!hasSource && !anyOutputs)} className="disabled:opacity-40">
                  {t.clear}
                </Button>
              </div>

              {status === 'processing' && (
                <ToolAlert variant="info" className="mt-2">
                  {t.processing}
                </ToolAlert>
              )}
              {status === 'done' && !error && (
                <ToolAlert variant="success" className="mt-2">
                  {t.done}
                </ToolAlert>
              )}
            </div>
          </form>
        </ToolSection>

        <ToolSection aria-label={t.previewAndFilesLabel} className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <Heading as="h2" className="h6">
              {t.previewAndFiles}
            </Heading>
            {anyOutputs && (
              <Text variant="xs" tone="muted" as="p">
                {t.totalSize} <strong>{formatBytes(totalSize)}</strong>
              </Text>
            )}
          </div>

          {!hasSource && !anyOutputs && (
            <Text variant="xs" tone="muted" as="p">
              {t.addImageToGenerate}
            </Text>
          )}

          {hasSource && (
            <ToolInfo className="flex flex-wrap items-center gap-4">
              <div>
                <Eyebrow variant="dynamic" className="mb-2 text-xs font-semibold tracking-wide">
                  {t.previewBaseImage}
                </Eyebrow>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded border border-neutral-300 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {sourcePreviewUrl && <img src={sourcePreviewUrl} alt={t.previewFavicon} className="h-full w-full object-cover" />}
                    </div>
                    <Text variant="xs" tone="muted" as="span">
                      {t.approximatePreview}
                    </Text>
                  </div>

                  <div className="hidden items-center gap-2 md:flex">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded border border-neutral-300 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {sourcePreviewUrl && <img src={sourcePreviewUrl} alt={t.largeIconPreview} className="h-full w-full object-cover" />}
                    </div>
                    <Text variant="xs" tone="muted" as="span">
                      {t.largeIconPreview}
                    </Text>
                  </div>
                </div>
              </div>
            </ToolInfo>
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
                      title={t.clickToPreview}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.url} alt={item.fileName} className="h-full w-full object-cover" />
                    </button>

                    <div className="min-w-0 flex-1">
                      <div title={item.fileName}>
                        <Text as="p" variant="small" className="truncate font-medium">
                          {item.fileName}
                        </Text>
                      </div>
                      <Text as="p" variant="xs" tone="muted" className="text-xs!">
                        {item.label} · {formatBytes(item.sizeBytes)}
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Badge as="a" href={item.url} download={item.fileName} variant="default" size="md" className="cursor-pointer border-black/15">
                      {t.download}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ToolSection>
      </div>
    </>
  );
}


