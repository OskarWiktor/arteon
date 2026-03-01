/**
 * Expand thin "Why convert X to Y?" sectionBasic in FR converter files.
 * Same approach as DE: 4 rich paragraphs (source desc, target value, pair detail, privacy).
 */
const fs = require('fs');
const path = require('path');

const FR_TOOLS = path.join(__dirname, '..', 'data', 'fr', 'tools');

const SOURCE = {
  png: "Le Portable Network Graphics (PNG) est un format d'image sans perte qui prend en charge des millions de couleurs et la transparence alpha complète. Le PNG est particulièrement adapté aux logos, icônes, captures d'écran et graphiques comportant des bords nets ou du texte – partout où chaque pixel compte.",
  jpg: "Le JPEG (JPG) est le format d'image le plus répandu au monde pour les photographies numériques. Il utilise une compression avec pertes pour obtenir des fichiers compacts, mais ne prend en charge ni la transparence ni le stockage sans perte.",
  heic: "Le High Efficiency Image Container (HEIC) est le format par défaut des photos sur les appareils Apple depuis iOS 11. Le HEIC offre des fichiers plus légers que le JPEG à qualité comparable, mais n'est pas pris en charge nativement en dehors de l'écosystème Apple – ni sous Windows, ni sous Android, ni sur de nombreuses plateformes web.",
  webp: "Le WebP est un format d'image moderne développé par Google, prenant en charge à la fois la compression avec et sans perte. Il produit des fichiers nettement plus légers que le PNG et le JPEG à qualité visuelle comparable, et est supporté par tous les navigateurs actuels.",
  svg: 'Le Scalable Vector Graphics (SVG) est un format vectoriel basé sur XML pour les graphiques bidimensionnels. Les fichiers SVG sont indépendants de la résolution et restent nets à toute taille – idéal pour les logos, icônes et illustrations.',
  gif: 'Le Graphics Interchange Format (GIF) prend en charge les animations et une palette de 256 couleurs maximum. Le GIF est largement utilisé pour les contenus animés sur les réseaux sociaux et les messageries, mais ne convient pas aux images photoréalistes en raison de sa limitation de couleurs.',
  bmp: "Le Bitmap (BMP) est un ancien format d'image Windows qui stocke les données de pixels sans compression. Les fichiers BMP sont donc extrêmement volumineux et inadaptés à une utilisation moderne sur le web, par e-mail ou sur les appareils mobiles.",
  tiff: "Le Tagged Image File Format (TIFF) est le standard de l'industrie pour la photographie professionnelle, l'impression et l'archivage. Le TIFF stocke les images sans perte avec une profondeur de couleur complète, des calques et des métadonnées – mais nécessite des fichiers proportionnellement volumineux.",
  avif: "L'AV1 Image File Format (AVIF) est un format d'image de nouvelle génération basé sur le codec vidéo AV1. L'AVIF offre actuellement la meilleure compression disponible – des fichiers jusqu'à 50% plus légers que le WebP à qualité visuelle comparable.",
};

const TARGET = {
  webp: 'Le WebP réduit la taille des fichiers de 30 à 35% par rapport aux formats anciens, sans perte de qualité visible. Tous les navigateurs modernes (Chrome, Firefox, Safari 14+, Edge) prennent entièrement en charge le WebP. Pour les sites web, cela signifie des temps de chargement plus rapides, de meilleurs Core Web Vitals et un meilleur classement Google.',
  avif: "L'AVIF offre la compression la plus efficace de tous les formats d'image actuels, réduisant la taille des fichiers jusqu'à 50% par rapport au JPEG. Chrome, Firefox et Safari 16+ prennent en charge l'AVIF. C'est le choix optimal pour les projets web critiques en termes de performance et l'utilisation mobile.",
  jpg: "Le JPEG est le format d'image le plus universel – compatible avec tous les appareils, navigateurs et plateformes. La conversion en JPG garantit que vos images peuvent être affichées partout sans problème : des pièces jointes d'e-mails aux publications sur les réseaux sociaux en passant par les services d'impression.",
  png: "Le PNG préserve la qualité d'image complète sans artefacts de compression et prend en charge la transparence alpha complète. Ce format sans perte est idéal pour les graphiques destinés à être retravaillés et pour les images dont les zones transparentes doivent être conservées.",
  gif: "Le GIF est le format standard pour les animations courtes, les mèmes et les graphiques simples avec une palette de couleurs limitée. Avec une prise en charge universelle par les navigateurs, le GIF convient particulièrement aux contenus animés sur les réseaux sociaux, les messageries et les signatures d'e-mails.",
  tiff: "Le TIFF préserve la qualité d'image complète sans aucune perte de données et prend en charge les calques ainsi que des métadonnées étendues. Standard de l'industrie pour l'impression et l'archivage, le TIFF convient aux photographes professionnels, aux imprimeurs et à tous ceux qui souhaitent conserver des images en qualité maximale.",
};

