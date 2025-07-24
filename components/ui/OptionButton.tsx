// OptionButton.tsx
'use client';

import React, { KeyboardEvent } from 'react';

interface OptionButtonProps {
  optValue: string;
  label: string;
  tooltip?: string;
  selected: boolean;
  onClick: () => void;
}

export default function OptionButton({ optValue, label, tooltip, selected, onClick }: OptionButtonProps) {
  const handleKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <button
      key={optValue}
      onClick={onClick}
      onKeyDown={handleKey}
      tabIndex={0}
      className={`relative rounded border p-4 text-left transition hover:cursor-pointer ${selected ? 'border-amber-400' : 'border-gray-100 hover:border-amber-300'}`}
    >
      <div className="flex justify-between">
        <h6>{label}</h6>
      </div>
      {tooltip && <span className="block text-gray-800">{tooltip}</span>}
    </button>
  );
}
