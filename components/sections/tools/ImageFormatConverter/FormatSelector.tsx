'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { FORMAT_LABELS, type ImageFormat, type OutputFormat } from './types';
import { getAvailableTargets, getConversionRoute, SOURCE_FORMATS, TARGET_FORMATS } from './conversionRoutes';

interface FormatSelectorProps {
  currentSource: ImageFormat;
  currentTarget: OutputFormat;
  hasFiles?: boolean;
}

export default function FormatSelector({ currentSource, currentTarget, hasFiles }: FormatSelectorProps) {
  const router = useRouter();

  const confirmNavigation = useCallback(
    (href: string) => {
      if (hasFiles && !window.confirm('Zmiana formatu usunie pliki z kolejki. Kontynuować?')) return;
      router.push(href);
    },
    [hasFiles, router],
  );

  const handleSourceChange = useCallback(
    (newSource: ImageFormat) => {
      if (newSource === currentSource) return;
      const targets = getAvailableTargets(newSource);
      const target = targets.includes(currentTarget) ? currentTarget : targets[0];
      if (!target) return;
      const route = getConversionRoute(newSource, target);
      if (route) confirmNavigation(route.href);
    },
    [currentSource, currentTarget, confirmNavigation],
  );

  const handleTargetChange = useCallback(
    (newTarget: OutputFormat) => {
      if (newTarget === currentTarget) return;
      const route = getConversionRoute(currentSource, newTarget);
      if (route) confirmNavigation(route.href);
    },
    [currentSource, currentTarget, confirmNavigation],
  );

  const availableTargets = getAvailableTargets(currentSource);

  return (
    <div className="mb-5 flex justify-center">
      <div className="inline-flex items-center gap-4 rounded-lg border border-neutral-200 bg-white px-4 py-3">
        <label className="hidden font-medium">Konwertuj z</label>
        <select
          value={currentSource}
          onChange={(e) => handleSourceChange(e.target.value as ImageFormat)}
          className="focus:border-primary focus:ring-primary rounded border border-neutral-300 bg-white px-3! py-2! text-xs font-medium focus:ring-1 focus:outline-none"
        >
          {SOURCE_FORMATS.map((fmt) => (
            <option key={fmt} value={fmt}>
              {FORMAT_LABELS[fmt]}
            </option>
          ))}
        </select>

        <label className="font-medium">na</label>
        <select
          value={currentTarget}
          onChange={(e) => handleTargetChange(e.target.value as OutputFormat)}
          className="focus:border-primary focus:ring-primary rounded border border-neutral-300 bg-white px-3! py-2! text-xs font-medium focus:ring-1 focus:outline-none"
        >
          {TARGET_FORMATS.map((fmt) => {
            const isAvailable = availableTargets.includes(fmt);
            const isSame = fmt === currentSource;
            return (
              <option key={fmt} value={fmt} disabled={!isAvailable || isSame}>
                {FORMAT_LABELS[fmt]}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
