'use client';

import { useEffect, useMemo, useState } from 'react';
import CopyButton from '@/components/ui/buttons/CopyButton';
import Badge from '@/components/ui/Badge';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolInfo from '@/components/ui/tools/ToolInfo';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import ToolFileDropzone from '@/components/ui/tools/ToolFileDropzone';
import { revokeObjectUrl } from '@/lib/tools/objectUrl';
import { formatBytes } from '@/lib/tools/formatBytes';
import { getFileFormatLabel } from '@/lib/tools/fileFormat';
import { getDownscaledImageDataFromUrl } from '@/lib/tools/image/canvas';
import { extractPalette, type ExtractedColor } from '@/lib/tools/color/extractPalette';

const ui = {
  pl: {
    unsupportedFormatsOnly: 'Ten plik nie jest obsługiwany. Wgraj PNG, JPG/JPEG lub SVG.',
    unexpectedError: 'Nie udało się przeanalizować obrazu. Spróbuj ponownie lub użyj innego pliku.',
    addImageLabel: 'Dodaj obraz',
    dragDropImage: 'Przeciągnij i upuść obraz tutaj',
    clickToSelect: 'lub kliknij, aby wybrać plik z dysku',
    supportedFormats: 'Obsługiwane: PNG, JPG/JPEG, SVG',
    preview: 'Podgląd i paleta',
    addImageToStart: 'Wgraj obraz, a narzędzie pokaże jego dominujące kolory. Każdy kod skopiujesz jednym kliknięciem - idealne do UI, brandingu i social mediów.',
    processing: 'Analizuję obraz i tworzę paletę…',
    colorPreview: 'Podgląd koloru',
    copy: 'Kopiuj',
    copied: 'Skopiowano',
    empty: 'Nie udało się wykryć dominujących kolorów. Spróbuj innego obrazu.',
    selectedFile: 'Wybrany plik:',
    copyHint: 'Kliknij „Kopiuj”, aby skopiować kod koloru.',
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

  const inputFormat = useMemo(() => getFileFormatLabel(file), [file]);

  const fileSize = useMemo(() => (file ? formatBytes(file.size) : null), [file]);

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

  function handleFiles(files: FileList | null) {
    const selected = files?.[0];
    if (!selected) return;
    handleFileSelected(selected);
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
    <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <ToolSection className="space-y-4">
        <div>
          <p className="mb-2 font-semibold uppercase">{t.addImageLabel}</p>
          <ToolFileDropzone accept={SUPPORTED_TYPES.join(',')} disabled={isProcessing} onFiles={handleFiles} className={`tool-upload-area ${isProcessing ? 'cursor-not-allowed opacity-60' : ''}`}>
            <span className="mb-1 text-sm font-medium">{t.dragDropImage}</span>
            <span className="text-light mb-2 text-xs">{t.clickToSelect}</span>
            <Badge variant="default" size="sm" className="bg-white shadow-sm">
              {t.supportedFormats}
            </Badge>
          </ToolFileDropzone>

          {file && (
            <p className="text-light mt-2 text-xs">
              {t.selectedFile} <strong>{file.name}</strong> ({fileSize})
            </p>
          )}

          {error && !previewUrl && (
            <ToolAlert variant="error" className="mt-2">
              {error}
            </ToolAlert>
          )}
        </div>
      </ToolSection>

      <ToolSection aria-label={t.preview} className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="h6">{t.preview}</h2>
          {file && (
            <p className="text-light text-xs">
              {fileSize} · <strong>{inputFormat}</strong>
            </p>
          )}
        </div>

        {!previewUrl && <p className="text-light text-xs">{t.addImageToStart}</p>}

        {status === 'processing' && previewUrl && <ToolAlert variant="info">{t.processing}</ToolAlert>}

        {status === 'error' && previewUrl && error && <ToolAlert variant="error">{error}</ToolAlert>}

        {previewUrl && (
          <ToolInfo>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded border border-neutral-300 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={previewUrl} alt={file?.name || 'Podgląd'} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-dark truncate text-sm font-medium">{file?.name}</p>
                <ToolHelper className="text-[11px]!">{t.copyHint}</ToolHelper>
              </div>
            </div>
          </ToolInfo>
        )}

        {colors.length > 0 && (
          <div className="grid gap-2 sm:grid-cols-2">
            {colors.map((color) => (
              <div key={color.hex} className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2">
                <div className="h-9 w-9 rounded-lg border border-black/10" style={{ backgroundColor: color.hex }} aria-label={`${t.colorPreview} ${color.hex}`} />
                <div className="min-w-0 flex-1">
                  <p className="text-dark text-sm leading-tight font-medium">{color.hex}</p>
                  <p className="text-light truncate text-[11px]!">
                    rgb({color.rgb.r}, {color.rgb.g}, {color.rgb.b})
                  </p>
                </div>
                <CopyButton text={color.hex} label={t.copy} copiedLabel={t.copied} />
              </div>
            ))}
          </div>
        )}

        {colors.length === 0 && previewUrl && status === 'done' && <p className="text-light text-xs">{t.empty}</p>}
      </ToolSection>
    </div>
  );
}
