'use client';

import { useCallback, useState } from 'react';
import { useTimeout } from '@/hooks/useTimeout';
import { copyTextToClipboard, canWriteTextToClipboard, copyHtmlWithExecCommand, writeTextToClipboard } from '@/utils/clipboard';

type CopyStatus = 'idle' | 'success' | 'error';

type CopyOptions = {
  resetAfterMs?: number;
  onCopy?: () => void;
  onError?: () => void;
};

export function useCopyToClipboard(defaultResetMs = 1200) {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<CopyStatus>('idle');
  const { start: startReset } = useTimeout();

  const resetAfter = useCallback(
    (ms: number) => {
      startReset(() => {
        setCopied(false);
        setStatus('idle');
      }, ms);
    },
    [startReset],
  );

  const copy = useCallback(
    async (text: string, options?: CopyOptions) => {
      const ms = options?.resetAfterMs ?? defaultResetMs;
      try {
        await copyTextToClipboard(text);
        setCopied(true);
        setStatus('success');
        options?.onCopy?.();
        resetAfter(ms);
        return true;
      } catch {
        setStatus('error');
        options?.onError?.();
        resetAfter(ms);
        return false;
      }
    },
    [defaultResetMs, resetAfter],
  );

  const copyHtml = useCallback(
    (html: string, options?: CopyOptions) => {
      const ms = options?.resetAfterMs ?? defaultResetMs;
      if (!html) return;

      try {
        const ok = copyHtmlWithExecCommand(html);
        if (!ok) throw new Error('execCommand failed');
        setCopied(true);
        setStatus('success');
        options?.onCopy?.();
        resetAfter(ms);
      } catch {
        if (!canWriteTextToClipboard()) {
          setStatus('error');
          options?.onError?.();
          resetAfter(ms);
          return;
        }

        writeTextToClipboard(html)
          .then(() => {
            setCopied(true);
            setStatus('success');
            options?.onCopy?.();
            resetAfter(ms);
          })
          .catch(() => {
            setStatus('error');
            options?.onError?.();
            resetAfter(ms);
          });
      }
    },
    [defaultResetMs, resetAfter],
  );

  return { copied, status, copy, copyHtml };
}
