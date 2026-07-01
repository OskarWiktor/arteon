import cs from '@/data/cs/tools-ui/email-signature.json';
import de from '@/data/de/tools-ui/email-signature.json';
import el from '@/data/el/tools-ui/email-signature.json';
import en from '@/data/en/tools-ui/email-signature.json';
import es from '@/data/es/tools-ui/email-signature.json';
import fr from '@/data/fr/tools-ui/email-signature.json';
import it from '@/data/it/tools-ui/email-signature.json';
import pl from '@/data/pl/tools-ui/email-signature.json';
import pt from '@/data/pt/tools-ui/email-signature.json';
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

export type EmailSignatureUi = (typeof ui)[Locale];
