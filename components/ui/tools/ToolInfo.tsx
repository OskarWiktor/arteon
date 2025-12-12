import { ReactNode } from 'react';

interface ToolInfoProps {
  children: ReactNode;
  className?: string;
}

export default function ToolInfo({ children, className = '' }: ToolInfoProps) {
  return <div className={`tool-info-box ${className}`}>{children}</div>;
}

