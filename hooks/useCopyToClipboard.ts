'use client';

import { useCallback, useRef, useState } from 'react';

type Options = {
  resetAfterMs?: number;
  onCopy?: () => void;
  onError?: () => void;
};

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  const copy = useCallback(async (text: string, options?: Options) => {
    const resetAfterMs = options?.resetAfterMs ?? 1200;

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setCopied(true);
      options?.onCopy?.();

      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopied(false), resetAfterMs);

      return true;
    } catch {
      options?.onError?.();
      return false;
    }
  }, []);

  return { copied, copy };
}
