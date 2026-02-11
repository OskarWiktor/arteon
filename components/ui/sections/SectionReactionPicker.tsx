'use client';

import { useState } from 'react';

interface Reaction {
  emoji: string;
  label: string;
}

interface SectionReactionPickerProps {
  reactions: Reaction[];
  selected?: string;
  onChange?: (emoji: string) => void;
}

export default function SectionReactionPicker({ reactions, selected: initialSelected, onChange }: SectionReactionPickerProps) {
  const [selected, setSelected] = useState<string | undefined>(initialSelected);

  const handleSelect = (emoji: string) => {
    const newSelected = selected === emoji ? undefined : emoji;
    setSelected(newSelected);
    onChange?.(newSelected || '');
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2 rounded-xl bg-white p-2 shadow-lg" role="group" aria-label="Wybierz reakcję">
        {reactions.map((reaction) => {
          const isSelected = selected === reaction.emoji;

          return (
            <button
              key={reaction.emoji}
              type="button"
              onClick={() => handleSelect(reaction.emoji)}
              className={`rounded-lg p-2 text-2xl transition hover:scale-110 hover:bg-primary-light ${isSelected ? 'scale-110 bg-primary-light' : ''}`}
              aria-label={reaction.label}
              aria-pressed={isSelected}
            >
              {reaction.emoji}
            </button>
          );
        })}
      </div>
      <p className="text-light text-sm">{selected ? `Twoja reakcja: ${selected}` : 'Wybierz reakcję'}</p>
    </div>
  );
}
