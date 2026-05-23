'use client';

import { includedPerPath } from '@/data/pl/calculator/includedPerPath';
import Button from '../../atoms/buttons/Button';

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

export default function CalculatorResult({
  totalPrice,
  onReset,
  pathKey,
  title,
  disclaimer,
  inPrice,
  startAgain,
  from,
  to,
  currency,
}: CalculatorResultProps) {
  return (
    <div className='space-y-4'>
      <h3 className='border-b-primary-mid inline border-b-2'>{title}</h3>

      <div className='pt-8'>
        <p className='text-dark text-2xl font-medium'>{`${from} ${Math.round(totalPrice * 0.8)} ${to} ${Math.round(totalPrice * 1.2)} ${currency}`}</p>
      </div>

      <span className='text-light text-xs'>{disclaimer}</span>

      {pathKey && (
        <div className='mt-6'>
          <h4 className='mb-2'>{inPrice}</h4>
          <ul className='list-disc pl-6'>
            {includedPerPath[pathKey].map((item, i) => (
              <li key={i}>
                <span className='text-dark text-base'>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className='mt-8'>
        <Button onClick={onReset}>{startAgain}</Button>
      </div>
    </div>
  );
}
