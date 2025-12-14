'use client';

import { useEffect, useRef } from 'react';

type Handler = (event: KeyboardEvent) => void;

export function useEscapeKey(handler: Handler, enabled: boolean = true) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      handlerRef.current(e);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [enabled]);
}
