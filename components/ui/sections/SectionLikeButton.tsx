'use client';

import { useState } from 'react';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';

interface SectionLikeButtonProps {
  initialCount?: number;
  liked?: boolean;
  onChange?: (liked: boolean, count: number) => void;
}

export default function SectionLikeButton({ initialCount = 0, liked: initialLiked = false, onChange }: SectionLikeButtonProps) {
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialCount);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    const newLiked = !liked;
    const newCount = newLiked ? count + 1 : count - 1;

    setLiked(newLiked);
    setCount(newCount);

    if (newLiked) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }

    onChange?.(newLiked, newCount);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group flex items-center gap-2 rounded-full px-4 py-2 transition ${liked ? 'bg-error-bg text-error-icon' : 'bg-primary-light text-primary-mid hover:bg-primary-light'}`}
      aria-label={liked ? 'Usuń polubienie' : 'Polub'}
      aria-pressed={liked}
    >
      <span className={`transition-transform ${isAnimating ? 'scale-125' : 'scale-100'}`}>{liked ? <RiHeartFill className="h-5 w-5" /> : <RiHeartLine className="h-5 w-5" />}</span>
      <span className="text-sm font-medium">{count}</span>
    </button>
  );
}
