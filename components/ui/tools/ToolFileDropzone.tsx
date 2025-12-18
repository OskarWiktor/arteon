'use client';

import { useFileDropzone } from '@/hooks/useFileDropzone';
import type { ReactNode } from 'react';

type ToolFileDropzoneProps = {
  accept: string;
  multiple?: boolean;
  disabled?: boolean;
  dropEffect?: DataTransfer['dropEffect'];
  className?: string;
  onFiles: (files: FileList | null) => void;
  children: ReactNode;
};

export default function ToolFileDropzone({
  accept,
  multiple = false,
  disabled = false,
  dropEffect,
  className = 'tool-upload-area',
  onFiles,
  children,
}: ToolFileDropzoneProps) {
  const { handleFileChange, handleDrop, handleDragOver } = useFileDropzone({ onFiles, disabled, dropEffect });

  return (
    <label onDrop={disabled ? undefined : handleDrop} onDragOver={disabled ? undefined : handleDragOver} className={className}>
      {children}
      <input type="file" accept={accept} multiple={multiple} onChange={handleFileChange} className="hidden" disabled={disabled} />
    </label>
  );
}
