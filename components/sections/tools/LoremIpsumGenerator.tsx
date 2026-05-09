'use client';

import { useRef, useState } from 'react';
import { RiFileCopyLine, RiCheckLine, RiDownloadLine, RiCodeSSlashLine, RiPaletteLine } from 'react-icons/ri';
import PillButton from '@/components/ui/tools/PillButton';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolFieldRow from '@/components/ui/tools/ToolFieldRow';
import ToolStatRow from '@/components/ui/tools/ToolStatRow';
import Button from '@/components/ui/buttons/Button';
import { generateLoremIpsum, getLoremStats, formatBytes, type LoremMode, type LoremLength, type LoremStyle, type LoremFormat, type LoremOptions } from '@/lib/tools/text/loremIpsum';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useLocale } from '@/lib/LocaleContext';
import { ui } from '@/lib/i18n/tools/lorem-ipsum';

const MODES: LoremMode[] = ['paragraphs', 'sentences', 'words', 'lists', 'headings', 'links', 'table', 'blockquotes', 'definitions'];
const LENGTHS: LoremLength[] = ['short', 'medium', 'long'];
const STYLES: LoremStyle[] = ['classic', 'hipster', 'business', 'polish', 'bacon', 'cupcake', 'pirate', 'legal'];
const FORMATS: LoremFormat[] = ['plain', 'html'];

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
  const lengthLabels: Record<LoremLength, string> = { short: t.short, medium: t.medium, long: t.long };
  const formatLabels: Record<LoremFormat, string> = { plain: t.plainText, html: t.htmlFormat };

  const stats = getLoremStats(output);

  const generate = () => {
    seedRef.current = Date.now();
    const options: LoremOptions = { mode, count, paragraphLength, startWithLorem: style === 'classic', outputFormat, style, locale };
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
    <div className="space-y-4 overflow-hidden">
      <ToolSection padding="sm" className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <RiPaletteLine className="text-primary text-base" />
          <span className="tool-value">{t.styleBarTitle}</span>
          <div className="flex flex-wrap gap-1">
            {STYLES.map((s) => (
              <PillButton key={s} value={s} current={style} label={t[s]} onChange={setStyle} />
            ))}
          </div>
        </div>
      </ToolSection>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        {/* Settings panel */}
        <ToolSection className="space-y-5">
          <h2 className="h6 pb-1">{t.panelTitle}</h2>

          {/* Mode */}
          <ToolFieldRow label={t.mode}>
            <div className="flex flex-wrap gap-2">
              {MODES.map((m) => (
                <button key={m} type="button" onClick={() => setMode(m)} className={`tool-button ${mode === m ? 'tool-button-active' : 'tool-button-inactive'}`}>
                  {modeLabels[m]}
                </button>
              ))}
            </div>
          </ToolFieldRow>

          {/* Count */}
          <ToolFieldRow label={t.count}>
            <input type="number" min={1} max={9999} value={count} onChange={(e) => setCount(Math.max(1, Math.min(9999, Number(e.target.value) || 1)))} className="tool-input w-20 text-center" />
          </ToolFieldRow>

          {/* Paragraph length – only show for paragraphs mode */}
          {mode === 'paragraphs' && (
            <ToolFieldRow label={t.paragraphLength}>
              <div className="flex flex-wrap gap-2">
                {LENGTHS.map((l) => (
                  <button key={l} type="button" onClick={() => setParagraphLength(l)} className={`tool-button ${paragraphLength === l ? 'tool-button-active' : 'tool-button-inactive'}`}>
                    {lengthLabels[l]}
                  </button>
                ))}
              </div>
            </ToolFieldRow>
          )}

          {/* Format */}
          <ToolFieldRow label={t.outputFormat}>
            <div className="flex flex-wrap gap-2">
              {FORMATS.map((f) => (
                <button key={f} type="button" onClick={() => setOutputFormat(f)} className={`tool-button ${outputFormat === f ? 'tool-button-active' : 'tool-button-inactive'}`}>
                  {formatLabels[f]}
                </button>
              ))}
            </div>
          </ToolFieldRow>

          {/* Generate button */}
          <Button variant="accent" onClick={generate} className="w-full">
            {t.generate}
          </Button>

          {/* Statistics */}
          {output && (
            <div className="border-t border-neutral-200 pt-4">
              <h3 className="tool-value mb-3">{t.statistics}</h3>
              <div className="space-y-2">
                <ToolStatRow label={t.statWords} value={stats.words} />
                <ToolStatRow label={t.statCharsWithSpaces} value={stats.charsWithSpaces} />
                <ToolStatRow label={t.statCharsWithoutSpaces} value={stats.charsWithoutSpaces} />
                <ToolStatRow label={t.statSentences} value={stats.sentences} />
                <ToolStatRow label={t.statParagraphs} value={stats.paragraphs} />
                <ToolStatRow label={t.statReadingTime} value={stats.readingTime} />
                <ToolStatRow label={t.statBytes} value={formatBytes(stats.bytes)} />
              </div>
            </div>
          )}
        </ToolSection>

        {/* Preview panel */}
        <ToolSection className="space-y-4">
          <h2 className="h6 pb-1">{t.preview}</h2>

          {output ? (
            <div className="tool-textarea min-h-[400px] resize-y overflow-auto font-mono text-sm break-words whitespace-pre-wrap">{output}</div>
          ) : (
            <div className="tool-textarea flex min-h-[400px] items-center justify-center text-neutral-400">{t.emptyState}</div>
          )}

          {/* Action bar */}
          {output && (
            <div className="flex flex-wrap gap-2">
              <Button variant="normal" onClick={() => copy(plainOutput)} aria-label={copied ? t.copied : t.copyText}>
                <span className="inline-flex items-center gap-2">
                  {copied ? <RiCheckLine className="h-4 w-4" /> : <RiFileCopyLine className="h-4 w-4" />}
                  {copied ? t.copied : t.copyText}
                </span>
              </Button>

              {outputFormat === 'html' && (
                <Button variant="normal" onClick={() => copyHtml(output)} aria-label={copiedHtml ? t.copied : t.copyHtml}>
                  <span className="inline-flex items-center gap-2">
                    {copiedHtml ? <RiCheckLine className="h-4 w-4" /> : <RiCodeSSlashLine className="h-4 w-4" />}
                    {copiedHtml ? t.copied : t.copyHtml}
                  </span>
                </Button>
              )}

              <Button variant="normal" onClick={handleDownload} aria-label={t.downloadTxt}>
                <span className="inline-flex items-center gap-2">
                  <RiDownloadLine className="h-4 w-4" />
                  {t.downloadTxt}
                </span>
              </Button>
            </div>
          )}
        </ToolSection>
      </div>
    </div>
  );
}
