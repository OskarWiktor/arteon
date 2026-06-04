'use client';

import { useEffect } from 'react';

export default function AbbrTouchHandler() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouch) return;

    let tooltip: HTMLDivElement | null = null;
    let hideTimeout: ReturnType<typeof setTimeout> | null = null;

    const showTooltip = (target: HTMLElement, text: string) => {
      hideTooltip();

      tooltip = document.createElement('div');
      tooltip.className =
        'fixed z-[9999] max-w-xs rounded-lg bg-black px-4 py-3 text-sm text-white shadow-lg pointer-events-none';
      tooltip.style.transform = 'translateX(-50%)';
      tooltip.textContent = text;
      document.body.appendChild(tooltip);

      const rect = target.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();

      let top = rect.top - tooltipRect.height - 8;
      let left = rect.left + rect.width / 2;

      if (top < 10) {
        top = rect.bottom + 8;
      }

      const halfWidth = tooltipRect.width / 2;
      if (left - halfWidth < 10) {
        left = halfWidth + 10;
      } else if (left + halfWidth > innerWidth - 10) {
        left = innerWidth - halfWidth - 10;
      }

      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;

      hideTimeout = setTimeout(hideTooltip, 3000);
    };

    const hideTooltip = () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      if (tooltip) {
        tooltip.remove();
        tooltip = null;
      }
    };

    const handleTouch = (e: TouchEvent) => {
      const target = e.target as HTMLElement;

      if (target.tagName === 'ABBR' && target.hasAttribute('title')) {
        e.preventDefault();
        const title = target.getAttribute('title');
        if (title) {
          showTooltip(target, title);
        }
      } else {
        hideTooltip();
      }
    };

    document.addEventListener('touchend', handleTouch, { passive: false });

    const handleScroll = () => hideTooltip();
    addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('touchend', handleTouch);
      removeEventListener('scroll', handleScroll);
      hideTooltip();
    };
  }, []);

  return null;
}
