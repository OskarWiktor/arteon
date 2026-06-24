'use client';

import { useCallback, useEffect, useRef } from 'react';

export function useTimeout() {
  const timerRef = useRef<number | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current == null) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  const start = (callback: () => void, delayMs: number) => {
    clear();
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      callback();
    }, delayMs);
  };

  useEffect(() => clear, [clear]);

  return { start, clear };
}
