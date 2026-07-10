import cs from '@/data/cs/tools-ui/favicon.json';
import de from '@/data/de/tools-ui/favicon.json';
import en from '@/data/en/tools-ui/favicon.json';
import es from '@/data/es/tools-ui/favicon.json';
import fr from '@/data/fr/tools-ui/favicon.json';
import it from '@/data/it/tools-ui/favicon.json';
import pl from '@/data/pl/tools-ui/favicon.json';
import pt from '@/data/pt/tools-ui/favicon.json';
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
} as const satisfies Record<Locale, unknown>;
