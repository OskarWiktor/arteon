'use client';

import ProgressBar from './ProgressBar';
import OptionButton from '../buttons/OptionButton';
import OptionInput from './OptionInput';
import Button from '../buttons/Button';
import type { Step } from '@/types/calculator';

const ui = {
  pl: {
    back: 'Wstecz',
    next: 'Dalej',
    showEstimate: 'Pokaż wycenę',
  },
} as const;

export type Selections = Record<number, string[]>;

interface CalculatorStepsProps {
  step: Step;
  currentStep: number;
  activeSteps: Step[];
  selections: Selections;
  error: string | null;
  disableNext: boolean;
  onOptionClick: (optValue: string) => void;
  onInputChange: (val: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function CalculatorSteps({ step, currentStep, activeSteps, selections, error, disableNext, onOptionClick, onInputChange, onPrev, onNext }: CalculatorStepsProps) {
  const sel = selections[currentStep] || [];
  const hasSelection = sel.length > 0;

  let rawVal = '';
  if (step.input) {
    const rawSel = selections[currentStep]?.find((v) => v.startsWith(`${step.input!.key}:`)) || '';
    rawVal = rawSel ? rawSel.split(':')[1] : '';
  }

  return (
    <>
      {currentStep > 0 && <ProgressBar currentStep={currentStep} totalSteps={activeSteps.length} />}

      <h3>{step.title.replace(/^BRANCH:\s*/, '')}</h3>
      {step.tooltip && <p className="text-light">{step.tooltip}</p>}
      {error && <p className="mt-2 text-error-mid">{error}</p>}

      <div className="mt-8 grid gap-2 md:grid-cols-2">
        {step.options.map((opt) => {
          const isSelected = sel.includes(opt.value);
          return <OptionButton key={opt.value} optValue={opt.value} label={opt.label} tooltip={opt.tooltip} selected={isSelected} onClick={() => onOptionClick(opt.value)} icon={opt.icon} />;
        })}

        {step.input && <OptionInput input={step.input} value={rawVal} onChangeValue={onInputChange} />}
      </div>

      {(currentStep > 0 || hasSelection) && (
        <div className="mt-8 flex gap-6">
          {currentStep > 0 && <Button onClick={onPrev}>{ui.pl.back}</Button>}
          <Button variant="accent" disabled={disableNext} onClick={onNext}>
            {currentStep === activeSteps.length - 1 ? ui.pl.showEstimate : ui.pl.next}
          </Button>
        </div>
      )}
    </>
  );
}
