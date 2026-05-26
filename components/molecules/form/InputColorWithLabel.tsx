import { useId, type ReactNode } from 'react';
import InputColor from '@/components/atoms/form/InputColor';
import Input from '@/components/atoms/form/Input';
import Label from '@/components/atoms/form/Label';

interface InputColorWithLabelProps {
  id?: string;
  label?: ReactNode;
  variant?: 'default' | 'tool';
  value: string;
  onChange: (value: string) => void;
  withTextField?: boolean;
  pickerValue?: string;
  onPickerChange?: (value: string) => void;
  ariaLabel?: string;
  placeholder?: string;
  pickerClassName?: string;
  textFieldClassName?: string;
  wrapperClassName?: string;
  disabled?: boolean;
}

export default function InputColorWithLabel({
  id: providedId,
  label,
  variant = 'tool',
  value,
  onChange,
  withTextField = false,
  pickerValue,
  onPickerChange,
  ariaLabel,
  placeholder,
  pickerClassName,
  textFieldClassName = 'h-10 flex-1',
  wrapperClassName,
  disabled,
}: InputColorWithLabelProps) {
  const autoId = useId();
  const id = providedId ?? autoId;
  const pickerVal = pickerValue ?? value;

  const handlePickerChange = (hex: string) => {
    if (onPickerChange) {
      onPickerChange(hex);
    }
    onChange(hex);
  };

  return (
    <div className={wrapperClassName}>
      {label && (
        <Label htmlFor={id} variant={variant}>
          {label}
        </Label>
      )}
      <div className='flex items-center gap-2'>
        <InputColor
          id={id}
          value={pickerVal}
          onChange={e => handlePickerChange(e.target.value)}
          aria-label={ariaLabel}
          disabled={disabled}
          className={pickerClassName}
        />
        {withTextField && (
          <Input
            type='text'
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className={textFieldClassName}
          />
        )}
      </div>
    </div>
  );
}
