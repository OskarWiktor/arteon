'use client';

import type { ReactNode } from 'react';

import AdSense from '@/components/ui/AdSense';

interface ToolEditorLayoutProps {
  children: ReactNode;
}

export default function ToolEditorLayout({ children }: ToolEditorLayoutProps) {
  return (
    <div className={['mx-auto w-[100%] max-w-[1420px]', 'xl:grid xl:w-full xl:max-w-none xl:grid-cols-[1fr_200px_minmax(0,1420px)_200px_1fr] xl:gap-x-4'].join(' ')}>
      <aside className="hidden xl:col-start-2 xl:block" aria-label="Reklama">
        <div className="sticky top-40 text-left">
          <AdSense variant="vertical" />
        </div>
      </aside>

      <div className="xl:col-start-3">{children}</div>

      <aside className="hidden xl:col-start-4 xl:block" aria-label="Reklama">
        <div className="sticky top-40 text-right">
          <AdSense variant="vertical" />
        </div>
      </aside>
    </div>
  );
}
