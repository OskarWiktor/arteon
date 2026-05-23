'use client';

import { RiCheckLine, RiClipboardLine } from 'react-icons/ri';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { cn } from '@/lib/utils';
import { focusRingClasses } from '@/lib/ui-classes';

type ButtonCopyVariant = 'default' | 'dark';

interface ButtonCopyProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  variant?: ButtonCopyVariant;
  className?: string;
  onCopy?: () => void;
  onError?: () => void;
}

const variantClasses: Record<ButtonCopyVariant, string> = {
  default: 'border-black/15 bg-white text-dark hover:bg-neutral-50',
  dark: 'border-white/10 text-white/80 hover:bg-white/10',
};

const buttonCopyClasses =
  'inline-flex items-center gap-1rounded-full border px-2.5 py-1 text-[11px] font-medium cursor-pointer transition-colors';

export default function ButtonCopy({
  text,
  label = 'Kopiuj',
  copiedLabel = 'Skopiowano',
  variant = 'default',
  className,
  onCopy,
  onError,
}: ButtonCopyProps) {
  const { copied, copy } = useCopyToClipboard();

  const handleCopy = async () => {
    await copy(text, {
      resetAfterMs: 1200,
      onCopy,
      onError,
    });
  };

  const currentLabel = copied ? copiedLabel : label;
  const Icon = copied ? RiCheckLine : RiClipboardLine;

  return (
    <button
      type='button'
      onClick={handleCopy}
      className={cn(buttonCopyClasses, focusRingClasses, variantClasses[variant], className)}
      aria-label={currentLabel}
    >
      <Icon className='h-3.5 w-3.5' aria-hidden='true' />
      {currentLabel}
    </button>
  );
}
