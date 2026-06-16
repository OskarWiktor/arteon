'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useEventListener } from '@/hooks/useEventListener';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useTimeout } from '@/hooks/useTimeout';
import { cn } from '@/lib/clsx';
import { focusRingClasses } from '@/lib/uiClasses';

const PASSIVE_SCROLL: AddEventListenerOptions = { passive: true };

interface TooltipProps {
  children: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  placement?: 'top' | 'bottom';
  delay?: number;
  className?: string;
  nativeTitle?: string;
}

/**
 * Render a keyboard- and touch-accessible tooltip trigger and its positioned tooltip bubble.
 *
 * The trigger is an `abbr` element that shows a styled tooltip with an optional description
 * on mouse hover, focus, or touch. The tooltip is closed on Escape, outside interactions,
 * scroll, or when the pointer leaves the component.
 *
 * @param children - Content rendered inside the tooltip trigger element
 * @param title - Main text shown in the tooltip bubble
 * @param description - Optional secondary text shown below the title inside the bubble
 * @param placement - Preferred tooltip placement relative to the trigger; `'top'` or `'bottom'` (default: `'top'`)
 * @param delay - Milliseconds to wait before showing the tooltip after an open-triggering event (default: `80`)
 * @param className - Additional classes applied to the trigger element
 * @param nativeTitle - If provided, used for the trigger's HTML `title` attribute instead of `title`
 * @returns The rendered Tooltip React element
 */
export default function Tooltip({
  children,
  title,
  description,
  placement = 'top',
  delay = 80,
  className,
  nativeTitle,
}: TooltipProps) {
  const id = useId().replace(/:/g, '');
  const bubbleId = `tt-${id}`;
  const rootRef = useRef<HTMLSpanElement>(null);
  const { start, clear } = useTimeout();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const KEY = '__tooltip_dotted_underline_injected__' as const;
    interface WindowWithTooltipFlag extends Window {
      [KEY]?: boolean;
    }
    const win = window as WindowWithTooltipFlag;
    if (win[KEY]) return;
    const style = document.createElement('style');
    style.textContent = `
      @media (pointer: coarse) {
        abbr.tooltip-trigger {
          text-decoration-thickness: from-font;
        }
      }
    `;
    document.head.appendChild(style);
    win[KEY] = true;
  }, []);

  const show = () => {
    start(() => setOpen(true), delay);
  };
  const hideImmediately = () => {
    clear();
    setOpen(false);
  };
  const toggleTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    clear();
    setOpen(v => !v);
  };

  useEscapeKey(hideImmediately, open);
  useOutsideClick(rootRef, hideImmediately, open);
  useEventListener(
    typeof window !== 'undefined' ? window : null,
    'scroll',
    hideImmediately,
    PASSIVE_SCROLL,
    open,
  );

  return (
    <span
      ref={rootRef}
      className='relative inline'
      onMouseLeave={hideImmediately}
    >
      <abbr
        className={cn(
          'cursor-help rounded underline decoration-dotted underline-offset-2 transition-colors hover:text-dark focus-visible:text-dark',
          focusRingClasses,
          className,
        )}
        title={nativeTitle ?? title}
        aria-describedby={bubbleId}
        aria-expanded={open}
        role='button'
        tabIndex={0}
        onMouseEnter={show}
        onFocus={show}
        onBlur={hideImmediately}
        onTouchStart={toggleTouch}
      >
        {children}
      </abbr>

      {open && (
        <div
          id={bubbleId}
          role='tooltip'
          className={cn(
            'absolute z-60 max-w-xs rounded-lg bg-black px-3 py-2 text-sm text-white shadow-lg',
            placement === 'top'
              ? 'top-full left-1/2 mt-2 animate-[tooltip-in_0.18s_ease-out_both]'
              : 'bottom-full left-1/2 mb-2 animate-[tooltip-in-bottom_0.18s_ease-out_both]',
          )}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={hideImmediately}
        >
          <strong className='font-medium'>{title}</strong>
          {description && (
            <div className='mt-1 text-white/90'>{description}</div>
          )}

          <span
            aria-hidden
            className={cn(
              'absolute h-2 w-2 rotate-45 bg-black',
              placement === 'top'
                ? '-top-1 left-1/2 -translate-x-1/2'
                : '-bottom-1 left-1/2 -translate-x-1/2',
            )}
          />
        </div>
      )}
    </span>
  );
}
