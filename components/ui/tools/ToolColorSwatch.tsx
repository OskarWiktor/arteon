import CopyButton from '@/components/ui/buttons/CopyButton';

interface ToolColorSwatchProps {
  hex: string;
  secondaryText: string;
  ariaLabelPrefix?: string;
  copyLabel?: string;
  copiedLabel?: string;
  onCopy?: (hex: string) => void;
}

export default function ToolColorSwatch({ hex, secondaryText, ariaLabelPrefix, copyLabel, copiedLabel, onCopy }: ToolColorSwatchProps) {
  return (
    <div className="tool-row gap-3">
      <div className="tool-color-swatch h-9 w-9" style={{ backgroundColor: hex }} aria-label={ariaLabelPrefix ? `${ariaLabelPrefix} ${hex}` : hex} />
      <div className="min-w-0 flex-1">
        <p className="tool-value text-dark">{hex}</p>
        <p className="tool-meta truncate">{secondaryText}</p>
      </div>
      {copyLabel && copiedLabel && <CopyButton text={hex} label={copyLabel} copiedLabel={copiedLabel} onCopy={onCopy ? () => onCopy(hex) : undefined} />}
    </div>
  );
}
