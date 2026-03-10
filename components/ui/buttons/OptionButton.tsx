'use client';

import { type KeyboardEvent } from 'react';
import { CALC_ICONS } from '@/components/ui/icons/CalcIcons';

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

  const IconComponent = icon && icon in CALC_ICONS ? CALC_ICONS[icon] : null;

  return (
    <button key={optValue} onClick={onClick} onKeyDown={handleKey} tabIndex={0} className={`calc-option-button ${selected ? 'calc-option-button-selected' : 'calc-option-button-unselected'}`}>
      {IconComponent && <IconComponent className="text-primary mt-1 text-2xl" />}
      <div>
        <h6 className="font-medium">{label}</h6>
        {tooltip && <span className="text-dark block">{tooltip}</span>}
      </div>
    </button>
  );
}
