'use client';

import { useEffect, useRef } from 'react';

type AnyEventListener = (...args: unknown[]) => void;

export function useEventListener<T extends EventTarget, K extends string>(
  target: T | null,
  type: K,
  listener: AnyEventListener,
  options?: boolean | AddEventListenerOptions,
  enabled: boolean = true
) {
  const listenerRef = useRef(listener);

  useEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!enabled) return;
    if (!target) return;

    const wrapped = (event: Event) => {
      (listenerRef.current as (e: Event) => void)(event);
    };

    target.addEventListener(type, wrapped, options);
    return () => target.removeEventListener(type, wrapped, options);
  }, [target, type, options, enabled]);
}
