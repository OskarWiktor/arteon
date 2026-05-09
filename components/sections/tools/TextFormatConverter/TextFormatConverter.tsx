'use client';

import { useRef, useState } from 'react';

import Button from '@/components/ui/buttons/Button';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import ToolSection from '@/components/ui/tools/ToolSection';
import { useDictionary } from '@/lib/LocaleContext';

import { FormatSelector, type UniversalFormat } from '@/components/sections/tools/FormatPicker';

import { convertText } from './convert';
import type { TextFormatConverterProps } from './types';

const LABEL_TO_FORMAT: Record<string, UniversalFormat> = {
  CSV: 'csv',
  JSON: 'json',
  XML: 'xml',
  YAML: 'yaml',
  Markdown: 'markdown',
  HTML: 'html',
};

export default function TextFormatConverter({ conversionType, sourceLabel, targetLabel, sourcePlaceholder }: TextFormatConverterProps) {
  const { imageConverter: t } = useDictionary();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleConvert = async () => {
    if (!input.trim()) {
      setError(t.pasteOrTypeData.replace('{{format}}', sourceLabel));
      return;
    }
    setError(null);
    setIsConverting(true);
    try {
      const result = await convertText(input, conversionType);
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.conversionFailed);
      setOutput('');
    }
    setIsConverting(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (ev) => {
        const text = ev.target?.result;
        if (typeof text === 'string') {
          setInput(text);
          setError(null);
        }
      };
      reader.onerror = () => {
        setError(t.fileReadError);
      };
      reader.readAsText(file);
      if (fileInputRef.current) fileInputRef.current.value = '';
    };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = output;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (!output) return;
    const extMap: Record<string, string> = {
      csvToJson: '.json',
      jsonToCsv: '.csv',
      xmlToJson: '.json',
      jsonToXml: '.xml',
      yamlToJson: '.json',
      jsonToYaml: '.yaml',
      markdownToHtml: '.html',
      htmlToMarkdown: '.md',
    };
    const ext = extMap[conversionType] ?? '.txt';
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `converted${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError(null);
    setCopied(false);
    setFileName(null);
  };

  const acceptMap: Record<string, string> = {
    csvToJson: '.csv',
    jsonToCsv: '.json',
    xmlToJson: '.xml',
    jsonToXml: '.json',
    yamlToJson: '.yaml,.yml',
    jsonToYaml: '.json',
    markdownToHtml: '.md,.markdown',
    htmlToMarkdown: '.html,.htm',
  };
  const acceptExt = acceptMap[conversionType] ?? '';

  return (
    <div className="overflow-hidden">
      <FormatSelector currentSource={LABEL_TO_FORMAT[sourceLabel] ?? 'csv'} currentTarget={LABEL_TO_FORMAT[targetLabel] ?? 'json'} hasFiles={!!input.trim()} />

      <div className="grid gap-4 md:grid-cols-2">
        <ToolSection className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="h6">{sourceLabel}</h2>
            <label className="text-primary-mid hover:text-primary cursor-pointer text-xs font-medium transition-colors">
              <input ref={fileInputRef} type="file" accept={acceptExt} onChange={handleFileUpload} className="hidden" />
              {fileName ? fileName : t.uploadFile.replace('{{format}}', sourceLabel)}
            </label>
          </div>
          <textarea
            className="tool-textarea min-h-[300px] w-full resize-y rounded-lg border border-neutral-200 bg-neutral-50 p-4 font-mono text-sm! transition outline-none focus:border-neutral-300 focus:bg-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={sourcePlaceholder ?? t.pasteOrTypeData.replace('{{format}}', sourceLabel)}
            spellCheck={false}
          />
          {error && <ToolAlert variant="error">{error}</ToolAlert>}
          <div className="flex flex-wrap gap-3">
            <Button variant="accent" onClick={handleConvert} disabled={isConverting || !input.trim()} className="disabled:opacity-60" size="small">
              {isConverting ? t.converting : t.convert}
            </Button>
            <Button onClick={handleClear} disabled={!input && !output} className="disabled:opacity-40" size="small">
              {t.clearAll}
            </Button>
          </div>
        </ToolSection>

        <ToolSection className="space-y-3">
          <h2 className="h6">{targetLabel}</h2>
          <textarea
            className="tool-textarea min-h-[300px] w-full resize-y rounded-lg border border-neutral-200 bg-neutral-50 p-4 font-mono text-sm! transition outline-none focus:border-neutral-300 focus:bg-white"
            value={output}
            readOnly
            placeholder={t.conversionResult.replace('{{format}}', targetLabel)}
            spellCheck={false}
          />
          <div className="flex flex-wrap gap-3">
            <Button onClick={handleCopy} disabled={!output} className="disabled:opacity-40" size="small">
              {copied ? t.copied : t.copy}
            </Button>
            <Button onClick={handleDownload} disabled={!output} className="disabled:opacity-40" size="small">
              {t.download}
            </Button>
          </div>
        </ToolSection>
      </div>
    </div>
  );
}
