'use client';

import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

type EventType = MouseEvent | TouchEvent;

type Handler = (event: EventType) => void;

export function useOutsideClick<T extends HTMLElement>(ref: RefObject<T | null>, handler: Handler, enabled: boolean = true) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!enabled) return;

    const onPointerDown = (e: EventType) => {
      const el = ref.current;
      if (!el) return;
      const target = e.target as Node | null;
      if (!target) return;
      if (!el.contains(target)) handlerRef.current(e);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [enabled, ref]);
}
