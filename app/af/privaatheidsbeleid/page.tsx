import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'af' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/af/privaatheidsbeleid'),
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
          <h1>Privaatheidsbeleid</h1>
          <p className="mt-2 text-sm opacity-70">
            Weergawe: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Databestuurder">
            <p>Die bestuurder van persoonlike data is Arteon met hoofkantoor in die gemeente Czernichów, Zagacie, ul. Jasminowa 36, 32-070, Pole.</p>
            <p>
              BTW-nommer: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontak: <strong>kontakt@arteonagency.pl</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Omvang van data">
            <ul className="list-disc space-y-1 pl-6">
              <li>data uit die kontakvorm (naam, van, e-pos, inhoud),</li>
              <li>outomaties versamelde tegniese data (IP, toesteldata, koekies),</li>
              <li>analitiese data van Google Analytics 4, Ahrefs, Vercel Analytics en Vercel Speed Insights,</li>
              <li>analitiese data van Metricool,</li>
              <li>data wat Google AdSense versamel vir advertensievertoning,</li>
              <li>bedienerloglêers en sekuriteitsgebeurtenisse.</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Doeleindes en regsbasis">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Kommunikasie met kliënte</strong> — verwerking van navrae (Art. 6(1)(b) en (f) GDPR).
              </li>
              <li>
                <strong>Bemarking en analise</strong> — statistieke, optimalisering (Art. 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Diensverskaffing</strong> — kwotasies, kontrakte, fakture (Art. 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Regsverpligtinge</strong> — rekeningkundige dokumente (Art. 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Sekuriteit</strong> — loglêers, misbruikvoorkoming (Art. 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Advertensievertoning</strong> — via Google AdSense (Art. 6(1)(a) GDPR — toestemming).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Koekies">
            <p>Die webwerf gebruik koekies vir:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>korrekte funksionering,</li>
              <li>verkeeranalise (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li>
              <li>bemarkingsdoeleindes,</li>
              <li>advertensievertoning (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Jy kan gepersonaliseerde advertensies deaktiveer in{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Google Ads-instellings
              </a>{' '}
              of by{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Die webwerf gebruik Google Consent Mode v2. Skrips versamel nie data totdat toestemming gegee word nie.</p>
            <p>Jy kan koekies bestuur in jou blaaierinstellings.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Data-ontvangers">
            <ul className="list-disc space-y-1 pl-6">
              <li>gasheerverskaffer (Vercel),</li>
              <li>analise-verskaffers (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>advertensieverskaffer (Google Ireland Ltd. — Google AdSense),</li>
              <li>ouditeur, betalingsverwerker of regsadviseur — indien nodig.</li>
            </ul>
            <p>Alle ontvangers verwerk data ooreenkomstig die GDPR.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Dataverwerkingsooreenkoms (DPA)">
            <p>Op versoek sluit ons 'n dataverwerkingsooreenkoms (DPA) wanneer ons data namens 'n kliënt verwerk.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Oordrag buite die EER">
            <p>Google en Vercel kan data buite die EER verwerk. Toepaslike regsmaatreëls word toegepas.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Bewaringstydperk">
            <ul className="list-disc space-y-1 pl-6">
              <li>Kontakvorm — tot 12 maande.</li>
              <li>Kliëntdata — volgens wetgewing.</li>
              <li>Analise — volgens Google Analytics (bv. 26 maande).</li>
              <li>Loglêers — tot 12 maande.</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Jou regte">
            <p>Jy het die reg om:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>toegang tot jou data te kry,</li>
              <li>regstelling,</li>
              <li>uitwissing,</li>
              <li>beperking van verwerking,</li>
              <li>oordraagbaarheid,</li>
              <li>beswaar (insluitend bemarking),</li>
              <li>'n klagte by die toepaslike owerheid in te dien (in Pole: UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Vrywilligheid">
            <p>Die verskaffing van persoonlike data is vrywillig maar nodig vir kommunikasie of diensverskaffing.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Sekuriteitsmaatreëls">
            <p>Ons pas tegniese en organisatoriese maatreëls toe om persoonlike data te beskerm.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Beleidveranderinge">
            <p>Hierdie privaatheidsbeleid kan opgedateer word. Die nuutste weergawe is altyd beskikbaar op hierdie bladsy.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <Gap size="xs" />
        </div>
        <TableOfContents rootSelector="#article-root" size="large" />
      </Wrapper>
      <ButtonToTop />
      <Gap />
    </>
  );
}
