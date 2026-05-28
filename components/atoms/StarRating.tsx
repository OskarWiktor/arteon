import { cn } from '@/lib/utils';

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function StarRating({
  value,
  size = 20,
  className,
}: {
  value: number;
  size?: number;
  className?: string;
}) {
  const v = clamp(Math.round(value * 2) / 2, 0, 5);
  const full = Math.floor(v);
  const half = v - full === 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  const box = 24;
  const starCls = 'inline-block align-middle';

  const FullStar = (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${box} ${box}`}
      aria-hidden='true'
      className={starCls}
    >
      <path
        fill='currentColor'
        d='M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z'
      />
    </svg>
  );

  const HalfStar = (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${box} ${box}`}
      aria-hidden='true'
      className={starCls}
    >
      <defs>
        <linearGradient id='halfGrad' x1='0' x2='1' y1='0' y2='0'>
          <stop offset='50%' stopColor='currentColor' />
          <stop offset='50%' stopColor='transparent' />
        </linearGradient>
      </defs>
      <path
        fill='url(#halfGrad)'
        stroke='currentColor'
        d='M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z'
      />
    </svg>
  );

  const EmptyStar = (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${box} ${box}`}
      aria-hidden='true'
      className={starCls}
    >
      <path
        fill='none'
        stroke='currentColor'
        d='M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z'
      />
    </svg>
  );

  return (
    <span className={cn('text-accent', className)} aria-hidden='true'>
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f-${i}`}>{FullStar}</span>
      ))}
      {half && <span key='h'>{HalfStar}</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e-${i}`}>{EmptyStar}</span>
      ))}
    </span>
  );
}
