import { cn } from '@/lib/utils';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
}

export default function Checkbox({ id, checked, onChange, label, disabled }: CheckboxProps) {
  return (
    <div className={cn('mt-2 flex items-center gap-2')}>
      <input
        id={id}
        type='checkbox'
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        disabled={disabled}
        className='h-4 w-4! rounded border-neutral-300 p-0!'
      />
      <label htmlFor={id} className='tool-value cursor-pointer'>
        {label}
      </label>
    </div>
  );
}
