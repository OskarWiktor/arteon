'use client';

import { useMemo, useState } from 'react';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolFieldRow from '@/components/ui/tools/ToolFieldRow';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import Heading from '@/components/ui/typography/Heading';

const ui = {
  pl: {
    noData: 'Brak danych',
    enterTitle: 'Wpisz meta title, aby zobaczyć analizę długości.',
    tooShort: 'Za krótki',
    titleTooShort: 'Tytuł jest bardzo krótki. Dodaj więcej słów, aby lepiej opisać stronę i wykorzystać dostępne miejsce w wynikach wyszukiwania.',
    tooLong: 'Za długi',
    titleTooLong: 'Tytuł przekracza zakres, który Google zwykle pokazuje w całości (około 580-600 pikseli szerokości, zwykle do 50-60 znaków). Może zostać ucięty.',
    goodLength: 'Dobra długość',
    titleGoodLength: 'Tytuł mieści się w zakresie, który najczęściej wyświetla się w całości w wynikach Google (mniej więcej 450-580 pikseli i ok. 45-60 znaków).',
    enterDescription: 'Wpisz meta description, aby zobaczyć analizę długości.',
    descriptionTooShort: 'Opis jest bardzo krótki. Dodaj dłuższy tekst, który lepiej tłumaczy, co użytkownik znajdzie na stronie i dlaczego warto w nią kliknąć.',
    descriptionTooLong:
      'Opis przekracza zakres, który Google najczęściej pokazuje w całości (około 150-160 znaków lub ~920 pikseli). Może zostać ucięty lub zastąpiony innym fragmentem tekstu ze strony.',
    descriptionGoodLength: 'Opis mieści się w typowym zakresie dla wyników wyszukiwania (około 120-160 znaków i do ~920 pikseli), co zwykle wystarcza na 2-3 krótkie zdania.',
    addUrl: 'Dodaj adres URL (opcjonalnie)',
    urlPlaceholder: 'www.twojadomena.pl/podstrona',
    urlHelper: 'Adres URL jest używany tylko w podglądzie - nie ma wpływu na obliczenia długości meta title i description.',
    enterTitleLabel: 'Wpisz meta title',
    titlePlaceholder: 'Np. Pozycjonowanie stron WWW - Arteon',
    chars: 'Znaki',
    words: 'Słowa',
    width: 'Szerokość',
    noTitle: 'Brak tytułu',
    enterDescriptionLabel: 'Wpisz meta description',
    descriptionPlaceholder: 'Opisz w 2-3 zdaniach, co użytkownik znajdzie na stronie i jaką korzyść otrzyma. Dodaj naturalnie główne słowa kluczowe.',
    noDescription: 'Brak opisu',
    previewTitle: 'Podgląd wyniku w Google',
    previewHelper: 'Podgląd jest orientacyjny - Google może przyciąć lub zmienić tytuł i opis w zależności od szerokości ekranu i samego tekstu',
    exampleTitle: 'Przykładowy tytuł strony - oferta / usługa',
    exampleDescription: 'Tu pojawi się podgląd opisu Twojej strony. Napisz krótko o tym, co oferujesz, jak pomagasz klientowi oraz dlaczego warto odwiedzić właśnie tę podstronę.',
  },
} as const;

type LengthStatus = 'empty' | 'too-short' | 'ideal' | 'too-long';

interface FieldAnalysis {
  chars: number;
  words: number;
  pixels: number;
  status: LengthStatus;
  statusLabel: string;
  helperText: string;
}

const TITLE_FONT = '400 20px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const DESCRIPTION_FONT = '300 15px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

let measureCanvas: HTMLCanvasElement | null = null;

function measureTextWidth(text: string, font: string, fallbackAvgPx: number): number {
  if (!text) return 0;

  if (typeof document === 'undefined') {
    return Math.round(text.length * fallbackAvgPx);
  }

  if (!measureCanvas) {
    measureCanvas = document.createElement('canvas');
  }

  const context = measureCanvas.getContext('2d');
  if (!context) {
    return Math.round(text.length * fallbackAvgPx);
  }

  context.font = font;
  const metrics = context.measureText(text);
  return Math.round(metrics.width);
}

function analyzeTitle(text: string): FieldAnalysis {
  const t = ui.pl;
  const trimmed = text.trim();
  const chars = trimmed.length;
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;

  const pixels = measureTextWidth(trimmed, TITLE_FONT, 9);

  let status: LengthStatus = 'empty';
  let statusLabel: string = t.noData;
  let helperText: string = t.enterTitle;

  if (!chars) {
    return { chars, words, pixels, status, statusLabel, helperText };
  }

  const isTooShort = chars < 35 || pixels < 350;
  const isTooLong = chars > 65 || pixels > 580;

  if (isTooShort) {
    status = 'too-short';
    statusLabel = t.tooShort;
    helperText = t.titleTooShort;
  } else if (isTooLong) {
    status = 'too-long';
    statusLabel = t.tooLong;
    helperText = t.titleTooLong;
  } else {
    status = 'ideal';
    statusLabel = t.goodLength;
    helperText = t.titleGoodLength;
  }

  return { chars, words, pixels, status, statusLabel, helperText };
}

