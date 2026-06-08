import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';

interface SubtitleProps {
  children: ReactNode;
  variant?: 'default' | 'hero';
  className?: string;
  id?: string;
}

export default function Subtitle({
  children,
  variant = 'default',
  className,
  id,
}: SubtitleProps) {
  const variantClasses = {
    default: 'text-base tracking-wider uppercase text-light',
    hero: 'text-base tracking-wide uppercase sm:text-lg',
  };

  return (
    <p id={id} className={cn(variantClasses[variant], className)}>
      {children}
    </p>
  );
}
