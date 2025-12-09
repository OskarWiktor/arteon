'use client';

import type { Step } from '@/types/calculator';

interface OptionInputProps {
  input: Step['input'];
  value: string;
  onChangeValue: (val: string) => void;
}

export default function OptionInput({ input, value, onChangeValue }: OptionInputProps) {
  return (
    <div className={`calc-input-container ${value ? 'calc-input-container-filled' : 'calc-input-container-empty'}`}>
      {input && <h6 className="mb-2 block">{input.label}</h6>}
      <input type="number" min="0" placeholder="Wpisz ilość" value={value} onChange={(e) => onChangeValue(e.target.value)} className="calc-input-field" />
    </div>
  );
}
