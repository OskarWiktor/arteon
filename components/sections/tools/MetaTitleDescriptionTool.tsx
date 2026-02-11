'use client';

import { useMemo, useState } from 'react';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolFieldRow from '@/components/ui/tools/ToolFieldRow';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import { analyzeMetaDescription, analyzeMetaTitle, truncateForPreview, type FieldMetrics, type LengthStatus } from '@/lib/tools/seo/metaLength';

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

interface FieldAnalysis extends FieldMetrics {
  statusLabel: string;
  helperText: string;
}

function analyzeTitle(text: string): FieldAnalysis {
  const t = ui.pl;
  const metrics = analyzeMetaTitle(text);

  if (metrics.status === 'empty') {
    return { ...metrics, statusLabel: t.noData, helperText: t.enterTitle };
  }

  if (metrics.status === 'too-short') {
    return { ...metrics, statusLabel: t.tooShort, helperText: t.titleTooShort };
  }

  if (metrics.status === 'too-long') {
    return { ...metrics, statusLabel: t.tooLong, helperText: t.titleTooLong };
  }

  return { ...metrics, statusLabel: t.goodLength, helperText: t.titleGoodLength };
}

function analyzeDescription(text: string): FieldAnalysis {
  const t = ui.pl;
  const metrics = analyzeMetaDescription(text);

  if (metrics.status === 'empty') {
    return { ...metrics, statusLabel: t.noData, helperText: t.enterDescription };
  }

  if (metrics.status === 'too-short') {
    return { ...metrics, statusLabel: t.tooShort, helperText: t.descriptionTooShort };
  }

  if (metrics.status === 'too-long') {
    return { ...metrics, statusLabel: t.tooLong, helperText: t.descriptionTooLong };
  }

  return { ...metrics, statusLabel: t.goodLength, helperText: t.descriptionGoodLength };
}

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
            <div className="text-light mt-2 flex flex-wrap items-center gap-2 text-xs!">
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
            <div className="text-light mt-2 flex flex-wrap items-center gap-2 text-xs!">
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
            <h2 className="h6 pb-2">{t.previewTitle}</h2>
            <ToolHelper>{t.previewHelper}</ToolHelper>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm shadow-inner">
            <p className="text-mid truncate text-[13px]!">{url || 'www.twojadomena.pl/podstrona'}</p>
            <p className="text-mid mt-1 line-clamp-2 text-[18px]! font-normal">{previewTitle}</p>
            <p className="text-light mt-1 line-clamp-3 text-[13px]! leading-snug">{previewDescription}</p>
          </div>
        </ToolSection>
      </div>
    </>
  );
}
