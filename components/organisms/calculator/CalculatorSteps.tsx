'use client';

import ProgressBar from '../../molecules/ProgressBar';
import CalcOptionCard from '../CalcOptionCard';
import InputWithLabel from '../../molecules/InputWithLabel';
import Button from '../../atoms/buttons/Button';
import type { Step } from '@/types/calculator';

import type { Selections } from '@/types/ui';
export type { Selections } from '@/types/ui';

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

export default function CalculatorSteps({
  step,
  currentStep,
  activeSteps,
  selections,
  error,
  disableNext,
  onOptionClick,
  onInputChange,
  onPrev,
  onNext,
}: CalculatorStepsProps) {
  const sel = selections[currentStep] || [];
  const hasSelection = sel.length > 0;

  let rawVal = '';
  if (step.input) {
    const rawSel = selections[currentStep]?.find(v => v.startsWith(`${step.input!.key}:`)) || '';
    rawVal = rawSel ? rawSel.split(':')[1] : '';
  }

  return (
    <>
      {currentStep > 0 && <ProgressBar currentStep={currentStep} totalSteps={activeSteps.length} />}

      <h3>{step.title.replace(/^BRANCH:\s*/, '')}</h3>
      {step.tooltip && <p className='text-light'>{step.tooltip}</p>}
      {error && <p className='text-error-mid mt-2'>{error}</p>}

      <div className='mt-8 grid gap-2 md:grid-cols-2'>
        {step.options.map(opt => {
          const isSelected = sel.includes(opt.value);
          return (
            <CalcOptionCard
              key={opt.value}
              optValue={opt.value}
              label={opt.label}
              tooltip={opt.tooltip}
              selected={isSelected}
              onClick={() => onOptionClick(opt.value)}
              icon={opt.icon}
            />
          );
        })}

        {step.input && (
          <InputWithLabel
            type='number'
            min={0}
            label={step.input.label}
            value={rawVal}
            onChange={onInputChange}
            placeholder='Wpisz ilość'
            wrapperClassName={`calc-input-container ${rawVal ? 'calc-input-container-filled' : 'calc-input-container-empty'}`}
            className='calc-input-field'
          />
        )}
      </div>

      {(currentStep > 0 || hasSelection) && (
        <div className='mt-8 flex gap-6'>
          {currentStep > 0 && <Button onClick={onPrev}>Wstecz</Button>}
          <Button variant='accent' disabled={disableNext} onClick={onNext}>
            {currentStep === activeSteps.length - 1 ? 'Pokaż wycenę' : 'Dalej'}
          </Button>
        </div>
      )}
    </>
  );
}
