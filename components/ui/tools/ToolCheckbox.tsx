interface ToolCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
  className?: string;
}

export default function ToolCheckbox({ id, checked, onChange, label, disabled, className = '' }: ToolCheckboxProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} disabled={disabled} className="tool-checkbox" />
      <label htmlFor={id} className="tool-value cursor-pointer">
        {label}
      </label>
    </div>
  );
}
