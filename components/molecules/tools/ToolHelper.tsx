import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';

type ToolHelperVariant = 'default' | 'error';

interface ToolHelperProps {
  children: ReactNode;
  className?: string;
  variant?: ToolHelperVariant;
}
const ToolHelperVariantClasses = {
  default: '',
  error: 'text-error-text',
};

export default function ToolHelper({
  children,
  className,
  variant = 'default',
}: ToolHelperProps) {
  return (
    <p
      className={cn(
        'mt-2! text-xs!',
        ToolHelperVariantClasses[variant],
        className,
      )}
    >
      {children}
    </p>
  );
}
