import { ReactNode } from 'react';

interface ToolHelperProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'error' | 'success' | 'warning';
}

export default function ToolHelper({ children, className = '', variant = 'default' }: ToolHelperProps) {
  const variantClasses = {
    default: '',
    error: 'text-red-700',
    success: 'text-emerald-700',
    warning: 'text-amber-700',
  };

  return <p className={`tool-helper ${variantClasses[variant]} ${className}`}>{children}</p>;
}

