'use client';

import { useRef, useState } from 'react';
import {
  RiFileCopyLine,
  RiCheckLine,
  RiDownloadLine,
  RiCodeSSlashLine,
  RiPaletteLine,
} from 'react-icons/ri';
import Button from '@/components/atoms/buttons/Button';
import ButtonPill from '@/components/atoms/buttons/ButtonPill';
import Input from '@/components/atoms/form/Input';
import ToolFieldRow from '@/components/molecules/ToolFieldRow';
import ToolStatRow from '@/components/molecules/tools/ToolStatRow';
import Card from '@/components/organisms/Card';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { ui } from '@/lib/i18n/tools/loremIpsum';
import { useLocale } from '@/lib/LocaleContext';
import {
  generateLoremIpsum,
  getLoremStats,
  formatBytes,
  type LoremMode,
  type LoremLength,
  type LoremStyle,
  type LoremFormat,
  type LoremOptions,
} from '@/lib/tools/text/loremIpsum';
import { flexCenterClasses, smallIconSizeClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/clsx';

const MODES: LoremMode[] = [
  'paragraphs',
  'sentences',
  'words',
  'lists',
  'headings',
  'links',
  'table',
  'blockquotes',
  'definitions',
];
const LENGTHS: LoremLength[] = ['short', 'medium', 'long'];
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
const FORMATS: LoremFormat[] = ['plain', 'html'];

/**
 * Renders a localized Lorem Ipsum generator UI with controls for mode, count,
 * paragraph length, output format, and style, plus preview, statistics,
 * copy-to-clipboard, and download actions.
 *
 * The component maintains generation state (mode, count, paragraphLength,
 * outputFormat, style, output, and a deterministic seed) and exposes controls
 * to produce plain-text or HTML lorem ipsum output, view stats, copy results,
 * and download the output as a text file.
 *
 * @returns The rendered generator UI as a React element.
 */
export default function LoremIpsumGenerator() {
  const locale = useLocale();
  const t = ui[locale];

  const [mode, setMode] = useState<LoremMode>('paragraphs');
  const [count, setCount] = useState(5);
  const [paragraphLength, setParagraphLength] = useState<LoremLength>('medium');
  const [outputFormat, setOutputFormat] = useState<LoremFormat>('plain');
  const [style, setStyle] = useState<LoremStyle>('classic');
  const [output, setOutput] = useState('');
  const seedRef = useRef(Date.now());

  const { copy, copied } = useCopyToClipboard();
  const { copy: copyHtml, copied: copiedHtml } = useCopyToClipboard();

  const modeLabels: Record<LoremMode, string> = {
    paragraphs: t.paragraphs,
    sentences: t.sentences,
    words: t.words,
    lists: t.lists,
    headings: t.headings,
    links: t.links,
    table: t.table,
    blockquotes: t.blockquotes,
    definitions: t.definitions,
  };
  const lengthLabels: Record<LoremLength, string> = {
    short: t.short,
    medium: t.medium,
    long: t.long,
  };
  const formatLabels: Record<LoremFormat, string> = {
    plain: t.plainText,
    html: t.htmlFormat,
  };

  const stats = getLoremStats(output);

  const generate = () => {
    seedRef.current = Date.now();
    const options: LoremOptions = {
      mode,
      count,
      paragraphLength,
      startWithLorem: style === 'classic',
      outputFormat,
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

  const plainOutput = output.replace(/<[^>]+>/g, '');

  return (
    <div className='space-y-4 overflow-hidden'>
      <Card
        padding='lg'
        interactive={false}
        className='flex flex-wrap items-center'
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
        <Card interactive={false} padding='lg'>
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
            />
          </ToolFieldRow>

          {mode === 'paragraphs' && (
            <ToolFieldRow label={t.paragraphLength}>
              <div className='flex flex-wrap gap-2'>
                {LENGTHS.map(l => (
                  <button
                    key={l}
                    type='button'
                    onClick={() => setParagraphLength(l)}
                    className={cn(
                      'tool-button',
                      paragraphLength === l
                        ? 'bg-primary text-white'
                        : 'tool-button-inactive',
                    )}
                  >
                    {lengthLabels[l]}
                  </button>
                ))}
              </div>
            </ToolFieldRow>
          )}

          <ToolFieldRow label={t.outputFormat}>
            <div className='flex flex-wrap gap-2'>
              {FORMATS.map(f => (
                <button
                  key={f}
                  type='button'
                  onClick={() => setOutputFormat(f)}
                  className={cn(
                    'tool-button',
                    outputFormat === f
                      ? 'bg-primary text-white'
                      : 'tool-button-inactive',
                  )}
                >
                  {formatLabels[f]}
                </button>
              ))}
            </div>
          </ToolFieldRow>

          <Button variant='accent' onClick={generate} className='w-full'>
            {t.generate}
          </Button>

          {output && (
            <div className='border-t border-neutral-200 pt-4'>
              <h3 className='tool-value mb-3'>{t.statistics}</h3>
              <div className='space-y-2'>
                <ToolStatRow label={t.statWords} value={stats.words} />
                <ToolStatRow
                  label={t.statCharsWithSpaces}
                  value={stats.charsWithSpaces}
                />
                <ToolStatRow
                  label={t.statCharsWithoutSpaces}
                  value={stats.charsWithoutSpaces}
                />
                <ToolStatRow label={t.statSentences} value={stats.sentences} />
                <ToolStatRow
                  label={t.statParagraphs}
                  value={stats.paragraphs}
                />
                <ToolStatRow
                  label={t.statReadingTime}
                  value={stats.readingTime}
                />
                <ToolStatRow
                  label={t.statBytes}
                  value={formatBytes(stats.bytes)}
                />
              </div>
            </div>
          )}
        </Card>

        <Card interactive={false} padding='lg'>
          <h2 className='h6 pb-1'>{t.preview}</h2>

          {output ? (
            <div className='tool-input min-h-100 resize-y overflow-auto font-mono text-sm wrap-break-word whitespace-pre-wrap'>
              {output}
            </div>
          ) : (
            <div
              className={cn(
                'tool-input min-h-100 text-neutral-400',
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
                onClick={() => copy(plainOutput)}
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

              {outputFormat === 'html' && (
                <Button
                  variant='normal'
                  onClick={() => copyHtml(output)}
                  aria-label={copiedHtml ? t.copied : t.copyHtml}
                >
                  <span className='inline-flex items-center gap-2'>
                    {copiedHtml ? (
                      <RiCheckLine className={smallIconSizeClasses} />
                    ) : (
                      <RiCodeSSlashLine className={smallIconSizeClasses} />
                    )}
                    {copiedHtml ? t.copied : t.copyHtml}
                  </span>
                </Button>
              )}

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
