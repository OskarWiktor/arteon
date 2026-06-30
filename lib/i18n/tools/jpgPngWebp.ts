import cs from '@/data/cs/tools-ui/jpg-png-webp.json';
import de from '@/data/de/tools-ui/jpg-png-webp.json';
import el from '@/data/el/tools-ui/jpg-png-webp.json';
import en from '@/data/en/tools-ui/jpg-png-webp.json';
import es from '@/data/es/tools-ui/jpg-png-webp.json';
import fi from '@/data/fi/tools-ui/jpg-png-webp.json';
import fr from '@/data/fr/tools-ui/jpg-png-webp.json';
import it from '@/data/it/tools-ui/jpg-png-webp.json';
import nl from '@/data/nl/tools-ui/jpg-png-webp.json';
import no from '@/data/no/tools-ui/jpg-png-webp.json';
import pl from '@/data/pl/tools-ui/jpg-png-webp.json';
import pt from '@/data/pt/tools-ui/jpg-png-webp.json';
import sv from '@/data/sv/tools-ui/jpg-png-webp.json';
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
  sv,
  no,
  fi,
  el,
} as const satisfies Record<Locale, unknown>;
