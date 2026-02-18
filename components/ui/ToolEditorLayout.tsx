import type { ReactNode } from 'react';

import AdSense from '@/components/ui/AdSense';

interface ToolEditorLayoutProps {
  children: ReactNode;
}

export default function ToolEditorLayout({ children }: ToolEditorLayoutProps) {
  return (
    <div
      className={[
        'mx-auto w-[94%] max-w-[1420px]',
        'xl:grid xl:w-full xl:max-w-none xl:grid-cols-[1fr_160px_minmax(0,1420px)_1fr] xl:gap-x-4',
        'min-[1600px]:grid-cols-[1fr_160px_minmax(0,1420px)_160px_1fr]',
      ].join(' ')}
    >
      <div className="hidden min-[1600px]:col-start-4 min-[1600px]:block">
        <div className="sticky top-4">
          <AdSense variant="vertical" />
        </div>
      </div>

      <div className="xl:col-start-3">{children}</div>

      <div className="hidden xl:col-start-2 xl:block">
        <div className="sticky top-4">
          <AdSense variant="vertical" />
        </div>
      </div>
    </div>
  );
}
