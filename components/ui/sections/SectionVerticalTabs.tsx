'use client';

import { useState, type ReactNode } from 'react';
import Wrapper from '../Wrapper';

interface VerticalTab {
  label: string;
  icon: ReactNode;
  content: ReactNode;
}

interface SectionVerticalTabsProps {
  title?: string;
  tabs: VerticalTab[];
}

export default function SectionVerticalTabs({ title, tabs }: SectionVerticalTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section data-section="vertical-tabs" aria-labelledby={title ? 'vtabs-title' : undefined}>
      <Wrapper>
        {title && (
          <h3 id="vtabs-title" className="h5 mb-6 reveal-animation">
            {title}
          </h3>
        )}

        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <nav className="grid grid-cols-2 gap-2 md:flex md:w-48 md:flex-shrink-0 md:flex-col" role="tablist">
            {tabs.map((tab, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`vtabpanel-${index}`}
                id={`vtab-${index}`}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-center text-sm font-medium transition md:justify-start md:text-left ${
                  activeTab === index
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {tab.icon}
                <span className="line-clamp-1">{tab.label}</span>
              </button>
            ))}
          </nav>

          <div
            id={`vtabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`vtab-${activeTab}`}
            className="flex-1 rounded-2xl border border-black/10 bg-white p-6"
          >
            {tabs[activeTab].content}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
