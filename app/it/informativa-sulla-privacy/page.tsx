import ButtonToTop from '@/components/atoms/buttons/ButtonToTop';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import TableOfContents from '@/components/organisms/TableOfContent';
import {
  getPrivacyPageMeta,
  getPrivacyAlternates,
} from '@/lib/i18n/pages/privacy';
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
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function InformativaSullaPrivacyPage() {
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
          <h1>Informativa sulla privacy</h1>
          <p className='mt-2 text-sm'>
            Versione:&nbsp;<strong>03.03.2026</strong>
          </p>

          <Divider size='xs' />

          <SectionInfo title='1. Titolare del trattamento'>
            <p>
              Il titolare del trattamento dei dati personali e Arteon, con sede
              nel comune di Czernichow, Zagacie, ul. Jasminowa 36, 32-070,
              Polonia.
            </p>
            <p>
              Codice fiscale (NIP):&nbsp;<strong>9442284430</strong>,
              REGON:&nbsp;
              <strong>528888241</strong>
            </p>
            <p>
              Contatto:&nbsp;<strong>contact@arteonagency.com</strong>,
              tel.:&nbsp;
              <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='2. Ambito dei dati raccolti'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                dati forniti tramite il modulo di contatto (nome, cognome,
                e-mail, contenuto del messaggio),
              </li>
              <li>
                dati tecnici raccolti automaticamente (indirizzo IP,
                informazioni sul dispositivo, cookie),
              </li>
              <li>
                dati analitici di Google Analytics 4, Vercel Analytics e Vercel
                Speed Insights,
              </li>
              <li>
                dati raccolti da Google AdSense per la visualizzazione di
                annunci (identificatori pubblicitari, cookie pubblicitari, dati
                di interazione con gli annunci, stringhe di consenso IAB TCF
                v2.3),
              </li>
              <li>
                registri del server ed eventi di sicurezza (ad es. timestamp,
                indirizzo IP, intestazioni delle richieste).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='3. Finalita e basi giuridiche del trattamento'>
            <ol className='list-decimal space-y-1 pl-6'>
              <li>
                <strong>Contatto con il cliente</strong> - risposta alle
                richieste dal modulo di contatto (art. 6, par. 1, lett. b e f
                del GDPR).
              </li>
              <li>
                <strong>Marketing e analisi</strong> - statistiche del sito,
                ottimizzazione dei contenuti (art. 6, par. 1, lett. f del GDPR).
              </li>
              <li>
                <strong>Fornitura di servizi</strong> - preparazione di
                preventivi, contratti, fatture (art. 6, par. 1, lett. b del
                GDPR).
              </li>
              <li>
                <strong>Obblighi legali</strong> - ad es. conservazione della
                documentazione contabile (art. 6, par. 1, lett. c del GDPR).
              </li>
              <li>
                <strong>Sicurezza e reclami</strong> - tenuta dei registri,
                prevenzione degli abusi, accertamento/esercizio/difesa di
                diritti (art. 6, par. 1, lett. f del GDPR).
              </li>
              <li>
                <strong>Visualizzazione di annunci</strong> - visualizzazione di
                annunci basati sugli interessi tramite Google AdSense (art. 6,
                par. 1, lett. a del GDPR - consenso dell&apos;utente tramite il
                dialogo Google Privacy & Messaging).
              </li>
            </ol>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='4. Cookie e consenso'>
            <p>Il sito utilizza i cookie per le seguenti finalita:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>garantire il corretto funzionamento del sito,</li>
              <li>
                analisi del traffico (Google Analytics 4, Vercel Analytics),
              </li>
              <li>finalita di marketing,</li>
              <li>
                visualizzazione di annunci basati sugli interessi (Google
                AdSense / DoubleClick).
              </li>
            </ul>
            <p>
              Google AdSense puo utilizzare i cookie DoubleClick per pubblicare
              annunci basati sulle visite precedenti dell&apos;utente al nostro
              sito o ad altri siti. I fornitori terzi (incluso Google)
              utilizzano questi cookie per pubblicare annunci in base alla
              cronologia di navigazione.
            </p>
            <h3 className='h5 mt-4 mb-3'>Gestione del consenso (CMP)</h3>
            <p>
              Per raccogliere e gestire il consenso per i cookie e il
              trattamento dei dati a fini pubblicitari, questo sito utilizza
              Google Privacy &amp; Messaging &mdash; una piattaforma di gestione
              del consenso (CMP) certificata, integrata con lo standard IAB
              Transparency and Consent Framework (TCF) versione 2.3.
            </p>
            <p>
              Gli utenti dello Spazio Economico Europeo (SEE), del Regno Unito e
              della Svizzera saranno invitati a prestare il consenso tramite un
              dialogo Google. Gli utenti degli stati USA coperti da leggi sulla
              privacy vedranno un messaggio conforme alle normative statali
              (incluso il supporto per i segnali Global Privacy Control).
            </p>
            <p>
              Puoi modificare le tue preferenze di consenso in qualsiasi momento
              cliccando sul link &quot;Impostazioni cookie&quot; nel piede di
              pagina del sito.
            </p>
            <h3 className='h5 mt-4 mb-3'>Google Consent Mode v2</h3>
            <p>
              Il sito utilizza Google Consent Mode v2 in modalita avanzata
              (Advanced). Per gli utenti delle regioni regolamentate, tutti i
              segnali di consenso (ad_storage, ad_user_data, ad_personalization,
              analytics_storage) sono impostati per impostazione predefinita su
              &quot;denied&quot; e vengono aggiornati solo dopo la prestazione
              del consenso. Per gli utenti di altre regioni, i consensi sono
              impostati per impostazione predefinita su &quot;granted&quot;.
            </p>
            <p>
              Puoi disattivare gli annunci personalizzati sulla pagina{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                Impostazioni annunci Google
              </a>{' '}
              o su{' '}
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
              Puoi gestire i cookie nelle impostazioni del tuo browser. La
              limitazione dei cookie puo influire su alcune funzionalita del
              sito.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='5. Destinatari dei dati'>
            <p>
              I dati possono essere condivisi con soggetti che ci assistono
              nella fornitura di servizi, quali:
            </p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>fornitori di hosting/applicazioni (ad es. Vercel),</li>
              <li>
                fornitori di strumenti di analisi (Google Ireland Ltd., Vercel
                Inc.),
              </li>
              <li>
                fornitori di servizi pubblicitari (Google Ireland Ltd. - Google
                AdSense),
              </li>
              <li>
                studio di contabilita, fornitori di servizi di pagamento o
                soggetti legali - se necessario.
              </li>
            </ul>
            <p>
              Tutti i destinatari trattano i dati in conformita al GDPR sulla
              base di accordi appropriati.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='6. Accordo sul trattamento dei dati (DPA)'>
            <p>
              Su richiesta, stipuliamo un accordo sul trattamento dei dati (DPA)
              quando trattiamo dati per conto di un cliente (ad es.
              nell&apos;ambito della manutenzione del sito, della configurazione
              di strumenti o sistemi).
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='7. Trasferimenti di dati al di fuori dello SEE'>
            <p>
              Google e Vercel possono trattare dati al di fuori dello Spazio
              Economico Europeo. Vengono applicate garanzie giuridiche
              appropriate (in particolare le clausole contrattuali tipo
              approvate dalla Commissione Europea) e, nella misura del
              possibile, misure tecniche (pseudonimizzazione, minimizzazione).
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='8. Durata di conservazione dei dati'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                Dati del modulo di contatto: fino a 12 mesi dopo la fine della
                corrispondenza.
              </li>
              <li>
                Dati dei clienti: per la durata richiesta dalla legge
                (documentazione contabile).
              </li>
              <li>
                Dati analitici: conformemente alla politica di Google Analytics
                (ad es. 26 mesi).
              </li>
              <li>
                Registri: per la durata necessaria alla sicurezza e alla
                tracciabilita (di norma fino a 12 mesi, salvo diversa
                disposizione).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='9. I tuoi diritti'>
            <p>Hai il diritto di:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>accedere ai tuoi dati e ottenerne una copia,</li>
              <li>rettifica dei dati,</li>
              <li>cancellazione dei dati,</li>
              <li>limitazione del trattamento,</li>
              <li>portabilita dei dati,</li>
              <li>opposizione al trattamento (incluso il marketing),</li>
              <li>
                presentare un reclamo all&apos;autorita di controllo competente
                (in Polonia: il Presidente dell&apos;Ufficio per la protezione
                dei dati personali, UODO).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='10. Carattere volontario del conferimento dei dati'>
            <p>
              Il conferimento dei dati personali e volontario, ma necessario per
              il contatto o la fornitura di servizi.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='11. Misure di sicurezza'>
            <p>
              Applichiamo misure tecniche e organizzative per proteggere i dati
              personali da accessi non autorizzati, perdita o distruzione.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title="12. Modifiche all'informativa">
            <p>
              La presente informativa sulla privacy puo essere aggiornata per
              tenere conto delle evoluzioni legislative o tecnologiche. La
              versione attuale e sempre disponibile su questa pagina.
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
