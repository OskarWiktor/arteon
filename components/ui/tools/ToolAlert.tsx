import type { ReactNode } from 'react';

type AlertVariant = 'error' | 'success' | 'info' | 'warning';

interface ToolAlertProps {
  children: ReactNode;
  variant?: AlertVariant;
  className?: string;
}

export default function ToolAlert({ children, variant = 'info', className = '' }: ToolAlertProps) {
  const variantClasses: Record<AlertVariant, string> = {
    error: 'border-error-border bg-error-bg text-error-text',
    success: 'border-success-border bg-success-bg text-success-text',
    info: 'border-neutral-200 bg-neutral-50 text-mid',
    warning: 'border-warning-border bg-warning-bg text-warning-text',
  };

  return (
    <div className={`rounded-xl border px-3 py-2 text-[11px]! ${variantClasses[variant]} ${className}`} role="alert">
      {children}
    </div>
  );
}
