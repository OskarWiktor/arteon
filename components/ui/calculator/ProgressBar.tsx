interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percent = Math.round(((currentStep + 1) / totalSteps) * 100);

  return (
    <div className="relative m-auto mb-12 h-[2px] w-full bg-gray-200">
      <div className="h-full bg-slate-800 transition-all" style={{ width: `${percent}%` }} />
      <span className="text-light absolute top-[-1.5rem] text-xs">
        Krok {currentStep + 1}/{totalSteps}
      </span>
    </div>
  );
}
