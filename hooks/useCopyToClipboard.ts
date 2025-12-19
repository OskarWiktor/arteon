'use client';

import { useCallback, useRef, useState } from 'react';
import { copyTextToClipboard } from '@/lib/tools/clipboard';

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
      await copyTextToClipboard(text);

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
