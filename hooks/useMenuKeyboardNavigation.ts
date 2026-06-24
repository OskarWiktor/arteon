'use client';

import type { RefObject } from 'react';

type Options = {
  /** Selektor pozycji menu (focusowalnych). Domyślnie linki. */
  itemSelector?: string;
  /**
   * Wywoływane przy Tab/Shift+Tab — wzorzec WAI-ARIA menu: Tab zamyka menu.
   * Wywołujący odpowiada za zamknięcie i przywrócenie focusu na wyzwalacz.
   * Dzięki temu (przy menu w portalu) focus nie ucieka na koniec dokumentu.
   */
  onClose?: () => void;
};

/**
 * Klawiaturowa obsługa menu rozwijanego wg wzorca WAI-ARIA APG.
 *
 * - Strzałki ↑/↓: ruch w obrębie kolumny (grupy `data-menu-col`).
 * - Strzałki →/←: przejście między kolumnami (np. kategoria → jej podstrony).
 * - Home/End: pierwsza/ostatnia pozycja w kolumnie.
 * - Tab/Shift+Tab: zamknięcie menu (`onClose`) — focus nie ucieka poza menu.
 *
 * Pozycje powinny mieć `role="menuitem"` i `tabIndex={-1}` (focus sterowany JS),
 * a kontenery/pozycje kolumn — atrybut `data-menu-col="0|1|…"`.
 */
export function useMenuKeyboardNavigation(
  containerRef: RefObject<HTMLElement | null>,
  options?: Options,
) {
  const itemSelector = options?.itemSelector ?? 'a[href]';

  const getItems = () => {
    const container = containerRef.current;
    if (!container) return [] as HTMLElement[];
    return Array.from(container.querySelectorAll<HTMLElement>(itemSelector));
  };

  const colOf = (el: HTMLElement | null) =>
    Number(
      el
        ?.closest<HTMLElement>('[data-menu-col]')
        ?.getAttribute('data-menu-col') ?? '0',
    );

  const focusEl = (el?: HTMLElement) => el?.focus();

  const focusItem = (index: number) => {
    const items = getItems();
    if (!items.length) return;
    const safe = Math.max(0, Math.min(index, items.length - 1));
    focusEl(items[safe]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const items = getItems();
    if (!items.length) return;

    const active = document.activeElement as HTMLElement | null;

    if (e.key === 'Tab') {
      // Wzorzec menu: Tab zamyka i oddaje focus wyzwalaczowi (przez onClose).
      if (options?.onClose) {
        e.preventDefault();
        options.onClose();
      }
      return;
    }

    const col = colOf(active);
    const sameCol = items.filter(el => colOf(el) === col);
    const posInCol = sameCol.indexOf(active as HTMLElement);

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        focusEl(
          sameCol[
            posInCol < 0 ? 0 : Math.min(posInCol + 1, sameCol.length - 1)
          ],
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        focusEl(sameCol[posInCol <= 0 ? 0 : posInCol - 1]);
        break;
      case 'ArrowRight': {
        e.preventDefault();
        const next = items.find(el => colOf(el) === col + 1);
        if (next) focusEl(next);
        break;
      }
      case 'ArrowLeft': {
        e.preventDefault();
        const prev = [...items].reverse().find(el => colOf(el) === col - 1);
        if (prev) focusEl(prev);
        break;
      }
      case 'Home':
        e.preventDefault();
        focusEl(sameCol[0] ?? items[0]);
        break;
      case 'End':
        e.preventDefault();
        focusEl(sameCol[sameCol.length - 1] ?? items[items.length - 1]);
        break;
    }
  };

  return {
    onKeyDown,
    focusItem,
    focusFirst: () => focusItem(0),
    focusLast: () => {
      const items = getItems();
      if (!items.length) return;
      focusItem(items.length - 1);
    },
  };
}
