import { baseSteps } from './baseSteps';
import { websiteSteps } from './websiteSteps';
import { shopSteps } from './shopSteps';
import { blogSteps } from './blogSteps';
import { redesignSteps } from './redesignSteps';
import { graphicsSteps } from './graphicsSteps';
import { marketingSteps } from './marketingSteps';
import { expansionSteps } from './expansionSteps';

import type { Step } from '@/types/calculator';
import { contentSteps } from './contentSteps';

const stepsByType: Record<string, Step[]> = {
  website: websiteSteps,
  shop: shopSteps,
  blog: blogSteps,
  redesign: redesignSteps,
  graphics: graphicsSteps,
  marketing: marketingSteps,
  expansion: expansionSteps,
  content: contentSteps,
};

export function getStepsByType(type: string): Step[] {
  return stepsByType[type] || [];
}

export { baseSteps };
