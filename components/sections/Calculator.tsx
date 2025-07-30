'use client';

import { useState, useEffect, useCallback } from 'react';
import Wrapper from '../ui/Wrapper';
import CalculatorSteps, { Selections } from '../ui/calculator/CalculatorSteps';
import CalculatorResult from '../ui/calculator/CalculatorResult';

import type { Step } from '@/types/calculator';
import { baseSteps, getStepsByType } from '@/data/pl/calculator';

export default function Calculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Selections>({});
  const [activeSteps, setActiveSteps] = useState<Step[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setActiveSteps(baseSteps);
  }, []);

  const step = activeSteps[currentStep];
  const sel = selections[currentStep] || [];
  const hasSelection = sel.length > 0;
  const disableNext = Boolean(step?.required && !hasSelection && currentStep < activeSteps.length - 1);

  useEffect(() => {
    if (!step) return;
    const branches: Step[] = [];
    (selections[currentStep] || []).forEach((val) => {
      const opt = step.options.find((o) => o.value === val);
      if (opt?.branches)
        branches.push(
          ...opt.branches.map((b) => ({
            ...b,
            metaBranchParent: `${step.title}-${val}`,
          })),
        );
      if (step.branches?.[val])
        branches.push(
          ...step.branches[val].map((b) => ({
            ...b,
            metaBranchParent: `${step.title}-${val}`,
          })),
        );
    });
    const filtered = activeSteps.filter((_, idx) => idx <= currentStep || !activeSteps[idx].metaBranchParent?.startsWith(step.title));
    if (branches.length) {
      filtered.splice(
        currentStep + 1,
        0,
        ...branches.map((b) => ({
          ...b,
          title: `BRANCH: ${b.title}`,
        })),
      );
    }
    setActiveSteps(filtered);
  }, [selections, currentStep]);

  const parseInputValue = useCallback((val: string, key: string): number | null => {
    if (!val.startsWith(`${key}:`)) return null;
    const num = parseInt(val.split(':')[1], 10);
    return isNaN(num) ? 0 : num;
  }, []);

  const calculateEstimate = useCallback(() => {
    let nonProductTotal = 0,
      nonProductMultiplier = 1,
      productTotal = 0,
      variantMultiplier = 1;

    activeSteps.forEach((st, idx) => {
      (selections[idx] || []).forEach((val) => {
        if (st.input) {
          const qty = parseInputValue(val, st.input.key);
          if (qty !== null) {
            if (st.input.key === 'custom-product-amount') productTotal += qty * st.input.unitPrice;
            else nonProductTotal += qty * st.input.unitPrice;
            return;
          }
        }
        const opt = st.options.find((o) => o.value === val);
        if (!opt) return;
        if (st.input?.key === 'custom-product-amount' && opt.price) productTotal += opt.price;
        else if (st.title.toLowerCase().includes('warianty produktów') && opt.multiplier) variantMultiplier *= opt.multiplier;
        else {
          if (opt.price) nonProductTotal += opt.price;
          if (opt.multiplier) nonProductMultiplier *= opt.multiplier;
        }
      });
    });

    setTotalPrice(nonProductTotal * nonProductMultiplier + productTotal * variantMultiplier);
    setShowResult(true);
  }, [activeSteps, selections, parseInputValue]);

  const handleOptionClick = (optValue: string) => {
    setError(null);
    const prev = selections[currentStep] || [];
    const next = step?.type === 'multi' ? (prev.includes(optValue) ? prev.filter((v) => v !== optValue) : [...prev, optValue]) : [optValue];
    setSelections((s) => ({ ...s, [currentStep]: next }));
    if (currentStep === 0) {
      setActiveSteps(next[0] ? [baseSteps[0], ...getStepsByType(next[0])] : baseSteps);
    }
  };

  const handleInputChange = (val: string) => {
    setError(null);
    if (!step?.input) return;
    const key = step.input.key;
    const prev = selections[currentStep] || [];
    const filtered = prev.filter((v) => !v.startsWith(`${key}:`));
    setSelections((s) => ({
      ...s,
      [currentStep]: val === '' ? filtered : [...filtered, `${key}:${val}`],
    }));
  };

  const handlePrev = () => {
    setError(null);
    setCurrentStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step?.required && !hasSelection) {
      setError('Wybór jest wymagany.');
      return;
    }
    if (currentStep === 0) {
      setCurrentStep(1);
    } else if (currentStep === activeSteps.length - 1) {
      calculateEstimate();
    } else {
      setError(null);
      setCurrentStep((s) => s + 1);
    }
  };

  return (
    <Wrapper className="mt-12 px-4 md:mt-16 md:px-6 lg:mt-24 lg:px-0">
      {!showResult && step ? (
        <CalculatorSteps
          step={step}
          currentStep={currentStep}
          activeSteps={activeSteps}
          selections={selections}
          error={error}
          disableNext={disableNext}
          onOptionClick={handleOptionClick}
          onInputChange={handleInputChange}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      ) : (
        <CalculatorResult
          title="Szacunkowy koszt"
          disclaimer="* Końcowa wycena jest zależna od indywidualnych potrzeb"
          inPrice="Co jest w cenie:"
          totalPrice={totalPrice}
          startAgain="Zacznij od nowa"
          from="od"
          to="do"
          currency="zł brutto"
          onReset={() => {
            setCurrentStep(0);
            setSelections({});
            setTotalPrice(0);
            setShowResult(false);
          }}
        />
      )}
    </Wrapper>
  );
}
