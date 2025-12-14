'use client';

import { useCallback, useEffect, useRef } from 'react';

type TimeoutId = number;

export function useTimeout() {
  const timerRef = useRef<TimeoutId | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current == null) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  const start = useCallback(
    (callback: () => void, delayMs: number) => {
      clear();
      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        callback();
      }, delayMs);
    },
    [clear]
  );

  useEffect(() => clear, [clear]);

  return { start, clear };
}
