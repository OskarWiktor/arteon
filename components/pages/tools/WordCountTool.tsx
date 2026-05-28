'use client';

import { useState } from 'react';
import { RiFileCopyLine, RiCheckLine, RiDeleteBinLine } from 'react-icons/ri';
import ToolFieldRow from '@/components/molecules/ToolFieldRow';
import ToolHelper from '@/components/molecules/tools/ToolHelper';
import ToolStatRow from '@/components/molecules/tools/ToolStatRow';
import Button from '@/components/atoms/buttons/Button';
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
import { getReadabilityLabel, getReadabilityColor } from '@/lib/tools/text/readability';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useLocale } from '@/lib/LocaleContext';
import { ui } from '@/lib/i18n/tools/word-count';
import Textarea from '@/components/atoms/form/Textarea';
import Card from '@/components/organisms/Card';
import { smallIconSizeClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

export default function WordCountTool() {
  const locale = useLocale();
  const t = ui[locale];
  const [text, setText] = useState('');

  const { copy, copied } = useCopyToClipboard();

  const metrics = analyzeText(text, locale);
  const readabilityLabel = getReadabilityLabel(metrics.fleschScore, locale);
  const readabilityColor = getReadabilityColor(metrics.fleschScore, locale);

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
    <div className='space-y-4 overflow-hidden'>
      <div className='grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]'>
        <Card padding='md'>
          <div>
            <h2 className='h6 pb-2'>{t.statistics}</h2>
            <ToolHelper>{metrics.words === 0 ? t.empty : ''}</ToolHelper>
          </div>

          <div className='space-y-3'>
            <ToolStatRow label={t.words} value={<span className='text-lg'>{metrics.words}</span>} />
            <ToolStatRow label={t.charsWithSpaces} value={metrics.charsWithSpaces} />
            <ToolStatRow label={t.charsWithoutSpaces} value={metrics.charsWithoutSpaces} />
            <ToolStatRow label={t.sentences} value={metrics.sentences} />
            <ToolStatRow label={t.paragraphs} value={metrics.paragraphs} />
            <ToolStatRow label={t.uniqueWords} value={metrics.uniqueWords} />
            <ToolStatRow label={t.avgWordLength} value={metrics.avgWordLength} />
            <ToolStatRow
              label={t.readingTime}
              value={formatReadingTime(metrics.readingTimeMinutes, locale)}
            />
            <ToolStatRow
              label={t.speakingTime}
              value={formatReadingTime(metrics.speakingTimeMinutes, locale)}
            />
            <ToolStatRow label={t.syllables} value={metrics.syllables} />
            <ToolStatRow
              label={t.readability}
              value={
                metrics.fleschScore !== null ? (
                  <span className={readabilityColor}>
                    {metrics.fleschScore} - {readabilityLabel}
                  </span>
                ) : (
                  '-'
                )
              }
            />
            {t.readabilityHint && metrics.fleschScore !== null && (
              <p className='text-xs text-neutral-400'>{t.readabilityHint}</p>
            )}
          </div>

          <div className='flex gap-2'>
            <Button
              variant='normal'
              onClick={() => copy(text)}
              disabled={metrics.words === 0}
              className='flex-1'
              aria-label={copied ? t.copied : t.copyText}
            >
              {copied ? (
                <>
                  <RiCheckLine className={cn('mr-2', smallIconSizeClasses)} />
                  {t.copied}
                </>
              ) : (
                <>
                  <RiFileCopyLine className={cn('mr-2', smallIconSizeClasses)} />
                  {t.copyText}
                </>
              )}
            </Button>
            <Button
              variant='normal'
              size='small'
              onClick={() => setText('')}
              disabled={metrics.words === 0}
              aria-label={t.clearText}
            >
              <RiDeleteBinLine className={cn('mr-2', smallIconSizeClasses)} />
              {t.clearText}
            </Button>
          </div>
        </Card>

        <Card padding='md'>
          <ToolFieldRow label={t.pasteText}>
            <Textarea
              value={text}
              onChange={e => setText(e.target.value)}
              className='min-h-[400px] resize-y'
              placeholder={t.textPlaceholder}
            />
          </ToolFieldRow>
        </Card>
      </div>

      <Card padding='md' className='flex flex-wrap items-center'>
        <span className='tool-value'>{t.toolbarTitle}</span>
        <div className='flex flex-wrap gap-2'>
          {toolbarActions.map(action => (
            <button
              key={action.key}
              type='button'
              onClick={() => setText(action.fn(text))}
              disabled={!text}
              className='tool-button tool-button-inactive disabled:cursor-not-allowed disabled:opacity-40'
            >
              {action.label}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
