'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createWebpQueueItems, type WebpQueueItem } from '@/lib/tools/image/webpQueue';
import { revokeObjectUrl, revokeObjectUrls } from '@/lib/tools/objectUrl';

type UseWebpQueueOptions = {
  addJpgPngOnlyError: string;
};

export function useWebpQueue(options: UseWebpQueueOptions) {
  const [files, setFiles] = useState<WebpQueueItem[]>([]);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const urlsRef = useRef<Array<string | null | undefined>>([]);

  useEffect(() => {
    urlsRef.current = files.flatMap((f) => [f.downloadUrl, f.previewUrl]);
  }, [files]);

  useEffect(() => {
    return () => {
      revokeObjectUrls(urlsRef.current);
    };
  }, []);

  const addFiles = useCallback(
    (list: FileList | null) => {
      if (!list?.length) return;

      setGlobalError(null);
      const selected = Array.from(list);

      setFiles((prev) => {
        const newItems = createWebpQueueItems(selected, prev);

        if (!newItems.length && !prev.length) {
          setGlobalError(options.addJpgPngOnlyError);
        }

        return [...prev, ...newItems];
      });
    },
    [options.addJpgPngOnlyError],
  );

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => {
      const item = prev.find((f) => f.id === id);
      revokeObjectUrls([item?.downloadUrl, item?.previewUrl]);
      return prev.filter((f) => f.id !== id);
    });
  }, []);

  const reconvertFile = useCallback((id: string) => {
    setFiles((prev) =>
      prev.map((f) => {
        if (f.id !== id) return f;

        revokeObjectUrl(f.downloadUrl);

        return {
          ...f,
          status: 'pending',
          error: undefined,
          outputSize: undefined,
          ratio: undefined,
          downloadUrl: undefined,
          downloaded: false,
          usedQuality: undefined,
        };
      }),
    );
  }, []);

  const clearAll = useCallback(() => {
    setFiles((prev) => {
      revokeObjectUrls(prev.flatMap((f) => [f.downloadUrl, f.previewUrl]));
      return [];
    });
    setGlobalError(null);
  }, []);

  const previewFile = useCallback(
    (id: string) => {
      const item = files.find((f) => f.id === id);
      if (!item?.previewUrl) return;
      window.open(item.previewUrl, '_blank', 'noopener,noreferrer');
    },
    [files],
  );

  return {
    files,
    setFiles,
    globalError,
    setGlobalError,
    addFiles,
    removeFile,
    reconvertFile,
    clearAll,
    previewFile,
  };
}
