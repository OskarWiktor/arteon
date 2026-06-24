import { RiUploadCloud2Line } from 'react-icons/ri';
import { useFileDropzone } from '@/hooks/useFileDropzone';
import Badge from '../atoms/Badge';
import Input from '../atoms/form/Input';
import Label from '../atoms/form/Label';

interface FileDropzoneProps {
  accept: string;
  multiple?: boolean;
  disabled?: boolean;
  dropEffect?: DataTransfer['dropEffect'];
  onFiles: (files: FileList | null) => void;
  dragLabel: string;
  clickLabel: string;
  formatsLabel: string;
}

const FileDropzoneClasses =
  'hover:border-light flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 text-center transition hover:bg-neutral-100 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2';

/**
 * File upload dropzone: a clickable, drag-and-drop label wrapping a hidden file input,
 * with a built-in upload icon, prompts, and an accepted-formats badge.
 *
 * @param dragLabel - Text prompting the user to drag files
 * @param clickLabel - Text prompting the user to click to select files
 * @param formatsLabel - Text describing accepted file formats shown in the badge
 */
export default function FileDropzone({
  accept,
  multiple = false,
  disabled = false,
  dropEffect,
  onFiles,
  dragLabel,
  clickLabel,
  formatsLabel,
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
      <RiUploadCloud2Line className='mb-2 h-10 w-10 text-primary' />
      <span className='mb-1 text-sm! font-medium'>{dragLabel}</span>
      <span className='tool-meta mb-2'>{clickLabel}</span>
      <Badge variant='default' size='sm' className='bg-white shadow-sm'>
        {formatsLabel}
      </Badge>
      <Input
        type='file'
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className='sr-only'
        disabled={disabled}
        aria-label={`${dragLabel} ${clickLabel}`}
      />
    </Label>
  );
}
