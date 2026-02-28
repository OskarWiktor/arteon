'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import { useLocale, useDictionary } from '@/lib/LocaleContext';

import { FORMAT_LABELS, type ImageFormat, type OutputFormat } from './types';
import { getAvailableSources, getAvailableTargets, getConversionRoute, getConversionRoutes, TARGET_FORMATS } from './conversionRoutes';

interface FormatSelectorProps {
  currentSource: ImageFormat;
  currentTarget: OutputFormat;
  hasFiles?: boolean;
}

export default function FormatSelector({ currentSource, currentTarget, hasFiles }: FormatSelectorProps) {
  const router = useRouter();
  const locale = useLocale();
  const { imageConverter: t } = useDictionary();

  const confirmNavigation = useCallback(
    (href: string) => {
      if (hasFiles && !window.confirm(t.formatChangeConfirm)) return;
      router.push(href, { scroll: false });
    },
    [hasFiles, router, t.formatChangeConfirm],
  );

  const handleSourceChange = useCallback(
    (newSource: ImageFormat) => {
      if (newSource === currentSource) return;
      const targets = getAvailableTargets(newSource, locale);
      const target = targets.includes(currentTarget) ? currentTarget : targets[0];
      if (!target) return;
      const route = getConversionRoute(newSource, target, locale);
      if (route) confirmNavigation(route.href);
    },
    [currentSource, currentTarget, confirmNavigation, locale],
  );

  const handleTargetChange = useCallback(
    (newTarget: OutputFormat) => {
      if (newTarget === currentTarget) return;
      const route = getConversionRoute(currentSource, newTarget, locale);
      if (route) confirmNavigation(route.href);
    },
    [currentSource, currentTarget, confirmNavigation, locale],
  );

  // Prefetch all converter routes so format switching is instant (no loading skeleton)
  useEffect(() => {
    const routes = getConversionRoutes(locale);
    routes.forEach((r) => router.prefetch(r.href));
  }, [locale, router]);

  const availableTargets = getAvailableTargets(currentSource, locale);
  const availableSources = TARGET_FORMATS.flatMap((t) => getAvailableSources(t, locale));
  const uniqueSources = Array.from(new Set(availableSources));

  return (
    <div className="mb-5 flex justify-center">
      <div className="inline-flex items-center gap-4 rounded-lg border border-neutral-200 bg-white px-4 py-3">
        <label className="hidden font-medium">{FORMAT_LABELS[currentSource]}</label>
        <select
          value={currentSource}
          onChange={(e) => handleSourceChange(e.target.value as ImageFormat)}
          className="focus:border-primary focus:ring-primary rounded border border-neutral-300 bg-white px-3! py-2! text-xs font-medium focus:ring-1 focus:outline-none"
        >
          {uniqueSources.map((fmt) => (
            <option key={fmt} value={fmt}>
              {FORMAT_LABELS[fmt]}
            </option>
          ))}
        </select>

        <label className="font-medium">{t.formatSelectorTo}</label>
        <select
          value={currentTarget}
          onChange={(e) => handleTargetChange(e.target.value as OutputFormat)}
          className="focus:border-primary focus:ring-primary rounded border border-neutral-300 bg-white px-3! py-2! text-xs font-medium focus:ring-1 focus:outline-none"
        >
          {availableTargets.map((fmt) => (
            <option key={fmt} value={fmt}>
              {FORMAT_LABELS[fmt]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
