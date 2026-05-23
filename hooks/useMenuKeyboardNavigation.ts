'use client';

import type { RefObject } from 'react';

type Options = {
  itemSelector?: string;
};

export function useMenuKeyboardNavigation(
  containerRef: RefObject<HTMLElement | null>,
  options?: Options,
) {
  const itemSelector = options?.itemSelector ?? 'a[href]';

  const getItems = () => {
    const container = containerRef.current;
    if (!container) return [] as HTMLElement[];
    return Array.from(container.querySelectorAll<HTMLElement>(itemSelector));
  };

  const focusItem = (index: number) => {
    const items = getItems();
    if (!items.length) return;
    const safe = Math.max(0, Math.min(index, items.length - 1));
    items[safe]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const items = getItems();
    if (!items.length) return;

    const currentIndex = items.findIndex(el => el === document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusItem(currentIndex < 0 ? 0 : currentIndex + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusItem(currentIndex <= 0 ? 0 : currentIndex - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusItem(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusItem(items.length - 1);
    }
  };

  return {
    onKeyDown,
    focusItem,
    focusFirst: () => focusItem(0),
    focusLast: () => {
      const items = getItems();
      if (!items.length) return;
      focusItem(items.length - 1);
    },
  };
}
