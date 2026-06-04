'use client';

import { useDictionary } from '@/lib/LocaleContext';
import type { UniversalFormat } from '@/lib/tools/conversionRoutes';
import FormatPickerModal from './FormatPickerModal';

interface FormatSelectorProps {
  currentSource?: UniversalFormat;
  currentTarget?: UniversalFormat;
  hasFiles?: boolean;
  unitToolKey?: string;
}

export default function FormatSelector({
  currentSource,
  currentTarget,
  hasFiles,
  unitToolKey,
}: FormatSelectorProps) {
  const { imageConverter: t } = useDictionary();

  return (
    <div className='mb-5 flex justify-center'>
      <div className='inline-flex items-center gap-4 rounded-md border border-neutral-200 bg-white px-4 py-3'>
        <FormatPickerModal
          side='source'
          currentSource={currentSource}
          currentTarget={currentTarget}
          hasFiles={hasFiles}
          confirmMessage={t.formatChangeConfirm}
          unitToolKey={unitToolKey}
        />

        <span className='text-sm font-medium'>{t.formatSelectorTo}</span>

        <FormatPickerModal
          side='target'
          currentSource={currentSource}
          currentTarget={currentTarget}
          hasFiles={hasFiles}
          confirmMessage={t.formatChangeConfirm}
          unitToolKey={unitToolKey}
        />
      </div>
    </div>
  );
}