const PAIR = {
  'png-to-webp':
    "Le WebP prend en charge la transparence alpha exactement comme le PNG – toutes les zones transparentes de votre image sont intégralement préservées. Vous pouvez choisir entre compression avec et sans perte pour trouver l'équilibre optimal entre taille de fichier et qualité d'image.",
  'png-to-jpg':
    "Lors de la conversion de PNG en JPG, la transparence est perdue – les zones transparentes sont remplies avec une couleur d'arrière-plan (blanc par défaut). En contrepartie, vous obtenez des fichiers nettement plus légers, mieux adaptés aux photos et contenus web ne nécessitant pas de transparence.",
  'png-to-avif':
    "L'AVIF offre une compression encore meilleure que le WebP et peut réduire la taille de vos images PNG de 50%. La transparence alpha est entièrement prise en charge. Notez que les navigateurs plus anciens peuvent ne pas encore prendre en charge l'AVIF.",
  'png-to-gif':
    'La conversion réduit la palette de couleurs à 256 couleurs maximum. Le résultat convient aux graphiques simples, icônes et logos, mais est moins adapté aux images photoréalistes. La transparence est prise en charge, mais uniquement en mode binaire (visible ou invisible), pas de manière progressive.',
  'png-to-tiff':
    "La conversion préserve la qualité d'image complète et la transparence du PNG original au format TIFF. Le TIFF est particulièrement adapté au traitement ultérieur dans des logiciels comme Photoshop ou à l'impression professionnelle. Notez que les fichiers TIFF sont nettement plus volumineux que les PNG.",
  'jpg-to-webp':
    "Le WebP peut réduire la taille de vos photos JPEG de 25 à 35% sans perte de qualité visible. Puisque le JPEG ne prend pas en charge la transparence, aucune information d'image n'est perdue lors de cette conversion.",
  'jpg-to-png':
    "La conversion de JPG en PNG transforme votre image en format sans perte. Cependant, les détails déjà perdus par la compression JPEG ne peuvent pas être restaurés. Le PNG convient si vous souhaitez retravailler l'image sans risquer de pertes de qualité supplémentaires.",
  'jpg-to-avif':
    "L'AVIF atteint une compression jusqu'à 50% meilleure que le JPEG à qualité visuelle comparable. Ce format de nouvelle génération est idéal pour les sites web critiques en performance et est pris en charge par Chrome, Firefox et Safari 16+.",
  'jpg-to-gif':
    'La palette de couleurs est réduite à 256, ce qui entraîne des pertes de qualité visibles sur les photos. Cette conversion convient principalement aux graphiques simples ou lorsque le format GIF est requis pour des raisons de compatibilité.',
  'jpg-to-tiff':
    'La conversion préserve la qualité actuelle de votre JPEG et la stocke sans perte au format TIFF. Les détails déjà perdus par la compression JPEG ne peuvent pas être restaurés, mais le TIFF permet un traitement ultérieur sans perte de qualité supplémentaire.',
  'heic-to-jpg':
    "La conversion de HEIC en JPG transforme le format propriétaire Apple en format JPEG universellement compatible. La transparence éventuelle et les informations HDR sont perdues, mais la qualité d'image reste quasi identique à l'original avec des réglages à partir de 85%.",
  'heic-to-png':
    "La conversion préserve la qualité d'image complète de votre original HEIC sans perte au format PNG. Le PNG est pris en charge par tous les appareils et plateformes et convient particulièrement si vous souhaitez retravailler l'image ou conserver la transparence.",
  'heic-to-webp':
    'Le WebP offre un excellent équilibre entre taille de fichier et qualité. La conversion de HEIC en WebP produit des fichiers compacts pris en charge par tous les navigateurs modernes – idéal pour les sites web et les plateformes en ligne.',
  'heic-to-avif':
    "L'AVIF offre une efficacité de compression similaire au HEIC, mais en tant que format ouvert, il est nettement plus largement supporté. La conversion permet d'utiliser une compression moderne sans les restrictions de l'écosystème Apple.",
  'heic-to-tiff':
    'La conversion transforme vos photos iPhone au format TIFF professionnel. Idéal pour les photographes souhaitant archiver leurs prises de vue mobiles dans un format sans perte et les retravailler dans des logiciels professionnels comme Photoshop ou Lightroom.',
  'webp-to-jpg':
    "La conversion de WebP en JPEG assure une compatibilité maximale. Le JPG est pris en charge par tous les appareils et logiciels – indispensable pour envoyer des images par e-mail ou les publier sur des plateformes qui n'acceptent pas le WebP.",
  'webp-to-png':
    'La conversion de WebP en PNG préserve la transparence de votre image et la stocke sans perte. Le PNG convient particulièrement au traitement ultérieur dans les logiciels graphiques et pour les plateformes ne prenant pas en charge le format WebP.',
  'webp-to-avif':
    "L'AVIF offre une compression encore meilleure que le WebP à qualité visuelle comparable. Si vous souhaitez optimiser vos images pour les standards web de nouvelle génération, la conversion de WebP en AVIF est une étape judicieuse.",
  'webp-to-gif':
    'La conversion réduit la palette de couleurs à 256. Elle convient principalement aux graphiques simples ou lorsque le format GIF est nécessaire pour les animations ou des raisons de compatibilité.',
  'webp-to-tiff':
    "La conversion transforme vos fichiers WebP au format TIFF professionnel. Idéal pour la production d'impression et l'archivage à long terme, où la qualité sans perte et la prise en charge complète des métadonnées sont requises.",
  'svg-to-jpg':
    "La rastérisation de SVG en JPG convertit l'image vectorielle évolutive en image pixelisée à résolution fixe. Les zones transparentes sont remplies avec une couleur d'arrière-plan. Le résultat convient aux plateformes et applications qui n'acceptent pas le SVG.",
  'svg-to-png':
    "La rastérisation de SVG en PNG convertit l'image vectorielle en image pixelisée en préservant intégralement la transparence. Le PNG convient particulièrement aux réseaux sociaux, messageries et signatures d'e-mails qui ne prennent pas en charge le SVG.",
  'svg-to-webp':
    'La conversion produit des images pixelisées compactes à partir de vos graphiques vectoriels au format WebP moderne. Le WebP est idéal pour les sites web où des fichiers légers et des temps de chargement rapides sont déterminants.',
  'svg-to-avif':
    "L'AVIF offre la meilleure compression pour la rastérisation de vos fichiers SVG. Idéal pour les sites web critiques en performance où chaque kilo-octet contribue à de meilleurs temps de chargement et Core Web Vitals.",
  'svg-to-gif':
    'La conversion transforme votre image vectorielle en image pixelisée avec 256 couleurs maximum. Le GIF convient aux icônes simples et graphiques animés, mais pas aux illustrations complexes comportant de nombreuses couleurs ou dégradés.',
  'svg-to-tiff':
    "La rastérisation de SVG en TIFF produit une image pixelisée sans perte en qualité maximale. Idéal pour l'impression professionnelle de graphiques vectoriels lorsqu'une résolution fixe en pixels est nécessaire.",
  'gif-to-jpg':
    "Lors de la conversion de GIF en JPG, les frames d'animation et la transparence sont perdus – seule la première image est convertie. En contrepartie, vous obtenez un format photo universellement compatible avec une profondeur de couleur complète (16,7 millions de couleurs).",
  'gif-to-png':
    "La conversion préserve la qualité d'image sans perte et prend en charge la transparence binaire. Pour les GIF animés, seul le premier frame est converti. Le PNG convient particulièrement au retraitement de graphiques GIF.",
  'gif-to-webp':
    'Le WebP prend en charge aussi bien les images fixes que les animations, avec une compression nettement meilleure que le GIF. Pour les GIF statiques, la conversion produit des fichiers plus légers à qualité visuelle égale ou supérieure.',
  'gif-to-avif':
    "L'AVIF offre une compression supérieure au GIF et prend en charge des millions de couleurs au lieu de seulement 256. Idéal pour moderniser les anciens graphiques GIF sur les sites web pour de meilleurs temps de chargement.",
  'tiff-to-jpg':
    "La conversion réduit les fichiers TIFF souvent très volumineux à des tailles JPEG compactes. La transparence éventuelle et les informations de calques sont perdues, mais vous obtenez des fichiers universellement compatibles pour le web, l'e-mail et les réseaux sociaux.",
  'tiff-to-png':
    "La conversion préserve la qualité d'image sans perte et conserve la transparence si elle est présente. Les fichiers PNG sont nettement plus légers que les TIFF et sont pris en charge par tous les appareils, navigateurs et plateformes.",
  'tiff-to-webp':
    'Le WebP réduit drastiquement la taille de vos fichiers TIFF – souvent de plus de 90%. Idéal pour optimiser des photos professionnelles ou des scans haute résolution pour une utilisation sur le web.',
  'tiff-to-avif':
    "L'AVIF offre la compression la plus efficace pour la conversion de gros fichiers TIFF. Idéal pour l'optimisation web de la photographie professionnelle et des scans haute résolution avec une perte de qualité minimale.",
  'bmp-to-jpg':
    'Les fichiers BMP sont non compressés et donc extrêmement volumineux. La conversion en JPEG réduit drastiquement la taille (souvent de plus de 95%) et produit des fichiers universellement compatibles pour tous les usages modernes.',
  'bmp-to-png':
    "La conversion de BMP en PNG réduit considérablement la taille grâce à la compression sans perte. Contrairement au JPEG, la qualité d'image complète est préservée – idéal pour les graphiques avec des bords nets et du texte.",
  'bmp-to-webp':
    'Le WebP réduit les tailles BMP énormes de 97% avec une bonne qualité visuelle. La conversion modernise vos images legacy pour une utilisation sur les sites web et dans les applications modernes.',
  'bmp-to-avif':
    "L'AVIF offre la meilleure compression pour la modernisation de fichiers BMP non compressés. La taille est réduite de 98% – idéal pour la migration d'anciens stocks d'images vers des formats modernes.",
  'bmp-to-gif':
    "La conversion réduit la palette de couleurs à 256 et compresse considérablement le fichier. Adapté aux graphiques simples issus d'anciens systèmes, mais pour les images BMP photoréalistes, le JPG ou le WebP est recommandé.",
  'bmp-to-tiff':
    "La conversion de BMP en TIFF préserve la qualité d'image complète et ajoute la prise en charge professionnelle des métadonnées. Le TIFF convient mieux que le BMP à l'archivage à long terme et aux workflows d'impression professionnels.",
  'avif-to-jpg':
    "La conversion d'AVIF en JPEG assure une compatibilité maximale. Le JPG est pris en charge par tous les appareils et logiciels – nécessaire lorsque les destinataires ou plateformes ne prennent pas encore en charge le format AVIF plus récent.",
  'avif-to-png':
    "La conversion préserve la qualité d'image sans perte au format PNG universellement supporté. Le PNG convient particulièrement si vous souhaitez conserver la transparence ou retravailler l'image dans des logiciels graphiques.",
  'avif-to-webp':
    "Le WebP offre une prise en charge navigateur plus large que l'AVIF avec une bonne compression. La conversion est pertinente lorsque votre plateforme cible prend en charge le WebP mais pas encore l'AVIF – un scénario fréquent avec les navigateurs et CMS plus anciens.",
};

