import Wrapper from './Wrapper';
import type { CSSProperties } from 'react';

export type Size = 'sm' | 'md' | 'xl';

type GapStyle = CSSProperties & { ['--gap-h']?: string };

const VIEW_MIN = 360;
const VIEW_MAX = 1440;
const VIEW_RANGE = VIEW_MAX - VIEW_MIN;

const MAP: Record<Size, { min: number; max: number }> = {
  sm: { min: 80, max: 128 },
  md: { min: 128, max: 192 },
  xl: { min: 160, max: 256 },
};

export default function Gap({ size = 'md', variant, className }: { size?: Size; variant?: 'line'; className?: string }) {
  const { min, max } = MAP[size];
  const delta = max - min;
  const height = `clamp(${min}px, calc(${min}px + ${delta} * ((100vw - ${VIEW_MIN}px) / ${VIEW_RANGE})), ${max}px)`;
  const styleVar: GapStyle = { ['--gap-h']: height };

  return (
    <Wrapper>
      <div aria-hidden="true" className={['relative h-[var(--gap-h)] w-full shrink-0 transition-all duration-300 ease-out', className].filter(Boolean).join(' ')} style={styleVar} data-size={size}>
        {variant === 'line' && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <div className="h-px w-full bg-neutral-200" />
          </div>
        )}
      </div>
    </Wrapper>
  );
}
