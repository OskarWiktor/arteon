'use client';

import { useMemo, useState } from 'react';
import { RiFileCopyLine, RiCheckLine } from 'react-icons/ri';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolFieldRow from '@/components/ui/tools/ToolFieldRow';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import Button from '@/components/ui/buttons/Button';
import { analyzeText, evaluateLength, formatReadingTime, formatReportText, getPageTypes, type PageType, type LengthStatus } from '@/lib/tools/text/wordCount';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useLocale } from '@/lib/LocaleContext';

const ui = {
  pl: {
    pasteText: 'Wklej lub wpisz tekst',
    textPlaceholder: 'Wklej tutaj tekst, który chcesz przeanalizować...',
    pageType: 'Typ strony',
    pageTypeHelper: 'Wybierz typ strony, dla której piszesz tekst. Każdy typ ma inne zalecenia dotyczące długości.',
    words: 'Słowa',
    charsWithSpaces: 'Znaki (ze spacjami)',
    charsWithoutSpaces: 'Znaki (bez spacji)',
    paragraphs: 'Akapity',
    readingTime: 'Czas czytania',
    lengthEvaluation: 'Ocena długości',
    recommendedRange: 'Zalecany zakres',
    copyReport: 'Kopiuj raport',
    copied: 'Skopiowano',
    statistics: 'Statystyki tekstu',
    noText: 'Brak tekstu',
    empty: 'Wpisz tekst, aby zobaczyć statystyki.',
    tooShort: 'Za krótki',
    tooLong: 'Za długi',
    ideal: 'Dobra długość',
    analysisFor: 'Analiza dla',
    wordsUnit: 'słów',
  },
  en: {
    pasteText: 'Paste or type text',
    textPlaceholder: 'Paste the text you want to analyze here...',
    pageType: 'Page type',
    pageTypeHelper: 'Select the page type you are writing for. Each type has different length recommendations.',
    words: 'Words',
    charsWithSpaces: 'Characters (with spaces)',
    charsWithoutSpaces: 'Characters (without spaces)',
    paragraphs: 'Paragraphs',
    readingTime: 'Reading time',
    lengthEvaluation: 'Length evaluation',
    recommendedRange: 'Recommended range',
    copyReport: 'Copy report',
    copied: 'Copied',
    statistics: 'Text statistics',
    noText: 'No text',
    empty: 'Type text to see statistics.',
    tooShort: 'Too short',
    tooLong: 'Too long',
    ideal: 'Good length',
    analysisFor: 'Analysis for',
    wordsUnit: 'words',
  },
} as const;

function getStatusClasses(status: LengthStatus): string {
  switch (status) {
    case 'ideal':
      return 'bg-success-bg text-success-text border-success-border';
    case 'too-short':
      return 'bg-warning-bg text-warning-text border-warning-border';
    case 'too-long':
      return 'bg-error-bg text-error-text border-error-border';
    case 'empty':
    default:
      return 'bg-neutral-100 text-mid border-neutral-200';
  }
}

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
          <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2">
            <span className="text-[14px]! font-medium">{t.words}</span>
            <strong className="text-dark text-lg">{metrics.words}</strong>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2">
            <span className="text-[14px]! font-medium">{t.charsWithSpaces}</span>
            <strong className="text-dark">{metrics.charsWithSpaces}</strong>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2">
            <span className="text-[14px]! font-medium">{t.charsWithoutSpaces}</span>
            <strong className="text-dark">{metrics.charsWithoutSpaces}</strong>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2">
            <span className="text-[14px]! font-medium">{t.paragraphs}</span>
            <strong className="text-dark">{metrics.paragraphs}</strong>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2">
            <span className="text-[14px]! font-medium">{t.readingTime}</span>
            <strong className="text-dark">{formatReadingTime(metrics.readingTimeMinutes, locale)}</strong>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[14px]! font-medium">{t.lengthEvaluation}</span>
            <span className={`tool-badge ${getStatusClasses(evaluation.status)}`}>{getStatusLabel(evaluation.status, t)}</span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
            <div className={`h-full transition-all duration-300 ${getProgressBarColor(evaluation.status)}`} style={{ width: `${Math.min(evaluation.percentage, 100)}%` }} />
          </div>

          <div className="flex items-center justify-between text-xs!">
            <span className="text-light text-xs!">{t.recommendedRange}:</span>
            <span className="text-xs! font-medium">
              {pageTypeConfig.minWords}–{pageTypeConfig.maxWords} {t.wordsUnit}
            </span>
          </div>

          {evaluation.status !== 'empty' && <p className="text-light mt-2 text-xs!">{evaluation.message}</p>}
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
          <p className="text-light text-xs!">{pageTypeConfig.description}</p>
        </div>

        <ToolFieldRow label={t.pasteText}>
          <textarea value={text} onChange={(e) => setText(e.target.value)} className="tool-textarea min-h-[320px] resize-y" placeholder={t.textPlaceholder} />
        </ToolFieldRow>
      </ToolSection>
    </div>
  );
}
