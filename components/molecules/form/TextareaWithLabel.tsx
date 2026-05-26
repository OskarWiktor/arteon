import { useId, type ChangeEvent, type FocusEvent, type ReactNode } from 'react';
import Label from '@/components/atoms/form/Label';
import Textarea from '@/components/atoms/form/Textarea';

interface TextareaWithLabelProps {
  id?: string;
  label: ReactNode;
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
  rows?: number;
  className?: string;
  wrapperClassName?: string;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  onChange?: (value: string) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
}

export default function TextareaWithLabel({
  id: providedId,
  label,
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
  rows,
  className,
  wrapperClassName,
  helperText,
  errorMessage,
  onChange,
  onBlur,
}: TextareaWithLabelProps) {
  const autoId = useId();
  const id = providedId ?? autoId;
  const helperId = helperText ? `${id}-helper` : undefined;
  const errorId = errorMessage ? `${id}-error` : undefined;
  const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;
  const hasError = Boolean(errorMessage);

  return (
    <div className={wrapperClassName}>
      <Label htmlFor={id} required={required} variant={variant}>
        {label}
      </Label>
      <Textarea
        id={id}
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
        rows={rows}
        className={className}
        aria-describedby={describedBy}
        aria-invalid={hasError || undefined}
        onChange={
          onChange ? (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value) : undefined
        }
        onBlur={onBlur}
      />
      {errorMessage && (
        <p id={errorId} role='alert' className='mt-1 text-sm text-red-500'>
          {errorMessage}
        </p>
      )}
      {helperText && !errorMessage && (
        <p id={helperId} className='text-light mt-1 text-sm'>
          {helperText}
        </p>
      )}
    </div>
  );
}
