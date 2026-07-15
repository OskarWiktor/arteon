import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';

interface ToolFileRowProps {
  name: string;
  meta: ReactNode;
  actions?: ReactNode;
  preview?: ReactNode;
  className?: string;
}

/**
 * Renders a responsive row displaying a file/tool preview, its name, metadata, and optional action controls.
 *
 * @param name - Visible title of the file or tool; also applied to the element `title` attribute for tooltip on overflow.
 * @param meta - Metadata content rendered beneath the name (e.g., size, type, timestamps).
 * @param actions - Optional action elements rendered on the right side of the row.
 * @param preview - Optional preview element (icon, thumbnail) shown before the name and meta.
 * @param className - Optional additional CSS classes merged into the container.
 * @returns A JSX element representing the styled, responsive file/tool row.
 */
export default function ToolFileRow({
  name,
  meta,
  actions,
  preview,
  className,
}: ToolFileRowProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 border border-neutral-200 bg-white px-3 py-2 md:flex-row md:items-center md:justify-between',
        className,
      )}
    >
      <div className='flex w-1/2 min-w-0 flex-1 items-center gap-3'>
        {preview}
        <div className='min-w-0 flex-1'>
          <div title={name}>
            <p className='tool-value truncate text-dark'>{name}</p>
          </div>
          <div className='tool-meta'>{meta}</div>
        </div>
      </div>
      {actions && (
        <div className='flex w-1/2 items-center gap-1'>{actions}</div>
      )}
    </div>
  );
}
