import type { ReactNode } from 'react';

interface IconTextProps {
  icon?: ReactNode;
  children: ReactNode;
  gap?: '1' | '2' | '3' | '4';
  align?: 'start' | 'center';
  iconClassName?: string;
  className?: string;
  'aria-label'?: string;
}

export default function IconText({ icon, children, gap = '2', align = 'center', iconClassName = '', className = '', 'aria-label': ariaLabel }: IconTextProps) {
  const gapClasses = {
    '1': 'gap-1',
    '2': 'gap-2',
    '3': 'gap-3',
    '4': 'gap-4',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
  };

  const classes = `flex ${alignClasses[align]} ${gapClasses[gap]} ${className}`;

  return (
    <div className={classes} aria-label={ariaLabel}>
      {icon && (
        <span aria-hidden="true" className={`shrink-0 ${iconClassName}`}>
          {icon}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
