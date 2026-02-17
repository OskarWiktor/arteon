import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import Script from 'next/script';
import {
  RiImageEditLine,
  RiCropLine,
  RiAppsLine,
  RiFileTextLine,
  RiArticleLine,
  RiMailLine,
  RiContrast2Line,
  RiPaletteLine,
  RiPantoneLine,
  RiQrCodeLine,
  RiShieldCheckLine,
  RiInfinityFill,
  RiGlobalLine,
  RiLockLine,
} from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';

export const metadata = {
  title: 'Δωρεάν εργαλεία | Εικόνες, SEO, χρώματα, favicon',
  description: '10 δωρεάν εργαλεία: μετατροπέας WebP, δημιουργία favicon, μετρητής λέξεων, εξαγωγή χρωμάτων και κωδικοί QR. Για ιστοσελίδες και μέσα κοινωνικής δικτύωσης.',
  alternates: getToolsIndexAlternates('el'),
  openGraph: {
    title: 'Δωρεάν εργαλεία | Εικόνες, SEO, χρώματα, favicon',
    description: '10 δωρεάν εργαλεία: μετατροπέας WebP, δημιουργία favicon, μετρητής λέξεων, εξαγωγή χρωμάτων και κωδικοί QR. Για ιστοσελίδες και μέσα κοινωνικής δικτύωσης.',
    url: toAbsoluteUrl('/el/ergaleia'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Δωρεάν εργαλεία',
  description: '10 δωρεάν εργαλεία για ιστοσελίδες, μέσα κοινωνικής δικτύωσης και εκτύπωση.',
  url: toAbsoluteUrl('/el/ergaleia'),
  inLanguage: 'el',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Βελτιστοποίηση εικόνων' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Χρώματα και branding' },
    { '@type': 'Thing', name: 'Γεννήτριες' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Μετατροπέας JPG/PNG σε WebP',
        url: toAbsoluteUrl('/el/ergaleia/metatropeas-jpg-png-se-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Επεξεργασία εικόνας',
        url: toAbsoluteUrl('/el/ergaleia/epexergasia-eikonas'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Δημιουργία favicon',
        url: toAbsoluteUrl('/el/ergaleia/dorean-dimiourgia-favicon'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Έλεγχος meta τίτλου και περιγραφής',
        url: toAbsoluteUrl('/el/ergaleia/elegkhos-meta-titlou-kai-perigrafis'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Μετρητής λέξεων και χαρακτήρων',
        url: toAbsoluteUrl('/el/ergaleia/metritis-lexeon-kai-charaktiron'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Δημιουργία υπογραφής email',
        url: toAbsoluteUrl('/el/ergaleia/dorean-dimiourgia-ypografis-email'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Έλεγχος αντίθεσης χρωμάτων',
        url: toAbsoluteUrl('/el/ergaleia/elegkhos-kontrast-chromaton'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Εξαγωγή χρωμάτων από εικόνα',
        url: toAbsoluteUrl('/el/ergaleia/exagogi-chromaton-apo-eikona'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Δημιουργία παλέτας χρωμάτων',
        url: toAbsoluteUrl('/el/ergaleia/dimiourgia-paletas-chromaton'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Δωρεάν δημιουργία κωδικού QR',
        url: toAbsoluteUrl('/el/ergaleia/dorean-dimiourgia-kodikou-qr'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Πόσο κοστίζουν τα εργαλεία;', answer: 'Τίποτα. Όλα τα εργαλεία είναι εντελώς δωρεάν, χωρίς συνδρομές και κρυφές χρεώσεις.' },
  {
    question: 'Τα αρχεία μου αποστέλλονται σε διακομιστή;',
    answer: 'Όχι. Όλα τα εργαλεία λειτουργούν απευθείας στο πρόγραμμα περιήγησης. Τα αρχεία δεν φεύγουν ποτέ από τη συσκευή σας και δεν αποθηκεύονται πουθενά.',
  },
  { question: 'Χρειάζομαι λογαριασμό;', answer: 'Όχι. Μπορείτε να χρησιμοποιήσετε τα εργαλεία αμέσως χωρίς σύνδεση ή εγγραφή.' },
  { question: 'Υπάρχουν όρια χρήσης;', answer: 'Όχι. Χρησιμοποιήστε τα χωρίς περιορισμούς – χωρίς ημερήσιο όριο, χωρίς όριο αρχείων, χωρίς όριο μετατροπών.' },
  {
    question: 'Για τι χρησιμεύουν τα εργαλεία;',
    answer:
      'Βοηθούν στην προετοιμασία υλικού για ιστοσελίδες, μέσα κοινωνικής δικτύωσης και εκτύπωση: βελτιστοποίηση εικόνων, δημιουργία favicon, έλεγχος μήκους κειμένου, δημιουργία κωδικών QR, επιλογή χρωμάτων και έλεγχος αναγνωσιμότητας.',
  },
  {
    question: 'Τα εργαλεία λειτουργούν σε κινητό;',
    answer: 'Ναι, αλλά ορισμένα εργαλεία (μετατροπέας WebP, δημιουργία favicon) λειτουργούν καλύτερα σε υπολογιστή, καθώς επεξεργάζονται μεγαλύτερα αρχεία.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Δωρεάν εργαλεία"
        description="Μετατροπέας εικόνων, δημιουργία favicon, μετρητής λέξεων, εργαλεία χρωμάτων και κωδικοί QR. Χωρίς εγγραφή, χωρίς περιορισμούς – όλα λειτουργούν στο πρόγραμμα περιήγησης."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Εικόνες και favicon"
          description="Εργαλεία προετοιμασίας εικόνων, γραφικών και εικονιδίων για ιστοσελίδες και μέσα κοινωνικής δικτύωσης."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Μετατροπέας JPG/PNG σε WebP',
              topImageAlt: 'Μετατροπέας JPG/PNG σε WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Μετατρέψτε εικόνες JPG και PNG σε μορφή <strong>WebP</strong> και μειώστε το μέγεθος αρχείων. Ταχύτερη φόρτωση σελίδων.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/el/ergaleia/metatropeas-jpg-png-se-webp">
                      Άνοιγμα εργαλείου
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Επεξεργασία εικόνας',
              topImageAlt: 'Επεξεργασία εικόνας Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Περικόψτε την εικόνα σας για μέσα κοινωνικής δικτύωσης ή ιστοσελίδα. Επιλέξτε προκαθορισμένη μορφή ή εισάγετε προσαρμοσμένες διαστάσεις – κατεβάστε σε PNG, JPG ή WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/el/ergaleia/epexergasia-eikonas">
                      Άνοιγμα εργαλείου
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Δημιουργία favicon',
              topImageAlt: 'Δημιουργία favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Δημιουργήστε <strong>favicon.ico</strong> και εικονίδια PNG 180x180, 192x192 και 512x512 από μία εικόνα – σύμφωνα με τις απαιτήσεις προγραμμάτων περιήγησης και Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/el/ergaleia/dorean-dimiourgia-favicon">
                      Άνοιγμα εργαλείου
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Κείμενο και SEO"
          description="Εργαλεία ελέγχου μήκους κειμένου, meta ετικετών και προεπισκόπησης σελίδας στα αποτελέσματα αναζήτησης."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Έλεγχος meta τίτλου και περιγραφής',
              topImageAlt: 'Έλεγχος meta τίτλου και περιγραφής Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Ελέγξτε τον αριθμό χαρακτήρων και λέξεων καθώς και το πλάτος σε pixel – με προεπισκόπηση Google. Αποφύγετε κομμένους τίτλους και περιγραφές στα αποτελέσματα αναζήτησης.</p>
                  <div className="mt-4">
                    <Button arrow link="/el/ergaleia/elegkhos-meta-titlou-kai-perigrafis">
                      Άνοιγμα εργαλείου
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Μετρητής λέξεων και χαρακτήρων',
              topImageAlt: 'Μετρητής λέξεων και χαρακτήρων Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ελέγξτε το μήκος κειμένου και αξιολογήστε αν ταιριάζει σε αρχική σελίδα, σελίδα υπηρεσιών, άρθρο ή περιγραφή προϊόντος. Μετρά λέξεις, χαρακτήρες, παραγράφους και χρόνο ανάγνωσης.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/el/ergaleia/metritis-lexeon-kai-charaktiron">
                      Άνοιγμα εργαλείου
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Email και επικοινωνία"
          description="Εργαλεία για επαγγελματική επικοινωνία μέσω email και ενιαία οπτική ταυτότητα."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Δημιουργία υπογραφής email',
              topImageAlt: 'Δημιουργία υπογραφής email Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Δημιουργήστε επαγγελματική υπογραφή email σε λίγα λεπτά. Εισάγετε τα στοιχεία σας, επιλέξτε χρώματα και αντιγράψτε τον έτοιμο κώδικα HTML στο Gmail, Outlook ή άλλη εφαρμογή.</p>
                  <div className="mt-4">
                    <Button arrow link="/el/ergaleia/dorean-dimiourgia-ypografis-email">
                      Άνοιγμα εργαλείου
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Κωδικοί QR"
          description="Δημιουργία κωδικών QR για ιστοσελίδες, επαγγελματικές κάρτες, μενού και έντυπα."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Δωρεάν δημιουργία κωδικού QR',
              topImageAlt: 'Δημιουργία κωδικού QR Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Δημιουργήστε κωδικό QR για ιστοσελίδα, vCard, μενού εστιατορίου ή φυλλάδιο. Εξαγωγή σε PNG και SVG – χωρίς σύνδεση, χωρίς περιορισμούς.</p>
                  <div className="mt-4">
                    <Button arrow link="/el/ergaleia/dorean-dimiourgia-kodikou-qr">
                      Άνοιγμα εργαλείου
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Χρώματα και προσβασιμότητα"
          description="Εργαλεία εργασίας με χρώματα, αντίθεση και προσβασιμότητα WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Έλεγχος αντίθεσης χρωμάτων',
              topImageAlt: 'Έλεγχος αντίθεσης χρωμάτων Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ελέγξτε αν τα χρώματα κειμένου και φόντου είναι ευανάγνωστα. Εισάγετε κωδικούς χρωμάτων, ελέγξτε την αναλογία αντίθεσης σύμφωνα με το πρότυπο <strong>WCAG</strong> και
                    χρησιμοποιήστε τη λειτουργία <strong>Match</strong> για αυτόματη διόρθωση.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/el/ergaleia/elegkhos-kontrast-chromaton">
                      Άνοιγμα εργαλείου
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Εξαγωγή χρωμάτων από εικόνα',
              topImageAlt: 'Εξαγωγή χρωμάτων από εικόνα Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Ανεβάστε μια φωτογραφία ή λογότυπο – το εργαλείο θα εξάγει τα κυρίαρχα χρώματα. Αντιγράψτε κωδικούς HEX με ένα κλικ και χρησιμοποιήστε τους οπουδήποτε.</p>
                  <div className="mt-4">
                    <Button arrow link="/el/ergaleia/exagogi-chromaton-apo-eikona">
                      Άνοιγμα εργαλείου
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Δημιουργία παλέτας χρωμάτων',
              topImageAlt: 'Δημιουργία παλέτας χρωμάτων Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Επιλέξτε ένα βασικό χρώμα και δημιουργήστε 9 παλέτες: μονοχρωματική, συμπληρωματική, τριαδική, παστέλ, σκούρα και άλλες. Αντιγράψτε κωδικούς HEX με ένα κλικ.</p>
                  <div className="mt-4">
                    <Button arrow link="/el/ergaleia/dimiourgia-paletas-chromaton">
                      Άνοιγμα εργαλείου
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Τι είναι τα εργαλεία Arteon;">
          <p className="mb-4">
            10 δωρεάν εργαλεία για την προετοιμασία υλικού για ιστοσελίδες, μέσα κοινωνικής δικτύωσης και εκτύπωση – μετατροπέας WebP, δημιουργία favicon, μετρητής λέξεων, εξαγωγή χρωμάτων, δημιουργία
            παλετών και κωδικοί QR.
          </p>
          <p>Όλα τα εργαλεία λειτουργούν στο πρόγραμμα περιήγησης – τα αρχεία δεν αποστέλλονται ποτέ σε διακομιστή. Χρησιμοποιήστε τα χωρίς εγγραφή και χωρίς περιορισμούς.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Γιατί να χρησιμοποιήσετε τα εργαλεία Arteon;"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Απόλυτο απόρρητο',
              description: 'Όλα τα εργαλεία επεξεργάζονται αρχεία τοπικά στο πρόγραμμα περιήγησης. Τίποτα δεν αποστέλλεται σε διακομιστή – τα δεδομένα εξαφανίζονται όταν κλείσετε την καρτέλα.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Χωρίς όρια χρήσης',
              description: 'Χρησιμοποιήστε τα χωρίς περιορισμούς – χωρίς ημερήσιο όριο, χωρίς όριο αρχείων, χωρίς όριο μετατροπών. Όσες φορές χρειάζεστε.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Χωρίς εγγραφή', description: 'Δεν χρειάζεται λογαριασμός. Ανοίξτε το εργαλείο, χρησιμοποιήστε το, τέλος.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Διαθέσιμα στα Ελληνικά', description: 'Όλα τα εργαλεία είναι διαθέσιμα στα ελληνικά – διεπαφή, οδηγίες και ειδοποιήσεις.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Συχνές ερωτήσεις σχετικά με τα εργαλεία μας" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-el" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
