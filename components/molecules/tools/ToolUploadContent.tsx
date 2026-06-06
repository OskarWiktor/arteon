import { RiUploadCloud2Line } from 'react-icons/ri';
import Badge from '@/components/atoms/Badge';

interface ToolUploadContentProps {
  dragLabel: string;
  clickLabel: string;
  formatsLabel: string;
}

/**
 * Render upload UI content with an upload icon, primary labels, and a formats badge.
 *
 * @param dragLabel - Text prompting the user to drag files
 * @param clickLabel - Text prompting the user to click to select files
 * @param formatsLabel - Text describing accepted file formats shown in the badge
 * @returns A React fragment containing an upload icon, a drag prompt, a click prompt, and a small formats badge
 */
export default function ToolUploadContent({
  dragLabel,
  clickLabel,
  formatsLabel,
}: ToolUploadContentProps) {
  return (
    <>
      <RiUploadCloud2Line className='mb-2 h-10 w-10 text-primary' />
      <span className='mb-1 text-sm! font-medium'>{dragLabel}</span>
      <span className='tool-meta mb-2'>{clickLabel}</span>
      <Badge variant='default' size='sm' className='bg-white shadow-sm'>
        {formatsLabel}
      </Badge>
    </>
  );
}
