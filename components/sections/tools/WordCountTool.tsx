'use client';

import { useMemo, useState } from 'react';
import { RiFileCopyLine, RiCheckLine } from 'react-icons/ri';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolFieldRow from '@/components/ui/tools/ToolFieldRow';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import Button from '@/components/ui/buttons/Button';
import {
  analyzeText,
  evaluateLength,
  formatReadingTime,
  formatReportText,
  PAGE_TYPES,
  type PageType,
  type LengthStatus,
} from '@/lib/tools/text/wordCount';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

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
  },
} as const;

function getStatusClasses(status: LengthStatus): string {
  switch (status) {
    case 'ideal':
      return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'too-short':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    case 'too-long':
      return 'bg-red-100 text-red-700 border-red-200';
    case 'empty':
    default:
      return 'bg-neutral-100 text-mid border-neutral-200';
  }
}

function getStatusLabel(status: LengthStatus): string {
  const t = ui.pl;
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
      return 'bg-emerald-500';
    case 'too-short':
      return 'bg-amber-500';
    case 'too-long':
      return 'bg-red-500';
    case 'empty':
    default:
      return 'bg-neutral-300';
  }
}

export default function WordCountTool() {
  const t = ui.pl;
  const [text, setText] = useState('');
  const [selectedPageType, setSelectedPageType] = useState<PageType>('blog');

  const { copy, copied } = useCopyToClipboard();

  const pageTypeConfig = useMemo(() => PAGE_TYPES.find((pt) => pt.key === selectedPageType) ?? PAGE_TYPES[4], [selectedPageType]);

  const metrics = useMemo(() => analyzeText(text), [text]);
  const evaluation = useMemo(() => evaluateLength(metrics.words, pageTypeConfig), [metrics.words, pageTypeConfig]);

  const handleCopyReport = () => {
    const report = formatReportText(metrics, pageTypeConfig, evaluation);
    copy(report);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
      <ToolSection className="space-y-5">
        <div>
          <h2 className="h6 pb-2">{t.statistics}</h2>
          <ToolHelper>{metrics.words === 0 ? t.empty : `Analiza dla: ${pageTypeConfig.label}`}</ToolHelper>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2">
            <span className="text-mid text-sm">{t.words}</span>
            <strong className="text-dark text-lg">{metrics.words}</strong>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2">
            <span className="text-mid text-sm">{t.charsWithSpaces}</span>
            <strong className="text-dark">{metrics.charsWithSpaces}</strong>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2">
            <span className="text-mid text-sm">{t.charsWithoutSpaces}</span>
            <strong className="text-dark">{metrics.charsWithoutSpaces}</strong>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2">
            <span className="text-mid text-sm">{t.paragraphs}</span>
            <strong className="text-dark">{metrics.paragraphs}</strong>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2">
            <span className="text-mid text-sm">{t.readingTime}</span>
            <strong className="text-dark">{formatReadingTime(metrics.readingTimeMinutes)}</strong>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-mid text-sm">{t.lengthEvaluation}</span>
            <span className={`tool-badge ${getStatusClasses(evaluation.status)}`}>{getStatusLabel(evaluation.status)}</span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
            <div
              className={`h-full transition-all duration-300 ${getProgressBarColor(evaluation.status)}`}
              style={{ width: `${Math.min(evaluation.percentage, 100)}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-light">{t.recommendedRange}:</span>
            <span className="text-mid font-medium">
              {pageTypeConfig.minWords}–{pageTypeConfig.maxWords} słów
            </span>
          </div>

          {evaluation.status !== 'empty' && <p className="text-light mt-2 text-sm">{evaluation.message}</p>}
        </div>

        <Button
          variant="normal"
          size="small"
          onClick={handleCopyReport}
          disabled={metrics.words === 0}
          className="w-full"
          aria-label={copied ? t.copied : t.copyReport}
        >
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
          <select
            value={selectedPageType}
            onChange={(e) => setSelectedPageType(e.target.value as PageType)}
            className="tool-input"
          >
            {PAGE_TYPES.map((pt) => (
              <option key={pt.key} value={pt.key}>
                {pt.label} ({pt.minWords}–{pt.maxWords} słów)
              </option>
            ))}
          </select>
        </ToolFieldRow>

        <div className="rounded-lg border border-neutral-200 bg-white p-3">
          <p className="text-mid text-sm">{pageTypeConfig.description}</p>
        </div>

        <ToolFieldRow label={t.pasteText}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="tool-textarea min-h-[320px] resize-y"
            placeholder={t.textPlaceholder}
          />
        </ToolFieldRow>
      </ToolSection>
    </div>
  );
}
