'use client';

import React from 'react';
import ProgressBar from './ProgressBar';
import OptionButton from './OptionButton';
import OptionInput from './OptionInput';
import Button from '../ui/Button';
import type { Step } from '@/types/calculator';

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

      <h3 className="text-xl">{step.title.replace(/^BRANCH:\s*/, '')}</h3>
      {step.tooltip && <p className="text-gray-600">{step.tooltip}</p>}
      {error && <p className="mt-2 text-red-600">{error}</p>}

      <div className="mt-8 grid gap-2 md:grid-cols-2">
        {step.options.map((opt) => {
          const isSelected = sel.includes(opt.value);
          return <OptionButton key={opt.value} optValue={opt.value} label={opt.label} tooltip={opt.tooltip} selected={isSelected} onClick={() => onOptionClick(opt.value)} icon={opt.icon} />;
        })}

        {step.input && <OptionInput input={step.input} value={rawVal} onChangeValue={onInputChange} />}
      </div>

      {(currentStep > 0 || hasSelection) && (
        <div className="mt-8 flex gap-6">
          {currentStep > 0 && (
            <Button onClick={onPrev} variant="minimal">
              Wstecz
            </Button>
          )}
          <Button variant="accent" disabled={disableNext} onClick={onNext}>
            {currentStep === activeSteps.length - 1 ? 'Pokaż wycenę' : 'Dalej'}
          </Button>
        </div>
      )}
    </>
  );
}
