import ButtonToTop from '@/components/atoms/buttons/ButtonToTop';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import TableOfContents from '@/components/organisms/TableOfContent';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'de' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/de/datenschutzrichtlinie'),
    type: 'website',
    images: [
      { url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 },
    ],
  },
};

export default function DatenschutzrichtliniePage() {
  return (
    <>
      <Divider size='xs' />
      <Wrapper
        as='article'
        id='article-root'
        itemScope
        itemType='https://schema.org/Article'
        className='flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]'
      >
        <div>
          <h1>Datenschutzrichtlinie</h1>
          <p className='mt-2 text-sm'>
            Version: <strong>03.03.2026</strong>
          </p>

          <Divider size='xs' />

          <SectionInfo title='1. Verantwortlicher'>
            <p>
              Verantwortlicher für die Verarbeitung personenbezogener Daten ist Arteon mit Sitz in
              Gemeinde Czernichów, Zagacie, ul. Jaśminowa 36, 32-070, Polen.
            </p>
            <p>
              Steuernummer (NIP): <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontakt: <strong>contact@arteonagency.com</strong>, Tel.:{' '}
              <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='2. Umfang der erhobenen Daten'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                über das Kontaktformular angegebene Daten (Vorname, Nachname, E-Mail,
                Nachrichteninhalt),
              </li>
              <li>
                automatisch erhobene technische Daten (IP-Adresse, Geräteinformationen, Cookies),
              </li>
              <li>
                Analysedaten von Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics und
                Vercel Speed Insights,
              </li>
              <li>Analysedaten von Metricool (Besuchsstatistiken, Traffic-Quellen),</li>
              <li>
                von Google AdSense erhobene Daten zur Anzeigenausspielung (Werbe-IDs, Werbe-Cookies,
                Daten zu Anzeigeninteraktionen, IAB-TCF-v2.3-Einwilligungszeichenfolgen),
              </li>
              <li>
                Server- und Sicherheitsprotokolle (z.{'\u00a0'}B. Zeitstempel, IP-Adresse,
                Anforderungsheader).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='3. Zwecke und Rechtsgrundlagen der Verarbeitung'>
            <ol className='list-decimal space-y-1 pl-6'>
              <li>
                <strong>Kundenkontakt</strong> - Beantwortung von Anfragen über das Kontaktformular
                (Art. 6 Abs. 1 lit. b und f DSGVO).
              </li>
              <li>
                <strong>Marketing und Analyse</strong> - Website-Statistiken, Inhaltsoptimierung
                (Art. 6 Abs. 1 lit. f DSGVO).
              </li>
              <li>
                <strong>Leistungserbringung</strong> - Erstellung von Angeboten, Verträgen,
                Rechnungen (Art. 6 Abs. 1 lit. b DSGVO).
              </li>
              <li>
                <strong>Gesetzliche Pflichten</strong> - z.{'\u00a0'}B. Aufbewahrung von
                Buchhaltungsunterlagen (Art. 6 Abs. 1 lit. c DSGVO).
              </li>
              <li>
                <strong>Sicherheit und Ansprüche</strong> - Protokollführung, Missbrauchsprävention,
                Geltendmachung/Verfolgung/Abwehr von Ansprüchen (Art. 6 Abs. 1 lit. f DSGVO).
              </li>
              <li>
                <strong>Anzeigenanzeige</strong> - Anzeige interessenbasierter Werbung über Google
                AdSense (Art. 6 Abs. 1 lit. a DSGVO - Einwilligung des Nutzers über den
                Google-Privacy-&amp;-Messaging-Dialog).
              </li>
            </ol>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='4. Cookies und Einwilligung'>
            <p>Die Website verwendet Cookies zu folgenden Zwecken:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>Sicherstellung der ordnungsgemäßen Funktion der Website,</li>
              <li>
                Traffic-Analyse (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics,
                Metricool),
              </li>
              <li>Marketingzwecke,</li>
              <li>Anzeige interessenbasierter Werbung (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Google AdSense kann DoubleClick-Cookies verwenden, um Anzeigen basierend auf früheren
              Besuchen des Nutzers auf unserer Website oder anderen Websites auszuliefern.
              Drittanbieter (einschließlich Google) verwenden diese Cookies, um Anzeigen basierend
              auf dem Browserverlauf auszuliefern.
            </p>
            <h3 className='h5 mt-4 mb-3'>Einwilligungsverwaltung (CMP)</h3>
            <p>
              Zur Erhebung und Verwaltung von Einwilligungen für Cookies und Datenverarbeitung zu
              Werbezwecken verwendet diese Website Google Privacy &amp; Messaging &mdash; eine
              zertifizierte Consent-Management-Plattform (CMP), die mit dem IAB Transparency and
              Consent Framework (TCF) Version 2.3 integriert ist.
            </p>
            <p>
              Nutzer aus dem Europäischen Wirtschaftsraum (EWR), dem Vereinigten Königreich und der
              Schweiz werden über einen Google-Einwilligungsdialog um ihre Zustimmung gebeten.
              Nutzer aus US-Bundesstaaten mit Datenschutzgesetzen sehen eine entsprechende Meldung
              gemäß den jeweiligen Vorschriften (einschließlich Unterstützung für
              Global-Privacy-Control-Signale).
            </p>
            <p>
              Sie können Ihre Einwilligungspräferenzen jederzeit ändern, indem Sie auf den Link
              &quot;Cookie-Einstellungen&quot; in der Fußzeile der Website klicken.
            </p>
            <h3 className='h5 mt-4 mb-3'>Google Consent Mode v2</h3>
            <p>
              Die Website verwendet Google Consent Mode v2 im erweiterten Modus (Advanced). Für
              Nutzer in regulierten Regionen sind alle Einwilligungssignale (ad_storage,
              ad_user_data, ad_personalization, analytics_storage) standardmäßig auf
              &quot;denied&quot; gesetzt und werden erst nach Erteilung der Einwilligung
              aktualisiert. Für Nutzer in anderen Regionen sind die Einwilligungen standardmäßig auf
              &quot;granted&quot; gesetzt.
            </p>
            <p>
              Sie können personalisierte Werbung deaktivieren unter{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                Google-Anzeigeneinstellungen
              </a>{' '}
              oder unter{' '}
              <a
                href='https://www.aboutads.info/choices/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                aboutads.info
              </a>
              .
            </p>
            <p>
              Sie können Cookies in Ihren Browsereinstellungen verwalten. Die Einschränkung von
              Cookies kann einige Funktionen der Website beeinträchtigen.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='5. Datenempfänger'>
            <p>
              Daten können an Stellen weitergegeben werden, die uns bei der Erbringung von
              Dienstleistungen unterstützen, wie z.{'\u00a0'}B.:
            </p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>Hosting-/Anwendungsanbieter (z.{'\u00a0'}B. Vercel),</li>
              <li>
                Anbieter von Analysetools (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc.,
                Metricool S.L.),
              </li>
              <li>Anbieter von Werbediensten (Google Ireland Ltd. - Google AdSense),</li>
              <li>Buchhaltungsbüro, Zahlungsdienstleister oder Rechtsberater - bei Bedarf.</li>
            </ul>
            <p>
              Alle Empfänger verarbeiten Daten gemäß der DSGVO auf Grundlage entsprechender
              Vereinbarungen.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='6. Auftragsverarbeitung (AVV)'>
            <p>
              Auf Wunsch schließen wir einen Auftragsverarbeitungsvertrag (AVV), wenn wir Daten im
              Auftrag eines Kunden verarbeiten (z.{'\u00a0'}B. im Rahmen der Website-Wartung, Tool-
              oder Systemkonfiguration).
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='7. Datenübermittlung außerhalb des EWR'>
            <p>
              Google und Vercel können Daten außerhalb des Europäischen Wirtschaftsraums
              verarbeiten. Es werden geeignete rechtliche Garantien angewandt (u.{'\u00a0'}a.
              Standardvertragsklauseln der Europäischen Kommission) sowie - soweit möglich -
              technische Maßnahmen (Pseudonymisierung, Datenminimierung).
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='8. Speicherdauer'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>Daten aus dem Kontaktformular - bis zu 12 Monate nach Ende der Korrespondenz.</li>
              <li>
                Kundendaten - für den gesetzlich vorgeschriebenen Zeitraum (Buchhaltungsunterlagen).
              </li>
              <li>
                Analysedaten - gemäß der Google-Analytics-Richtlinie (z.{'\u00a0'}B. 26 Monate).
              </li>
              <li>
                Protokolle - für den für Sicherheit und Rechenschaftspflicht erforderlichen Zeitraum
                (in der Regel bis zu 12 Monate, sofern keine abweichenden Vorschriften gelten).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='9. Ihre Rechte'>
            <p>Sie haben das Recht auf:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>Auskunft über Ihre Daten und Erhalt einer Kopie,</li>
              <li>Berichtigung der Daten,</li>
              <li>Löschung der Daten,</li>
              <li>Einschränkung der Verarbeitung,</li>
              <li>Datenübertragbarkeit,</li>
              <li>Widerspruch gegen die Verarbeitung (einschließlich Marketing),</li>
              <li>
                Beschwerde bei der zuständigen Aufsichtsbehörde (in Polen: Präsident des Amtes für
                den Schutz personenbezogener Daten, UODO).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='10. Freiwilligkeit der Datenangabe'>
            <p>
              Die Angabe personenbezogener Daten ist freiwillig, jedoch für die Kontaktaufnahme oder
              Leistungserbringung erforderlich.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='11. Sicherheitsmaßnahmen'>
            <p>
              Wir setzen technische und organisatorische Maßnahmen ein, um personenbezogene Daten
              vor unbefugtem Zugriff, Verlust oder Zerstörung zu schützen.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='12. Änderungen der Richtlinie'>
            <p>
              Diese Datenschutzrichtlinie kann aktualisiert werden, um Änderungen in der
              Gesetzgebung oder Technologie zu berücksichtigen. Die aktuelle Version ist stets auf
              dieser Seite verfügbar.
            </p>
          </SectionInfo>

          <Divider size='xs' />
        </div>

        <TableOfContents rootSelector='#article-root' size='large' />
      </Wrapper>

      <ButtonToTop />

      <Divider />
    </>
  );
}
