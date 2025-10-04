'use client';

import type { Step } from '@/types/calculator';

interface OptionInputProps {
  input: Step['input'];
  value: string;
  onChangeValue: (val: string) => void;
}

export default function OptionInput({ input, value, onChangeValue }: OptionInputProps) {
  return (
    <div className={`relative rounded-xl border py-2 transition ${value ? 'border-slate-400' : 'border-gray-100 hover:border-slate-300'}`}>
      {input && <h6 className="mb-2 block">{input.label}</h6>}
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
