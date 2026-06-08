import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';

interface ButtonToolProps<T extends string> {
  id: T;
  active: T;
  onClick: (id: T) => void;
  icon: ReactNode;
  label: string;
}

const buttonToolClasses =
  'flex items-center gap-2 rounded-md border px-3 py-1.5 text-[14px]!';

export default function ButtonTool<T extends string>({
  id,
  active,
  onClick,
  icon,
  label,
}: ButtonToolProps<T>) {
  const isActive = id === active;

  return (
    <button
      type='button'
      onClick={() => onClick(id)}
      className={cn(
        buttonToolClasses,
        isActive
          ? 'bg-primary text-white'
          : 'border-neutral-200 bg-white hover:bg-neutral-100',
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
