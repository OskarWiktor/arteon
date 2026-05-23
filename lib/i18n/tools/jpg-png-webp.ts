import type { Locale } from '@/lib/LocaleContext';

import pl from '@/data/pl/tools-ui/jpg-png-webp.json';
import en from '@/data/en/tools-ui/jpg-png-webp.json';
import de from '@/data/de/tools-ui/jpg-png-webp.json';
import es from '@/data/es/tools-ui/jpg-png-webp.json';
import fr from '@/data/fr/tools-ui/jpg-png-webp.json';
import pt from '@/data/pt/tools-ui/jpg-png-webp.json';
import it from '@/data/it/tools-ui/jpg-png-webp.json';
import ro from '@/data/ro/tools-ui/jpg-png-webp.json';
import nl from '@/data/nl/tools-ui/jpg-png-webp.json';
import hu from '@/data/hu/tools-ui/jpg-png-webp.json';
import cs from '@/data/cs/tools-ui/jpg-png-webp.json';
import sv from '@/data/sv/tools-ui/jpg-png-webp.json';
import da from '@/data/da/tools-ui/jpg-png-webp.json';
import no from '@/data/no/tools-ui/jpg-png-webp.json';
import fi from '@/data/fi/tools-ui/jpg-png-webp.json';
import el from '@/data/el/tools-ui/jpg-png-webp.json';

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
