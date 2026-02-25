import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'ro' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/ro/politica-de-confidentialitate'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

export default function PoliticaDeConfidentialitatePage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Politica de confidențialitate</h1>
          <p className="mt-2 text-sm opacity-70">
            Versiune: <strong>13.02.2026</strong>
          </p>

          <Gap size="xs" />

          <SectionInfo title="1. Operatorul de date">
            <p>Operatorul datelor cu caracter personal este Arteon, cu sediul în comuna Czernichów, Zagacie, ul. Jaśminowa 36, 32-070, Polonia.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Contact: <strong>contact@arteonagency.com</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="2. Domeniul datelor colectate">
            <ul className="list-disc space-y-1 pl-6">
              <li>date transmise prin formularul de contact (prenume, nume, e-mail, conținutul mesajului),</li>
              <li>date tehnice colectate automat (adresa IP, informații despre dispozitiv, cookie-uri),</li>
              <li>date analitice de la Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics și Vercel Speed Insights,</li>
              <li>date analitice de la Metricool (statistici de vizite, surse de trafic),</li>
              <li>date colectate de Google AdSense în scopul afișării reclamelor (identificatori publicitari, cookie-uri publicitare, date privind interacțiunea cu reclamele),</li>
              <li>jurnale de server și evenimente de securitate (de ex. marcaje temporale, adresa IP, anteturi de solicitare).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="3. Scopurile și bazele legale ale prelucrării">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Contactul cu clienții</strong> - răspunsul la întrebările din formularul de contact (Art. 6 alin. 1 lit. b și f RGPD).
              </li>
              <li>
                <strong>Marketing și analiză</strong> - statistici site, optimizarea conținutului (Art. 6 alin. 1 lit. f RGPD).
              </li>
              <li>
                <strong>Prestarea serviciilor</strong> - pregătirea ofertelor, contractelor, facturilor (Art. 6 alin. 1 lit. b RGPD).
              </li>
              <li>
                <strong>Obligații legale</strong> - de ex. păstrarea documentației contabile (Art. 6 alin. 1 lit. c RGPD).
              </li>
              <li>
                <strong>Securitate și pretenții</strong> - menținerea jurnalelor, prevenirea abuzurilor, stabilirea/urmărirea/apărarea pretențiilor (Art. 6 alin. 1 lit. f RGPD).
              </li>
              <li>
                <strong>Afișarea reclamelor</strong> - afișarea reclamelor bazate pe interese prin Google AdSense (Art. 6 alin. 1 lit. a RGPD - consimțământul utilizatorului acordat prin bannerul de
                cookie-uri).
              </li>
            </ol>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="4. Cookie-uri">
            <p>Site-ul web utilizează cookie-uri în următoarele scopuri:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>asigurarea funcționării corecte a site-ului web,</li>
              <li>analiza traficului (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>scopuri de marketing,</li>
              <li>afișarea reclamelor bazate pe interese (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Google AdSense poate utiliza cookie-uri DoubleClick pentru a afișa reclame bazate pe vizitele anterioare ale utilizatorului pe site-ul nostru sau pe alte site-uri. Furnizorii terți
              (inclusiv Google) utilizează aceste cookie-uri pentru a afișa reclame pe baza istoricului de navigare.
            </p>
            <p>
              Puteți renunța la reclamele personalizate accesând{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Setările Google Ads
              </a>{' '}
              sau{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>
              Site-ul utilizează Google Consent Mode v2. Aceasta înseamnă că scripturile de analiză și publicitate Google nu colectează date până când utilizatorul își dă consimțământul prin bannerul
              de cookie-uri.
            </p>
            <p>Puteți gestiona cookie-urile în setările browserului. Restricționarea cookie-urilor poate afecta unele funcții ale site-ului web.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="5. Destinatarii datelor">
            <p>Datele pot fi partajate cu entități care ne sprijină în furnizarea serviciilor, cum ar fi:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>furnizori de hosting/aplicații (de ex. Vercel),</li>
              <li>furnizori de instrumente analitice (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>furnizori de servicii publicitare (Google Ireland Ltd. - Google AdSense),</li>
              <li>birou contabil, procesatori de plăți sau consilieri juridici — dacă este necesar.</li>
            </ul>
            <p>Toți destinatarii prelucrează datele în conformitate cu RGPD pe baza acordurilor corespunzătoare.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="6. Acord de prelucrare a datelor (DPA)">
            <p>
              La cerere, încheiem un acord de prelucrare a datelor (DPA) atunci când prelucrăm date în numele unui client (de ex. în cadrul întreținerii site-ului web, configurării instrumentelor sau
              sistemelor).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="7. Transferul datelor în afara SEE">
            <p>
              Google și Vercel pot prelucra date în afara Spațiului Economic European. Se aplică garanții legale adecvate (inclusiv Clauzele Contractuale Standard aprobate de Comisia Europeană) și,
              acolo unde este posibil, măsuri tehnice (pseudonimizare, minimizare).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="8. Perioada de păstrare a datelor">
            <ul className="list-disc space-y-1 pl-6">
              <li>Date din formularul de contact — până la 12 luni de la încheierea corespondenței.</li>
              <li>Date ale clienților — pentru perioada prevăzută de lege (documentație contabilă).</li>
              <li>Date analitice — conform politicii Google Analytics (de ex. 26 de luni).</li>
              <li>Jurnale — pentru perioada necesară securității și responsabilității (în general până la 12 luni, cu excepția cazului în care reglementările prevăd altfel).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="9. Drepturile dumneavoastră">
            <p>Aveți dreptul la:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>acces la datele dvs. și obținerea unei copii,</li>
              <li>rectificarea datelor,</li>
              <li>ștergerea datelor,</li>
              <li>restricționarea prelucrării,</li>
              <li>portabilitatea datelor,</li>
              <li>opoziție la prelucrare (inclusiv marketing),</li>
              <li>depunerea unei plângeri la autoritatea de supraveghere competentă (în Polonia: Președintele Oficiului pentru Protecția Datelor cu Caracter Personal, UODO).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="10. Furnizarea voluntară a datelor">
            <p>Furnizarea datelor cu caracter personal este voluntară, dar necesară pentru contactare sau prestarea serviciilor.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="11. Măsuri de securitate">
            <p>Aplicăm măsuri tehnice și organizatorice pentru a proteja datele cu caracter personal împotriva accesului neautorizat, pierderii sau distrugerii.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="12. Modificări ale politicii">
            <p>
              Această politică de confidențialitate poate fi actualizată pentru a reflecta modificări ale legislației sau tehnologiei. Versiunea actuală este întotdeauna disponibilă pe această pagină.
            </p>
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
