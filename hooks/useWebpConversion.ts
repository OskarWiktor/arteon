'use client';

import { useState, type Dispatch, type SetStateAction } from 'react';
import { convertImageFileToWebpSmart, getWebpFileName } from '@/lib/tools/image/webp';
import type { WebpQueueItem } from '@/lib/tools/image/webpQueue';

type UseWebpConversionLabels = {
  addAtLeastOne: string;
  allProcessed: string;
  conversionError: string;
  fileLoadError: string;
  imageLoadError: string;
  canvasNotSupported: string;
  webpGenerationError: string;
};

type WebpAutoDownloadMode = 'files' | 'zip';

type UseWebpConversionOptions = {
  files: WebpQueueItem[];
  setFiles: Dispatch<SetStateAction<WebpQueueItem[]>>;
  quality: number;
  autoDownload: boolean;
  autoDownloadMode: WebpAutoDownloadMode;
  setGlobalError: Dispatch<SetStateAction<string | null>>;
  setCopyInfo: Dispatch<SetStateAction<string | null>>;
  triggerDownloadFromUrl: (url: string, filename: string) => void;
  labels: UseWebpConversionLabels;
};

export function useWebpConversion(options: UseWebpConversionOptions) {
  const [isConverting, setIsConverting] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    options.setGlobalError(null);
    options.setCopyInfo(null);

    if (!options.files.length) {
      options.setGlobalError(options.labels.addAtLeastOne);
      return;
    }

    const toProcess = options.files.filter(f => f.status === 'pending' || f.status === 'error');
    if (!toProcess.length) {
      options.setGlobalError(options.labels.allProcessed);
      return;
    }

    setIsConverting(true);
    try {
      for (const item of toProcess) {
        options.setFiles(prev =>
          prev.map(f =>
            f.id === item.id
              ? {
                  ...f,
                  status: 'processing',
                  error: undefined,
                  downloaded: options.autoDownload ? false : f.downloaded,
                }
              : f,
          ),
        );

        try {
          const { blob: webpBlob, usedQuality } = await convertImageFileToWebpSmart(
            item.file,
            item.inputSize,
            {
              initialQuality: options.quality,
              minQuality: 60,
              step: 5,
              fileLoadErrorMessage: options.labels.fileLoadError,
              imageLoadErrorMessage: options.labels.imageLoadError,
              canvasNotSupportedErrorMessage: options.labels.canvasNotSupported,
              webpGenerationErrorMessage: options.labels.webpGenerationError,
            },
          );
          const url = URL.createObjectURL(webpBlob);
          const outputSize = webpBlob.size;
          const ratio = outputSize / item.inputSize;
          const filename = getWebpFileName(item.file.name);

          options.setFiles(prev =>
            prev.map(f =>
              f.id === item.id
                ? {
                    ...f,
                    status: 'done',
                    downloadUrl: url,
                    outputSize,
                    ratio,
                    usedQuality,
                    downloaded:
                      options.autoDownload && options.autoDownloadMode === 'files'
                        ? true
                        : f.downloaded,
                  }
                : f,
            ),
          );

          if (options.autoDownload && options.autoDownloadMode === 'files') {
            options.triggerDownloadFromUrl(url, filename);
          }
        } catch (err) {
          console.error(err);
          options.setFiles(prev =>
            prev.map(f =>
              f.id === item.id
                ? {
                    ...f,
                    status: 'error',
                    error: err instanceof Error ? err.message : options.labels.conversionError,
                  }
                : f,
            ),
          );
        }
      }
    } finally {
      setIsConverting(false);
    }
  };

  return { isConverting, handleSubmit };
}
