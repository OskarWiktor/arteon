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

const LOCALE = 'el' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/el/politiki-aporritou'),
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

export default function PrivacyPolicyPage() {
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
          <h1>Πολιτική απορρήτου</h1>
          <p className='mt-2 text-sm'>
            Έκδοση: <strong>03.03.2026</strong>
          </p>
          <Divider size='xs' />
          <SectionInfo title='1. Υπεύθυνος επεξεργασίας'>
            <p>
              Υπεύθυνος επεξεργασίας προσωπικών δεδομένων είναι η Arteon με έδρα
              στον Δήμο Czernichów, Zagacie, ul. Jasminowa 36, 32-070, Πολωνία.
            </p>
            <p>
              ΑΦΜ: <strong>6772156998</strong>, REGON:{' '}
              <strong>521832645</strong>
            </p>
            <p>
              Επικοινωνία: <strong>contact@arteonagency.com</strong>, τηλ.:{' '}
              <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='2. Εύρος δεδομένων'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>
                δεδομένα από τη φόρμα επικοινωνίας (όνομα, επώνυμο, e-mail,
                περιεχόμενο μηνύματος),
              </li>
              <li>
                αυτόματα συλλεγόμενα τεχνικά δεδομένα (IP, δεδομένα συσκευής,
                cookies),
              </li>
              <li>
                αναλυτικά δεδομένα από Google Analytics 4, Vercel Analytics και
                Vercel Speed Insights,
              </li>
              <li>
                δεδομένα που συλλέγει το Google AdSense για προβολή διαφημίσεων
                (αναγνωριστικά, cookies διαφημίσεων, δεδομένα αλληλεπίδρασης,
                συμβολοσειρές συγκατάθεσης IAB TCF v2.3),
              </li>
              <li>
                αρχεία καταγραφής διακομιστή και συμβάντα ασφαλείας (π.χ.
                χρονοσφραγίδες, IP, κεφαλίδες αιτημάτων).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='3. Σκοποί και νομική βάση'>
            <ol className='list-decimal space-y-1 pl-6'>
              <li>
                <strong>Επικοινωνία με πελάτες</strong> - επεξεργασία ερωτημάτων
                φόρμας (Άρθρο 6(1)(β) και (στ) GDPR).
              </li>
              <li>
                <strong>Μάρκετινγκ και αναλυτικά</strong> - στατιστικά
                ιστοσελίδας, βελτιστοποίηση περιεχομένου (Άρθρο 6(1)(στ) GDPR).
              </li>
              <li>
                <strong>Παροχή υπηρεσιών</strong> - προσφορές, συμβάσεις,
                τιμολόγια (Άρθρο 6(1)(β) GDPR).
              </li>
              <li>
                <strong>Νομικές υποχρεώσεις</strong> - π.χ. φύλαξη λογιστικών
                εγγράφων (Άρθρο 6(1)(γ) GDPR).
              </li>
              <li>
                <strong>Ασφάλεια</strong> - αρχεία καταγραφής, πρόληψη
                κατάχρησης (Άρθρο 6(1)(στ) GDPR).
              </li>
              <li>
                <strong>Προβολή διαφημίσεων</strong> - μέσω Google AdSense
                (Άρθρο 6(1)(α) GDPR - συγκατάθεση μέσω Google Privacy &
                Messaging).
              </li>
            </ol>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='4. Cookies και συγκατάθεση'>
            <p>Η ιστοσελίδα χρησιμοποιεί cookies για:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>σωστή λειτουργία,</li>
              <li>ανάλυση κίνησης (Google Analytics 4, Vercel Analytics),</li>
              <li>σκοπούς μάρκετινγκ,</li>
              <li>προβολή διαφημίσεων (Google AdSense / DoubleClick).</li>
            </ul>
            <h3 className='h5 mt-4 mb-3'>Διαχείριση συγκατάθεσης (CMP)</h3>
            <p>
              Για τη συλλογή και διαχείριση συγκαταθέσεων για cookies και
              επεξεργασία δεδομένων για διαφημιστικούς σκοπούς, η ιστοσελίδα
              χρησιμοποιεί το Google Privacy &amp; Messaging &mdash; μια
              πιστοποιημένη πλατφόρμα διαχείρισης συγκατάθεσης (CMP)
              ενσωματωμένη με το πρότυπο IAB Transparency and Consent Framework
              (TCF) έκδοση 2.3.
            </p>
            <p>
              Οι χρήστες από τον Ευρωπαϊκό Οικονομικό Χώρο (ΕΟΧ), το Ηνωμένο
              Βασίλειο και την Ελβετία θα κληθούν να δώσουν τη συγκατάθεσή τους
              μέσω διαλόγου Google. Οι χρήστες από πολιτείες των ΗΠΑ με
              νομοθεσία περί απορρήτου θα δουν ένα μήνυμα σύμφωνο με τους
              κανονισμούς (συμπεριλαμβανομένης της υποστήριξης σημάτων Global
              Privacy Control).
            </p>
            <p>
              Μπορείτε να αλλάξετε τις προτιμήσεις συγκατάθεσης ανά πάσα στιγμή
              κάνοντας κλικ στον σύνδεσμο &quot;Ρυθμίσεις cookies&quot; στο
              υποσέλιδο.
            </p>
            <h3 className='h5 mt-4 mb-3'>Google Consent Mode v2</h3>
            <p>
              Η ιστοσελίδα χρησιμοποιεί Google Consent Mode v2 σε προηγμένη
              λειτουργία (Advanced). Για χρήστες σε ρυθμιζόμενες περιοχές, όλα
              τα σήματα συγκατάθεσης (ad_storage, ad_user_data,
              ad_personalization, analytics_storage) είναι από προεπιλογή
              &quot;denied&quot; και ενημερώνονται μόνο μετά τη συγκατάθεση. Για
              χρήστες σε άλλες περιοχές, οι συγκαταθέσεις είναι από προεπιλογή
              &quot;granted&quot;.
            </p>
            <p>
              Μπορείτε να απενεργοποιήσετε εξατομικευμένες διαφημίσεις στις{' '}
              <a
                href='https://adssettings.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-link'
              >
                ρυθμίσεις Google Ads
              </a>{' '}
              ή στο{' '}
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
              Μπορείτε να διαχειριστείτε τα cookies στις ρυθμίσεις του
              προγράμματος περιήγησης.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='5. Αποδέκτες δεδομένων'>
            <p>Τα δεδομένα μπορεί να κοινοποιηθούν σε:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>πάροχο φιλοξενίας (π.χ. Vercel),</li>
              <li>παρόχους αναλυτικών (Google Ireland Ltd., Vercel Inc.),</li>
              <li>
                πάροχο διαφημίσεων (Google Ireland Ltd. - Google AdSense),
              </li>
              <li>
                ελεγκτή, πάροχο πληρωμών ή νομικό σύμβουλο - κατά περίπτωση.
              </li>
            </ul>
            <p>
              Όλοι οι αποδέκτες επεξεργάζονται δεδομένα σύμφωνα με τον GDPR.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='6. Συμφωνία επεξεργασίας (DPA)'>
            <p>
              Κατόπιν αιτήματος, συνάπτουμε συμφωνία επεξεργασίας δεδομένων
              (DPA) όταν επεξεργαζόμαστε δεδομένα για λογαριασμό πελάτη.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='7. Μεταφορά εκτός ΕΟΧ'>
            <p>
              Η Google και η Vercel μπορεί να επεξεργάζονται δεδομένα εκτός ΕΟΧ.
              Εφαρμόζονται κατάλληλα νομικά μέτρα (τυποποιημένες συμβατικές
              ρήτρες, τεχνικά μέτρα).
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='8. Περίοδος διατήρησης'>
            <ul className='list-disc space-y-1 pl-6'>
              <li>Φόρμα επικοινωνίας - έως 12 μήνες.</li>
              <li>Δεδομένα πελατών - σύμφωνα με τη νομοθεσία.</li>
              <li>Αναλυτικά - σύμφωνα με Google Analytics (π.χ. 26 μήνες).</li>
              <li>Αρχεία καταγραφής - έως 12 μήνες.</li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='9. Τα δικαιώματά σας'>
            <p>Έχετε δικαίωμα:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>πρόσβασης στα δεδομένα σας,</li>
              <li>διόρθωσης,</li>
              <li>διαγραφής,</li>
              <li>περιορισμού επεξεργασίας,</li>
              <li>φορητότητας,</li>
              <li>εναντίωσης (συμπεριλαμβανομένου μάρκετινγκ),</li>
              <li>
                υποβολής καταγγελίας στην αρμόδια αρχή (στην Πολωνία: UODO).
              </li>
            </ul>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='10. Εθελοντική παροχή'>
            <p>
              Η παροχή προσωπικών δεδομένων είναι εθελοντική αλλά απαραίτητη για
              επικοινωνία ή παροχή υπηρεσιών.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='11. Μέτρα ασφαλείας'>
            <p>
              Εφαρμόζουμε τεχνικά και οργανωτικά μέτρα για την προστασία
              προσωπικών δεδομένων.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <SectionInfo title='12. Αλλαγές πολιτικής'>
            <p>
              Αυτή η πολιτική απορρήτου μπορεί να ενημερωθεί. Η τελευταία έκδοση
              είναι πάντα διαθέσιμη σε αυτή τη σελίδα.
            </p>
          </SectionInfo>
          <Divider line size='sm' />
          <Divider size='xs' />
        </div>
        <TableOfContents rootSelector='#article-root' size='large' />
      </Wrapper>
      <ButtonToTop />
      <Divider />
    </>
  );
}
