import type { Locale } from '@/lib/LocaleContext';

import pl from '@/data/pl/tools-ui/word-count.json';
import en from '@/data/en/tools-ui/word-count.json';
import de from '@/data/de/tools-ui/word-count.json';
import es from '@/data/es/tools-ui/word-count.json';
import fr from '@/data/fr/tools-ui/word-count.json';
import pt from '@/data/pt/tools-ui/word-count.json';
import it from '@/data/it/tools-ui/word-count.json';
import ro from '@/data/ro/tools-ui/word-count.json';
import nl from '@/data/nl/tools-ui/word-count.json';
import hu from '@/data/hu/tools-ui/word-count.json';
import cs from '@/data/cs/tools-ui/word-count.json';
import sv from '@/data/sv/tools-ui/word-count.json';
import da from '@/data/da/tools-ui/word-count.json';
import no from '@/data/no/tools-ui/word-count.json';
import fi from '@/data/fi/tools-ui/word-count.json';
import el from '@/data/el/tools-ui/word-count.json';

export const ui = {
  pl,
  en,
  de,
  es,
  fr,
  pt,
  it,
  ro,
  nl,
  hu,
  cs,
  sv,
  da,
  no,
  fi,
  el,
} as const satisfies Record<Locale, unknown>;
