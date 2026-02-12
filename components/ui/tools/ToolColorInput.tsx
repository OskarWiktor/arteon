interface ToolColorInputProps {
  value: string;
  onChange: (value: string) => void;
  pickerValue?: string;
  onPickerChange?: (value: string) => void;
  ariaLabel?: string;
  placeholder?: string;
  inputClassName?: string;
}

export default function ToolColorInput({ value, onChange, pickerValue, onPickerChange, ariaLabel, placeholder, inputClassName = 'h-10 flex-1' }: ToolColorInputProps) {
  const pickerVal = pickerValue ?? value;

  const handlePickerChange = (hex: string) => {
    if (onPickerChange) {
      onPickerChange(hex);
    }
    onChange(hex);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="color"
        value={pickerVal}
        onChange={(e) => handlePickerChange(e.target.value)}
        aria-label={ariaLabel}
        className="tool-color-picker h-10! w-12!"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`tool-input ${inputClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
}
