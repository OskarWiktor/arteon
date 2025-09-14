'use client';

import { includedPerPath } from '@/data/pl/calculator/includedPerPath';
import Button from '../Button';

interface CalculatorResultProps {
  title: string;
  disclaimer: string;
  inPrice: string;
  startAgain: string;
  from: string;
  to: string;
  currency: string;
  totalPrice: number;
  onReset: () => void;
  pathKey?: keyof typeof includedPerPath;
}

export default function CalculatorResult({ totalPrice, onReset, pathKey, title, disclaimer, inPrice, startAgain, from, to, currency }: CalculatorResultProps) {
  return (
    <div className="space-y-4">
      <h3 className="inline border-b-2 border-b-slate-400">{title}</h3>
      <p className="pt-8 text-2xl">{`${from} ${Math.round(totalPrice * 0.8)} ${to} ${Math.round(totalPrice * 1.2)} ${currency}`}</p>
      <span className="text-xs text-gray-700">{disclaimer}</span>

      {pathKey && (
        <div className="mt-6 text-left text-[#080808]">
          <h4 className="mb-2">{inPrice}</h4>
          <ul className="list-disc pl-6">
            {includedPerPath[pathKey].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8">
        <Button onClick={onReset} variant="glass">
          {startAgain}
        </Button>
      </div>
    </div>
  );
}
