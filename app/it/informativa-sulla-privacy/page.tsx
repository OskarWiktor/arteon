import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'it' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/it/informativa-sulla-privacy'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

export default function InformativaSullaPrivacyPage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Informativa sulla privacy</h1>
          <p className="mt-2 text-sm opacity-70">
            Versione:&nbsp;<strong>13.02.2026</strong>
          </p>

          <Gap size="xs" />

          <SectionInfo title="1. Titolare del trattamento">
            <p>Il titolare del trattamento dei dati personali e Arteon, con sede nel comune di Czernichow, Zagacie, ul. Jasminowa 36, 32-070, Polonia.</p>
            <p>
              Codice fiscale (NIP):&nbsp;<strong>9442284430</strong>, REGON:&nbsp;<strong>528888241</strong>
            </p>
            <p>
              Contatto:&nbsp;<strong>contact@arteonagency.com</strong>, tel.:&nbsp;<strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="2. Ambito dei dati raccolti">
            <ul className="list-disc space-y-1 pl-6">
              <li>dati forniti tramite il modulo di contatto (nome, cognome, e-mail, contenuto del messaggio),</li>
              <li>dati tecnici raccolti automaticamente (indirizzo IP, informazioni sul dispositivo, cookie),</li>
              <li>dati analitici di Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics e Vercel Speed Insights,</li>
              <li>dati analitici di Metricool (statistiche delle visite, fonti di traffico),</li>
              <li>dati raccolti da Google AdSense per la visualizzazione di annunci (identificatori pubblicitari, cookie pubblicitari, dati di interazione con gli annunci),</li>
              <li>registri del server ed eventi di sicurezza (ad es. timestamp, indirizzo IP, intestazioni delle richieste).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="3. Finalita e basi giuridiche del trattamento">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Contatto con il cliente</strong> - risposta alle richieste dal modulo di contatto (art. 6, par. 1, lett. b e f del GDPR).
              </li>
              <li>
                <strong>Marketing e analisi</strong> - statistiche del sito, ottimizzazione dei contenuti (art. 6, par. 1, lett. f del GDPR).
              </li>
              <li>
                <strong>Fornitura di servizi</strong> - preparazione di preventivi, contratti, fatture (art. 6, par. 1, lett. b del GDPR).
              </li>
              <li>
                <strong>Obblighi legali</strong> - ad es. conservazione della documentazione contabile (art. 6, par. 1, lett. c del GDPR).
              </li>
              <li>
                <strong>Sicurezza e reclami</strong> - tenuta dei registri, prevenzione degli abusi, accertamento/esercizio/difesa di diritti (art. 6, par. 1, lett. f del GDPR).
              </li>
              <li>
                <strong>Visualizzazione di annunci</strong> - visualizzazione di annunci basati sugli interessi tramite Google AdSense (art. 6, par. 1, lett. a del GDPR - consenso dell&apos;utente
                tramite il banner dei cookie).
              </li>
            </ol>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="4. Cookie">
            <p>Il sito utilizza i cookie per le seguenti finalita:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>garantire il corretto funzionamento del sito,</li>
              <li>analisi del traffico (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>finalita di marketing,</li>
              <li>visualizzazione di annunci basati sugli interessi (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Google AdSense puo utilizzare i cookie DoubleClick per pubblicare annunci basati sulle visite precedenti dell&apos;utente al nostro sito o ad altri siti. I fornitori terzi (incluso
              Google) utilizzano questi cookie per pubblicare annunci in base alla cronologia di navigazione.
            </p>
            <p>
              Puoi disattivare gli annunci personalizzati sulla pagina{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Impostazioni annunci Google
              </a>{' '}
              o su{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>
              Il sito utilizza Google Consent Mode v2. Cio significa che gli script di analisi e pubblicita di Google non raccolgono dati finche l&apos;utente non ha prestato il consenso tramite il
              banner dei cookie.
            </p>
            <p>Puoi gestire i cookie nelle impostazioni del tuo browser. La limitazione dei cookie puo influire su alcune funzionalita del sito.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="5. Destinatari dei dati">
            <p>I dati possono essere condivisi con soggetti che ci assistono nella fornitura di servizi, quali:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>fornitori di hosting/applicazioni (ad es. Vercel),</li>
              <li>fornitori di strumenti di analisi (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>fornitori di servizi pubblicitari (Google Ireland Ltd. - Google AdSense),</li>
              <li>studio di contabilita, fornitori di servizi di pagamento o soggetti legali - se necessario.</li>
            </ul>
            <p>Tutti i destinatari trattano i dati in conformita al GDPR sulla base di accordi appropriati.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="6. Accordo sul trattamento dei dati (DPA)">
            <p>
              Su richiesta, stipuliamo un accordo sul trattamento dei dati (DPA) quando trattiamo dati per conto di un cliente (ad es. nell&apos;ambito della manutenzione del sito, della
              configurazione di strumenti o sistemi).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="7. Trasferimenti di dati al di fuori dello SEE">
            <p>
              Google e Vercel possono trattare dati al di fuori dello Spazio Economico Europeo. Vengono applicate garanzie giuridiche appropriate (in particolare le clausole contrattuali tipo
              approvate dalla Commissione Europea) e, nella misura del possibile, misure tecniche (pseudonimizzazione, minimizzazione).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="8. Durata di conservazione dei dati">
            <ul className="list-disc space-y-1 pl-6">
              <li>Dati del modulo di contatto: fino a 12 mesi dopo la fine della corrispondenza.</li>
              <li>Dati dei clienti: per la durata richiesta dalla legge (documentazione contabile).</li>
              <li>Dati analitici: conformemente alla politica di Google Analytics (ad es. 26 mesi).</li>
              <li>Registri: per la durata necessaria alla sicurezza e alla tracciabilita (di norma fino a 12 mesi, salvo diversa disposizione).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="9. I tuoi diritti">
            <p>Hai il diritto di:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>accedere ai tuoi dati e ottenerne una copia,</li>
              <li>rettifica dei dati,</li>
              <li>cancellazione dei dati,</li>
              <li>limitazione del trattamento,</li>
              <li>portabilita dei dati,</li>
              <li>opposizione al trattamento (incluso il marketing),</li>
              <li>presentare un reclamo all&apos;autorita di controllo competente (in Polonia: il Presidente dell&apos;Ufficio per la protezione dei dati personali, UODO).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="10. Carattere volontario del conferimento dei dati">
            <p>Il conferimento dei dati personali e volontario, ma necessario per il contatto o la fornitura di servizi.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="11. Misure di sicurezza">
            <p>Applichiamo misure tecniche e organizzative per proteggere i dati personali da accessi non autorizzati, perdita o distruzione.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="12. Modifiche all'informativa">
            <p>La presente informativa sulla privacy puo essere aggiornata per tenere conto delle evoluzioni legislative o tecnologiche. La versione attuale e sempre disponibile su questa pagina.</p>
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
