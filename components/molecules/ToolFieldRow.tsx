import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';

interface ToolFieldRowProps {
  label?: ReactNode;
  /**
   * Gdy podane, etykieta renderuje się jako `<label htmlFor>` powiązana z polem
   * o tym `id` (dostępna nazwa kontrolki — WCAG 4.1.2/3.3.2). Bez tego propu
   * etykieta pozostaje zwykłym `<p>` (zachowanie wsteczne). Wizualnie identyczne.
   */
  htmlFor?: string;
  children: ReactNode;
  helper?: ReactNode;
  className?: string;
  labelClassName?: string;
  helperClassName?: string;
}

export default function ToolFieldRow({
  label,
  htmlFor,
  children,
  helper,
  className,
  labelClassName,
  helperClassName,
}: ToolFieldRowProps) {
  const labelClasses = cn(
    'tool-label mb-2 block text-[13px]! text-(--foreground)!',
    labelClassName,
  );
  return (
    <div className={className}>
      {label &&
        (htmlFor ? (
          <label htmlFor={htmlFor} className={labelClasses}>
            {label}
          </label>
        ) : (
          <p className={labelClasses}>{label}</p>
        ))}
      {children}
      {helper && (
        <p className={cn('mt-1 text-sm!', helperClassName)}>{helper}</p>
      )}
    </div>
  );
}
