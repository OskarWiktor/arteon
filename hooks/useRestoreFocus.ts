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
      setTimeout(() => previouslyFocused.current?.focus(), 0);
    }
  }, [enabled]);

  useEffect(() => {
    return () => {
      if (wasEnabled.current) {
        setTimeout(() => previouslyFocused.current?.focus(), 0);
      }
    };
  }, []);
}
