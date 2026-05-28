import {
  buttonAccentVariantClasses,
  buttonNormalVariantClasses,
  disabledInteractiveClasses,
  flexCenterClasses,
  focusRingClasses,
  normalIconSizeClasses,
} from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import { ButtonSize, ButtonVariant } from '@/types/ui';
import type { ReactNode } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

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
}

const sizeClasses: Record<ButtonSize, string> = {
  small: 'px-2 py-1 md:px-3 md:py-1.5',
  medium: 'px-4 py-2 md:px-5 md:py-2.5',
};

const variantClasses: Record<ButtonVariant, string> = {
  normal: buttonNormalVariantClasses,
  accent: buttonAccentVariantClasses,
};

const buttonClasses =
  'inline-flex w-fit items-center rounded-sm text-sm font-medium md:text-base transition hover:-translate-y-0.5';

function ButtonContent({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span className={cn('gap-2', flexCenterClasses)}>{children}</span>

      {arrow && (
        <span className={cn('ml-1', flexCenterClasses, normalIconSizeClasses)} aria-hidden='true'>
          <RiArrowRightSLine className='text-current' />
        </span>
      )}
    </>
  );
}

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
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        buttonClasses,
        focusRingClasses,
        sizeClasses[size],
        variantClasses[variant],
        disabled ? disabledInteractiveClasses : 'cursor-pointer',
        className,
      )}
    >
      <ButtonContent arrow={arrow}>{children}</ButtonContent>
    </button>
  );
}