const PRIVACY =
  'Ce convertisseur fonctionne entièrement en local dans votre navigateur – vos fichiers ne quittent jamais votre appareil. Aucun téléversement, aucun serveur, aucune inscription. Entièrement conforme au RGPD et gratuit sans aucune limitation.';

function extractFormats(filename) {
  const m = filename.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { source: m[1], target: m[2], key: `${m[1]}-to-${m[2]}` } : null;
}

let updated = 0,
  skipped = 0;
const files = fs.readdirSync(FR_TOOLS).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));

for (const file of files) {
  const fmt = extractFormats(file);
  if (!fmt) {
    skipped++;
    continue;
  }
  const s = SOURCE[fmt.source],
    t = TARGET[fmt.target],
    p = PAIR[fmt.key];
  if (!s || !t || !p) {
    console.log(`SKIP: ${file}`);
    skipped++;
    continue;
  }

  const filePath = path.join(FR_TOOLS, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const block = data.contentBlocks.find((b) => b.type === 'sectionBasic');
  if (!block) {
    skipped++;
    continue;
  }

  block.html = `<p class="text-mid mb-4">${s}</p>` + `<p class="text-mid mb-4">${t}</p>` + `<p class="text-mid mb-4">${p}</p>` + `<p class="text-mid">${PRIVACY}</p>`;

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`FR: Updated: ${updated}, Skipped: ${skipped}`);
