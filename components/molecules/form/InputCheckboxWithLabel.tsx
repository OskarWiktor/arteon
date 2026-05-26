import { useId } from 'react';
import InputCheckbox from '@/components/atoms/form/InputCheckbox';

interface InputCheckboxWithLabelProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
}

export default function InputCheckboxWithLabel({
  id: providedId,
  checked,
  onChange,
  label,
  disabled,
}: InputCheckboxWithLabelProps) {
  const autoId = useId();
  const id = providedId ?? autoId;

  return (
    <div className='mt-2 flex items-center gap-2'>
      <InputCheckbox
        id={id}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        disabled={disabled}
      />
      <label htmlFor={id} className='tool-value cursor-pointer'>
        {label}
      </label>
    </div>
  );
}
