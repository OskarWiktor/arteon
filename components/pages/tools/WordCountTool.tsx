'use client';

import { useState } from 'react';
import { RiFileCopyLine, RiCheckLine, RiDeleteBinLine } from 'react-icons/ri';
import Button from '@/components/atoms/buttons/Button';
import Textarea from '@/components/atoms/form/Textarea';
import ToolHelper from '@/components/molecules/tools/ToolHelper';
import ToolStatRow from '@/components/molecules/tools/ToolStatRow';
import Card from '@/components/organisms/Card';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { cn } from '@/lib/clsx';
import { ui } from '@/lib/i18n/tools/wordCount';
import { useLocale } from '@/lib/LocaleContext';
import {
  getReadabilityLabel,
  getReadabilityColor,
} from '@/lib/tools/text/readability';
import { analyzeText, formatReadingTime } from '@/lib/tools/text/wordCount';
import { smallIconSizeClasses } from '@/lib/uiClasses';

/**
 * Render the word count tool UI that analyzes editable text and displays statistics and readability.
 *
 * @returns A JSX element rendering the complete word count tool interface.
 */
export default function WordCountTool() {
  const locale = useLocale();
  const t = ui[locale];
  const [text, setText] = useState('');

  const { copy, copied } = useCopyToClipboard();

  const metrics = analyzeText(text, locale);
  const readabilityLabel = getReadabilityLabel(metrics.fleschScore, locale);
  const readabilityColor = getReadabilityColor(metrics.fleschScore, locale);

  return (
    <div className='space-y-4 overflow-hidden'>
      <div className='grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]'>
        <Card
          interactive={false}
          padding='lg'
          variant='outlined'
          className='order-2 lg:order-1'
        >
          <div>
            <h2 className='h6 pb-2'>{t.statistics}</h2>
            <ToolHelper>{metrics.words === 0 ? t.empty : ''}</ToolHelper>
          </div>

          <div className='space-y-3'>
            <ToolStatRow
              label={t.words}
              value={<span className='text-lg'>{metrics.words}</span>}
            />
            <ToolStatRow
              label={t.charsWithSpaces}
              value={metrics.charsWithSpaces}
            />
            <ToolStatRow
              label={t.charsWithoutSpaces}
              value={metrics.charsWithoutSpaces}
            />
            <ToolStatRow label={t.sentences} value={metrics.sentences} />
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
              <p className='text-xs text-light'>{t.readabilityHint}</p>
            )}
            {metrics.unsupportedScript && (
              <p className='text-xs text-light'>{t.readabilityUnsupported}</p>
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
                  <RiFileCopyLine
                    className={cn('mr-2', smallIconSizeClasses)}
                  />
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

        <Card
          interactive={false}
          padding='lg'
          variant='outlined'
          className='order-1 lg:order-2'
        >
          <h2 className='h6 mb-2'>{t.pasteText}</h2>
          <Textarea
            id='wordcount-input'
            value={text}
            onChange={e => setText(e.target.value)}
            className='min-h-100 resize-y'
            placeholder={t.textPlaceholder}
          />
        </Card>
      </div>
    </div>
  );
}
