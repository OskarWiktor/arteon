import { createZipBlob as createZipBlobSync, type ZipFileInput } from '@/lib/tools/zip';

export async function createZipBlob(files: Record<string, Uint8Array>): Promise<Blob> {
  const inputs: ZipFileInput[] = Object.entries(files).map(([path, data]) => ({ path, data }));
  return createZipBlobSync(inputs);
}
