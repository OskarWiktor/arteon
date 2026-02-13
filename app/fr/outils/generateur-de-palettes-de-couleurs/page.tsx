import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ColorPaletteGenerator from '@/components/sections/tools/ColorPaletteGenerator';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiPaletteLine,
  RiFileCopyLine,
  RiContrastLine,
  RiMagicLine,
  RiInfinityLine,
  RiColorFilterLine,
  RiGlobalLine,
  RiSmartphoneLine,
  RiPaintBrushLine,
  RiSettings3Line,
  RiRefreshLine,
  RiSearchLine,
  RiImageLine,
  RiSlideshowLine,
  RiBrushLine,
  RiErrorWarningLine,
  RiCodeLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Générateur de palettes de couleurs gratuit en ligne – 9 palettes à partir d’une couleur',
  description:
    'Générateur de palettes de couleurs gratuit. Choisissez une couleur et générez 9 palettes : monochromatique, complémentaire, triadique, pastel, sombre et plus. Codes HEX copiables en un clic.',
  alternates: {
    canonical: toAbsoluteUrl('/fr/outils/generateur-de-palettes-de-couleurs'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/generator-palet-kolorow'),
      en: toAbsoluteUrl('/en/tools/color-palette-generator'),
      de: toAbsoluteUrl('/de/werkzeuge/farbpaletten-generator'),
      es: toAbsoluteUrl('/es/herramientas/generador-de-paletas-de-colores'),
      fr: toAbsoluteUrl('/fr/outils/generateur-de-palettes-de-couleurs'),
    },
  },
  openGraph: {
    title: 'Générateur de palettes de couleurs gratuit en ligne',
    description: 'Choisissez une couleur et générez 9 palettes : monochromatique, complémentaire, triadique et plus.',
    url: toAbsoluteUrl('/fr/outils/generateur-de-palettes-de-couleurs'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palet-kolorow-online.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Générateur de palettes de couleurs en ligne – 9 palettes à partir d’une couleur',
  alternateName: ['Générateur de palettes en ligne', 'Schémas de couleurs à partir d’une couleur', 'Générateur de couleurs complémentaires', 'Palette monochromatique'],
  url: toAbsoluteUrl('/fr/outils/generateur-de-palettes-de-couleurs'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'ColorTool',
  operatingSystem: 'Any',
  description:
    'Générez des palettes de couleurs à partir d’une seule couleur de base. 9 types : monochromatique, analogue, complémentaire, triadique, complémentaire divisée, pastel, sombre, tonale et minimaliste.',
  featureList: [
    '9 types de palettes à partir d’une couleur de base',
    'Monochromatique, analogue, complémentaire, triadique, complémentaire divisée',
    'Palettes pastel, sombre, tonale et minimaliste',
    'Codes HEX copiables en un clic',
    'Calculs basés sur l’espace colorimétrique HSL',
    'Exécution locale dans le navigateur',
  ],
  inLanguage: 'fr',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment générer des palettes de couleurs à partir d’une couleur',
  description: 'Choisissez une couleur de base et obtenez 9 palettes harmonieuses avec des codes HEX copiables.',
  url: toAbsoluteUrl('/fr/outils/generateur-de-palettes-de-couleurs'),
  step: [
    { '@type': 'HowToStep', name: 'Choisir la couleur de base', text: 'Saisissez un code HEX ou utilisez le sélecteur de couleurs pour définir la couleur de base.' },
    { '@type': 'HowToStep', name: 'Voir les palettes', text: 'L’outil génère automatiquement 9 palettes avec plusieurs couleurs harmonieuses chacune.' },
    { '@type': 'HowToStep', name: 'Copier les codes HEX', text: 'Cliquez sur une couleur pour copier le code HEX dans le presse-papiers.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Combien de palettes l’outil génère-t-il ?',
    answer:
      'L’outil génère 9 palettes différentes à partir d’une seule couleur de base : monochromatique, analogue, complémentaire, triadique, complémentaire divisée, pastel, sombre, tonale (Material Design) et minimaliste (style Apple).',
    answerSchemaText: '9 palettes : monochromatique, analogue, complémentaire, triadique, complémentaire divisée, pastel, sombre, tonale, minimaliste.',
  },
  {
    question: 'Qu’est-ce qu’une palette monochromatique ?',
    answer:
      'Une palette monochromatique est composée de variations d’une seule teinte – toutes les couleurs partagent la même teinte (H dans le modèle HSL) et varient uniquement en luminosité et saturation. Ces palettes sont harmonieuses et particulièrement adaptées aux designs professionnels.',
    answerSchemaText: 'Une palette d’une seule teinte avec des variations de luminosité et saturation.',
  },
  {
    question: 'Qu’est-ce qu’une palette complémentaire ?',
    answer:
      'Une palette complémentaire combine la couleur de base avec son complément – la couleur opposée sur le cercle chromatique (décalage de 180°). Ce contraste est l’un des principes fondamentaux de la théorie des couleurs et produit un effet vif et dynamique.',
    answerSchemaText: 'La couleur de base et la couleur opposée sur le cercle chromatique (180°).',
  },
  {
    question: 'Puis-je copier les couleurs générées ?',
    answer: 'Oui. Cliquez sur une couleur dans la palette pour copier son code HEX dans le presse-papiers. Utilisez-le directement dans CSS, Figma, Adobe ou d’autres outils de design.',
    answerSchemaText: 'Oui, cliquez sur une couleur pour copier le code HEX.',
  },
  {
    question: 'Qu’est-ce que l’espace colorimétrique HSL ?',
    answer:
      'HSL signifie Hue (teinte), Saturation et Lightness (luminosité). Contrairement à RGB, HSL décrit les couleurs telles que nous les percevons : la teinte détermine la couleur de base, la saturation l’intensité, et la luminosité indique si la couleur est claire ou foncée. Toutes les palettes de cet outil reposent sur des calculs HSL.',
    answerSchemaText: 'HSL = Teinte, Saturation, Luminosité. Un modèle de couleur basé sur la perception humaine.',
  },
  {
    question: 'Quelle différence entre triadique et complémentaire divisée ?',
    answer:
      'Une palette triadique utilise trois couleurs équidistantes sur le cercle chromatique (120° d’écart). Une palette complémentaire divisée utilise, au lieu du complément direct, les deux voisins du complément – ce qui produit un contraste plus subtil.',
    answerSchemaText: 'Triadique : 3 couleurs à 120°. Complémentaire divisée : couleur de base + 2 voisins du complément.',
  },
];

export default function ColorPalettePage() {
  return (
    <>
      <Script id="ld-json-color-palette-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-palette-howto-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Générateur de palettes de couleurs"
        description="Choisissez une couleur de base et générez 9 palettes harmonieuses. Monochromatique, complémentaire, triadique, pastel, sombre et plus – tous les calculs s’exécutent localement dans votre navigateur."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-palet-kolorow-online.webp"
      />

      <Breadcrumbs second={{ href: '/fr/outils', label: 'Outils' }} third={{ href: '/fr/outils/generateur-de-palettes-de-couleurs', label: 'Palettes de couleurs' }} includeJsonLd locale="fr" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <ColorPaletteGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Générer des palettes à partir d’une seule couleur">
          <p className="text-mid">
            Le générateur de palettes crée 9 palettes différentes à partir d’une seule couleur de base, en s’appuyant sur la théorie des couleurs. Chaque palette a une composition différente – des
            variations monochromatiques aux couleurs complémentaires contrastantes.
          </p>
          <p className="text-mid mt-3">
            Tous les calculs reposent sur l’espace colorimétrique HSL (Teinte, Saturation, Luminosité). La teinte détermine la couleur de base, la saturation l’intensité et la luminosité le caractère
            clair ou foncé. Ce modèle correspond à la perception humaine des couleurs et se prête parfaitement à la génération de palettes.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Comment utiliser le générateur"
          description="La génération ne prend que quelques secondes :"
          grid="three"
          items={[
            { icon: <RiPaletteLine className="h-6 w-6" />, title: '1. Choisir la couleur de base', description: 'Saisissez un code HEX ou utilisez le sélecteur de couleurs.' },
            { icon: <RiColorFilterLine className="h-6 w-6" />, title: '2. Voir les palettes', description: 'L’outil génère automatiquement 9 palettes avec plusieurs couleurs harmonieuses.' },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: '3. Copier les codes HEX',
              description: 'Cliquez sur une couleur pour copier son code HEX. Utilisez-le dans CSS, Figma ou d’autres outils.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="9 types de palettes – laquelle convient à votre projet ?"
          description="Chaque palette a un caractère différent :"
          grid="three"
          items={[
            { icon: <RiPaletteLine className="h-6 w-6" />, title: 'Monochromatique', description: 'Variations d’une teinte en luminosité et saturation. Élégante, harmonieuse, professionnelle.' },
            { icon: <RiColorFilterLine className="h-6 w-6" />, title: 'Analogue', description: 'Couleurs voisines sur le cercle chromatique. Transition douce et naturelle.' },
            { icon: <RiContrastLine className="h-6 w-6" />, title: 'Complémentaire', description: 'Couleur de base + couleur opposée (180°). Contraste maximum pour des designs dynamiques.' },
            { icon: <RiMagicLine className="h-6 w-6" />, title: 'Triadique', description: 'Trois couleurs à 120° d’écart. Équilibrée avec un fort contraste visuel.' },
            { icon: <RiSearchLine className="h-6 w-6" />, title: 'Complémentaire divisée', description: 'Couleur de base + les deux voisins du complément. Contraste plus subtil.' },
            { icon: <RiPaintBrushLine className="h-6 w-6" />, title: 'Pastel', description: 'Luminosité élevée, saturation réduite. Douce, aérienne – idéale pour des designs amicaux.' },
            { icon: <RiSettings3Line className="h-6 w-6" />, title: 'Sombre', description: 'Luminosité basse, tons profonds. Professionnelle – adaptée au mode sombre et aux marques premium.' },
            {
              icon: <RiRefreshLine className="h-6 w-6" />,
              title: 'Tonale (Material Design)',
              description: 'Luminosité graduée sur une même teinte. Similaire au système de couleurs de Google Material Design.',
            },
            { icon: <RiInfinityLine className="h-6 w-6" />, title: 'Minimaliste (Apple)', description: 'Base neutre avec un accent coloré. Propre, moderne – inspiré du style Apple.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Comment fonctionne l’espace colorimétrique HSL"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">Exemple : HSL(210, 80%, 50%)</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-10 w-10 rounded" style={{ backgroundColor: 'hsl(210, 80%, 50%)' }} />
                  <div className="text-mid text-sm!">
                    <p>H = 210° (teinte bleue)</p>
                    <p>S = 80% (intense)</p>
                    <p>L = 50% (luminosité moyenne)</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">Même teinte, luminosité différente</p>
                <div className="mt-2 flex gap-1">
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 90%)' }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 70%)' }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 50%)' }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 30%)' }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 10%)' }} />
                </div>
                <p className="text-light mt-1 text-xs!">L : 90% → 70% → 50% → 30% → 10%</p>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Toutes les palettes de cet outil reposent sur l’espace colorimétrique HSL (Teinte, Saturation, Luminosité). Contrairement à HEX ou RGB, HSL décrit les couleurs telles que nous les
            percevons :
          </p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Hue (H)</strong> – la teinte sur le cercle chromatique (0°–360°). 0° = rouge, 120° = vert, 240° = bleu.
            </li>
            <li>
              <strong>Saturation (S)</strong> – l’intensité. 0% = gris, 100% = couleur pleinement saturée.
            </li>
            <li>
              <strong>Lightness (L)</strong> – la luminosité. 0% = noir, 50% = couleur normale, 100% = blanc.
            </li>
          </ul>
          <p className="text-mid mt-3">
            En modifiant sélectivement ces valeurs, on obtient des palettes harmonieuses. Les palettes monochromatiques ne varient que L, les analogues que H, et les complémentaires inversent H de
            180°.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Où utiliser les palettes générées ?"
          grid="two"
          items={[
            {
              icon: <RiBrushLine className="h-6 w-6" />,
              title: 'Identité visuelle de marque',
              description: 'Sélectionnez des couleurs complémentaires pour un logo existant ou construisez une palette de branding de zéro, pour cartes de visite, papeterie et supports marketing.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Sites web',
              description:
                'Définissez la couleur principale, la couleur d’accent et les tons de fond. Les codes HEX copiés se collent directement dans les feuilles de style CSS ou la configuration de thèmes.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Interfaces d’applications',
              description:
                'La palette tonale fournit des variantes de luminosité d’une couleur : plus claires pour les fonds, plus foncées pour le texte, intermédiaires pour les bordures et états interactifs.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Visuels pour les réseaux sociaux',
              description:
                'Des couleurs cohérentes pour les publications, stories et couvertures de profil. Les palettes analogues ou pastel fonctionnent bien pour un style uniforme et reconnaissable.',
            },
            {
              icon: <RiSlideshowLine className="h-6 w-6" />,
              title: 'Présentations et documents',
              description: 'Des ensembles de couleurs harmonieux pour les diapositives, graphiques et infographies. Les palettes monochromatiques ou minimalistes maintiennent l’ordre visuel.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Résolution de problèmes du générateur de palettes"
          grid="two"
          items={[
            {
              icon: <RiRefreshLine className="h-6 w-6" />,
              title: 'Les palettes ne changent pas après la saisie d’une couleur',
              description:
                'Simplement taper un code HEX ne génère pas automatiquement les palettes : vous devez confirmer le changement avec le bouton Mettre à jour la couleur. Ce n’est qu’après confirmation que l’outil recalcule les 9 schémas.',
            },
            {
              icon: <RiErrorWarningLine className="h-6 w-6" />,
              title: 'Message de format non valide',
              description:
                'Le générateur accepte uniquement le format HEX avec # au début, par ex. #FF5500. Les formats sans # (par ex. FF5500) ou en notation RGB (par ex. rgb(255,85,0)) ne sont pas pris en charge.',
            },
            {
              icon: <RiCodeLine className="h-6 w-6" />,
              title: 'Format HEX court et complet',
              description:
                'Les deux formats sont pris en charge : complet #RRGGBB (par ex. #FF5500) et court #RGB (par ex. #F50). Le générateur reconnaît automatiquement les deux et les traite de manière identique.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels pageUrl={toAbsoluteUrl('/fr/outils/generateur-de-palettes-de-couleurs')} title="Questions fréquentes sur le générateur de palettes" openByDefault={1} items={faqItems} />

        <Gap variant="line" />

        <ToolsCarousel title="Découvrir d’autres outils" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
