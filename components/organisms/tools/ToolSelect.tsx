import Label from '@/components/atoms/form/Label';
import type { ReactNode } from 'react';

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
    <div className={className}>
      {label && (
        <Label variant='tool' className='mb-2 block'>
          {label}
        </Label>
      )}
      <select
        className={`tool-input ${selectClassName}`}
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
}
