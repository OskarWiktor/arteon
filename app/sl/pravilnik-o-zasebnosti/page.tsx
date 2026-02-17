import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'sl' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/sl/pravilnik-o-zasebnosti'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Pravilnik o zasebnosti</h1>
          <p className="mt-2 text-sm opacity-70">
            Različica: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Upravljavec podatkov">
            <p>Upravljavec osebnih podatkov je Arteon s sedežem v občini Czernichów, Zagacie, ul. Jasminowa 36, 32-070, Poljska.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontakt: <strong>kontakt@arteonagency.pl</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Obseg zbranih podatkov">
            <ul className="list-disc space-y-1 pl-6">
              <li>podatki, poslani prek kontaktnega obrazca (ime, priimek, e-pošta, vsebina sporočila),</li>
              <li>samodejno zbrani tehnični podatki (IP naslov, podatki o napravi, piškotki),</li>
              <li>analitični podatki iz Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics in Vercel Speed Insights,</li>
              <li>analitični podatki iz Metricoola (statistika obiskov, viri prometa),</li>
              <li>podatki, ki jih zbira Google AdSense za prikazovanje oglasov (identifikatorji oglasov, piškotki za oglase, podatki o interakciji z oglasi),</li>
              <li>dnevniki strežnika in varnostni dogodki (npr. časovni žigi, IP naslovi, glave zahtevkov).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Nameni in pravna podlaga obdelave">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Komunikacija s strankami</strong> — obdelava povpraševanj iz kontaktnega obrazca (čl. 6(1)(b) in (f) GDPR).
              </li>
              <li>
                <strong>Trženje in analitika</strong> — statistika spletne strani, optimizacija vsebine (čl. 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Zagotavljanje storitev</strong> — priprava ponudb, pogodb in računov (čl. 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Zakonske obveznosti</strong> — npr. hramba računovodskih dokumentov (čl. 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Varnost in zahtevki</strong> — obdelava dnevnikov, preprečevanje zlorab, uveljavljanje/izvajanje/obramba zahtevkov (čl. 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Prikazovanje oglasov</strong> — prikazovanje oglasov na podlagi interesov prek Google AdSense (čl. 6(1)(a) GDPR — privolitev prek pasice za piškotke).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Piškotki">
            <p>Spletna stran uporablja piškotke za naslednje namene:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>zagotavljanje pravilnega delovanja spletne strani,</li>
              <li>analiza prometa (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>trženjski nameni,</li>
              <li>prikazovanje oglasov na podlagi interesov (Google AdSense / DoubleClick).</li>
            </ul>
            <p>Google AdSense lahko uporablja piškotke DoubleClick za prikazovanje oglasov na podlagi prejšnjih obiskov naše ali drugih spletnih strani.</p>
            <p>
              Prilagojene oglase lahko izklopite v{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                nastavitvah Google Ads
              </a>{' '}
              ali na{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Stran uporablja Google Consent Mode v2. To pomeni, da Googlovi analitični in oglaševalski skripti ne zbirajo podatkov, dokler uporabnik ne da privolitve prek pasice za piškotke.</p>
            <p>Piškotke lahko upravljate v nastavitvah brskalnika. Omejevanje piškotkov lahko vpliva na nekatere funkcije strani.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Prejemniki podatkov">
            <p>Podatki se lahko delijo s subjekti, ki nas podpirajo pri zagotavljanju storitev, kot so:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>ponudnik gostovanja/aplikacije (npr. Vercel),</li>
              <li>ponudniki analitičnih orodij (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>ponudnik oglaševalskih storitev (Google Ireland Ltd. — Google AdSense),</li>
              <li>revizijska družba, posrednik plačil ali pravni svetovalec — po potrebi.</li>
            </ul>
            <p>Vsi prejemniki obdelujejo podatke v skladu z GDPR na podlagi ustreznih pogodb.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Pogodba o obdelavi podatkov (DPA)">
            <p>Na zahtevo sklenemo pogodbo o obdelavi podatkov (DPA), kadar obdelujemo podatke v imenu stranke (npr. pri vzdrževanju spletne strani, konfiguraciji orodij ali sistemov).</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Prenos podatkov zunaj EGP">
            <p>
              Google in Vercel lahko obdelujeta podatke zunaj Evropskega gospodarskega prostora. Uporabljajo se ustrezni pravni varnostni ukrepi (vključno s standardnimi pogodbenimi klavzulami, ki jih
              je odobrila Evropska komisija) ter, kolikor je mogoče, tehnični ukrepi (psevdonimizacija, minimizacija).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Obdobje hrambe podatkov">
            <ul className="list-disc space-y-1 pl-6">
              <li>Podatki iz kontaktnega obrazca — največ 12 mesecev od konca korespondence.</li>
              <li>Podatki strank — za zakonsko zahtevano obdobje (računovodski dokumenti).</li>
              <li>Analitični podatki — v skladu s pravili Google Analytics (npr. 26 mesecev).</li>
              <li>Dnevniki — za obdobje, potrebno za varnost in odgovornost (običajno največ 12 mesecev, razen če predpisi zahtevajo drugače).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Vaše pravice">
            <p>Imate pravico do:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>dostopa do svojih podatkov in pridobitve njihove kopije,</li>
              <li>popravka podatkov,</li>
              <li>izbrisa podatkov,</li>
              <li>omejitve obdelave,</li>
              <li>prenosljivosti podatkov,</li>
              <li>ugovora obdelavi (vključno s trženjem),</li>
              <li>vložitve pritožbe pri pristojnem nadzornem organu (na Poljskem: predsednik Urada za varstvo osebnih podatkov, UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Prostovoljnost posredovanja podatkov">
            <p>Posredovanje osebnih podatkov je prostovoljno, vendar nujno za vzpostavitev stika ali zagotavljanje storitev.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Varnostni ukrepi">
            <p>Izvajamo tehnične in organizacijske ukrepe za zaščito osebnih podatkov pred nepooblaščenim dostopom, izgubo ali uničenjem.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Spremembe pravilnika">
            <p>Ta pravilnik o zasebnosti se lahko posodobi zaradi sprememb zakonodaje ali tehnologij. Najnovejša različica je vedno na voljo na tej strani.</p>
          </SectionInfo>
          <Gap size="xs" />
        </div>
        <TableOfContents rootSelector="#article-root" size="large" />
      </Wrapper>
      <ButtonToTop />
      <Gap />
    </>
  );
}
