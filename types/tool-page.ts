import type { ToolItemKey } from '@/types/tools/common';
import type { Locale } from '@/types/locale';

export interface ToolPageData {
  toolKey: ToolItemKey;
  locale: Locale;
  metadata: {
    title: string;
    description: string;
    ogImage: string;
    path: string;
  };
  hero: {
    title: string;
    description: string;
    backgroundImage: string;
  };
  breadcrumbs: {
    second: { href: string; label: string };
    third: { href: string; label: string };
  };
  schemas: {
    software: {
      name: string;
      alternateName?: string[];
      applicationCategory?: string;
      applicationSubCategory?: string;
      description: string;
      featureList?: string[];
    };
    howTo: {
      name: string;
      description: string;
      totalTime?: string;
      steps: { name: string; text: string }[];
    };
  };
  contentBlocks: ToolContentBlock[];
  cta?: {
    title: string;
    description: string;
    btnOne: string;
    btnOneLink: string;
    btnTwo?: string;
    btnTwoLink?: string;
    backgroundImage: string;
    overlay?: string;
  };
}

export type ToolContentBlock =
  | SectionInfoBlock
  | SectionStepsBlock
  | SectionDemoBlock
  | SectionTabsBlock
  | SectionFeatureComparisonBlock
  | SectionTimelineBlock
  | GapBlock
  | FaqBlock
  | ToolsCarouselBlock;

export interface SectionInfoBlock {
  type: 'sectionInfo';
  title: string;
  html: string;
}

export interface SectionStepsBlock {
  type: 'sectionSteps';
  title: string;
  description?: string;
  grid?: 'two' | 'three' | 'four';
  btnOne?: string;
  btnOneLink?: string;
  items: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface SectionDemoBlock {
  type: 'sectionDemo';
  title: string;
  subtitle?: string;
  variant?: 'left' | 'right';
  demoHtml: string;
  html: string;
}

export interface GapBlock {
  type: 'gap';
  variant?: 'line';
  size?: 'xs' | 'sm' | 'md' | 'xl';
}

export interface FaqBlock {
  type: 'faq';
  title: string;
  openByDefault?: number;
  items: {
    question: string;
    answer: string;
    answerSchemaText?: string;
  }[];
}

export interface SectionTabsBlock {
  type: 'sectionTabs';
  title?: string;
  tabs: {
    title: string;
    icon: string;
    html: string;
  }[];
}

export interface SectionFeatureComparisonBlock {
  type: 'sectionFeatureComparison';
  title?: string;
  plans: {
    id: string;
    name: string;
    highlighted?: boolean;
  }[];
  features: {
    name: string;
    values: Record<string, boolean>;
  }[];
}

export interface SectionTimelineBlock {
  type: 'sectionTimeline';
  title?: string;
  description?: string;
  items: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface ToolsCarouselBlock {
  type: 'toolsCarousel';
  title: string;
}
