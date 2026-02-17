'use client';

import dynamic from 'next/dynamic';
import ToolEditorSkeleton from '@/components/ui/skeletons/ToolEditorSkeleton';

const TOOL_COMPONENTS: Record<string, ReturnType<typeof dynamic>> = {
  favicon: dynamic(() => import('./FaviconGenerator'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  qrCode: dynamic(() => import('./QrCodeGenerator'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  emailSignature: dynamic(() => import('./EmailSignatureGenerator'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  colorPalette: dynamic(() => import('./ColorPaletteGenerator'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  contrastChecker: dynamic(() => import('./WcagContrastChecker'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  wordCounter: dynamic(() => import('./WordCountTool'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  metaCounter: dynamic(() => import('./MetaTitleDescriptionTool'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  jpgToWebp: dynamic(() => import('./JpgPngToWebp'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  imageResize: dynamic(() => import('./ImageResizeTool'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  paletteExtractor: dynamic(() => import('./PaletteExtractor'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
};

export default function DynamicToolRenderer({ toolKey }: { toolKey: string }) {
  const Component = TOOL_COMPONENTS[toolKey];
  if (!Component) return null;
  return <Component />;
}
