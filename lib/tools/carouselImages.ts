import { TOOL_REGISTRY } from '@/lib/i18n/toolRegistryData';
import { getToolImagesByKey } from '@/lib/tools/dataLoader';
import type { Locale } from '@/types/locale';
import type { ToolItemKey } from '@/types/tools/common';

/**
 * Preview images for the carousel-featured tools (those with a `carouselOrder`),
 * keyed by tool key. Each image is the tool page's own `ogImage` — the single source
 * of truth lives in `data/<locale>/tools/*.json`, not duplicated in the registry.
 *
 * Server-only: depends on the `fs`-based data loader, so it must not be imported by
 * client components.
 */
export function getCarouselImages(
  locale: Locale,
): Partial<Record<ToolItemKey, string>> {
  const byKey = getToolImagesByKey(locale);
  const images: Partial<Record<ToolItemKey, string>> = {};
  for (const tool of TOOL_REGISTRY) {
    if (tool.carouselOrder == null) continue;
    const image = byKey[tool.key];
    if (image) images[tool.key] = image;
  }
  return images;
}
