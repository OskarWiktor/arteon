'use client';

import { useMemo, useState } from 'react';
import { RiFileCopyLine, RiCheckLine } from 'react-icons/ri';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolFieldRow from '@/components/ui/tools/ToolFieldRow';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import ToolStatRow from '@/components/ui/tools/ToolStatRow';
import ToolProgressBar from '@/components/ui/tools/ToolProgressBar';
import Button from '@/components/ui/buttons/Button';
import { analyzeText, evaluateLength, formatReadingTime, formatReportText, getPageTypes, type PageType, type LengthStatus } from '@/lib/tools/text/wordCount';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { getStatusClasses } from '@/utils/statusClasses';
import { useLocale } from '@/lib/LocaleContext';
import { ui } from '@/lib/i18n/tools/word-count';

function getStatusLabel(status: LengthStatus, t: { noText: string; tooShort: string; tooLong: string; ideal: string }): string {
  switch (status) {
    case 'ideal':
      return t.ideal;
    case 'too-short':
      return t.tooShort;
    case 'too-long':
      return t.tooLong;
    case 'empty':
    default:
      return t.noText;
  }
}

function getProgressBarColor(status: LengthStatus): string {
  switch (status) {
    case 'ideal':
      return 'bg-crop-green';
    case 'too-short':
      return 'bg-accent0';
    case 'too-long':
      return 'bg-error-icon';
    case 'empty':
    default:
      return 'bg-neutral-300';
  }
}

export default function WordCountTool() {
  const locale = useLocale();
  const t = ui[locale];
  const [text, setText] = useState('');
  const [selectedPageType, setSelectedPageType] = useState<PageType>('blog');

  const { copy, copied } = useCopyToClipboard();

  const pageTypes = useMemo(() => getPageTypes(locale), [locale]);
  const pageTypeConfig = useMemo(() => pageTypes.find((pt) => pt.key === selectedPageType) ?? pageTypes[4], [pageTypes, selectedPageType]);

  const metrics = useMemo(() => analyzeText(text), [text]);
  const evaluation = useMemo(() => evaluateLength(metrics.words, pageTypeConfig, locale), [metrics.words, pageTypeConfig, locale]);

  const handleCopyReport = () => {
    const report = formatReportText(metrics, pageTypeConfig, evaluation, locale);
    copy(report);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
      <ToolSection className="space-y-5">
        <div>
          <h2 className="h6 pb-2">{t.statistics}</h2>
          <ToolHelper>{metrics.words === 0 ? t.empty : `${t.analysisFor}: ${pageTypeConfig.label}`}</ToolHelper>
        </div>

        <div className="space-y-3">
          <ToolStatRow label={t.words} value={<span className="text-lg">{metrics.words}</span>} />
          <ToolStatRow label={t.charsWithSpaces} value={metrics.charsWithSpaces} />
          <ToolStatRow label={t.charsWithoutSpaces} value={metrics.charsWithoutSpaces} />
          <ToolStatRow label={t.paragraphs} value={metrics.paragraphs} />
          <ToolStatRow label={t.readingTime} value={formatReadingTime(metrics.readingTimeMinutes, locale)} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="tool-value">{t.lengthEvaluation}</span>
            <span className={`tool-badge ${getStatusClasses(evaluation.status)}`}>{getStatusLabel(evaluation.status, t)}</span>
          </div>

          <ToolProgressBar value={evaluation.percentage} colorClass={getProgressBarColor(evaluation.status)} />

          <div className="flex items-center justify-between">
            <span className="tool-meta">{t.recommendedRange}:</span>
            <span className="tool-meta font-medium">
              {pageTypeConfig.minWords}–{pageTypeConfig.maxWords} {t.wordsUnit}
            </span>
          </div>

          {evaluation.status !== 'empty' && <p className="tool-meta mt-2">{evaluation.message}</p>}
        </div>

        <Button variant="normal" size="small" onClick={handleCopyReport} disabled={metrics.words === 0} className="w-full" aria-label={copied ? t.copied : t.copyReport}>
          {copied ? (
            <>
              <RiCheckLine className="mr-2 h-4 w-4" />
              {t.copied}
            </>
          ) : (
            <>
              <RiFileCopyLine className="mr-2 h-4 w-4" />
              {t.copyReport}
            </>
          )}
        </Button>
      </ToolSection>

      <ToolSection className="space-y-5">
        <ToolFieldRow label={t.pageType} helper={t.pageTypeHelper}>
          <select value={selectedPageType} onChange={(e) => setSelectedPageType(e.target.value as PageType)} className="tool-select">
            {pageTypes.map((pt) => (
              <option key={pt.key} value={pt.key}>
                {pt.label} ({pt.minWords}–{pt.maxWords} {t.wordsUnit})
              </option>
            ))}
          </select>
        </ToolFieldRow>

        <div className="rounded-lg border border-neutral-200 bg-white p-3">
          <p className="tool-meta">{pageTypeConfig.description}</p>
        </div>

        <ToolFieldRow label={t.pasteText}>
          <textarea value={text} onChange={(e) => setText(e.target.value)} className="tool-textarea min-h-[320px] resize-y" placeholder={t.textPlaceholder} />
        </ToolFieldRow>
      </ToolSection>
    </div>
  );
}
