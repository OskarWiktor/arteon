'use client';

import { useCallback } from 'react';
import { useEventListener } from '@/hooks/useEventListener';

type Handler = (event: KeyboardEvent) => void;

export function useEscapeKey(handler: Handler, enabled: boolean = true) {
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') handler(e);
    },
    [handler],
  );

  useEventListener(typeof document !== 'undefined' ? document : null, 'keydown', onKeyDown as (...args: unknown[]) => void, undefined, enabled);
}
