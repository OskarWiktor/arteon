import { disabledInteractiveClasses, focusRingClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ButtonCircleProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

const buttonCircleClasses =
  'inline-flex items-center justify-center border-primary bg-primary rounded-lg border p-1 text-white shadow-lg md:p-2 hover:text-mid transition-colors hover:scale-105 hover:bg-white';

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
