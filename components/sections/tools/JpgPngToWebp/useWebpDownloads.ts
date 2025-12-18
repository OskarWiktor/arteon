'use client';

import { useCallback, useState, type Dispatch, type SetStateAction } from 'react';
import { getWebpFileName } from '@/lib/tools/image/webp';
import { buildWebpConversionReportCsv } from '@/lib/tools/image/webpReport';
import type { WebpQueueItem } from '@/lib/tools/image/webpQueue';
import { createZipBlob, type ZipFileInput } from '@/lib/tools/zip';
import { revokeObjectUrl } from '@/lib/tools/objectUrl';
import { sleep } from '@/lib/tools/sleep';

type UseWebpDownloadsOptions = {
  files: WebpQueueItem[];
  setFiles: Dispatch<SetStateAction<WebpQueueItem[]>>;
  triggerDownloadFromUrl: (url: string, filename: string) => void;
  zipGenerationError: string;
};

export function useWebpDownloads(options: UseWebpDownloadsOptions) {
  const [isZipping, setIsZipping] = useState(false);
  const [zipError, setZipError] = useState<string | null>(null);

  const handleDownloadAll = useCallback(async () => {
    const ready = options.files.filter((f) => f.status === 'done' && f.downloadUrl);
    if (!ready.length) return;

    for (const item of ready) {
      const url = item.downloadUrl!;
      const filename = getWebpFileName(item.file.name);

      options.triggerDownloadFromUrl(url, filename);

      options.setFiles((prev) =>
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
  }, [options.files, options.setFiles, options.triggerDownloadFromUrl]);

  const handleDownloadZip = useCallback(
    async ({ includeCsvReport }: { includeCsvReport: boolean }) => {
      const ready = options.files.filter((f) => f.status === 'done' && f.downloadUrl);
      if (!ready.length) return;

      setZipError(null);
      setIsZipping(true);

      try {
        const files: ZipFileInput[] = [];

        for (const item of ready) {
          const url = item.downloadUrl!;
          const filename = getWebpFileName(item.file.name);

          const res = await fetch(url);
          const blob = await res.blob();
          const buffer = await blob.arrayBuffer();
          files.push({ path: filename, data: new Uint8Array(buffer) });
        }

        if (includeCsvReport) {
          const csv = buildWebpConversionReportCsv(
            options.files.map((f) => ({
              name: f.file.name,
              inputSize: f.inputSize,
              outputSize: f.outputSize,
              ratio: f.ratio,
              usedQuality: f.usedQuality,
              status: f.status,
              error: f.error,
            })),
          );
          files.push({ path: 'raport-konwersji-webp.csv', data: new TextEncoder().encode(csv) });
        }

        const zipBlob = createZipBlob(files);
        const zipUrl = URL.createObjectURL(zipBlob);
        options.triggerDownloadFromUrl(zipUrl, 'webp.zip');
        setTimeout(() => revokeObjectUrl(zipUrl), 2000);

        const downloadedIds = new Set(ready.map((f) => f.id));
        options.setFiles((prev) =>
          prev.map((f) =>
            downloadedIds.has(f.id)
              ? {
                  ...f,
                  downloaded: true,
                }
              : f,
          ),
        );
      } catch (err) {
        console.error(err);
        setZipError(options.zipGenerationError);
      } finally {
        setIsZipping(false);
      }
    },
    [options.files, options.setFiles, options.triggerDownloadFromUrl, options.zipGenerationError],
  );

  const handleDownloadSingle = useCallback(
    (id: string) => {
      const item = options.files.find((f) => f.id === id);
      if (!item || !item.downloadUrl) return;

      const filename = getWebpFileName(item.file.name);
      options.triggerDownloadFromUrl(item.downloadUrl, filename);

      options.setFiles((prev) =>
        prev.map((f) =>
          f.id === id
            ? {
                ...f,
                downloaded: true,
              }
            : f,
        ),
      );
    },
    [options.files, options.setFiles, options.triggerDownloadFromUrl],
  );

  return { handleDownloadAll, handleDownloadZip, handleDownloadSingle, isZipping, zipError, setZipError };
}
