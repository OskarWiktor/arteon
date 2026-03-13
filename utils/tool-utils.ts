/**
 * Tool utilities and constants
 * Helper functions for tool operations and validation
 */

import type { Locale } from '@/types/locale';
import type { ToolItemKey, ToolDefinition, ToolsSectionDefinition } from '@/types/tools/common';

// Tool Section Icons
export const TOOL_SECTION_ICONS = {
  obrazy: 'RiImageEditLine',
  seo: 'RiSearchLine',
  email: 'RiMailLine',
  kolory: 'RiPaletteLine',
  qr: 'RiQrCodeLine',
  ruler: 'RiRulerLine',
  article: 'RiArticleLine',
  contrast: 'RiContrast2Line',
  crop: 'RiCropLine',
  filePdf: 'RiFilePdf2Line',
  fileText: 'RiFileTextLine',
  loop: 'RiLoopLeftLine',
  apps: 'RiAppsLine',
} as const;

// Tool Section Keys
export type ToolSectionKey = keyof typeof TOOL_SECTION_ICONS;

// Tool Section Structure
export interface ToolSection {
  key: ToolSectionKey;
  icon: string;
  locales: Record<string, { title: string }>;
}

// Tool Locale Text Structure
export interface ToolLocaleText {
  title: string;
  description?: string;
  meta?: {
    title?: string;
    description?: string;
  };
  popular?: string[];
  examples?: string[];
  features?: string[];
}

// Validation Constants
export const TOOL_VALIDATION_RULES = {
  MAX_TOOL_COUNT: 92,
  MAX_SECTION_COUNT: 13,
  MAX_LOCALE_COUNT: 16,
  MAX_TOOL_KEY_LENGTH: 50,
  MAX_TOOL_DESCRIPTION_LENGTH: 500,
} as const;

// Error Messages
export const TOOL_ERROR_MESSAGES = {
  INVALID_TOOL_KEY: 'Nieprawidłowy klucz narzędzia',
  INVALID_SECTION_KEY: 'Nieprawidłowa sekcja',
  TOOL_NOT_FOUND: 'Narzędzie nie zostało znaleziony',
  SECTION_NOT_FOUND: 'Sekcja nie została znaleziona',
} as const;

// Helper Functions
export function getToolSectionIcon(sectionKey: ToolSectionKey): string {
  return TOOL_SECTION_ICONS[sectionKey] || 'RiAppsLine';
}

export function isValidToolKey(key: string): key is ToolItemKey {
  return typeof key === 'string' && key.length > 0 && key.length <= TOOL_VALIDATION_RULES.MAX_TOOL_KEY_LENGTH;
}

export function isValidSectionKey(key: string): key is ToolSectionKey {
  return key in TOOL_SECTION_ICONS;
}

// Performance optimization for tool lookups
export const TOOL_SECTION_CACHE = new Map<string, ToolSection>();

export function getToolSection(sectionKey: ToolSectionKey, sections: ToolsSectionDefinition[]): ToolSection | null {
  const cacheKey = `${sectionKey}_${sections.length}`;
  if (TOOL_SECTION_CACHE.has(cacheKey)) {
    return TOOL_SECTION_CACHE.get(cacheKey) || null;
  }

  const section = sections.find((s) => s.key === sectionKey);
  if (section) {
    const toolSection: ToolSection = {
      key: sectionKey,
      icon: getToolSectionIcon(sectionKey),
      locales: section.locales,
    };
    TOOL_SECTION_CACHE.set(cacheKey, toolSection);
    return toolSection;
  }

  return null;
}

// Tool validation
export function validateToolDefinition(tool: ToolDefinition): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!isValidToolKey(tool.key)) {
    errors.push(TOOL_ERROR_MESSAGES.INVALID_TOOL_KEY);
  }

  if (!tool.locales || Object.keys(tool.locales).length === 0) {
    errors.push('Brak zdefiniowanych lokalizacji');
  }

  for (const [locale, text] of Object.entries(tool.locales)) {
    if (!text.title || text.title.trim().length === 0) {
      errors.push(`Brak tytułu dla lokalizacji ${locale}`);
    }

    if (text.title.length > 100) {
      errors.push(`Tytuł zbyt długi dla lokalizacji ${locale}`);
    }

    if (text.description && text.description.length > TOOL_VALIDATION_RULES.MAX_TOOL_DESCRIPTION_LENGTH) {
      errors.push(`Opis zbyt długi dla lokalizacji ${locale}`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Helper function to get tool display name
export function getToolDisplayName(tool: ToolDefinition, locale: Locale): string {
  return tool.locales[locale]?.title || tool.locales.en?.title || tool.key;
}

// Helper function to get tool description
export function getToolDescription(tool: ToolDefinition, locale: Locale): string {
  return tool.locales[locale]?.description || tool.locales.en?.description || '';
}

// Helper function to check if tool is available in locale
export function isToolAvailableInLocale(tool: ToolDefinition, locale: Locale): boolean {
  return !!tool.locales[locale]?.title;
}
