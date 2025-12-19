import { downloadFromUrl } from '@/lib/tools/download';
import { revokeObjectUrl } from '@/lib/tools/objectUrl';

type DownloadBlobOptions = {
  revokeDelayMs?: number;
  downloadFromUrl?: (url: string, filename: string) => void;
};

export function downloadBlob(blob: Blob, filename: string, options?: DownloadBlobOptions) {
  const url = URL.createObjectURL(blob);
  const trigger = options?.downloadFromUrl ?? downloadFromUrl;
  const revokeDelayMs = options?.revokeDelayMs ?? 2000;

  trigger(url, filename);
  setTimeout(() => revokeObjectUrl(url), revokeDelayMs);
}
