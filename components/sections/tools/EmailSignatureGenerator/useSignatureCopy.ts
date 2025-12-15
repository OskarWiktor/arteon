'use client';

import { useCallback, useState } from 'react';
import { useTimeout } from '@/hooks/useTimeout';
import type { CopyStatus } from '@/components/sections/tools/EmailSignatureGenerator/types';

type UseSignatureCopyOptions = {
  resetAfterMs?: number;
};

function copyHtmlWithExecCommand(html: string): boolean {
  const temp = document.createElement('div');
  temp.style.position = 'fixed';
  temp.style.pointerEvents = 'none';
  temp.style.opacity = '0';
  temp.innerHTML = html;

  document.body.appendChild(temp);

  try {
    const range = document.createRange();
    range.selectNodeContents(temp);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    return document.execCommand('copy');
  } finally {
    window.getSelection()?.removeAllRanges();
    temp.remove();
  }
}

export function useSignatureCopy(options?: UseSignatureCopyOptions) {
  const resetAfterMs = options?.resetAfterMs ?? 3000;

  const { start: startCopyReset } = useTimeout();
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');

  const copyToGmail = useCallback(
    (signatureHtml: string) => {
      if (!signatureHtml) return;

      try {
        const successful = copyHtmlWithExecCommand(signatureHtml);

        if (!successful) {
          throw new Error('execCommand failed');
        }

        setCopyStatus('success');
        startCopyReset(() => setCopyStatus('idle'), resetAfterMs);
      } catch {
        if (!navigator.clipboard?.writeText) {
          setCopyStatus('error');
          startCopyReset(() => setCopyStatus('idle'), resetAfterMs);
          return;
        }

        navigator.clipboard
          .writeText(signatureHtml)
          .then(() => {
            setCopyStatus('success');
            startCopyReset(() => setCopyStatus('idle'), resetAfterMs);
          })
          .catch(() => {
            setCopyStatus('error');
            startCopyReset(() => setCopyStatus('idle'), resetAfterMs);
          });
      }
    },
    [resetAfterMs, startCopyReset],
  );

  return { copyStatus, copyToGmail };
}
