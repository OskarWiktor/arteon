import cs from '@/data/cs/tools-ui/lorem-ipsum.json';
import de from '@/data/de/tools-ui/lorem-ipsum.json';
import el from '@/data/el/tools-ui/lorem-ipsum.json';
import en from '@/data/en/tools-ui/lorem-ipsum.json';
import es from '@/data/es/tools-ui/lorem-ipsum.json';
import fr from '@/data/fr/tools-ui/lorem-ipsum.json';
import it from '@/data/it/tools-ui/lorem-ipsum.json';
import pl from '@/data/pl/tools-ui/lorem-ipsum.json';
import pt from '@/data/pt/tools-ui/lorem-ipsum.json';
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
  el,
} as const satisfies Record<Locale, unknown>;
