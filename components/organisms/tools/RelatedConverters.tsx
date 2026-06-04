import Divider from '@/components/atoms/Divider';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import {
  getConversionByToolKey,
  getConvertersToSameTarget,
  getConvertersFromSameSource,
  FORMAT_DISPLAY_LABELS,
  type ResolvedRoute,
} from '@/lib/tools/conversionRoutes';
import { flexCenterClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import type { Locale } from '@/types/locale';

function LinkGrid({ routes, connector }: { routes: ResolvedRoute[]; connector: string }) {
  return (
    <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
      {routes.map(r => (
        <a
          key={r.toolKey}
          href={r.href}
          className={cn(
            'rounded-md border border-primary/20 bg-white px-2 py-2.5 text-center text-xs font-semibold transition-colors hover:border-primary/40 hover:bg-primary/5',
            flexCenterClasses,
          )}
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

export default async function RelatedConverters({ toolKey, locale }: RelatedConvertersProps) {
  const conversion = getConversionByToolKey(toolKey);
  if (!conversion) return null;

  const { source, target } = conversion;
  const toSameTarget = getConvertersToSameTarget(toolKey, locale);
  const fromSameSource = getConvertersFromSameSource(toolKey, locale);

  if (toSameTarget.length === 0 && fromSameSource.length === 0) return null;

  const { relatedConverters: t } = await getDictionary(locale);
  const titleTo = t.titleConvertTo.replace('{{format}}', FORMAT_DISPLAY_LABELS[target]);
  const titleFrom = t.titleConvertFrom.replace('{{format}}', FORMAT_DISPLAY_LABELS[source]);

  return (
    <>
      {toSameTarget.length > 0 && (
        <section className='mb-2'>
          <h2 className='h3 mb-4 md:mb-6'>{titleTo}</h2>
          <LinkGrid routes={toSameTarget} connector={t.formatConnector} />
        </section>
      )}

      {fromSameSource.length > 0 && (
        <>
          {toSameTarget.length > 0 && <Divider line />}
          <section className='mb-2'>
            <h2 className='h3 mb-4 md:mb-6'>{titleFrom}</h2>
            <LinkGrid routes={fromSameSource} connector={t.formatConnector} />
          </section>
        </>
      )}

      <Divider line />
    </>
  );
}
