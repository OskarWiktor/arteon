import cs from '@/data/cs/tools-ui/qr-code.json';
import de from '@/data/de/tools-ui/qr-code.json';
import en from '@/data/en/tools-ui/qr-code.json';
import es from '@/data/es/tools-ui/qr-code.json';
import fr from '@/data/fr/tools-ui/qr-code.json';
import it from '@/data/it/tools-ui/qr-code.json';
import pl from '@/data/pl/tools-ui/qr-code.json';
import pt from '@/data/pt/tools-ui/qr-code.json';
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
} as const satisfies Record<Locale, unknown>;
