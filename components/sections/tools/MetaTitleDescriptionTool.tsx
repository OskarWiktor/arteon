'use client';

import { useMemo, useState } from 'react';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolFieldRow from '@/components/ui/tools/ToolFieldRow';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import { analyzeMetaDescription, analyzeMetaTitle, truncateForPreview, type FieldMetrics } from '@/lib/tools/seo/metaLength';
import { getStatusClasses } from '@/lib/tools/statusClasses';
import { useLocale, type Locale } from '@/lib/LocaleContext';

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
  en: {
    noData: 'No data',
    enterTitle: 'Enter a meta title to see the length analysis.',
    tooShort: 'Too short',
    titleTooShort: 'The title is very short. Add more words to better describe the page and make use of the available space in search results.',
    tooLong: 'Too long',
    titleTooLong: 'The title exceeds the range Google typically shows in full (about 580-600 pixels wide, usually up to 50-60 characters). It may be truncated.',
    goodLength: 'Good length',
    titleGoodLength: 'The title fits within the range that most often displays in full in Google results (roughly 450-580 pixels and about 45-60 characters).',
    enterDescription: 'Enter a meta description to see the length analysis.',
    descriptionTooShort: 'The description is very short. Add more text that better explains what the user will find on the page and why it is worth clicking.',
    descriptionTooLong:
      'The description exceeds the range Google most often shows in full (about 150-160 characters or ~920 pixels). It may be truncated or replaced with another snippet from the page.',
    descriptionGoodLength: 'The description fits within the typical range for search results (about 120-160 characters and up to ~920 pixels), which usually fits 2-3 short sentences.',
    addUrl: 'Add URL (optional)',
    urlPlaceholder: 'www.yourdomain.com/page',
    urlHelper: 'The URL is only used in the preview — it does not affect the meta title and description length calculations.',
    enterTitleLabel: 'Enter meta title',
    titlePlaceholder: 'E.g. Website SEO Services - Arteon',
    chars: 'Characters',
    words: 'Words',
    width: 'Width',
    noTitle: 'No title',
    enterDescriptionLabel: 'Enter meta description',
    descriptionPlaceholder: 'Describe in 2-3 sentences what the user will find on the page and what benefit they will get. Naturally include your main keywords.',
    noDescription: 'No description',
    previewTitle: 'Google search result preview',
    previewHelper: 'The preview is approximate — Google may trim or change the title and description depending on screen width and the text itself',
    exampleTitle: 'Example page title - offer / service',
    exampleDescription: 'A preview of your page description will appear here. Write briefly about what you offer, how you help the client, and why this page is worth visiting.',
  },
} as const satisfies Record<Locale, unknown>;

type UiTexts = { [K in keyof (typeof ui)['pl']]: string };

interface FieldAnalysis extends FieldMetrics {
  statusLabel: string;
  helperText: string;
}

function analyzeTitle(text: string, t: UiTexts): FieldAnalysis {
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

function analyzeDescription(text: string, t: UiTexts): FieldAnalysis {
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

export default function MetaTitleDescriptionTool() {
  const locale = useLocale();
  const t = ui[locale];
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState(locale === 'en' ? 'www.yourdomain.com/page' : 'www.twojadomena.pl/podstrona');

  const titleAnalysis = useMemo(() => analyzeTitle(title, t), [title, t]);
  const descriptionAnalysis = useMemo(() => analyzeDescription(description, t), [description, t]);

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
            <div className="tool-meta mt-2 flex flex-wrap items-center gap-2">
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
            <div className="tool-meta mt-2 flex flex-wrap items-center gap-2">
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
            <p className="text-mid truncate text-[13px]!">{url || t.urlPlaceholder}</p>
            <p className="text-mid mt-1 line-clamp-2 text-[18px]! font-normal">{previewTitle}</p>
            <p className="text-light mt-1 line-clamp-3 text-[13px]! leading-snug">{previewDescription}</p>
          </div>
        </ToolSection>
      </div>
    </>
  );
}
