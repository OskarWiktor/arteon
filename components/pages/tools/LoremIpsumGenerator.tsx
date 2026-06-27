'use client';

import { useRef, useState } from 'react';
import {
  RiFileCopyLine,
  RiCheckLine,
  RiDownloadLine,
  RiPaletteLine,
} from 'react-icons/ri';
import Button from '@/components/atoms/buttons/Button';
import ButtonPill from '@/components/atoms/buttons/ButtonPill';
import Input from '@/components/atoms/form/Input';
import ToolFieldRow from '@/components/molecules/ToolFieldRow';
import Card from '@/components/organisms/Card';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { cn } from '@/lib/clsx';
import { ui } from '@/lib/i18n/tools/loremIpsum';
import { useLocale } from '@/lib/LocaleContext';
import {
  generateLoremIpsum,
  type LoremStyle,
  type LoremOptions,
} from '@/lib/tools/text/loremIpsum';
import { flexCenterClasses, smallIconSizeClasses } from '@/lib/uiClasses';

type SimpleLoremMode = 'paragraphs' | 'sentences' | 'words';
const MODES: SimpleLoremMode[] = ['paragraphs', 'sentences', 'words'];
const STYLES: LoremStyle[] = [
  'classic',
  'hipster',
  'business',
  'polish',
  'bacon',
  'cupcake',
  'pirate',
  'legal',
];

/**
 * Renders a localized Lorem Ipsum generator UI with controls for mode, count, and style,
 * plus preview, copy-to-clipboard, and download actions.
 *
 * @returns The rendered generator UI as a React element.
 */
export default function LoremIpsumGenerator() {
  const locale = useLocale();
  const t = ui[locale];

  const [mode, setMode] = useState<SimpleLoremMode>('paragraphs');
  const [count, setCount] = useState(5);
  const [style, setStyle] = useState<LoremStyle>('classic');
  const [output, setOutput] = useState('');
  const seedRef = useRef(Date.now());

  const { copy, copied } = useCopyToClipboard();

  const modeLabels: Record<SimpleLoremMode, string> = {
    paragraphs: t.paragraphs,
    sentences: t.sentences,
    words: t.words,
  };

  const generate = () => {
    seedRef.current = Date.now();
    const options: LoremOptions = {
      mode,
      count,
      paragraphLength: 'medium',
      startWithLorem: style === 'classic',
      outputFormat: 'plain',
      style,
      locale,
    };
    setOutput(generateLoremIpsum(options, seedRef.current));
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lorem-ipsum.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className='space-y-4 overflow-hidden'>
      <Card
        padding='sm'
        interactive={false}
        className='flex flex-wrap items-center'
        variant='outlined'
      >
        <div className='flex flex-wrap items-center gap-2'>
          <RiPaletteLine className='text-base text-primary' />
          <span className='tool-value'>{t.styleBarTitle}</span>
          <div className='flex flex-wrap gap-1'>
            {STYLES.map(s => (
              <ButtonPill
                key={s}
                value={s}
                current={style}
                label={t[s]}
                onChange={setStyle}
              />
            ))}
          </div>
        </div>
      </Card>

      <div className='grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]'>
        <Card interactive={false} padding='lg' variant='outlined'>
          <h2 className='h6 pb-1'>{t.panelTitle}</h2>

          <ToolFieldRow label={t.mode}>
            <div className='flex flex-wrap gap-2'>
              {MODES.map(m => (
                <button
                  key={m}
                  type='button'
                  onClick={() => setMode(m)}
                  className={cn(
                    'tool-button',
                    mode === m
                      ? 'bg-primary text-white'
                      : 'tool-button-inactive',
                  )}
                >
                  {modeLabels[m]}
                </button>
              ))}
            </div>
          </ToolFieldRow>

          <ToolFieldRow label={t.count}>
            <Input
              type='number'
              min={1}
              max={9999}
              value={count}
              onChange={e =>
                setCount(
                  Math.max(1, Math.min(9999, Number(e.target.value) || 1)),
                )
              }
              className='w-20'
            />
          </ToolFieldRow>

          <Button variant='accent' onClick={generate}>
            {t.generate}
          </Button>
        </Card>

        <Card interactive={false} padding='lg' variant='outlined'>
          <h2 className='h6 pb-1'>{t.preview}</h2>

          {output ? (
            <div className='tool-input min-h-100 resize-y overflow-auto font-mono text-sm wrap-break-word whitespace-pre-wrap'>
              {output}
            </div>
          ) : (
            <div
              className={cn(
                'tool-input min-h-100 text-light',
                flexCenterClasses,
              )}
            >
              {t.emptyState}
            </div>
          )}

          {output && (
            <div className='flex flex-wrap gap-2'>
              <Button
                variant='normal'
                onClick={() => copy(output)}
                aria-label={copied ? t.copied : t.copyText}
              >
                <span className='inline-flex items-center gap-2'>
                  {copied ? (
                    <RiCheckLine className={smallIconSizeClasses} />
                  ) : (
                    <RiFileCopyLine className={smallIconSizeClasses} />
                  )}
                  {copied ? t.copied : t.copyText}
                </span>
              </Button>

              <Button
                variant='normal'
                onClick={handleDownload}
                aria-label={t.downloadTxt}
              >
                <span className='inline-flex items-center gap-2'>
                  <RiDownloadLine className={smallIconSizeClasses} />
                  {t.downloadTxt}
                </span>
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
