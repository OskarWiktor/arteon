interface ToolTextInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'url' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  className?: string;
  inputClassName?: string;
}

export default function ToolTextInput({ label, value, onChange, type = 'text', placeholder, required, className = '', inputClassName = 'w-full' }: ToolTextInputProps) {
  return (
    <div className={className}>
      {label && (
        <label className="tool-label mb-1 block">
          {label}
          {required && ' *'}
        </label>
      )}
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={`tool-input ${inputClassName}`} />
    </div>
  );
}
