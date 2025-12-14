'use client';

import { includedPerPath } from '@/data/pl/calculator/includedPerPath';
import Button from '../buttons/Button';
import Heading from '../typography/Heading';
import Text from '../typography/Text';

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
      <Heading as="h3" className="inline border-b-2 border-b-slate-400">
        {title}
      </Heading>
      
      <div className="pt-8">
        <Text as="p" variant="body" className="text-2xl font-medium">
          {`${from} ${Math.round(totalPrice * 0.8)} ${to} ${Math.round(totalPrice * 1.2)} ${currency}`}
        </Text>
      </div>
      
      <Text variant="xs" tone="muted" as="span">
        {disclaimer}
      </Text>

      {pathKey && (
        <div className="mt-6">
          <Heading as="h4" className="mb-2">
            {inPrice}
          </Heading>
          <ul className="list-disc pl-6">
            {includedPerPath[pathKey].map((item, i) => (
              <li key={i}>
                <Text variant="body" as="span">
                  {item}
                </Text>
              </li>
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
