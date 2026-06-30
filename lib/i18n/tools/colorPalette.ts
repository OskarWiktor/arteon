import cs from '@/data/cs/tools-ui/color-palette.json';
import de from '@/data/de/tools-ui/color-palette.json';
import el from '@/data/el/tools-ui/color-palette.json';
import en from '@/data/en/tools-ui/color-palette.json';
import es from '@/data/es/tools-ui/color-palette.json';
import fi from '@/data/fi/tools-ui/color-palette.json';
import fr from '@/data/fr/tools-ui/color-palette.json';
import hu from '@/data/hu/tools-ui/color-palette.json';
import it from '@/data/it/tools-ui/color-palette.json';
import nl from '@/data/nl/tools-ui/color-palette.json';
import no from '@/data/no/tools-ui/color-palette.json';
import pl from '@/data/pl/tools-ui/color-palette.json';
import pt from '@/data/pt/tools-ui/color-palette.json';
import ro from '@/data/ro/tools-ui/color-palette.json';
import sv from '@/data/sv/tools-ui/color-palette.json';
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
  no,
  fi,
  el,
} as const satisfies Record<Locale, unknown>;
