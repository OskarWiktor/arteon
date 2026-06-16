'use client';

import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { cn } from '@/lib/clsx';
import { focusRingClasses, smallIconSizeClasses } from '@/lib/uiClasses';

const selectClasses =
  'h-11 w-full cursor-pointer appearance-none rounded-sm border border-neutral-300 bg-white py-2 pr-9 pl-3 text-sm text-dark transition';

/**
 * Render a styled native select element matching the Input atom's appearance,
 * with a custom dropdown arrow that mirrors the navigation submenu chevron.
 *
 * The native arrow is removed (`appearance-none`) and replaced with the shared
 * `RiArrowDownSLine` icon, which rotates 180deg while the dropdown is open. Open
 * state is tracked from the select's pointer/keyboard/focus interactions. All other
 * select props (including `children` for the option elements) are forwarded.
 *
 * @param className - Additional CSS class names merged with the component's base classes
 * @param props - All other standard select props forwarded to the underlying element
 * @returns A select JSX element wrapped with the custom rotating arrow
 */
export default function Select({
  className,
  onMouseDown,
  onKeyDown,
  onBlur,
  onChange,
  ...props
}: React.ComponentProps<'select'>) {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative w-full'>
      <select
        className={cn(selectClasses, focusRingClasses, className)}
        onMouseDown={e => {
          setOpen(o => !o);
          onMouseDown?.(e);
        }}
        onKeyDown={e => {
          if (e.key === 'Escape' || e.key === 'Tab' || e.key === 'Enter') {
            setOpen(false);
          }
          onKeyDown?.(e);
        }}
        onBlur={e => {
          setOpen(false);
          onBlur?.(e);
        }}
        onChange={e => {
          setOpen(false);
          onChange?.(e);
        }}
        {...props}
      />
      <span
        aria-hidden='true'
        className='pointer-events-none absolute top-1/2 right-3 inline-flex -translate-y-1/2 text-mid'
      >
        <span
          className='inline-flex transition-transform duration-200'
          style={{ transform: open ? 'rotate(180deg)' : undefined }}
        >
          <RiArrowDownSLine className={smallIconSizeClasses} />
        </span>
      </span>
    </div>
  );
}
