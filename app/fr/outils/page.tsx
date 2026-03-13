import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import Script from 'next/script';
import {
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
  RiLoopLeftLine,
} from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';

export const metadata = {
  title: 'Outils en ligne gratuits | Convertisseurs, SEO, couleurs, favicon',
  description:
    "Outils gratuits : Convertisseurs d'images (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), générateur de favicon, éditeur d'images, compteur de texte, palettes de couleurs et codes QR. Sans inscription.",
  alternates: getToolsIndexAlternates('fr'),
  openGraph: {
    title: 'Outils en ligne gratuits | Convertisseurs, SEO, couleurs, favicon',
    description:
      "Outils gratuits : Convertisseurs d'images (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), générateur de favicon, éditeur d'images, compteur de texte, palettes de couleurs et codes QR. Sans inscription.",
    url: toAbsoluteUrl('/fr/outils'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
      {
        '@type': 'WebApplication',
        position: 35,
        name: 'Convertisseur PNG en AVIF',
        description: 'Convertissez les graphiques PNG en AVIF avec transparence. Fichiers beaucoup plus petits.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-png-en-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'Convertisseur WebP en AVIF',
        description: 'Convertissez les fichiers WebP en AVIF. Compression encore meilleure dans un format moderne.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-webp-en-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'Convertisseur SVG en AVIF',
        description: 'Convertissez les graphiques vectoriels SVG en format raster AVIF compact.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-svg-en-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'Convertisseur BMP en AVIF',
        description: 'Convertissez les fichiers BMP non compresses en AVIF ultra-compact.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-bmp-en-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'Convertisseur GIF en AVIF',
        description: 'Convertissez la premiere image GIF en image AVIF statique avec excellente compression.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-gif-en-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'Convertisseur TIFF en AVIF',
        description: 'Convertissez les fichiers TIFF en AVIF moderne. Reduction massive de la taille.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-tiff-en-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'Convertisseur JPG en GIF',
        description: 'Convertissez les photos JPG en format GIF. Parfait pour graphiques simples et icones.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-jpg-en-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'Convertisseur PNG en GIF',
        description: 'Convertissez les graphiques PNG en GIF. Ideal pour icones simples et graphiques.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-png-en-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'Convertisseur WebP en GIF',
        description: 'Convertissez les images WebP en format GIF pour une compatibilite maximale.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-webp-en-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'Convertisseur SVG en GIF',
        description: 'Convertissez les graphiques vectoriels SVG en format raster GIF.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-svg-en-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'Convertisseur BMP en GIF',
        description: 'Convertissez les fichiers BMP non compresses en GIF leger.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-bmp-en-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'Convertisseur PNG en TIFF',
        description: 'Convertissez les graphiques PNG en format TIFF professionnel.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-png-en-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'Convertisseur WebP en TIFF',
        description: 'Convertissez les images WebP en TIFF professionnel pour impression et archivage.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-webp-en-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'Convertisseur SVG en TIFF',
        description: 'Convertissez les graphiques vectoriels SVG en raster TIFF haute qualite.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-svg-en-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'Convertisseur BMP en TIFF',
        description: 'Convertissez les fichiers BMP en format TIFF professionnel pour impression.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-bmp-en-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'Convertisseur JPG en AVIF',
        description: "Convertissez les photos JPG en AVIF moderne. Compression jusqu'a 50% meilleure que JPG.",
        url: toAbsoluteUrl('/fr/outils/convertisseur-jpg-en-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'Convertisseur HEIC en AVIF',
        description: "Convertissez les photos HEIC d'iPhone en format AVIF moderne.",
        url: toAbsoluteUrl('/fr/outils/convertisseur-heic-en-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'Convertisseur JPG en TIFF',
        description: "Convertissez les photos JPG en TIFF sans perte. Pour l'impression et l'archivage.",
        url: toAbsoluteUrl('/fr/outils/convertisseur-jpg-en-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'Convertisseur HEIC en TIFF',
        description: "Convertissez les photos HEIC d'iPhone en format TIFF professionnel.",
        url: toAbsoluteUrl('/fr/outils/convertisseur-heic-en-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: "Outils en ligne gratuits \u2014 convertisseurs d'images, SEO, couleurs, favicon",
  description:
    "Outils gratuits : Convertisseurs d'images (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), générateur de favicon, éditeur d'images, compteur de texte, palettes de couleurs et codes QR. Sans inscription.",
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

    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Convertisseur JPG et PNG en WebP en ligne',
        description:
          "Convertisseur en ligne gratuit de JPG et PNG en WebP. Réduit le poids des fichiers jusqu'à 35 % sans perte de qualité visible. Sans inscription \u2013 les fichiers restent dans votre navigateur.",
        url: toAbsoluteUrl('/fr/outils/convertisseur-jpg-en-webp'),
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
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'Convertisseur JPG en WebP',
        description: "Convertissez vos photos JPG en WebP léger. Réduisez le poids des images jusqu'à 35%.",
        url: toAbsoluteUrl('/fr/outils/convertisseur-jpg-en-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'Convertisseur PNG en JPG',
        description: 'Convertissez vos fichiers PNG en JPG dans le navigateur. Sans limite, sans inscription.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-png-en-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'Convertisseur WebP en JPG',
        description: 'Convertissez vos fichiers WebP en JPG universel. Compatible avec tous les logiciels.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-webp-en-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'Convertisseur PNG en WebP',
        description: 'Convertissez vos graphiques PNG en WebP. Fichiers réduits, transparence préservée.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-png-en-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'Convertisseur JPG en PNG',
        description: 'Convertissez vos images JPG en PNG sans perte. Traitement local, fichiers illimités.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-jpg-en-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'Convertisseur WebP en PNG',
        description: 'Convertissez vos images WebP en PNG sans perte. Traitement local.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-webp-en-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'Convertisseur SVG en PNG',
        description: 'Convertissez vos graphiques vectoriels SVG en PNG. Idéal pour documents et réseaux sociaux.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-svg-en-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'Convertisseur SVG en JPG',
        description: 'Convertissez vos graphiques SVG en JPG compact. Fichier réduit, compatibilité totale.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-svg-en-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'Convertisseur BMP en JPG',
        description: 'Convertissez vos fichiers BMP non compressés en JPG léger. Réduction massive de taille.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-bmp-en-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'Convertisseur BMP en PNG',
        description: 'Convertissez vos images BMP en PNG sans perte. Qualité préservée, taille réduite.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-bmp-en-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'Convertisseur GIF en PNG',
        description: "Exportez la première image d'un GIF en PNG statique. Sans perte de qualité.",
        url: toAbsoluteUrl('/fr/outils/convertisseur-gif-en-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'Convertisseur GIF en JPG',
        description: "Exportez la première image d'un GIF en JPG. Fichier réduit, chargement rapide.",
        url: toAbsoluteUrl('/fr/outils/convertisseur-gif-en-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'Convertisseur SVG en WebP',
        description: 'Convertissez vos graphiques SVG en WebP. Ideal pour sites web.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-svg-en-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'Convertisseur GIF en WebP',
        description: 'Exportez la premiere image GIF en WebP. Fichier plus petit.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-gif-en-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'Convertisseur BMP en WebP',
        description: 'Convertissez les fichiers BMP en WebP. Reduction pouvant atteindre 95%.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-bmp-en-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'Convertisseur AVIF en JPG',
        description: 'Convertissez les fichiers AVIF en JPG universel. Compatible partout.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-avif-en-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'Convertisseur AVIF en PNG',
        description: 'Convertissez les fichiers AVIF en PNG sans perte. Qualite preservee.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-avif-en-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'Convertisseur AVIF en WebP',
        description: 'Convertissez les fichiers AVIF en WebP. Large compatibilite.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-avif-en-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'Convertisseur HEIC en JPG',
        description: 'Convertissez les photos HEIC iPhone en JPG. Sans inscription.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-heic-en-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'Convertisseur HEIC en PNG',
        description: 'Convertissez les photos HEIC iPhone en PNG sans perte.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-heic-en-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'Convertisseur HEIC en WebP',
        description: 'Convertissez les photos HEIC iPhone en WebP. Taille reduite.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-heic-en-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'Convertisseur TIFF en JPG',
        description: 'Convertissez les fichiers TIFF en JPG compact. Ideal pour scans.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-tiff-en-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'Convertisseur TIFF en PNG',
        description: 'Convertissez les fichiers TIFF en PNG sans perte.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-tiff-en-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'Convertisseur TIFF en WebP',
        description: 'Convertissez les fichiers TIFF en WebP. Enorme reduction.',
        url: toAbsoluteUrl('/fr/outils/convertisseur-tiff-en-webp'),
        applicationCategory: 'MultimediaApplication',
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
        description="Convertisseurs de formats d'image, éditeur d'images, générateur de favicon, compteur de texte, outils couleurs et codes QR. Sans inscription, sans limite."
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
              icon: <RiCropLine className="h-8 w-8" />,
              title: "Éditeur d'images en ligne",
              topImageAlt: "Éditeur d'images en ligne Arteon",
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/editeur-d-images-en-ligne-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Préparez le recadrage parfait pour les réseaux sociaux ou votre site. Choisissez un format prêt à l\'emploi ou saisissez des dimensions personnalisées et téléchargez l\'image en
                    PNG, JPG ou WebP.
                  </p>
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
              topImageSrc: '/assets/tools/favicon-generator/generateur-de-favicon-gratuit-fr.webp',
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
              topImageSrc: '/assets/tools/free-meta-title-and-description-checker-pixel-width/verificateur-meta-titre-et-description-fr.webp',
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
              topImageSrc: '/assets/tools/word-and-character-counter-with-text-formatting-tools/compteur-de-mots-et-caracteres-fr.webp',
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

            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Générateur Lorem Ipsum',
              topImageAlt: 'Générateur Lorem Ipsum Arteon',
              topImageSrc: '/assets/tools/lorem-ipsum-generator/generateur-lorem-ipsum-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Générez du texte de remplissage en 8 styles et 9 modes. Lorem Ipsum, Hipster, Business, Bacon et plus. Copiez en texte ou HTML.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/generateur-lorem-ipsum">
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
              topImageSrc: '/assets/tools/free-html-email-signature-generator/generateur-de-signature-email-gratuit-fr.webp',
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
              topImageSrc: '/assets/tools/qr-code-generator/generateur-de-codes-qr-gratuit-fr.webp',
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
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/verificateur-de-contraste-des-couleurs-fr.webp',
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
              topImageSrc: '/assets/tools/image-color-extractor/extracteur-de-couleurs-d-image-fr.webp',
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
              topImageSrc: '/assets/tools/color-palette-generator/generateur-de-palettes-de-couleurs-fr.webp',
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

        <Gap size="sm" />

        <SectionSteps
          title="Convertisseurs de formats d'image"
          description="Convertisseurs d'images en ligne - changez de format entre JPG, PNG, WebP, SVG, BMP et GIF. Conversion dans le navigateur, sans envoi de fichiers."
          grid="three"
          items={[
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Convertisseur JPG en WebP',
              topImageAlt: 'Convertisseur JPG en WebP Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Convertissez vos photos JPG en WebP léger. Réduisez le poids des images jusqu\'à 35%.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-jpg-en-webp">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Convertisseur PNG en JPG',
              topImageAlt: 'Convertisseur PNG en JPG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Convertissez vos fichiers PNG en JPG dans le navigateur. Sans limite, sans inscription.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-png-en-jpg">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Convertisseur WebP en JPG',
              topImageAlt: 'Convertisseur WebP en JPG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Convertissez vos fichiers WebP en JPG universel. Compatible avec tous les logiciels.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-webp-en-jpg">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Convertisseur PNG en WebP',
              topImageAlt: 'Convertisseur PNG en WebP Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Convertissez vos graphiques PNG en WebP. Fichiers réduits, transparence préservée.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-png-en-webp">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Convertisseur JPG en PNG',
              topImageAlt: 'Convertisseur JPG en PNG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Convertissez vos images JPG en PNG sans perte. Traitement local, fichiers illimités.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-jpg-en-png">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Convertisseur WebP en PNG',
              topImageAlt: 'Convertisseur WebP en PNG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Convertissez vos images WebP en PNG sans perte. Traitement local.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-webp-en-png">
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
          title="Convertisseurs de données"
          description="Convertisseurs de formats de données en ligne — convertissez entre CSV, JSON, XML, YAML, Markdown et HTML. Traitement dans le navigateur."
          grid="three"
          items={[
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'CSV en JSON',
              topImageAlt: 'CSV en JSON Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Convertissez CSV en format JSON. Détection automatique des séparateurs et formatage.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-csv-en-json">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JSON en CSV',
              topImageAlt: 'JSON en CSV Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Convertissez des données JSON en format CSV. Traitement dans le navigateur.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-json-en-csv">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'XML en JSON',
              topImageAlt: 'XML en JSON Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Convertissez des données XML en JSON. Conversion avec validation de structure.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-xml-en-json">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JSON en XML',
              topImageAlt: 'JSON en XML Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Convertissez des données JSON en XML valide. Conversion avec formatage.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-json-en-xml">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'YAML en JSON',
              topImageAlt: 'YAML en JSON Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Convertissez la configuration YAML en JSON. Validation et formatage.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-yaml-en-json">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JSON en YAML',
              topImageAlt: 'JSON en YAML Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Convertissez des données JSON en YAML lisible. Traitement dans le navigateur.</p>
                  <div className="mt-4">
                    <Button arrow link="/fr/outils/convertisseur-json-en-yaml">
                      Ouvrir l'outil
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <Gap variant="line" />

        <SectionInfo title="Que sont les outils Arteon ?">
          <p className="mb-4">
            34 outils en ligne gratuits pour créer et optimiser des contenus pour les sites web, les réseaux sociaux et l'impression – convertisseur WebP, générateur de favicon, compteur de texte,
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
