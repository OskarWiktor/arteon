import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import WcagContrastChecker from '@/components/sections/tools/WcagContrastChecker';
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
  RiPaletteLine,
  RiEyeLine,
  RiShieldCheckLine,
  RiMagicLine,
  RiInfinityLine,
  RiGlobalLine,
  RiSmartphoneLine,
  RiShoppingCartLine,
  RiSlideshowLine,
  RiPrinterLine,
  RiRestaurantLine,
  RiStackLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Vérificateur de contraste des couleurs gratuit en ligne – conformité WCAG',
  description:
    'Vérificateur de contraste des couleurs gratuit. Testez la lisibilité des couleurs de texte et d’arrière-plan selon WCAG 2.1. Fonction d’ajustement automatique pour trouver des combinaisons accessibles. Sans inscription.',
  alternates: {
    canonical: toAbsoluteUrl('/fr/outils/verificateur-de-contraste-des-couleurs'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/kontrast-i-czytelnosc-kolorow'),
      en: toAbsoluteUrl('/en/tools/color-contrast-checker'),
      de: toAbsoluteUrl('/de/werkzeuge/farbkontrast-checker'),
      es: toAbsoluteUrl('/es/herramientas/verificador-de-contraste-de-colores'),
      fr: toAbsoluteUrl('/fr/outils/verificateur-de-contraste-des-couleurs'),
    },
  },
  openGraph: {
    title: 'Vérificateur de contraste des couleurs gratuit – WCAG',
    description: 'Testez la lisibilité des couleurs selon WCAG 2.1. Ajustement automatique pour des combinaisons accessibles.',
    url: toAbsoluteUrl('/fr/outils/verificateur-de-contraste-des-couleurs'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Vérificateur de contraste et lisibilité des couleurs en ligne',
  alternateName: ['Vérificateur de contraste WCAG', 'Testeur d’accessibilité des couleurs', 'Rapport de contraste WCAG 2.1', 'Outil d’accessibilité des couleurs'],
  url: toAbsoluteUrl('/fr/outils/verificateur-de-contraste-des-couleurs'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'AccessibilityTool',
  operatingSystem: 'Any',
  description: 'Vérificateur de contraste des couleurs selon WCAG 2.1. Calcule le rapport de contraste, évalue la conformité AA/AAA et propose un ajustement automatique des couleurs.',
  featureList: [
    'Calcul du rapport de contraste',
    'Évaluation WCAG AA et AAA',
    'Texte normal, texte grand et icônes',
    'Fonction d’ajustement automatique',
    'Prise en charge HEX, RGB, HSL',
    'Aperçu en temps réel',
    'Exécution locale dans le navigateur',
  ],
  inLanguage: 'fr',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Qu’est-ce que le rapport de contraste WCAG ?',
    answer:
      'Le rapport de contraste est un nombre compris entre 1:1 (aucun contraste) et 21:1 (contraste maximum, noir sur blanc). Les WCAG 2.1 définissent des seuils minimaux : 4,5:1 pour le texte normal (AA), 3:1 pour le texte grand (AA) et 7:1 pour le texte normal (AAA).',
    answerSchemaText: 'Un nombre de 1:1 à 21:1. AA : 4,5:1 (texte normal), 3:1 (texte grand). AAA : 7:1.',
  },
  {
    question: 'Quelle est la différence entre AA et AAA ?',
    answer:
      'AA est le niveau de conformité minimal recommandé – il garantit une lisibilité suffisante pour la plupart des utilisateurs. AAA est le niveau le plus élevé – il offre un contraste encore meilleur, particulièrement important pour les utilisateurs malvoyants.',
    answerSchemaText: 'AA : niveau minimal, lisibilité suffisante. AAA : niveau élevé, meilleur contraste.',
  },
  {
    question: 'Qu’est-ce que la fonction d’ajustement automatique ?',
    answer:
      'La fonction d’ajustement recherche automatiquement une variante de couleur qui atteint le seuil de contraste sélectionné (AA ou AAA). Elle ajuste la luminosité de la couleur tout en conservant la teinte, proposant la variante la plus proche de la couleur d’origine.',
    answerSchemaText: 'Recherche automatique d’une variante de couleur conforme au seuil sélectionné.',
  },
  {
    question: 'Quels formats de couleur sont pris en charge ?',
    answer: 'L’outil prend en charge HEX (#000000), RGB (rgb(0,0,0)), RGBA, HSL (hsl(0,0%,0%)) et les noms de couleurs CSS (red, blue, etc.).',
    answerSchemaText: 'HEX, RGB, RGBA, HSL et noms de couleurs CSS.',
  },
  {
    question: 'Mes données sont-elles envoyées à un serveur ?',
    answer: 'Non. Tout le traitement s’effectue localement dans votre navigateur. Aucune donnée n’est envoyée ni stockée.',
    answerSchemaText: 'Non. Traitement local dans le navigateur.',
  },
];

export default function WcagContrastPage() {
  return (
    <>
      <Script id="ld-json-wcag-contrast-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Vérificateur de contraste des couleurs"
        description="Vérifiez si vos couleurs de texte et d’arrière-plan sont lisibles selon les normes WCAG 2.1. Rapport de contraste, évaluation AA/AAA et ajustement automatique des couleurs."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp"
      />

      <Breadcrumbs second={{ href: '/fr/outils', label: 'Outils' }} third={{ href: '/fr/outils/verificateur-de-contraste-des-couleurs', label: 'Contraste des couleurs' }} includeJsonLd locale="fr" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <WcagContrastChecker />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Pourquoi le contraste des couleurs est important ?">
          <p className="text-mid">
            Un contraste insuffisant entre le texte et l’arrière-plan rend le contenu difficile à lire – en particulier pour les personnes malvoyantes, les utilisateurs âgés ou ceux qui consultent
            votre site sur un écran en plein soleil. Les directives WCAG 2.1 définissent des seuils minimaux de contraste pour garantir l’accessibilité.
          </p>
          <p className="text-mid mt-3">
            Cet outil calcule le rapport de contraste entre deux couleurs, évalue la conformité WCAG (AA et AAA) pour le texte normal, le texte grand et les icônes, et propose une fonction
            d’ajustement automatique pour trouver des couleurs conformes.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Comment utiliser le vérificateur"
          description="La vérification est instantanée :"
          grid="three"
          items={[
            { icon: <RiPaletteLine className="h-6 w-6" />, title: '1. Saisir les couleurs', description: 'Saisissez la couleur du texte et la couleur d’arrière-plan en HEX, RGB ou HSL.' },
            { icon: <RiEyeLine className="h-6 w-6" />, title: '2. Vérifier le contraste', description: 'Consultez le rapport de contraste et la conformité WCAG AA/AAA.' },
            { icon: <RiMagicLine className="h-6 w-6" />, title: '3. Ajuster si nécessaire', description: 'Utilisez la fonction d’ajustement pour trouver une couleur conforme automatiquement.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Niveaux de conformité WCAG"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  AA
                </Badge>
                <span className="text-mid text-sm!">Texte normal : min. 4,5:1 — Texte grand : min. 3:1 — Icônes : min. 3:1</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  AAA
                </Badge>
                <span className="text-mid text-sm!">Texte normal : min. 7:1 — Texte grand : min. 4,5:1</span>
              </div>
            </div>
          }
        >
          <p className="text-mid">Les WCAG 2.1 définissent deux niveaux de conformité pour le contraste des couleurs :</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>AA (recommandé)</strong> – le niveau minimal pour la plupart des sites web. Garantit une lisibilité suffisante.
            </li>
            <li>
              <strong>AAA (optimal)</strong> – le niveau le plus élevé. Recommandé pour les sites destinés aux personnes malvoyantes.
            </li>
            <li>
              <strong>Texte grand</strong> – texte d’au moins 18px (ou 14px en gras). Les seuils sont plus bas car les grandes lettres sont naturellement plus lisibles.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Que signifient les résultats du test de lisibilité ?">
          <p className="text-mid mb-4">
            L'outil affiche le rapport de contraste sur une échelle de 1:1 (aucun contraste) à 21:1 (contraste maximum – noir sur blanc). Le résultat est comparé aux seuils définis dans le standard WCAG :
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Texte normal</strong> – nécessite au moins 4,5:1 pour le niveau AA (standard minimum) ou 7:1 pour le niveau AAA (standard amélioré). S'applique au texte inférieur à 18pt (24px) ou inférieur à 14pt (18,5px) en gras.
            </li>
            <li>
              <strong>Texte grand / gras</strong> – nécessite au moins 3:1 pour le niveau AA ou 4,5:1 pour le niveau AAA. S'applique au texte à partir de 18pt (24px) ou à partir de 14pt (18,5px) en gras – titres, boutons, mises en évidence.
            </li>
            <li>
              <strong>Icônes et éléments d'interface</strong> – nécessitent au moins 3:1 pour le niveau AA. S'applique aux icônes, boutons, champs de formulaire et autres éléments d'interface qui transmettent de l'information.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Le niveau AA</strong> est le minimum exigé par les réglementations d'accessibilité numérique dans de nombreux pays, y compris la{' '}
            <a href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016L2102" target="_blank" rel="noopener noreferrer" className="underline">
              directive européenne sur l'accessibilité des sites web
            </a>
            . <strong>Le niveau AAA</strong> offre une meilleure lisibilité, mais n'est pas toujours réalisable pour tous les éléments.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Ajustement automatique des couleurs aux exigences WCAG">
          <p className="text-mid mb-4">
            Si le contraste est trop faible, la fonction <strong>Ajustement</strong> trouve automatiquement une variante de couleur de texte conforme au seuil de contraste sélectionné.
          </p>
          <p className="text-mid mb-4">Comment fonctionne l’ajustement :</p>
          <ol className="text-mid list-decimal space-y-2 pl-5">
            <li>Sélectionnez l’objectif d’ajustement dans la liste, par ex. AA pour texte normal ou AAA pour texte grand.</li>
            <li>Cliquez sur le bouton Ajuster.</li>
            <li>L’outil recherche parmi les variantes de luminosité de la couleur du texte et suggère la plus proche conforme aux exigences.</li>
            <li>La couleur suggérée peut être copiée dans le presse-papiers ou définie immédiatement comme nouvelle couleur de texte.</li>
          </ol>
          <p className="text-mid mt-3">
            L’algorithme préserve la teinte et la saturation de la couleur d’origine, ne modifiant que la luminosité. La couleur suggérée reste cohérente avec l’identité visuelle tout en respectant le
            standard d’accessibilité.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionFeatureComparison
          title="Que signifient les niveaux AA et AAA dans le standard WCAG ?"
          plans={[
            { id: 'aa', name: 'Niveau AA (minimum)', highlighted: true },
            { id: 'aaa', name: 'Niveau AAA (amélioré)' },
          ]}
          features={[
            { name: 'Texte normal – min. 4,5:1', values: { aa: true, aaa: true } },
            { name: 'Texte normal – min. 7:1', values: { aa: false, aaa: true } },
            { name: 'Texte grand / gras – min. 3:1', values: { aa: true, aaa: true } },
            { name: 'Texte grand / gras – min. 4,5:1', values: { aa: false, aaa: true } },
            { name: 'Icônes et éléments d’interface – min. 3:1', values: { aa: true, aaa: true } },
            { name: 'Légalement obligatoire (directive UE)', values: { aa: true, aaa: false } },
            { name: 'Recommandé pour le contenu essentiel', values: { aa: true, aaa: true } },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Résolution de problèmes du vérificateur de contraste">
          <h3 className="h5 mb-2">Message d'erreur de format de couleur</h3>
          <p className="text-mid mb-4">
            Vérifiez le format de la couleur. Un code HEX doit commencer par <code className="rounded bg-black/5 px-1">#</code> et contenir 3 ou 6 caractères (par ex.{' '}
            <code className="rounded bg-black/5 px-1">#fff</code> ou <code className="rounded bg-black/5 px-1">#ffffff</code>). Pour le format RGB, vérifiez que les valeurs sont séparées par des virgules et comprises entre 0 et 255.
          </p>

          <h3 className="h5 mb-2">La fonction Ajustement ne trouve pas de couleur appropriée</h3>
          <p className="text-mid mb-4">
            Lorsque l'arrière-plan et le texte ont une luminosité similaire dans la même teinte, l'algorithme peut ne pas trouver de variante conforme aux exigences sans changer la teinte. Dans ce cas, envisagez de modifier la couleur d'arrière-plan ou de choisir une couleur de texte complètement différente.
          </p>

          <h3 className="h5 mb-2">La couleur dans le sélecteur ne correspond pas au code saisi</h3>
          <p className="text-mid">
            Le sélecteur de couleurs du navigateur ne prend en charge que le format HEX sans transparence. Si vous saisissez une couleur au format RGBA ou HSLA avec transparence, le sélecteur n'affichera que la partie colorée (sans alpha). Les calculs de contraste continuent de prendre en compte la transparence.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Où vérifier la lisibilité des couleurs ?"
          description="La lisibilité est importante partout où quelqu’un doit lire du texte ou reconnaître un élément d’interface :"
          grid="three"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Sites web',
              description: 'Texte des pages, boutons, liens, formulaires. Particulièrement important pour les sites d’entreprise dont les visiteurs ont des âges et des capacités visuelles variés.',
            },
            {
              icon: <RiShoppingCartLine className="h-6 w-6" />,
              title: 'Boutiques en ligne',
              description: 'Prix, boutons Acheter, informations produit. Une lisibilité faible peut signifier des commandes perdues.',
            },
            {
              icon: <RiSlideshowLine className="h-6 w-6" />,
              title: 'Présentations',
              description: 'Les diapositives projetées ont souvent un contraste plus faible que sur un moniteur. Vérifiez les couleurs avant de présenter.',
            },
            {
              icon: <RiPrinterLine className="h-6 w-6" />,
              title: 'Affiches et flyers',
              description: 'Les supports imprimés vus dans des conditions d’éclairage variées nécessitent un contraste élevé.',
            },
            { icon: <RiSmartphoneLine className="h-6 w-6" />, title: 'Applications mobiles', description: 'Les téléphones sont utilisés en plein soleil, la nuit et par des personnes de tous âges.' },
            {
              icon: <RiRestaurantLine className="h-6 w-6" />,
              title: 'Menus de restaurant',
              description: 'Souvent imprimés sur du papier de couleur ou avec des polices décoratives : il est facile d’obtenir un contraste trop faible.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Lisibilité des couleurs pour les personnes daltoniennes">
          <p className="text-mid mb-4">
            Le daltonisme est un trouble de la perception des couleurs qui touche environ 8{'\u00a0'}% des hommes et 0,5{'\u00a0'}% des femmes. Les personnes daltoniennes peuvent avoir du mal à distinguer certaines paires de couleurs, même si le contraste de luminosité est suffisant.
          </p>
          <p className="text-mid mb-4">Types les plus courants de daltonisme :</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Deutéranopie</strong> – difficulté à distinguer le vert du rouge (forme la plus courante)
            </li>
            <li>
              <strong>Protanopie</strong> – difficulté à percevoir le rouge
            </li>
            <li>
              <strong>Tritanopie</strong> – difficulté à percevoir le bleu et le jaune (rare)
            </li>
          </ul>
          <p className="text-mid mt-3">
            Cet outil vérifie le contraste de luminosité, qui est important pour tous les utilisateurs. Cependant, lors de la conception, il convient d'éviter les combinaisons de couleurs problématiques (par ex. texte rouge sur fond vert) et de ne pas se fier uniquement à la couleur pour transmettre de l'information – utilisez aussi des formes, des icônes et du texte.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Qu’est-ce qui rend ce vérificateur spécial ?"
          grid="two"
          items={[
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Évaluation objective basée sur une formule mathématique',
              description: 'Le rapport de contraste est calculé avec la formule WCAG : le résultat ne dépend ni de la configuration du moniteur ni de la perception individuelle des couleurs.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Conformité au standard international WCAG',
              description: 'Les résultats correspondent aux exigences de WCAG 2.1, qui constituent la base des réglementations d’accessibilité numérique dans l’UE et de nombreux autres pays.',
            },
            {
              icon: <RiMagicLine className="h-6 w-6" />,
              title: 'Ajustement automatique de la couleur au seuil',
              description: 'La fonction Ajustement trouve une variante de couleur de texte conforme au seuil de contraste sélectionné : elle préserve la teinte, ne modifie que la luminosité.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Cinq formats de couleur',
              description: 'Formats pris en charge : HEX, RGB, RGBA, HSL et HSLA. Le code couleur peut être collé directement depuis Figma, Photoshop ou une feuille de styles CSS.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Trois types de contenu en un seul test',
              description: 'Une seule vérification affiche le résultat pour le texte normal, le texte grand (titres, boutons) et les icônes : inutile de tester chaque type séparément.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/fr/outils/verificateur-de-contraste-des-couleurs')}
          title="Questions fréquentes sur le vérificateur de contraste"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: "Pourquoi ma couleur ne passe pas le test alors que je la vois bien ?",
              answer:
                "La perception personnelle des couleurs d\u00e9pend des r\u00e9glages du moniteur, de l'\u00e9clairage ambiant et des capacit\u00e9s visuelles individuelles. Le standard WCAG repose sur une formule math\u00e9matique objective qui prend en compte diff\u00e9rents troubles de la vision. Une couleur lisible sur un \u00e9cran peut \u00eatre illisible sur un autre ou pour une autre personne.",
              answerSchemaText: "La perception d\u00e9pend du moniteur, de l'\u00e9clairage et de la vision. WCAG utilise une formule objective.",
            },
            {
              question: "O\u00f9 trouver les codes couleur de mon site web ?",
              answer:
                "Dans le navigateur (Chrome, Firefox, Edge), ouvrez les outils de d\u00e9veloppement (clic droit \u2192 Inspecter). Dans l'onglet Styles, vous verrez les couleurs utilis\u00e9es sur la page. Sinon, des extensions comme ColorZilla permettent de r\u00e9cup\u00e9rer la couleur de n'importe quel \u00e9l\u00e9ment sans toucher au code.",
              answerSchemaText: "Outils de d\u00e9veloppement du navigateur (clic droit \u2192 Inspecter \u2192 Styles) ou extensions comme ColorZilla.",
            },
            {
              question: "Quelles paires de couleurs de mon site v\u00e9rifier en priorit\u00e9 ?",
              answer:
                "Les plus importantes : le texte sur le fond principal, le texte sur les banni\u00e8res et sections color\u00e9es, les boutons (couleur du texte et fond du bouton par rapport au fond de la page), les liens et les ic\u00f4nes. Portez une attention particuli\u00e8re aux \u00e9l\u00e9ments qui apparaissent sur des fonds diff\u00e9rents selon les sections.",
              answerSchemaText: "V\u00e9rifiez d'abord le texte sur le fond principal, les banni\u00e8res, les boutons, les liens et les ic\u00f4nes.",
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
