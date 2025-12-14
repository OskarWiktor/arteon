'use client';

import { useMemo } from 'react';
import CopyButton from './buttons/CopyButton';
import Text from './typography/Text';

const ui = {
  pl: {
    copyCode: 'Skopiuj kod',
    copied: 'Skopiowano',
    copy: 'Kopiuj',
    codeFragment: 'Fragment kodu',
  },
} as const;

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

export default function CodeBlock({ code, language, filename, caption, showLineNumbers = true, wrap = false, highlightLines = [], className = '' }: CodeBlockProps) {
  const t = ui.pl;

  const lines = useMemo(() => code.replace(/\n$/, '').split('\n'), [code]);

  return (
    <figure className={`group rounded-2xl border border-black/10 bg-gradient-to-b from-[#0b0b0c] to-[#121215] text-[#e7e7ea] shadow-sm ${className}`}>
      <div className="flex items-center justify-between gap-3 rounded-t-xl border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-2">
          {language ? (
            <Text variant="xs" as="span" className="inline-block rounded bg-white/10 px-2 py-0.5 text-white/70">
              {language}
            </Text>
          ) : null}
          {filename ? (
            <Text variant="xs" as="span" className="truncate text-white/70">
              {filename}
            </Text>
          ) : null}
        </div>
        <CopyButton
          text={code}
          label={t.copy}
          copiedLabel={t.copied}
          variant="dark"
          className="gap-2 rounded-md px-2 py-1 text-xs"
        />
      </div>

      <pre
        className={`relative overflow-x-auto rounded-b-xl p-4 text-[13px] leading-relaxed ${wrap ? 'break-words whitespace-pre-wrap' : 'whitespace-pre'}`}
        role="region"
        aria-label={filename || t.codeFragment}
      >
        <code className="grid grid-cols-[auto_1fr] gap-x-4">
          {lines.map((ln, i) => {
            const n = i + 1;
            const isHl = highlightLines.includes(n);
            return (
              <span key={i} className={`contents ${isHl ? 'bg-white/[0.04]' : ''}`} data-line={n}>
                {showLineNumbers ? (
                  <span aria-hidden="true">
                    <Text variant="xs" as="span" className="min-w-6 pr-1 text-right text-white/40 tabular-nums select-none">
                      {n}
                    </Text>
                  </span>
                ) : null}
                <span className={`font-mono ${wrap ? '' : 'inline-block min-w-full'}`}>{ln || ' '}</span>
              </span>
            );
          })}
        </code>
      </pre>

      {caption ? (
        <Text variant="xs" as="figcaption" className="border-t border-white/10 px-4 py-2 text-white/60">
          {caption}
        </Text>
      ) : null}
    </figure>
  );
}
