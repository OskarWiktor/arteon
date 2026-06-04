import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { focusRingClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

type ButtonIconSize = 'small' | 'medium';

type ButtonIconProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  label: string;
  children: ReactNode;
  size?: ButtonIconSize;
};

const sizeClasses: Record<ButtonIconSize, string> = {
  small: 'h-7 w-7',
  medium: 'h-9 w-9',
};

const buttonIconClasses = 'inline-flex items-center justify-center rounded transition';

export default function ButtonIcon({
  label,
  children,
  size = 'medium',
  className,
  type = 'button',
  ...props
}: ButtonIconProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(buttonIconClasses, focusRingClasses, sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
