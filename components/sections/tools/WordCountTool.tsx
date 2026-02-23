'use client';

import { useMemo, useState } from 'react';
import { RiFileCopyLine, RiCheckLine, RiDeleteBinLine } from 'react-icons/ri';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolFieldRow from '@/components/ui/tools/ToolFieldRow';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import ToolStatRow from '@/components/ui/tools/ToolStatRow';
import Button from '@/components/ui/buttons/Button';
import {
  analyzeText,
  formatReadingTime,
  toUpperCase,
  toLowerCase,
  toSentenceCase,
  toTitleCase,
  toToggleCase,
  removeExtraSpaces,
  removeEmptyLines,
  removeDuplicateLines,
  sortLinesAsc,
  sortLinesDesc,
} from '@/lib/tools/text/wordCount';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useLocale } from '@/lib/LocaleContext';
import { ui } from '@/lib/i18n/tools/word-count';

export default function WordCountTool() {
  const locale = useLocale();
  const t = ui[locale];
  const [text, setText] = useState('');

  const { copy, copied } = useCopyToClipboard();

  const metrics = useMemo(() => analyzeText(text), [text]);

  const toolbarActions: { key: string; label: string; fn: (t: string) => string }[] = [
    { key: 'uppercase', label: t.uppercase, fn: toUpperCase },
    { key: 'lowercase', label: t.lowercase, fn: toLowerCase },
    { key: 'sentenceCase', label: t.sentenceCase, fn: toSentenceCase },
    { key: 'titleCase', label: t.titleCase, fn: toTitleCase },
    { key: 'toggleCase', label: t.toggleCase, fn: toToggleCase },
    { key: 'removeExtraSpaces', label: t.removeExtraSpaces, fn: removeExtraSpaces },
    { key: 'removeEmptyLines', label: t.removeEmptyLines, fn: removeEmptyLines },
    { key: 'removeDuplicateLines', label: t.removeDuplicateLines, fn: removeDuplicateLines },
    { key: 'sortAsc', label: t.sortAsc, fn: sortLinesAsc },
    { key: 'sortDesc', label: t.sortDesc, fn: sortLinesDesc },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <ToolSection className="space-y-5">
          <div>
            <h2 className="h6 pb-2">{t.statistics}</h2>
            <ToolHelper>{metrics.words === 0 ? t.empty : ''}</ToolHelper>
          </div>

          <div className="space-y-3">
            <ToolStatRow label={t.words} value={<span className="text-lg">{metrics.words}</span>} />
            <ToolStatRow label={t.charsWithSpaces} value={metrics.charsWithSpaces} />
            <ToolStatRow label={t.charsWithoutSpaces} value={metrics.charsWithoutSpaces} />
            <ToolStatRow label={t.sentences} value={metrics.sentences} />
            <ToolStatRow label={t.paragraphs} value={metrics.paragraphs} />
            <ToolStatRow label={t.uniqueWords} value={metrics.uniqueWords} />
            <ToolStatRow label={t.avgWordLength} value={metrics.avgWordLength} />
            <ToolStatRow label={t.readingTime} value={formatReadingTime(metrics.readingTimeMinutes, locale)} />
          </div>

          <div className="flex gap-2">
            <Button variant="normal" onClick={() => copy(text)} disabled={metrics.words === 0} className="flex-1" aria-label={copied ? t.copied : t.copyText}>
              {copied ? (
                <>
                  <RiCheckLine className="mr-2 h-4 w-4" />
                  {t.copied}
                </>
              ) : (
                <>
                  <RiFileCopyLine className="mr-2 h-4 w-4" />
                  {t.copyText}
                </>
              )}
            </Button>
            <Button variant="normal" size="small" onClick={() => setText('')} disabled={metrics.words === 0} aria-label={t.clearText}>
              <RiDeleteBinLine className="mr-2 h-4 w-4" />
              {t.clearText}
            </Button>
          </div>
        </ToolSection>

        <ToolSection className="space-y-5">
          <ToolFieldRow label={t.pasteText}>
            <textarea value={text} onChange={(e) => setText(e.target.value)} className="tool-textarea min-h-[400px] resize-y" placeholder={t.textPlaceholder} />
          </ToolFieldRow>
        </ToolSection>
      </div>

      <section className="tool-section flex flex-wrap items-center gap-3 p-4!">
        <span className="tool-value">{t.toolbarTitle}</span>
        <div className="flex flex-wrap gap-2">
          {toolbarActions.map((action) => (
            <button
              key={action.key}
              type="button"
              onClick={() => setText(action.fn(text))}
              disabled={!text}
              className="tool-button tool-button-inactive disabled:cursor-not-allowed disabled:opacity-40"
            >
              {action.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
