import type { ReactNode } from 'react';

interface ToolFieldRowProps {
  label?: ReactNode;
  children: ReactNode;
  helper?: ReactNode;
  className?: string;
  labelClassName?: string;
  helperClassName?: string;
}

export default function ToolFieldRow({ label, children, helper, className = '', labelClassName = '', helperClassName = '' }: ToolFieldRowProps) {
  return (
    <div className={className}>
      {label && <p className={`tool-label mb-2 ${labelClassName}`}>{label}</p>}
      {children}
      {helper && <p className={`tool-helper mt-1 ${helperClassName}`}>{helper}</p>}
    </div>
  );
}

