import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type IconTextGap = '0' | '1' | '2' | '3' | '4';
type IconTextAlign = 'start' | 'center';

interface IconTextProps {
  icon?: ReactNode;
  children: ReactNode;
  gap?: IconTextGap;
  align?: IconTextAlign;
  iconClassName?: string;
  className?: string;
  'aria-label'?: string;
}
const gapClasses: Record<IconTextGap, string> = {
  '0': 'gap-0',
  '1': 'gap-1',
  '2': 'gap-2',
  '3': 'gap-3',
  '4': 'gap-4',
};

const alignClasses: Record<IconTextAlign, string> = {
  start: 'items-start',
  center: 'items-center',
};

export default function IconText({
  icon,
  children,
  gap = '0',
  align = 'center',
  iconClassName,
  className,
  'aria-label': ariaLabel,
}: IconTextProps) {
  return (
    <div
      className={cn('flex', alignClasses[align], gapClasses[gap], className)}
      aria-label={ariaLabel}
    >
      {icon && (
        <span aria-hidden='true' className={cn('shrink-0', iconClassName)}>
          {icon}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
