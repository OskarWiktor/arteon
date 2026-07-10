import cs from '@/data/cs/tools-ui/word-count.json';
import de from '@/data/de/tools-ui/word-count.json';
import en from '@/data/en/tools-ui/word-count.json';
import es from '@/data/es/tools-ui/word-count.json';
import fr from '@/data/fr/tools-ui/word-count.json';
import it from '@/data/it/tools-ui/word-count.json';
import pl from '@/data/pl/tools-ui/word-count.json';
import pt from '@/data/pt/tools-ui/word-count.json';
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
