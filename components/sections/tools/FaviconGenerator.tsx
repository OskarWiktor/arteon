'use client';

import { useMemo, useState, type FormEvent } from 'react';
import Button from '@/components/ui/buttons/Button';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolInfo from '@/components/ui/tools/ToolInfo';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import ToolFileDropzone from '@/components/ui/tools/ToolFileDropzone';
import Badge from '@/components/ui/Badge';
import { rgbToHex } from '@/lib/tools/color/convert';
import { downloadFromUrl } from '@/lib/tools/download';
import { type FaviconOutputFile, generateFaviconOutputs } from '@/lib/tools/favicon/generator';
import { formatBytes } from '@/lib/tools/formatBytes';
import { isSupportedImageUploadType, SUPPORTED_IMAGE_UPLOAD_TYPES } from '@/lib/tools/image/uploadTypes';
import { loadImage } from '@/lib/tools/loadImage';
import { revokeObjectUrl } from '@/lib/tools/objectUrl';
import { createZipBlob, type ZipFileInput } from '@/lib/tools/zip';
import { useLocale } from '@/lib/LocaleContext';

function createWebmanifest(outputs: FaviconOutputFile[], backgroundColor: string, locale: 'pl' | 'en' = 'pl') {
  const icons = outputs
    .filter((o) => o.type === 'png' && typeof o.size === 'number')
    .map((o) => ({
      src: o.fileName,
      sizes: `${o.size}x${o.size}`,
      type: 'image/png',
    }));

  const manifest = {
    name: locale === 'en' ? 'Your website' : 'Twoja strona',
    short_name: locale === 'en' ? 'Site' : 'Strona',
    icons,
    theme_color: backgroundColor,
    background_color: backgroundColor,
    display: 'standalone',
  };

  return JSON.stringify(manifest, null, 2);
}

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
    pngSizes: 'Rozmiary PNG',
    transparentBackground: 'Przezroczyste tło (PNG/ICO)',
    backgroundColor: 'Kolor tła:',
    generateFaviconIco: 'Wygeneruj plik favicon.ico (bazowo 32x32)',
    includeWebmanifest: 'Dołącz site.webmanifest (opcjonalnie)',
    autoDownload: 'Automatycznie pobierz pliki po wygenerowaniu',
    generateAndDownload: 'Wygeneruj i pobierz favicon',
    generating: 'Generuję favicon…',
    generate: 'Generuj favicon',
    downloadAll: 'Pobierz wszystkie',
    downloadZip: 'Pobierz paczkę (.zip)',
    zipping: 'Przygotowuję paczkę ZIP…',
    zipGenerationError: 'Nie udało się przygotować paczki ZIP.',
    clear: 'Wyczyść',
    processing: 'Przetwarzam obraz i generuję pliki favicon…',
    done: 'Gotowe! Wygenerowano pliki favicon. Niżej znajdziesz listę plików.',
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
  en: {
    canvasNotSupported: 'Canvas is not supported in this browser.',
    pngGenerationError: 'Failed to generate the PNG file.',
    imageLoadError: 'Failed to load the image. Try again or use a different file.',
    supportedFormatsOnly: 'Only PNG, JPG/JPEG and SVG files are supported.',
    addBaseImage: 'First add a base image (PNG, JPG or SVG).',
    selectAtLeastOne: 'Select at least one PNG size or the favicon.ico option.',
    unexpectedError: 'An unexpected error occurred while generating the favicon.',
    addBaseImageLabel: 'Add base image',
    dragDropImage: 'Drag and drop an image here',
    clickToSelect: 'or click to select a file from your device',
    supportedFormats: 'Supported: PNG, JPG/JPEG, SVG',
    selectedFile: 'Selected file:',
    setSizesAndBackground: 'Set sizes and background',
    pngSizes: 'PNG sizes',
    transparentBackground: 'Transparent background (PNG/ICO)',
    backgroundColor: 'Background color:',
    generateFaviconIco: 'Generate favicon.ico file (32x32 base)',
    includeWebmanifest: 'Include site.webmanifest (optional)',
    autoDownload: 'Auto-download files after generation',
    generateAndDownload: 'Generate and download favicon',
    generating: 'Generating favicon\u2026',
    generate: 'Generate favicon',
    downloadAll: 'Download all',
    downloadZip: 'Download package (.zip)',
    zipping: 'Preparing ZIP archive\u2026',
    zipGenerationError: 'Failed to prepare the ZIP archive.',
    clear: 'Clear',
    processing: 'Processing image and generating favicon files\u2026',
    done: 'Done! Favicon files generated. See the file list below.',
    previewAndFiles: 'Preview and favicon files',
    totalSize: 'Total size:',
    addImageToGenerate: 'Add an image on the left to generate favicon.ico and a set of PNG icons compliant with current guidelines.',
    previewBaseImage: 'Base image preview',
    previewFavicon: 'Favicon preview',
    approximatePreview: 'Approximate favicon preview at small size',
    largeIconPreview: 'Large icon (e.g. PWA)',
    clickToPreview: 'Click to open preview in a new tab',
    download: 'Download',
    previewAndFilesLabel: 'Favicon preview and generated file list',
    faviconIcoLabel: 'favicon.ico (32x32 in ICO container)',
  },
} as const;

