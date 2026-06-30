import cs from '@/data/cs/tools-ui/word-count.json';
import de from '@/data/de/tools-ui/word-count.json';
import el from '@/data/el/tools-ui/word-count.json';
import en from '@/data/en/tools-ui/word-count.json';
import es from '@/data/es/tools-ui/word-count.json';
import fi from '@/data/fi/tools-ui/word-count.json';
import fr from '@/data/fr/tools-ui/word-count.json';
import it from '@/data/it/tools-ui/word-count.json';
import nl from '@/data/nl/tools-ui/word-count.json';
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
  nl,
  cs,
  fi,
  el,
} as const satisfies Record<Locale, unknown>;
