'use client';

import { useCallback } from 'react';
import type { RefObject } from 'react';

type Options = {
  itemSelector?: string;
};

export function useMenuKeyboardNavigation(containerRef: RefObject<HTMLElement | null>, options?: Options) {
  const itemSelector = options?.itemSelector ?? 'a[href]';

  const getItems = useCallback(() => {
    const container = containerRef.current;
    if (!container) return [] as HTMLElement[];
    return Array.from(container.querySelectorAll<HTMLElement>(itemSelector));
  }, [containerRef, itemSelector]);

  const focusItem = useCallback(
    (index: number) => {
      const items = getItems();
      if (!items.length) return;
      const safe = Math.max(0, Math.min(index, items.length - 1));
      items[safe]?.focus();
    },
    [getItems]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      const items = getItems();
      if (!items.length) return;

      const currentIndex = items.findIndex((el) => el === document.activeElement);

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
    },
    [focusItem, getItems]
  );

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
