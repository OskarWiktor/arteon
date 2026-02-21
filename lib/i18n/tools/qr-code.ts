import type { Locale } from '@/lib/LocaleContext';

import pl from '@/data/pl/tools-ui/qr-code.json';
import en from '@/data/en/tools-ui/qr-code.json';
import de from '@/data/de/tools-ui/qr-code.json';
import es from '@/data/es/tools-ui/qr-code.json';
import fr from '@/data/fr/tools-ui/qr-code.json';
import pt from '@/data/pt/tools-ui/qr-code.json';
import it from '@/data/it/tools-ui/qr-code.json';
import ro from '@/data/ro/tools-ui/qr-code.json';
import nl from '@/data/nl/tools-ui/qr-code.json';
import hu from '@/data/hu/tools-ui/qr-code.json';
import tr from '@/data/tr/tools-ui/qr-code.json';
import cs from '@/data/cs/tools-ui/qr-code.json';
import sv from '@/data/sv/tools-ui/qr-code.json';
import sq from '@/data/sq/tools-ui/qr-code.json';
import da from '@/data/da/tools-ui/qr-code.json';
import no from '@/data/no/tools-ui/qr-code.json';
import fi from '@/data/fi/tools-ui/qr-code.json';
import sk from '@/data/sk/tools-ui/qr-code.json';
import hr from '@/data/hr/tools-ui/qr-code.json';
import lt from '@/data/lt/tools-ui/qr-code.json';
import sl from '@/data/sl/tools-ui/qr-code.json';
import el from '@/data/el/tools-ui/qr-code.json';
import bg from '@/data/bg/tools-ui/qr-code.json';
import uk from '@/data/uk/tools-ui/qr-code.json';

export const ui = { pl, en, de, es, fr, pt, it, ro, nl, hu, tr, cs, sv, sq, da, no, fi, sk, hr, lt, sl, el, bg, uk } as const satisfies Record<Locale, unknown>;
