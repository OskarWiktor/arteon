'use client';

import type { ReactNode } from 'react';

import AdSense from '@/components/ui/AdSense';
import useMediaQuery from '@/hooks/useMediaQuery';

interface ToolEditorLayoutProps {
  children: ReactNode;
}

export default function ToolEditorLayout({ children }: ToolEditorLayoutProps) {
  const showBothSideAds = useMediaQuery('(min-width: 1600px)');
  const showLeftSideAd = useMediaQuery('(min-width: 1280px)');

  if (showBothSideAds) {
    return (
      <div className="grid w-full grid-cols-[1fr_160px_minmax(0,1420px)_160px_1fr] gap-x-4">
        <div className="col-start-2">
          <AdSense variant="vertical" />
        </div>
        <div className="col-start-3">{children}</div>
        <div className="col-start-4">
          <AdSense variant="autorelaxed" />
        </div>
      </div>
    );
  }

  if (showLeftSideAd) {
    return (
      <div className="grid w-full grid-cols-[1fr_160px_minmax(0,1420px)_1fr] gap-x-4">
        <div className="col-start-2">
          <AdSense variant="vertical" />
        </div>
        <div className="col-start-3">{children}</div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-[94%] max-w-[1420px]">
      <AdSense variant="vertical" className="mb-3" />
      {children}
      <AdSense variant="autorelaxed" className="mt-3" />
    </div>
  );
}
