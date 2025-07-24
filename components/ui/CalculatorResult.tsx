// ResultView.tsx
'use client';

import React from 'react';
import { includedPerPath } from '@/data/calculator/includedPerPath';

interface CalculatorResultProps {
  totalPrice: number;
  onReset: () => void;
  pathKey?: keyof typeof includedPerPath;
}

export default function CalculatorResult({ totalPrice, onReset, pathKey }: CalculatorResultProps) {
  return (
    <div className="space-y-4 text-center">
      <h3 className="text-xl">Szacunkowy koszt</h3>
      <p className="text-2xl font-bold">{`od ${Math.round(totalPrice * 0.8)} do ${Math.round(totalPrice * 1.2)} zł brutto`}</p>
      
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

      <button onClick={onReset} className="mt-4 text-gray-500 underline">
        Zacznij od nowa
      </button>
    </div>
  );
}
