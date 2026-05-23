import { formatBytes } from '@/utils/formatBytes';
import type {
  WebpConversionReportItem,
  WebpConversionReportLabels,
  WebpConversionCsvReportItem,
} from '@/types/tools/image';
export type {
  WebpConversionReportItem,
  WebpConversionReportLabels,
  WebpConversionCsvReportItem,
} from '@/types/tools/image';

function escapeCsvValue(value: string): string {
  if (/["]/.test(value)) {
    value = value.replace(/"/g, '""');
  }

  if (/[",\n\r]/.test(value)) {
    return `"${value}"`;
  }

  return value;
}

export function buildWebpConversionReportCsv(items: WebpConversionCsvReportItem[]): string {
  const header = ['nazwa', 'inputSize', 'outputSize', 'ratio', 'usedQuality', 'status', 'error'];
  const lines = [header.join(',')];

  for (const item of items) {
    const row = [
      escapeCsvValue(item.name),
      String(item.inputSize),
      item.outputSize != null ? String(item.outputSize) : '',
      item.ratio != null ? item.ratio.toFixed(4) : '',
      item.usedQuality != null ? String(item.usedQuality) : '',
      escapeCsvValue(item.status),
      escapeCsvValue(item.error ?? ''),
    ];
    lines.push(row.join(','));
  }

  return lines.join('\n');
}

export function buildWebpConversionReportText(
  items: WebpConversionReportItem[],
  labels: WebpConversionReportLabels,
): string {
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
