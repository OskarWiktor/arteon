import type { ReactNode } from 'react';

interface ToolSelectProps {
  label?: string;
  value: string | number;
  onChange: (value: string) => void;
  children: ReactNode;
  className?: string;
  selectClassName?: string;
}

export default function ToolSelect({ label, value, onChange, children, className = '', selectClassName = 'w-full' }: ToolSelectProps) {
  return (
    <div className={className}>
      {label && <label className="tool-label mb-2 block">{label}</label>}
      <select className={`tool-select ${selectClassName}`} value={value} onChange={(e) => onChange(e.target.value)}>
        {children}
      </select>
    </div>
  );
}
