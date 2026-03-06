'use client';

import { useCallback, useState } from 'react';

import Button from '@/components/ui/buttons/Button';
import FormatSelector from '@/components/sections/tools/FormatPicker/FormatSelector';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import ToolFileDropzone from '@/components/ui/tools/ToolFileDropzone';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolUploadContent from '@/components/ui/tools/ToolUploadContent';
import { useDictionary } from '@/lib/LocaleContext';
import { downloadBlob } from '@/utils/download';

import type { Base64ConverterProps } from './types';

export default function Base64Converter({ mode }: Base64ConverterProps) {
  const { imageConverter: t } = useDictionary();
  const [base64, setBase64] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // ENCODE: image file → Base64 string
  const handleAddFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;
      setError(null);
      const file = fileList[0];

      if (!file.type.startsWith('image/')) {
        setError(t.onlyImageFiles);
        return;
      }

      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        setBase64(dataUrl);
        setPreviewUrl(dataUrl);
      };
      reader.onerror = () => setError(t.fileReadError);
      reader.readAsDataURL(file);
    },
    [t],
  );

  // DECODE: Base64 string → image preview
  const handleDecode = useCallback(() => {
    if (!base64.trim()) {
      setError(t.base64PasteEmpty);
      return;
    }
    setError(null);

    let dataUrl = base64.trim();
    // Add data URL prefix if missing
    if (!dataUrl.startsWith('data:')) {
      let mime = 'image/png';
      try {
        const header = atob(dataUrl.slice(0, 24));
        if (header.startsWith('\xFF\xD8')) mime = 'image/jpeg';
        else if (header.startsWith('\x89PNG')) mime = 'image/png';
        else if (header.startsWith('GIF')) mime = 'image/gif';
        else if (header.startsWith('RIFF') && header.includes('WEBP')) mime = 'image/webp';
        else if (header.startsWith('<svg') || header.startsWith('<?xml')) mime = 'image/svg+xml';
        else if (header.includes('ftypavif')) mime = 'image/avif';
        else if (header.startsWith('II') || header.startsWith('MM')) mime = 'image/tiff';
      } catch {
        setError(t.base64Invalid);
        setPreviewUrl(null);
        return;
      }
      dataUrl = `data:${mime};base64,${dataUrl}`;
    }

    // Validate it's actually a valid image
    const img = new Image();
    img.onload = () => {
      setPreviewUrl(dataUrl);
      setFileName(null);
    };
    img.onerror = () => {
      setError(t.base64Invalid);
      setPreviewUrl(null);
    };
    img.src = dataUrl;
  }, [base64, t]);

  const handleCopy = useCallback(async () => {
    if (!base64) return;
    try {
      await navigator.clipboard.writeText(base64);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = base64;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [base64]);

  const handleDownload = useCallback(() => {
    if (!previewUrl) return;
    // Extract mime from data URL
    const match = previewUrl.match(/^data:([^;]+);/);
    const mime = match?.[1] ?? 'image/png';
    const extMap: Record<string, string> = {
      'image/jpeg': '.jpg',
      'image/png': '.png',
      'image/webp': '.webp',
      'image/gif': '.gif',
      'image/svg+xml': '.svg',
      'image/bmp': '.bmp',
      'image/avif': '.avif',
      'image/tiff': '.tiff',
    };
    const ext = extMap[mime] ?? '.png';

    // Convert data URL to blob
    const byteString = atob(previewUrl.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
    const blob = new Blob([ab], { type: mime });
    downloadBlob(blob, `decoded-image${ext}`);
  }, [previewUrl]);

  const handleClear = useCallback(() => {
    setBase64('');
    setPreviewUrl(null);
    setFileName(null);
    setError(null);
    setCopied(false);
  }, []);

  if (mode === 'encode') {
    return (
      <div className="overflow-hidden">
        <FormatSelector currentSource="jpg" currentTarget="base64" hasFiles={!!base64} />
        <div className="grid gap-4 md:grid-cols-2">
          <ToolSection className="space-y-3">
            <h2 className="h6">{t.imageHeading}</h2>
            <ToolFileDropzone accept="image/*" onFiles={handleAddFiles} className="tool-upload-area">
              <ToolUploadContent dragLabel={t.dragImageHere} clickLabel={t.clickToSelect} formatsLabel="JPG, PNG, WebP, SVG, GIF, BMP" />
            </ToolFileDropzone>
            {fileName && (
              <p className="tool-meta">
                {t.fileLabel} <strong>{fileName}</strong>
              </p>
            )}
            {error && <ToolAlert variant="error">{error}</ToolAlert>}
            <Button onClick={handleClear} disabled={!base64} className="disabled:opacity-40" size="small">
              {t.clearAll}
            </Button>
          </ToolSection>

          <ToolSection className="space-y-3">
            <h2 className="h6">Base64</h2>
            <textarea
              className="tool-textarea min-h-[300px] w-full resize-y rounded-xl border border-neutral-200 bg-neutral-50 p-4 font-mono text-xs! transition outline-none focus:border-neutral-300 focus:bg-white"
              value={base64}
              readOnly
              placeholder={t.base64Placeholder}
              spellCheck={false}
            />
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleCopy} disabled={!base64} className="disabled:opacity-40" size="small">
                {copied ? t.copied : t.copy}
              </Button>
            </div>
          </ToolSection>
        </div>
      </div>
    );
  }

  // mode === 'decode'
  return (
    <div className="overflow-hidden">
      <FormatSelector currentSource="base64" currentTarget="jpg" hasFiles={!!base64} />
      <div className="grid gap-4 md:grid-cols-2">
        <ToolSection className="space-y-3">
          <h2 className="h6">Base64</h2>
          <textarea
            className="tool-textarea min-h-[300px] w-full resize-y rounded-xl border border-neutral-200 bg-neutral-50 p-4 font-mono text-xs! transition outline-none focus:border-neutral-300 focus:bg-white"
            value={base64}
            onChange={(e) => setBase64(e.target.value)}
            placeholder={t.base64PastePlaceholder}
            spellCheck={false}
          />
          {error && <ToolAlert variant="error">{error}</ToolAlert>}
          <div className="flex flex-wrap gap-3">
            <Button variant="accent" onClick={handleDecode} disabled={!base64.trim()} className="disabled:opacity-60" size="small">
              {t.decodeBtn}
            </Button>
            <Button onClick={handleClear} disabled={!base64} className="disabled:opacity-40" size="small">
              {t.clearAll}
            </Button>
          </div>
        </ToolSection>

        <ToolSection className="space-y-3">
          <h2 className="h6">{t.imagePreview}</h2>
          {previewUrl ? (
            <div className="space-y-3">
              <div className="flex items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={previewUrl} alt="Decoded image" className="max-h-[400px] max-w-full object-contain" />
              </div>
              <Button onClick={handleDownload} size="small">
                {t.download}
              </Button>
            </div>
          ) : (
            <div className="flex min-h-[300px] items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <p className="tool-meta">{t.base64DecodeHint}</p>
            </div>
          )}
        </ToolSection>
      </div>
    </div>
  );
}
