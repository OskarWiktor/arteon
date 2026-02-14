import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import JpgPngToWebp from '@/components/sections/tools/JpgPngToWebp';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiShieldCheckLine,
  RiInfinityFill,
  RiSpeedLine,
  RiDownloadLine,
  RiFileImageLine,
  RiFlashlightLine,
  RiStackLine,
  RiCheckboxCircleLine,
  RiAlertLine,
  RiCloseLine,
  RiSettings3Line,
  RiImageLine,
  RiGlobalLine,
  RiShoppingBagLine,
  RiArticleLine,
} from 'react-icons/ri';

const LOCALE = 'fr' as const;
const TOOL_KEY = 'jpgToWebp' as const;

export const metadata: Metadata = {
  title: 'Convertisseur JPG/PNG en WebP gratuit en ligne – sans limite',
  description:
    'Convertisseur en ligne gratuit de JPG et PNG en WebP. Réduisez le poids des images jusqu’à 35 % sans perte de qualité. La conversion s’effectue localement dans votre navigateur, les fichiers ne sont jamais envoyés à un serveur.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Convertisseur JPG/PNG en WebP gratuit en ligne – sans limite',
    description: 'Réduisez le poids des images jusqu’à 35 % sans perte de qualité. Sans inscription, sans limite.',
    url: toAbsoluteUrl('/fr/outils/convertisseur-jpg-png-en-webp'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Convertisseur JPG et PNG en WebP en ligne – sans limite',
  alternateName: ['Convertisseur WebP en ligne', 'Convertir JPG en WebP', 'Convertir PNG en WebP', 'Convertir des images en WebP', 'Compression d’images WebP'],
  url: toAbsoluteUrl('/fr/outils/convertisseur-jpg-png-en-webp'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageConverter',
  operatingSystem: 'Any',
  description:
    'Convertisseur en ligne gratuit de JPG et PNG en WebP. Réduisez le poids des fichiers jusqu’à 35 % sans perte de qualité. Traitement par lots, optimisation automatique, exécution locale.',
  featureList: [
    'Convertir des fichiers JPG et PNG en WebP',
    'Réduire le poids des fichiers jusqu’à 35 %',
    'Qualité réglable (60–95 %)',
    'Optimisation automatique si le fichier de sortie est plus gros',
    'Traitement par lots avec téléchargement ZIP',
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
  name: 'Comment convertir des images JPG/PNG en WebP',
  description: 'Convertissez des images JPG et PNG au format WebP et réduisez le poids des fichiers jusqu’à 35 % sans perte de qualité visible.',
  url: toAbsoluteUrl('/fr/outils/convertisseur-jpg-png-en-webp'),
  step: [
    { '@type': 'HowToStep', name: 'Ajouter des fichiers', text: 'Glissez-déposez des fichiers JPG ou PNG dans la zone prévue ou cliquez pour sélectionner des fichiers.' },
    { '@type': 'HowToStep', name: 'Régler la qualité', text: 'Choisissez la qualité WebP avec le curseur (par défaut : 80 %). L’outil optimise automatiquement la taille.' },
    { '@type': 'HowToStep', name: 'Convertir et télécharger', text: 'Téléchargez les fichiers convertis individuellement ou sous forme d’archive ZIP.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Qu’est-ce que le format WebP ?',
    answer:
      'WebP est un format d’image développé par Google offrant une meilleure compression que JPG et PNG. À qualité visuelle égale, les fichiers WebP sont généralement 25 à 35 % plus légers. Le format est pris en charge par tous les navigateurs modernes (Chrome, Firefox, Safari, Edge).',
    answerSchemaText: 'Un format d’image de Google, 25–35 % plus léger à qualité égale.',
  },
  {
    question: 'Mes images sont-elles envoyées à un serveur ?',
    answer:
      'Non. Toute la conversion s’effectue localement dans votre navigateur grâce à l’API Canvas. Vos fichiers ne quittent jamais votre ordinateur et ne sont stockés nulle part. Lorsque vous fermez l’onglet, toutes les données sont supprimées de la mémoire.',
    answerSchemaText: 'Non. La conversion est locale. Les fichiers ne quittent pas votre appareil.',
  },
  {
    question: 'Y a-t-il une limite de fichiers ?',
    answer: 'Non. Vous pouvez convertir autant de fichiers que vous le souhaitez – sans limite journalière, sans limite de taille et sans inscription.',
    answerSchemaText: 'Non. Autant de fichiers que souhaité, sans limite.',
  },
  {
    question: 'Que se passe-t-il si le fichier WebP est plus gros que l’original ?',
    answer:
      'L’outil réduit automatiquement la qualité pas à pas si le fichier de sortie serait plus volumineux que l’original. Vous obtenez ainsi toujours un fichier qui n’est pas plus gros que l’original, avec la meilleure qualité possible.',
    answerSchemaText: 'L’outil réduit automatiquement la qualité pour que le fichier de sortie ne soit jamais plus gros.',
  },
  {
    question: 'Quel réglage de qualité est optimal ?',
    answer:
      '80 % est un bon compromis entre poids de fichier et qualité d’image pour la plupart des sites. Pour les photos détaillées, utilisez 85–90 %; pour les graphiques simples et icônes, 65–70 % suffisent.',
    answerSchemaText: '80 % pour la plupart des sites. Photos : 85–90 %. Graphiques simples : 65–70 %.',
  },
  {
    question: 'Puis-je convertir des fichiers PNG avec transparence ?',
    answer: 'WebP prend en charge la transparence (canal alpha). Si votre fichier PNG possède un fond transparent, la transparence est conservée dans le fichier WebP.',
    answerSchemaText: 'Oui. WebP prend en charge la transparence. Le canal alpha est conservé.',
  },
  {
    question: 'Tous les navigateurs prennent-ils en charge le format WebP ?',
    answer:
      'Oui, tous les navigateurs modernes prennent en charge WebP : Chrome (depuis la version 17), Firefox (depuis 65), Safari (depuis 14), Edge (depuis 18). Seul Internet Explorer ne le prend pas en charge, mais il n’est plus maintenu par Microsoft.',
    answerSchemaText: 'Oui. Chrome, Firefox, Safari, Edge. Pas Internet Explorer (obsolète).',
  },
];

export default function JpgPngToWebpPage() {
  return (
    <>
      <Script id="ld-json-webp-converter-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-webp-howto-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Convertisseur JPG/PNG en WebP"
        description="Convertissez vos images JPG et PNG au format WebP et réduisez le poids des fichiers jusqu’à 35 % sans perte de qualité visible. Tout s’exécute localement dans votre navigateur."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp"
      />

      <Breadcrumbs second={{ href: '/fr/outils', label: 'Outils' }} third={{ href: '/fr/outils/convertisseur-jpg-png-en-webp', label: 'JPG/PNG en WebP' }} includeJsonLd locale="fr" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <JpgPngToWebp />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Pourquoi convertir JPG et PNG en WebP ?">
          <p className="text-mid">
            Le format WebP offre des fichiers nettement plus légers que JPG et PNG à qualité visuelle égale. Des images plus légères signifient des temps de chargement plus rapides pour votre site, de
            meilleurs Core Web Vitals et une meilleure expérience utilisateur. Google recommande WebP comme format privilégié pour les images web.
          </p>
          <p className="text-mid mt-3">
            Par rapport au JPG, WebP fournit des fichiers en moyenne 25 à 35 % plus légers à qualité égale. Par rapport au PNG, l’économie peut être encore plus importante en compression avec perte.
            WebP prend en charge la compression avec et sans perte ainsi que la transparence (canal alpha).
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Comment utiliser le convertisseur WebP"
          description="La conversion ne prend que quelques secondes :"
          grid="three"
          items={[
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: '1. Ajouter des fichiers',
              description: 'Glissez-déposez des fichiers JPG ou PNG dans la zone prévue ou cliquez pour sélectionner des fichiers sur votre appareil.',
            },
            {
              icon: <RiFlashlightLine className="h-6 w-6" />,
              title: '2. Régler la qualité',
              description: 'Choisissez la qualité WebP avec le curseur (par défaut : 80 %). L’outil optimise automatiquement la taille du fichier.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '3. Télécharger',
              description: 'Téléchargez les fichiers convertis individuellement ou tous ensemble dans une archive ZIP.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Comment ajouter des fichiers à convertir">
          <p className="text-mid">L'outil propose deux méthodes pour ajouter des fichiers :</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Glisser-déposer</strong> – prenez les fichiers depuis un dossier sur votre ordinateur et déposez-les dans la zone prévue. Vous pouvez glisser plusieurs fichiers à la fois.
            </li>
            <li>
              <strong>Sélection depuis l'appareil</strong> – cliquez dans la zone d'ajout de fichiers pour ouvrir la fenêtre de sélection. Maintenez la touche Ctrl (ou Cmd sur Mac) pour sélectionner
              plusieurs fichiers à la fois.
            </li>
          </ul>
          <p className="text-mid mt-3">
            L'outil n'accepte que les fichiers JPG et PNG. Si vous ajoutez accidentellement un fichier dans un autre format (par ex. GIF ou BMP), il sera automatiquement ignoré et un message
            d'information s'affichera.
          </p>
          <p className="text-mid mt-3">
            <strong>Confidentialité :</strong> Tous les fichiers sont traités localement dans le navigateur. Ils ne sont envoyés nulle part – ils ne transitent par aucun serveur. À la fermeture de
            l'onglet ou du navigateur, les fichiers sont supprimés de la mémoire.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Comment interpréter les résultats"
          subtitle="Statut de conversion"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  Réussi
                </Badge>
                <span className="text-mid text-sm!">Fichier converti – WebP est plus léger que l’original</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="warning" size="sm">
                  Optimisé
                </Badge>
                <span className="text-mid text-sm!">La qualité a été réduite automatiquement pour que WebP ne soit pas plus gros que l’original</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="error" size="sm">
                  Erreur
                </Badge>
                <span className="text-mid text-sm!">Le fichier n’a pas pu être converti</span>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Pour chaque fichier converti, vous voyez le statut et l’économie de taille :</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Taille originale</strong> – poids du fichier JPG ou PNG d’entrée.
            </li>
            <li>
              <strong>Taille WebP</strong> – poids du fichier WebP converti.
            </li>
            <li>
              <strong>Économie</strong> – pourcentage de réduction par rapport à l’original.
            </li>
            <li>
              <strong>Statut</strong> – indique si la conversion a réussi ou si la qualité a été ajustée automatiquement.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Réglages de qualité – recommandations">
          <p className="text-mid mb-4">Le niveau de qualité optimal dépend de l’utilisation. Voici des repères pour différents cas :</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Utilisation</th>
                  <th className="py-2 pr-4 font-semibold">Qualité</th>
                  <th className="py-2 font-semibold">Remarque</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Photos de produits (e-commerce)</td>
                  <td className="py-2 pr-4 whitespace-nowrap">85–90 %</td>
                  <td className="text-primary-light0 py-2 text-sm">Haute fidélité des détails</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Images d’articles de blog</td>
                  <td className="py-2 pr-4 whitespace-nowrap">75–80 %</td>
                  <td className="text-primary-light0 py-2 text-sm">Bon compromis pour la plupart des sites</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Bannières hero et arrière-plans</td>
                  <td className="py-2 pr-4 whitespace-nowrap">70–80 %</td>
                  <td className="text-primary-light0 py-2 text-sm">Images volumineuses où le poids compte davantage</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Miniatures et aperçus</td>
                  <td className="py-2 pr-4 whitespace-nowrap">65–75 %</td>
                  <td className="text-primary-light0 py-2 text-sm">Petites images – perte de qualité peu visible</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Icônes et graphiques simples</td>
                  <td className="py-2 pr-4 whitespace-nowrap">60–70 %</td>
                  <td className="text-primary-light0 py-2 text-sm">Peu de détails, forte compressibilité</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Comment fonctionne Smart Quality ?">
          <p className="text-mid">
            Smart Quality est un mécanisme d'optimisation automatique qui garantit que le fichier WebP converti ne sera jamais plus volumineux que l'original. Voici comment il fonctionne :
          </p>
          <ol className="text-mid mt-3 ml-6 list-decimal space-y-2">
            <li>L'outil convertit l'image avec la qualité que vous avez définie (par ex. 80{'\u00a0'}%).</li>
            <li>Il vérifie si le fichier de sortie est plus léger que l'original.</li>
            <li>S'il est plus volumineux, la qualité est automatiquement réduite et un nouvel essai est lancé.</li>
            <li>Le processus se répète jusqu'à ce que le fichier de sortie soit plus léger ou que la qualité descende en dessous d'un minimum sûr.</li>
          </ol>
          <p className="text-mid mt-3">
            L'outil choisit automatiquement les paramètres optimaux. Si une image est déjà très compressée (par ex. un JPG à 60{'\u00a0'}% de qualité), les paramètres seront automatiquement ajustés
            pour obtenir malgré tout une réduction de taille.
          </p>
          <p className="text-mid mt-3">
            Pour chaque fichier, vous verrez l'indication &quot;Qualité WebP utilisée&quot; – c'est la qualité réellement appliquée après un éventuel ajustement par Smart Quality.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Rapport d'économies – que montre-t-il ?">
          <p className="text-mid">Sous les boutons de conversion, vous trouverez un récapitulatif avec les informations sur les économies :</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Taille totale (entrée)</strong> – somme des tailles de tous les fichiers originaux.
            </li>
            <li>
              <strong>Taille totale (après conversion)</strong> – somme des tailles de tous les fichiers WebP.
            </li>
            <li>
              <strong>Économisé</strong> – combien d'espace vous avez gagné grâce à la conversion (en Ko/Mo et en pourcentage).
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Copier le résumé :</strong> Le bouton copie le rapport dans le presse-papiers en format texte. Vous pouvez le coller dans des notes, un e-mail ou un document – utile pour
            documenter l'optimisation des images.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Combien peut-on économiser en convertissant en WebP ?">
          <p className="text-mid mb-4">Les économies dépendent du type d'image et de sa compression d'origine. Voici des exemples pour des fichiers typiques :</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Photo JPG (appareil photo)</p>
              <p className="text-light text-sm">
                2,4{'\u00a0'}Mo → 890{'\u00a0'}Ko
              </p>
              <p className="text-success-icon mt-1 text-sm font-medium">Économie : ~63{'\u00a0'}%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Graphique PNG (logo)</p>
              <p className="text-light text-sm">
                180{'\u00a0'}Ko → 45{'\u00a0'}Ko
              </p>
              <p className="text-success-icon mt-1 text-sm font-medium">Économie : ~75{'\u00a0'}%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Photo de produit</p>
              <p className="text-light text-sm">
                500{'\u00a0'}Ko → 185{'\u00a0'}Ko
              </p>
              <p className="text-success-icon mt-1 text-sm font-medium">Économie : ~63{'\u00a0'}%</p>
            </div>
          </div>
          <p className="text-light mt-4 text-sm">
            Les économies réelles peuvent varier. Le convertisseur affiche la taille exacte avant et après conversion pour chaque fichier, ainsi qu'un récapitulatif des économies totales.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Problèmes courants et solutions"
          description="Si les résultats ne correspondent pas à vos attentes :"
          grid="two"
          items={[
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'Le fichier WebP est à peine plus léger',
              description: 'Pour les fichiers JPG déjà fortement compressés ou les graphiques PNG simples, le gain est moindre. Essayez une qualité plus basse.',
            },
            {
              icon: <RiAlertLine className="h-6 w-6" />,
              title: 'Perte de qualité visible',
              description: 'Augmentez la qualité. Pour les photos, les différences deviennent souvent visibles en dessous de 80 %, surtout pour les détails fins et le texte.',
            },
            {
              icon: <RiCloseLine className="h-6 w-6" />,
              title: 'Le fichier ne se convertit pas',
              description: 'Vérifiez que le fichier est au format JPG ou PNG. Les autres formats (GIF, BMP, TIFF) ne sont pas pris en charge.',
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: 'La transparence est perdue',
              description: 'WebP prend en charge la transparence. Si elle manque, vérifiez que le fichier original possède bien un canal alpha.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Où utiliser WebP ?"
          description="WebP convient à toutes les images de votre site :"
          grid="two"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Sites web et pages d’atterrissage',
              description: 'Temps de chargement plus rapides, meilleurs Core Web Vitals et meilleur classement Google.',
            },
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'E-commerce et photos de produits',
              description: 'Des centaines de photos de produits plus légères – des pages de catégorie sensiblement plus rapides.',
            },
            {
              icon: <RiArticleLine className="h-6 w-6" />,
              title: 'Blogs et pages de contenu',
              description: 'Les images d’articles en WebP chargent plus vite et réduisent la consommation de données sur mobile.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Portfolios et galeries',
              description: 'Images de haute qualité avec un poids nettement réduit – sans perte de qualité visible.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Qu’est-ce qui rend ce convertisseur spécial ?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Confidentialité totale',
              description: 'Tous les fichiers sont traités localement dans votre navigateur. Rien n’est envoyé à un serveur.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Sans limite',
              description: 'Convertissez autant de fichiers que vous le souhaitez – sans inscription et sans restriction.',
            },
            {
              icon: <RiSpeedLine className="h-6 w-6" />,
              title: 'Optimisation automatique',
              description: 'L’outil réduit automatiquement la qualité si le fichier de sortie serait plus gros que l’original.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Traitement par lots',
              description: 'Convertissez plusieurs fichiers en même temps et téléchargez le tout dans une archive ZIP.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/fr/outils/convertisseur-jpg-png-en-webp')}
          title="Questions fréquentes sur le convertisseur WebP"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Puis-je convertir des fichiers autres que JPG et PNG ?',
              answer: "L'outil est optimis\u00e9 pour les formats JPG et PNG. Les autres formats (par ex. GIF, BMP, TIFF) sont automatiquement ignor\u00e9s lors de l'ajout.",
              answerSchemaText: 'Uniquement JPG et PNG. Les autres formats sont automatiquement ignor\u00e9s.',
            },
            {
              question: 'Que signifie le message indiquant que le fichier est plus gros que l\u2019original ?',
              answer:
                "Si vous voyez un avertissement indiquant que le fichier de sortie est plus volumineux que l'original, cela signifie que l'image originale \u00e9tait d\u00e9j\u00e0 tr\u00e8s compress\u00e9e. Dans ce cas, la conversion en WebP n'apportera pas d'\u00e9conomies \u2013 il vaut mieux conserver le format original ou essayer une qualit\u00e9 plus basse.",
              answerSchemaText: "L'image originale \u00e9tait d\u00e9j\u00e0 tr\u00e8s compress\u00e9e. Conservez le format original ou baissez la qualit\u00e9.",
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
