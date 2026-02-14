import Breadcrumbs from '@/components/sections/BreadCrumbs';
import HeroBanner from '@/components/sections/HeroBanner';
import WordCountTool from '@/components/sections/tools/WordCountTool';
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
import Script from 'next/script';
import AdSense from '@/components/ui/AdSense';
import {
  RiFileTextLine,
  RiBarChartLine,
  RiFileCopyLine,
  RiText,
  RiParagraph,
  RiTimeLine,
  RiEditLine,
  RiBloggerLine,
  RiShoppingBagLine,
  RiSearchLine,
  RiInfinityLine,
  RiCheckboxCircleLine,
  RiTimerLine,
  RiGraduationCapLine,
  RiTranslate2,
  RiUserLine,
  RiSpaceShipLine,
  RiHashtag,
} from 'react-icons/ri';

const LOCALE = 'fr' as const;
const TOOL_KEY = 'wordCounter' as const;

export const metadata: Metadata = {
  title: 'Compteur de mots et caractères gratuit en ligne – vérifier la longueur de texte',
  description:
    'Compteur de mots et caractères gratuit en ligne. Comptez mots, caractères, paragraphes et temps de lecture. Vérifiez la longueur optimale pour le SEO – article de blog, page de service, fiche produit. Sans inscription.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Compteur de mots et caractères gratuit en ligne',
    description: 'Comptez mots, caractères, paragraphes et temps de lecture. Vérifiez la longueur optimale pour le SEO. Sans inscription.',
    url: toAbsoluteUrl('/fr/outils/compteur-de-mots-et-caracteres'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-slow-i-znakow.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Compteur de mots et caractères gratuit en ligne',
  alternateName: ['Compteur de mots en ligne', 'Compteur de caractères', 'Vérificateur de longueur de texte SEO', 'Compteur de paragraphes'],
  url: toAbsoluteUrl('/fr/outils/compteur-de-mots-et-caracteres'),
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'TextAnalysis',
  operatingSystem: 'Any',
  description: 'Compteur de mots et caractères avec évaluation de la longueur. Vérifiez si la longueur convient pour une page d’accueil, un article de blog ou une fiche produit.',
  featureList: [
    'Compteur de mots et caractères',
    'Caractères avec et sans espaces',
    'Compteur de paragraphes',
    'Estimation du temps de lecture',
    'Évaluation de la longueur par type de page',
    'Copie du rapport',
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
  name: 'Comment vérifier la longueur de texte pour le SEO',
  description: 'Collez votre texte, sélectionnez le type de page et vérifiez si la longueur est optimale.',
  url: toAbsoluteUrl('/fr/outils/compteur-de-mots-et-caracteres'),
  step: [
    { '@type': 'HowToStep', name: 'Coller le texte', text: 'Collez ou saisissez le texte que vous souhaitez analyser.' },
    { '@type': 'HowToStep', name: 'Sélectionner le type de page', text: 'Choisissez le type de page (article de blog, page de service, page d’accueil, etc.).' },
    { '@type': 'HowToStep', name: 'Vérifier les résultats', text: 'Consultez le nombre de mots, caractères, paragraphes, temps de lecture et l’évaluation de la longueur.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Quelle est la longueur idéale d’un article de blog ?',
    answer:
      'Pour le SEO, les articles de blog performants comptent généralement entre 1 500 et 3 000 mots. Les articles plus longs et approfondis tendent à mieux se classer dans les résultats de recherche, à condition que le contenu soit de qualité et réponde à l’intention de recherche.',
    answerSchemaText: 'Généralement 1 500–3 000 mots pour le SEO. Le contenu de qualité est essentiel.',
  },
  {
    question: 'Quelle est la longueur idéale d’une page de service ?',
    answer:
      'Une page de service doit compter au minimum 800–1 500 mots pour fournir suffisamment d’informations aux utilisateurs et aux moteurs de recherche. Le contenu doit décrire clairement le service, ses avantages et inclure un appel à l’action.',
    answerSchemaText: 'Minimum 800–1 500 mots. Description claire, avantages et appel à l’action.',
  },
  {
    question: 'Comment est calculé le temps de lecture ?',
    answer:
      'Le temps de lecture est estimé sur la base de 200–250 mots par minute, ce qui correspond à la vitesse de lecture moyenne d’un adulte. Le résultat est une approximation – la vitesse réelle dépend de la complexité du texte et du lecteur.',
    answerSchemaText: 'Basé sur 200–250 mots/minute (vitesse de lecture moyenne).',
  },
  {
    question: 'Mes données sont-elles envoyées à un serveur ?',
    answer: 'Non. Tout le traitement s’effectue localement dans votre navigateur. Aucun texte n’est envoyé ni stocké.',
    answerSchemaText: 'Non. Traitement local dans le navigateur.',
  },
  {
    question: 'L’outil fonctionne-t-il pour toutes les langues ?',
    answer: 'Oui. Le compteur de mots fonctionne avec n’importe quelle langue utilisant des espaces comme séparateurs de mots – français, anglais, allemand, espagnol, polonais et bien d’autres.',
    answerSchemaText: 'Oui, pour toutes les langues utilisant des espaces comme séparateurs.',
  },
];

export default function WordCountPage() {
  return (
    <>
      <Script id="ld-json-word-count-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-word-howto-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Compteur de mots et caractères"
        description="Comptez les mots, caractères, paragraphes et estimez le temps de lecture. Vérifiez si la longueur de votre texte est optimale pour le SEO – article de blog, page de service ou fiche produit."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-licznik-slow-i-znakow.webp"
      />

      <Breadcrumbs second={{ href: '/fr/outils', label: 'Outils' }} third={{ href: '/fr/outils/compteur-de-mots-et-caracteres', label: 'Compteur de mots' }} includeJsonLd locale="fr" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <WordCountTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Pourquoi la longueur du texte est importante pour le SEO ?">
          <p className="text-mid">
            La longueur du texte est l’un des facteurs qui influencent le classement dans les résultats de recherche. Les pages trop courtes peuvent être perçues comme manquant de profondeur, tandis
            que les pages excessivement longues sans structure claire peuvent décourager les lecteurs.
          </p>
          <p className="text-mid mt-3">
            Cet outil vous aide à vérifier si la longueur de votre texte correspond aux recommandations pour différents types de pages – articles de blog, pages de service, pages d’accueil et fiches
            produit. Il compte les mots, caractères, paragraphes et estime le temps de lecture.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Comment utiliser le compteur"
          description="L’analyse ne prend que quelques secondes :"
          grid="three"
          items={[
            { icon: <RiFileTextLine className="h-6 w-6" />, title: '1. Coller le texte', description: 'Collez ou saisissez le texte que vous souhaitez analyser.' },
            { icon: <RiBarChartLine className="h-6 w-6" />, title: '2. Choisir le type de page', description: 'Sélectionnez le type de page pour obtenir une évaluation de la longueur adaptée.' },
            { icon: <RiFileCopyLine className="h-6 w-6" />, title: '3. Copier le rapport', description: 'Consultez les statistiques et copiez le rapport si nécessaire.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Ce que le compteur mesure : mots, caractères, temps de lecture"
          description="Le compteur enregistre cinq métriques clés :"
          grid="two"
          items={[
            {
              icon: <RiText className="h-6 w-6" />,
              title: 'Mots',
              description: 'Nombre total de mots. C’est l’indicateur principal de la longueur du texte.',
            },
            {
              icon: <RiSpaceShipLine className="h-6 w-6" />,
              title: 'Caractères (avec espaces)',
              description: 'Tous les caractères, espaces compris. Utile lorsqu’un CMS impose une limite de caractères (ex. : fiches sur les marketplaces).',
            },
            {
              icon: <RiHashtag className="h-6 w-6" />,
              title: 'Caractères (sans espaces)',
              description: 'Uniquement lettres, chiffres et ponctuation. Parfois requis par les imprimeurs ou pour la facturation de traductions.',
            },
            {
              icon: <RiParagraph className="h-6 w-6" />,
              title: 'Paragraphes',
              description: 'Combien de blocs de texte séparés par des lignes vides. Aide à évaluer si le texte est bien structuré.',
            },
            {
              icon: <RiTimeLine className="h-6 w-6" />,
              title: 'Temps de lecture',
              description: 'Le calculateur de temps de lecture indique combien de minutes il faut pour lire le texte à une vitesse moyenne de 200 mots par minute.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Comment interpréter les résultats"
          subtitle="États d’évaluation"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  Bonne longueur
                </Badge>
                <span className="text-mid text-sm!">Le texte se situe dans la plage recommandée</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="warning" size="sm">
                  En dessous de la plage
                </Badge>
                <span className="text-mid text-sm!">Le texte est plus court que la moyenne</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="error" size="sm">
                  Au-dessus de la plage
                </Badge>
                <span className="text-mid text-sm!">Le texte est plus long que la moyenne</span>
              </div>
              <div className="mt-2 rounded-lg bg-neutral-100 p-3">
                <div className="mb-1 flex items-center justify-between text-sm!">
                  <span className="text-dark font-medium">Progression</span>
                  <span className="text-mid">1200 / 1200-3000</span>
                </div>
                <div className="h-2 w-full rounded-full bg-neutral-200">
                  <div className="bg-success-icon h-2 w-2/5 rounded-full" />
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">La barre de progression colorée et le statut vous aident à évaluer rapidement la longueur du texte :</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-success-text">Bonne longueur</strong> (vert) – le texte se situe dans la plage approximative pour le type de page sélectionné.
            </li>
            <li>
              <strong className="text-warning-text">En dessous de la plage</strong> (jaune) – le texte est plus court que la moyenne pour ce type de page. S’il répond à toutes les questions du
              lecteur, la longueur peut convenir.
            </li>
            <li>
              <strong className="text-error-text">Au-dessus de la plage</strong> (rouge) – le texte est plus long que la moyenne. Si chaque paragraphe apporte une information nouvelle, la longueur est
              justifiée.
            </li>
          </ul>
          <p className="text-mid mt-4">
            Les plages sont basées sur l’analyse de contenus bien positionnés dans les moteurs de recherche. Si le texte répond aux questions du lecteur, la longueur est adéquate quel que soit le
            résultat du compteur.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Combien de mots doit contenir un texte : longueur optimale pour le SEO">
          <p className="text-mid mb-4">
            Les plages ci-dessous sont basées sur l’analyse de contenus bien positionnés dans les moteurs de recherche. La longueur du texte en elle-même n’influence pas le positionnement sur Google :
            ce qui compte, c’est si le contenu répond aux questions du lecteur.
          </p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Type de page</th>
                  <th className="py-2 pr-4 font-semibold">Plage</th>
                  <th className="py-2 font-semibold">Quand plus court, quand plus long ?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Fiche produit</td>
                  <td className="py-2 pr-4 whitespace-nowrap">80–400 mots</td>
                  <td className="text-primary-light0 py-2 text-sm">
                    Produit simple (ex. : une tasse) : 80–150 mots. Équipement complexe (ex. : un ordinateur portable) : 300–400 mots, car les acheteurs ont davantage de questions.
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Page de service</td>
                  <td className="py-2 pr-4 whitespace-nowrap">500–1 500 mots</td>
                  <td className="text-primary-light0 py-2 text-sm">Service local (ex. : plombier) : 500–700 mots. Service B2B avec processus et FAQ : 1 200–1 500 mots.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Page d’accueil</td>
                  <td className="py-2 pr-4 whitespace-nowrap">400–1 000 mots</td>
                  <td className="text-primary-light0 py-2 text-sm">
                    La page d’accueil transmet la valeur principale et guide les visiteurs : le texte soutient la navigation, il ne remplace pas les sous-pages.
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Landing page</td>
                  <td className="py-2 pr-4 whitespace-nowrap">600–2 500 mots</td>
                  <td className="text-primary-light0 py-2 text-sm">Offre simple : 600–1 000 mots. Offre nécessitant d’expliquer le processus, les variantes et les objections : 1 500–2 500 mots.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Article de blog</td>
                  <td className="py-2 pr-4 whitespace-nowrap">1 200–3 000 mots</td>
                  <td className="text-primary-light0 py-2 text-sm">Réponse à une question simple : 1 200–1 800 mots. Sujet complexe avec de nombreux aspects : 2 000–3 000 mots.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Guide</td>
                  <td className="py-2 pr-4 whitespace-nowrap">2 500–6 000 mots</td>
                  <td className="text-primary-light0 py-2 text-sm">Sujet ciblé : 2 500–3 500 mots. Sujet large avec de nombreuses étapes et exemples : 4 000–6 000 mots.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Pour qui le compteur de mots en ligne est-il utile ?"
          description="Un outil de comptage de mots pour les rédacteurs et bien plus : voici ceux qui utilisent le plus le compteur :"
          grid="three"
          items={[
            {
              icon: <RiEditLine className="h-6 w-6" />,
              title: 'Rédacteurs et créateurs de contenu',
              description: 'Vérifiez si le texte se situe dans la plage recommandée pour un type de page spécifique. Le compteur de mots SEO aide à évaluer si un article est suffisamment développé.',
            },
            {
              icon: <RiBloggerLine className="h-6 w-6" />,
              title: 'Blogueurs',
              description: 'Contrôlez la longueur des articles pour maintenir la cohérence. Vérifiez le temps de lecture avant publication.',
            },
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'E-commerce',
              description: 'Vérifiez les descriptions de produits par rapport aux limites de caractères des plateformes de vente (Amazon, eBay, Etsy).',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Spécialistes SEO',
              description: 'Évaluez si le contenu de la page a une longueur optimale par rapport à la concurrence. Analysez le rapport mots-sujet.',
            },
            {
              icon: <RiGraduationCapLine className="h-6 w-6" />,
              title: 'Étudiants et universitaires',
              description: 'Vérifiez si un travail respecte la limite de mots ou de caractères requise.',
            },
            {
              icon: <RiTranslate2 className="h-6 w-6" />,
              title: 'Traducteurs',
              description: 'Comptez les caractères sans espaces pour les devis de traduction (une unité de facturation standard).',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title={"Limites de caract\u00e8res sur les plateformes populaires"}>
          <p className="text-mid mb-4">{"Le compteur de caract\u00e8res est utile pour cr\u00e9er du contenu sur des plateformes avec des restrictions de longueur\u00a0:"}</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">{"Plateforme / \u00c9l\u00e9ment"}</th>
                  <th className="py-2 pr-4 font-semibold">{"Limite de caract\u00e8res"}</th>
                  <th className="py-2 font-semibold">Remarques</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">{"Google \u2013 m\u00e9ta titre"}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">{"50\u201360 caract\u00e8res"}</td>
                  <td className="text-primary-light0 py-2 text-sm">{"Les titres plus longs sont tronqu\u00e9s dans les r\u00e9sultats de recherche."}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">{"Google \u2013 m\u00e9ta description"}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">{"150\u2013160 caract\u00e8res"}</td>
                  <td className="text-primary-light0 py-2 text-sm">{"Description visible sous le lien dans les r\u00e9sultats de recherche."}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">{"Amazon \u2013 titre de produit"}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">{"200 caract\u00e8res"}</td>
                  <td className="text-primary-light0 py-2 text-sm">{"Titre concis avec les mots-cl\u00e9s les plus importants."}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">{"X (Twitter) \u2013 publication"}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">{"280 caract\u00e8res"}</td>
                  <td className="text-primary-light0 py-2 text-sm">{"Limite standard pour les utilisateurs r\u00e9guliers."}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">{"LinkedIn \u2013 publication"}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">{"3\u00a0000 caract\u00e8res"}</td>
                  <td className="text-primary-light0 py-2 text-sm">{"Apr\u00e8s ~210 caract\u00e8res, le lien \u00ab\u00a0voir plus\u00a0\u00bb appara\u00eet."}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Qu’est-ce qui rend ce compteur spécial ?"
          grid="two"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Six types de pages avec plages recommandées',
              description: 'Fiche produit, page de service, page d’accueil, landing page, article de blog et guide : chaque type a ses propres plages basées sur l’analyse.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Traitement local dans le navigateur',
              description: 'Votre texte n’est jamais envoyé à un serveur : toute l’analyse se fait localement sur votre appareil.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'Évaluation de la longueur du texte',
              description: 'Ne se limite pas à compter les mots : vous obtenez une indication sur l’adéquation de la longueur pour le type de page sélectionné.',
            },
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: 'Plages basées sur le SEO',
              description: 'Les longueurs recommandées sont basées sur l’analyse de contenus bien positionnés dans les moteurs de recherche.',
            },
            {
              icon: <RiTimerLine className="h-6 w-6" />,
              title: 'Temps de lecture',
              description: 'Sachez immédiatement combien de minutes les lecteurs mettront à lire le texte.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: 'Copier le rapport',
              description: 'Le bouton Copier le rapport copie un résumé avec toutes les statistiques et l’évaluation de longueur dans le presse-papiers.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/fr/outils/compteur-de-mots-et-caracteres')}
          title="Questions fréquentes sur le compteur de mots"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: "Puis-je copier le rapport avec les statistiques ?",
              answer:
                "Oui. Sous les statistiques se trouve un bouton Copier le rapport \u2013 il copie un r\u00e9sum\u00e9 avec le nombre de mots, caract\u00e8res, paragraphes, le temps de lecture et l'\u00e9valuation de longueur dans le presse-papiers. Vous pouvez le coller dans un document ou l'envoyer \u00e0 des collaborateurs.",
              answerSchemaText: "Oui. Cliquez sur Copier le rapport. Un r\u00e9sum\u00e9 avec toutes les m\u00e9triques est copi\u00e9 dans le presse-papiers.",
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
