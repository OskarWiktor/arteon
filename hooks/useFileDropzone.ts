'use client';

import { type ChangeEvent, type DragEvent } from 'react';

type UseFileDropzoneOptions = {
  onFiles: (files: FileList | null) => void;
  disabled?: boolean;
  dropEffect?: DataTransfer['dropEffect'];
};

export function useFileDropzone({ onFiles, disabled = false, dropEffect }: UseFileDropzoneOptions) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onFiles(e.target.files);
      e.target.value = '';
    };

  const handleDrop = (e: DragEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      onFiles(e.dataTransfer.files);
    };

  const handleDragOver = (e: DragEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      if (dropEffect) {
        e.dataTransfer.dropEffect = dropEffect;
      }
    };

  return { handleFileChange, handleDrop, handleDragOver };
}
