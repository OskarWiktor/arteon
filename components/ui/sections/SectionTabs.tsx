'use client';

import { useState, type ReactNode } from 'react';
import Wrapper from '../Wrapper';

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

  return (
    <section data-section="tabs" aria-labelledby={title ? 'tabs-title' : undefined}>
      <Wrapper>
        {title && (
          <h2 id="tabs-title" className="h4 reveal-animation mb-6">
            {title}
          </h2>
        )}

        <div className="space-y-4">
          <div className="flex gap-2 rounded-xl bg-slate-100 p-1.5" role="tablist">
            {tabs.map((tab, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`tabpanel-${index}`}
                id={`tab-${index}`}
                onClick={() => setActiveTab(index)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  activeTab === index ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.title}</span>
              </button>
            ))}
          </div>

          <div id={`tabpanel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`} className="rounded-2xl border border-black/10 bg-white p-6">
            <h3 className="h5 mb-3 flex items-center gap-2">
              {tabs[activeTab].icon}
              {tabs[activeTab].title}
            </h3>
            <div className="text-light">{tabs[activeTab].content}</div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
