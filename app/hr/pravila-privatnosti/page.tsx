import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'hr' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/hr/pravila-privatnosti'),
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
          <h1>Pravila privatnosti</h1>
          <p className="mt-2 text-sm opacity-70">
            Verzija: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Voditelj obrade">
            <p>Voditelj obrade osobnih podataka je Arteon sa sjedištem u općini Czernichów, Zagacie, ul. Jasminowa 36, 32-070, Poljska.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontakt: <strong>kontakt@arteonagency.pl</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Opseg prikupljenih podataka">
            <ul className="list-disc space-y-1 pl-6">
              <li>podaci poslani putem kontaktnog obrasca (ime, prezime, e-mail, sadržaj poruke),</li>
              <li>automatski prikupljeni tehnički podaci (IP adresa, podaci o uređaju, kolačići),</li>
              <li>analitički podaci iz Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics i Vercel Speed Insights,</li>
              <li>analitički podaci iz Metricoola (statistike posjeta, izvori prometa),</li>
              <li>podaci koje prikuplja Google AdSense za prikazivanje oglasa (identifikatori oglasa, kolačići za oglase, podaci o interakciji s oglasima),</li>
              <li>zapisnici poslužitelja i sigurnosni događaji (npr. vremenske oznake, IP adrese, zaglavlja zahtjeva).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Svrhe i pravna osnova obrade">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Komunikacija s klijentima</strong> — obrada upita iz kontaktnog obrasca (čl. 6. st. 1. t. b i f GDPR-a).
              </li>
              <li>
                <strong>Marketing i analitika</strong> — statistike web stranice, optimizacija sadržaja (čl. 6. st. 1. t. f GDPR-a).
              </li>
              <li>
                <strong>Pružanje usluga</strong> — priprema ponuda, ugovora i računa (čl. 6. st. 1. t. b GDPR-a).
              </li>
              <li>
                <strong>Zakonske obveze</strong> — npr. čuvanje računovodstvenih dokumenata (čl. 6. st. 1. t. c GDPR-a).
              </li>
              <li>
                <strong>Sigurnost i potraživanja</strong> — obrada zapisnika, sprječavanje zlouporabe, utvrđivanje/provođenje/obrana potraživanja (čl. 6. st. 1. t. f GDPR-a).
              </li>
              <li>
                <strong>Prikazivanje oglasa</strong> — prikazivanje oglasa na temelju interesa putem Google AdSensea (čl. 6. st. 1. t. a GDPR-a — privola putem bannera za kolačiće).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Kolačići">
            <p>Web stranica koristi kolačiće u sljedeće svrhe:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>osiguranje ispravnog funkcioniranja web stranice,</li>
              <li>analiza prometa (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>marketinške svrhe,</li>
              <li>prikazivanje oglasa na temelju interesa (Google AdSense / DoubleClick).</li>
            </ul>
            <p>Google AdSense može koristiti DoubleClick kolačiće za prikazivanje oglasa na temelju prethodnih posjeta našoj stranici ili drugim stranicama.</p>
            <p>
              Personalizirane oglase možete isključiti u{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                postavkama Google Ads
              </a>{' '}
              ili na{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Stranica koristi Google Consent Mode v2. To znači da Googleove analitičke i oglasne skripte ne prikupljaju podatke dok korisnik ne da privolu putem bannera za kolačiće.</p>
            <p>Kolačićima možete upravljati u postavkama preglednika. Ograničavanje kolačića može utjecati na neke funkcije stranice.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Primatelji podataka">
            <p>Podaci se mogu dijeliti sa subjektima koji nas podržavaju u pružanju usluga, kao što su:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>pružatelj hostinga/aplikacije (npr. Vercel),</li>
              <li>pružatelji analitičkih alata (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>pružatelj oglasnih usluga (Google Ireland Ltd. — Google AdSense),</li>
              <li>revizorska tvrtka, posrednik plaćanja ili pravni savjetnik — prema potrebi.</li>
            </ul>
            <p>Svi primatelji obrađuju podatke u skladu s GDPR-om na temelju odgovarajućih ugovora.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Ugovor o obradi podataka (DPA)">
            <p>Na zahtjev sklapamo ugovor o obradi podataka (DPA) kada obrađujemo podatke u ime klijenta (npr. pri održavanju web stranice, konfiguraciji alata ili sustava).</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Prijenos podataka izvan EGP-a">
            <p>
              Google i Vercel mogu obrađivati podatke izvan Europskog gospodarskog prostora. Primjenjuju se odgovarajuće pravne zaštitne mjere (uključujući standardne ugovorne klauzule koje je
              odobrila Europska komisija) te, koliko je moguće, tehničke mjere (pseudonimizacija, minimizacija).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Razdoblje čuvanja podataka">
            <ul className="list-disc space-y-1 pl-6">
              <li>Podaci iz kontaktnog obrasca — najviše 12 mjeseci od završetka korespondencije.</li>
              <li>Podaci klijenata — za vrijeme zakonom propisano (računovodstveni dokumenti).</li>
              <li>Analitički podaci — u skladu s pravilima Google Analyticsa (npr. 26 mjeseci).</li>
              <li>Zapisnici — za vrijeme potrebno za sigurnost i odgovornost (obično najviše 12 mjeseci, osim ako propisi ne zahtijevaju drugačije).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Vaša prava">
            <p>Imate pravo na:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>pristup svojim podacima i dobivanje njihove kopije,</li>
              <li>ispravak podataka,</li>
              <li>brisanje podataka,</li>
              <li>ograničavanje obrade,</li>
              <li>prenosivost podataka,</li>
              <li>prigovor obradi (uključujući marketing),</li>
              <li>podnošenje pritužbe nadležnom nadzornom tijelu (u Poljskoj: Predsjednik Ureda za zaštitu osobnih podataka, UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Dobrovoljnost davanja podataka">
            <p>Davanje osobnih podataka je dobrovoljno, ali nužno za kontakt ili pružanje usluga.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Sigurnosne mjere">
            <p>Primjenjujemo tehničke i organizacijske mjere za zaštitu osobnih podataka od neovlaštenog pristupa, gubitka ili uništenja.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Izmjene pravila">
            <p>Ova pravila privatnosti mogu se ažurirati zbog promjena u zakonodavstvu ili tehnologijama. Najnovija verzija uvijek je dostupna na ovoj stranici.</p>
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
