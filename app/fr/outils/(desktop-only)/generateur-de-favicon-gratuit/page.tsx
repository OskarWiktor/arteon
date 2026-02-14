import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaviconGenerator from '@/components/sections/tools/FaviconGenerator';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTabs from '@/components/ui/sections/SectionTabs';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiUploadLine,
  RiAppsLine,
  RiDownloadLine,
  RiGlobalLine,
  RiSmartphoneLine,
  RiSearchLine,
  RiBookmarkLine,
  RiCodeLine,
  RiFileZipLine,
  RiFolderZipLine,
  RiFileDownloadLine,
  RiWordpressLine,
  RiHtml5Line,
  RiReactjsLine,
  RiShapeLine,
  RiAspectRatioLine,
  RiZoomInLine,
  RiImageLine,
  RiContrastLine,
} from 'react-icons/ri';

const LOCALE = 'fr' as const;
const TOOL_KEY = 'favicon' as const;

export const metadata: Metadata = {
  title: 'Générateur de favicon gratuit en ligne – favicon.ico et icônes PNG',
  description:
    'Générateur de favicon gratuit en ligne. Créez favicon.ico et des icônes PNG 16x16, 32x32, 180x180, 192x192 et 512x512 à partir d’une seule image – conforme aux exigences des navigateurs et de Lighthouse.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Générateur de favicon gratuit en ligne',
    description: 'Créez favicon.ico et des icônes PNG à partir d’une seule image – conforme aux exigences des navigateurs et de Lighthouse.',
    url: toAbsoluteUrl('/fr/outils/generateur-de-favicon-gratuit'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Générateur de favicon en ligne – favicon.ico et icônes PNG',
  alternateName: ['Créer un favicon en ligne', 'Générateur favicon.ico', 'Générateur Apple Touch Icon', 'Créer des icônes PWA', 'Favicon à partir d’une image'],
  url: toAbsoluteUrl('/fr/outils/generateur-de-favicon-gratuit'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'FaviconTool',
  operatingSystem: 'Any',
  description: 'Générateur de favicon gratuit. favicon.ico et icônes PNG 16x16, 32x32, 180x180, 192x192 et 512x512. site.webmanifest en option. Conforme à Lighthouse.',
  featureList: [
    'favicon.ico (16x16 + 32x32 combinés)',
    'Icônes PNG : 16x16, 32x32, 180x180, 192x192, 512x512',
    'Apple Touch Icon (180x180)',
    'Icônes Android/PWA (192x192, 512x512)',
    'site.webmanifest en option',
    'Téléchargement ZIP de tous les fichiers',
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
  name: 'Comment créer un favicon pour votre site web',
  description: 'Importez une image et générez favicon.ico et des icônes PNG dans toutes les tailles requises – conforme aux exigences des navigateurs et de Lighthouse.',
  url: toAbsoluteUrl('/fr/outils/generateur-de-favicon-gratuit'),
  step: [
    { '@type': 'HowToStep', name: 'Importer une image', text: 'Importez une image carrée (au moins 512x512 px). Formats pris en charge : PNG, JPG, WebP.' },
    { '@type': 'HowToStep', name: 'Choisir les options', text: 'Sélectionnez les tailles souhaitées et si un site.webmanifest doit être généré.' },
    { '@type': 'HowToStep', name: 'Télécharger le ZIP', text: 'Téléchargez tous les fichiers générés dans une archive ZIP et ajoutez-les à votre site.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Qu’est-ce qu’un favicon ?',
    answer:
      'Un favicon est la petite icône affichée dans l’onglet du navigateur à côté du titre de la page. Il apparaît aussi dans les favoris, l’historique, sur l’écran d’accueil des appareils mobiles et dans les résultats de recherche. Un favicon professionnel renforce l’identité de marque et améliore la reconnaissance.',
    answerSchemaText: 'Une petite icône dans l’onglet du navigateur, les favoris et l’écran d’accueil. Renforce l’identité de marque.',
  },
  {
    question: 'Quelles tailles l’outil génère-t-il ?',
    answer:
      'L’outil génère favicon.ico (16x16 et 32x32 combinés) ainsi que des icônes PNG en 16x16, 32x32, 180x180 (Apple Touch Icon), 192x192 et 512x512 (Android/PWA). Toutes les tailles correspondent aux exigences actuelles des navigateurs et de Lighthouse.',
    answerSchemaText: 'favicon.ico (16+32) + PNG : 16, 32, 180 (Apple), 192, 512 (PWA). Conforme à Lighthouse.',
  },
  {
    question: 'Quel format d’image dois-je utiliser ?',
    answer:
      'Idéalement, une image carrée en PNG, JPG ou WebP d’au moins 512x512 pixels. L’outil redimensionne automatiquement l’image à toutes les tailles requises. Plus l’image source est grande et détaillée, meilleur sera le résultat.',
    answerSchemaText: 'Image carrée (PNG/JPG/WebP) d’au moins 512x512 px.',
  },
  {
    question: 'Un site.webmanifest est-il également généré ?',
    answer: 'Oui. Vous pouvez optionnellement générer un fichier site.webmanifest qui référence les icônes PWA (192x192 et 512x512). Le fichier est inclus dans l’archive ZIP avec les icônes.',
    answerSchemaText: 'Oui, en option. Référence les icônes PWA et est inclus dans le ZIP.',
  },
  {
    question: 'Mes images sont-elles envoyées à un serveur ?',
    answer: 'Non. Tout le traitement s’effectue localement dans votre navigateur via l’API Canvas. Vos fichiers ne quittent jamais votre ordinateur et ne sont stockés nulle part.',
    answerSchemaText: 'Non. Traitement local dans le navigateur. Les fichiers ne quittent pas votre appareil.',
  },
  {
    question: 'Que vérifie Lighthouse concernant les favicons ?',
    answer:
      'Lighthouse vérifie si une page possède un favicon valide. Il attend au minimum un fichier favicon.ico ou un élément <link rel="icon">. Il vérifie aussi la présence d’un Apple Touch Icon (180x180) et d’icônes PWA dans le site.webmanifest. Cet outil génère tous les fichiers requis.',
    answerSchemaText: 'Lighthouse vérifie favicon.ico, Apple Touch Icon et icônes PWA dans le manifest.',
  },
  {
    question: 'Comment intégrer les favicons à mon site ?',
    answer:
      'Copiez les fichiers générés à la racine de votre site. Ajoutez ensuite les éléments <link> correspondants dans la balise <head>. Sous l\u2019outil, vous trouverez un guide avec le code HTML nécessaire.',
    answerSchemaText: 'Copier les fichiers à la racine et ajouter les éléments <link> dans <head>.',
  },
];

export default function FaviconGeneratorPage() {
  return (
    <>
      <Script id="ld-json-favicon-generator-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-favicon-howto-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Générateur de favicon"
        description="Créez à partir d’une seule image favicon.ico et des icônes PNG dans toutes les tailles requises. Conforme aux exigences des navigateurs et de Lighthouse – tout s’exécute localement dans votre navigateur."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp"
      />

      <Breadcrumbs second={{ href: '/fr/outils', label: 'Outils' }} third={{ href: '/fr/outils/generateur-de-favicon-gratuit', label: 'Générateur de favicon' }} includeJsonLd locale="fr" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <FaviconGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Pourquoi chaque site a besoin d’un favicon ?">
          <p className="text-mid">
            Un favicon est bien plus qu’une petite icône – c’est un élément essentiel de l’identité de marque sur le web. Les navigateurs l’affichent dans l’onglet, les utilisateurs le voient dans les
            favoris et l’historique, et Lighthouse vérifie sa présence comme bonne pratique. Sans favicon, un site paraît incomplet.
          </p>
          <p className="text-mid mt-3">
            Les sites modernes ont besoin de favicons en plusieurs tailles : un favicon.ico pour les anciens navigateurs, des icônes PNG pour les navigateurs de bureau, un Apple Touch Icon pour les
            appareils iOS et des icônes plus grandes pour les installations PWA sur Android. Cet outil génère tous les fichiers requis à partir d’une seule image.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Comment utiliser le générateur de favicon"
          description="La génération ne prend que quelques secondes :"
          grid="three"
          items={[
            {
              icon: <RiUploadLine className="h-6 w-6" />,
              title: '1. Importer une image',
              description: 'Importez une image carrée (au moins 512x512 px). Formats pris en charge : PNG, JPG, WebP.',
            },
            {
              icon: <RiAppsLine className="h-6 w-6" />,
              title: '2. Choisir les options',
              description: 'Sélectionnez les tailles souhaitées et si un site.webmanifest doit être généré.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '3. Télécharger le ZIP',
              description: 'Téléchargez tous les fichiers générés dans une archive ZIP et ajoutez-les à votre site.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Quels fichiers sont générés ?"
          demo={
            <div className="overflow-x-auto">
              <table className="text-mid w-full text-left text-sm!">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-2 pr-4 font-semibold">Fichier</th>
                    <th className="py-2 pr-4 font-semibold">Taille</th>
                    <th className="py-2 font-semibold">Utilisation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">favicon.ico</td>
                    <td className="py-2 pr-4">16×16 + 32×32</td>
                    <td className="text-primary-light0 py-2">Onglet du navigateur (standard)</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">favicon-16x16.png</td>
                    <td className="py-2 pr-4">16×16</td>
                    <td className="text-primary-light0 py-2">Onglet du navigateur (petit)</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">favicon-32x32.png</td>
                    <td className="py-2 pr-4">32×32</td>
                    <td className="text-primary-light0 py-2">Onglet du navigateur (Retina)</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">apple-touch-icon.png</td>
                    <td className="py-2 pr-4">180×180</td>
                    <td className="text-primary-light0 py-2">Écran d’accueil iOS, Safari</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">android-chrome-192x192.png</td>
                    <td className="py-2 pr-4">192×192</td>
                    <td className="text-primary-light0 py-2">Android, installation PWA</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">android-chrome-512x512.png</td>
                    <td className="py-2 pr-4">512×512</td>
                    <td className="text-primary-light0 py-2">Splashscreen PWA, résultats Google</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">site.webmanifest</td>
                    <td className="py-2 pr-4">-</td>
                    <td className="text-primary-light0 py-2">Configuration PWA (optionnel)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        >
          <p className="text-mid">L’outil génère tous les fichiers favicon exigés par les navigateurs modernes et Lighthouse. Chaque fichier a un rôle spécifique :</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>favicon.ico</strong> – le format classique, pris en charge par tous les navigateurs. Contient 16×16 et 32×32 dans un seul fichier.
            </li>
            <li>
              <strong>Apple Touch Icon</strong> – affiché sur l’écran d’accueil iOS lorsqu’un utilisateur ajoute le site en favori.
            </li>
            <li>
              <strong>Icônes PWA</strong> – pour les appareils Android et les Progressive Web Apps. Utilisées lors de l’installation sur l’écran d’accueil.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Où le favicon est-il affiché ?"
          description="Le favicon apparaît à différents endroits sur le web :"
          grid="three"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Onglets du navigateur',
              description: 'Le favicon apparaît à côté du titre de la page dans l’onglet – l’endroit le plus visible.',
            },
            {
              icon: <RiBookmarkLine className="h-6 w-6" />,
              title: 'Favoris et historique',
              description: 'Les navigateurs utilisent le favicon dans la barre de favoris et dans l’historique.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Écran d’accueil (mobile)',
              description: 'Lorsqu’un utilisateur ajoute le site à son écran d’accueil, l’Apple Touch Icon ou l’icône PWA est utilisé.',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Résultats Google',
              description: 'Google affiche le favicon à côté de l’URL dans les résultats de recherche mobiles.',
            },
            {
              icon: <RiCodeLine className="h-6 w-6" />,
              title: 'Audit Lighthouse',
              description: 'Lighthouse vérifie la présence d’un favicon – c’est une bonne pratique pour les performances web.',
            },
            {
              icon: <RiFileZipLine className="h-6 w-6" />,
              title: 'Installation PWA',
              description: 'Lors de l’installation d’une PWA, les icônes 192×192 et 512×512 sont utilisées comme icône d’application.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Comment télécharger les fichiers générés"
          description="Après la génération des icônes, vous avez plusieurs options de téléchargement :"
          grid="two"
          items={[
            {
              icon: <RiFolderZipLine className="h-6 w-6" />,
              title: 'Télécharger tout en ZIP',
              description:
                'Le bouton « Télécharger tout » regroupe tous les fichiers générés dans une seule archive ZIP. L’option la plus pratique lorsque vous avez besoin de l’ensemble complet des icônes.',
            },
            {
              icon: <RiFileDownloadLine className="h-6 w-6" />,
              title: 'Télécharger des fichiers individuels',
              description:
                'Chaque icône générée possède son propre bouton de téléchargement : vous pouvez télécharger un seul fichier sans l’ensemble complet. Utile lorsque vous devez mettre à jour une seule taille.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionTabs
          title="Où et comment ajouter un favicon"
          tabs={[
            {
              title: 'WordPress',
              icon: <RiWordpressLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">La plupart des thèmes WordPress disposent d’une option intégrée pour configurer l’icône du site. Vous la trouverez dans le panneau d’administration :</p>
                  <p className="text-mid mb-3">
                    <strong>Apparence → Personnaliser → Identité du site → Icône du site</strong>
                  </p>
                  <p className="text-light">
                    Importez-y le fichier 512×512 : WordPress générera automatiquement les tailles plus petites. Pour un contrôle total sur les icônes, vous pouvez aussi importer les fichiers
                    directement dans le répertoire racine via FTP.
                  </p>
                </div>
              ),
            },
            {
              title: 'HTML',
              icon: <RiHtml5Line className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Placez les fichiers générés dans le répertoire racine de votre site (là où se trouve index.html). Ajoutez ensuite les balises correspondantes dans la section &lt;head&gt; :
                  </p>
                  <pre className="bg-primary-light mb-3 overflow-x-auto rounded-lg p-4 text-sm">
                    <code>{`<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon-32x32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">`}</code>
                  </pre>
                  <p className="text-light">Le code ci-dessus est un exemple&nbsp;: adaptez les chemins à la structure de votre site.</p>
                </div>
              ),
            },
            {
              title: 'Next.js / React',
              icon: <RiReactjsLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Dans Next.js (App Router), placez les fichiers favicon dans le répertoire <code>app/</code> ou <code>public/</code> :
                  </p>
                  <ul className="text-light mb-3 list-disc pl-5">
                    <li>
                      <code>app/favicon.ico</code> – reconnu automatiquement par Next.js
                    </li>
                    <li>
                      <code>app/apple-icon.png</code> – icône Apple
                    </li>
                    <li>
                      <code>public/</code> – icônes restantes (192×192, 512×512)
                    </li>
                  </ul>
                  <p className="text-light">
                    Vous pouvez aussi configurer les icônes dans <code>layout.tsx</code> via l’objet <code>metadata.icons</code>.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Quelle image source fonctionne le mieux ?"
          description="Un favicon est un graphique très petit, aussi petit que 16×16 pixels. Toute image ne convient pas comme source :"
          grid="two"
          items={[
            {
              icon: <RiShapeLine className="h-6 w-6" />,
              title: 'Formes simples et symboles lisibles',
              description: 'Les logos simples, lettres individuelles ou symboles fonctionnent le mieux. Évitez les graphiques complexes avec beaucoup de détails.',
            },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: 'Format carré',
              description: 'Un favicon est carré. Si l’image source a des proportions différentes de 1:1, elle sera recadrée ou étirée.',
            },
            {
              icon: <RiZoomInLine className="h-6 w-6" />,
              title: 'Taille suffisamment grande',
              description: 'Nous recommandons une image source d’au moins 512×512 pixels. Les images plus petites seront agrandies.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Le format SVG comme source idéale',
              description: 'Le SVG se redimensionne sans perte de qualité, donc les icônes à toutes les tailles seront nettes.',
            },
            {
              icon: <RiContrastLine className="h-6 w-6" />,
              title: 'Couleurs à fort contraste',
              description: 'Un favicon doit être visible sur différents fonds (onglets clairs, mode sombre). Choisissez des couleurs qui maintiennent la lisibilité.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Options de g&#xe9;n&#xe9;ration : que fait chacune ?">
          <div className="space-y-4">
            <div>
              <h3 className="h5 mb-2">{'Fond (transparent ou couleur)'}</h3>
              <p className="text-mid">{'Par d\u00e9faut, le g\u00e9n\u00e9rateur conserve la transparence. Vous pouvez aussi choisir une couleur de fond sp\u00e9cifique.'}</p>
            </div>
            <div>
              <h3 className="h5 mb-2">{'G\u00e9n\u00e9rer le manifest (site.webmanifest)'}</h3>
              <p className="text-mid">{"Fichier JSON pour les applications web (PWA). Si vous ne cr\u00e9ez pas de PWA, cette option n'est pas n\u00e9cessaire."}</p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Ce qui rend ce g&#xe9;n&#xe9;rateur de favicon sp&#xe9;cial"
          grid="two"
          items={[
            {
              icon: <RiCodeLine className="h-6 w-6" />,
              title: 'Conforme Lighthouse',
              description: 'Toutes les tailles exig\u00e9es par Lighthouse et les navigateurs modernes \u2013 g\u00e9n\u00e9r\u00e9es en une seule \u00e9tape.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: 'Tous les formats en une seule \u00e9tape',
              description: "favicon.ico, ic\u00f4nes PNG et site.webmanifest en option \u2013 tout \u00e0 partir d'une seule image.",
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Prise en charge PNG, JPG et SVG',
              description: "Vous pouvez utiliser votre logo dans n'importe quel format. Si vous avez un SVG, les ic\u00f4nes seront nettes \u00e0 toutes les tailles.",
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Pr\u00eat pour le site et les PWA',
              description: 'L\u2019outil g\u00e9n\u00e8re le fichier manifest.json pour les applications web. Vous trouverez ci-dessous les instructions d\u2019int\u00e9gration des ic\u00f4nes.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/fr/outils/generateur-de-favicon-gratuit')}
          title="Questions fréquentes sur le générateur de favicon"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Pourquoi le favicon ne change-t-il pas apr\u00e8s avoir import\u00e9 un nouveau fichier ?',
              answer:
                "Les navigateurs mettent agressivement en cache les favicons. Apr\u00e8s avoir import\u00e9 une nouvelle ic\u00f4ne, videz le cache du navigateur ou ajoutez un param\u00e8tre de version au chemin du fichier (par ex. /favicon.ico?v=2). Le changement peut ne devenir visible qu'apr\u00e8s quelques heures.",
              answerSchemaText: 'Les navigateurs mettent les favicons en cache. Videz le cache ou ajoutez un param\u00e8tre de version.',
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
