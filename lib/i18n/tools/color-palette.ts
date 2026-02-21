import type { Locale } from '@/lib/LocaleContext';

import pl from '@/data/pl/tools-ui/color-palette.json';
import en from '@/data/en/tools-ui/color-palette.json';
import de from '@/data/de/tools-ui/color-palette.json';
import es from '@/data/es/tools-ui/color-palette.json';
import fr from '@/data/fr/tools-ui/color-palette.json';
import pt from '@/data/pt/tools-ui/color-palette.json';
import it from '@/data/it/tools-ui/color-palette.json';
import ro from '@/data/ro/tools-ui/color-palette.json';
import nl from '@/data/nl/tools-ui/color-palette.json';
import hu from '@/data/hu/tools-ui/color-palette.json';
import tr from '@/data/tr/tools-ui/color-palette.json';
import cs from '@/data/cs/tools-ui/color-palette.json';
import sv from '@/data/sv/tools-ui/color-palette.json';
import sq from '@/data/sq/tools-ui/color-palette.json';
import da from '@/data/da/tools-ui/color-palette.json';
import no from '@/data/no/tools-ui/color-palette.json';
import fi from '@/data/fi/tools-ui/color-palette.json';
import sk from '@/data/sk/tools-ui/color-palette.json';
import hr from '@/data/hr/tools-ui/color-palette.json';
import lt from '@/data/lt/tools-ui/color-palette.json';
import sl from '@/data/sl/tools-ui/color-palette.json';
import el from '@/data/el/tools-ui/color-palette.json';
import bg from '@/data/bg/tools-ui/color-palette.json';
import uk from '@/data/uk/tools-ui/color-palette.json';

export const ui = { pl, en, de, es, fr, pt, it, ro, nl, hu, tr, cs, sv, sq, da, no, fi, sk, hr, lt, sl, el, bg, uk } as const satisfies Record<Locale, unknown>;
