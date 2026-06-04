import { RiUploadCloud2Line } from 'react-icons/ri';

import Badge from '@/components/atoms/Badge';

interface ToolUploadContentProps {
  dragLabel: string;
  clickLabel: string;
  formatsLabel: string;
}

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
