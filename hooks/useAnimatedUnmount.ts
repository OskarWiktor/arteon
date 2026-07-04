'use client';

import { useEffect, useState } from 'react';

/**
 * Keep a conditionally-rendered element mounted long enough to play an exit
 * animation before it disappears.
 *
 * Returns `shouldRender` — use it as the mount gate instead of the raw open
 * flag — and `isClosing`, which is true only during the exit window so the
 * caller can swap the entrance animation class for an exit one.
 *
 * @param isOpen - The real open state of the element.
 * @param exitMs - How long the exit animation runs before unmounting.
 */
export function useAnimatedUnmount(isOpen: boolean, exitMs = 180) {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      return;
    }
    if (!shouldRender) return;
    const timer = setTimeout(() => setShouldRender(false), exitMs);
    return () => clearTimeout(timer);
  }, [isOpen, exitMs, shouldRender]);

  return { shouldRender, isClosing: shouldRender && !isOpen };
}
