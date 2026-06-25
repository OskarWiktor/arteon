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

const LOCALE = 'fr' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/fr/politique-de-confidentialite'),
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

export default function PolitiqueDeConfidentialitePage() {
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
          <h1>Politique de confidentialité</h1>
          <p className='mt-2 text-sm'>
            Version&nbsp;: <strong>03.03.2026</strong>
          </p>

          <Divider size='xs' />

          <SectionInfo title='1. Responsable du traitement'>
            <p>
              Le responsable du traitement des données personnelles est Arteon,
              dont le siège se trouve dans la commune de Czernichów, Zagacie,
              ul. Jaśminowa 36, 32-070, Pologne.
            </p>
            <p>
              Numéro fiscal (NIP)&nbsp;: <strong>6772156998</strong>,
              REGON&nbsp;: <strong>521832645</strong>
            </p>
            <p>
              Contact&nbsp;: <strong>contact@arteonagency.com</strong>,
              tél.&nbsp;: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='2. Étendue des données collectées'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                données fournies via le formulaire de contact (prénom, nom,
                e-mail, contenu du message),
              </li>
              <li>
                données techniques collectées automatiquement (adresse IP,
                informations sur l&apos;appareil, cookies),
              </li>
              <li>
                données analytiques de Google Analytics 4, Vercel Analytics et
                Vercel Speed Insights,
              </li>
              <li>
                données collectées par Google AdSense pour l&apos;affichage de
                publicités (identifiants publicitaires, cookies publicitaires,
                données d&apos;interaction avec les annonces, chaînes de
                consentement IAB TCF v2.3),
              </li>
              <li>
                journaux du serveur et événements de sécurité (par ex.
                horodatages, adresse IP, en-têtes de requête).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='3. Finalités et bases juridiques du traitement'>
            <ol className='list-decimal space-y-1 pl-6'>
              <li>
                <strong>Contact client</strong> - réponse aux demandes du
                formulaire de contact (art. 6, par. 1, point b et f du RGPD).
              </li>
              <li>
                <strong>Marketing et analyse</strong> - statistiques du site,
                optimisation du contenu (art. 6, par. 1, point f du RGPD).
              </li>
              <li>
                <strong>Fourniture de services</strong> - préparation de devis,
                contrats, factures (art. 6, par. 1, point b du RGPD).
              </li>
              <li>
                <strong>Obligations légales</strong> - par ex. conservation de
                la documentation comptable (art. 6, par. 1, point c du RGPD).
              </li>
              <li>
                <strong>Sécurité et réclamations</strong> - tenue de journaux,
                prévention des abus, établissement/exercice/défense de
                réclamations (art. 6, par. 1, point f du RGPD).
              </li>
              <li>
                <strong>Affichage de publicités</strong> - affichage de
                publicités basées sur les centres d&apos;intérêt via Google
                AdSense (art. 6, par. 1, point a du RGPD - consentement de
                l&apos;utilisateur via le dialogue Google Privacy & Messaging).
              </li>
            </ol>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='4. Cookies et consentement'>
            <p>Le site utilise des cookies aux fins suivantes&nbsp;:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>assurer le bon fonctionnement du site,</li>
              <li>analyse du trafic (Google Analytics 4, Vercel Analytics),</li>
              <li>fins marketing,</li>
              <li>
                affichage de publicités basées sur les centres d&apos;intérêt
                (Google AdSense / DoubleClick).
              </li>
            </ul>
            <p>
              Google AdSense peut utiliser des cookies DoubleClick pour diffuser
              des annonces basées sur les visites précédentes de
              l&apos;utilisateur sur notre site ou d&apos;autres sites. Les
              fournisseurs tiers (y compris Google) utilisent ces cookies pour
              diffuser des annonces en fonction de l&apos;historique de
              navigation.
            </p>
            <h3 className='h5 mt-4 mb-3'>Gestion du consentement (CMP)</h3>
            <p>
              Pour collecter et gérer les consentements relatifs aux cookies et
              au traitement des données à des fins publicitaires, ce site
              utilise Google Privacy &amp; Messaging &mdash; une plateforme de
              gestion du consentement (CMP) certifiée, intégrée au standard IAB
              Transparency and Consent Framework (TCF) version 2.3.
            </p>
            <p>
              Les utilisateurs de l&apos;Espace économique européen (EEE), du
              Royaume-Uni et de la Suisse seront invités à donner leur
              consentement via un dialogue Google. Les utilisateurs d&apos;États
              américains couverts par des lois sur la vie privée verront un
              message conforme aux réglementations de leur État (y compris la
              prise en charge des signaux Global Privacy Control).
            </p>
            <p>
              Vous pouvez modifier vos préférences de consentement à tout moment
              en cliquant sur le lien &quot;Paramètres des cookies&quot; dans le
              pied de page du site.
            </p>
            <h3 className='h5 mt-4 mb-3'>Google Consent Mode v2</h3>
            <p>
              Le site utilise Google Consent Mode v2 en mode avancé (Advanced).
              Pour les utilisateurs des régions réglementées, tous les signaux
              de consentement (ad_storage, ad_user_data, ad_personalization,
              analytics_storage) sont par défaut définis sur &quot;denied&quot;
              et ne sont mis à jour qu&apos;après l&apos;obtention du
              consentement. Pour les utilisateurs d&apos;autres régions, les
              consentements sont par défaut définis sur &quot;granted&quot;.
            </p>
            <p>
              Vous pouvez désactiver les annonces personnalisées sur la page{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                Paramètres des annonces Google
              </a>{' '}
              ou sur{' '}
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
              Vous pouvez gérer les cookies dans les paramètres de votre
              navigateur. La restriction des cookies peut affecter certaines
              fonctionnalités du site.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='5. Destinataires des données'>
            <p>
              Les données peuvent être partagées avec des entités qui nous
              aident dans la fourniture de services, telles que&nbsp;:
            </p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                fournisseurs d&apos;hébergement/applications (par ex. Vercel),
              </li>
              <li>
                fournisseurs d&apos;outils d&apos;analyse (Google Ireland Ltd.,
                Vercel Inc.),
              </li>
              <li>
                fournisseurs de services publicitaires (Google Ireland Ltd. -
                Google AdSense),
              </li>
              <li>
                cabinet comptable, prestataires de paiement ou entités
                juridiques - si nécessaire.
              </li>
            </ul>
            <p>
              Tous les destinataires traitent les données conformément au RGPD
              sur la base d&apos;accords appropriés.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='6. Accord de traitement des données (DPA)'>
            <p>
              Sur demande, nous concluons un accord de traitement des données
              (DPA) lorsque nous traitons des données pour le compte d&apos;un
              client (par ex. dans le cadre de la maintenance du site, de la
              configuration d&apos;outils ou de systèmes).
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title="7. Transferts de données hors de l'EEE">
            <p>
              Google et Vercel peuvent traiter des données en dehors de
              l&apos;Espace économique européen. Des garanties juridiques
              appropriées sont appliquées (notamment les clauses contractuelles
              types approuvées par la Commission européenne) ainsi que, dans la
              mesure du possible, des mesures techniques (pseudonymisation,
              minimisation).
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='8. Durée de conservation des données'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                Données du formulaire de contact&nbsp;: jusqu&apos;à 12 mois
                après la fin de la correspondance.
              </li>
              <li>
                Données clients&nbsp;: pendant la durée requise par la loi
                (documentation comptable).
              </li>
              <li>
                Données analytiques&nbsp;: conformément à la politique de Google
                Analytics (par ex. 26 mois).
              </li>
              <li>
                Journaux&nbsp;: pendant la durée nécessaire à la sécurité et à
                la traçabilité (en règle générale jusqu&apos;à 12 mois, sauf
                disposition contraire).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='9. Vos droits'>
            <p>Vous avez le droit de&nbsp;:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>accéder à vos données et en obtenir une copie,</li>
              <li>rectification des données,</li>
              <li>effacement des données,</li>
              <li>limitation du traitement,</li>
              <li>portabilité des données,</li>
              <li>opposition au traitement (y compris le marketing),</li>
              <li>
                déposer une plainte auprès de l&apos;autorité de contrôle
                compétente (en Pologne&nbsp;: le Président de l&apos;Office de
                protection des données personnelles, UODO).
              </li>
            </ul>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='10. Caractère volontaire de la fourniture de données'>
            <p>
              La fourniture de données personnelles est volontaire, mais
              nécessaire pour le contact ou la fourniture de services.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='11. Mesures de sécurité'>
            <p>
              Nous appliquons des mesures techniques et organisationnelles pour
              protéger les données personnelles contre tout accès non autorisé,
              toute perte ou destruction.
            </p>
          </SectionInfo>

          <Divider line size='sm' />

          <SectionInfo title='12. Modifications de la politique'>
            <p>
              Cette politique de confidentialité peut être mise à jour pour
              tenir compte des évolutions législatives ou technologiques. La
              version actuelle est toujours disponible sur cette page.
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
