'use client';

import { useEffect } from 'react';

export function useScrollLock(locked: boolean, className: string = 'overflow-hidden') {
  useEffect(() => {
    const root = document.documentElement;
    if (locked) root.classList.add(className);
    else root.classList.remove(className);

    return () => root.classList.remove(className);
  }, [locked, className]);
}
