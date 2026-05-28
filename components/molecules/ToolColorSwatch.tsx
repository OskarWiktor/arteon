import ButtonCopy from '@/components/atoms/buttons/ButtonCopy';

interface ToolColorSwatchProps {
  hex: string;
  secondaryText: string;
  ariaLabelPrefix?: string;
  copyLabel?: string;
  copiedLabel?: string;
  onCopy?: (hex: string) => void;
}

export default function ToolColorSwatch({
  hex,
  secondaryText,
  ariaLabelPrefix,
  copyLabel,
  copiedLabel,
  onCopy,
}: ToolColorSwatchProps) {
  return (
    <div className='flex items-center overflow-hidden rounded-lg border border-neutral-200 bg-white px-3 py-2 gap-3'>
      <div
        className='rounded-md border border-black/10 h-9 w-9'
        style={{ backgroundColor: hex }}
        aria-label={ariaLabelPrefix ? `${ariaLabelPrefix} ${hex}` : hex}
      />
      <div className='min-w-0 flex-1'>
        <p className='tool-value text-dark'>{hex}</p>
        <p className='tool-meta truncate'>{secondaryText}</p>
      </div>
      {copyLabel && copiedLabel && (
        <ButtonCopy
          text={hex}
          label={copyLabel}
          copiedLabel={copiedLabel}
          onCopy={onCopy ? () => onCopy(hex) : undefined}
        />
      )}
    </div>
  );
}
