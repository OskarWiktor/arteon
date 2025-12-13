'use client';

import React, { type KeyboardEvent } from 'react';
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

  const IconComponent = icon && icon in FiIcons ? (FiIcons as Record<string, React.ComponentType<{ className?: string }>>)[icon] : null;

  return (
    <button key={optValue} onClick={onClick} onKeyDown={handleKey} tabIndex={0} className={`calc-option-button ${selected ? 'calc-option-button-selected' : 'calc-option-button-unselected'}`}>
      {IconComponent && <IconComponent className="mt-1 text-2xl text-slate-500" />}
      <div>
        <h6 className="font-medium">{label}</h6>
        {tooltip && <span className="block text-dark">{tooltip}</span>}
      </div>
    </button>
  );
}
