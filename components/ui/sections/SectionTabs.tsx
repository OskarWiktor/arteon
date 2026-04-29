'use client';

import { useId, useState, type ReactNode } from 'react';

interface Tab {
  title: string;
  icon: ReactNode;
  content: ReactNode;
}

interface SectionTabsProps {
  title?: string;
  tabs: Tab[];
}

export default function SectionTabs({ title, tabs }: SectionTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const autoId = useId();
  const headingId = `tabs-title-${autoId}`;

  return (
    <section data-section="tabs" aria-labelledby={title ? headingId : undefined}>
      {title && (
        <h2 id={headingId} className="h3 mb-4 lg:mb-6">
          {title}
        </h2>
      )}

      <div className="space-y-4">
        <div className="bg-primary-light flex gap-2 rounded-lg p-1.5" role="tablist">
          {tabs.map((tab, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${autoId}-${index}`}
              id={`tab-${autoId}-${index}`}
              onClick={() => setActiveTab(index)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium transition ${
                activeTab === index ? 'text-primary bg-white shadow-sm' : 'text-primary-mid hover:text-primary'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.title}</span>
            </button>
          ))}
        </div>

        <div id={`tabpanel-${autoId}-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${autoId}-${activeTab}`} className="rounded-lg border border-black/10 bg-white p-6">
          <h3 className="h5 mb-3 flex items-center gap-2">
            {tabs[activeTab].icon}
            {tabs[activeTab].title}
          </h3>
          <div className="text-light">{tabs[activeTab].content}</div>
        </div>
      </div>
    </section>
  );
}
