import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ImageResizeTool from '@/components/sections/tools/ImageResizeTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTabs from '@/components/ui/sections/SectionTabs';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiCropLine,
  RiImageLine,
  RiDownloadLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGlobalLine,
  RiArticleLine,
  RiUserLine,
  RiZoomInLine,
  RiFileImageLine,
  RiAspectRatioLine,
  RiLayoutGridLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Éditeur d’images en ligne gratuit – recadrer et redimensionner',
  description:
    'Éditeur d’images en ligne gratuit. Recadrez et redimensionnez vos images pour les réseaux sociaux et les sites web. Modèles prêts à l’emploi, dimensions personnalisées, avatars ronds. Export en PNG, JPG, WebP.',
  alternates: {
    canonical: toAbsoluteUrl('/fr/outils/editeur-d-images-en-ligne'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/edytor-zdjec-online'),
      en: toAbsoluteUrl('/en/tools/online-image-editor'),
      de: toAbsoluteUrl('/de/werkzeuge/online-bildeditor'),
      es: toAbsoluteUrl('/es/herramientas/editor-de-imagenes-en-linea'),
      fr: toAbsoluteUrl('/fr/outils/editeur-d-images-en-ligne'),
    },
  },
  openGraph: {
    title: 'Éditeur d’images en ligne gratuit – recadrer et redimensionner',
    description: 'Recadrez et redimensionnez vos images pour les réseaux sociaux et les sites web. Modèles prêts à l’emploi. Export en PNG, JPG, WebP.',
    url: toAbsoluteUrl('/fr/outils/editeur-d-images-en-ligne'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Éditeur d’images en ligne – recadrer et redimensionner',
  alternateName: ['Recadrer des images en ligne', 'Redimensionner des images en ligne', 'Recadrer des images Instagram', 'Taille de couverture Facebook', 'Créer une bannière LinkedIn'],
  url: toAbsoluteUrl('/fr/outils/editeur-d-images-en-ligne'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageEditor',
  operatingSystem: 'Any',
  description: 'Recadrez et redimensionnez vos images pour les réseaux sociaux et les sites web. Modèles pour Instagram, Facebook, LinkedIn. Trois formes de recadrage, export en PNG, JPG, WebP.',
  featureList: [
    'Modèles pour Instagram, Facebook, LinkedIn, OG Image',
    'Trois formes de recadrage : rectangle, carré, cercle',
    'Dimensions personnalisées en pixels',
    'Contrôle du zoom et de la position',
    'Export en PNG, JPG, WebP',
    'Réglage de la qualité pour JPG et WebP',
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
  name: 'Comment recadrer des images en ligne',
  description: 'Recadrez des images pour les réseaux sociaux et les sites web. Utilisez des modèles prêts à l’emploi ou saisissez vos propres dimensions.',
  url: toAbsoluteUrl('/fr/outils/editeur-d-images-en-ligne'),
  step: [
    { '@type': 'HowToStep', name: 'Importer une image', text: 'Glissez-déposez une image ou sélectionnez un fichier. Formats pris en charge : JPG, PNG, WebP.' },
    { '@type': 'HowToStep', name: 'Choisir le recadrage', text: 'Sélectionnez un modèle (ex. : Instagram Post, couverture Facebook) ou saisissez vos dimensions.' },
    { '@type': 'HowToStep', name: 'Ajuster le zoom et la position', text: 'Réglez le zoom et la position pour définir le cadrage souhaité.' },
    { '@type': 'HowToStep', name: 'Télécharger', text: 'Choisissez le format de sortie (PNG, JPG, WebP) et téléchargez l’image recadrée.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Quels formats d’image sont pris en charge ?',
    answer:
      'Vous pouvez importer des images JPG, PNG et WebP. Le format de sortie (PNG, JPG ou WebP) est choisi lors du téléchargement. Pour les recadrages en forme de cercle, PNG ou WebP est recommandé, car JPG ne gère pas la transparence.',
    answerSchemaText: 'Entrée : JPG, PNG, WebP. Sortie : PNG, JPG, WebP (au choix).',
  },
  {
    question: 'Quels modèles de taille sont disponibles ?',
    answer:
      'Modèles pour Instagram (carré 1080×1080, portrait 1080×1350, story/reels 1080×1920), Facebook (publication 1200×630, couverture 820×312), LinkedIn (publication 1200×627, bannière 1584×396), OG Image (1200×630), image d’article, bannière de site, section hero et plus.',
    answerSchemaText: 'Instagram, Facebook, LinkedIn, OG Image, image d’article, bannière de site et autres.',
  },
  {
    question: 'Puis-je créer des avatars ronds ?',
    answer:
      'Oui. L’éditeur prend en charge trois formes de recadrage : rectangle, carré et cercle. En forme de cercle, l’image est enregistrée avec un fond transparent (PNG ou WebP). Idéal pour les photos de profil et les avatars.',
    answerSchemaText: 'Oui. Trois formes : rectangle, carré, cercle. Cercle = fond transparent.',
  },
  {
    question: 'Mes images sont-elles envoyées à un serveur ?',
    answer: 'Non. Tout le traitement s’effectue localement dans votre navigateur via l’API Canvas. Vos images ne quittent jamais votre ordinateur et ne sont stockées nulle part.',
    answerSchemaText: 'Non. Traitement local dans le navigateur. Les images ne quittent pas votre appareil.',
  },
  {
    question: 'Puis-je régler la qualité de l’image de sortie ?',
    answer:
      'Oui. Pour les formats de sortie JPG et WebP, vous pouvez régler le niveau de qualité. Des valeurs plus basses donnent des fichiers plus légers, mais avec une légère perte de qualité visible. Le PNG est enregistré sans perte.',
    answerSchemaText: 'Oui. Réglage de la qualité pour JPG et WebP. PNG est sans perte.',
  },
  {
    question: 'Que se passe-t-il si mon image est plus petite que le modèle ?',
    answer:
      'L’éditeur redimensionne l’image à la taille cible. Si l’image originale est nettement plus petite que le modèle, le résultat peut apparaître flou. Pour de meilleurs résultats, utilisez une image au moins aussi grande que le modèle.',
    answerSchemaText: 'L’image est redimensionnée. Pour une meilleure qualité, l’original doit être au moins aussi grand que le modèle.',
  },
];

export default function ImageResizePage() {
  return (
    <>
      <Script id="ld-json-image-resize-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-image-howto-fr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Éditeur d’images en ligne"
        description="Recadrez et redimensionnez vos images pour les réseaux sociaux, les sites web et les supports imprimés. Modèles prêts à l’emploi pour Instagram, Facebook et LinkedIn – ou saisissez vos propres dimensions."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp"
      />

      <Breadcrumbs second={{ href: '/fr/outils', label: 'Outils' }} third={{ href: '/fr/outils/editeur-d-images-en-ligne', label: 'Éditeur d’images' }} includeJsonLd locale="fr" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <ImageResizeTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Recadrer vos images pour chaque plateforme">
          <p className="text-mid">
            Chaque plateforme a ses propres exigences en matière d’images – Instagram privilégie les images carrées ou verticales, Facebook a des dimensions de couverture spécifiques, LinkedIn attend
            des tailles de bannière précises. L’éditeur propose des modèles prêts à l’emploi pour tous les formats courants et permet également de saisir des dimensions personnalisées.
          </p>
          <p className="text-mid mt-3">
            L’outil fonctionne entièrement dans votre navigateur – aucune image n’est envoyée à un serveur. Vous pouvez ajuster le zoom et la position du cadrage et télécharger le résultat dans trois
            formats : PNG (sans perte, avec transparence), JPG (fichier plus léger, sans transparence) et WebP (compression optimale).
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Comment utiliser l’éditeur d’images"
          description="Le recadrage ne prend que quelques secondes :"
          grid="four"
          items={[
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: '1. Importer une image',
              description: 'Glissez-déposez une image ou sélectionnez un fichier. Formats pris en charge : JPG, PNG, WebP.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: '2. Choisir le recadrage',
              description: 'Sélectionnez un modèle prêdéfini ou saisissez vos propres dimensions en pixels.',
            },
            {
              icon: <RiZoomInLine className="h-6 w-6" />,
              title: '3. Ajuster',
              description: 'Réglez le zoom et la position pour définir le cadrage souhaité.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '4. Télécharger',
              description: 'Choisissez le format de sortie (PNG, JPG, WebP) et téléchargez l’image recadrée.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Comment ajouter une image ?">
          <p className="text-mid">{"L'outil accepte les images aux formats JPG, PNG et WebP. Vous pouvez ajouter une image de deux fa\u00e7ons :"}</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Glisser-d\u00e9poser</strong> {"\u2013 prenez un fichier depuis un dossier sur votre ordinateur et d\u00e9posez-le dans la zone pr\u00e9vue (zone avec le cadre en pointill\u00e9s)."}
            </li>
            <li>
              <strong>{"S\u00e9lection depuis l'appareil"}</strong> {"\u2013 cliquez dans la zone d'ajout de fichier pour ouvrir la fen\u00eatre de s\u00e9lection."}
            </li>
          </ul>
          <p className="text-mid mt-3">{"Apr\u00e8s l'ajout, l'outil lit automatiquement les dimensions originales de l'image et affiche un aper\u00e7u. Vous pouvez maintenant passer aux param\u00e8tres de recadrage."}</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="D\u00e9finir les dimensions cibles">
          <p className="text-mid">
            {"Dans l'onglet"} <strong>Dimensions en px</strong>{", saisissez la largeur et la hauteur manuellement. L'option"} <strong>Conserver les proportions</strong> {"ajuste automatiquement la seconde dimension."}
          </p>
          <p className="text-mid mt-3">
            {"Dans l'onglet"} <strong>{"Mod\u00e8les"}</strong>{", s\u00e9lectionnez un format pr\u00e9d\u00e9fini (par ex. publication Instagram, couverture Facebook, image OG). L'outil r\u00e8gle automatiquement les dimensions en pixels."}
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Tailles d’image recommandées par plateforme"
          demo={
            <div className="overflow-x-auto">
              <table className="text-mid w-full text-left text-sm!">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-2 pr-4 font-semibold">Plateforme</th>
                    <th className="py-2 pr-4 font-semibold">Format</th>
                    <th className="py-2 font-semibold">Taille (px)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">Instagram</td>
                    <td className="py-2 pr-4">Publication (carré)</td>
                    <td className="py-2">1080 × 1080</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">Instagram</td>
                    <td className="py-2 pr-4">Story / Reels</td>
                    <td className="py-2">1080 × 1920</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">Facebook</td>
                    <td className="py-2 pr-4">Publication</td>
                    <td className="py-2">1200 × 630</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">Facebook</td>
                    <td className="py-2 pr-4">Couverture</td>
                    <td className="py-2">820 × 312</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">LinkedIn</td>
                    <td className="py-2 pr-4">Publication</td>
                    <td className="py-2">1200 × 627</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">LinkedIn</td>
                    <td className="py-2 pr-4">Bannière de profil</td>
                    <td className="py-2">1584 × 396</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Site web</td>
                    <td className="py-2 pr-4">Image OG</td>
                    <td className="py-2">1200 × 630</td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        >
          <p className="text-mid">
            Chaque plateforme affiche les images dans des proportions et tailles spécifiques. Si une image ne répond pas aux exigences, elle est automatiquement recadrée ou déformée – souvent avec des
            résultats indésirables.
          </p>
          <p className="text-mid mt-3">
            L’éditeur propose des modèles prêts à l’emploi pour toutes les plateformes courantes. Sélectionnez simplement le modèle souhaité et l’outil règle automatiquement les dimensions.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Modèles par catégorie"
          description="L’éditeur propose des modèles pour différents usages :"
          grid="three"
          items={[
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram',
              description: 'Publication (carré), portrait (4:5), story/reels (9:16). Toutes à la résolution recommandée.',
            },
            {
              icon: <RiFacebookLine className="h-6 w-6" />,
              title: 'Facebook',
              description: 'Publication (1200×630), couverture (820×312), image d’événement et plus.',
            },
            {
              icon: <RiLinkedinLine className="h-6 w-6" />,
              title: 'LinkedIn',
              description: 'Publication (1200×627), bannière de profil (1584×396), couverture de page entreprise.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Site web',
              description: 'Image OG (1200×630), bannière hero, image d’article et dimensions personnalisées.',
            },
            {
              icon: <RiArticleLine className="h-6 w-6" />,
              title: 'Blog et articles',
              description: 'Images de prévisualisation, images d’article et miniatures dans les tailles courantes.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Avatars',
              description: 'Photos de profil carrées et rondes en différentes tailles.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Comment recadrer une image">
          <p className="text-mid">
            Après avoir défini les dimensions cibles, une zone de recadrage interactive apparaît dans l’aperçu. La partie lumineuse de l’image est la section qui sera enregistrée ; le reste est
            assombri.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-dark font-semibold">Déplacer le recadrage</p>
              <p className="text-mid mt-1">Saisissez la zone lumineuse et faites-la glisser n’importe où sur l’image. Vous choisissez ainsi quelle section de la photo sera exportée.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">Redimensionner via les poignées</p>
              <p className="text-mid mt-1">
                Aux coins de la zone de recadrage se trouvent de petits carrés (poignées). Les faire glisser modifie la taille du recadrage : vous pouvez l’agrandir ou le réduire tout en conservant
                les proportions choisies.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Zoom</p>
              <p className="text-mid mt-1">
                Dans l’onglet <strong>Zoom</strong>, un curseur permet d’ajuster le zoom (100-300 %). Une valeur plus élevée signifie que le recadrage couvre une section plus petite de l’image
                originale, utile pour recadrer un détail précis.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Contrôle de position précis</p>
              <p className="text-mid mt-1">
                Dans l’onglet <strong>Position</strong>, vous pouvez définir la position exacte du recadrage en pourcentages (0-100 % pour les axes X et Y). Les boutons de centrage permettent de
                positionner rapidement le recadrage au centre de l’image.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Formes de recadrage"
          demo={
            <div className="tool-section space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  Rectangle
                </Badge>
                <Badge as="button" variant="selected" size="lg">
                  Carré
                </Badge>
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  Cercle
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Dans l’onglet <strong>Formes de recadrage</strong>, choisissez la forme de l’image exportée : rectangle (avec les proportions sélectionnées), carré (force 1:1) ou cercle (avec fond
            transparent).
          </p>
          <p className="text-mid mt-3">
            La forme cercle crée un avatar rond avec un fond transparent en dehors du cercle. L’outil bascule automatiquement le format en PNG ou WebP, car le JPG ne prend pas en charge la
            transparence.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Grille 3×3 : à quoi sert-elle ?">
          <p className="text-mid">
            Une grille divisant l’image en 9 parties égales est visible dans la zone de recadrage. C’est une visualisation de la <strong>règle des tiers</strong>, l’un des principes fondamentaux de la
            composition photographique.
          </p>
          <p className="text-mid mt-3">
            La règle stipule que les éléments les plus importants d’une photo (visage, produit, point d’intérêt) doivent être placés aux intersections des lignes de la grille ou le long de celles-ci.
            Cette composition est plus dynamique et agréable à l’œil que de placer le sujet exactement au centre.
          </p>
          <p className="text-mid mt-3">
            Dans l’onglet <strong>Couleur de grille</strong>, vous pouvez changer la couleur des lignes (vert, blanc, noir, rouge, jaune) pour que la grille soit clairement visible sur différentes
            images.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionTabs
          title="Exportation : quel format choisir ?"
          tabs={[
            {
              title: 'JPG',
              icon: <RiImageLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Le format le plus populaire pour les photos. Bonne compression tout en conservant la qualité visuelle. Ne prend pas en charge la transparence : le fond sera toujours rempli d’une
                    couleur.
                  </p>
                  <p className="text-mid">Un bon choix pour les photos de produits, portraits et la plupart des visuels de sites web. Le curseur de qualité (60-100 %) contrôle la compression.</p>
                </div>
              ),
            },
            {
              title: 'PNG',
              icon: <RiFileImageLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Format sans perte : préserve la qualité complète, mais les fichiers sont plus volumineux. Prend en charge la transparence (nécessaire pour la forme cercle).
                  </p>
                  <p className="text-mid">Un bon choix pour les visuels avec texte, icônes et images nécessitant des bords nets.</p>
                </div>
              ),
            },
            {
              title: 'WebP',
              icon: <RiCropLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Format moderne combinant les avantages du JPG et du PNG : fichiers légers, bonne qualité, prise en charge de la transparence. Compatible avec tous les navigateurs modernes.
                  </p>
                  <p className="text-mid">Recommandé pour les sites web : des fichiers plus petits signifient un chargement plus rapide.</p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Proportions d’image : que signifient-elles ?"
          description="Le rapport d’aspect est la relation entre la largeur et la hauteur d’une image. Il s’écrit sous forme de deux nombres séparés par deux-points :"
          grid="two"
          items={[
            { icon: <RiLayoutGridLine className="h-6 w-6" />, title: '1:1 (carré)', description: 'La largeur est égale à la hauteur. Publication carrée Instagram, photos de profil, icônes.' },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: '4:5 (vertical)',
              description: 'Format légèrement vertical. Publication verticale Instagram : occupe plus d’espace dans le feed qu’un carré.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: '3:2 (classique)',
              description: 'Proportions traditionnelles de la photographie argentique. De nombreux appareils numériques utilisent également ce format.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: '16:9 (panoramique)',
              description: 'Format standard de la vidéo HD, des présentations et des moniteurs. YouTube, vidéo Facebook, bannières de sites web.',
            },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: '9:16 (vertical plein écran)',
              description: '16:9 inversé : format vertical qui remplit tout l’écran du téléphone. Instagram Stories, TikTok, YouTube Shorts.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/fr/outils/editeur-d-images-en-ligne')}
          title="Questions fréquentes sur l'éditeur d'images"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: "Pourquoi le format JPG n'est-il pas disponible avec la forme cercle ?",
              answer:
                "Le format JPG ne prend pas en charge la transparence. La forme cercle n\u00e9cessite un fond transparent en dehors du cercle, c'est pourquoi l'outil limite automatiquement le choix \u00e0 PNG ou WebP \u2013 des formats avec canal alpha.",
              answerSchemaText: 'JPG ne prend pas en charge la transparence. La forme cercle n\u00e9cessite PNG ou WebP.',
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
