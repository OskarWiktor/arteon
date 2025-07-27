'use client';

import React from 'react';
import type { Step } from '@/types/calculator';

interface OptionInputProps {
  input: Step['input'];
  value: string;
  onChangeValue: (val: string) => void;
}

export default function OptionInput({ input, value, onChangeValue }: OptionInputProps) {
  return (
    <div className={`relative rounded border px-4 py-2 transition ${value ? 'border-amber-400' : 'border-gray-100 hover:border-amber-300'}`}>
      <h6 className="mb-2 block font-semibold">{input.label}</h6>
      <input
        type="number"
        min="0"
        placeholder="Wpisz ilość"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        className="w-full border-b border-gray-300 bg-transparent px-2 py-1.5 text-gray-700 transition focus:outline-none"
      />
    </div>
  );
}
