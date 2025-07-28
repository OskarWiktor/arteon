'use client';

import React, { KeyboardEvent } from 'react';
import * as FiIcons from 'react-icons/fi';

interface OptionButtonProps {
  optValue: string;
  label: string;
  tooltip?: string;
  selected: boolean;
  onClick: () => void;
  icon?: string;
}

export default function OptionButton({ optValue, label, tooltip, selected, onClick, icon }: OptionButtonProps) {
  const handleKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  const IconComponent = icon ? (FiIcons as any)[icon] : null;

  return (
    <button
      key={optValue}
      onClick={onClick}
      onKeyDown={handleKey}
      tabIndex={0}
      className={`relative flex items-start gap-3 rounded border p-4 text-left transition hover:cursor-pointer ${
        selected ? 'border-amber-400 bg-amber-50' : 'border-gray-100 hover:border-amber-300 hover:shadow-lg'
      }`}
    >
      {IconComponent && <IconComponent className="mt-1 text-2xl text-amber-500" />}
      <div>
        <h6 className="text-base font-medium">{label}</h6>
        {tooltip && <span className="block text-gray-800">{tooltip}</span>}
      </div>
    </button>
  );
}
