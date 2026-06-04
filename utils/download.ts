import { revokeObjectUrl } from '@/utils/objectUrl';

export function downloadFromUrl(url: string, filename: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

type DownloadBlobOptions = {
  revokeDelayMs?: number;
  downloadFromUrl?: (url: string, filename: string) => void;
};

export function downloadBlob(
  blob: Blob,
  filename: string,
  options?: DownloadBlobOptions,
) {
  const url = URL.createObjectURL(blob);
  const trigger = options?.downloadFromUrl ?? downloadFromUrl;
  const revokeDelayMs = options?.revokeDelayMs ?? 2000;

  trigger(url, filename);
  setTimeout(() => revokeObjectUrl(url), revokeDelayMs);
}
