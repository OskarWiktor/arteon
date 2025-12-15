'use client';

import { useRef, type ChangeEvent, type DragEvent, type KeyboardEvent } from 'react';
import Badge from '@/components/ui/Badge';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import { formatBytes } from '@/lib/tools/formatBytes';

interface ImageDropzoneProps {
  label: string;
  dragDropText: string;
  clickToSelectText: string;
  supportedFormatsText: string;
  accept: string;
  file: File | null;
  error: string | null;
  disabled?: boolean;
  onFileSelected: (file: File) => void;
}

export default function ImageDropzone({
  label,
  dragDropText,
  clickToSelectText,
  supportedFormatsText,
  accept,
  file,
  error,
  disabled,
  onFileSelected,
}: ImageDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    e.target.value = '';
    if (!selected) return;
    onFileSelected(selected);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLLabelElement>) {
    if (disabled) return;
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    inputRef.current?.click();
  }

  function handleDrop(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    e.stopPropagation();
    const selected = e.dataTransfer.files?.[0];
    if (!selected) return;
    onFileSelected(selected);
  }

  function handleDragOver(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div>
      <p className="mb-2 text-sm text-dark font-semibold uppercase">{label}</p>
      <label
        onDrop={disabled ? undefined : handleDrop}
        onDragOver={disabled ? undefined : handleDragOver}
        onKeyDown={disabled ? undefined : handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="button"
        aria-disabled={disabled ? true : undefined}
        className={`tool-upload-area focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
          disabled ? 'cursor-not-allowed opacity-60' : ''
        }`}
      >
        <span className="mb-1 text-sm text-dark font-medium">{dragDropText}</span>
        <span className="mb-2 text-xs text-light">{clickToSelectText}</span>
        <Badge variant="default" size="sm" className="bg-white shadow-sm">
          {supportedFormatsText}
        </Badge>
        <input ref={inputRef} type="file" accept={accept} onChange={handleFileChange} className="hidden" disabled={disabled} />
      </label>

      {file && (
        <p className="mt-2 text-xs text-light">
          Wybrano: <strong>{file.name}</strong> ({formatBytes(file.size)})
        </p>
      )}

      {error && (
        <ToolAlert variant="error" className="mt-2">
          {error}
        </ToolAlert>
      )}
    </div>
  );
}
