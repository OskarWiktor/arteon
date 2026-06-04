import { cache } from 'react';
import type { Locale } from '@/types/locale';
import type { ToolsSectionDefinition, ToolsSectionLocaleText } from '@/types/tools/common';

// Cache Components for static data optimization (Next.js 16.1.6)
export const getToolSections = cache(async (): Promise<ToolsSectionDefinition[]> => {
  'use cache';

  // Import only when needed
  const { TOOL_SECTIONS } = await import('./tool-registry');
  return TOOL_SECTIONS;
});

export const getToolSectionByKey = cache(
  async (key: string): Promise<ToolsSectionDefinition | undefined> => {
    'use cache';

    const sections = await getToolSections();
    return sections.find(section => section.key === key);
  },
);

// Memory-efficient locale data fetching
export const getLocalizedToolSection = cache(
  async (key: string, locale: Locale): Promise<ToolsSectionLocaleText | undefined> => {
    'use cache';

    const section = await getToolSectionByKey(key);
    return section?.locales?.[locale] || section?.locales?.en;
  },
);
