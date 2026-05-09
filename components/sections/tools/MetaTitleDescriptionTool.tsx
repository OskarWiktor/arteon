'use client';

import { useState } from 'react';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolFieldRow from '@/components/ui/tools/ToolFieldRow';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import { analyzeMetaDescription, analyzeMetaTitle, truncateForPreview, type FieldMetrics } from '@/lib/tools/seo/metaLength';
import { getStatusClasses } from '@/utils/statusClasses';
import { useLocale } from '@/lib/LocaleContext';
import { ui } from '@/lib/i18n/tools/meta-title';

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
  const [url, setUrl] = useState('arteonagency.pl/podstrona');

  const titleAnalysis = analyzeTitle(title, t);
  const descriptionAnalysis = analyzeDescription(description, t);

  const previewTitle = truncateForPreview(title || t.exampleTitle, 65);
  const previewDescription = truncateForPreview(description || t.exampleDescription, 165);

  return (
    <>
      <div className="grid gap-4 overflow-hidden md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
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

          <div className="rounded-lg border border-neutral-200 bg-white p-4 text-sm shadow-inner">
            <div className="flex gap-3">
              {/* Favicon w kole z ramką - osobna kolumna */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white p-1">
                <img src="/favicon-32x32.png" alt="Arteon" className="h-8 w-8 rounded-sm" />
              </div>

              {/* Nazwa strony, URL i kropki - środkowa kolumna */}
              <div className="min-w-0 flex-1">
                {/* Nazwa strony nad linkiem */}
                <p className="text-xs text-neutral-600">Arteon</p>

                {/* URL z 3 kropkami */}
                <div className="flex items-center gap-1">
                  <p className="text-mid truncate text-[13px]!">{url || t.urlPlaceholder}</p>
                  <div className="ml-3 flex flex-col gap-0.5">
                    <div className="h-0.5 w-0.5 rounded-full bg-neutral-500"></div>
                    <div className="h-0.5 w-0.5 rounded-full bg-neutral-500"></div>
                    <div className="h-0.5 w-0.5 rounded-full bg-neutral-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tytuł i opis - osobny div bez pustej przestrzeni */}
            <div className="mt-2">
              {/* Tytuł - niebieski i grubszy */}
              <p className="line-clamp-2 text-[22px]! leading-tight font-[500]! text-blue-900">{previewTitle}</p>

              {/* Opis - większy i pogrubiony */}
              <p className="mt-1 line-clamp-3 text-[14px]! leading-snug font-medium text-neutral-700">{previewDescription}</p>
            </div>
          </div>
        </ToolSection>
      </div>
    </>
  );
}
