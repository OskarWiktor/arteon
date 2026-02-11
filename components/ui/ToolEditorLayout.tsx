'use client';

import type { ReactNode } from 'react';

import AdSense from '@/components/ui/AdSense';
import useMediaQuery from '@/hooks/useMediaQuery';

interface ToolEditorLayoutProps {
  children: ReactNode;
}

export default function ToolEditorLayout({ children }: ToolEditorLayoutProps) {
  const showSideAds = useMediaQuery('(min-width: 1800px)');

  return (
    <div className={showSideAds ? 'grid w-full grid-cols-[1fr_160px_minmax(0,1420px)_160px_1fr] gap-x-4' : 'mx-auto w-[94%] max-w-[1420px]'}>
      {showSideAds && (
        <div className="col-start-2">
          <AdSense variant="vertical" />
        </div>
      )}

      <div className={showSideAds ? 'col-start-3' : ''}>{children}</div>

      {showSideAds && (
        <div className="col-start-4">
          <AdSense variant="autorelaxed" />
        </div>
      )}
    </div>
  );
}
