import type { Locale } from '@/types/locale';
import type { ToolItemKey } from '@/types/tools/common';
import Gap from '@/components/ui/Gap';
import { UNIT_CONVERSIONS } from '@/components/sections/tools/UnitConverter/conversions';
import { getToolHref, getToolByKey } from '@/lib/i18n/tool-registry';
import { getUnitLabel } from '@/utils/locale-utils';

// ---------------------------------------------------------------------------
// Locale-aware title templates (matching RelatedConverters pattern)
// ---------------------------------------------------------------------------

const TITLE_CONVERT_TO: Record<string, (unit: string) => string> = {
  pl: (u) => `Konwertuj inne jednostki do ${u}`,
  en: (u) => `Convert other units to ${u}`,
  de: (u) => `Andere Einheiten in ${u} umrechnen`,
  es: (u) => `Convertir otras unidades a ${u}`,
  fr: (u) => `Convertir d'autres unités en ${u}`,
  pt: (u) => `Converter outras unidades para ${u}`,
  it: (u) => `Converti altre unità in ${u}`,
  ro: (u) => `Convertește alte unități în ${u}`,
  nl: (u) => `Andere eenheden naar ${u} converteren`,
  hu: (u) => `Más egységek átváltása ${u} egységre`,
  cs: (u) => `Převést jiné jednotky na ${u}`,
  sv: (u) => `Konvertera andra enheter till ${u}`,
  da: (u) => `Konverter andre enheder til ${u}`,
  no: (u) => `Konverter andre enheter til ${u}`,
  fi: (u) => `Muunna muut yksiköt yksiköksi ${u}`,
  el: (u) => `Μετατρέψτε άλλες μονάδες σε ${u}`,
};

const TITLE_CONVERT_FROM: Record<string, (unit: string) => string> = {
  pl: (u) => `Konwertuj ${u} do innych jednostek`,
  en: (u) => `Convert ${u} to other units`,
  de: (u) => `${u} in andere Einheiten umrechnen`,
  es: (u) => `Convertir ${u} a otras unidades`,
  fr: (u) => `Convertir ${u} en d'autres unités`,
  pt: (u) => `Converter ${u} para outras unidades`,
  it: (u) => `Converti ${u} in altre unità`,
  ro: (u) => `Convertește ${u} în alte unități`,
  nl: (u) => `${u} naar andere eenheden converteren`,
  hu: (u) => `${u} átváltása más egységekre`,
  cs: (u) => `Převést ${u} na jiné jednotky`,
  sv: (u) => `Konvertera ${u} till andra enheter`,
  da: (u) => `Konverter ${u} til andre enheder`,
  no: (u) => `Konverter ${u} til andre enheter`,
  fi: (u) => `Muunna ${u} muiksi yksiköiksi`,
  el: (u) => `Μετατρέψτε ${u} σε άλλες μονάδες`,
};

const TITLE_OTHER_CONVERTERS: Record<string, string> = {
  pl: 'Sprawdź konwertery innych jednostek',
  en: 'Explore other unit converters',
  de: 'Weitere Einheitenkonverter entdecken',
  es: 'Explorar otros conversores de unidades',
  fr: "Découvrir d'autres convertisseurs d'unités",
  pt: 'Explorar outros conversores de unidades',
  it: 'Esplora altri convertitori di unità',
  ro: 'Explorează alte convertoare de unități',
  nl: 'Ontdek andere eenhedenconverters',
  hu: 'További mértékegység-átváltók',
  cs: 'Další převodníky jednotek',
  sv: 'Utforska andra enhetskonverterare',
  da: 'Udforsk andre enhedskonvertere',
  no: 'Utforsk andre enhetskonverterere',
  fi: 'Tutustu muihin yksikkömuuntimeen',
  el: 'Εξερευνήστε άλλους μετατροπείς μονάδων',
};

