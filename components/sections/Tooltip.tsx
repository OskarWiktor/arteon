'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

type Placement = 'top' | 'bottom';

interface TooltipProps {
  children: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  placement?: Placement;
  delay?: number;
  className?: string;
  nativeTitle?: string;
}

export default function Tooltip({ children, title, description, placement = 'top', delay = 80, className = '', nativeTitle }: TooltipProps) {
  const id = useId().replace(/:/g, '');
  const bubbleId = `tt-${id}`;
  const rootRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const r = useReducedMotion();

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

  const clearTimer = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const show = () => {
    clearTimer();
    timerRef.current = window.setTimeout(() => setOpen(true), delay) as unknown as number;
  };
  const hideImmediately = () => {
    clearTimer();
    setOpen(false);
  };
  const toggleTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    clearTimer();
    setOpen((v) => !v);
  };

  useEffect(() => {
    if (!open) return;

    const onScroll = () => hideImmediately();

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) hideImmediately();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') hideImmediately();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <span ref={rootRef} className="relative inline" onMouseLeave={hideImmediately}>
      <abbr
        className={[
          'tooltip-trigger',
          'cursor-help underline decoration-dotted underline-offset-2',
          'transition-colors hover:text-black focus-visible:text-black',
          'rounded focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:outline-none',
          className,
        ].join(' ')}
        title={nativeTitle ?? title}
        aria-describedby={bubbleId}
        aria-expanded={open}
        role="button"
        tabIndex={0}
        onMouseEnter={show}
        onFocus={show}
        onBlur={hideImmediately}
        onTouchStart={toggleTouch}
      >
        {children}
      </abbr>

      <AnimatePresence>
        {open && (
          <motion.div
            id={bubbleId}
            role="tooltip"
            initial={{ opacity: 0, y: r ? 0 : placement === 'top' ? 6 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: r ? 0 : placement === 'top' ? 6 : -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={[
              'absolute z-[60] max-w-xs rounded-xl bg-black px-3 py-2 text-sm text-white shadow-lg',
              placement === 'top' ? 'top-full left-1/2 mt-2 -translate-x-1/2' : 'bottom-full left-1/2 mb-2 -translate-x-1/2',
            ].join(' ')}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={hideImmediately}
          >
            <strong className="font-medium">{title}</strong>
            {description ? <div className="mt-1 text-white/90">{description}</div> : null}

            <span aria-hidden className={['absolute h-2 w-2 rotate-45 bg-black', placement === 'top' ? '-top-1 left-1/2 -translate-x-1/2' : '-bottom-1 left-1/2 -translate-x-1/2'].join(' ')} />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
