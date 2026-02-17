import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'yo' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/yo/ilana-asiri'),
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
          <h1>Ìlànà àṣírí</h1>
          <p className="mt-2 text-sm opacity-70">
            Àtúnyẹ̀wò: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Olùdarí dátà">
            <p>Olùdarí dátà tìkan ni Arteon tí ilé iṣẹ́ rẹ̀ wà ní àgbègbè Czernichów, Zagacie, ul. Jasminowa 36, 32-070, Poland.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Ìkànsí: <strong>kontakt@arteonagency.pl</strong>, tẹlifóònù: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Ìwọ̀n dátà tí a ń kó jọ">
            <ul className="list-disc space-y-1 pl-6">
              <li>dátà láti fọ́ọ̀mù ìkànsí (orúkọ, orúkọ ìdílé, ímeèlì, àkóónú),</li>
              <li>dátà ìmọ̀-ẹ̀rọ tí a kó jọ fúnra rẹ̀ (IP, dátà ẹ̀rọ, cookies),</li>
              <li>dátà àyẹ̀wò láti Google Analytics 4, Ahrefs, Vercel Analytics àti Vercel Speed Insights,</li>
              <li>dátà àyẹ̀wò láti Metricool,</li>
              <li>dátà tí Google AdSense ń kó jọ fún fífi ìpolówó hàn,</li>
              <li>àwọn àkọsílẹ̀ sàáfà àti ìṣẹ̀lẹ̀ ààbò.</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Ète àti ìpìlẹ̀ òfin">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Ìbánisọ̀rọ̀ pẹ̀lú àwọn oníbàárà</strong> — ṣíṣe àwọn ìbéèrè (Abala 6(1)(b) àti (f) GDPR).
              </li>
              <li>
                <strong>Títa àti àyẹ̀wò</strong> — ìṣirò, ìmúdàgbà (Abala 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Pípèsè iṣẹ́</strong> — àṣeṣe, àdéhùn, ìwé owó (Abala 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Ojúṣe òfin</strong> — àwọn ìwé ìṣirò owó (Abala 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Ààbò</strong> — àkọsílẹ̀, ìdènà ìlòkulò (Abala 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Fífi ìpolówó hàn</strong> — nípasẹ̀ Google AdSense (Abala 6(1)(a) GDPR — ìfọwọ́sí).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Cookies">
            <p>Ojú-ìwé ayélujára náà ń lo cookies fún:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>ṣíṣe dáadáa,</li>
              <li>àyẹ̀wò ìjàbọ̀ (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li>
              <li>ète títa,</li>
              <li>fífi ìpolówó hàn (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              O lè pa ìpolówó àdáni tì ní{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                ètò Google Ads
              </a>{' '}
              tàbí ní{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Ojú-ìwé náà ń lo Google Consent Mode v2.</p>
            <p>O lè ṣàkóso cookies nínú ètò fèrèsè rẹ.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Àwọn olùgbà dátà">
            <ul className="list-disc space-y-1 pl-6">
              <li>olùpèsè àyè-ìtọ́jú (Vercel),</li>
              <li>àwọn olùpèsè àyẹ̀wò (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>olùpèsè ìpolówó (Google Ireland Ltd. — Google AdSense),</li>
              <li>olùṣàyẹ̀wò, olùṣe ìsanwó tàbí agbẹjọ́rò — tí ó bá yẹ.</li>
            </ul>
            <p>Gbogbo àwọn olùgbà ṣe àṣàyàn dátà gẹ́gẹ́ bí GDPR.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Àdéhùn ṣíṣe (DPA)">
            <p>Lórí ìbéèrè, a ṣe àdéhùn ṣíṣe dátà (DPA) nígbà tí a bá ṣe dátà fún oníbàárà.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Gbígbé lọ sí ìta EEA">
            <p>Google àti Vercel lè ṣe dátà ní ìta EEA. A ń lo àwọn ìgbésẹ̀ òfin tí ó yẹ.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Àkókò ìpamọ́">
            <ul className="list-disc space-y-1 pl-6">
              <li>Fọ́ọ̀mù ìkànsí — títí di oṣù 12.</li>
              <li>Dátà oníbàárà — gẹ́gẹ́ bí òfin.</li>
              <li>Àyẹ̀wò — gẹ́gẹ́ bí Google Analytics (àpẹẹrẹ oṣù 26).</li>
              <li>Àkọsílẹ̀ — títí di oṣù 12.</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Àwọn ẹ̀tọ́ rẹ">
            <p>O ní ẹ̀tọ́ láti:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>wọlé sí dátà rẹ,</li>
              <li>àtúnṣe,</li>
              <li>píparẹ́,</li>
              <li>dídín ṣíṣe kù,</li>
              <li>gbígbé,</li>
              <li>àtakò (pẹ̀lú títa),</li>
              <li>fi ẹ̀sùn sí ajọ tí ó yẹ (ní Poland: UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Ìfẹ́-inú">
            <p>Fífi dátà tìkan fúnni jẹ́ ìfẹ́-inú ṣùgbọ́n ó jẹ́ pàtàkì fún ìbánisọ̀rọ̀ tàbí pípèsè iṣẹ́.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Àwọn ìgbésẹ̀ ààbò">
            <p>A ń lo àwọn ìgbésẹ̀ ìmọ̀-ẹ̀rọ àti ti ètò láti dáàbòbò dátà tìkan.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Àwọn àyípadà ìlànà">
            <p>Ìlànà àṣírí yìí lè jẹ́ ìmúdójúìwọ̀n. Àtúnyẹ̀wò tó kẹ̀hìn wà ní ojú-ìwé yìí nígbà gbogbo.</p>
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
