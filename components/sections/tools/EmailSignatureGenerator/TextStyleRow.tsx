import { RiRefreshLine, RiAddLine, RiSubtractLine } from 'react-icons/ri';
import type { TextElementKey } from '@/components/sections/tools/EmailSignatureGenerator/types';

interface TextStyleRowProps {
  elementKey: TextElementKey;
  label: string;
  colorLabel: string;
  sizeLabel: string;
  currentColor: string | null;
  defaultColor: string;
  sizeOffset: number;
  customColors: string[];
  onColorChange: (key: TextElementKey, color: string | null) => void;
  onSizeChange: (key: TextElementKey, delta: number) => void;
}

export default function TextStyleRow({ elementKey, label, colorLabel, sizeLabel, currentColor, defaultColor, sizeOffset, customColors, onColorChange, onSizeChange }: TextStyleRowProps) {
  return (
    <div className="space-y-2 border-t border-neutral-200 pt-3">
      <p className="text-light text-xs! font-medium uppercase">{label}</p>
      <div className="flex items-center gap-2">
        <span className="text-light w-12 text-xs!">{colorLabel}:</span>
        <button type="button" onClick={() => onColorChange(elementKey, null)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" title="Reset">
          <RiRefreshLine className="text-primary h-3.5 w-3.5" />
        </button>
        <div className={`h-7 w-7 rounded border-2 ${currentColor === null ? 'border-mid' : 'border-neutral-300'}`} style={{ backgroundColor: currentColor || defaultColor }} />
        {customColors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onColorChange(elementKey, color)}
            className={`h-7 w-7 rounded border-2 ${currentColor === color ? 'border-mid' : 'border-neutral-300'}`}
            style={{ backgroundColor: color }}
          />
        ))}
        <div className="relative">
          <input type="color" value={currentColor || defaultColor} onChange={(e) => onColorChange(elementKey, e.target.value)} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
          <div className="border-primary8 hover:border-primary-light0 flex h-7 w-7 cursor-pointer items-center justify-center rounded border border-dashed">
            <RiAddLine className="text-light h-3.5 w-3.5" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-light w-12 text-xs!">{sizeLabel}:</span>
        <button type="button" onClick={() => onSizeChange(elementKey, -2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zmniejsz rozmiar">
          <RiSubtractLine className="text-primary h-3.5 w-3.5" />
        </button>
        <span className="w-10 text-center text-xs! font-medium">
          {sizeOffset > 0 ? '+' : ''}
          {sizeOffset}
        </span>
        <button type="button" onClick={() => onSizeChange(elementKey, 2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zwiększ rozmiar">
          <RiAddLine className="text-primary h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
