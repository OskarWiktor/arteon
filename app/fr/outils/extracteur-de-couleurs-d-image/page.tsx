import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import PaletteExtractor from '@/components/sections/tools/PaletteExtractor';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTimeline from '@/components/ui/sections/SectionTimeline';
import Link from 'next/link';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiUploadLine,
  RiPaletteLine,
  RiFileCopyLine,
  RiShieldCheckLine,
  RiGlobalLine,
  RiImageLine,
  RiSearchEyeLine,
  RiEraserLine,
  RiCropLine,
  RiZoomInLine,
  RiGroupLine,
  RiStarLine,
  RiContrastLine,
  RiBarChartLine,
  RiAlertLine,
  RiErrorWarningLine,
  RiFileWarningLine,
  RiFileImageLine,
  RiBrushLine,
  RiLayoutMasonryLine,
  RiPaintBrushLine,
} from 'react-icons/ri';

const LOCALE = 'fr' as const;
const TOOL_KEY = 'paletteExtractor' as const;

export const metadata: Metadata = {
  title: 'Extracteur de couleurs d’image gratuit en ligne – palette à partir d’une photo',
  description: 'Extracteur de couleurs gratuit en ligne. Importez une photo ou un logo et obtenez une palette de jusqu’à 12 couleurs dominantes avec codes HEX et RGB. Sans inscription.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Extracteur de couleurs d’image gratuit en ligne',
    description: 'Importez une photo ou un logo et obtenez une palette de couleurs dominantes avec codes HEX et RGB.',
    url: toAbsoluteUrl('/fr/outils/extracteur-de-couleurs-d-image'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Extracteur de couleurs d’image en ligne',
  alternateName: ['Palette de couleurs à partir d’une image', 'Extracteur de couleurs dominantes', 'Générateur de palette à partir d’une photo'],
  url: toAbsoluteUrl('/fr/outils/extracteur-de-couleurs-d-image'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'ColorTool',
  operatingSystem: 'Any',
  description: 'Extracteur de couleurs gratuit. Importez une photo ou un logo et obtenez une palette de jusqu’à 12 couleurs dominantes (HEX et RGB). Exécution locale.',
  featureList: [
    'Extraction de jusqu’à 12 couleurs dominantes',
    'Codes HEX et RGB',
    'Copie en un clic',
    'Prise en charge PNG, JPG/JPEG, SVG',
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
  name: 'Comment extraire les couleurs d’une image',
  description: 'Importez une image et obtenez une palette de couleurs dominantes avec des codes HEX copiables.',
  url: toAbsoluteUrl('/fr/outils/extracteur-de-couleurs-d-image'),
  step: [
    { '@type': 'HowToStep', name: 'Importer une image', text: 'Glissez-déposez une image ou sélectionnez un fichier PNG, JPG ou SVG.' },
    { '@type': 'HowToStep', name: 'Voir la palette', text: 'L’outil extrait automatiquement les couleurs dominantes de l’image.' },
    { '@type': 'HowToStep', name: 'Copier les codes', text: 'Cliquez sur «Copier» pour copier le code HEX d’une couleur dans le presse-papiers.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Combien de couleurs l’outil extrait-il ?',
    answer: 'L’outil extrait jusqu’à 12 couleurs dominantes de l’image. Le nombre exact dépend de la complexité de l’image – une photo avec peu de couleurs générera moins de résultats.',
    answerSchemaText: 'Jusqu’à 12 couleurs dominantes, selon la complexité de l’image.',
  },
  {
    question: 'Quels formats d’image sont pris en charge ?',
    answer: 'L’outil prend en charge les formats PNG, JPG/JPEG et SVG. Les autres formats ne sont pas pris en charge.',
    answerSchemaText: 'PNG, JPG/JPEG et SVG.',
  },
  {
    question: 'Comment fonctionne l’extraction des couleurs ?',
    answer:
      'L’outil analyse les pixels de l’image et utilise un algorithme de regroupement pour identifier les couleurs dominantes. Le résultat est une palette représentant les couleurs les plus présentes dans l’image.',
    answerSchemaText: 'Analyse des pixels et regroupement pour identifier les couleurs dominantes.',
  },
  {
    question: 'Mes images sont-elles envoyées à un serveur ?',
    answer: 'Non. Tout le traitement s’effectue localement dans votre navigateur. Vos images ne quittent jamais votre ordinateur.',
    answerSchemaText: 'Non. Traitement local dans le navigateur.',
  },
  {
    question: 'À quoi servent les couleurs extraites ?',
    answer:
      'Les couleurs extraites peuvent servir de base pour une palette de marque, un schéma de couleurs pour un site web, des publications sur les réseaux sociaux ou tout projet de design. Copiez les codes HEX et utilisez-les dans CSS, Figma, Adobe ou d’autres outils.',
    answerSchemaText: 'Palette de marque, schéma de couleurs web, réseaux sociaux, design.',
  },
];

export default function PaletteExtractorPage() {
  return (
    <>
      <Script id="ld-json-palette-extractor-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-palette-howto-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Extracteur de couleurs d’image"
        description="Importez une photo ou un logo et l’outil extraira les couleurs dominantes. Copiez les codes HEX en un clic – idéal pour l’UI, le branding et les réseaux sociaux."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp"
      />

      <Breadcrumbs second={{ href: '/fr/outils', label: 'Outils' }} third={{ href: '/fr/outils/extracteur-de-couleurs-d-image', label: 'Extracteur de couleurs' }} includeJsonLd locale="fr" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <PaletteExtractor />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Extraire les couleurs dominantes d’une image">
          <p className="text-mid">
            L’extracteur de couleurs analyse votre image et identifie les couleurs dominantes. Le résultat est une palette de couleurs avec des codes HEX copiables en un clic – prête à être utilisée
            dans vos projets de design, votre site web ou vos publications sur les réseaux sociaux.
          </p>
          <p className="text-mid mt-3">
            L’outil est particulièrement utile pour créer une palette de marque à partir d’un logo, trouver les couleurs dominantes d’une photo pour un schéma de couleurs cohérent, ou simplement
            identifier les couleurs d’une image que vous aimez.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Comment utiliser l’extracteur"
          description="L’extraction ne prend que quelques secondes :"
          grid="three"
          items={[
            { icon: <RiUploadLine className="h-6 w-6" />, title: '1. Importer une image', description: 'Glissez-déposez une image ou sélectionnez un fichier PNG, JPG ou SVG.' },
            { icon: <RiPaletteLine className="h-6 w-6" />, title: '2. Voir la palette', description: 'L’outil extrait automatiquement les couleurs dominantes de l’image.' },
            { icon: <RiFileCopyLine className="h-6 w-6" />, title: '3. Copier les codes', description: 'Cliquez sur «Copier» pour copier le code HEX dans le presse-papiers.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title={'Comment se pr\u00e9sente une palette de couleurs extraite ?'}
          demo={
            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-2">
                {['#2C5F2D', '#97BC62', '#DAA520', '#4169E1', '#8B4513', '#DC143C', '#2F4F4F', '#FF6347'].map((color) => (
                  <div key={color} className="flex flex-col items-center gap-1">
                    <div className="h-10 w-full rounded-lg border border-neutral-200" style={{ backgroundColor: color }} />
                    <span className="text-mid text-xs!">{color}</span>
                  </div>
                ))}
              </div>
              <p className="text-light text-xs!">{"Exemple de couleurs extraites d'une image de nature"}</p>
            </div>
          }
        >
          <p className="text-mid mb-4">
            {
              "Apr\u00e8s l'import d'une image, l'extracteur affiche une liste de couleurs dominantes class\u00e9es de la plus \u00e0 la moins pr\u00e9sente. Chaque couleur est accompagn\u00e9e de son code HEX et de sa valeur RGB \u2013 pr\u00eats \u00e0 \u00eatre coll\u00e9s dans CSS, Figma ou toute application graphique."
            }
          </p>
          <p className="text-mid">
            {
              "Le nombre de couleurs extraites d\u00e9pend du contenu de l'image. Une photo de paysage produira une palette plus riche (8\u201312 couleurs), tandis qu'un logo simple \u00e0 deux couleurs donnera moins d'\u00e9l\u00e9ments."
            }
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Quelles images donnent les meilleurs résultats ?"
          description="La qualité de la palette extraite dépend du type d’image importée :"
          grid="two"
          items={[
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Logos et graphiques à palette limitée',
              description: 'Les images avec peu de couleurs clairement séparées donnent les résultats les plus précis : l’extracteur identifie chaque couleur avec exactitude.',
            },
            {
              icon: <RiSearchEyeLine className="h-6 w-6" />,
              title: 'Photos avec un sujet clair',
              description: 'Les photos de produits, intérieurs ou paysages produisent également des palettes utiles, mais contiennent plus de nuances, y compris les couleurs d’ombres et de reflets.',
            },
            {
              icon: <RiEraserLine className="h-6 w-6" />,
              title: 'Fichiers PNG à fond transparent',
              description: 'Les pixels transparents sont automatiquement ignorés lors de l’analyse. Pour extraire les couleurs uniquement de l’objet (ex. : un logo), utilisez un PNG sans fond.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: 'Images sans grand fond uni',
              description: 'Lorsque le fond occupe la majeure partie de l’image, sa couleur domine les résultats. Avant d’importer, recadrez l’image sur la zone d’intérêt.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionTimeline
          title="Comment fonctionne l’extraction de couleurs ?"
          description="Après l’import du fichier, l’outil effectue plusieurs étapes en arrière-plan : toute l’analyse se fait localement dans le navigateur :"
          items={[
            {
              icon: <RiZoomInLine className="h-5 w-5" />,
              title: 'Redimensionnement de l’image',
              description: 'L’image est redimensionnée à environ 240 pixels de large. Cela accélère l’analyse même pour les très grandes photos, sans affecter la précision de détection des couleurs.',
            },
            {
              icon: <RiGroupLine className="h-5 w-5" />,
              title: 'Regroupement des couleurs similaires',
              description: 'Chaque pixel est analysé et les nuances similaires sont regroupées. Deux bleus presque identiques deviennent une seule couleur dans la palette.',
            },
            {
              icon: <RiStarLine className="h-5 w-5" />,
              title: 'Sélection des couleurs dominantes',
              description:
                'L’algorithme choisit les couleurs qui couvrent la plus grande surface de l’image. Le résultat est une liste de jusqu’à 12 couleurs classées de la plus à la moins dominante.',
            },
            {
              icon: <RiContrastLine className="h-5 w-5" />,
              title: 'Omission des pixels transparents',
              description:
                'Dans les fichiers PNG à fond transparent, ces zones ne sont pas incluses dans l’analyse : l’extracteur examine uniquement les couleurs visibles. L’ensemble du processus prend généralement moins d’une seconde.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Résolution de problèmes de l’extracteur de couleurs"
          grid="two"
          items={[
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: 'L’extracteur a renvoyé moins de 12 couleurs',
              description:
                'Le nombre de couleurs extraites dépend du contenu de l’image. Un logo simple à deux couleurs donnera 2-3 résultats : c’est le comportement normal. L’outil n’ajoute pas de couleurs artificielles ; il extrait uniquement celles qui apparaissent réellement dans l’image.',
            },
            {
              icon: <RiAlertLine className="h-6 w-6" />,
              title: 'Des couleurs inattendues sont apparues',
              description:
                'Il peut s’agir de couleurs d’ombres, de dégradés ou de reflets : les pixels dans ces zones ont des couleurs différentes de l’objet visible à première vue. Utiliser une image aux couleurs plus uniformes ou recadrer les zones sombres améliorera les résultats.',
            },
            {
              icon: <RiErrorWarningLine className="h-6 w-6" />,
              title: 'La couleur de fond domine les résultats',
              description:
                'Lorsque le fond couvre plus de surface que l’objet, sa couleur apparaîtra en premier dans la liste. Solution : utilisez un PNG à fond transparent ou recadrez l’image pour que l’objet occupe plus d’espace.',
            },
            {
              icon: <RiFileWarningLine className="h-6 w-6" />,
              title: 'Le fichier n’est pas accepté',
              description: 'L’outil accepte uniquement les formats PNG, JPG et SVG. Les fichiers dans d’autres formats (GIF, TIFF, HEIC, PDF) nécessitent une conversion préalable.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Qu’est-ce qui rend cet extracteur spécial ?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Analyse locale : l’image ne quitte jamais votre ordinateur',
              description: 'Toute l’extraction de couleurs se fait dans le navigateur. L’image n’est envoyée à aucun serveur et les données sont supprimées de la mémoire à la fermeture de la page.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Jusqu’à 12 couleurs dominantes d’une image',
              description: 'L’outil extrait jusqu’à 12 couleurs classées par dominance, suffisamment pour construire une palette complète pour un projet.',
            },
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: 'Trois formats d’image populaires',
              description: 'Formats pris en charge : PNG, JPG et SVG. Les fichiers PNG à fond transparent donnent les meilleurs résultats car les pixels transparents sont automatiquement ignorés.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Codes HEX et RGB prêts à coller',
              description: 'Chaque couleur extraite est accompagnée de son code HEX (ex. : #2C5F2D) et de sa valeur RGB. Le code peut être copié et collé directement dans CSS, Figma ou Photoshop.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Où utiliser les couleurs extraites d’une image ?"
          grid="two"
          items={[
            {
              icon: <RiBrushLine className="h-6 w-6" />,
              title: 'Construction d’identité visuelle',
              description:
                'Importez une photo qui capture l’ambiance de la marque (un paysage, un intérieur, une photo de produit) et extrayez des couleurs comme point de départ pour une palette de branding.',
            },
            {
              icon: <RiLayoutMasonryLine className="h-6 w-6" />,
              title: 'Visuels pour les réseaux sociaux',
              description:
                'Extrayez les couleurs d’une photo de produit et utilisez-les comme fonds ou accents. Les publications basées sur les couleurs d’une même source paraissent cohérentes sur le profil.',
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: 'Harmoniser les couleurs avec un site web',
              description:
                'Extrayez les couleurs du logo et utilisez-les comme palette du site : couleur principale, couleur d’accent, tons de fond. Les codes HEX se collent directement dans le CSS.',
            },
            {
              icon: <RiSearchEyeLine className="h-6 w-6" />,
              title: 'Enrichir une palette existante',
              description: (
                <p>
                  Une couleur de base extraite peut être utilisée dans le <Link href="/fr/outils/generateur-de-palettes-de-couleurs">générateur de palettes de couleurs</Link> pour créer un ensemble
                  complet de couleurs harmonieuses basé sur la théorie des couleurs.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/fr/outils/extracteur-de-couleurs-d-image')}
          title="Questions fréquentes sur l'extracteur de couleurs"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Puis-je copier toutes les couleurs de la palette en une seule fois ?',
              answer:
                "Actuellement, l'outil permet de copier les couleurs une par une \u2013 chaque couleur dispose d'un bouton qui copie le code HEX dans le presse-papiers. Le code copi\u00e9 peut \u00eatre coll\u00e9 directement dans Figma, Photoshop, CSS ou toute autre application.",
              answerSchemaText: 'Actuellement, les couleurs se copient une par une via le bouton \u00e0 c\u00f4t\u00e9 de chaque couleur.',
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
