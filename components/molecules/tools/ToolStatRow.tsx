import type { ReactNode } from 'react';
import { flexCenterBetweenClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

interface ToolStatRowProps {
  label: string;
  value: ReactNode;
  className?: string;
}

export default function ToolStatRow({ label, value, className = '' }: ToolStatRowProps) {
  return (
    <div
      className={cn(
        'rounded-md border border-neutral-200 bg-white px-3 py-2',
        flexCenterBetweenClasses,
        className,
      )}
    >
      <span className='tool-value'>{label}</span>
      <strong className='text-dark'>{value}</strong>
    </div>
  );
}
