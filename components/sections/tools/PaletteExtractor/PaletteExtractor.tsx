'use client';

import { useEffect, useMemo, useState } from 'react';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolInfo from '@/components/ui/tools/ToolInfo';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import ImageDropzone from '@/components/sections/tools/PaletteExtractor/components/ImageDropzone';
import PaletteSwatches from '@/components/sections/tools/PaletteExtractor/components/PaletteSwatches';
import PaletteActions from '@/components/sections/tools/PaletteExtractor/components/PaletteActions';
import { revokeObjectUrl } from '@/lib/tools/objectUrl';
import { formatBytes } from '@/lib/tools/formatBytes';
import { getDownscaledImageDataFromUrl } from '@/lib/tools/image/canvas';
import { extractPalette, type ExtractedColor } from '@/lib/tools/color/extractPalette';

const ui = {
  pl: {
    unsupportedFormatsOnly: 'Obsługiwane są wyłącznie pliki PNG, JPG/JPEG oraz SVG.',
    unexpectedError: 'Wystąpił nieoczekiwany błąd podczas analizy obrazu.',
    addImageLabel: 'Dodaj obraz',
    dragDropImage: 'Przeciągnij i upuść obraz tutaj',
    clickToSelect: 'lub kliknij, aby wybrać plik z dysku',
    supportedFormats: 'Obsługiwane: PNG, JPG/JPEG, SVG',
    preview: 'Podgląd',
    palette: 'Paleta kolorów',
    addImageToStart: 'Dodaj obraz po lewej stronie, aby wyciągnąć dominujące kolory i skopiować je jako HEX.',
    processing: 'Analizuję obraz i wyciągam dominujące kolory…',
    copyHint: 'Skopiuj kolor HEX przyciskiem obok wybranego koloru.',
  },
} as const;

type Status = 'idle' | 'processing' | 'done' | 'error';

const SUPPORTED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'] as const;

export default function PaletteExtractor() {
  const t = ui.pl;

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [colors, setColors] = useState<ExtractedColor[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const isProcessing = status === 'processing';

  const inputFormat = useMemo(() => {
    if (!file) return null;
    const name = file.name;
    const extMatch = name.match(/\.([^.]+)$/);
    if (extMatch && extMatch[1]) return extMatch[1].toUpperCase();
    if (file.type && file.type.includes('/')) {
      const [, sub] = file.type.split('/');
      return sub.toUpperCase();
    }
    return 'N/D';
  }, [file]);

  const fileSize = useMemo(() => (file ? formatBytes(file.size) : null), [file]);

  const clearDisabled = isProcessing || (!file && colors.length === 0);

  function clearAll() {
    setStatus('idle');
    setError(null);
    setColors([]);
    setFile(null);
    revokeObjectUrl(previewUrl);
    setPreviewUrl(null);
  }

  function handleFileSelected(next: File) {
    if (!SUPPORTED_TYPES.includes(next.type as (typeof SUPPORTED_TYPES)[number])) {
      setError(t.unsupportedFormatsOnly);
      setFile(null);
      setColors([]);
      setStatus('error');
      revokeObjectUrl(previewUrl);
      setPreviewUrl(null);
      return;
    }

    setError(null);
    setStatus('idle');
    setColors([]);

    revokeObjectUrl(previewUrl);
    const url = URL.createObjectURL(next);

    setFile(next);
    setPreviewUrl(url);
  }

  useEffect(() => {
    return () => {
      revokeObjectUrl(previewUrl);
    };
  }, [previewUrl]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!previewUrl) return;

      setStatus('processing');
      setError(null);
      setColors([]);

      try {
        const imageData = await getDownscaledImageDataFromUrl(previewUrl, { errorMessage: t.unexpectedError });
        if (cancelled) return;

        const palette = extractPalette(imageData);
        setColors(palette);
        setStatus('done');
      } catch (err) {
        if (cancelled) return;
        console.error(err);
        setStatus('error');
        setError(err instanceof Error ? err.message : t.unexpectedError);
      }
    }

    void run();

    return () => {
      cancelled = true;
    };
  }, [previewUrl, t.unexpectedError]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <ToolSection className="space-y-4">
          <ImageDropzone
            label={t.addImageLabel}
            dragDropText={t.dragDropImage}
            clickToSelectText={t.clickToSelect}
            supportedFormatsText={t.supportedFormats}
            accept={SUPPORTED_TYPES.join(',')}
            file={file}
            error={error}
            disabled={isProcessing}
            onFileSelected={handleFileSelected}
          />

          <PaletteActions colors={colors} clearDisabled={clearDisabled} onClear={clearAll} />

          {status === 'processing' && (
            <ToolAlert variant="info" className="mt-2">
              {t.processing}
            </ToolAlert>
          )}
        </ToolSection>

        <ToolSection aria-label={t.preview} className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="h6">{t.preview}</h2>
            {file && (
              <p className="text-xs text-light">
                {fileSize} · <strong>{inputFormat}</strong>
              </p>
            )}
          </div>

          {!previewUrl && <p className="text-xs text-light">{t.addImageToStart}</p>}

          {previewUrl && (
            <ToolInfo>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded border border-neutral-300 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={previewUrl} alt={file?.name || 'Podgląd'} className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-dark truncate font-medium">{file?.name}</p>
                  <p className="text-xs text-light">{t.copyHint}</p>
                </div>
              </div>
            </ToolInfo>
          )}

          <div className="space-y-2">
            <h2 className="h6">{t.palette}</h2>
            <PaletteSwatches colors={colors} />
          </div>
        </ToolSection>
      </div>
    </div>
  );
}
