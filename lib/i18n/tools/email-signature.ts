import type { Locale } from '@/lib/LocaleContext';

import pl from '@/data/pl/tools-ui/email-signature.json';
import en from '@/data/en/tools-ui/email-signature.json';
import de from '@/data/de/tools-ui/email-signature.json';
import es from '@/data/es/tools-ui/email-signature.json';
import fr from '@/data/fr/tools-ui/email-signature.json';
import pt from '@/data/pt/tools-ui/email-signature.json';
import it from '@/data/it/tools-ui/email-signature.json';
import ro from '@/data/ro/tools-ui/email-signature.json';
import nl from '@/data/nl/tools-ui/email-signature.json';
import hu from '@/data/hu/tools-ui/email-signature.json';
import id from '@/data/id/tools-ui/email-signature.json';
import vi from '@/data/vi/tools-ui/email-signature.json';
import tr from '@/data/tr/tools-ui/email-signature.json';
import tl from '@/data/tl/tools-ui/email-signature.json';
import sw from '@/data/sw/tools-ui/email-signature.json';
import ms from '@/data/ms/tools-ui/email-signature.json';
import cs from '@/data/cs/tools-ui/email-signature.json';
import sv from '@/data/sv/tools-ui/email-signature.json';
import sq from '@/data/sq/tools-ui/email-signature.json';
import da from '@/data/da/tools-ui/email-signature.json';
import no from '@/data/no/tools-ui/email-signature.json';
import fi from '@/data/fi/tools-ui/email-signature.json';
import sk from '@/data/sk/tools-ui/email-signature.json';
import hr from '@/data/hr/tools-ui/email-signature.json';
import lt from '@/data/lt/tools-ui/email-signature.json';
import sl from '@/data/sl/tools-ui/email-signature.json';
import el from '@/data/el/tools-ui/email-signature.json';
import bg from '@/data/bg/tools-ui/email-signature.json';
import ha from '@/data/ha/tools-ui/email-signature.json';
import yo from '@/data/yo/tools-ui/email-signature.json';
import af from '@/data/af/tools-ui/email-signature.json';
import uk from '@/data/uk/tools-ui/email-signature.json';
import ceb from '@/data/ceb/tools-ui/email-signature.json';
import ig from '@/data/ig/tools-ui/email-signature.json';
import hi from '@/data/hi/tools-ui/email-signature.json';
import bn from '@/data/bn/tools-ui/email-signature.json';

export const ui = { pl, en, de, es, fr, pt, it, ro, nl, hu, id, vi, tr, tl, sw, ms, cs, sv, sq, da, no, fi, sk, hr, lt, sl, el, bg, ha, yo, af, uk, ceb, ig, hi, bn } as const satisfies Record<
  Locale,
  unknown
>;

export type EmailSignatureUi = (typeof ui)[Locale];
