'use client';

import { RiCheckLine, RiClipboardLine } from 'react-icons/ri';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

interface CopyButtonProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  variant?: 'default' | 'dark';
  className?: string;
  onCopy?: () => void;
  onError?: () => void;
}

export default function CopyButton({ text, label = 'Kopiuj', copiedLabel = 'Skopiowano', variant = 'default', className = '', onCopy, onError }: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  const variantClasses: Record<NonNullable<CopyButtonProps['variant']>, string> = {
    default: 'border border-black/15 bg-white text-neutral-900 hover:bg-neutral-50',
    dark: 'border border-white/10 text-white/80 hover:bg-white/10',
  };

  const handleCopy = async () => {
    await copy(text, {
      resetAfterMs: 1200,
      onCopy,
      onError,
    });
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex cursor-pointer items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${variantClasses[variant]} ${className}`}
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

