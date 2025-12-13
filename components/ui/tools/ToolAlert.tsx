import type { ReactNode } from 'react';

type AlertVariant = 'error' | 'success' | 'warning' | 'info';

interface ToolAlertProps {
  children: ReactNode;
  variant?: AlertVariant;
  className?: string;
}

export default function ToolAlert({ children, variant = 'info', className = '' }: ToolAlertProps) {
  const variantClasses: Record<AlertVariant, string> = {
    error: 'border-red-200 bg-red-50 text-red-800',
    success: 'border-emerald-200 bg-emerald-100 text-emerald-700',
    warning: 'border-amber-200 bg-amber-100 text-amber-800',
    info: 'border-neutral-200 bg-neutral-50 text-neutral-700',
  };

  return (
    <div className={`rounded-xl border px-3 py-2 text-[11px]! ${variantClasses[variant]} ${className}`} role="alert">
      {children}
    </div>
  );
}

