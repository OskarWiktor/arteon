'use client';

import type { ReactNode } from 'react';

interface NewsTickerItem {
  text: string;
  icon?: ReactNode;
}

interface SectionNewsTickerProps {
  items: (string | NewsTickerItem)[];
  speed?: number;
}

export default function SectionNewsTicker({ items, speed = 30 }: SectionNewsTickerProps) {
  const normalizedItems = items.map((item) =>
    typeof item === 'string' ? { text: item, icon: undefined } : item
  );
  const duplicatedItems = [...normalizedItems, ...normalizedItems];

  return (
    <section data-section="news-ticker" className="overflow-hidden bg-slate-800 py-3">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span key={index} className="mx-8 flex items-center gap-2 text-sm font-medium text-white">
            {item.icon && <span className="text-white">{item.icon}</span>}
            {item.text}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
