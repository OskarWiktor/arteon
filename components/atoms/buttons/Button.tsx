import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';
import {
  buttonAccentVariantClasses,
  buttonNormalVariantClasses,
  disabledInteractiveClasses,
  flexCenterClasses,
  focusRingClasses,
} from '@/lib/uiClasses';
import ArrowIcon from '../ArrowIcon';

type ButtonSize = 'small' | 'medium';
type ButtonVariant = 'normal' | 'accent';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  arrow?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  ariaPressed?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  small: 'px-2.5 py-1.5 md:px-3 md:py-1.5',
  medium: 'px-4 py-2 md:px-4 md:py-2',
};

const variantClasses: Record<ButtonVariant, string> = {
  normal: buttonNormalVariantClasses,
  accent: buttonAccentVariantClasses,
};

const buttonClasses =
  'group inline-flex w-fit items-center rounded-sm text-sm font-medium md:text-base transition hover:-translate-y-0.5 active:translate-y-0';

export default function Button({
  children,
  variant = 'normal',
  size = 'medium',
  onClick,
  disabled = false,
  arrow = false,
  className,
  type = 'button',
  ariaLabel,
  ariaPressed,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      className={cn(
        buttonClasses,
        focusRingClasses,
        sizeClasses[size],
        variantClasses[variant],
        disabled ? disabledInteractiveClasses : 'cursor-pointer',
        className,
      )}
    >
      <span className={cn('gap-2', flexCenterClasses)}>{children}</span>

      {arrow && <ArrowIcon />}
    </button>
  );
}
