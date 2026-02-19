import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'ceb' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/ceb/palisiya-sa-pribasiya'),
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
          <h1>Palisiya sa Pribasiya</h1>
          <p className="mt-2 text-sm opacity-70">
            Bersyon: <strong>13.02.2026</strong>
          </p>
          <Gap size="xs" />
          <SectionInfo title="1. Tigdumala sa Datos">
            <p>Ang tigdumala sa personal nga datos mao ang Arteon, nga may opisina sa gmina Czernichow, Zagacie, ul. Jasminowa 36, 32-070, Poland.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontaka: <strong>kontakt@arteonagency.pl</strong>, tel.: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="2. Sakop sa Gikolekta nga Datos">
            <ul className="list-disc space-y-1 pl-6">
              <li>datos nga gipadala pinaagi sa contact form (ngalan, apelyido, email, sulod sa mensahe),</li>
              <li>teknikal nga datos nga awtomatiko nga gikolekta (IP address, impormasyon sa device, cookies),</li>
              <li>analytics datos gikan sa Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, ug Vercel Speed Insights,</li>
              <li>analytics datos gikan sa Metricool (estadistika sa pagbisita, tinubdan sa trapiko),</li>
              <li>datos nga gikolekta sa Google AdSense para sa pagpakita sa mga ad (ad identifiers, ad cookies, datos sa interaksyon sa ad),</li>
              <li>server logs ug security events (pananglitan: timestamps, IP addresses, request headers).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="3. Tumong ug Legal nga Basehan sa Pagproseso">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Pakig-uban sa customer</strong> -- pagtubag sa mga pangutana gikan sa contact form (Art. 6(1)(b) at (f) GDPR).
              </li>
              <li>
                <strong>Marketing ug analytics</strong> -- estadistika sa site, pag-optimize sa sulod (Art. 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Paghatag sa serbisyo</strong> -- pag-andam sa alok, kontrata, invoice (Art. 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Legal nga obligasyon</strong> -- pananglitan: pagtipig sa accounting documentation (Art. 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Seguridad ug mga claim</strong> -- pagmantener sa logs, paglikay sa pang-abuso, pagtukod/pagpatuman/pagdepensa sa mga claim (Art. 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Pagpakita sa mga ad</strong> -- pagpakita sa interest-based nga mga ad pinaagi sa Google AdSense (Art. 6(1)(a) GDPR -- pagtugot sa user nga gihatag pinaagi sa cookie banner).
              </li>
            </ol>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="4. Cookies">
            <p>Ang website naggamit og cookies para sa mosunod nga mga tumong:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>pagsiguro sa maayo nga paglihok sa website,</li>
              <li>pagsusi sa trapiko (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>tumong sa marketing,</li>
              <li>pagpakita sa interest-based nga mga ad (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Ang Google AdSense mahimong mogamit og DoubleClick cookies aron maghatag og mga ad base sa mga naunang pagbisita sa user sa among website o ubang website. Ang mga third-party provider
              (lakip ang Google) naggamit sa maong cookies aron maghatag og mga ad base sa kasaysayan sa pag-browse.
            </p>
            <p>
              Mahimo nimong i-disable ang personalized nga mga ad sa{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Google Ads Settings
              </a>{' '}
              o sa{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>
              Ang website naggamit og Google Consent Mode v2. Nagpasabot kini nga ang Google analytics ug advertising scripts dili mokolekta og datos hangtod mohatag og pagtugot ang user sa
              pamamagitan sa cookie banner.
            </p>
            <p>Mahimo nimong dumalaon ang cookies sa settings sa browser. Ang paglimita sa cookies mahimong makaapekto sa pipila ka feature sa website.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="5. Mga Modawat sa Datos">
            <p>Ang datos mahimong ipaambit sa mga entity nga nagsuporta kanamo sa paghatag sa serbisyo, sama sa:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>hosting/application provider (pananglitan: Vercel),</li>
              <li>analytics tool provider (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>advertising service provider (Google Ireland Ltd. -- Google AdSense),</li>
              <li>accounting firm, payment processor, o legal advisor -- kung gikinahanglan.</li>
            </ul>
            <p>Tanan nga modawat nagproseso sa datos sumala sa GDPR base sa angay nga mga kasabutan.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="6. Data Processing Agreement (DPA)">
            <p>
              Sa hangyo, naghimo kami og data processing agreement (DPA) kung nagproseso kami og datos sa ngalan sa kliyente (pananglitan: sulod sa website maintenance, configuration sa tools o
              systems).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="7. Pagbalhin sa Datos sa Gawas sa EEA">
            <p>
              Ang Google ug Vercel mahimong magproseso og datos sa gawas sa European Economic Area. Angay nga legal nga proteksyon ang gipatupad (lakip ang Standard Contractual Clauses nga giaprobahan
              sa European Commission) ug, kung posible, mga teknikal nga lakang (pseudonymization, minimization).
            </p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="8. Panahon sa Pagtipig sa Datos">
            <ul className="list-disc space-y-1 pl-6">
              <li>Datos sa contact form -- hangtod 12 buwan human sa katapusang korespondensiiya.</li>
              <li>Datos sa kliyente -- para sa panahon nga gikinahanglan sa batas (accounting documentation).</li>
              <li>Analytics datos -- sumala sa palisiya sa Google Analytics (pananglitan: 26 buwan).</li>
              <li>Logs -- para sa panahon nga gikinahanglan para sa seguridad ug accountability (kasagaran hangtod 12 buwan, gawas kung lahi ang gitakda sa regulasyon).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="9. Ang Imong mga Katungod">
            <p>Aduna kay katungod nga:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>i-access ang imong datos ug makakuha og kopya niini,</li>
              <li>pagkorihir sa datos,</li>
              <li>pagtangtang sa datos,</li>
              <li>paglimita sa pagproseso,</li>
              <li>portability sa datos,</li>
              <li>pagsupak sa pagproseso (lakip ang marketing),</li>
              <li>magpasa og reklamo sa supervisory authority (sa Poland: Presidente sa Office of Personal Data Protection, UODO).</li>
            </ul>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="10. Boluntaryo nga Paghatag sa Datos">
            <p>Ang paghatag sa personal nga datos boluntaryo, apan gikinahanglan para sa pakig-uban o paghatag sa serbisyo.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="11. Mga Lakang sa Seguridad">
            <p>Nagpatuman kami og mga teknikal ug organisasyonal nga lakang aron protektahan ang personal nga datos gikan sa dili awtorisado nga pag-access, pagkawala, o pagkaguba.</p>
          </SectionInfo>
          <Gap variant="line" size="sm" />
          <SectionInfo title="12. Mga Pagbag-o sa Palisiya">
            <p>Kini nga palisiya sa pribasiya mahimong i-update aron ipakita ang mga pagbag-o sa batas o teknolohiya. Ang pinakabag-o nga bersyon kanunay available sa kini nga panid.</p>
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
