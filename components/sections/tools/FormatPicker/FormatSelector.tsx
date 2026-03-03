'use client';

import { useDictionary } from '@/lib/LocaleContext';

import type { UniversalFormat } from './allConversionRoutes';
import FormatPickerModal from './FormatPickerModal';

interface FormatSelectorProps {
  currentSource: UniversalFormat;
  currentTarget: UniversalFormat;
  hasFiles?: boolean;
}

export default function FormatSelector({ currentSource, currentTarget, hasFiles }: FormatSelectorProps) {
  const { imageConverter: t } = useDictionary();

  return (
    <div className="mb-5 flex justify-center">
      <div className="inline-flex items-center gap-4 rounded-lg border border-neutral-200 bg-white px-4 py-3">
        <FormatPickerModal side="source" currentSource={currentSource} currentTarget={currentTarget} hasFiles={hasFiles} confirmMessage={t.formatChangeConfirm} />

        <span className="text-sm font-medium">{t.formatSelectorTo}</span>

        <FormatPickerModal side="target" currentSource={currentSource} currentTarget={currentTarget} hasFiles={hasFiles} confirmMessage={t.formatChangeConfirm} />
      </div>
    </div>
  );
}