type FileStatus = 'idle' | 'processing' | 'done' | 'error';

const PNG_SIZES = [16, 32, 180, 192, 512];

const DEFAULT_BACKGROUND_COLOR = rgbToHex({ r: 255, g: 255, b: 255 });

export default function FaviconGenerator() {
  const locale = useLocale();
  const t = ui[locale];
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [sourcePreviewUrl, setSourcePreviewUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<FileStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const [selectedSizes, setSelectedSizes] = useState<number[]>([16, 32, 180, 192, 512]);
  const [includeIco, setIncludeIco] = useState(true);
  const [transparentBackground, setTransparentBackground] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR);
  const [includeWebmanifest, setIncludeWebmanifest] = useState(false);
  const [autoDownload, setAutoDownload] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  const [outputs, setOutputs] = useState<FaviconOutputFile[]>([]);

  function revokeOutputs(urls: FaviconOutputFile[]) {
    urls.forEach((o) => revokeObjectUrl(o.url));
  }

  function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;

    if (!isSupportedImageUploadType(file)) {
      setError(t.supportedFormatsOnly);
      setSourceFile(null);
      if (sourcePreviewUrl) {
        revokeObjectUrl(sourcePreviewUrl);
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

    revokeObjectUrl(sourcePreviewUrl);

    const preview = URL.createObjectURL(file);
    setSourceFile(file);
    setSourcePreviewUrl(preview);
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
      const img = await loadImage(sourcePreviewUrl, { crossOrigin: 'anonymous', errorMessage: t.imageLoadError });

      const newOutputs = await generateFaviconOutputs({
        img,
        pngSizes: selectedSizes,
        includeIco,
        backgroundColor,
        transparentBackground,
        faviconIcoLabel: t.faviconIcoLabel,
        canvasNotSupportedErrorMessage: t.canvasNotSupported,
        pngGenerationErrorMessage: t.pngGenerationError,
        onOutput: (output) => {
          if (autoDownload) {
            downloadFromUrl(output.url, output.fileName);
          }
        },
      });

      setOutputs(newOutputs);
      setStatus('done');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setError(err instanceof Error ? err.message : t.unexpectedError);
    }
  }

  async function handleDownloadZip() {
    if (!outputs.length) return;

    setError(null);
    setIsZipping(true);

    try {
      const files: ZipFileInput[] = [];

      for (const output of outputs) {
        const res = await fetch(output.url);
        const blob = await res.blob();
        const buffer = await blob.arrayBuffer();
        files.push({ path: output.fileName, data: new Uint8Array(buffer) });
      }

      if (includeWebmanifest) {
        const manifest = createWebmanifest(outputs, backgroundColor, locale);
        const manifestBytes = new TextEncoder().encode(manifest);
        files.push({ path: 'site.webmanifest', data: manifestBytes });
      }

      const zipBlob = createZipBlob(files);
      const zipUrl = URL.createObjectURL(zipBlob);
      downloadFromUrl(zipUrl, 'favicons.zip');
      setTimeout(() => revokeObjectUrl(zipUrl), 2000);
    } catch (err) {
      console.error(err);
      setError(t.zipGenerationError);
    } finally {
      setIsZipping(false);
    }
  }

  function handleDownloadAll() {
    if (!outputs.length) return;

    outputs.forEach((item) => {
      downloadFromUrl(item.url, item.fileName);
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
      revokeObjectUrl(sourcePreviewUrl);
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
              <h2 className="h6 mb-2">{t.addBaseImageLabel}</h2>
              <ToolFileDropzone accept={SUPPORTED_IMAGE_UPLOAD_TYPES.join(',')} onFiles={handleFiles} className="tool-upload-area">
                <span className="mb-1 text-sm! font-medium">{t.dragDropImage}</span>
                <span className="text-light mb-2 text-xs!">{t.clickToSelect}</span>
                <Badge variant="default" size="sm" className="bg-white shadow-sm">
                  {t.supportedFormats}
                </Badge>
              </ToolFileDropzone>
              {sourceFile && (
                <p className="text-light mt-2 text-xs!">
                  {t.selectedFile} <strong>{sourceFile.name}</strong> ({formatBytes(sourceFile.size)})
                </p>
              )}
              {error && (
                <ToolAlert variant="error" className="mt-2">
                  {error}
                </ToolAlert>
              )}
            </div>

            <div>
              <h3 className="h6 mt-8 mb-2">{t.setSizesAndBackground}</h3>

              <ToolInfo>
                <p className="mb-2! text-[14px]! font-medium">{t.pngSizes}</p>
                <div className="flex flex-wrap gap-2">
                  {PNG_SIZES.map((size) => {
                    const checked = selectedSizes.includes(size);
                    return (
                      <label
                        key={size}
                        htmlFor={`size-${size}`}
                        className={`inline-flex cursor-pointer items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${checked ? 'bg-primary border-black text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                      >
                        <input type="checkbox" id={`size-${size}`} checked={checked} onChange={() => toggleSize(size)} className="tool-checkbox mr-1.5 align-middle" />
                        {size}x{size}
                      </label>
                    );
                  })}
                </div>
              </ToolInfo>

              <ToolInfo className="mt-4 gap-2">
                <div className="flex items-center gap-2">
                  <input id="transparent-bg" type="checkbox" checked={transparentBackground} onChange={(e) => setTransparentBackground(e.target.checked)} className="tool-checkbox" />
                  <label htmlFor="transparent-bg" className="text-[14px]! font-medium">
                    {t.transparentBackground}
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-light text-xs!">{t.backgroundColor}</span>
                  <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} disabled={transparentBackground} className="tool-color-picker h-8! w-7!" />
                </div>
              </ToolInfo>

              <ToolInfo className="mt-4 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2">
                  <input id="include-ico" type="checkbox" checked={includeIco} onChange={(e) => setIncludeIco(e.target.checked)} className="tool-checkbox" />
                  <label htmlFor="include-ico" className="text-[14px]! font-medium">
                    {t.generateFaviconIco}
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input id="include-webmanifest" type="checkbox" checked={includeWebmanifest} onChange={(e) => setIncludeWebmanifest(e.target.checked)} className="tool-checkbox" />
                  <label htmlFor="include-webmanifest" className="text-[14px]! font-medium">
                    {t.includeWebmanifest}
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input id="auto-download" type="checkbox" checked={autoDownload} onChange={(e) => setAutoDownload(e.target.checked)} className="tool-checkbox" />
                  <label htmlFor="auto-download" className="text-[14px]! font-medium">
                    {t.autoDownload}
                  </label>
                </div>
              </ToolInfo>
            </div>

            <div>
              <h3 className="h6 mt-8 mb-2">{t.generateAndDownload}</h3>

              <div className="flex flex-wrap gap-3">
                <Button type="submit" variant="accent" size="small" disabled={!hasSource || isProcessing} className="disabled:opacity-60">
                  {isProcessing ? t.generating : t.generate}
                </Button>
                <Button onClick={handleDownloadAll} type="button" size="small" disabled={!anyOutputs} className="disabled:opacity-40">
                  {t.downloadAll}
                </Button>
                <Button onClick={handleDownloadZip} type="button" size="small" disabled={!anyOutputs || isProcessing || isZipping} className="disabled:opacity-40">
                  {t.downloadZip}
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
              {isZipping && (
                <ToolAlert variant="info" className="mt-2">
                  {t.zipping}
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
            <h2 className="h6">{t.previewAndFiles}</h2>
            {anyOutputs && (
              <p className="text-light text-xs!">
                {t.totalSize} <strong>{formatBytes(totalSize)}</strong>
              </p>
            )}
          </div>

          {!hasSource && !anyOutputs && (
            <div className="space-y-2 text-sm!">
              {[
                { name: 'favicon.ico', label: 'ICO 32x32', size: '1.1 KB' },
                { name: 'favicon-16x16.png', label: 'PNG 16x16', size: '0.4 KB' },
                { name: 'favicon-32x32.png', label: 'PNG 32x32', size: '0.8 KB' },
                { name: 'apple-touch-icon.png', label: 'PNG 180x180', size: '5.2 KB' },
                { name: 'android-chrome-192x192.png', label: 'PNG 192x192', size: '6.1 KB' },
                { name: 'android-chrome-512x512.png', label: 'PNG 512x512', size: '18.7 KB' },
              ].map((f) => (
                <div key={f.name} className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-dark truncate text-[14px]! font-medium">{f.name}</p>
                    <p className="text-light text-xs!">
                      {f.label} · {f.size}
                    </p>
                  </div>
                  <Badge variant="success" size="md">
                    {t.done}
                  </Badge>
                </div>
              ))}
            </div>
          )}

          {hasSource && (
            <ToolInfo className="flex flex-wrap items-center gap-4">
              <div>
                <p className="mb-2 text-[14px]! font-medium">{t.previewBaseImage}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded border border-neutral-300 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {sourcePreviewUrl && <img src={sourcePreviewUrl} alt={t.previewFavicon} className="h-full w-full object-cover" />}
                    </div>
                    <span className="text-light text-xs!">{t.approximatePreview}</span>
                  </div>

                  <div className="hidden items-center gap-2 md:flex">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded border border-neutral-300 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {sourcePreviewUrl && <img src={sourcePreviewUrl} alt={t.largeIconPreview} className="h-full w-full object-cover" />}
                    </div>
                    <span className="text-light text-xs!">{t.largeIconPreview}</span>
                  </div>
                </div>
              </div>
            </ToolInfo>
          )}

          {anyOutputs && (
            <div className="space-y-2 text-sm!">
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
                        <p className="text-dark truncate text-[14px]! font-medium">{item.fileName}</p>
                      </div>
                      <p className="text-light text-xs!">
                        {item.label} · {formatBytes(item.sizeBytes)}
                      </p>
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
