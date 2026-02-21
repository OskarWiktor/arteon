import type { Locale } from '@/lib/LocaleContext';

import pl from '@/data/pl/tools-ui/favicon.json';
import en from '@/data/en/tools-ui/favicon.json';
import de from '@/data/de/tools-ui/favicon.json';
import es from '@/data/es/tools-ui/favicon.json';
import fr from '@/data/fr/tools-ui/favicon.json';
import pt from '@/data/pt/tools-ui/favicon.json';
import it from '@/data/it/tools-ui/favicon.json';
import ro from '@/data/ro/tools-ui/favicon.json';
import nl from '@/data/nl/tools-ui/favicon.json';
import hu from '@/data/hu/tools-ui/favicon.json';
import tr from '@/data/tr/tools-ui/favicon.json';
import cs from '@/data/cs/tools-ui/favicon.json';
import sv from '@/data/sv/tools-ui/favicon.json';
import sq from '@/data/sq/tools-ui/favicon.json';
import da from '@/data/da/tools-ui/favicon.json';
import no from '@/data/no/tools-ui/favicon.json';
import fi from '@/data/fi/tools-ui/favicon.json';
import sk from '@/data/sk/tools-ui/favicon.json';
import hr from '@/data/hr/tools-ui/favicon.json';
import lt from '@/data/lt/tools-ui/favicon.json';
import sl from '@/data/sl/tools-ui/favicon.json';
import el from '@/data/el/tools-ui/favicon.json';
import bg from '@/data/bg/tools-ui/favicon.json';
import uk from '@/data/uk/tools-ui/favicon.json';

export const ui = { pl, en, de, es, fr, pt, it, ro, nl, hu, tr, cs, sv, sq, da, no, fi, sk, hr, lt, sl, el, bg, uk } as const satisfies Record<Locale, unknown>;
