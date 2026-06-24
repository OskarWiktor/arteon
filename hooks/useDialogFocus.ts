'use client';

import { useEffect } from 'react';
import type { RefObject } from 'react';
import { useFocusTrap } from './useFocusTrap';
import { useRestoreFocus } from './useRestoreFocus';

/**
 * Kompletna obsługa focusu dla dialogu modalnego (WCAG 2.1.2 / 2.4.3):
 * - po otwarciu przenosi focus do kontenera dialogu, dzięki czemu czytnik ekranu
 *   ogłasza dialog, a użytkownik klawiatury zaczyna nawigację wewnątrz,
 * - zatrzymuje Tab/Shift+Tab wewnątrz dialogu (focus trap),
 * - po zamknięciu przywraca focus do elementu, który otworzył dialog.
 *
 * Kontener musi być fokusowalny — nadaj mu `tabIndex={-1}`. Jeśli dialog sam
 * ustawia focus (np. na polu wyszukiwania), początkowy focus nie jest nadpisywany.
 *
 * Kolejność: `useRestoreFocus` rejestruje się jako pierwszy, więc zapamiętuje
 * element wyzwalający, zanim efekt początkowego focusu przeniesie focus do dialogu.
 */
export function useDialogFocus(
  containerRef: RefObject<HTMLElement | null>,
  isOpen: boolean,
) {
  useRestoreFocus(isOpen);
  useFocusTrap(containerRef, isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const root = containerRef.current;
    if (!root) return;
    if (!root.contains(document.activeElement)) {
      root.focus();
    }
  }, [isOpen, containerRef]);
}
