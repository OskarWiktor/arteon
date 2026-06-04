import { RiRefreshLine, RiAddLine, RiSubtractLine } from 'react-icons/ri';
import InputColor from '@/components/atoms/form/InputColor';
import { flexCenterClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import type { TextElementKey } from '@/types/tools/email';

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

export default function TextStyleRow({
  elementKey,
  label,
  colorLabel,
  sizeLabel,
  currentColor,
  defaultColor,
  sizeOffset,
  customColors,
  onColorChange,
  onSizeChange,
}: TextStyleRowProps) {
  return (
    <div className='space-y-2 border-t border-neutral-200 pt-3'>
      <p className='text-xs! font-medium text-light uppercase'>{label}</p>
      <div className='flex items-center gap-2'>
        <span className='w-12 text-xs! text-light'>{colorLabel}:</span>
        <button
          type='button'
          onClick={() => onColorChange(elementKey, null)}
          className='rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100'
          title='Reset'
        >
          <RiRefreshLine className='h-3.5 w-3.5 text-primary' />
        </button>
        <div
          className={cn(
            'h-7 w-7 rounded border-2',
            currentColor === null ? 'border-mid' : 'border-neutral-300',
          )}
          style={{ backgroundColor: currentColor || defaultColor }}
        />
        {customColors.map(color => (
          <button
            key={color}
            type='button'
            onClick={() => onColorChange(elementKey, color)}
            className={cn(
              'h-7 w-7 rounded border-2',
              currentColor === color ? 'border-mid' : 'border-neutral-300',
            )}
            style={{ backgroundColor: color }}
          />
        ))}
        <div className='relative'>
          <InputColor
            value={currentColor || defaultColor}
            onChange={e => onColorChange(elementKey, e.target.value)}
            className='absolute inset-0 h-full! w-full! opacity-0'
          />
          <div
            className={cn(
              'border-primary8 hover:border-primary-light0 h-7 w-7 cursor-pointer rounded border border-dashed',
              flexCenterClasses,
            )}
          >
            <RiAddLine className='h-3.5 w-3.5 text-light' />
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <span className='w-12 text-xs! text-light'>{sizeLabel}:</span>
        <button
          type='button'
          onClick={() => onSizeChange(elementKey, -2)}
          className='rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100'
          aria-label='Zmniejsz rozmiar'
        >
          <RiSubtractLine className='h-3.5 w-3.5 text-primary' />
        </button>
        <span className='w-10 text-center text-xs! font-medium'>
          {sizeOffset > 0 ? '+' : ''}
          {sizeOffset}
        </span>
        <button
          type='button'
          onClick={() => onSizeChange(elementKey, 2)}
          className='rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100'
          aria-label='Zwiększ rozmiar'
        >
          <RiAddLine className='h-3.5 w-3.5 text-primary' />
        </button>
      </div>
    </div>
  );
}
