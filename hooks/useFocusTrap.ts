'use client';

import { useEffect } from 'react';
import type { RefObject } from 'react';

const DEFAULT_FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(containerRef: RefObject<HTMLElement | null>, enabled: boolean, focusableSelectors: string = DEFAULT_FOCUSABLE) {
  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const root = containerRef.current;
      if (!root) return;

      const nodes = Array.from(root.querySelectorAll<HTMLElement>(focusableSelectors)).filter((el) => !el.hasAttribute('disabled') && (el.offsetParent !== null || el === document.activeElement));

      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [enabled, containerRef, focusableSelectors]);
}
