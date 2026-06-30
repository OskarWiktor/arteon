import type { Locale } from '@/types/locale';

/**
 * Etykieta ujawnienia reklamy (np. „REKLAMA”) widoczna nad blokami AdSense.
 *
 * Wydzielona z komponentu `AdSense`, gdzie żyła jako mapa `Record<string, …>`.
 * Typ `Record<Locale, string>` wymusza komplet 16 języków w czasie kompilacji.
 * Moduł jest celowo lekki (bez importu pełnych słowników), aby nie powiększać
 * klienckiego bundla komponentu reklamowego.
 */
export const AD_LABEL: Record<Locale, string> = {
  pl: 'REKLAMA',
  en: 'ADVERTISEMENT',
  de: 'WERBUNG',
  es: 'PUBLICIDAD',
  fr: 'PUBLICITÉ',
  pt: 'PUBLICIDADE',
  it: 'PUBBLICITÀ',
  ro: 'PUBLICITATE',
  nl: 'ADVERTENTIE',
  hu: 'HIRDETÉS',
  cs: 'REKLAMA',
  sv: 'ANNONS',
  no: 'ANNONSE',
  fi: 'MAINOS',
  el: 'ΔΙΑΦΗΜΙΣΗ',
};

/** Zwraca etykietę reklamy dla danego języka (fallback: angielski). */
export function getAdLabel(locale: Locale): string {
  return AD_LABEL[locale] ?? AD_LABEL.en;
}
