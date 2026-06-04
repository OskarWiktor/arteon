import { useId, type ChangeEvent, type ReactNode } from 'react';
import Label from '@/components/atoms/form/Label';
import Textarea from '@/components/atoms/form/Textarea';

interface TextareaWithLabelProps {
  id?: string;
  label: ReactNode;
  variant?: 'default' | 'tool';
  name?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  rows?: number;
  className?: string;
  onChange?: (value: string) => void;
}

export default function TextareaWithLabel({
  id: providedId,
  label,
  variant = 'default',
  name,
  value,
  placeholder,
  required,
  readOnly,
  rows,
  className,
  onChange,
}: TextareaWithLabelProps) {
  const autoId = useId();
  const id = providedId ?? autoId;

  return (
    <div>
      <Label htmlFor={id} required={required} variant={variant}>
        {label}
      </Label>
      <Textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        rows={rows}
        className={className}
        onChange={
          onChange
            ? (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)
            : undefined
        }
      />
    </div>
  );
}
