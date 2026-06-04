import type { WebpQueueItem } from '@/types/tools/image';
export type { WebpQueueItemStatus, WebpQueueItem } from '@/types/tools/image';

export function isJpgOrPngFile(file: File): boolean {
  return file.type === 'image/jpeg' || file.type === 'image/png';
}

export function getWebpQueueFileKey(file: File): string {
  return `${file.name}-${file.size}`;
}

export function createWebpQueueItems(
  files: File[],
  existing: WebpQueueItem[],
): WebpQueueItem[] {
  const now = Date.now();
  const existingKeys = new Set(
    existing.map(item => getWebpQueueFileKey(item.file)),
  );

  const items: WebpQueueItem[] = [];

  files.forEach((file, index) => {
    if (!isJpgOrPngFile(file)) return;

    const key = getWebpQueueFileKey(file);
    if (existingKeys.has(key)) return;

    existingKeys.add(key);

    items.push({
      id: `${now}-${index}-${file.name}`,
      file,
      inputSize: file.size,
      status: 'pending',
      previewUrl: URL.createObjectURL(file),
      downloaded: false,
    });
  });

  return items;
}
