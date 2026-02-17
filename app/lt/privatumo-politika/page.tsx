import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'lt' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/lt/privatumo-politika'),
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
          <h1>Privatumo politika</h1>
          <p className="mt-2 text-sm opacity-70">
            Versija: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Duomenų valdytojas">
            <p>Asmens duomenų valdytojas yra Arteon, registruotas Czernichów savivaldybėje, Zagacie, ul. Jasminowa 36, 32-070, Lenkija.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontaktai: <strong>kontakt@arteonagency.pl</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Renkamų duomenų apimtis">
            <ul className="list-disc space-y-1 pl-6">
              <li>duomenys, pateikti per kontaktinę formą (vardas, pavardė, el. paštas, žinutės turinys),</li>
              <li>automatiškai renkami techniniai duomenys (IP adresas, įrenginio informacija, slapukai),</li>
              <li>analitiniai duomenys iš Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics ir Vercel Speed Insights,</li>
              <li>Metricool analitiniai duomenys (lankytojų statistika, srauto šaltiniai),</li>
              <li>Google AdSense renkami duomenys reklamoms rodyti (reklamos identifikatoriai, reklamos slapukai, sąveikos su reklamomis duomenys),</li>
              <li>serverio žurnalai ir saugumo įvykiai (pvz., laiko žymos, IP adresai, užklausų antraštės).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Tvarkymo tikslai ir teisinis pagrindas">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Komunikacija su klientais</strong> — užklausų iš kontaktinės formos tvarkymas (BDAR 6 str. 1 d. b ir f punktai).
              </li>
              <li>
                <strong>Rinkodara ir analitika</strong> — svetainės statistika, turinio optimizavimas (BDAR 6 str. 1 d. f punktas).
              </li>
              <li>
                <strong>Paslaugų teikimas</strong> — pasiūlymų, sutarčių ir sąskaitų rengimas (BDAR 6 str. 1 d. b punktas).
              </li>
              <li>
                <strong>Teisinės prievolės</strong> — pvz., buhalterinių dokumentų saugojimas (BDAR 6 str. 1 d. c punktas).
              </li>
              <li>
                <strong>Saugumas ir reikalavimai</strong> — žurnalų tvarkymas, piktnaudžiavimo prevencija, reikalavimų nustatymas/vykdymas/gynimas (BDAR 6 str. 1 d. f punktas).
              </li>
              <li>
                <strong>Reklamų rodymas</strong> — interesais pagrįstų reklamų rodymas per Google AdSense (BDAR 6 str. 1 d. a punktas — sutikimas per slapukų juostą).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Slapukai">
            <p>Svetainė naudoja slapukus šiems tikslams:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>tinkamam svetainės veikimui užtikrinti,</li>
              <li>srauto analizei (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>rinkodaros tikslams,</li>
              <li>interesais pagrįstoms reklamoms rodyti (Google AdSense / DoubleClick).</li>
            </ul>
            <p>Google AdSense gali naudoti DoubleClick slapukus reklamoms rodyti pagal ankstesnius apsilankymus mūsų ar kitose svetainėse.</p>
            <p>
              Personalizuotas reklamas galite išjungti{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Google Ads nustatymuose
              </a>{' '}
              arba adresu{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Svetainė naudoja Google Consent Mode v2. Tai reiškia, kad Google analitikos ir reklamos scenarijai nerenka duomenų, kol naudotojas nesuteikia sutikimo per slapukų juostą.</p>
            <p>Slapukus galite valdyti naršyklės nustatymuose. Slapukų ribojimas gali paveikti kai kurias svetainės funkcijas.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Duomenų gavėjai">
            <p>Duomenys gali būti dalijami su subjektais, padedančiais mums teikti paslaugas, pvz.:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>prieglobos/aplikacijos tiekėjas (pvz., Vercel),</li>
              <li>analitinių įrankių tiekėjai (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>reklamos paslaugų tiekėjas (Google Ireland Ltd. — Google AdSense),</li>
              <li>audito įmonė, mokėjimų tarpininkas arba teisinis patarėjas — pagal poreikį.</li>
            </ul>
            <p>Visi gavėjai tvarko duomenis pagal BDAR, remiantis atitinkamomis sutartimis.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Duomenų tvarkymo sutartis (DPA)">
            <p>Pagal prašymą sudarome duomenų tvarkymo sutartį (DPA), kai tvarkome duomenis kliento vardu (pvz., svetainės priežiūros, įrankių ar sistemų konfigūravimo metu).</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Duomenų perdavimas už EEE ribų">
            <p>
              Google ir Vercel gali tvarkyti duomenis už Europos ekonominės erdvės ribų. Taikomos tinkamos teisinės apsaugos priemonės (įskaitant Europos Komisijos patvirtintas standartines sutarčių
              sąlygas) ir, kai įmanoma, techninės priemonės (pseudonimizavimas, minimizavimas).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Duomenų saugojimo laikotarpis">
            <ul className="list-disc space-y-1 pl-6">
              <li>Kontaktinės formos duomenys — ne ilgiau kaip 12 mėnesių nuo korespondencijos pabaigos.</li>
              <li>Klientų duomenys — teisės aktų reikalaujamą laikotarpį (buhalteriniai dokumentai).</li>
              <li>Analitiniai duomenys — pagal Google Analytics taisykles (pvz., 26 mėnesius).</li>
              <li>Žurnalai — saugumo ir atskaitomybės reikalaujamą laikotarpį (paprastai ne ilgiau kaip 12 mėnesių, jei teisės aktai nenustato kitaip).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Jūsų teisės">
            <p>Turite teisę:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>susipažinti su savo duomenimis ir gauti jų kopiją,</li>
              <li>ištaisyti duomenis,</li>
              <li>ištrinti duomenis,</li>
              <li>apriboti tvarkymą,</li>
              <li>perkelti duomenis,</li>
              <li>nesutikti su tvarkymu (įskaitant rinkodarą),</li>
              <li>pateikti skundą kompetentingai priežiūros institucijai (Lenkijoje: Asmens duomenų apsaugos tarnybos vadovas, UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Duomenų teikimo savanoriškumas">
            <p>Asmens duomenų teikimas yra savanoriškas, bet būtinas norint susisiekti ar gauti paslaugas.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Saugumo priemonės">
            <p>Taikome technines ir organizacines priemones asmens duomenims apsaugoti nuo neteisėtos prieigos, praradimo ar sunaikinimo.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Politikos pakeitimai">
            <p>Ši privatumo politika gali būti atnaujinta dėl teisės aktų ar technologijų pokyčių. Naujausia versija visada prieinama šiame puslapyje.</p>
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
