import type { Locale } from '@/types/locale';

/**
 * Centralne, synchroniczne źródło mikro-etykiet dostępności (ARIA, role,
 * sr-only) używanych przez komponenty współdzielone.
 *
 * Dlaczego osobny moduł, a nie `dictionary.json` + `useDictionary()`:
 * - część komponentów to synchroniczne komponenty serwerowe (np. `TableBlock`,
 *   `ColorPalette`), które nie mogą `await getDictionary()`,
 * - typ `Record<Locale, A11yStrings>` wymusza komplet wszystkich 16 języków
 *   w czasie kompilacji — brak tłumaczenia = błąd builda, bez skryptów runtime,
 * - moduł jest importowalny zarówno na serwerze, jak i na kliencie
 *   (brak `server-only`), więc działa też w komponentach `'use client'`.
 *
 * Komponenty klienckie pobierają `locale` przez `useLocale()`, komponenty
 * serwerowe — przez prop `locale`. W obu przypadkach wołają `getA11y(locale)`.
 */
export interface A11yStrings {
  /** Etykieta pojedynczej próbki koloru w palecie, np. „Kolor 1: #ff0000”. */
  colorSwatch: (index: number, value: string) => string;
  /** Domyślna etykieta regionu tabeli, gdy brak własnego podpisu. */
  tableRegion: string;
  /** Etykieta przycisku przełączania motywu jasny/ciemny. */
  themeToggle: string;
  /** Stan „spełnia kryterium” (np. dla wyniku kontrastu) — nie tylko kolorem. */
  meets: string;
  /** Stan „nie spełnia kryterium” — uzupełnia kolor o tekst (WCAG 1.4.1). */
  doesNotMeet: string;
}

export const A11Y_UI: Record<Locale, A11yStrings> = {
  pl: {
    colorSwatch: (i, v) => `Kolor ${i}: ${v}`,
    tableRegion: 'Tabela',
    themeToggle: 'Przełącz tryb jasny lub ciemny',
    meets: 'spełnia',
    doesNotMeet: 'nie spełnia',
  },
  en: {
    colorSwatch: (i, v) => `Color ${i}: ${v}`,
    tableRegion: 'Table',
    themeToggle: 'Toggle light or dark mode',
    meets: 'meets',
    doesNotMeet: 'does not meet',
  },
  de: {
    colorSwatch: (i, v) => `Farbe ${i}: ${v}`,
    tableRegion: 'Tabelle',
    themeToggle: 'Hellen oder dunklen Modus umschalten',
    meets: 'erfüllt',
    doesNotMeet: 'erfüllt nicht',
  },
  es: {
    colorSwatch: (i, v) => `Color ${i}: ${v}`,
    tableRegion: 'Tabla',
    themeToggle: 'Cambiar entre modo claro y oscuro',
    meets: 'cumple',
    doesNotMeet: 'no cumple',
  },
  fr: {
    colorSwatch: (i, v) => `Couleur ${i} : ${v}`,
    tableRegion: 'Tableau',
    themeToggle: 'Basculer entre le mode clair et sombre',
    meets: 'conforme',
    doesNotMeet: 'non conforme',
  },
  pt: {
    colorSwatch: (i, v) => `Cor ${i}: ${v}`,
    tableRegion: 'Tabela',
    themeToggle: 'Alternar entre o modo claro e escuro',
    meets: 'cumpre',
    doesNotMeet: 'não cumpre',
  },
  it: {
    colorSwatch: (i, v) => `Colore ${i}: ${v}`,
    tableRegion: 'Tabella',
    themeToggle: 'Attiva/disattiva la modalità chiara o scura',
    meets: 'soddisfa',
    doesNotMeet: 'non soddisfa',
  },
  nl: {
    colorSwatch: (i, v) => `Kleur ${i}: ${v}`,
    tableRegion: 'Tabel',
    themeToggle: 'Schakel tussen lichte en donkere modus',
    meets: 'voldoet',
    doesNotMeet: 'voldoet niet',
  },
  cs: {
    colorSwatch: (i, v) => `Barva ${i}: ${v}`,
    tableRegion: 'Tabulka',
    themeToggle: 'Přepnout světlý nebo tmavý režim',
    meets: 'splňuje',
    doesNotMeet: 'nesplňuje',
  },
  fi: {
    colorSwatch: (i, v) => `Väri ${i}: ${v}`,
    tableRegion: 'Taulukko',
    themeToggle: 'Vaihda vaalean ja tumman tilan välillä',
    meets: 'täyttää',
    doesNotMeet: 'ei täytä',
  },
  el: {
    colorSwatch: (i, v) => `Χρώμα ${i}: ${v}`,
    tableRegion: 'Πίνακας',
    themeToggle: 'Εναλλαγή φωτεινής ή σκοτεινής λειτουργίας',
    meets: 'πληροί',
    doesNotMeet: 'δεν πληροί',
  },
};

/** Zwraca zestaw etykiet dostępności dla danego języka (fallback: angielski). */
export function getA11y(locale: Locale): A11yStrings {
  return A11Y_UI[locale] ?? A11Y_UI.en;
}
