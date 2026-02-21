import type { Locale } from '@/lib/LocaleContext';

import pl from '@/data/pl/tools-ui/wcag-contrast.json';
import en from '@/data/en/tools-ui/wcag-contrast.json';
import de from '@/data/de/tools-ui/wcag-contrast.json';
import es from '@/data/es/tools-ui/wcag-contrast.json';
import fr from '@/data/fr/tools-ui/wcag-contrast.json';
import pt from '@/data/pt/tools-ui/wcag-contrast.json';
import it from '@/data/it/tools-ui/wcag-contrast.json';
import ro from '@/data/ro/tools-ui/wcag-contrast.json';
import nl from '@/data/nl/tools-ui/wcag-contrast.json';
import hu from '@/data/hu/tools-ui/wcag-contrast.json';
import tr from '@/data/tr/tools-ui/wcag-contrast.json';
import cs from '@/data/cs/tools-ui/wcag-contrast.json';
import sv from '@/data/sv/tools-ui/wcag-contrast.json';
import sq from '@/data/sq/tools-ui/wcag-contrast.json';
import da from '@/data/da/tools-ui/wcag-contrast.json';
import no from '@/data/no/tools-ui/wcag-contrast.json';
import fi from '@/data/fi/tools-ui/wcag-contrast.json';
import sk from '@/data/sk/tools-ui/wcag-contrast.json';
import hr from '@/data/hr/tools-ui/wcag-contrast.json';
import lt from '@/data/lt/tools-ui/wcag-contrast.json';
import sl from '@/data/sl/tools-ui/wcag-contrast.json';
import el from '@/data/el/tools-ui/wcag-contrast.json';
import bg from '@/data/bg/tools-ui/wcag-contrast.json';
import uk from '@/data/uk/tools-ui/wcag-contrast.json';

export const ui = { pl, en, de, es, fr, pt, it, ro, nl, hu, tr, cs, sv, sq, da, no, fi, sk, hr, lt, sl, el, bg, uk } as const satisfies Record<Locale, unknown>;
