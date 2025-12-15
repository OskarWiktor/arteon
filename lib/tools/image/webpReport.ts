import { formatBytes } from '@/lib/tools/formatBytes';

export type WebpConversionReportItem = {
  inputSize: number;
  outputSize?: number;
};

export type WebpConversionReportLabels = {
  conversionReport: string;
  fileCount: string;
  totalSizeBefore: string;
  totalSizeAfter: string;
  savedWeight: string;
  weightDifference: string;
  less: string;
  more: string;
};

export function buildWebpConversionReportText(items: WebpConversionReportItem[], labels: WebpConversionReportLabels): string {
  const totalInput = items.reduce((sum, f) => sum + f.inputSize, 0);
  const totalOutput = items.reduce((sum, f) => sum + (f.outputSize ?? 0), 0);
  const saved = totalInput - totalOutput;
  const savedPercent = totalInput > 0 ? Math.round((Math.abs(saved) / totalInput) * 100) : 0;

  const trendLabel =
    saved >= 0
      ? `${labels.savedWeight} ${formatBytes(saved)} (~${savedPercent}% ${labels.less})`
      : `${labels.weightDifference} ${formatBytes(Math.abs(saved))} (~${savedPercent}% ${labels.more})`;

  return [
    labels.conversionReport,
    `${labels.fileCount} ${items.length}`,
    `${labels.totalSizeBefore} ${formatBytes(totalInput)}`,
    `${labels.totalSizeAfter} ${formatBytes(totalOutput)}`,
    trendLabel,
  ].join('\n');
}
