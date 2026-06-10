import { useId, type ChangeEvent, type ReactNode } from 'react';
import Label from '@/components/atoms/form/Label';
import Select from '@/components/atoms/form/Select';

interface SelectWithLabelProps {
  id?: string;
  label: ReactNode;
  variant?: 'default' | 'tool';
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  helperText?: ReactNode;
  children: ReactNode;
  onChange?: (value: string) => void;
}

/**
 * Render a labeled native select with accessible label association and controlled change handling.
 *
 * The component generates a stable id when `id` is not provided and wires the `Label` to the
 * `Select` via `htmlFor`/`id`. The `children` are the `<option>` elements. `onChange` receives the
 * selected value as a string. Optional `helperText` is rendered below the select.
 *
 * @param label - Visible label content for the select.
 * @param variant - Controls label styling; `'tool'` applies compact uppercase styling.
 * @param labelClassName - Additional CSS class names applied to the label.
 * @param helperText - Supplemental helper text shown beneath the select.
 * @param children - The `<option>` elements rendered inside the select.
 * @param onChange - Callback invoked with the selected value as a string.
 * @returns The rendered label, select, and conditional helper text.
 */
export default function SelectWithLabel({
  id: providedId,
  label,
  variant = 'default',
  name,
  value,
  defaultValue,
  required,
  disabled,
  className,
  labelClassName,
  helperText,
  children,
  onChange,
}: SelectWithLabelProps) {
  const autoId = useId();
  const id = providedId ?? autoId;
  const helperId = helperText ? `${id}-helper` : undefined;

  return (
    <div>
      <Label
        htmlFor={id}
        required={required}
        variant={variant}
        className={labelClassName}
      >
        {label}
      </Label>
      <Select
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        className={className}
        aria-describedby={helperId}
        onChange={
          onChange
            ? (e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)
            : undefined
        }
      >
        {children}
      </Select>
      {helperText && (
        <p id={helperId} className='mt-1 text-sm text-light'>
          {helperText}
        </p>
      )}
    </div>
  );
}
