'use client';

import { useState } from 'react';
import { RiCheckLine, RiClipboardLine } from 'react-icons/ri';

interface CopyButtonProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  onCopy?: () => void;
  onError?: () => void;
}

export default function CopyButton({ text, label = 'Kopiuj', copiedLabel = 'Skopiowano', className = '', onCopy, onError }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback dla starszych przeglądarek
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
      onCopy?.();
      setTimeout(() => {
        setCopied(false);
      }, 1200);
    } catch {
      onError?.();
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex cursor-pointer items-center gap-1 rounded-full border border-black/15 bg-white px-2.5 py-1 text-[11px]! font-medium text-neutral-900 hover:bg-neutral-50 ${className}`}
      aria-label={copied ? copiedLabel : label}
    >
      {copied ? (
        <>
          <RiCheckLine className="h-3.5 w-3.5" />
          {copiedLabel}
        </>
      ) : (
        <>
          <RiClipboardLine className="h-3.5 w-3.5" />
          {label}
        </>
      )}
    </button>
  );
}

