'use client';

import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

type EventType = MouseEvent | TouchEvent;

type Handler = (event: EventType) => void;

export function useOutsideClick(
  ref: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[],
  handler: Handler,
  enabled: boolean = true,
) {
  const handlerRef = useRef(handler);
  const refsRef = useRef(ref);

  useEffect(() => {
    handlerRef.current = handler;
    refsRef.current = ref;
  });

  useEffect(() => {
    if (!enabled) return;

    const onPointerDown = (e: EventType) => {
      const refs = Array.isArray(refsRef.current) ? refsRef.current : [refsRef.current];
      const target = e.target as Node | null;
      if (!target) return;

      for (const r of refs) {
        const el = r.current;
        if (el && el.contains(target)) return;
      }

      handlerRef.current(e);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [enabled]);
}
