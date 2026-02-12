import type { SignatureConfig, StyleConfig } from '@/types/tools/email';
import PillButton from '@/components/ui/tools/PillButton';
import ToolTextInput from '@/components/ui/tools/ToolTextInput';

type Props = {
  config: SignatureConfig;
  styleConfig: StyleConfig;
  onTextChange: <K extends keyof SignatureConfig>(key: K, value: SignatureConfig[K]) => void;
  onStyleChange: <K extends keyof StyleConfig>(key: K, value: StyleConfig[K]) => void;
  t: {
    identity: Record<string, string>;
  };
};

export default function IdentityPanel({ config, styleConfig, onTextChange, onStyleChange, t }: Props) {
  return (
    <div className="space-y-3">
      <span className="tool-value">{t.identity.title}</span>

      <ToolTextInput label={t.identity.topLine} value={config.topLine} onChange={(v) => onTextChange('topLine', v)} placeholder={t.identity.topLinePlaceholder} />

      <div>
        <ToolTextInput label={t.identity.avatar} value={config.avatarUrl} onChange={(v) => onTextChange('avatarUrl', v)} type="url" placeholder={t.identity.avatarPlaceholder} />
        <p className="tool-meta mt-1">{t.identity.avatarHelper}</p>
        {config.avatarUrl.trim() && (
          <div className="mt-3 space-y-3">
            <div>
              <p className="tool-label mb-1">{t.identity.avatarShape}</p>
              <div className="flex flex-wrap gap-2">
                <PillButton value="circle" current={styleConfig.avatarShape} label={t.identity.avatarShapeCircle} onChange={(v) => onStyleChange('avatarShape', v)} />
                <PillButton value="rounded" current={styleConfig.avatarShape} label={t.identity.avatarShapeRounded} onChange={(v) => onStyleChange('avatarShape', v)} />
                <PillButton value="square" current={styleConfig.avatarShape} label={t.identity.avatarShapeSquare} onChange={(v) => onStyleChange('avatarShape', v)} />
              </div>
            </div>
            <div>
              <p className="tool-label mb-1">{t.identity.avatarSize}</p>
              <div className="flex flex-wrap gap-2">
                <PillButton value="small" current={styleConfig.avatarSize} label={t.identity.avatarSizeSmall} onChange={(v) => onStyleChange('avatarSize', v)} />
                <PillButton value="medium" current={styleConfig.avatarSize} label={t.identity.avatarSizeMedium} onChange={(v) => onStyleChange('avatarSize', v)} />
                <PillButton value="large" current={styleConfig.avatarSize} label={t.identity.avatarSizeLarge} onChange={(v) => onStyleChange('avatarSize', v)} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <ToolTextInput label={t.identity.fullName} value={config.fullName} onChange={(v) => onTextChange('fullName', v)} placeholder={t.identity.fullNamePlaceholder} />
        <ToolTextInput label={t.identity.nameTag} value={config.nameTag} onChange={(v) => onTextChange('nameTag', v)} placeholder={t.identity.nameTagPlaceholder} />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <ToolTextInput label={t.identity.jobTitle} value={config.jobTitle} onChange={(v) => onTextChange('jobTitle', v)} placeholder={t.identity.jobTitlePlaceholder} />
        <ToolTextInput label={t.identity.company} value={config.company} onChange={(v) => onTextChange('company', v)} placeholder={t.identity.companyPlaceholder} />
      </div>

      <ToolTextInput label={t.identity.extraLine} value={config.extraLine} onChange={(v) => onTextChange('extraLine', v)} placeholder={t.identity.extraLinePlaceholder} />

      <div className="grid gap-3 md:grid-cols-2">
        <ToolTextInput label={t.identity.email} value={config.email} onChange={(v) => onTextChange('email', v)} type="email" placeholder={t.identity.emailPlaceholder} />
        <ToolTextInput label={t.identity.phone} value={config.phone} onChange={(v) => onTextChange('phone', v)} type="tel" placeholder={t.identity.phonePlaceholder} />
      </div>

      <ToolTextInput label={t.identity.website} value={config.website} onChange={(v) => onTextChange('website', v)} type="url" placeholder={t.identity.websitePlaceholder} />

      <div>
        <label className="mb-1 block">
          <span className="tool-label">{t.identity.address}</span>
        </label>
        <textarea value={config.address} onChange={(e) => onTextChange('address', e.target.value)} className="tool-input" rows={2} placeholder={t.identity.addressPlaceholder} />
      </div>

      <div>
        <label className="mb-1 block">
          <span className="tool-label">{t.identity.formalLine}</span>
        </label>
        <textarea value={config.formalLine} onChange={(e) => onTextChange('formalLine', e.target.value)} className="tool-input" rows={2} placeholder={t.identity.formalLinePlaceholder} />
      </div>
    </div>
  );
}
