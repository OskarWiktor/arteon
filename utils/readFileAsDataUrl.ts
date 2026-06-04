import type { ReadFileAsDataUrlOptions } from '@/types/tools/image';

export function readFileAsDataUrl(file: File, options?: ReadFileAsDataUrlOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => {
      reject(new Error(options?.errorMessage ?? 'Failed to load file.'));
    };

    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== 'string') {
        reject(new Error(options?.errorMessage ?? 'Failed to load file.'));
        return;
      }
      resolve(result);
    };

    reader.readAsDataURL(file);
  });
}
