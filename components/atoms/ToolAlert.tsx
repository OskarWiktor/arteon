import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';

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

// Błędy i ostrzeżenia przerywają czytnik ekranu (role="alert" = assertive),
// sukces i info ogłaszane są grzecznie (role="status" = polite) — zgodnie z
// wagą komunikatu (WCAG 4.1.3 Status Messages).
const variantRole: Record<ToolAlertVariant, 'alert' | 'status'> = {
  error: 'alert',
  warning: 'alert',
  success: 'status',
  info: 'status',
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
      role={variantRole[variant]}
    >
      {children}
    </div>
  );
}
