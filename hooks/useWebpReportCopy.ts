'use client';

import { useState } from 'react';
import type { WebpQueueItem } from '@/lib/tools/image/webpQueue';
import { buildWebpConversionReportText } from '@/lib/tools/image/webpReport';

type UseWebpReportCopyLabels = {
  clipboardNotSupported: string;
  noCompletedConversions: string;
  reportCopied: string;
  reportCopyError: string;
  conversionReport: string;
  fileCount: string;
  totalSizeBefore: string;
  totalSizeAfter: string;
  savedWeight: string;
  weightDifference: string;
  less: string;
  more: string;
};

type UseWebpReportCopyOptions = {
  files: WebpQueueItem[];
  copy: (text: string) => Promise<boolean>;
  labels: UseWebpReportCopyLabels;
};

export function useWebpReportCopy(options: UseWebpReportCopyOptions) {
  const [copyInfo, setCopyInfo] = useState<string | null>(null);

  const handleCopySummary = async () => {
    if (!navigator.clipboard) {
      setCopyInfo(options.labels.clipboardNotSupported);
      return;
    }

    const converted = options.files.filter(f => f.status === 'done');
    if (!converted.length) {
      setCopyInfo(options.labels.noCompletedConversions);
      return;
    }

    const text = buildWebpConversionReportText(
      converted.map(f => ({ inputSize: f.inputSize, outputSize: f.outputSize })),
      {
        conversionReport: options.labels.conversionReport,
        fileCount: options.labels.fileCount,
        totalSizeBefore: options.labels.totalSizeBefore,
        totalSizeAfter: options.labels.totalSizeAfter,
        savedWeight: options.labels.savedWeight,
        weightDifference: options.labels.weightDifference,
        less: options.labels.less,
        more: options.labels.more,
      },
    );

    const ok = await options.copy(text);
    setCopyInfo(ok ? options.labels.reportCopied : options.labels.reportCopyError);
  };

  return { copyInfo, setCopyInfo, handleCopySummary };
}
