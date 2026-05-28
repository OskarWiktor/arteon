import { cn } from '@/lib/utils';
import ButtonCopy from '../atoms/buttons/ButtonCopy';
import { flexCenterBetweenClasses } from '@/lib/ui-classes';

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
  caption?: string;
  showLineNumbers?: boolean;
  wrap?: boolean;
  highlightLines?: number[];
  className?: string;
};

export default function CodeBlock({
  code,
  language,
  filename,
  caption,
  showLineNumbers = true,
  wrap = false,
  highlightLines = [],
  className,
}: CodeBlockProps) {
  const lines = code.replace(/\n$/, '').split('\n');

  return (
    <figure
      className={cn(
        'group rounded-lg border border-neutral-200 bg-gradient-to-b from-[color:var(--foreground)] to-[color:var(--neutral-900)] text-[color:var(--text-on-dark)] shadow-sm',
        className,
      )}
    >
      <div
        className={cn(
          'gap-3 rounded-t-xl border-b border-white/10 px-4 py-2',
          flexCenterBetweenClasses,
        )}
      >
        <div className='flex items-center gap-2'>
          {language ? (
            <span className='inline-block rounded bg-white/10 px-2 py-0.5 text-xs text-white/70'>
              {language}
            </span>
          ) : null}
          {filename ? <span className='truncate text-xs text-white/70'>{filename}</span> : null}
        </div>
        <ButtonCopy
          text={code}
          label='Kopiuj'
          copiedLabel='Skopiowano'
          variant='dark'
          className='gap-2 rounded-md px-2 py-1 text-xs'
        />
      </div>

      <pre
        className={cn('relative overflow-x-auto rounded-b-xl p-4 text-[13px] leading-relaxed', {
          'break-words whitespace-pre-wrap': wrap,
          'whitespace-pre': !wrap,
        })}
        role='region'
        aria-label={filename || 'Fragment kodu'}
      >
        <code className='grid grid-cols-[auto_1fr] gap-x-4'>
          {lines.map((ln, i) => {
            const n = i + 1;
            const isHl = highlightLines.includes(n);
            return (
              <span key={i} className={cn('contents', { 'bg-white/[0.04]': isHl })} data-line={n}>
                {showLineNumbers ? (
                  <span aria-hidden='true'>
                    <span className='min-w-6 pr-1 text-right text-xs text-white/40 tabular-nums select-none'>
                      {n}
                    </span>
                  </span>
                ) : null}
                <span className={cn('font-mono', { '': wrap, 'inline-block min-w-full': !wrap })}>
                  {ln || ' '}
                </span>
              </span>
            );
          })}
        </code>
      </pre>

      {caption ? (
        <figcaption className='border-t border-white/10 px-4 py-2 text-xs text-white/60'>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
