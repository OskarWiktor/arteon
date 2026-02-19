import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'ig' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/ig/iwu-nzuzo'),
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
          <h1>Amụma nzuzo</h1>
          <p className="mt-2 text-sm opacity-70">
            Mmezi ikpeazụ: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Onye njikwa data">
            <p>Onye njikwa data onwe ya bụ Arteon nke ụlọ ọrụ ya dị na mpaghara Czernichów, Zagacie, ul. Jasminowa 36, 32-070, Poland.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kpọtụrụ: <strong>kontakt@arteonagency.pl</strong>, ekwentị: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Oke data a na-anakọta">
            <ul className="list-disc space-y-1 pl-6">
              <li>data site na fọọmụ kpọtụrụ (aha, aha ezinụlọ, email, ọdịnaya),</li>
              <li>data teknụzụ a na-anakọta na-akpaghị aka (IP, data ngwaọrụ, cookies),</li>
              <li>data nyocha site na Google Analytics 4, Ahrefs, Vercel Analytics na Vercel Speed Insights,</li>
              <li>data nyocha site na Metricool,</li>
              <li>data Google AdSense na-anakọta maka igosi mgbasa ozi,</li>
              <li>ndekọ sava na ihe omume nchekwa.</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Ebumnuche na ntọala iwu">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Nkwurịta ọnụ na ndị ahịa</strong> — ịhazi ajụjụ (Nkeji 6(1)(b) na (f) GDPR).
              </li>
              <li>
                <strong>Ahịa na nyocha</strong> — ọtụtụ, mmụba (Nkeji 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Inweta ọrụ</strong> — imezu nkwekọrịta, akwụkwọ ụgwọ (Nkeji 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Ọrụ iwu</strong> — akwụkwọ ụgwọ (Nkeji 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Nchekwa</strong> — ndekọ, igbochi ojiji ọjọọ (Nkeji 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Igosi mgbasa ozi</strong> — site na Google AdSense (Nkeji 6(1)(a) GDPR — nkwenye).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Cookies">
            <p>Weebụsaịtị a na-eji cookies maka:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>ịrụ ọrụ nke ọma,</li>
              <li>nyocha okporo ụzọ (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li>
              <li>ebumnuche ahịa,</li>
              <li>igosi mgbasa ozi (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Ị nwere ike ịgbanyụ mgbasa ozi nke onwe na{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                ntọala Google Ads
              </a>{' '}
              ma ọ bụ na{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Weebụsaịtị a na-eji Google Consent Mode v2.</p>
            <p>Ị nwere ike ịchịkwa cookies na ntọala ihe nchọgharị gị.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Ndị na-anata data">
            <ul className="list-disc space-y-1 pl-6">
              <li>onye na-enye ebe nchekwa (Vercel),</li>
              <li>ndị na-enye nyocha (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>onye na-enye mgbasa ozi (Google Ireland Ltd. — Google AdSense),</li>
              <li>onye nyocha, onye nhazi ụgwọ ma ọ bụ onye ndụmọdụ iwu — ma ọ dị mkpa.</li>
            </ul>
            <p>Ndị na-anata niile na-ahazi data dịka GDPR si dị.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Nkwekọrịta nhazi (DPA)">
            <p>Na arịrịọ, anyị na-arụ nkwekọrịta nhazi data (DPA) mgbe anyị na-ahazi data maka onye ahịa.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Nbufe gaa ebe dị na mpụga EEA">
            <p>Google na Vercel nwere ike ịhazi data na mpụga EEA. Anyị na-eji usoro iwu kwesịrị ekwesị.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Oge nchekwa">
            <ul className="list-disc space-y-1 pl-6">
              <li>Fọọmụ kpọtụrụ — ruo ọnwa 12.</li>
              <li>Data onye ahịa — dịka iwu si dị.</li>
              <li>Nyocha — dịka Google Analytics (ọmụmaatụ ọnwa 26).</li>
              <li>Ndekọ — ruo ọnwa 12.</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Ikike gị">
            <p>Ị nwere ikike:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>ịnweta data gị,</li>
              <li>ndozi,</li>
              <li>ihichapụ,</li>
              <li>ịbelata nhazi,</li>
              <li>nbufe,</li>
              <li>nnupụisi (gụnyere ahịa),</li>
              <li>itinye arịrịọ na ụlọ ọrụ kwesịrị ekwesị (na Poland: UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Ịnye n'aka">
            <p>Inye data onwe bụ nke ịnye n'aka mana ọ dị mkpa maka nkwurịta ọnụ ma ọ bụ inweta ọrụ.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Usoro nchekwa">
            <p>Anyị na-eji usoro teknụzụ na nhazi iji chekwaa data onwe.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Mgbanwe amụma">
            <p>A nwere ike ịmegharị amụma nzuzo a. Mmezi ikpeazụ dị na peeji a mgbe niile.</p>
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
