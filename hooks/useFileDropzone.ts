'use client';

import { useCallback, type ChangeEvent, type DragEvent } from 'react';

type UseFileDropzoneOptions = {
  onFiles: (files: FileList | null) => void;
  disabled?: boolean;
  dropEffect?: DataTransfer['dropEffect'];
};

export function useFileDropzone({ onFiles, disabled = false, dropEffect }: UseFileDropzoneOptions) {
  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onFiles(e.target.files);
      e.target.value = '';
    },
    [disabled, onFiles],
  );

  const handleDrop = useCallback(
    (e: DragEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      onFiles(e.dataTransfer.files);
    },
    [disabled, onFiles],
  );

  const handleDragOver = useCallback(
    (e: DragEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      if (dropEffect) {
        e.dataTransfer.dropEffect = dropEffect;
      }
    },
    [disabled, dropEffect],
  );

  return { handleFileChange, handleDrop, handleDragOver };
}
