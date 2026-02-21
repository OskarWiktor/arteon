import type { Locale } from '@/lib/LocaleContext';

import pl from '@/data/pl/tools-ui/palette-extractor.json';
import en from '@/data/en/tools-ui/palette-extractor.json';
import de from '@/data/de/tools-ui/palette-extractor.json';
import es from '@/data/es/tools-ui/palette-extractor.json';
import fr from '@/data/fr/tools-ui/palette-extractor.json';
import pt from '@/data/pt/tools-ui/palette-extractor.json';
import it from '@/data/it/tools-ui/palette-extractor.json';
import ro from '@/data/ro/tools-ui/palette-extractor.json';
import nl from '@/data/nl/tools-ui/palette-extractor.json';
import hu from '@/data/hu/tools-ui/palette-extractor.json';
import tr from '@/data/tr/tools-ui/palette-extractor.json';
import cs from '@/data/cs/tools-ui/palette-extractor.json';
import sv from '@/data/sv/tools-ui/palette-extractor.json';
import sq from '@/data/sq/tools-ui/palette-extractor.json';
import da from '@/data/da/tools-ui/palette-extractor.json';
import no from '@/data/no/tools-ui/palette-extractor.json';
import fi from '@/data/fi/tools-ui/palette-extractor.json';
import sk from '@/data/sk/tools-ui/palette-extractor.json';
import hr from '@/data/hr/tools-ui/palette-extractor.json';
import lt from '@/data/lt/tools-ui/palette-extractor.json';
import sl from '@/data/sl/tools-ui/palette-extractor.json';
import el from '@/data/el/tools-ui/palette-extractor.json';
import bg from '@/data/bg/tools-ui/palette-extractor.json';
import uk from '@/data/uk/tools-ui/palette-extractor.json';

export const ui = { pl, en, de, es, fr, pt, it, ro, nl, hu, tr, cs, sv, sq, da, no, fi, sk, hr, lt, sl, el, bg, uk } as const satisfies Record<Locale, unknown>;