const UNIT_CONNECTOR: Record<string, string> = {
  pl: 'na',
  en: 'to',
  de: 'in',
  es: 'a',
  fr: 'en',
  pt: 'para',
  it: 'in',
  ro: 'în',
  nl: 'naar',
  hu: '→',
  cs: 'na',
  sv: 'till',
  da: 'til',
  no: 'til',
  fi: '→',
  el: 'σε',
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type UnitFieldRef = { label?: string; labelKey?: string; suffix: string };

function unitLabel(field: UnitFieldRef, locale: Locale): string {
  if (field.labelKey) return getUnitLabel(field.labelKey, locale);
  return field.suffix || field.label || '';
}

function unitId(field: UnitFieldRef): string {
  return field.suffix || field.labelKey || field.label || '';
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

interface RelatedUnitConvertersProps {
  toolKey: string;
  locale: Locale;
}

export default function RelatedUnitConverters({ toolKey, locale }: RelatedUnitConvertersProps) {
  const current = UNIT_CONVERSIONS.find((c) => c.toolKey === toolKey);
  if (!current) return null;

  const currentSourceId = unitId(current.sourceField);
  const currentTargetId = unitId(current.targetField);

  // Section 1: converters with the same TARGET unit (other source → same target)
  const toSameTarget = UNIT_CONVERSIONS.filter((c) => c.toolKey !== toolKey && unitId(c.targetField) === currentTargetId && getToolHref(c.toolKey as ToolItemKey, locale) !== '#');

  // Section 2: converters with the same SOURCE unit (same source → other target)
  const fromSameSource = UNIT_CONVERSIONS.filter((c) => c.toolKey !== toolKey && unitId(c.sourceField) === currentSourceId && getToolHref(c.toolKey as ToolItemKey, locale) !== '#');

  // Section 3: all other unit converters
  const shownKeys = new Set([toolKey, ...toSameTarget.map((c) => c.toolKey), ...fromSameSource.map((c) => c.toolKey)]);
  const otherConverters = UNIT_CONVERSIONS.filter((c) => !shownKeys.has(c.toolKey) && getToolHref(c.toolKey as ToolItemKey, locale) !== '#');

  if (toSameTarget.length === 0 && fromSameSource.length === 0 && otherConverters.length === 0) return null;

  const targetUnitLabel = unitLabel(current.targetField, locale);
  const sourceUnitLabel = unitLabel(current.sourceField, locale);

  const titleTo = (TITLE_CONVERT_TO[locale] ?? TITLE_CONVERT_TO.en)(targetUnitLabel);
  const titleFrom = (TITLE_CONVERT_FROM[locale] ?? TITLE_CONVERT_FROM.en)(sourceUnitLabel);
  const titleOther = TITLE_OTHER_CONVERTERS[locale] ?? TITLE_OTHER_CONVERTERS.en;

  return (
    <>
      {toSameTarget.length > 0 && (
        <section className="mb-2">
          <h2 className="h3 mb-4 md:mb-6">{titleTo}</h2>
          <ConverterGrid converters={toSameTarget} locale={locale} />
        </section>
      )}

      {fromSameSource.length > 0 && (
        <>
          {toSameTarget.length > 0 && <Gap variant="line" />}
          <section className="mb-2">
            <h2 className="h3 mb-4 md:mb-6">{titleFrom}</h2>
            <ConverterGrid converters={fromSameSource} locale={locale} />
          </section>
        </>
      )}

      {otherConverters.length > 0 && (
        <>
          {(toSameTarget.length > 0 || fromSameSource.length > 0) && <Gap variant="line" />}
          <section className="mb-2">
            <h2 className="h3 mb-4 md:mb-6">{titleOther}</h2>
            <ConverterGrid converters={otherConverters} locale={locale} />
          </section>
        </>
      )}

      <Gap variant="line" />
    </>
  );
}

// ---------------------------------------------------------------------------
// Grid sub-component
// ---------------------------------------------------------------------------

function ConverterGrid({ converters, locale }: { converters: { toolKey: string; sourceField: UnitFieldRef; targetField: UnitFieldRef }[]; locale: Locale }) {
  const connector = UNIT_CONNECTOR[locale] ?? 'to';

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
      {converters.map((c) => {
        const href = getToolHref(c.toolKey as ToolItemKey, locale);
        if (href === '#') return null;
        const tool = getToolByKey(c.toolKey as ToolItemKey);
        const label = tool?.locales[locale]?.title ?? `${unitLabel(c.sourceField, locale)} ${connector} ${unitLabel(c.targetField, locale)}`;

        return (
          <a
            key={c.toolKey}
            href={href}
            className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 flex items-center justify-center rounded-md border bg-white px-2 py-2.5 text-center text-xs font-semibold transition-colors"
          >
            {label}
          </a>
        );
      })}
    </div>
  );
}
