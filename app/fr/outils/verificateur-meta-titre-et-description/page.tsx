import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import MetaTitleDescriptionTool from '@/components/sections/tools/MetaTitleDescriptionTool';
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
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiPencilLine,
  RiFileTextLine,
  RiEyeLine,
  RiRulerLine,
  RiShoppingBagLine,
  RiSearchLine,
  RiEditLine,
  RiMegaphoneLine,
  RiCodeLine,
  RiRuler2Line,
  RiCheckboxCircleLine,
  RiInfinityLine,
  RiUserLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Vérificateur gratuit de méta titre et description en ligne',
  description:
    'Vérificateur gratuit de méta titre et description. Vérifiez le nombre de caractères, la largeur en pixels et l’aperçu Google. Évitez les titres et descriptions tronqués dans les résultats de recherche.',
  alternates: {
    canonical: toAbsoluteUrl('/fr/outils/verificateur-meta-titre-et-description'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'),
      en: toAbsoluteUrl('/en/tools/meta-title-description-length-checker'),
      de: toAbsoluteUrl('/de/werkzeuge/meta-titel-beschreibung-laengenpruefer'),
      es: toAbsoluteUrl('/es/herramientas/verificador-de-meta-titulo-y-descripcion'),
      fr: toAbsoluteUrl('/fr/outils/verificateur-meta-titre-et-description'),
    },
  },
  openGraph: {
    title: 'Vérificateur gratuit de méta titre et description en ligne',
    description: 'Vérifiez le nombre de caractères, la largeur en pixels et l’aperçu Google. Évitez les titres et descriptions tronqués.',
    url: toAbsoluteUrl('/fr/outils/verificateur-meta-titre-et-description'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Vérificateur de méta titre et description en ligne',
  alternateName: ['Vérificateur de méta titre avec aperçu Google', 'Compteur de caractères méta titre', 'Aperçu SERP Google', 'Vérificateur de longueur SEO'],
  url: toAbsoluteUrl('/fr/outils/verificateur-meta-titre-et-description'),
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'SEOTool',
  operatingSystem: 'Any',
  description: 'Vérificateur de méta titre et description avec aperçu Google. Affiche le nombre de caractères, de mots et la largeur en pixels pour éviter les titres et descriptions tronqués.',
  featureList: [
    'Compteur de caractères et de mots',
    'Mesure de la largeur en pixels',
    'Aperçu du résultat Google (SERP)',
    'Évaluation de la longueur (trop court / bonne / trop long)',
    'URL optionnelle dans l’aperçu',
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
  name: 'Comment vérifier la longueur du méta titre et de la description',
  description: 'Saisissez votre méta titre et description pour vérifier le nombre de caractères, la largeur en pixels et l’aperçu dans les résultats Google.',
  url: toAbsoluteUrl('/fr/outils/verificateur-meta-titre-et-description'),
  step: [
    {
      '@type': 'HowToStep',
      name: 'Saisir le méta titre',
      text: 'Saisissez le titre de votre page dans le champ prévu. L’outil affiche immédiatement le nombre de caractères et la largeur en pixels.',
    },
    { '@type': 'HowToStep', name: 'Saisir la méta description', text: 'Saisissez la description de votre page. Vérifiez que la longueur se situe dans la plage recommandée.' },
    { '@type': 'HowToStep', name: 'Vérifier l’aperçu', text: 'Consultez l’aperçu du résultat Google pour voir comment votre page apparaîtra dans les SERP.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Quelle est la longueur idéale d’un méta titre ?',
    answer:
      'Google affiche généralement les titres jusqu’à environ 580–600 pixels de large, ce qui correspond à environ 50–60 caractères. Un titre plus long risque d’être tronqué dans les résultats de recherche. L’outil mesure à la fois les caractères et la largeur en pixels.',
    answerSchemaText: 'Environ 50–60 caractères / 580–600 pixels. Au-delà, le titre risque d’être tronqué.',
  },
  {
    question: 'Quelle est la longueur idéale d’une méta description ?',
    answer: 'La plage recommandée est d’environ 120–160 caractères (jusqu’à ~920 pixels). Au-delà, Google peut tronquer la description ou la remplacer par un extrait du contenu de la page.',
    answerSchemaText: 'Environ 120–160 caractères / jusqu’à ~920 pixels.',
  },
  {
    question: 'Pourquoi la largeur en pixels est-elle importante ?',
    answer:
      'Google ne coupe pas les titres par nombre de caractères, mais par largeur en pixels. Les lettres comme «W» ou «M» sont plus larges que «i» ou «l». Un titre de 55 caractères avec beaucoup de lettres larges peut être tronqué, alors qu’un titre de 60 caractères avec des lettres étroites pourrait être affiché en entier.',
    answerSchemaText: 'Google tronque par largeur en pixels, pas par nombre de caractères. Les lettres larges prennent plus de place.',
  },
  {
    question: 'L’aperçu Google est-il exact ?',
    answer:
      'L’aperçu est approximatif. Google peut ajuster le titre et la description en fonction de la largeur de l’écran, de la requête de recherche et du contenu de la page. Néanmoins, l’aperçu donne une bonne indication de l’apparence dans les SERP.',
    answerSchemaText: 'Approximatif. Google peut adapter selon l’écran et la requête.',
  },
  {
    question: 'Mes données sont-elles envoyées à un serveur ?',
    answer: 'Non. Tout le traitement s’effectue localement dans votre navigateur. Aucune donnée n’est envoyée ni stockée.',
    answerSchemaText: 'Non. Traitement local dans le navigateur.',
  },
];

export default function MetaTitlePage() {
  return (
    <>
      <Script id="ld-json-meta-title-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-meta-howto-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Vérificateur de méta titre et description"
        description="Vérifiez le nombre de caractères, de mots et la largeur en pixels de vos méta titres et descriptions. Aperçu en temps réel de l’apparence de votre page dans les résultats Google."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp"
      />

      <Breadcrumbs
        second={{ href: '/fr/outils', label: 'Outils' }}
        third={{ href: '/fr/outils/verificateur-meta-titre-et-description', label: 'Méta titre et description' }}
        includeJsonLd
        locale="fr"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <MetaTitleDescriptionTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Pourquoi vérifier la longueur du méta titre et de la description ?">
          <p className="text-mid">
            Le méta titre et la méta description sont les premiers éléments que les utilisateurs voient dans les résultats de recherche Google. Un titre tronqué ou une description coupée peut réduire
            le taux de clics et nuire au référencement de votre page.
          </p>
          <p className="text-mid mt-3">
            Cet outil vérifie le nombre de caractères, le nombre de mots et la largeur en pixels de votre titre et description. Il affiche un aperçu en temps réel de l’apparence de votre page dans les
            résultats Google, vous permettant d’optimiser chaque élément avant publication.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Comment utiliser le vérificateur"
          description="La vérification ne prend que quelques secondes :"
          grid="three"
          items={[
            {
              icon: <RiPencilLine className="h-6 w-6" />,
              title: '1. Saisir le méta titre',
              description: 'Saisissez le titre de votre page. L’outil affiche immédiatement le nombre de caractères et la largeur en pixels.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: '2. Saisir la description',
              description: 'Saisissez la méta description. Vérifiez que la longueur se situe dans la plage recommandée.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: '3. Vérifier l’aperçu',
              description: 'Consultez l’aperçu Google pour voir comment votre page apparaîtra dans les résultats de recherche.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Combien de caractères doivent contenir le méta titre et la description ?">
          <p className="text-mid mb-4">Google tronque les titres et les descriptions trop longs. Voici les plages recommandées qui réduisent le risque de coupure dans les résultats de recherche.</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Élément</th>
                  <th className="py-2 pr-4 font-semibold">Caractères</th>
                  <th className="py-2 pr-4 font-semibold">Pixels</th>
                  <th className="py-2 font-semibold">Remarques</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Méta titre</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50–60 caractères</td>
                  <td className="py-2 pr-4 whitespace-nowrap">jusqu'à ~580 px</td>
                  <td className="text-primary-light0 py-2 text-sm">Placez les mots les plus importants au début. Nom de marque à la fin.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Méta description</td>
                  <td className="py-2 pr-4 whitespace-nowrap">120–160 caractères</td>
                  <td className="py-2 pr-4 whitespace-nowrap">jusqu'à ~920 px</td>
                  <td className="text-primary-light0 py-2 text-sm">2-3 phrases courtes suffisent. Terminez par un appel à l'action.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-mid mt-4 text-sm">Ce sont des valeurs approximatives : Google ne publie pas de limites strictes et peut les ajuster selon l'appareil et le contexte de la requête.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Comment interpréter les résultats"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark mb-2 text-sm! font-medium">Méta titre</p>
                <div className="flex flex-wrap gap-2 text-sm!">
                  <span className="text-mid">
                    Caractères : <strong>52</strong>
                  </span>
                  <span className="text-mid">
                    Mots : <strong>7</strong>
                  </span>
                  <span className="text-mid">
                    Pixels : <strong>456px</strong>
                  </span>
                </div>
                <Badge variant="success" size="sm" className="mt-2">
                  Bonne longueur
                </Badge>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark mb-2 text-sm! font-medium">Méta description</p>
                <div className="flex flex-wrap gap-2 text-sm!">
                  <span className="text-mid">
                    Caractères : <strong>142</strong>
                  </span>
                  <span className="text-mid">
                    Mots : <strong>21</strong>
                  </span>
                  <span className="text-mid">
                    Pixels : <strong>812px</strong>
                  </span>
                </div>
                <Badge variant="success" size="sm" className="mt-2">
                  Bonne longueur
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">L'outil affiche trois métriques pour chaque champ ainsi qu'une évaluation de longueur codée par couleurs :</p>

          <h3 className="h5 mt-6 mb-2">Métriques</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Caractères</strong> – nombre total de caractères (espaces compris). Facile à comprendre mais moins précis que les pixels.
            </li>
            <li>
              <strong>Mots</strong> – nombre de mots. Utile pour une évaluation rapide de la longueur.
            </li>
            <li>
              <strong>Largeur (px)</strong> – largeur du texte en pixels. C'est la valeur que Google utilise réellement pour tronquer.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-2">États d'évaluation</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-success-text">Bonne longueur</strong> (vert) – le texte est dans la plage recommandée. Google devrait l'afficher en entier.
            </li>
            <li>
              <strong className="text-warning-text">Trop court</strong> (jaune) – le texte est très court. Vous avez de la place pour plus d'informations qui pourraient encourager les clics.
            </li>
            <li>
              <strong className="text-error-text">Trop long</strong> (rouge) – le texte dépasse la plage recommandée. Google le tronquera probablement. Envisagez de le raccourcir.
            </li>
            <li>
              <strong className="text-light">Aucune donnée</strong> (gris) – le champ est vide. Saisissez du texte pour voir l'analyse.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Pourquoi la largeur en pixels est-elle plus importante que le nombre de caract&#xe8;res ?"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">{"iiiiiiiiiiiiiiii (16 caract\u00e8res)"}</p>
                <div className="bg-success-icon mt-1 h-3 w-1/4 rounded-full" />
                <p className="text-light mt-1 text-xs!">{"~64\u00a0px de largeur"}</p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">{"WWWWWWWWWWWWWWWW (16 caract\u00e8res)"}</p>
                <div className="bg-error-icon mt-1 h-3 w-3/4 rounded-full" />
                <p className="text-light mt-1 text-xs!">{"~256\u00a0px de largeur"}</p>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            {"Les diff\u00e9rentes lettres ont des largeurs diff\u00e9rentes. Comparez \u00ab\u00a0iiii\u00a0\u00bb et \u00ab\u00a0WWWW\u00a0\u00bb : les deux ont 4 caract\u00e8res, mais la largeur visuelle est compl\u00e8tement diff\u00e9rente. Google mesure la largeur du texte en pixels, pas en caract\u00e8res."}
          </p>
          <p className="text-mid mt-3">
            {"C'est pourquoi un titre avec de nombreuses lettres \u00e9troites (i, l, t, f) peut \u00eatre plus long qu'un titre avec des lettres larges (W, M, O), malgr\u00e9 le m\u00eame nombre de caract\u00e8res. L'outil affiche les deux valeurs : le nombre de caract\u00e8res (plus facile \u00e0 comprendre) et la largeur en pixels (plus pr\u00e9cis pour Google)."}
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title={"Aper\u00e7u du snippet : que montre-t-il ?"}>
          <p className="text-mid">
            {"L'aper\u00e7u (snippet preview) simule l'apparence du titre et de la description de la page dans les r\u00e9sultats de recherche Google. C'est une visualisation indicative : l'apparence r\u00e9elle peut varier l\u00e9g\u00e8rement selon l'appareil et le navigateur."}
          </p>
          <h3 className="h5 mt-6 mb-2">{"\u00c9l\u00e9ments de l'aper\u00e7u"}</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li><strong>URL</strong>{" \u2013 l'adresse de la page affich\u00e9e au-dessus du titre. Vous pouvez la saisir dans un champ optionnel pour un r\u00e9sultat plus r\u00e9aliste."}</li>
            <li><strong>Titre</strong>{" \u2013 l'en-t\u00eate bleu. S'il est trop long, l'outil le tronque automatiquement et ajoute des points de suspension."}</li>
            <li><strong>Description</strong>{" \u2013 le texte gris sous le titre. Il est \u00e9galement tronqu\u00e9 s'il d\u00e9passe la limite."}</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Problèmes courants et solutions"
          grid="two"
          items={[
            {
              icon: <RiRulerLine className="h-6 w-6" />,
              title: 'Le titre est trop long',
              description:
                'Raccourcissez le titre en conservant les mots les plus importants au début. Supprimez les adjectifs comme « meilleur » ou « professionnel », qui ajoutent rarement de la valeur. Placez le nom de marque à la fin après un séparateur.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: 'La description est trop courte',
              description: 'Ajoutez plus d’informations : ce que l’utilisateur trouvera sur la page, quel avantage il en tirera, ce qui différencie l’offre. Terminez par un appel à l’action.',
            },
            {
              icon: <RiRuler2Line className="h-6 w-6" />,
              title: 'La largeur en pixels est différente de l’attendu',
              description: 'L’outil mesure la largeur avec une police standard similaire à celle utilisée par Google. Le résultat peut varier légèrement selon le navigateur.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Conseils pour des méta titres efficaces"
          description="Un bon méta titre influence le taux de clics dans les résultats de recherche :"
          grid="two"
          items={[
            { icon: <RiSearchLine className="h-6 w-6" />, title: 'Mot-clé principal en début', description: 'Placez le mot-clé le plus important au début du titre pour une meilleure visibilité.' },
            { icon: <RiRulerLine className="h-6 w-6" />, title: 'Respecter la plage optimale', description: '50–60 caractères / 450–580 pixels – la plage qui s’affiche généralement en entier.' },
            { icon: <RiEditLine className="h-6 w-6" />, title: 'Être descriptif et unique', description: 'Chaque page doit avoir un titre unique qui décrit précisément son contenu.' },
            { icon: <RiMegaphoneLine className="h-6 w-6" />, title: 'Inciter au clic', description: 'Utilisez des termes qui donnent envie de cliquer – sans tomber dans le clickbait.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Pour qui le vérificateur de méta est-il utile ?"
          description="Le vérificateur de méta est utile pour quiconque crée du contenu web :"
          grid="two"
          items={[
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'Propriétaires de sites et boutiques',
              description: 'Vérifiez si les titres et descriptions sont tronqués dans les résultats Google avant de publier une nouvelle page ou un produit.',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Spécialistes SEO',
              description: 'Testez différentes variantes de titre et description, vérifiez l’aperçu des résultats de recherche et le respect des recommandations.',
            },
            { icon: <RiEditLine className="h-6 w-6" />, title: 'Rédacteurs', description: 'Rédigez des titres et descriptions qui respectent les limites et encouragent les clics.' },
            {
              icon: <RiMegaphoneLine className="h-6 w-6" />,
              title: 'Professionnels du marketing',
              description: 'Créez des méta pour les campagnes et landing pages, en optimisant le taux de clics dans les résultats organiques.',
            },
            { icon: <RiCodeLine className="h-6 w-6" />, title: 'Développeurs', description: 'Vérifiez les balises méta avant de déployer une page en production.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Qu’est-ce qui rend ce vérificateur spécial ?"
          grid="two"
          items={[
            {
              icon: <RiRuler2Line className="h-6 w-6" />,
              title: 'Mesure en pixels',
              description: 'Nous ne comptons pas seulement les caractères : nous mesurons la largeur réelle du texte comme le fait Google.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Aperçu Google',
              description: 'Voyez comment le titre et la description apparaissent dans les résultats de recherche avant de publier votre page.',
            },
            { icon: <RiCheckboxCircleLine className="h-6 w-6" />, title: 'Évaluation codée par couleurs', description: 'Sachez instantanément si le texte est trop court, optimal ou trop long.' },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Pixels et caractères ensemble',
              description: 'L’outil affiche les deux valeurs simultanément : vous pouvez comparer si le titre respecte à la fois la limite de caractères et celle de pixels.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Titre et description en une seule vue',
              description: 'Vérifiez le méta titre et la description simultanément, sans changer d’onglet.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels pageUrl={toAbsoluteUrl('/fr/outils/verificateur-meta-titre-et-description')} title="Questions fréquentes sur le vérificateur de méta titre" openByDefault={1} items={faqItems} />

        <Gap variant="line" />

        <ToolsCarousel title="Découvrir d’autres outils" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
