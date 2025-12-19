import type { ReactNode } from 'react';

type AlertVariant = 'error' | 'success' | 'info' | 'warning';

interface ToolAlertProps {
  children: ReactNode;
  variant?: AlertVariant;
  className?: string;
}

export default function ToolAlert({ children, variant = 'info', className = '' }: ToolAlertProps) {
  const variantClasses: Record<AlertVariant, string> = {
    error: 'border-red-200 bg-red-50 text-red-800',
    success: 'border-emerald-200 bg-emerald-100 text-emerald-700',
    info: 'border-neutral-200 bg-neutral-50 text-mid',
    warning: 'border-amber-200 bg-amber-50 text-amber-800',
  };

  return (
    <div className={`rounded-xl border px-3 py-2 text-[11px]! ${variantClasses[variant]} ${className}`} role="alert">
      {children}
    </div>
  );
}
