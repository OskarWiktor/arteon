import { useCallback, useEffect, useRef, useState } from 'react';

import { convertImage } from '@/lib/tools/image/convert';
import { revokeObjectUrl } from '@/utils/objectUrl';

import { FORMAT_MIME, type ConversionFile, type OutputFormat } from './types';

let fileIdCounter = 0;

export interface ConversionQueueOptions {
  targetFormat: OutputFormat;
  errorMessages?: {
    fileLoad?: string;
    imageLoad?: string;
    canvasNotSupported?: string;
    generationError?: string;
    fileTooLarge?: string;
    avifNotSupported?: string;
  };
}

export function useConversionQueue(options: ConversionQueueOptions) {
  const { targetFormat, errorMessages } = options;
  const [files, setFiles] = useState<ConversionFile[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const qualityRef = useRef(0.85);
  const filesRef = useRef(files);
  filesRef.current = files;

  // Revoke all object URLs on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      filesRef.current.forEach((f) => {
        if (f.outputUrl) revokeObjectUrl(f.outputUrl);
      });
    };
  }, []);

  const addFiles = useCallback((newFiles: File[]) => {
    const entries: ConversionFile[] = newFiles.map((f) => ({
      id: `cf-${++fileIdCounter}`,
      file: f,
      status: 'pending' as const,
      outputBlob: null,
      outputUrl: null,
      inputSize: f.size,
      outputSize: 0,
      errorMessage: null,
    }));
    setFiles((prev) => [...prev, ...entries]);
  }, []);

  const clearAll = useCallback(() => {
    setFiles((prev) => {
      prev.forEach((f) => {
        if (f.outputUrl) revokeObjectUrl(f.outputUrl);
      });
      return [];
    });
  }, []);

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => {
      const file = prev.find((f) => f.id === id);
      if (file?.outputUrl) revokeObjectUrl(file.outputUrl);
      return prev.filter((f) => f.id !== id);
    });
  }, []);

  const setQuality = useCallback((q: number) => {
    qualityRef.current = q;
  }, []);

  const convertAll = useCallback(async () => {
    setIsConverting(true);
    const targetMime = FORMAT_MIME[targetFormat];

    // Use ref to get the latest files snapshot - avoids stale closure
    const pending = filesRef.current.filter((f) => f.status === 'pending' || f.status === 'error');
    for (const entry of pending) {
      // Check if file was removed while we were processing the queue
      if (!filesRef.current.some((f) => f.id === entry.id)) continue;

      setFiles((prev) => prev.map((f) => (f.id === entry.id ? { ...f, status: 'processing' as const, errorMessage: null } : f)));

      try {
        const blob = await convertImage(entry.file, {
          targetMime,
          quality: targetFormat === 'png' ? undefined : qualityRef.current,
          errorMessages,
        });

        const url = URL.createObjectURL(blob);

        setFiles((prev) =>
          prev.map((f) =>
            f.id === entry.id
              ? {
                  ...f,
                  status: 'done' as const,
                  outputBlob: blob,
                  outputUrl: url,
                  outputSize: blob.size,
                }
              : f,
          ),
        );
      } catch (err) {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === entry.id
              ? {
                  ...f,
                  status: 'error' as const,
                  errorMessage: err instanceof Error ? err.message : 'Unknown error',
                }
              : f,
          ),
        );
      }
    }

    setIsConverting(false);
  }, [targetFormat, errorMessages]);

  const totalInputSize = files.reduce((sum, f) => sum + f.inputSize, 0);
  const doneFiles = files.filter((f) => f.status === 'done');
  const totalOutputSize = doneFiles.reduce((sum, f) => sum + f.outputSize, 0);
  const pendingCount = files.filter((f) => f.status === 'pending' || f.status === 'error').length;
  const doneCount = doneFiles.length;

  return {
    files,
    isConverting,
    addFiles,
    clearAll,
    removeFile,
    setQuality,
    convertAll,
    totalInputSize,
    totalOutputSize,
    pendingCount,
    doneCount,
  };
}
