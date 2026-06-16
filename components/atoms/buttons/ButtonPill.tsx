import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';
import { disabledInteractiveClasses, focusRingClasses } from '@/lib/uiClasses';

interface ButtonPillProps<T extends string | number> {
  value: T;
  current: T;
  label: ReactNode;
  onChange: (value: T) => void;
  disabled?: boolean;
  className?: string;
}

const buttonPillClasses =
  'flex items-center gap-2 rounded-md border px-3 py-1.5 text-[14px] transition';

export default function ButtonPill<T extends string | number>({
  value,
  current,
  label,
  onChange,
  disabled = false,
  className,
}: ButtonPillProps<T>) {
  const isActive = value === current;

  return (
    <button
      type='button'
      disabled={disabled}
      onClick={() => onChange(value)}
      className={cn(
        buttonPillClasses,
        focusRingClasses,
        isActive
          ? 'bg-primary text-white'
          : 'border-neutral-200 bg-white hover:bg-neutral-100',
        disabled && disabledInteractiveClasses,
        className,
      )}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}
