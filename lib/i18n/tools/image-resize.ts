import type { Locale } from '@/lib/LocaleContext';

import pl from '@/data/pl/tools-ui/image-resize.json';
import en from '@/data/en/tools-ui/image-resize.json';
import de from '@/data/de/tools-ui/image-resize.json';
import es from '@/data/es/tools-ui/image-resize.json';
import fr from '@/data/fr/tools-ui/image-resize.json';
import pt from '@/data/pt/tools-ui/image-resize.json';
import it from '@/data/it/tools-ui/image-resize.json';
import ro from '@/data/ro/tools-ui/image-resize.json';
import nl from '@/data/nl/tools-ui/image-resize.json';
import hu from '@/data/hu/tools-ui/image-resize.json';
import id from '@/data/id/tools-ui/image-resize.json';
import vi from '@/data/vi/tools-ui/image-resize.json';
import tr from '@/data/tr/tools-ui/image-resize.json';
import tl from '@/data/tl/tools-ui/image-resize.json';
import sw from '@/data/sw/tools-ui/image-resize.json';
import ms from '@/data/ms/tools-ui/image-resize.json';
import cs from '@/data/cs/tools-ui/image-resize.json';
import sv from '@/data/sv/tools-ui/image-resize.json';
import sq from '@/data/sq/tools-ui/image-resize.json';
import da from '@/data/da/tools-ui/image-resize.json';
import no from '@/data/no/tools-ui/image-resize.json';
import fi from '@/data/fi/tools-ui/image-resize.json';
import sk from '@/data/sk/tools-ui/image-resize.json';
import hr from '@/data/hr/tools-ui/image-resize.json';
import lt from '@/data/lt/tools-ui/image-resize.json';
import sl from '@/data/sl/tools-ui/image-resize.json';

export const ui = { pl, en, de, es, fr, pt, it, ro, nl, hu, id, vi, tr, tl, sw, ms, cs, sv, sq, da, no, fi, sk, hr, lt, sl } as const satisfies Record<Locale, unknown>;

export type UiLocale = (typeof ui)[Locale];
