import { useId, type ReactNode } from 'react';
import InputRange from '@/components/atoms/form/InputRange';

interface InputRangeWithLabelProps {
  id?: string;
  label?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  suffix?: string;
  helper?: ReactNode;
  disabled?: boolean;
  className?: string;
}

export default function InputRangeWithLabel({
  id: providedId,
  label,
  value,
  min,
  max,
  step,
  onChange,
  suffix = '',
  helper,
  disabled,
  className,
}: InputRangeWithLabelProps) {
  const autoId = useId();
  const id = providedId ?? autoId;

  return (
    <div className={`space-y-1 ${className ?? ''}`}>
      {label && (
        <label htmlFor={id} className='tool-value flex items-center justify-between'>
          <span>{label}</span>
          <span>
            {value}
            {suffix}
          </span>
        </label>
      )}
      <InputRange
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={e => onChange(Number(e.target.value))}
      />
      {helper && <p className='tool-meta'>{helper}</p>}
    </div>
  );
}
