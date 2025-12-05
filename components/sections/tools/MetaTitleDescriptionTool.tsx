'use client';

import { useMemo, useState } from 'react';

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
  const trimmed = text.trim();
  const chars = trimmed.length;
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;

  const pixels = measureTextWidth(trimmed, TITLE_FONT, 9);

  let status: LengthStatus = 'empty';
  let statusLabel = 'Brak danych';
  let helperText = 'Wpisz meta title, aby zobaczyć analizę długości.';

  if (!chars) {
    return { chars, words, pixels, status, statusLabel, helperText };
  }

  const isTooShort = chars < 35 || pixels < 350;
  const isTooLong = chars > 65 || pixels > 580;

  if (isTooShort) {
    status = 'too-short';
    statusLabel = 'Za krótki';
    helperText = 'Tytuł jest bardzo krótki. Dodaj więcej słów, aby lepiej opisać stronę i wykorzystać dostępne miejsce w wynikach wyszukiwania.';
  } else if (isTooLong) {
    status = 'too-long';
    statusLabel = 'Za długi';
    helperText = 'Tytuł przekracza zakres, który Google zwykle pokazuje w całości (około 580-600 pikseli szerokości, zwykle do 50-60 znaków). Może zostać ucięty.';
  } else {
    status = 'ideal';
    statusLabel = 'Dobra długość';
    helperText = 'Tytuł mieści się w zakresie, który najczęściej wyświetla się w całości w wynikach Google (mniej więcej 450-580 pikseli i ok. 45-60 znaków).';
  }

  return { chars, words, pixels, status, statusLabel, helperText };
}

function analyzeDescription(text: string): FieldAnalysis {
  const trimmed = text.trim();
  const chars = trimmed.length;
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;

  const pixels = measureTextWidth(trimmed, DESCRIPTION_FONT, 5.8);

  let status: LengthStatus = 'empty';
  let statusLabel = 'Brak danych';
  let helperText = 'Wpisz meta description, aby zobaczyć analizę długości.';

  if (!chars) {
    return { chars, words, pixels, status, statusLabel, helperText };
  }

  const isTooShort = chars < 100 || pixels < 430;
  const isTooLong = chars > 165 || pixels > 920;

  if (isTooShort) {
    status = 'too-short';
    statusLabel = 'Za krótki';
    helperText = 'Opis jest bardzo krótki. Dodaj dłuższy tekst, który lepiej tłumaczy, co użytkownik znajdzie na stronie i dlaczego warto w nią kliknąć.';
  } else if (isTooLong) {
    status = 'too-long';
    statusLabel = 'Za długi';
    helperText = 'Opis przekracza zakres, który Google najczęściej pokazuje w całości (około 150-160 znaków lub ~920 pikseli). Może zostać ucięty lub zastąpiony innym fragmentem tekstu ze strony.';
  } else {
    status = 'ideal';
    statusLabel = 'Dobra długość';
    helperText = 'Opis mieści się w typowym zakresie dla wyników wyszukiwania (około 120-160 znaków i do ~920 pikseli), co zwykle wystarcza na 2-3 krótkie zdania.';
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
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('www.twojadomena.pl/podstrona');

  const titleAnalysis = useMemo(() => analyzeTitle(title), [title]);
  const descriptionAnalysis = useMemo(() => analyzeDescription(description), [description]);

  const previewTitle = useMemo(() => truncateForPreview(title || 'Przykładowy tytuł strony - oferta / usługa', 65), [title]);
  const previewDescription = useMemo(
    () =>
      truncateForPreview(
        description || 'Tu pojawi się podgląd opisu Twojej strony. Napisz krótko o tym, co oferujesz, jak pomagasz klientowi oraz dlaczego warto odwiedzić właśnie tę podstronę.',
        165,
      ),
    [description],
  );

  return (
    <>
      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <section className="space-y-5 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
          <div>
            <p className="mb-2 font-semibold uppercase">Dodaj adres URL (opcjonalnie)</p>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm! text-neutral-800 ring-0 outline-none focus:border-neutral-900"
              placeholder="www.twojadomena.pl/podstrona"
            />
            <p className="mt-1 text-sm! text-[#5e5e5e]">Adres URL jest używany tylko w podglądzie - nie ma wpływu na obliczenia długości meta title i description.</p>
          </div>

          <div>
            <p className="mt-8 mb-2 font-semibold uppercase">Wpisz meta title</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm! text-neutral-800 ring-0 outline-none focus:border-neutral-900"
              placeholder="Np. Pozycjonowanie stron WWW - Arteon"
              maxLength={180}
            />
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[#5e5e5e]">
              <span>
                Znaki: <strong>{titleAnalysis.chars}</strong>
              </span>
              <span>·</span>
              <span>
                Słowa: <strong>{titleAnalysis.words}</strong>
              </span>
              <span>·</span>
              <span>
                Szerokość: <strong>~{titleAnalysis.pixels} px</strong>
              </span>
              <span className={`ml-auto inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${getStatusClasses(titleAnalysis.status)}`}>
                {titleAnalysis.status === 'empty' ? 'Brak tytułu' : titleAnalysis.statusLabel}
              </span>
            </div>
            <p className="mt-1 text-sm! text-[#5e5e5e]">{titleAnalysis.helperText}</p>
          </div>

          <div>
            <p className="mt-8 mb-2 font-semibold uppercase">Wpisz meta description</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[110px] w-full resize-y rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm! text-neutral-800 ring-0 outline-none focus:border-neutral-900"
              placeholder="Opisz w 2-3 zdaniach, co użytkownik znajdzie na stronie i jaką korzyść otrzyma. Dodaj naturalnie główne słowa kluczowe."
              maxLength={400}
            />
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[#5e5e5e]">
              <span>
                Znaki: <strong>{descriptionAnalysis.chars}</strong>
              </span>
              <span>·</span>
              <span>
                Słowa: <strong>{descriptionAnalysis.words}</strong>
              </span>
              <span>·</span>
              <span>
                Szerokość: <strong>~{descriptionAnalysis.pixels} px</strong>
              </span>
              <span className={`ml-auto inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${getStatusClasses(descriptionAnalysis.status)}`}>
                {descriptionAnalysis.status === 'empty' ? 'Brak opisu' : descriptionAnalysis.statusLabel}
              </span>
            </div>
            <p className="mt-1 text-sm! text-[#5e5e5e]">{descriptionAnalysis.helperText}</p>
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
          <div>
            <h2 className="h6 pb-2">Podgląd wyniku w Google</h2>
            <p className="text-sm! text-[#5e5e5e]">Podgląd jest orientacyjny - Google może przyciąć lub zmienić tytuł i opis w zależności od szerokości ekranu i samego tekstu</p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm shadow-inner">
            <p className="truncate text-[13px]! text-[#202124]">{url || 'www.twojadomena.pl/podstrona'}</p>
            <p className="mt-1 line-clamp-2 text-[18px]! font-normal text-[#1a0dab]">{previewTitle}</p>
            <p className="mt-1 line-clamp-3 text-[13px]! leading-snug text-[#4d5156]">{previewDescription}</p>
          </div>
        </section>
      </div>
    </>
  );
}
