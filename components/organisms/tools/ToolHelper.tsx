import type { ReactNode } from 'react';

interface ToolHelperProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'error';
}

export default function ToolHelper({ children, className, variant = 'default' }: ToolHelperProps) {
  const variantClasses = {
    default: '',
    error: 'text-error-text',
  };

  return <p className={`tool-helper ${variantClasses[variant]} ${className}`}>{children}</p>;
}
