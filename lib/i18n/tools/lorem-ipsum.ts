import type { Locale } from '@/lib/LocaleContext';

import pl from '@/data/pl/tools-ui/lorem-ipsum.json';
import en from '@/data/en/tools-ui/lorem-ipsum.json';
import de from '@/data/de/tools-ui/lorem-ipsum.json';
import es from '@/data/es/tools-ui/lorem-ipsum.json';
import fr from '@/data/fr/tools-ui/lorem-ipsum.json';
import pt from '@/data/pt/tools-ui/lorem-ipsum.json';
import it from '@/data/it/tools-ui/lorem-ipsum.json';
import ro from '@/data/ro/tools-ui/lorem-ipsum.json';
import nl from '@/data/nl/tools-ui/lorem-ipsum.json';
import hu from '@/data/hu/tools-ui/lorem-ipsum.json';
import cs from '@/data/cs/tools-ui/lorem-ipsum.json';
import sv from '@/data/sv/tools-ui/lorem-ipsum.json';
import da from '@/data/da/tools-ui/lorem-ipsum.json';
import no from '@/data/no/tools-ui/lorem-ipsum.json';
import fi from '@/data/fi/tools-ui/lorem-ipsum.json';
import el from '@/data/el/tools-ui/lorem-ipsum.json';

export const ui = { pl, en, de, es, fr, pt, it, ro, nl, hu, cs, sv, da, no, fi, el } as const satisfies Record<Locale, unknown>;
