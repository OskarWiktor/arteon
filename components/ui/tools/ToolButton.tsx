import type { ReactNode } from 'react';

interface ToolButtonProps<T extends string> {
  id: T;
  active: T;
  onClick: (id: T) => void;
  icon: ReactNode;
  label: string;
}

export default function ToolButton<T extends string>({ id, active, onClick, icon, label }: ToolButtonProps<T>) {
  const isActive = id === active;

  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-[14px]! ${isActive ? 'bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
