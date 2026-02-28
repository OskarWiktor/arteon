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
  pngToJpg: dynamic(() => import('./converters/PngToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  jpgToPng: dynamic(() => import('./converters/JpgToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  webpToJpg: dynamic(() => import('./converters/WebpToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  webpToPng: dynamic(() => import('./converters/WebpToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  svgToPng: dynamic(() => import('./converters/SvgToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  svgToJpg: dynamic(() => import('./converters/SvgToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  bmpToJpg: dynamic(() => import('./converters/BmpToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  bmpToPng: dynamic(() => import('./converters/BmpToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  gifToPng: dynamic(() => import('./converters/GifToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  gifToJpg: dynamic(() => import('./converters/GifToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  jpgToWebpSimple: dynamic(() => import('./converters/JpgToWebpSimple'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  pngToWebpSimple: dynamic(() => import('./converters/PngToWebpSimple'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
};

export default function DynamicToolRenderer({ toolKey }: { toolKey: string }) {
  // Map toolKey with hyphens to camelCase component keys
  const mappedKey = toolKey === 'e-mailSignature' ? 'emailSignature' : toolKey;

  const Component = TOOL_COMPONENTS[mappedKey];
  if (!Component) {
    return null;
  }
  return <Component />;
}
