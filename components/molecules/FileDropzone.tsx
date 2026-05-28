import { useFileDropzone } from '@/hooks/useFileDropzone';
import type { ReactNode } from 'react';
import Input from '../atoms/form/Input';
import Label from '../atoms/form/Label';

interface FileDropzoneProps {
  accept: string;
  multiple?: boolean;
  disabled?: boolean;
  dropEffect?: DataTransfer['dropEffect'];
  onFiles: (files: FileList | null) => void;
  children: ReactNode;
}

const FileDropzoneClasses =
  'hover:border-light flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 text-center transition hover:bg-neutral-100';

export default function FileDropzone({
  accept,
  multiple = false,
  disabled = false,
  dropEffect,
  onFiles,
  children,
}: FileDropzoneProps) {
  const { handleFileChange, handleDrop, handleDragOver } = useFileDropzone({
    onFiles,
    disabled,
    dropEffect,
  });

  return (
    <Label
      onDrop={disabled ? undefined : handleDrop}
      onDragOver={disabled ? undefined : handleDragOver}
      className={FileDropzoneClasses}
    >
      {children}
      <Input
        type='file'
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className='hidden'
        disabled={disabled}
      />
    </Label>
  );
}
