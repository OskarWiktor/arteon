'use client';

import React from 'react';
import { includedPerPath } from '@/data/calculator/includedPerPath';
import Button from '../Button';

interface CalculatorResultProps {
  totalPrice: number;
  onReset: () => void;
  pathKey?: keyof typeof includedPerPath;
}

export default function CalculatorResult({ totalPrice, onReset, pathKey }: CalculatorResultProps) {
  return (
    <div className="space-y-4">
      <h3 className="inline border-b-2 border-b-amber-400 text-xl">Szacunkowy koszt</h3>
      <p className="pt-8 text-2xl">{`od ${Math.round(totalPrice * 0.8)} do ${Math.round(totalPrice * 1.2)} zł brutto*`}</p>
      <span className="text-xs text-gray-700">* Końcowa wycena jest zależna od indywidualnych potrzeb</span>

      {pathKey && (
        <div className="mt-6 text-left text-gray-700">
          <h4 className="mb-2 font-semibold">Co jest w cenie:</h4>
          <ul className="list-disc pl-6">
            {includedPerPath[pathKey].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8">
        <Button onClick={onReset} variant="minimal">
          Zacznij od nowa
        </Button>
      </div>
    </div>
  );
}
