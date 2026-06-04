import cs from '@/data/cs/tools-ui/wcag-contrast.json';
import da from '@/data/da/tools-ui/wcag-contrast.json';
import de from '@/data/de/tools-ui/wcag-contrast.json';
import el from '@/data/el/tools-ui/wcag-contrast.json';
import en from '@/data/en/tools-ui/wcag-contrast.json';
import es from '@/data/es/tools-ui/wcag-contrast.json';
import fi from '@/data/fi/tools-ui/wcag-contrast.json';
import fr from '@/data/fr/tools-ui/wcag-contrast.json';
import it from '@/data/it/tools-ui/wcag-contrast.json';
import pl from '@/data/pl/tools-ui/wcag-contrast.json';
import pt from '@/data/pt/tools-ui/wcag-contrast.json';
import ro from '@/data/ro/tools-ui/wcag-contrast.json';
import nl from '@/data/nl/tools-ui/wcag-contrast.json';
import hu from '@/data/hu/tools-ui/wcag-contrast.json';
import sv from '@/data/sv/tools-ui/wcag-contrast.json';
import no from '@/data/no/tools-ui/wcag-contrast.json';
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
