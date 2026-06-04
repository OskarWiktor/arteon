import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ToolInfoProps {
  children: ReactNode;
  className?: string;
}

export default function ToolInfo({ children, className }: ToolInfoProps) {
  return <div className={cn('tool-info-box', className)}>{children}</div>;
}
