import { useId, type ReactNode } from 'react';
import Input from '@/components/atoms/form/Input';
import InputColor from '@/components/atoms/form/InputColor';
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
  textFieldClassName?: string;
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
  textFieldClassName = 'h-10 flex-1',
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
    <div>
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
        />
        {withTextField && (
          <Input
            type='text'
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            className={textFieldClassName}
          />
        )}
      </div>
    </div>
  );
}
