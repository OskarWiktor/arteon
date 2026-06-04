interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

/**
 * Render a horizontal progress bar with a filled indicator and a step label.
 *
 * The label displays the current step as `currentStep + 1` (1-based) and the filled portion width reflects the completion percentage.
 *
 * @param currentStep - Zero-based index of the currently active step
 * @param totalSteps - Total number of steps
 * @returns A JSX element that renders the progress bar and the "Krok X/Y" step label
 */
export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percent = Math.round(((currentStep + 1) / totalSteps) * 100);

  return (
    <div className='relative m-auto mb-12 h-[2px] w-full bg-neutral-200'>
      <div className='h-full bg-primary transition-all' style={{ width: `${percent}%` }} />
      <span className='absolute top-[-1.5rem] text-xs text-light'>
        Krok {currentStep + 1}/{totalSteps}
      </span>
    </div>
  );
}
