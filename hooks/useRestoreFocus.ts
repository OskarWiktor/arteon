'use client';

import { useEffect, useRef } from 'react';

export function useRestoreFocus(enabled: boolean) {
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const wasEnabled = useRef(false);

  useEffect(() => {
    if (enabled) {
      wasEnabled.current = true;
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      return;
    }

    if (wasEnabled.current) {
      wasEnabled.current = false;
      // preventScroll is essential: the trigger often lives in a sticky header,
      // and focusing it without this scrolls the page to the header's in-flow
      // position (a visible jump when closing the dialog).
      setTimeout(
        () => previouslyFocused.current?.focus({ preventScroll: true }),
        0,
      );
    }
  }, [enabled]);

  useEffect(() => {
    return () => {
      if (wasEnabled.current) {
        setTimeout(
          () => previouslyFocused.current?.focus({ preventScroll: true }),
          0,
        );
      }
    };
  }, []);
}
