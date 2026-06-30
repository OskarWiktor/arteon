import cs from '@/data/cs/tools-ui/image-resize.json';
import de from '@/data/de/tools-ui/image-resize.json';
import el from '@/data/el/tools-ui/image-resize.json';
import en from '@/data/en/tools-ui/image-resize.json';
import es from '@/data/es/tools-ui/image-resize.json';
import fi from '@/data/fi/tools-ui/image-resize.json';
import fr from '@/data/fr/tools-ui/image-resize.json';
import it from '@/data/it/tools-ui/image-resize.json';
import nl from '@/data/nl/tools-ui/image-resize.json';
import pl from '@/data/pl/tools-ui/image-resize.json';
import pt from '@/data/pt/tools-ui/image-resize.json';
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

export type UiLocale = (typeof ui)[Locale];
