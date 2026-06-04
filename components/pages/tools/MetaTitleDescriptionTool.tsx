'use client';

import { useState } from 'react';
import ToolFieldRow from '@/components/molecules/ToolFieldRow';
import ToolHelper from '@/components/molecules/tools/ToolHelper';
import {
  analyzeMetaDescription,
  analyzeMetaTitle,
  truncateForPreview,
  type FieldMetrics,
} from '@/lib/tools/seo/metaLength';
import { getStatusClasses } from '@/utils/statusClasses';
import { useLocale } from '@/lib/LocaleContext';
import { ui } from '@/lib/i18n/tools/meta-title';
import Textarea from '@/components/atoms/form/Textarea';
import Input from '@/components/atoms/form/Input';
import Card from '@/components/organisms/Card';
import { cn } from '@/lib/utils';
import { flexCenterClasses, largeIconSizeClasses } from '@/lib/ui-classes';

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
      <div className='grid gap-4 overflow-hidden md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]'>
        <Card interactive={false} padding='lg'>
          <ToolFieldRow label={t.addUrl} helper={t.urlHelper}>
            <Input
              type='text'
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder={t.urlPlaceholder}
            />
          </ToolFieldRow>

          <ToolFieldRow
            label={t.enterTitleLabel}
            className='mt-8'
            helper={titleAnalysis.helperText}
          >
            <Input
              type='text'
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder={t.titlePlaceholder}
              maxLength={180}
            />
            <div className='tool-meta mt-2 flex flex-wrap items-center gap-2'>
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
              <span
                className={cn(
                  'ml-auto inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs! font-medium',
                  getStatusClasses(titleAnalysis.status),
                )}
              >
                {titleAnalysis.status === 'empty' ? t.noTitle : titleAnalysis.statusLabel}
              </span>
            </div>
          </ToolFieldRow>

          <ToolFieldRow
            label={t.enterDescriptionLabel}
            className='mt-8'
            helper={descriptionAnalysis.helperText}
          >
            <Textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className='min-h-[110px] resize-y'
              placeholder={t.descriptionPlaceholder}
              maxLength={400}
            />
            <div className='tool-meta mt-2 flex flex-wrap items-center gap-2'>
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
              <span
                className={cn(
                  'ml-auto inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs! font-medium',
                  getStatusClasses(descriptionAnalysis.status),
                )}
              >
                {descriptionAnalysis.status === 'empty'
                  ? t.noDescription
                  : descriptionAnalysis.statusLabel}
              </span>
            </div>
          </ToolFieldRow>
        </Card>

        <Card interactive={false} padding='lg'>
          <div>
            <h2 className='h6 pb-2'>{t.previewTitle}</h2>
            <ToolHelper>{t.previewHelper}</ToolHelper>
          </div>

          <div className='rounded-lg border border-neutral-200 bg-white p-4 text-sm shadow-inner'>
            <div className='flex gap-3'>
              <div
                className={cn(
                  'h-12 w-12 flex-shrink-0 rounded-lg border border-neutral-300 bg-white p-1',
                  flexCenterClasses,
                )}
              >
                <img
                  src='/favicon-32x32.png'
                  alt='Arteon'
                  className={cn(largeIconSizeClasses, 'rounded-sm')}
                />
              </div>

              <div className='min-w-0 flex-1'>
                <p className='text-xs text-neutral-600'>Arteon</p>

                <div className='flex items-center gap-1'>
                  <p className='truncate text-[13px]! text-mid'>{url || t.urlPlaceholder}</p>
                  <div className='ml-3 flex flex-col gap-0.5'>
                    <div className='h-0.5 w-0.5 rounded-lg bg-neutral-500'></div>
                    <div className='h-0.5 w-0.5 rounded-lg bg-neutral-500'></div>
                    <div className='h-0.5 w-0.5 rounded-lg bg-neutral-500'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-2'>
              <p className='line-clamp-2 text-[22px]! leading-tight font-[500]! text-blue-900'>
                {previewTitle}
              </p>

              <p className='mt-1 line-clamp-3 text-[14px]! leading-snug font-medium text-neutral-700'>
                {previewDescription}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
