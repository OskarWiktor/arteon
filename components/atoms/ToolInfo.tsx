import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ToolInfoProps {
  children: ReactNode;
  className?: string;
}

export default function ToolInfo({ children, className }: ToolInfoProps) {
  return <div className={cn('tool-info-box', className)}>{children}</div>;
}
