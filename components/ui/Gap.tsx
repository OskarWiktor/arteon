import * as React from 'react';
import Wrapper from './Wrapper';

/**
 * Fluid spacer with smooth, breakpoint‑free sizing using CSS clamp().
 * Scales linearly from 360px → 1440px viewport width.
 */

export type Size = 'sm' | 'md' | 'xl';

export default function Gap({ size = 'md', variant, className }: { size?: Size; variant?: 'line'; className?: string }) {
  const VIEW_MIN = 360;
  const VIEW_MAX = 1440;
  const VIEW_RANGE = VIEW_MAX - VIEW_MIN;

  const map: Record<Size, { min: number; max: number }> = {
    sm: { min: 80, max: 128 },
    md: { min: 128, max: 192 },
    xl: { min: 160, max: 256 },
  };

  const { min, max } = map[size];
  const delta = max - min;
  const height = `clamp(${min}px, calc(${min}px + ${delta} * ((100vw - ${VIEW_MIN}px) / ${VIEW_RANGE})), ${max}px)`;
  const styleVar = { ['--gap-h' as any]: height } as React.CSSProperties;

  return (
    <Wrapper>
      <div
        aria-hidden="true"
        role="presentation"
        className={['relative h-[var(--gap-h)] w-full shrink-0 transition-all duration-300 ease-out', className].filter(Boolean).join(' ')}
        style={styleVar}
        data-size={size}
      >
        {variant === 'line' && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <div className="h-px w-full bg-gray-300" />
          </div>
        )}
      </div>
    </Wrapper>
  );
}
