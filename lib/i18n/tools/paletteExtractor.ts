import cs from '@/data/cs/tools-ui/palette-extractor.json';
import de from '@/data/de/tools-ui/palette-extractor.json';
import el from '@/data/el/tools-ui/palette-extractor.json';
import en from '@/data/en/tools-ui/palette-extractor.json';
import es from '@/data/es/tools-ui/palette-extractor.json';
import fi from '@/data/fi/tools-ui/palette-extractor.json';
import fr from '@/data/fr/tools-ui/palette-extractor.json';
import it from '@/data/it/tools-ui/palette-extractor.json';
import nl from '@/data/nl/tools-ui/palette-extractor.json';
import no from '@/data/no/tools-ui/palette-extractor.json';
import pl from '@/data/pl/tools-ui/palette-extractor.json';
import pt from '@/data/pt/tools-ui/palette-extractor.json';
import sv from '@/data/sv/tools-ui/palette-extractor.json';
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
