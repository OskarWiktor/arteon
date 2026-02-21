import type { Locale } from '@/lib/LocaleContext';

import pl from '@/data/pl/tools-ui/image-resize-editor.json';
import en from '@/data/en/tools-ui/image-resize-editor.json';
import de from '@/data/de/tools-ui/image-resize-editor.json';
import es from '@/data/es/tools-ui/image-resize-editor.json';
import fr from '@/data/fr/tools-ui/image-resize-editor.json';
import pt from '@/data/pt/tools-ui/image-resize-editor.json';
import it from '@/data/it/tools-ui/image-resize-editor.json';
import ro from '@/data/ro/tools-ui/image-resize-editor.json';
import nl from '@/data/nl/tools-ui/image-resize-editor.json';
import hu from '@/data/hu/tools-ui/image-resize-editor.json';
import tr from '@/data/tr/tools-ui/image-resize-editor.json';
import cs from '@/data/cs/tools-ui/image-resize-editor.json';
import sv from '@/data/sv/tools-ui/image-resize-editor.json';
import sq from '@/data/sq/tools-ui/image-resize-editor.json';
import da from '@/data/da/tools-ui/image-resize-editor.json';
import no from '@/data/no/tools-ui/image-resize-editor.json';
import fi from '@/data/fi/tools-ui/image-resize-editor.json';
import sk from '@/data/sk/tools-ui/image-resize-editor.json';
import hr from '@/data/hr/tools-ui/image-resize-editor.json';
import lt from '@/data/lt/tools-ui/image-resize-editor.json';
import sl from '@/data/sl/tools-ui/image-resize-editor.json';
import el from '@/data/el/tools-ui/image-resize-editor.json';
import bg from '@/data/bg/tools-ui/image-resize-editor.json';
import uk from '@/data/uk/tools-ui/image-resize-editor.json';

export const ui = { pl, en, de, es, fr, pt, it, ro, nl, hu, tr, cs, sv, sq, da, no, fi, sk, hr, lt, sl, el, bg, uk } as const satisfies Record<Locale, unknown>;

export type UiLocale = (typeof ui)[Locale];
