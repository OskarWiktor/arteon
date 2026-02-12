import type { ReactNode } from 'react';

interface ToolRangeInputProps {
  label?: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  suffix?: string;
  helper?: ReactNode;
  className?: string;
}

export default function ToolRangeInput({ label, value, min, max, onChange, suffix = '', helper, className = '' }: ToolRangeInputProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="tool-value flex items-center justify-between">
          <span>{label}</span>
          <span>
            {value}
            {suffix}
          </span>
        </label>
      )}
      <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} className="tool-range" />
      {helper && <p className="tool-meta">{helper}</p>}
    </div>
  );
}
