'use client';

import Image from 'next/image';
import { useState } from 'react';
import Input from '@/components/atoms/form/Input';
import Label from '@/components/atoms/form/Label';
import Textarea from '@/components/atoms/form/Textarea';
import ToolFieldRow from '@/components/molecules/ToolFieldRow';
import Card from '@/components/organisms/Card';
import { cn } from '@/lib/clsx';
import { ui } from '@/lib/i18n/tools/metaTitle';
import { useLocale } from '@/lib/LocaleContext';
import {
  analyzeMetaDescription,
  analyzeMetaTitle,
  truncateForPreview,
  type FieldMetrics,
} from '@/lib/tools/metaLength';
import { flexCenterClasses, largeIconSizeClasses } from '@/lib/uiClasses';

type LengthStatus = 'empty' | 'too-short' | 'ideal' | 'too-long';

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

  return {
    ...metrics,
    statusLabel: t.goodLength,
    helperText: t.titleGoodLength,
  };
}

function analyzeDescription(text: string, t: UiTexts): FieldAnalysis {
  const metrics = analyzeMetaDescription(text);

  if (metrics.status === 'empty') {
    return {
      ...metrics,
      statusLabel: t.noData,
      helperText: t.enterDescription,
    };
  }

  if (metrics.status === 'too-short') {
    return {
      ...metrics,
      statusLabel: t.tooShort,
      helperText: t.descriptionTooShort,
    };
  }

  if (metrics.status === 'too-long') {
    return {
      ...metrics,
      statusLabel: t.tooLong,
      helperText: t.descriptionTooLong,
    };
  }

  return {
    ...metrics,
    statusLabel: t.goodLength,
    helperText: t.descriptionGoodLength,
  };
}

/**
 * Renders a client-side UI for editing and previewing a page meta title and description.
 *
 * Maintains local state for title and description, displays editable inputs with live
 * length/width metrics and status badges, and shows a styled search-engine preview that updates
 * as the user types. Text is localized based on the current locale.
 *
 * @returns The component's rendered JSX for the meta title/description editor and preview.
 */
export default function MetaTitleDescriptionTool() {
  const locale = useLocale();
  const t = ui[locale];
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const titleAnalysis = analyzeTitle(title, t);
  const descriptionAnalysis = analyzeDescription(description, t);

  const previewTitle = truncateForPreview(title || t.exampleTitle, 65);
  const previewDescription = truncateForPreview(
    description || t.exampleDescription,
    165,
  );

  return (
    <>
      <div className='grid gap-4 overflow-hidden md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]'>
        <Card interactive={false} padding='lg' variant='outlined'>
          <Label htmlFor='meta-title'>{t.enterTitleLabel}</Label>
          <ToolFieldRow helper={titleAnalysis.helperText}>
            <Input
              id='meta-title'
              type='text'
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder={t.titlePlaceholder}
              maxLength={180}
            />
            <div className='tool-meta mt-2 flex flex-wrap items-center gap-2'>
              <span>
                {t.chars}: <strong>{titleAnalysis.chars}</strong> · {t.words}:{' '}
                <strong>{titleAnalysis.words}</strong> · {t.width}:{' '}
                <strong>~{titleAnalysis.pixels} px</strong>
              </span>
              <span
                className={cn(
                  'ml-auto inline-flex items-center px-2.5 py-0.5 text-xs! font-medium',
                  getStatusClasses(titleAnalysis.status),
                )}
              >
                {titleAnalysis.status === 'empty'
                  ? t.noTitle
                  : titleAnalysis.statusLabel}
              </span>
            </div>
          </ToolFieldRow>

          <Label htmlFor='meta-description' className='mt-8'>
            {t.enterDescriptionLabel}
          </Label>
          <ToolFieldRow helper={descriptionAnalysis.helperText}>
            <Textarea
              id='meta-description'
              value={description}
              onChange={e => setDescription(e.target.value)}
              className='min-h-27.5 resize-y'
              placeholder={t.descriptionPlaceholder}
              maxLength={400}
            />
            <div className='tool-meta mt-2 flex flex-wrap items-center gap-2'>
              <span>
                {t.chars}: <strong>{descriptionAnalysis.chars}</strong> ·{' '}
                {t.words}: <strong>{descriptionAnalysis.words}</strong> ·{' '}
                {t.width}: <strong>~{descriptionAnalysis.pixels} px</strong>
              </span>
              <span
                className={cn(
                  'ml-auto inline-flex items-center px-2.5 py-0.5 text-xs! font-medium',
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

        <Card interactive={false} padding='lg' variant='outlined'>
          <div className='border border-neutral-200 bg-white p-4 text-sm shadow-inner'>
            <div className='flex gap-3'>
              <div
                className={cn(
                  'h-12 w-12 shrink-0 border border-neutral-300 bg-white p-1',
                  flexCenterClasses,
                )}
              >
                <Image
                  src='/favicon-32x32.png'
                  alt='Arteon'
                  width={32}
                  height={32}
                  className={cn(largeIconSizeClasses, '')}
                />
              </div>

              <div className='min-w-0 flex-1'>
                <p className='text-xs'>Arteon</p>

                <div className='flex items-center gap-1'>
                  <p className='truncate text-[13px]!'>{t.exampleUrl}</p>
                  <div className='ml-3 flex flex-col gap-0.5'>
                    <div className='h-0.5 w-0.5 bg-light'></div>
                    <div className='h-0.5 w-0.5 bg-light'></div>
                    <div className='h-0.5 w-0.5 bg-light'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-2'>
              <p className='line-clamp-2 text-[22px]! leading-tight font-medium! text-info-text'>
                {previewTitle}
              </p>

              <p className='mt-1 line-clamp-3 text-[14px]! leading-snug font-medium'>
                {previewDescription}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
