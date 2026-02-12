'use client';

import { useEffect, useMemo, useState } from 'react';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolInfo from '@/components/ui/tools/ToolInfo';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import ToolFileDropzone from '@/components/ui/tools/ToolFileDropzone';
import ToolColorSwatch from '@/components/ui/tools/ToolColorSwatch';
import ToolUploadContent from '@/components/ui/tools/ToolUploadContent';
import type { ToolStatus } from '@/lib/tools/types';
import { revokeObjectUrl } from '@/lib/tools/objectUrl';
import { formatBytes } from '@/lib/tools/formatBytes';
import { getFileFormatLabel } from '@/lib/tools/fileFormat';
import { getDownscaledImageDataFromUrl } from '@/lib/tools/image/canvas';
import { isSupportedImageUploadType, SUPPORTED_IMAGE_UPLOAD_TYPES } from '@/lib/tools/image/uploadTypes';
import { extractPalette, type ExtractedColor } from '@/lib/tools/color/extractPalette';
import { useLocale, type Locale } from '@/lib/LocaleContext';

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
    previewAlt: 'Podgląd',
  },
  en: {
    unsupportedFormatsOnly: 'This file is not supported. Upload a PNG, JPG/JPEG or SVG.',
    unexpectedError: 'Failed to analyze the image. Try again or use a different file.',
    addImageLabel: 'Add image',
    dragDropImage: 'Drag and drop an image here',
    clickToSelect: 'or click to select a file from your device',
    supportedFormats: 'Supported: PNG, JPG/JPEG, SVG',
    preview: 'Preview and palette',
    addImageToStart: 'Upload an image and the tool will show its dominant colors. Copy each code with a single click — perfect for UI, branding, and social media.',
    processing: 'Analyzing image and creating palette…',
    colorPreview: 'Color preview',
    copy: 'Copy',
    copied: 'Copied',
    empty: 'Could not detect dominant colors. Try a different image.',
    selectedFile: 'Selected file:',
    copyHint: 'Click "Copy" to copy the color code.',
    previewAlt: 'Preview',
  },
} as const satisfies Record<Locale, unknown>;

export default function PaletteExtractor() {
  const locale = useLocale();
  const t = ui[locale];

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [colors, setColors] = useState<ExtractedColor[]>([]);
  const [status, setStatus] = useState<ToolStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const isProcessing = status === 'processing';

  const inputFormat = useMemo(() => getFileFormatLabel(file), [file]);

  const fileSize = useMemo(() => (file ? formatBytes(file.size) : null), [file]);

  function handleFileSelected(next: File) {
    if (!isSupportedImageUploadType(next)) {
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
          <h2 className="h6 mb-2">{t.addImageLabel}</h2>
          <ToolFileDropzone
            accept={SUPPORTED_IMAGE_UPLOAD_TYPES.join(',')}
            disabled={isProcessing}
            onFiles={handleFiles}
            className={`tool-upload-area ${isProcessing ? 'cursor-not-allowed opacity-60' : ''}`}
          >
            <ToolUploadContent dragLabel={t.dragDropImage} clickLabel={t.clickToSelect} formatsLabel={t.supportedFormats} />
          </ToolFileDropzone>

          {file && (
            <p className="tool-meta mt-2">
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
            <p className="tool-meta">
              {fileSize} · <strong>{inputFormat}</strong>
            </p>
          )}
        </div>

        {!previewUrl && (
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { hex: '#2C5F2D', rgb: '44, 95, 45' },
              { hex: '#97BC62', rgb: '151, 188, 98' },
              { hex: '#F2E8CF', rgb: '242, 232, 207' },
              { hex: '#D4A373', rgb: '212, 163, 115' },
              { hex: '#6B705C', rgb: '107, 112, 92' },
              { hex: '#A5A58D', rgb: '165, 165, 141' },
            ].map((c) => (
              <ToolColorSwatch key={c.hex} hex={c.hex} secondaryText={`rgb(${c.rgb})`} ariaLabelPrefix={t.colorPreview} />
            ))}
          </div>
        )}

        {status === 'processing' && previewUrl && <ToolAlert variant="info">{t.processing}</ToolAlert>}

        {status === 'error' && previewUrl && error && <ToolAlert variant="error">{error}</ToolAlert>}

        {previewUrl && (
          <ToolInfo>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded border border-neutral-300 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={previewUrl} alt={file?.name || t.previewAlt} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="tool-value text-dark truncate">{file?.name}</p>
                <ToolHelper className="text-xs!">{t.copyHint}</ToolHelper>
              </div>
            </div>
          </ToolInfo>
        )}

        {colors.length > 0 && (
          <div className="grid gap-2 sm:grid-cols-2">
            {colors.map((color) => (
              <ToolColorSwatch
                key={color.hex}
                hex={color.hex}
                secondaryText={`rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`}
                ariaLabelPrefix={t.colorPreview}
                copyLabel={t.copy}
                copiedLabel={t.copied}
              />
            ))}
          </div>
        )}

        {colors.length === 0 && previewUrl && status === 'done' && <p className="tool-meta">{t.empty}</p>}
      </ToolSection>
    </div>
  );
}
