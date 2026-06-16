import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';

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
      {label && (
        <p
          className={cn(
            'tool-label mb-2 text-[13px]! text-(--foreground)!',
            labelClassName,
          )}
        >
          {label}
        </p>
      )}
      {children}
      {helper && (
        <p className={cn('mt-1 text-sm!', helperClassName)}>{helper}</p>
      )}
    </div>
  );
}
