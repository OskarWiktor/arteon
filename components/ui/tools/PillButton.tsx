import type { ReactNode } from 'react';

interface PillButtonProps<T extends string | number> {
  value: T;
  current: T;
  label: ReactNode;
  onChange: (value: T) => void;
  disabled?: boolean;
  className?: string;
}

export default function PillButton<T extends string | number>({ value, current, label, onChange, disabled, className = '' }: PillButtonProps<T>) {
  const isActive = value === current;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && onChange(value)}
      className={`tool-button ${isActive ? 'tool-button-active' : 'tool-button-inactive'} ${disabled ? 'cursor-not-allowed opacity-40' : ''} ${className}`}
    >
      {label}
    </button>
  );
}
