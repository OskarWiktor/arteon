'use client';

import { useCallback, useRef, useState, type FormEvent } from 'react';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/buttons/Button';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import ToolFileDropzone from '@/components/ui/tools/ToolFileDropzone';
import ToolFileRow from '@/components/ui/tools/ToolFileRow';
import ToolProgressBar from '@/components/ui/tools/ToolProgressBar';
import ToolRangeInput from '@/components/ui/tools/ToolRangeInput';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolUploadContent from '@/components/ui/tools/ToolUploadContent';
import { downloadBlob } from '@/utils/download';
import { formatBytes } from '@/utils/formatBytes';

import FormatSelector from './FormatSelector';
import { useConversionQueue } from './useConversionQueue';
import { FORMAT_EXTENSION, FORMAT_LABELS, hasQualitySlider, type ImageFormatConverterProps } from './types';

export default function ImageFormatConverter({ sourceFormat, targetFormat, acceptMime, defaultQuality }: ImageFormatConverterProps) {
  const showQuality = hasQualitySlider(targetFormat);
  const initialQuality = defaultQuality ?? (targetFormat === 'webp' ? 80 : 85);
  const [quality, setQuality] = useState(initialQuality);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const qualitySetRef = useRef(false);

  const sourceLabel = FORMAT_LABELS[sourceFormat];
  const targetLabel = FORMAT_LABELS[targetFormat];
  const ext = FORMAT_EXTENSION[targetFormat];

  const errorMessages = {
    fileLoad: 'Nie udało się wczytać pliku.',
    imageLoad: 'Nie udało się wczytać obrazu.',
    canvasNotSupported: 'Brak wsparcia dla canvas w przeglądarce.',
    generationError: `Nie udało się wygenerować pliku ${targetLabel}.`,
    fileTooLarge: 'Plik jest za duży (maks. 100 MB).',
  };

  const {
    files,
    isConverting,
    addFiles,
    clearAll,
    removeFile,
    setQuality: setQueueQuality,
    convertAll,
    totalInputSize,
    totalOutputSize,
    pendingCount,
    doneCount,
  } = useConversionQueue({
    targetFormat,
    errorMessages,
  });

  const handleQualityChange = useCallback(
    (v: number) => {
      setQuality(v);
      setQueueQuality(v / 100);
      qualitySetRef.current = true;
    },
    [setQueueQuality],
  );

  // Set initial quality on mount
  if (!qualitySetRef.current) {
    setQueueQuality(initialQuality / 100);
    qualitySetRef.current = true;
  }

  const handleAddFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;
      setGlobalError(null);
      const all = Array.from(fileList);
      const mimeList = acceptMime.split(',').map((m) => m.trim());
      const extMap: Record<string, string[]> = {
        'image/jpeg': ['.jpg', '.jpeg'],
        'image/png': ['.png'],
        'image/webp': ['.webp'],
        'image/gif': ['.gif'],
        'image/bmp': ['.bmp'],
        'image/x-ms-bmp': ['.bmp'],
        'image/x-bmp': ['.bmp'],
        'image/svg+xml': ['.svg'],
      };
      const allowedExts = mimeList.flatMap((m) => extMap[m] ?? []);
      const valid = all.filter((f) => {
        if (f.type && mimeList.some((m) => f.type === m)) return true;
        const name = f.name.toLowerCase();
        return allowedExts.some((ext) => name.endsWith(ext));
      });
      if (valid.length < all.length) {
        setGlobalError(`Dodaj pliki ${sourceLabel} — inne formaty są pomijane.`);
      }
      if (valid.length > 0) addFiles(valid);
    },
    [acceptMime, addFiles, sourceLabel],
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (!files.length) {
        setGlobalError(`Dodaj przynajmniej jeden plik ${sourceLabel}.`);
        return;
      }
      setGlobalError(null);
      void convertAll();
    },
    [files.length, convertAll, sourceLabel],
  );

  const handleDownloadSingle = useCallback(
    (id: string) => {
      const file = files.find((f) => f.id === id);
      if (!file?.outputBlob) return;
      const baseName = file.file.name.replace(/\.[^.]+$/, '');
      downloadBlob(file.outputBlob, `${baseName}${ext}`);
    },
    [files, ext],
  );

  const handleDownloadAll = useCallback(() => {
    const done = files.filter((f) => f.status === 'done' && f.outputBlob);
    for (const file of done) {
      const baseName = file.file.name.replace(/\.[^.]+$/, '');
      downloadBlob(file.outputBlob!, `${baseName}${ext}`);
    }
  }, [files, ext]);

  const total = files.length;
  const completed = files.filter((f) => f.status === 'done' || f.status === 'error').length;
  const progress = total ? Math.round((completed / total) * 100) : 0;
  const anyDone = doneCount > 0;
  const totalSaved = totalInputSize - totalOutputSize;
  const totalSavedPercent = totalInputSize > 0 ? Math.round((Math.abs(totalSaved) / totalInputSize) * 100) : 0;

  return (
    <div className="overflow-hidden">
      <FormatSelector currentSource={sourceFormat} currentTarget={targetFormat} hasFiles={files.length > 0} />

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <ToolSection className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h2 className="h6 mb-2">Dodaj pliki</h2>
              <ToolFileDropzone accept={acceptMime} multiple onFiles={handleAddFiles} className="tool-upload-area">
                <ToolUploadContent dragLabel={`Przeciągnij i upuść pliki ${sourceLabel} tutaj`} clickLabel="lub kliknij, aby wybrać pliki z dysku" formatsLabel={`Obsługiwane: ${sourceLabel}`} />
              </ToolFileDropzone>
              {globalError && (
                <ToolAlert variant="error" className="mt-2">
                  {globalError}
                </ToolAlert>
              )}
            </div>

            {showQuality && (
              <div>
                <h3 className="h6 mt-8 mb-2">Ustaw jakość {targetLabel}</h3>
                <ToolRangeInput
                  value={quality}
                  min={60}
                  max={95}
                  onChange={handleQualityChange}
                  suffix="%"
                  helper="Niższa wartość = mniejsza waga plików, wyższa = lepsza jakość. 80–85% to dobry kompromis."
                />
              </div>
            )}

            <div>
              <h3 className="h6 mt-8 mb-2">Konwertuj i pobierz</h3>
              {total > 0 && (
                <div className="mb-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="tool-meta">
                      W kolejce: <strong>{total}</strong> plików
                    </span>
                    <span className="tool-meta">
                      Zakończone: {completed} / {total}
                    </span>
                  </div>
                  <ToolProgressBar value={progress} ariaLabel={`${completed} / ${total}`} />
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-3">
                <Button variant="accent" disabled={isConverting || !files.length} className="disabled:opacity-60" type="submit" size="small">
                  {isConverting ? 'Konwertuję…' : 'Konwertuj'}
                </Button>
                <Button onClick={handleDownloadAll} disabled={!anyDone} className="disabled:opacity-40" size="small">
                  Pobierz wszystkie
                </Button>
                <Button onClick={clearAll} disabled={!files.length || isConverting} className="disabled:opacity-40" size="small">
                  Wyczyść wszystko
                </Button>
              </div>

              {totalInputSize > 0 && (
                <div className="mt-6">
                  <p className="tool-meta">
                    Łączny rozmiar wejściowy: <strong>{formatBytes(totalInputSize)}</strong>
                  </p>
                  {totalOutputSize > 0 && (
                    <>
                      <p className="tool-meta">
                        Łączny rozmiar po konwersji: <strong>{formatBytes(totalOutputSize)}</strong>
                      </p>
                      <p className="tool-meta">
                        {totalSaved >= 0 ? (
                          <>
                            Zaoszczędzono:{' '}
                            <strong>
                              {formatBytes(totalSaved)} (~{totalSavedPercent}% mniej)
                            </strong>
                          </>
                        ) : (
                          <>
                            Zwiększono:{' '}
                            <strong>
                              {formatBytes(Math.abs(totalSaved))} (~{totalSavedPercent}% więcej)
                            </strong>
                          </>
                        )}
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          </form>
        </ToolSection>

        <ToolSection aria-label="Lista plików w kolejce" className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h2 className="h6">Pliki w kolejce</h2>
            {files.length > 0 && (
              <p className="tool-meta">
                Gotowe: {doneCount} · W trakcie: {pendingCount}
              </p>
            )}
          </div>

          {files.length === 0 && (
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-6 text-center">
              <p className="tool-meta">
                Dodaj pliki {sourceLabel} po lewej stronie, aby rozpocząć konwersję na {targetLabel}.
              </p>
            </div>
          )}

          {files.length > 0 && (
            <div className="space-y-2 text-sm!">
              {files.map((item) => {
                const statusLabel = item.status === 'pending' ? 'Oczekuje' : item.status === 'processing' ? 'Przetwarzanie…' : item.status === 'done' ? 'Gotowe' : 'Błąd';

                const diffPercent = item.outputSize > 0 && item.inputSize > 0 ? Math.round(((item.inputSize - item.outputSize) / item.inputSize) * 100) : null;

                return (
                  <ToolFileRow
                    key={item.id}
                    name={item.file.name}
                    meta={
                      <>
                        Przed: {formatBytes(item.inputSize)}
                        {item.status === 'done' && item.outputSize > 0 && (
                          <>
                            {' · '}Po: {formatBytes(item.outputSize)}
                            {diffPercent !== null && (
                              <>
                                {' ('}
                                {Math.abs(diffPercent)}% {diffPercent >= 0 ? 'mniej' : 'więcej'}
                                {')'}
                              </>
                            )}
                          </>
                        )}
                        {item.errorMessage && <span className="text-error-text ml-1">{item.errorMessage}</span>}
                      </>
                    }
                    actions={
                      <div className="flex items-center gap-1">
                        <Badge variant={item.status === 'done' ? 'success' : item.status === 'error' ? 'error' : 'neutral'} size="md">
                          {statusLabel}
                        </Badge>
                        {item.status === 'done' && (
                          <Badge as="button" type="button" onClick={() => handleDownloadSingle(item.id)} variant="default" size="md" className="cursor-pointer border-black/15">
                            Pobierz
                          </Badge>
                        )}
                        {item.status !== 'processing' && (
                          <Badge as="button" type="button" onClick={() => removeFile(item.id)} variant="default" size="sm" className="text-light hover:text-dark cursor-pointer">
                            Usuń
                          </Badge>
                        )}
                      </div>
                    }
                  />
                );
              })}
            </div>
          )}
        </ToolSection>
      </div>
    </div>
  );
}
