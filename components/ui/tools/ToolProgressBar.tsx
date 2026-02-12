interface ToolProgressBarProps {
  value: number;
  max?: number;
  colorClass?: string;
  ariaLabel?: string;
}

export default function ToolProgressBar({ value, max = 100, colorClass = 'bg-primary', ariaLabel }: ToolProgressBarProps) {
  const percent = max > 0 ? Math.min((value / max) * 100, 100) : 0;

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
      <div
        className={`h-full rounded-full transition-all duration-300 ${colorClass}`}
        style={{ width: `${percent}%` }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={ariaLabel}
      />
    </div>
  );
}
