import type { ReactNode } from 'react';

interface ToolStatRowProps {
  label: string;
  value: ReactNode;
  className?: string;
}

export default function ToolStatRow({ label, value, className = '' }: ToolStatRowProps) {
  return (
    <div className={`flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2 ${className}`}>
      <span className="tool-value">{label}</span>
      <strong className="text-dark">{value}</strong>
    </div>
  );
}
