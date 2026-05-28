import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

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

export default function ToolHelper({ children, className, variant = 'default' }: ToolHelperProps) {
  return (
    <p className={cn('text-sm', ToolHelperVariantClasses[variant], className)}>{children}</p>
  );
}
