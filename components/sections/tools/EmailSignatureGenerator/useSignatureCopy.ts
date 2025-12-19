'use client';

import { useCallback, useState } from 'react';
import { useTimeout } from '@/hooks/useTimeout';
import type { CopyStatus } from '@/components/sections/tools/EmailSignatureGenerator/types';
import { canWriteTextToClipboard, copyHtmlWithExecCommand, writeTextToClipboard } from '@/lib/tools/clipboard';

type UseSignatureCopyOptions = {
  resetAfterMs?: number;
};

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
        if (!canWriteTextToClipboard()) {
          setCopyStatus('error');
          startCopyReset(() => setCopyStatus('idle'), resetAfterMs);
          return;
        }

        writeTextToClipboard(signatureHtml)
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
