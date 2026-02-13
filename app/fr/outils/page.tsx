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

export const metadata = {
  title: 'Outils en ligne gratuits | Images, SEO, couleurs, favicon',
  description:
    '10 outils en ligne gratuits : convertisseur WebP, générateur de favicon, compteur de texte, extracteur de couleurs et codes QR. Pour sites web, réseaux sociaux et impression. Sans inscription.',
  alternates: {
    canonical: toAbsoluteUrl('/fr/outils'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia'),
      en: toAbsoluteUrl('/en/tools'),
      de: toAbsoluteUrl('/de/werkzeuge'),
      es: toAbsoluteUrl('/es/herramientas'),
      fr: toAbsoluteUrl('/fr/outils'),
    },
  },
  openGraph: {
    title: 'Outils en ligne gratuits | Images, SEO, couleurs, favicon',
    description:
      '10 outils en ligne gratuits : convertisseur WebP, générateur de favicon, compteur de texte, extracteur de couleurs et codes QR. Pour sites web, réseaux sociaux et impression. Sans inscription.',
    url: toAbsoluteUrl('/fr/outils'),
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

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Outils en ligne gratuits',
  description:
    '10 outils en ligne gratuits : convertisseur WebP, générateur de favicon, compteur de texte, extracteur de couleurs et codes QR. Pour sites web, réseaux sociaux et impression. Sans inscription.',
  url: toAbsoluteUrl('/fr/outils'),
  inLanguage: 'fr',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    { '@type': 'Thing', name: "Optimisation d'images" },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Couleurs et branding' },
    { '@type': 'Thing', name: 'Générateurs en ligne' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Convertisseur JPG et PNG en WebP en ligne',
        description:
          "Convertisseur en ligne gratuit de JPG et PNG en WebP. Réduit le poids des fichiers jusqu'à 35 % sans perte de qualité visible. Sans inscription – les fichiers restent dans votre navigateur.",
        url: toAbsoluteUrl('/fr/outils/convertisseur-jpg-png-en-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: "Éditeur d'images en ligne",
        description: "Recadrez et redimensionnez vos images pour les réseaux sociaux et les sites web. Modèles prêts à l'emploi, dimensions personnalisées et avatars ronds.",
        url: toAbsoluteUrl('/fr/outils/editeur-d-images-en-ligne'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Générateur de favicon en ligne',
        description: "Générateur de favicon gratuit. Crée favicon.ico et des icônes PNG (16×16 à 512×512) à partir d'une seule image – compatible avec tous les navigateurs et Lighthouse.",
        url: toAbsoluteUrl('/fr/outils/generateur-de-favicon-gratuit'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Vérificateur de méta titre et description',
        description:
          'Vérificateur de méta titre et description avec aperçu Google. Affiche le nombre de caractères et la largeur en pixels pour éviter les titres et descriptions tronqués dans les résultats de recherche.',
        url: toAbsoluteUrl('/fr/outils/verificateur-meta-titre-et-description'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Générateur de signature e-mail HTML',
        description: 'Générateur gratuit de signature e-mail HTML. Renseignez vos coordonnées, lien CTA et profils de réseaux sociaux, puis copiez le code HTML dans Gmail ou Outlook.',
        url: toAbsoluteUrl('/fr/outils/generateur-de-signature-email-gratuit'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Vérificateur de contraste et lisibilité des couleurs',
        description: "Vérifie le contraste et la lisibilité des couleurs de texte et d'arrière-plan selon WCAG. Calcule le rapport de contraste et propose un ajustement automatique.",
        url: toAbsoluteUrl('/fr/outils/verificateur-de-contraste-des-couleurs'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: "Extracteur de couleurs d'image en ligne",
        description: "Extracteur de couleurs gratuit. Importez une photo ou un logo et obtenez une palette de jusqu'à 12 couleurs dominantes (HEX et RGB).",
        url: toAbsoluteUrl('/fr/outils/extracteur-de-couleurs-d-image'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Générateur de palettes de couleurs en ligne',
        description: "Générez des palettes à partir d'une couleur de base. Monochromatique, triadique, analogue, complémentaire et plus – avec des variantes pastel, sombre et minimaliste.",
        url: toAbsoluteUrl('/fr/outils/generateur-de-palettes-de-couleurs'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Compteur de mots et caractères en ligne',
        description:
          "Compteur de mots et caractères gratuit avec évaluation de la longueur. Vérifiez si la longueur du texte convient pour une page d'accueil, une page de service, un article de blog ou une fiche produit.",
        url: toAbsoluteUrl('/fr/outils/compteur-de-mots-et-caracteres'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Générateur de codes QR en ligne',
        description: 'Générateur de codes QR gratuit. Créez des codes QR pour sites web, vCards, menus ou dépliants. Export en PNG et SVG, sans inscription, sans limite.',
        url: toAbsoluteUrl('/fr/outils/generateur-de-codes-qr-gratuit'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Les outils sont-ils payants ?',
    answer: 'Non. Tous les outils sont gratuits, sans abonnement et sans frais cachés.',
  },
  {
    question: 'Mes fichiers sont-ils envoyés à un serveur ?',
    answer: 'Non. Tous les outils fonctionnent entièrement dans votre navigateur. Les fichiers ne quittent jamais votre ordinateur et ne sont stockés nulle part.',
  },
  {
    question: 'Dois-je créer un compte ?',
    answer: 'Non. Vous pouvez utiliser les outils immédiatement, sans vous inscrire ni créer de compte.',
  },
  {
    question: "Y a-t-il une limite d'utilisation ?",
    answer: 'Non. Utilisez les outils sans restriction – pas de limite journalière, pas de limite de fichiers, pas de limite de conversions.',
  },
  {
    question: 'À quoi servent ces outils ?',
    answer:
      "Ils aident à préparer des contenus pour les sites web, les réseaux sociaux et l'impression : optimiser des images, créer des favicons, vérifier la longueur de texte, générer des codes QR, choisir des couleurs et vérifier leur lisibilité.",
  },
  {
    question: 'Les outils fonctionnent-ils sur mobile ?',
    answer: 'Oui, mais certains outils (par ex. le convertisseur WebP et le générateur de favicon) sont optimisés pour le bureau, car ils traitent des fichiers volumineux.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Outils en ligne gratuits"
        description="Convertisseur d'images, générateur de favicon, compteur de texte, outils couleurs et codes QR. Sans inscription, sans limite – tout fonctionne dans votre navigateur."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Images et favicons"
          description="Outils pour préparer photos, graphiques et icônes pour les sites web et les réseaux sociaux."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Convertisseur JPG/PNG en WebP',
              topImageAlt: 'Convertisseur JPG/PNG en WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Convertissez vos images JPG ou PNG au format <strong>WebP</strong> et réduisez le poids des fichiers. Des temps de chargement plus rapides pour votre site.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-jpg-png-en-webp">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: "Éditeur d'images en ligne",
              topImageAlt: "Éditeur d'images en ligne Arteon",
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Recadrez vos images au format idéal pour les réseaux sociaux ou votre site. Choisissez un format prédéfini ou saisissez vos dimensions – export en PNG, JPG ou WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/editeur-d-images-en-ligne">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Générateur de favicon',
              topImageAlt: 'Générateur de favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Générez <strong>favicon.ico</strong> et des icônes PNG 180x180, 192x192 et 512x512 à partir d'une seule image – conforme aux exigences des navigateurs et de Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/generateur-de-favicon-gratuit">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Texte et SEO"
          description="Outils pour vérifier la longueur de texte, les balises méta et prévisualiser votre page dans les résultats de recherche."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Vérificateur de méta titre et description',
              topImageAlt: 'Vérificateur de méta titre et description Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Vérifiez le nombre de caractères, de mots et la largeur en pixels – avec un aperçu de l'apparence de votre page dans les résultats Google. Évitez les titres et descriptions
                    tronqués.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/verificateur-meta-titre-et-description">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Compteur de mots et caractères',
              topImageAlt: 'Compteur de mots et caractères Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Vérifiez si la longueur du texte convient pour une page d'accueil, une page de service, un article de blog ou une fiche produit. L'outil compte les mots, caractères, paragraphes et
                    estime le temps de lecture.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/compteur-de-mots-et-caracteres">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-mail et communication"
          description="Outils pour une communication e-mail professionnelle et une image de marque cohérente."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Générateur de signature e-mail HTML gratuit',
              topImageAlt: 'Générateur de signature e-mail HTML gratuit Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Créez une signature e-mail professionnelle en quelques minutes. Renseignez vos données, choisissez les couleurs et copiez le code HTML dans Gmail, Outlook ou tout autre client de
                    messagerie.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/generateur-de-signature-email-gratuit">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Codes QR"
          description="Générateur de codes QR pour sites web, cartes de visite, menus et supports imprimés."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Générateur de codes QR gratuit',
              topImageAlt: 'Générateur de codes QR gratuit Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Créez un code QR pour un site web, une vCard, un menu ou un dépliant. Export en PNG et SVG – sans inscription, sans limite.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/generateur-de-codes-qr-gratuit">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Couleurs et accessibilité"
          description="Outils pour travailler avec les couleurs, le contraste et l'accessibilité WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Vérificateur de contraste et lisibilité',
              topImageAlt: 'Vérificateur de contraste des couleurs Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Vérifiez si vos couleurs de texte et d'arrière-plan sont lisibles. Saisissez les codes couleur, consultez le rapport de contraste <strong>WCAG</strong> et utilisez la fonction{' '}
                    <strong>Ajuster</strong> pour une correction automatique.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/verificateur-de-contraste-des-couleurs">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: "Extracteur de couleurs d'image",
              topImageAlt: "Extracteur de couleurs d'image Arteon",
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Importez une photo ou un logo – l'outil extraira les couleurs dominantes. Copiez les codes HEX en un clic et utilisez-les partout.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/extracteur-de-couleurs-d-image">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Générateur de palettes de couleurs',
              topImageAlt: 'Générateur de palettes de couleurs Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Choisissez une couleur de base et générez 9 palettes : monochromatique, complémentaire, triadique, pastel, sombre et plus. Copiez les codes HEX en un clic.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/generateur-de-palettes-de-couleurs">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Que sont les outils Arteon ?">
          <p className="mb-4">
            10 outils en ligne gratuits pour créer et optimiser des contenus pour les sites web, les réseaux sociaux et l'impression – convertisseur WebP, générateur de favicon, compteur de texte,
            extracteur de couleurs, générateur de palettes et codes QR.
          </p>
          <p>Tous les outils fonctionnent dans votre navigateur – les fichiers ne sont jamais envoyés à un serveur. Utilisez-les sans inscription et sans limite.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Pourquoi utiliser les outils Arteon ?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Confidentialité totale',
              description: "Tous les outils traitent les fichiers localement dans votre navigateur. Rien n'est envoyé à un serveur – les données disparaissent lorsque vous fermez l'onglet.",
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: "Aucune limite d'utilisation",
              description: 'Utilisez les outils sans restriction – pas de limite journalière, pas de limite de fichiers, pas de limite de conversions. Aussi souvent que nécessaire.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Sans inscription',
              description: "Aucun compte requis. Ouvrez l'outil, utilisez-le, c'est tout.",
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Disponible en français',
              description: 'Tous les outils sont disponibles en français – interface, instructions et messages.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Questions fréquentes sur nos outils" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-fr" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
