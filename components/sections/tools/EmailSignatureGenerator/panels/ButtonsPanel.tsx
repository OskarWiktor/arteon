import type { SignatureConfig, StyleConfig, CtaRadiusOption } from '@/types/tools/email';
import PillButton from '@/components/ui/tools/PillButton';
import ToolTextInput from '@/components/ui/tools/ToolTextInput';

type Props = {
  config: SignatureConfig;
  styleConfig: StyleConfig;
  onTextChange: <K extends keyof SignatureConfig>(key: K, value: SignatureConfig[K]) => void;
  onStyleChange: <K extends keyof StyleConfig>(key: K, value: StyleConfig[K]) => void;
  t: {
    buttons: Record<string, string>;
  };
};

export default function ButtonsPanel({ config, styleConfig, onTextChange, onStyleChange, t }: Props) {
  return (
    <div className="space-y-4">
      <span className="tool-value">{t.buttons.title}</span>

      <div>
        <p className="tool-label mb-2">{t.buttons.cta1Title}</p>
        <div className="grid grid-cols-1 gap-3">
          <ToolTextInput label={t.buttons.label} value={config.ctaLabel} onChange={(v) => onTextChange('ctaLabel', v)} placeholder={t.buttons.labelPlaceholder} />
          <ToolTextInput label={t.buttons.url} value={config.ctaUrl} onChange={(v) => onTextChange('ctaUrl', v)} type="url" placeholder={t.buttons.urlPlaceholder} />
        </div>
        <p className="tool-meta mt-1">{t.buttons.helper}</p>
      </div>

      <div>
        <p className="tool-label mb-2">{t.buttons.cta2Title}</p>
        <div className="grid grid-cols-1 gap-3">
          <ToolTextInput label={t.buttons.cta2Label} value={config.cta2Label} onChange={(v) => onTextChange('cta2Label', v)} placeholder={t.buttons.cta2LabelPlaceholder} />
          <ToolTextInput label={t.buttons.cta2Url} value={config.cta2Url} onChange={(v) => onTextChange('cta2Url', v)} type="url" placeholder={t.buttons.cta2UrlPlaceholder} />
        </div>
      </div>

      <div>
        <p className="tool-label mb-1">{t.buttons.ctaRadius}</p>
        <div className="flex flex-wrap gap-2">
          <PillButton value="none" current={styleConfig.ctaRadius} label={t.buttons.ctaRadiusNone} onChange={(v) => onStyleChange('ctaRadius', v as CtaRadiusOption)} />
          <PillButton value="small" current={styleConfig.ctaRadius} label={t.buttons.ctaRadiusSmall} onChange={(v) => onStyleChange('ctaRadius', v as CtaRadiusOption)} />
          <PillButton value="full" current={styleConfig.ctaRadius} label={t.buttons.ctaRadiusFull} onChange={(v) => onStyleChange('ctaRadius', v as CtaRadiusOption)} />
        </div>
      </div>
    </div>
  );
}
