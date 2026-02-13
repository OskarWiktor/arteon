import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import QrCodeGenerator from '@/components/sections/tools/QrCodeGenerator';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionFeatureComparison from '@/components/ui/sections/SectionFeatureComparison';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiQrCodeLine,
  RiDownloadLine,
  RiSettings3Line,
  RiGlobalLine,
  RiContactsLine,
  RiPaletteLine,
  RiInfinityLine,
  RiFileTextLine,
  RiMailLine,
  RiPhoneLine,
  RiShieldCheckLine,
  RiRulerLine,
  RiPrinterLine,
  RiSmartphoneLine,
  RiContactsBookLine,
  RiRestaurantLine,
  RiBuilding2Line,
  RiHome4Line,
  RiTruckLine,
  RiShoppingCartLine,
  RiCalendarEventLine,
  RiHospitalLine,
  RiContrastLine,
  RiLayoutGridLine,
  RiEyeLine,
  RiLockLine,
  RiStackLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Générateur de codes QR gratuit en ligne – PNG et SVG',
  description: 'Générateur de codes QR gratuit en ligne. Créez des codes QR pour sites web, vCards, menus ou flyers. Export en PNG et SVG, sans inscription, sans limite.',
  alternates: {
    canonical: toAbsoluteUrl('/fr/outils/generateur-de-codes-qr-gratuit'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr'),
      en: toAbsoluteUrl('/en/tools/free-qr-code-generator'),
      de: toAbsoluteUrl('/de/werkzeuge/kostenloser-qr-code-generator'),
      es: toAbsoluteUrl('/es/herramientas/generador-de-codigos-qr-gratuito'),
      fr: toAbsoluteUrl('/fr/outils/generateur-de-codes-qr-gratuit'),
    },
  },
  openGraph: {
    title: 'Générateur de codes QR gratuit en ligne',
    description: 'Créez des codes QR pour sites web, vCards, menus ou flyers. Export en PNG et SVG, sans inscription.',
    url: toAbsoluteUrl('/fr/outils/generateur-de-codes-qr-gratuit'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-kodu-qr.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Générateur de codes QR gratuit en ligne – PNG et SVG',
  alternateName: ['Générateur de codes QR en ligne', 'Code QR pour site web', 'Générateur de vCard QR', 'Code QR pour menu de restaurant', 'Code QR personnalisé'],
  url: toAbsoluteUrl('/fr/outils/generateur-de-codes-qr-gratuit'),
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'QRCodeGenerator',
  operatingSystem: 'Any',
  description: 'Générateur de codes QR gratuit. Créez des codes QR pour URL, vCards, texte, e-mail et téléphone. Couleurs et taille personnalisables. Export en PNG et SVG.',
  featureList: [
    'Codes QR pour URL, vCard, texte, e-mail, téléphone',
    'Couleurs personnalisables (premier plan et arrière-plan)',
    'Taille réglable',
    'Export en PNG et SVG',
    'Exécution locale dans le navigateur',
    'Sans inscription et sans limite',
  ],
  inLanguage: 'fr',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment créer un code QR',
  description: 'Saisissez le contenu (URL, vCard, texte), personnalisez les couleurs et la taille, puis téléchargez le code QR en PNG ou SVG.',
  url: toAbsoluteUrl('/fr/outils/generateur-de-codes-qr-gratuit'),
  step: [
    { '@type': 'HowToStep', name: 'Choisir le type de contenu', text: 'Sélectionnez le type de code QR : URL, vCard, texte, e-mail ou téléphone.' },
    { '@type': 'HowToStep', name: 'Saisir le contenu', text: 'Saisissez l’URL, les coordonnées ou le texte que le code QR doit contenir.' },
    { '@type': 'HowToStep', name: 'Personnaliser et télécharger', text: 'Ajustez les couleurs et la taille, puis téléchargez le code QR en PNG ou SVG.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Quels types de codes QR puis-je créer ?',
    answer:
      'Vous pouvez créer des codes QR pour : les URL de sites web (le type le plus courant), les vCards (carte de visite numérique avec nom, téléphone, e-mail), le texte libre, les adresses e-mail (ouverture de l’application de messagerie) et les numéros de téléphone (appel direct).',
    answerSchemaText: 'URL, vCard, texte, e-mail, téléphone.',
  },
  {
    question: 'Quels formats de téléchargement sont disponibles ?',
    answer:
      'Le code QR peut être téléchargé en PNG (image raster, idéal pour le web et les présentations) et en SVG (image vectorielle, idéal pour l’impression sans perte de qualité à n’importe quelle taille).',
    answerSchemaText: 'PNG (raster, pour le web) et SVG (vectoriel, pour l’impression).',
  },
  {
    question: 'Puis-je personnaliser les couleurs du code QR ?',
    answer:
      'Oui. Vous pouvez modifier la couleur de premier plan (les modules) et la couleur d’arrière-plan du code QR. Veillez à maintenir un contraste suffisant pour que le code reste lisible par les scanners.',
    answerSchemaText: 'Oui. Couleur de premier plan et d’arrière-plan personnalisables.',
  },
  {
    question: 'Quelle taille de code QR est recommandée ?',
    answer:
      'Pour le web, 200–400 pixels suffisent généralement. Pour l’impression, utilisez le format SVG ou un PNG d’au moins 600 pixels. Pour des flyers ou des affiches, un code QR d’au moins 2 cm × 2 cm à 300 DPI est recommandé.',
    answerSchemaText: 'Web : 200–400 px. Impression : SVG ou PNG 600 px+. Flyers : min. 2 cm × 2 cm à 300 DPI.',
  },
  {
    question: 'Qu’est-ce qu’une vCard dans un code QR ?',
    answer:
      'Une vCard est une carte de visite numérique. Lorsqu’un utilisateur scanne le code QR, les coordonnées (nom, téléphone, e-mail, entreprise) s’ajoutent directement aux contacts de son téléphone – sans saisie manuelle.',
    answerSchemaText: 'Carte de visite numérique. Le scan ajoute les coordonnées directement aux contacts du téléphone.',
  },
  {
    question: 'Mes données sont-elles envoyées à un serveur ?',
    answer: 'Non. Le code QR est généré localement dans votre navigateur. Aucune donnée n’est envoyée ni stockée.',
    answerSchemaText: 'Non. Génération locale dans le navigateur.',
  },
];

export default function QrCodeGeneratorPage() {
  return (
    <>
      <Script id="ld-json-qr-code-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-qr-howto-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Générateur de codes QR"
        description="Créez des codes QR pour des sites web, des vCards, des menus ou des flyers. Personnalisez les couleurs et la taille, puis téléchargez en PNG ou SVG – tout s’exécute localement dans votre navigateur."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-kodu-qr.webp"
      />

      <Breadcrumbs second={{ href: '/fr/outils', label: 'Outils' }} third={{ href: '/fr/outils/generateur-de-codes-qr-gratuit', label: 'Générateur QR' }} includeJsonLd locale="fr" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <QrCodeGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Pourquoi utiliser des codes QR ?">
          <p className="text-mid">
            Les codes QR sont devenus un outil essentiel pour relier le monde physique au monde numérique. Ils permettent aux utilisateurs d’accéder instantanément à un site web, d’ajouter des
            coordonnées à leurs contacts ou de consulter un menu – simplement en scannant le code avec leur téléphone.
          </p>
          <p className="text-mid mt-3">
            Cet outil génère des codes QR pour différents types de contenu : URL, vCards, texte, e-mail et téléphone. Vous pouvez personnaliser les couleurs et la taille, puis télécharger le code en
            PNG (pour le web) ou SVG (pour l’impression).
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Comment utiliser le générateur"
          description="La création d’un code QR ne prend que quelques secondes :"
          grid="three"
          items={[
            { icon: <RiQrCodeLine className="h-6 w-6" />, title: '1. Choisir le type', description: 'Sélectionnez le type de contenu : URL, vCard, texte, e-mail ou téléphone.' },
            { icon: <RiSettings3Line className="h-6 w-6" />, title: '2. Saisir et personnaliser', description: 'Saisissez le contenu, ajustez les couleurs et la taille du code QR.' },
            { icon: <RiDownloadLine className="h-6 w-6" />, title: '3. Télécharger', description: 'Téléchargez le code QR en PNG ou SVG.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Types de codes QR"
          description="Choisissez le type de contenu adapté à votre besoin :"
          grid="three"
          items={[
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'URL / Site web', description: 'Redirigez les utilisateurs vers votre site, page d’atterrissage ou boutique en ligne.' },
            { icon: <RiContactsLine className="h-6 w-6" />, title: 'vCard', description: 'Carte de visite numérique – le scan ajoute vos coordonnées aux contacts du téléphone.' },
            { icon: <RiFileTextLine className="h-6 w-6" />, title: 'Texte', description: 'Texte libre – code Wi-Fi, message, instructions ou tout autre texte court.' },
            { icon: <RiMailLine className="h-6 w-6" />, title: 'E-mail', description: 'Ouvre l’application de messagerie avec l’adresse, l’objet et le corps préremplis.' },
            { icon: <RiPhoneLine className="h-6 w-6" />, title: 'Téléphone', description: 'Appel direct – le scan lance un appel vers le numéro indiqué.' },
            { icon: <RiPaletteLine className="h-6 w-6" />, title: 'Personnalisation', description: 'Couleurs de premier plan et d’arrière-plan librement configurables.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="PNG ou SVG – quel format choisir ?"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiSmartphoneLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>PNG</strong> – image raster. Idéal pour le web, les e-mails et les présentations.
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiPrinterLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>SVG</strong> – image vectorielle. Idéal pour l’impression (flyers, affiches, cartes de visite). Qualité parfaite à toute taille.
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid">Le choix du format dépend de l’utilisation prévue :</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>PNG</strong> – pour le web, les e-mails et les présentations. Taille recommandée : 200–400 px.
            </li>
            <li>
              <strong>SVG</strong> – pour l’impression. Mise à l’échelle sans perte de qualité, idéal pour flyers, affiches et cartes de visite.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Applications des codes QR : cartes de visite, flyers, menus"
          description="Les codes QR sont utilisés dans de nombreux secteurs et scénarios :"
          grid="three"
          items={[
            {
              icon: <RiContactsBookLine className="h-6 w-6" />,
              title: 'Cartes de visite',
              description: 'Un code vCard sur une carte de visite permet au destinataire d’enregistrer le contact en un seul scan, sans saisie manuelle.',
            },
            {
              icon: <RiRestaurantLine className="h-6 w-6" />,
              title: 'Menus de restaurant',
              description: 'Un code QR sur la table renvoie vers le menu numérique. Une solution hygiénique très répandue depuis la pandémie de COVID-19.',
            },
            { icon: <RiPrinterLine className="h-6 w-6" />, title: 'Flyers et affiches', description: 'Code QR avec lien vers une page produit, un formulaire d’inscription ou une offre spéciale.' },
            { icon: <RiBuilding2Line className="h-6 w-6" />, title: 'Emballages produits', description: 'Lien vers le mode d’emploi, la carte de garantie ou le site du fabricant.' },
            {
              icon: <RiHospitalLine className="h-6 w-6" />,
              title: 'Cabinets médicaux',
              description: 'Codes QR sur les cartes patient renvoyant au portail patient ou au système de prise de rendez-vous.',
            },
            { icon: <RiHome4Line className="h-6 w-6" />, title: 'Immobilier', description: 'Codes sur les panneaux renvoyant vers l’annonce complète avec galerie photos et détails.' },
            {
              icon: <RiTruckLine className="h-6 w-6" />,
              title: 'Entrepôts et logistique',
              description: 'Étiquettes QR pour suivre les lots de produits, les emplacements de stockage et l’historique des expéditions.',
            },
            {
              icon: <RiShoppingCartLine className="h-6 w-6" />,
              title: 'E-commerce',
              description: 'Codes sur les emballages renvoyant vers les instructions de retour, les avis clients ou les programmes de fidélité.',
            },
            { icon: <RiCalendarEventLine className="h-6 w-6" />, title: 'Événements et conférences', description: 'Billets avec codes QR pour une vérification rapide à l’entrée.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Personnalisation de l’apparence du code QR"
          variant="left"
          demo={
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Taille</span>
                <Badge variant="default" size="sm">
                  300 px
                </Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Marge</span>
                <Badge variant="default" size="sm">
                  4
                </Badge>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Couleur du code</span>
                <span className="inline-block h-6 w-6 rounded border border-neutral-200" style={{ backgroundColor: '#000000' }} />
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Couleur de fond</span>
                <span className="inline-block h-6 w-6 rounded border border-neutral-200" style={{ backgroundColor: '#ffffff' }} />
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Le générateur vous permet de personnaliser plusieurs paramètres qui affectent l’apparence et la lisibilité du code :</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Taille (px)</strong> – dimension du code en pixels. Pour l’impression standard (flyers, cartes de visite), choisissez 300-500 px. Pour un usage numérique, 150-200 px suffisent.
            </li>
            <li>
              <strong>Marge</strong> – zone blanche autour du code nécessaire à un scan correct. La valeur recommandée est 2-4. Une valeur de 0 peut gêner le scan sur fond sombre.
            </li>
            <li>
              <strong>Couleur du code QR</strong> – noir par défaut (#000000). Vous pouvez la changer pour toute couleur sombre correspondant à votre identité visuelle.
            </li>
            <li>
              <strong>Couleur de fond</strong> – blanc par défaut (#ffffff). Vous pouvez la changer pour toute couleur claire. Le générateur vous avertira si le contraste est trop faible.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Conseil :</strong> Maintenez un contraste élevé entre le code et le fond (minimum 3:1). Un code sombre sur fond clair se scanne plus facilement.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Niveaux de correction d’erreurs : L, M, Q, H"
          demo={
            <div className="space-y-2">
              {[
                { level: 'L', pct: '7%', label: 'Bas', width: '7%' },
                { level: 'M', pct: '15%', label: 'Moyen', width: '15%' },
                { level: 'Q', pct: '25%', label: 'Quartile', width: '25%' },
                { level: 'H', pct: '30%', label: 'Haut', width: '30%' },
              ].map((item) => (
                <div key={item.level} className="rounded-lg border border-neutral-200 bg-white p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-dark text-sm! font-medium">
                      {item.level} ({item.label})
                    </span>
                    <Badge variant={item.level === 'M' ? 'selected' : 'default'} size="sm">
                      {item.pct}
                    </Badge>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-100">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${parseInt(item.pct)}%`, minWidth: '12px' }} />
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <p className="text-mid mb-4">
            La correction d’erreurs est un mécanisme qui permet de lire un code QR même lorsqu’une partie est endommagée, sale ou masquée. Le générateur utilise l’algorithme Reed-Solomon, un standard
            pour les codes QR.
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>L (Bas) – 7 %</strong> – redondance minimale, le code est plus compact. À choisir lorsque le code sera utilisé dans des conditions idéales (écran, impression haute qualité).
            </li>
            <li>
              <strong>M (Moyen) – 15 %</strong> – valeur par défaut, bon équilibre entre capacité et résistance. Adapté à la plupart des usages.
            </li>
            <li>
              <strong>Q (Quartile) – 25 %</strong> – résistance accrue aux dommages. À choisir pour les codes imprimés sur des matériaux susceptibles de se salir.
            </li>
            <li>
              <strong>H (Haut) – 30 %</strong> – résistance maximale. Recommandé pour les supports extérieurs, les emballages et les situations où le code peut être partiellement masqué (ex. : logo au
              centre).
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Remarque :</strong> Un niveau de correction plus élevé signifie un code plus grand et plus complexe. Avec de grandes quantités de données et le niveau H, le code peut devenir très
            dense.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionFeatureComparison
          title="PNG vs SVG : quel format choisir pour l’impression ?"
          plans={[
            { id: 'png', name: 'PNG (raster)' },
            { id: 'svg', name: 'SVG (vectoriel)', highlighted: true },
          ]}
          features={[
            { name: 'Sites web et réseaux sociaux', values: { png: true, svg: true } },
            { name: 'Flyers et cartes de visite', values: { png: true, svg: true } },
            { name: 'Affiches et banderoles (grand format)', values: { png: false, svg: true } },
            { name: 'Mise à l’échelle sans perte de qualité', values: { png: false, svg: true } },
            { name: 'Édition dans un logiciel graphique', values: { png: false, svg: true } },
            { name: 'Taille de fichier réduite', values: { png: false, svg: true } },
            { name: 'Présentations', values: { png: true, svg: true } },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Conseils pour l’impression des codes QR"
          description="Pour garantir la lisibilité du code QR après impression, suivez ces règles :"
          grid="two"
          items={[
            {
              icon: <RiRulerLine className="h-6 w-6" />,
              title: 'Taille minimale',
              description: 'Le code doit mesurer au moins 2×2 cm pour un scan à courte distance. Plus la distance de scan est grande, plus le code doit être grand.',
            },
            { icon: <RiContrastLine className="h-6 w-6" />, title: 'Contraste', description: 'Code sombre sur fond clair. Évitez les couleurs pastel et le faible contraste.' },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Marge autour du code',
              description: 'Conservez un espace vide autour du code. Ne placez pas d’autres éléments graphiques trop près : la marge est essentielle pour un scan correct.',
            },
            { icon: <RiEyeLine className="h-6 w-6" />, title: 'Tests', description: 'Avant l’impression en masse, testez le code sur différents téléphones et dans diverses conditions d’éclairage.' },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Niveau de correction',
              description: 'Pour l’impression extérieure et les matériaux sujets à l’usure, choisissez le niveau Q ou H.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Qu’est-ce qui rend ce générateur spécial ?"
          grid="two"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Génération locale dans le navigateur',
              description: 'Les données saisies dans le générateur ne sont envoyées à aucun serveur : tout le traitement se fait localement sur votre appareil.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Cinq types de données en un outil',
              description: 'URL, texte, carte de visite vCard, e-mail et téléphone : chaque type génère un code QR dans le standard approprié.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Personnalisation de l’apparence',
              description: 'Couleurs du code et du fond, taille en pixels, marge et niveau de correction d’erreurs : chaque paramètre est configurable.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Quatre niveaux de correction d’erreurs',
              description: 'L’algorithme Reed-Solomon vous permet de choisir la résistance du code aux dommages : de 7 % (L) à 30 % (H).',
            },
            { icon: <RiEyeLine className="h-6 w-6" />, title: 'Aperçu en direct', description: 'Voyez le résultat immédiatement après la saisie, sans cliquer sur « Générer ».' },
            { icon: <RiDownloadLine className="h-6 w-6" />, title: 'Export PNG et SVG', description: 'Téléchargez le code dans le format adapté à votre usage.' },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/fr/outils/generateur-de-codes-qr-gratuit')}
          title="Questions fréquentes sur le générateur de codes QR"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: "Un code QR g\u00e9n\u00e9r\u00e9 avec cet outil expire-t-il ?",
              answer:
                "Non. Un code QR statique (comme celui g\u00e9n\u00e9r\u00e9 par cet outil) n'expire pas. Le contenu \u2013 par ex. une URL ou des donn\u00e9es de carte de visite \u2013 est cod\u00e9 directement dans le code. Tant que la page de destination existe, le code fonctionnera.",
              answerSchemaText: "Non. Les codes QR statiques n'expirent pas. Le contenu est cod\u00e9 directement dans le code.",
            },
            {
              question: "En quoi une vCard diff\u00e8re-t-elle d'un code QR avec du texte ?",
              answer:
                "Un code QR vCard contient des donn\u00e9es de contact dans un format standardis\u00e9 (nom, entreprise, t\u00e9l\u00e9phone, e-mail, adresse). Lors du scan, le t\u00e9l\u00e9phone propose automatiquement d'enregistrer le contact dans le r\u00e9pertoire. Un code texte affiche les donn\u00e9es en texte brut \u2013 sans enregistrement automatique.",
              answerSchemaText: "vCard = format de contact standardis\u00e9 avec enregistrement automatique. Texte = texte brut uniquement.",
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Découvrir d’autres outils" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
