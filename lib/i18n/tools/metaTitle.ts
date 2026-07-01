import cs from '@/data/cs/tools-ui/meta-title.json';
import de from '@/data/de/tools-ui/meta-title.json';
import el from '@/data/el/tools-ui/meta-title.json';
import en from '@/data/en/tools-ui/meta-title.json';
import es from '@/data/es/tools-ui/meta-title.json';
import fr from '@/data/fr/tools-ui/meta-title.json';
import it from '@/data/it/tools-ui/meta-title.json';
import pl from '@/data/pl/tools-ui/meta-title.json';
import pt from '@/data/pt/tools-ui/meta-title.json';
import type { Locale } from '@/lib/LocaleContext';

export const ui = {
  pl,
  en,
  de,
  es,
  fr,
  pt,
  it,
  cs,
  el,
} as const satisfies Record<Locale, unknown>;
