import type { ReactNode } from 'react';

interface ToolFileRowProps {
  name: string;
  meta: ReactNode;
  actions?: ReactNode;
  preview?: ReactNode;
  className?: string;
}

export default function ToolFileRow({ name, meta, actions, preview, className }: ToolFileRowProps) {
  return (
    <div className={`flex flex-col gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 md:flex-row md:items-center md:justify-between ${className ?? ''}`}>
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {preview}
        <div className="min-w-0 flex-1">
          <div title={name}>
            <p className="tool-value text-dark truncate">{name}</p>
          </div>
          <div className="tool-meta">{meta}</div>
        </div>
      </div>
      {actions && <div className="flex items-center gap-1">{actions}</div>}
    </div>
  );
}
