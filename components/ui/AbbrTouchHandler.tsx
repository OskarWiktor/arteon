'use client';

import { useEffect } from 'react';

/**
 * Client component that adds touch support for <abbr> elements in article content.
 * On touch devices, tapping an <abbr> with a title attribute shows an alert-like tooltip.
 * Uses a simple approach: shows the title in a temporary floating element.
 */
export default function AbbrTouchHandler() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only run on touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouch) return;

    let tooltip: HTMLDivElement | null = null;
    let hideTimeout: ReturnType<typeof setTimeout> | null = null;

    const showTooltip = (target: HTMLElement, text: string) => {
      hideTooltip();

      tooltip = document.createElement('div');
      tooltip.className =
        'fixed z-[9999] max-w-xs rounded-xl bg-black px-4 py-3 text-sm text-white shadow-lg pointer-events-none';
      tooltip.style.transform = 'translateX(-50%)';
      tooltip.textContent = text;
      document.body.appendChild(tooltip);

      const rect = target.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();

      // Position above the element, centered
      let top = rect.top - tooltipRect.height - 8;
      let left = rect.left + rect.width / 2;

      // If too close to top, show below
      if (top < 10) {
        top = rect.bottom + 8;
      }

      // Keep within screen bounds horizontally
      const halfWidth = tooltipRect.width / 2;
      if (left - halfWidth < 10) {
        left = halfWidth + 10;
      } else if (left + halfWidth > window.innerWidth - 10) {
        left = window.innerWidth - halfWidth - 10;
      }

      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;

      // Auto-hide after 3 seconds
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

      // Check if it's an abbr with title
      if (target.tagName === 'ABBR' && target.hasAttribute('title')) {
        e.preventDefault();
        const title = target.getAttribute('title');
        if (title) {
          showTooltip(target, title);
        }
      } else {
        // Clicked elsewhere, hide tooltip
        hideTooltip();
      }
    };

    // Use touchend for better UX (after the touch is complete)
    document.addEventListener('touchend', handleTouch, { passive: false });

    // Hide on scroll
    const handleScroll = () => hideTooltip();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('touchend', handleTouch);
      window.removeEventListener('scroll', handleScroll);
      hideTooltip();
    };
  }, []);

  return null;
}
