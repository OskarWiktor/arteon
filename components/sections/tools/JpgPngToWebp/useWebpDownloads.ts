'use client';

import { useCallback, type Dispatch, type SetStateAction } from 'react';
import { getWebpFileName } from '@/lib/tools/image/webp';
import type { WebpQueueItem } from '@/lib/tools/image/webpQueue';
import { sleep } from '@/lib/tools/sleep';

type UseWebpDownloadsOptions = {
  files: WebpQueueItem[];
  setFiles: Dispatch<SetStateAction<WebpQueueItem[]>>;
  triggerDownloadFromUrl: (url: string, filename: string) => void;
};

export function useWebpDownloads(options: UseWebpDownloadsOptions) {
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

  return { handleDownloadAll, handleDownloadSingle };
}
