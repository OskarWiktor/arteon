import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'sq' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: { title: meta.title, description: meta.description, url: toAbsoluteUrl('/sq/politika-e-privatesise'), type: 'website' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Politika e Privatesise</h1>
          <p className="mt-2 text-sm opacity-70">
            Versioni: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Kontrolluesi i te Dhenave">
            <p>Kontrolluesi i te dhenave personale eshte Arteon, me seli ne komunen Czernichow, Zagacie, ul. Jasminowa 36, 32-070, Poloni.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontakti: <strong>kontakt@arteonagency.pl</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Fusha e te Dhenave te Mbledhura">
            <ul className="list-disc space-y-1 pl-6">
              <li>te dhena te derguara nepermjet formes se kontaktit (emri, mbiemri, email, permbajtja e mesazhit),</li>
              <li>te dhena teknike te mbledhura automatikisht (adresa IP, informacioni i pajisjes, cookies),</li>
              <li>te dhena analitike nga Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics dhe Vercel Speed Insights,</li>
              <li>te dhena analitike nga Metricool (statistika vizitash, burime trafiku),</li>
              <li>te dhena te mbledhura nga Google AdSense per qellime te shfaqjes se reklamave (identifikues reklamash, cookies reklamash, te dhena nderveprimesh reklamash),</li>
              <li>regjistrime te serverit dhe ngjarje sigurie (p.sh. vula kohore, adresa IP, koka kerkesash).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Qellimet dhe Baza Ligjore e Perpunimit">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Komunikimi me klientin</strong> -- pergjigjja ndaj pyetjeve nga forma e kontaktit (Neni 6(1)(b) dhe (f) GDPR).
              </li>
              <li>
                <strong>Marketingu dhe analitika</strong> -- statistikat e faqes, optimizimi i permbajtjes (Neni 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Ofrimi i sherbimeve</strong> -- pergatitja e ofertave, kontratave, faturave (Neni 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Detyrimet ligjore</strong> -- p.sh. ruajtja e dokumentacionit kontabel (Neni 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Siguria dhe pretendimet</strong> -- mirembajtja e regjistrimeve, parandalimi i abuzimit, vendosja/zbatimi/mbrojtja e pretendimeve (Neni 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Shfaqja e reklamave</strong> -- shfaqja e reklamave te bazuara ne interes nepermjet Google AdSense (Neni 6(1)(a) GDPR -- pelqimi i perdoruesit i dhene nepermjet banderit te
                cookies).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Cookies">
            <p>Faqja e internetit perdor cookies per qellimet e meposhtme:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>sigurimi i funksionimit te duhur te faqes se internetit,</li>
              <li>analiza e trafikut (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>qellime marketingu,</li>
              <li>shfaqja e reklamave te bazuara ne interes (Google AdSense / DoubleClick).</li>
            </ul>
            <p>Google AdSense mund te perdore cookies DoubleClick per te shpernare reklama bazuar ne vizitat e meparshme te perdoruesit ne faqen tone ose faqe te tjera.</p>
            <p>
              Mund te caktivizoni reklamat e personalizuara ne{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Parametrat e Google Ads
              </a>{' '}
              ose ne{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>
              Faqja e internetit perdor Google Consent Mode v2. Kjo do te thote qe skriptet analitike dhe reklamuese te Google nuk mbledhin te dhena derisa perdoruesi te jape pelqimin nepermjet
              banderit te cookies.
            </p>
            <p>Mund te menaxhoni cookies ne parametrat e shfletuesit. Kufizimi i cookies mund te ndikoje disa vecori te faqes se internetit.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Marresit e te Dhenave">
            <p>Te dhenat mund te ndahen me subjekte qe na mbeshtesin ne ofrimin e sherbimeve, si:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>ofruesi i hosting/aplikacionit (p.sh. Vercel),</li>
              <li>ofruesit e mjeteve analitike (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>ofruesi i sherbimeve reklamuese (Google Ireland Ltd. -- Google AdSense),</li>
              <li>firma kontabiliteti, perpunues pagesash ose keshilltar ligjor -- nese eshte e nevojshme.</li>
            </ul>
            <p>Te gjithe marresit perpunojne te dhenat ne perputhje me GDPR bazuar ne marreveshje te pershtatshme.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Marreveshja e Perpunimit te te Dhenave (DPA)">
            <p>
              Me kerkese, krijojme marreveshje perpunimi te te dhenave (DPA) kur perpunojme te dhena ne emer te klientit (p.sh. ne kuader te mirembajtjes se faqes, konfigurimit te mjeteve ose
              sistemeve).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Transferimi i te Dhenave Jashte EEA">
            <p>
              Google dhe Vercel mund te perpunojne te dhena jashte Zones Ekonomike Europiane. Zbatohen mbrojtje te pershtatshme ligjore (perfshire Klaulozat Standarde Kontraktuale te miratuara nga
              Komisioni Europian) dhe, kur eshte e mundur, masa teknike (pseudonimizim, minimizim).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Periudha e Ruajtjes se te Dhenave">
            <ul className="list-disc space-y-1 pl-6">
              <li>Te dhenat e formes se kontaktit -- deri ne 12 muaj pas perfundimit te korrespondences.</li>
              <li>Te dhenat e klientit -- per periudhen e kerkuar nga ligji (dokumentacioni kontabel).</li>
              <li>Te dhenat analitike -- sipas politikes se Google Analytics (p.sh. 26 muaj).</li>
              <li>Regjistrimet -- per periudhen e nevojshme per sigurine dhe llogaridhenien (zakonisht deri ne 12 muaj, pervec nese rregulloret percaktojne ndryshe).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Te Drejtat Tuaja">
            <p>Keni te drejte te:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>aksesoni te dhenat tuaja dhe merrni nje kopje te tyre,</li>
              <li>korrigjimin e te dhenave,</li>
              <li>fshirjen e te dhenave,</li>
              <li>kufizimin e perpunimit,</li>
              <li>transportueshmerine e te dhenave,</li>
              <li>kundershtimin ndaj perpunimit (perfshire marketingun),</li>
              <li>paraqitjen e nje ankese prane autoritetit mbikeqyres perkates (ne Poloni: Presidenti i Zyres per Mbrojtjen e te Dhenave Personale, UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Dhenia Vullnetare e te Dhenave">
            <p>Dhenia e te dhenave personale eshte vullnetare, por e nevojshme per kontakt ose ofrimin e sherbimeve.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Masat e Sigurise">
            <p>Zbatojme masa teknike dhe organizative per te mbrojtur te dhenat personale nga aksesi i paautorizuar, humbja ose shkaterrimi.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Ndryshimet e Politikes">
            <p>Kjo politike privatesie mund te perditësohet per te pasqyruar ndryshimet ne legjislacion ose teknologji. Versioni me i fundit eshte gjithmone i disponueshem ne kete faqe.</p>
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
