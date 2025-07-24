interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percent = Math.round(((currentStep + 1) / totalSteps) * 100);

  return (
    <div className="relative m-auto mb-12 h-[2px] w-full bg-gray-200">
      <div className="h-full bg-amber-500 transition-all" style={{ width: `${percent}%` }} />
      <span className="absolute top-[-1.5rem] text-xs text-gray-600">
        Krok {currentStep + 1}/{totalSteps}
      </span>
    </div>
  );
}
