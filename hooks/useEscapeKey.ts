'use client';


import { useEventListener } from '@/hooks/useEventListener';

type Handler = (event: KeyboardEvent) => void;

export function useEscapeKey(handler: Handler, enabled: boolean = true) {
  const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handler(e);
    };

  useEventListener(typeof document !== 'undefined' ? document : null, 'keydown', onKeyDown as (...args: unknown[]) => void, undefined, enabled);
}
