import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'en' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/en/privacy-policy'),
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
          <h1>Privacy Policy</h1>
          <p className="mt-2 text-sm opacity-70">
            Version: <strong>13.02.2026</strong>
          </p>

          <Gap size="xs" />

          <SectionInfo title="1. Data Controller">
            <p>The controller of personal data is Arteon, registered in gmina Czernichów, Zagacie, ul. Jaśminowa 36, 32-070, Poland.</p>
            <p>
              Tax ID (NIP): <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Contact: <strong>contact@arteonagency.com</strong>, phone: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="2. Scope of Collected Data">
            <ul className="list-disc space-y-1 pl-6">
              <li>data submitted via the contact form (first name, last name, email, message content),</li>
              <li>technical data collected automatically (IP address, device information, cookies),</li>
              <li>analytical data from Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics and Vercel Speed Insights,</li>
              <li>analytical data from Metricool (visit statistics, traffic sources),</li>
              <li>data collected by Google AdSense for the purpose of displaying ads (advertising identifiers, advertising cookies, ad interaction data),</li>
              <li>server and security event logs (e.g. timestamps, IP address, request headers).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="3. Purposes and Legal Bases of Processing">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Customer contact</strong> - responding to enquiries from the contact form (Art. 6(1)(b) and (f) GDPR).
              </li>
              <li>
                <strong>Marketing and analytics</strong> - site statistics, content optimisation (Art. 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Service delivery</strong> - preparing offers, contracts, invoices (Art. 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Legal obligations</strong> - e.g. retention of accounting documentation (Art. 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Security and claims</strong> - maintaining logs, preventing abuse, establishing/pursuing/defending claims (Art. 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Displaying ads</strong> - displaying interest-based advertisements via Google AdSense (Art. 6(1)(a) GDPR - user consent given via the cookie banner).
              </li>
            </ol>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="4. Cookies">
            <p>The website uses cookies for the following purposes:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>ensuring proper website functionality,</li>
              <li>traffic analysis (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>marketing purposes,</li>
              <li>displaying interest-based ads (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Google AdSense may use DoubleClick cookies to serve ads based on a user&apos;s previous visits to our website or other websites. Third-party providers (including Google) use these
              cookies to serve ads based on browsing history.
            </p>
            <p>
              You can opt out of personalised ads at{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Google Ads Settings
              </a>{' '}
              or at{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>The website uses Google Consent Mode v2. This means that Google analytics and advertising scripts do not collect data until the user gives consent via the cookie banner.</p>
            <p>You can manage cookies in your browser settings. Restricting cookies may affect some website features.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="5. Data Recipients">
            <p>Data may be shared with entities that support us in providing services, such as:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>hosting/application providers (e.g. Vercel),</li>
              <li>analytics tool providers (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>advertising service providers (Google Ireland Ltd. - Google AdSense),</li>
              <li>accounting office, payment processors or legal entities - if necessary.</li>
            </ul>
            <p>All recipients process data in accordance with GDPR based on appropriate agreements.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="6. Data Processing Agreement (DPA)">
            <p>Upon request, we enter into a data processing agreement (DPA) when we process data on behalf of a client (e.g. as part of website maintenance, tool or system configuration).</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="7. Data Transfers Outside the EEA">
            <p>
              Google and Vercel may process data outside the European Economic Area. Appropriate legal safeguards are applied (including Standard Contractual Clauses approved by the European
              Commission) and, where possible, technical measures (pseudonymisation, minimisation).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="8. Data Retention Period">
            <ul className="list-disc space-y-1 pl-6">
              <li>Contact form data - up to 12 months after the end of correspondence.</li>
              <li>Client data - for the period required by law (accounting documentation).</li>
              <li>Analytical data - in accordance with Google Analytics policy (e.g. 26 months).</li>
              <li>Logs - for the period necessary for security and accountability (generally up to 12 months, unless regulations provide otherwise).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="9. Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>access your data and receive a copy,</li>
              <li>rectification of data,</li>
              <li>erasure of data,</li>
              <li>restriction of processing,</li>
              <li>data portability,</li>
              <li>object to processing (including marketing),</li>
              <li>lodge a complaint with the President of the Personal Data Protection Office (UODO, Poland).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="10. Voluntary Provision of Data">
            <p>Providing personal data is voluntary but necessary for contact or service delivery.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="11. Security Measures">
            <p>We apply technical and organisational measures to protect personal data against unauthorised access, loss or destruction.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="12. Policy Changes">
            <p>This privacy policy may be updated to reflect changes in legislation or technology. The current version is always available on this page.</p>
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
