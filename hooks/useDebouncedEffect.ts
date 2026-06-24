'use client';

import { useEffect, useRef, type DependencyList } from 'react';

type Callback = () => void | Promise<void>;

type UseDebouncedEffectOptions = {
  enabled?: boolean;
};

export function useDebouncedEffect(
  callback: Callback,
  delayMs: number,
  deps: DependencyList,
  options: UseDebouncedEffectOptions = {},
) {
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
    // `deps` is a caller-supplied dependency list (by design, like useEffect's own
    // deps array) — eslint-plugin-react-hooks cannot statically analyze a spread here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, delayMs, enabled]);
}
