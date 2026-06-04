import cs from '@/data/cs/tools-ui/image-resize-editor.json';
import da from '@/data/da/tools-ui/image-resize-editor.json';
import de from '@/data/de/tools-ui/image-resize-editor.json';
import el from '@/data/el/tools-ui/image-resize-editor.json';
import en from '@/data/en/tools-ui/image-resize-editor.json';
import es from '@/data/es/tools-ui/image-resize-editor.json';
import fi from '@/data/fi/tools-ui/image-resize-editor.json';
import fr from '@/data/fr/tools-ui/image-resize-editor.json';
import it from '@/data/it/tools-ui/image-resize-editor.json';
import pl from '@/data/pl/tools-ui/image-resize-editor.json';
import pt from '@/data/pt/tools-ui/image-resize-editor.json';
import ro from '@/data/ro/tools-ui/image-resize-editor.json';
import nl from '@/data/nl/tools-ui/image-resize-editor.json';
import hu from '@/data/hu/tools-ui/image-resize-editor.json';
import sv from '@/data/sv/tools-ui/image-resize-editor.json';
import no from '@/data/no/tools-ui/image-resize-editor.json';
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

export type UiLocale = (typeof ui)[Locale];
