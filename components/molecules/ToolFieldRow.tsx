import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ToolFieldRowProps {
  label?: ReactNode;
  children: ReactNode;
  helper?: ReactNode;
  className?: string;
  labelClassName?: string;
  helperClassName?: string;
}

export default function ToolFieldRow({
  label,
  children,
  helper,
  className,
  labelClassName,
  helperClassName,
}: ToolFieldRowProps) {
  return (
    <div className={className}>
      {label && <p className={cn('tool-label mb-2', labelClassName)}>{label}</p>}
      {children}
      {helper && <p className={cn('text-sm mt-1', helperClassName)}>{helper}</p>}
    </div>
  );
}
