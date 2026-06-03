import type { CSSProperties } from 'react';

type DividerSize = 'xs' | 'sm' | 'md' | 'xl';

interface DividerProps {
  size?: DividerSize;
  line?: boolean;
}

const HEIGHT_BY_SIZE: Record<DividerSize, CSSProperties['height']> = {
  xs: 'clamp(40px, calc(40px + 40 * ((100vw - 360px) / 1080)), 80px)',
  sm: 'clamp(80px, calc(80px + 48 * ((100vw - 360px) / 1080)), 128px)',
  md: 'clamp(128px, calc(128px + 64 * ((100vw - 360px) / 1080)), 192px)',
  xl: 'clamp(160px, calc(160px + 96 * ((100vw - 360px) / 1080)), 256px)',
};

export default function Divider({ size = 'md', line = false }: DividerProps) {
  return (
    <div
      aria-hidden='true'
      className='relative w-full shrink-0'
      style={{ height: HEIGHT_BY_SIZE[size] }}
    >
      {line && (
        <div className='absolute inset-x-0 top-1/2 -translate-y-1/2'>
          <div className='h-px w-full bg-neutral-200' />
        </div>
      )}
    </div>
  );
}
