import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';
import { disabledInteractiveClasses, focusRingClasses } from '@/lib/uiClasses';

interface ButtonCircleProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

const buttonCircleClasses =
  'inline-flex items-center justify-center bg-primary rounded-lg p-1 text-white shadow-lg md:p-2 hover:text-mid transition-colors hover:scale-105 hover:bg-white';

export default function ButtonCircle({
  children,
  onClick,
  disabled,
  className,
  ariaLabel,
}: ButtonCircleProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        buttonCircleClasses,
        focusRingClasses,
        disabled ? disabledInteractiveClasses : 'cursor-pointer',
        className,
      )}
      aria-label={ariaLabel}
      disabled={disabled}
      aria-disabled={disabled || undefined}
    >
      {children}
    </button>
  );
}
