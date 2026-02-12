interface NumberFieldProps {
  label: string;
  suffix?: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  widthClass?: string;
}

export default function NumberField({ label, suffix, value, min, max, onChange, widthClass = 'w-20!' }: NumberFieldProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-medium">
          {label}
          {suffix ? ` (${suffix})` : ''}
        </span>
      </div>
      <input
        type="number"
        min={min}
        max={max}
        className={`tool-input mt-1 ${widthClass}`}
        value={value}
        onChange={(e) => {
          const raw = Number(e.target.value) || 0;
          const clamped = Math.min(max, Math.max(min, raw));
          onChange(clamped);
        }}
      />
    </div>
  );
}
