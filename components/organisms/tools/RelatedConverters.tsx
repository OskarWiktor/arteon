import type { Locale } from '@/types/locale';
import {
  getConversionByToolKey,
  getConvertersToSameTarget,
  getConvertersFromSameSource,
  FORMAT_DISPLAY_LABELS,
  type ResolvedRoute,
} from '@/lib/tools/conversionRoutes';
import Divider from '@/components/atoms/Divider';

const TITLE_CONVERT_TO: Record<string, (fmt: string) => string> = {
  pl: f => `Konwertuj inne pliki do formatu ${f}`,
  en: f => `Convert other files to ${f}`,
  de: f => `Andere Dateien in ${f} konvertieren`,
  es: f => `Convertir otros archivos a ${f}`,
  fr: f => `Convertir d'autres fichiers en ${f}`,
  pt: f => `Converter outros ficheiros para ${f}`,
  it: f => `Converti altri file in ${f}`,
  ro: f => `Convertește alte fișiere în ${f}`,
  nl: f => `Converteer andere bestanden naar ${f}`,
  hu: f => `Más fájlok konvertálása ${f} formátumba`,
  cs: f => `Převést ostatní soubory do formátu ${f}`,
  sv: f => `Konvertera andra filer till ${f}`,
  da: f => `Konverter andre filer til ${f}`,
  no: f => `Konverter andre filer til ${f}`,
  fi: f => `Muunna muut tiedostot ${f}-muotoon`,
  el: f => `Μετατρέψτε άλλα αρχεία σε ${f}`,
};

const TITLE_CONVERT_FROM: Record<string, (fmt: string) => string> = {
  pl: f => `Konwertuj ${f} do innych formatów`,
  en: f => `Convert ${f} to other formats`,
  de: f => `${f} in andere Formate konvertieren`,
  es: f => `Convertir ${f} a otros formatos`,
  fr: f => `Convertir ${f} en d'autres formats`,
  pt: f => `Converter ${f} para outros formatos`,
  it: f => `Converti ${f} in altri formati`,
  ro: f => `Convertește ${f} în alte formate`,
  nl: f => `Converteer ${f} naar andere formaten`,
  hu: f => `${f} konvertálása más formátumokba`,
  cs: f => `Převést ${f} do jiných formátů`,
  sv: f => `Konvertera ${f} till andra format`,
  da: f => `Konverter ${f} til andre formater`,
  no: f => `Konverter ${f} til andre formater`,
  fi: f => `Muunna ${f} muihin muotoihin`,
  el: f => `Μετατρέψτε ${f} σε άλλες μορφές`,
};

const FORMAT_CONNECTOR: Record<string, string> = {
  pl: 'do',
  en: 'to',
  de: 'in',
  es: 'a',
  fr: 'en',
  pt: 'para',
  it: 'in',
  ro: 'în',
  nl: 'naar',
  hu: '→',
  cs: 'do',
  sv: 'till',
  da: 'til',
  no: 'til',
  fi: '→',
  el: 'σε',
};

function LinkGrid({ routes, locale }: { routes: ResolvedRoute[]; locale: string }) {
  const connector = FORMAT_CONNECTOR[locale] ?? 'to';

  return (
    <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
      {routes.map(r => (
        <a
          key={r.toolKey}
          href={r.href}
          className='border-primary/20 hover:bg-primary/5 hover:border-primary/40 flex items-center justify-center rounded-md border bg-white px-2 py-2.5 text-center text-xs font-semibold transition-colors'
        >
          {FORMAT_DISPLAY_LABELS[r.source]} {connector} {FORMAT_DISPLAY_LABELS[r.target]}
        </a>
      ))}
    </div>
  );
}

interface RelatedConvertersProps {
  toolKey: string;
  locale: Locale;
}

export default function RelatedConverters({ toolKey, locale }: RelatedConvertersProps) {
  const conversion = getConversionByToolKey(toolKey);
  if (!conversion) return null;

  const { source, target } = conversion;
  const toSameTarget = getConvertersToSameTarget(toolKey, locale);
  const fromSameSource = getConvertersFromSameSource(toolKey, locale);

  if (toSameTarget.length === 0 && fromSameSource.length === 0) return null;

  const targetLabel = FORMAT_DISPLAY_LABELS[target];
  const sourceLabel = FORMAT_DISPLAY_LABELS[source];

  const titleTo = (TITLE_CONVERT_TO[locale] ?? TITLE_CONVERT_TO.en)(targetLabel);
  const titleFrom = (TITLE_CONVERT_FROM[locale] ?? TITLE_CONVERT_FROM.en)(sourceLabel);

  return (
    <>
      {toSameTarget.length > 0 && (
        <section className='mb-2'>
          <h2 className='h3 mb-4 md:mb-6'>{titleTo}</h2>
          <LinkGrid routes={toSameTarget} locale={locale} />
        </section>
      )}

      {fromSameSource.length > 0 && (
        <>
          {toSameTarget.length > 0 && <Divider line />}
          <section className='mb-2'>
            <h2 className='h3 mb-4 md:mb-6'>{titleFrom}</h2>
            <LinkGrid routes={fromSameSource} locale={locale} />
          </section>
        </>
      )}

      <Divider line />
    </>
  );
}
