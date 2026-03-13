/**
 * Locale utilities and category labels
 * Helper functions for locale-specific operations
 */

import type { Locale } from '@/types/locale';
import type { FormatCategory } from './format-utils';

// Category Labels per locale
export const CATEGORY_LABELS: Record<FormatCategory, Record<string, string>> = {
  images: {
    pl: 'Obrazy',
    en: 'Images',
    de: 'Bilder',
    es: 'Imágenes',
    fr: 'Images',
    pt: 'Imagens',
    it: 'Immagini',
    ro: 'Imagini',
    nl: 'Afbeeldingen',
    hu: 'Képek',
    cs: 'Obrázky',
    sv: 'Bilder',
    da: 'Billeder',
    no: 'Bilder',
    fi: 'Kuvat',
    el: 'Εικόνες',
  },
  documents: {
    pl: 'Dokumenty',
    en: 'Documents',
    de: 'Dokumente',
    es: 'Documentos',
    fr: 'Documents',
    pt: 'Documentos',
    it: 'Documenti',
    ro: 'Documente',
    nl: 'Documenten',
    hu: 'Dokumentumok',
    cs: 'Dokumenty',
    sv: 'Dokument',
    da: 'Dokumenter',
    no: 'Dokumenter',
    fi: 'Asiakirjat',
    el: 'Έγγραφα',
  },
  data: {
    pl: 'Dane',
    en: 'Data',
    de: 'Daten',
    es: 'Datos',
    fr: 'Données',
    pt: 'Dados',
    it: 'Dati',
    ro: 'Date',
    nl: 'Data',
    hu: 'Adatok',
    cs: 'Data',
    sv: 'Data',
    da: 'Data',
    no: 'Data',
    fi: 'Data',
    el: 'Δεδομένα',
  },
  units: {
    pl: 'Jednostki',
    en: 'Units',
    de: 'Einheiten',
    es: 'Unidades',
    fr: 'Unités',
    pt: 'Unidades',
    it: 'Unità',
    ro: 'Unități',
    nl: 'Eenheden',
    hu: 'Mértékegységek',
    cs: 'Jednotky',
    sv: 'Enheter',
    da: 'Enheder',
    no: 'Enheter',
    fi: 'Yksiköt',
    el: 'Μονάδες',
  },
} as const;

// Helper function to get category label for a locale
export function getCategoryLabel(category: FormatCategory, locale: string): string {
  const labels = CATEGORY_LABELS[category];
  return labels[locale] || labels.en || category;
}

// Helper function to get all category labels for a locale
export function getAllCategoryLabels(locale: string): Record<string, string> {
  const labels: Record<string, string> = {};
  for (const category in CATEGORY_LABELS) {
    labels[category] = getCategoryLabel(category as FormatCategory, locale);
  }
  return labels;
}

// Common locale validation
export function isValidLocale(locale: string): locale is Locale {
  const validLocales: Locale[] = ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'];
  return validLocales.includes(locale as Locale);
}

// Helper function to get locale display name
export function getLocaleDisplayName(locale: Locale): string {
  const displayNames: Record<Locale, string> = {
    pl: 'Polski',
    en: 'English',
    de: 'Deutsch',
    es: 'Español',
    fr: 'Français',
    pt: 'Português',
    it: 'Italiano',
    ro: 'Română',
    nl: 'Nederlands',
    hu: 'Magyar',
    cs: 'Čeština',
    sv: 'Svenska',
    da: 'Dansk',
    no: 'Norsk',
    fi: 'Suomi',
    el: 'Ελληνικά',
  };
  return displayNames[locale] || locale;
}