function analyzeDescription(text: string): FieldAnalysis {
  const t = ui.pl;
  const trimmed = text.trim();
  const chars = trimmed.length;
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;

  const pixels = measureTextWidth(trimmed, DESCRIPTION_FONT, 5.8);

  let status: LengthStatus = 'empty';
  let statusLabel: string = t.noData;
  let helperText: string = t.enterDescription;

  if (!chars) {
    return { chars, words, pixels, status, statusLabel, helperText };
  }

  const isTooShort = chars < 100 || pixels < 430;
  const isTooLong = chars > 165 || pixels > 920;

  if (isTooShort) {
    status = 'too-short';
    statusLabel = t.tooShort;
    helperText = t.descriptionTooShort;
  } else if (isTooLong) {
    status = 'too-long';
    statusLabel = t.tooLong;
    helperText = t.descriptionTooLong;
  } else {
    status = 'ideal';
    statusLabel = t.goodLength;
    helperText = t.descriptionGoodLength;
  }

  return { chars, words, pixels, status, statusLabel, helperText };
}

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
      return 'bg-neutral-100 text-neutral-700 border-neutral-200';
  }
}

function truncateForPreview(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars - 1).trimEnd() + '…';
}

export default function MetaTitleDescriptionTool() {
  const t = ui.pl;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('www.twojadomena.pl/podstrona');

  const titleAnalysis = useMemo(() => analyzeTitle(title), [title]);
  const descriptionAnalysis = useMemo(() => analyzeDescription(description), [description]);

  const previewTitle = useMemo(() => truncateForPreview(title || t.exampleTitle, 65), [title, t.exampleTitle]);
  const previewDescription = useMemo(() => truncateForPreview(description || t.exampleDescription, 165), [description, t.exampleDescription]);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <ToolSection className="space-y-5">
          <ToolFieldRow label={t.addUrl} helper={t.urlHelper}>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className="tool-input" placeholder={t.urlPlaceholder} />
          </ToolFieldRow>

          <ToolFieldRow label={t.enterTitleLabel} className="mt-8" helper={titleAnalysis.helperText}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="tool-input" placeholder={t.titlePlaceholder} maxLength={180} />
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[#5e5e5e]">
              <span>
                {t.chars}: <strong>{titleAnalysis.chars}</strong>
              </span>
              <span>·</span>
              <span>
                {t.words}: <strong>{titleAnalysis.words}</strong>
              </span>
              <span>·</span>
              <span>
                {t.width}: <strong>~{titleAnalysis.pixels} px</strong>
              </span>
              <span className={`tool-badge ml-auto ${getStatusClasses(titleAnalysis.status)}`}>{titleAnalysis.status === 'empty' ? t.noTitle : titleAnalysis.statusLabel}</span>
            </div>
          </ToolFieldRow>

          <ToolFieldRow label={t.enterDescriptionLabel} className="mt-8" helper={descriptionAnalysis.helperText}>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="tool-textarea min-h-[110px] resize-y" placeholder={t.descriptionPlaceholder} maxLength={400} />
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[#5e5e5e]">
              <span>
                {t.chars}: <strong>{descriptionAnalysis.chars}</strong>
              </span>
              <span>·</span>
              <span>
                {t.words}: <strong>{descriptionAnalysis.words}</strong>
              </span>
              <span>·</span>
              <span>
                {t.width}: <strong>~{descriptionAnalysis.pixels} px</strong>
              </span>
              <span className={`tool-badge ml-auto ${getStatusClasses(descriptionAnalysis.status)}`}>{descriptionAnalysis.status === 'empty' ? t.noDescription : descriptionAnalysis.statusLabel}</span>
            </div>
          </ToolFieldRow>
        </ToolSection>

        <ToolSection className="space-y-4">
          <div>
            <Heading as="h2" className="h6 pb-2">
              {t.previewTitle}
            </Heading>
            <ToolHelper>{t.previewHelper}</ToolHelper>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm shadow-inner">
            <p className="truncate text-[13px]! text-[#202124]">{url || 'www.twojadomena.pl/podstrona'}</p>
            <p className="mt-1 line-clamp-2 text-[18px]! font-normal text-[#1a0dab]">{previewTitle}</p>
            <p className="mt-1 line-clamp-3 text-[13px]! leading-snug text-[#4d5156]">{previewDescription}</p>
          </div>
        </ToolSection>
      </div>
    </>
  );
}
