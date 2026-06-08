import type { ReactNode } from 'react';
import Label from '@/components/atoms/form/Label';
import { cn } from '@/lib/clsx';

interface ToolSelectProps {
  label?: string;
  value: string | number;
  onChange: (value: string) => void;
  children: ReactNode;
  className?: string;
  selectClassName?: string;
}

export default function ToolSelect({
  label,
  value,
  onChange,
  children,
  className,
  selectClassName = 'w-full',
}: ToolSelectProps) {
  return (
    <div className={cn('space-y-1', className)}>
      {label && (
        <Label variant='tool' className='mb-2 block'>
          {label}
        </Label>
      )}
      <select
        className={cn('text-mid', selectClassName)}
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
}
