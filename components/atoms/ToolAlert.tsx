import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ToolAlertVariant = 'error' | 'success' | 'info' | 'warning';

interface ToolAlertProps {
  children: ReactNode;
  variant?: ToolAlertVariant;
  className?: string;
}

const variantClasses: Record<ToolAlertVariant, string> = {
  error: 'border-error-border bg-error-bg text-error-text',
  success: 'border-success-border bg-success-bg text-success-text',
  info: 'border-neutral-200 bg-neutral-50 text-mid',
  warning: 'border-warning-border bg-warning-bg text-warning-text',
};

export default function ToolAlert({
  children,
  variant = 'info',
  className,
}: ToolAlertProps) {
  return (
    <div
      className={cn(
        'rounded-lg border px-3 py-2 text-[11px]!',
        variantClasses[variant],
        className,
      )}
      role='alert'
    >
      {children}
    </div>
  );
}
