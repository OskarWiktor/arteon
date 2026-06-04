import cs from '@/data/cs/tools-ui/favicon.json';
import da from '@/data/da/tools-ui/favicon.json';
import de from '@/data/de/tools-ui/favicon.json';
import el from '@/data/el/tools-ui/favicon.json';
import en from '@/data/en/tools-ui/favicon.json';
import es from '@/data/es/tools-ui/favicon.json';
import fi from '@/data/fi/tools-ui/favicon.json';
import fr from '@/data/fr/tools-ui/favicon.json';
import it from '@/data/it/tools-ui/favicon.json';
import pl from '@/data/pl/tools-ui/favicon.json';
import pt from '@/data/pt/tools-ui/favicon.json';
import ro from '@/data/ro/tools-ui/favicon.json';
import nl from '@/data/nl/tools-ui/favicon.json';
import hu from '@/data/hu/tools-ui/favicon.json';
import sv from '@/data/sv/tools-ui/favicon.json';
import no from '@/data/no/tools-ui/favicon.json';
import type { Locale } from '@/lib/LocaleContext';

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
