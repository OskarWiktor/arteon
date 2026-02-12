import type { SignatureConfig, StyleConfig, SpacingConfig, SpacingKey, MarginOption, LayoutType } from '@/types/tools/email';
import PillButton from '@/components/ui/tools/PillButton';
import { LAYOUT_SPACING_MAP } from '@/components/sections/tools/EmailSignatureGenerator/constants';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

type Props = {
  config: SignatureConfig;
  styleConfig: StyleConfig;
  spacingConfig: SpacingConfig;
  layout: LayoutType;
  onStyleChange: <K extends keyof StyleConfig>(key: K, value: StyleConfig[K]) => void;
  onSpacingChange: (key: SpacingKey, delta: number) => void;
  t: {
    spacing: Record<string, string>;
  };
};

function SpacingRow({ label, value, spacingKey, onSpacingChange }: { label: string; value: number; spacingKey: SpacingKey; onSpacingChange: (key: SpacingKey, delta: number) => void }) {
  return (
    <div className="flex items-center justify-between gap-2 py-1">
      <span className="tool-value">{label}</span>
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onSpacingChange(spacingKey, -2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zmniejsz odstęp">
          <RiSubtractLine className="text-primary h-4 w-4" />
        </button>
        <span className="w-10 text-center text-xs! font-medium">{value} px</span>
        <button type="button" onClick={() => onSpacingChange(spacingKey, 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
          <RiAddLine className="text-primary h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

type SpacingRowConfig = {
  key: SpacingKey;
  labelKey: string;
  visible: boolean;
};

export default function SpacingPanel({ config, styleConfig, spacingConfig, layout, onStyleChange, onSpacingChange, t }: Props) {
  const layoutKeys = LAYOUT_SPACING_MAP[layout];

  const rows: SpacingRowConfig[] = [
    { key: 'afterName', labelKey: 'afterName', visible: !!config.fullName.trim() && layoutKeys.includes('afterName') },
    { key: 'afterTitle', labelKey: 'afterTitle', visible: !!(config.jobTitle.trim() || config.company.trim()) && layoutKeys.includes('afterTitle') },
    { key: 'afterExtra', labelKey: 'afterExtra', visible: !!config.extraLine.trim() && layoutKeys.includes('afterExtra') },
    { key: 'afterContact', labelKey: 'afterContact', visible: !!(config.email.trim() || config.phone.trim() || config.website.trim()) && layoutKeys.includes('afterContact') },
    { key: 'afterSocials', labelKey: 'afterSocials', visible: Object.values(config.socials).some((url) => url.trim()) && layoutKeys.includes('afterSocials') },
    { key: 'afterCta', labelKey: 'afterCta', visible: !!(config.ctaLabel.trim() && config.ctaUrl.trim()) && layoutKeys.includes('afterCta') },
    { key: 'beforeLegal', labelKey: 'beforeLegal', visible: !!config.legalNote.trim() && layoutKeys.includes('beforeLegal') },
  ];

  return (
    <div className="space-y-4">
      <div>
        <span className="tool-value mb-2">{t.spacing.title}</span>
        <p className="tool-meta mb-3">{t.spacing.helper}</p>
      </div>

      <div>
        <p className="tool-label mb-1">{t.spacing.padding}</p>
        <div className="flex flex-wrap gap-2">
          <PillButton value="small" current={styleConfig.padding} label="8 px" onChange={(v) => onStyleChange('padding', v as MarginOption)} />
          <PillButton value="medium" current={styleConfig.padding} label="16 px" onChange={(v) => onStyleChange('padding', v as MarginOption)} />
          <PillButton value="large" current={styleConfig.padding} label="24 px" onChange={(v) => onStyleChange('padding', v as MarginOption)} />
        </div>
      </div>

      {rows
        .filter((r) => r.visible)
        .map((r) => (
          <SpacingRow key={r.key} label={t.spacing[r.labelKey]} value={spacingConfig[r.key]} spacingKey={r.key} onSpacingChange={onSpacingChange} />
        ))}
    </div>
  );
}
