import { useId, type ChangeEvent, type FocusEvent, type ReactNode } from 'react';
import Input from '@/components/atoms/form/Input';
import Label from '@/components/atoms/form/Label';

type InputWithLabelType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'search';

interface InputWithLabelProps {
  id?: string;
  label: ReactNode;
  type?: InputWithLabelType;
  variant?: 'default' | 'tool';
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  min?: number;
  max?: number;
  step?: number;
  inputMode?: 'text' | 'email' | 'tel' | 'url' | 'numeric' | 'decimal' | 'search' | 'none';
  pattern?: string;
  className?: string;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  onChange?: (value: string) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export default function InputWithLabel({
  id: providedId,
  label,
  type = 'text',
  variant = 'default',
  name,
  value,
  defaultValue,
  placeholder,
  required,
  disabled,
  readOnly,
  autoComplete,
  maxLength,
  minLength,
  min,
  max,
  step,
  inputMode,
  pattern,
  className,
  helperText,
  errorMessage,
  onChange,
  onBlur,
}: InputWithLabelProps) {
  const autoId = useId();
  const id = providedId ?? autoId;
  const helperId = helperText ? `${id}-helper` : undefined;
  const errorId = errorMessage ? `${id}-error` : undefined;
  const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;
  const hasError = Boolean(errorMessage);

  const handleChange = onChange
    ? (raw: string) => {
        if (type === 'number' && (min !== undefined || max !== undefined) && raw !== '') {
          const n = Number(raw);
          if (!Number.isNaN(n)) {
            const clamped = Math.min(max ?? Infinity, Math.max(min ?? -Infinity, n));
            onChange(String(clamped));
            return;
          }
        }
        onChange(raw);
      }
    : undefined;

  return (
    <div>
      <Label htmlFor={id} required={required} variant={variant}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        autoComplete={autoComplete}
        maxLength={maxLength}
        minLength={minLength}
        min={min}
        max={max}
        step={step}
        inputMode={inputMode}
        pattern={pattern}
        className={className}
        aria-describedby={describedBy}
        aria-invalid={hasError || undefined}
        onChange={
          handleChange
            ? (e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)
            : undefined
        }
        onBlur={onBlur}
      />
      {errorMessage && (
        <p id={errorId} role='alert' className='mt-1 text-sm text-red-500'>
          {errorMessage}
        </p>
      )}
      {helperText && !errorMessage && (
        <p id={helperId} className='mt-1 text-sm text-light'>
          {helperText}
        </p>
      )}
    </div>
  );
}
