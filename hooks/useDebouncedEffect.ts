'use client';

import { useEffect, useRef, type DependencyList } from 'react';

type Callback = () => void | Promise<void>;

type UseDebouncedEffectOptions = {
  enabled?: boolean;
};

export function useDebouncedEffect(callback: Callback, delayMs: number, deps: DependencyList, options: UseDebouncedEffectOptions = {}) {
  const { enabled = true } = options;

  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled) return;

    const timer = window.setTimeout(() => {
      void callbackRef.current();
    }, delayMs);

    return () => window.clearTimeout(timer);
  }, [...deps, delayMs, enabled]);
}
