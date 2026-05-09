'use client';

import { useEffect, useRef } from 'react';

type TimeoutId = number;

export function useTimeout() {
  const timerRef = useRef<TimeoutId | null>(null);

  const clear = () => {
    if (timerRef.current == null) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

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
