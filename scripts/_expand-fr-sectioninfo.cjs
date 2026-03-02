/**
 * Differentiate "in practice" sectionInfo in FR converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'fr', 'tools');

const P = {
  'png-to-webp': [
    "Les webdesigners et e-commerçants en France utilisent le PNG pour les logos, détourages de produits et éléments d'interface avec transparence. Le passage au WebP conserve intégralement la transparence tout en réduisant la taille de 25 à 35% – un gain direct pour les temps de chargement.",
    'Les graphiques avec de grandes zones unies (logos, icônes) bénéficient le plus : des fichiers de 200–500 Ko passent souvent sous 100 Ko. Pour les détourages sur Amazon.fr, Cdiscount ou les boutiques Shopify, cela signifie des pages catégories plus rapides.',
    "Le traitement s'effectue entièrement en local dans votre navigateur – idéal pour les agences soumises au RGPD. Les images clients ne quittent jamais votre appareil.",
  ],
  'png-to-jpg': [
    "Les fichiers PNG avec transparence pèsent souvent plusieurs mégaoctets. Lorsque la transparence n'est pas nécessaire – photos de CV, scans ou réseaux sociaux – la conversion en JPG réduit drastiquement la taille.",
    "De nombreuses plateformes comme Pôle emploi, Indeed ou les portails de candidature n'acceptent que le JPG. Une capture PNG de 3 Mo ne pèse plus que 200–400 Ko en JPG. Le réglage de qualité à 85% offre le meilleur compromis.",
    'Pour les documents de candidature et pièces confidentielles, le traitement local est essentiel – vos fichiers ne quittent jamais votre appareil. Conforme au RGPD.',
  ],
  'png-to-avif': [
    "L'AVIF est le format le plus efficace de la génération actuelle et peut réduire les fichiers PNG jusqu'à 50%. Pour les projets web où chaque kilooctet compte, PNG vers AVIF est optimal.",
    "L'AVIF supporte la transparence, le HDR et jusqu'à 12 bits par canal. Chrome, Firefox et Safari 16+ le supportent nativement. Un fallback via <code>&lt;picture&gt;</code> avec PNG ou WebP couvre les anciens navigateurs.",
    "Les entreprises françaises optimisant leurs scores PageSpeed en bénéficient : l'AVIF améliore mesurément le LCP. Le traitement local garantit la conformité RGPD.",
  ],
  'png-to-gif': [
    'Les graphiques simples (icônes, logos, diagrammes) avec palette limitée se stockent plus compactement en GIF. La conversion est utile lorsque le format GIF est imposé par la plateforme.',
    "Le GIF ne supporte que 256 couleurs. Les images photoréalistes perdent en qualité. La transparence n'est supportée qu'en binaire (visible/invisible), pas en alpha progressif.",
    "Pour les présentations, newsletters ou systèmes n'acceptant que le GIF, cette conversion est une solution rapide – entièrement locale et sans téléversement.",
  ],
  'png-to-tiff': [
    "Les imprimeurs et systèmes d'archivage exigent souvent le TIFF. La conversion préserve la pleine qualité et transparence, et ajoute le support professionnel des métadonnées.",
    "Les fichiers TIFF sont plus volumineux mais offrent des avantages professionnels : calques Photoshop, CMJN pour l'impression et métadonnées complètes. Le TIFF est le standard pour l'archivage à long terme.",
    'Les imprimeurs en France, Belgique et Suisse travaillent fréquemment avec le TIFF. La conversion locale permet de traiter des maquettes confidentielles sans envoi cloud.',
  ],
  'jpg-to-webp': [
    'Le JPEG est le standard pour les photos, mais pour les sites web les tailles sont souvent trop élevées. Le WebP comprime les JPEG de 25–35% supplémentaires sans perte visible, améliorant directement les Core Web Vitals.',
    'Pour les boutiques PrestaShop, Shopify ou WooCommerce, le passage au WebP accélère les pages produits. Google PageSpeed recommande le WebP comme format nouvelle génération. À 80–85%, la différence est imperceptible.',
    'En France, où les exigences RGPD sont strictes, le traitement local est précieux. Les photos de produits ne quittent pas votre appareil.',
  ],
  'jpg-to-png': [
    'Parfois un JPEG doit être converti en format supportant la transparence ou le stockage sans perte – pour la retouche dans Photoshop, Figma ou Canva.',
    "La conversion ne restaure pas les détails perdus par la compression JPEG, mais empêche toute perte supplémentaire. Le PNG est adapté quand l'image sert de base pour des collages ou mises en page.",
    "Pour les graphistes en France, le traitement local est idéal : le matériel client reste sur votre machine sans qu'un service externe n'y accède.",
  ],
  'jpg-to-avif': [
    "L'AVIF atteint jusqu'à 50% de meilleure compression que le JPEG à qualité comparable. Pour les sites avec beaucoup de photos – immobilier, magazines, voyage – les temps de chargement sont considérablement réduits.",
    "Des plateformes comme SeLoger, Booking.com ou Vinted adoptent l'AVIF pour l'expérience mobile. Chrome, Firefox et Safari 16+ le supportent. Un fallback WebP/JPG couvre les anciens navigateurs.",
    "La conversion locale protège vos images : photos immobilières, produits ou portraits – rien n'est téléversé. Conforme au RGPD.",
  ],
  'jpg-to-gif': [
    'La conversion JPG vers GIF est utile quand une photo est nécessaire comme graphique simple – vignette dans des systèmes anciens ou newsletters ne supportant que le GIF.',
    'Le GIF limite la palette à 256 couleurs, causant une perte visible sur les photos par tramage. Pour la plupart des usages, WebP ou PNG sont meilleurs.',
    'Si votre workflow exige le GIF, la conversion locale offre une solution rapide et conforme à la protection des données.',
  ],
  'jpg-to-tiff': [
    'Les imprimeries et agences photo exigent souvent le TIFF. La conversion préserve la qualité actuelle et la stocke sans perte pour un traitement ultérieur.',
    'Les détails perdus par la compression JPEG ne sont pas restaurés, mais le TIFF empêche toute perte supplémentaire. CMJN, calques et métadonnées étendues sont supportés.',
    "Les photographes en France bénéficient du traitement local : photos clients et fichiers d'impression restent sur votre appareil.",
  ],
  'heic-to-jpg': [
    "Les utilisateurs d'iPhone connaissent le problème : les photos HEIC ne s'ouvrent pas partout. Windows, Android, formulaires web et clients e-mail ne supportent souvent pas le HEIC. La conversion en JPG résout ce problème.",
    'À 85–90% de qualité, la différence HEIC/JPG est quasi imperceptible. La taille reste comparable. Particulièrement pratique : convertir plusieurs photos iPhone simultanément.',
    "Pour les photos de CV, scans de pièces d'identité ou documents personnels, le traitement local est essentiel – les données sensibles ne quittent jamais votre appareil.",
  ],
  'heic-to-png': [
    "Pour réutiliser des photos iPhone sans perte – bases Photoshop, Figma ou projets d'impression – le PNG est idéal. La conversion préserve la pleine qualité de l'original HEIC.",
    "Le PNG supporte la transparence et le stockage sans perte. Les fichiers sont plus volumineux que HEIC/JPG. Pour la retouche, ce n'est pas un inconvénient – pour le web, une conversion en WebP est recommandée ensuite.",
    'Les agences créatives bénéficient du traitement local : les photos iPhone de clients restent confidentielles sur votre machine.',
  ],
  'heic-to-webp': [
    'Photos iPhone HEIC directement pour les sites web ? Le WebP est le pont idéal : compression efficace comme HEIC avec compatibilité universelle (Chrome, Firefox, Safari 14+, Edge).',
    "HEIC et WebP utilisent des algorithmes modernes similaires – taille compacte, haute qualité. Pour blogs, boutiques et portfolios, c'est le moyen le plus rapide de publier des photos iPhone optimisées.",
    'Blogueurs et e-commerçants en France peuvent convertir leurs photos iPhone localement et en conformité RGPD – sans cloud ni outils externes.',
  ],
  'heic-to-avif': [
    "L'AVIF offre une efficacité similaire au HEIC, mais en format ouvert sans dépendance Apple. HEIC vers AVIF permet la compression la plus moderne avec un large support multi-plateformes.",
    "Chrome, Firefox et Safari 16+ supportent l'AVIF. Pour les projets critiques en performance – galeries, portfolios, immobilier – l'AVIF offre le meilleur rapport taille/qualité.",
    'La conversion locale est pertinente pour les photographes : shootings iPhone directement convertis dans le format web le plus efficace – sans cloud.',
  ],
  'heic-to-tiff': [
    "Les photographes professionnels utilisant l'iPhone ont souvent besoin du TIFF pour Lightroom, Capture One ou Photoshop. HEIC vers TIFF préserve la pleine qualité dans un format standard.",
    "Le TIFF supporte 16 bits, calques et métadonnées EXIF/IPTC étendues. Pour l'impression, l'archivage et la retouche, le TIFF est privilégié. Les fichiers sont cependant bien plus volumineux.",
    'En France, où imprimeurs et agences photo exigent le TIFF, la conversion locale offre un workflow sécurisé pour les shootings confidentiels.',
  ],
  'webp-to-jpg': [
    "Le WebP est optimal pour le web, mais services d'impression, Microsoft Office, logiciels anciens et certains réseaux sociaux exigent le JPG.",
    "WebP vers JPG assure la compatibilité maximale. À 85–90%, la qualité reste quasi identique. Pratique pour l'envoi d'images par e-mail à des destinataires ne pouvant pas ouvrir le WebP.",
    'Pour les agences devant livrer en formats universels, la conversion locale est idéale – rapide, sûre et conforme au RGPD.',
  ],
  'webp-to-png': [
    "Les images WebP avec transparence doivent parfois être converties en PNG – pour les logiciels graphiques sans support WebP ou les fichiers d'impression nécessitant une qualité sans perte.",
    'La conversion préserve intégralement transparence et qualité. Les PNG sont plus volumineux mais mieux adaptés à Photoshop, Illustrator, InDesign et aux plateformes sans support WebP.',
    "Les graphistes en France peuvent convertir localement des assets WebP en PNG prêts pour l'impression – sans cloud et en conformité RGPD.",
  ],
  'webp-to-avif': [
    "L'AVIF offre une compression encore meilleure que le WebP – l'étape logique suivante pour les sites optimisant leurs temps de chargement.",
    "À qualité comparable, les fichiers AVIF sont 20–30% plus petits que WebP. Pour les sites avec des centaines d'images, l'économie est considérable. Un fallback WebP via <code>&lt;picture&gt;</code> couvre les anciens navigateurs.",
    "Les e-commerçants français optimisant les Core Web Vitals bénéficient particulièrement de l'AVIF. La conversion locale évite l'envoi vers le cloud.",
  ],
  'webp-to-gif': [
    "Le GIF est parfois nécessaire – systèmes anciens, outils de newsletter ou plateformes n'acceptant que le GIF. WebP vers GIF est alors la solution la plus rapide.",
    'Le GIF ne supporte que 256 couleurs. Les images photoréalistes perdent en qualité. La conversion convient surtout aux graphiques simples, icônes ou logos.',
    'Le traitement local offre une alternative rapide et sécurisée aux services de conversion en ligne.',
  ],
  'webp-to-tiff': [
    "Les workflows d'impression professionnels exigent souvent le TIFF. WebP vers TIFF permet de préparer des images web-optimisées pour l'impression.",
    "Le TIFF stocke sans perte avec support complet des métadonnées. Les détails perdus par la compression WebP ne sont pas restaurés – pour la meilleure qualité, partir de l'original.",
    "Pour les agences et imprimeurs en France, la conversion locale offre un moyen sûr de préparer des assets web pour l'impression.",
  ],
  'svg-to-jpg': [
    "Les SVG ne sont pas acceptés partout : réseaux sociaux, places de marché et CMS n'acceptent souvent que les formats raster. La conversion en JPG crée des fichiers universellement compatibles.",
    'La rastérisation convertit le vecteur en pixels à résolution fixe. Les zones transparentes sont remplies (blanc par défaut). Pour le web, 1200–2000px de large est recommandé.',
    'Pour les publications sociales et annonces sur Leboncoin, Vinted ou Amazon.fr, SVG vers JPG est une exigence courante.',
  ],
  'svg-to-png': [
    'Les SVG sont souvent convertis en PNG pour les réseaux sociaux, messageries et signatures e-mail – préservant la transparence avec large compatibilité.',
    'La rastérisation en PNG préserve les zones transparentes – idéal pour logos sur différents fonds. Excellent aussi pour les captures de documentation et présentations.',
    'Pour les agences livrant des logos dans différents formats, SVG vers PNG est un workflow rapide et conforme aux données.',
  ],
  'svg-to-webp': [
    'Pour les sites ne pouvant intégrer le SVG – CMS avec support limité – le WebP offre une représentation pixel compacte avec taille minimale.',
    "Les WebP issus de SVG sont très légers (5–30 Ko) et se chargent instantanément. Pour icônes et logos sur les sites, c'est la solution pragmatique quand le SVG direct est impossible.",
    "WordPress, PrestaShop et de nombreux CMS en France supportent le WebP nativement – permettant l'utilisation de vecteurs même dans ces environnements.",
  ],
  'svg-to-avif': [
    "L'AVIF offre la meilleure compression pour les vecteurs rastérisés. Pour les sites critiques en performance, SVG vers AVIF est le choix optimal quand le SVG direct est impossible.",
    'Les AVIF issus de SVG sont extrêmement compacts (3–15 Ko). Chaque kilooctet compte pour les Core Web Vitals : temps de chargement plus rapides améliorent le LCP et le classement Google.',
    "Les développeurs web et spécialistes SEO en France utilisent de plus en plus l'AVIF – la conversion locale simplifie la transition.",
  ],
  'svg-to-gif': [
    'Le GIF est parfois nécessaire pour les icônes dans les systèmes anciens, templates e-mail ou forums. SVG vers GIF crée des fichiers compatibles et légers.',
    "Le GIF limite à 256 couleurs. Pour les logos monochromes c'est suffisant ; pour les illustrations complexes avec dégradés, non. Transparence uniquement binaire.",
    "Pour les templates newsletters et plateformes anciennes n'acceptant que le GIF, c'est une solution locale rapide.",
  ],
  'svg-to-tiff': [
    "Les imprimeries nécessitent souvent des images TIFF plutôt que des vecteurs. SVG vers TIFF crée des fichiers haute résolution sans perte pour l'impression professionnelle.",
    'Le TIFF stocke en qualité maximale avec pleine profondeur de couleur et métadonnées. Pour cartes de visite, flyers et affiches, 300 DPI minimum est recommandé.',
    'Les imprimeurs en France, Belgique et Suisse acceptent le TIFF comme standard. La conversion locale protège maquettes et logos confidentiels.',
  ],
  'gif-to-jpg': [
    "Les anciennes images GIF doivent parfois être converties en JPG – plateformes n'acceptant que le JPEG ou optimisation pour l'e-mail. Seule la première image d'un GIF animé est convertie.",
    'Le JPG offre 16,7 millions de couleurs au lieu de 256. Les photos sauvegardées accidentellement en GIF profitent de la pleine profondeur de couleur.',
    "Pour l'archivage d'anciens graphiques dans un format moderne et universel, la conversion locale est rapide et conforme aux données.",
  ],
  'gif-to-png': [
    'Convertir du GIF en PNG est pertinent pour le stockage sans perte ou la retouche dans des logiciels graphiques. Le PNG supporte les couleurs 32 bits et la transparence alpha progressive.',
    'Pour les GIF animés, seule la première image est convertie. La qualité est préservée sans perte. Le PNG est adapté comme format intermédiaire pour Photoshop, Figma ou Canva.',
    "Pour la mise à jour d'anciens graphiques web, la conversion locale offre une solution rapide et sécurisée sans services externes.",
  ],
  'gif-to-webp': [
    'Le WebP offre une compression bien meilleure que le GIF. La modernisation des GIF en WebP accélère perceptiblement les sites web.',
    'Les GIF statiques deviennent 30–60% plus petits en WebP avec des millions de couleurs au lieu de 256, améliorant nettement la qualité visuelle à taille égale ou inférieure.',
    "Pour l'optimisation d'anciens sites en France, le passage GIF vers WebP est un moyen simple d'améliorer les Core Web Vitals.",
  ],
  'gif-to-avif': [
    "L'AVIF surpasse le GIF : meilleure compression, millions de couleurs, animation moderne. Pour moderniser d'anciens contenus web, GIF vers AVIF est le plus efficace.",
    "Les AVIF issus de GIF sont drastiquement plus petits et visuellement meilleurs. Les anciens navigateurs ne supportent pas encore l'AVIF – un fallback via <code>&lt;picture&gt;</code> est recommandé.",
    'Pour maximiser les temps de chargement, le passage GIF vers AVIF offre le plus grand gain individuel de tous les changements de format.',
  ],
  'tiff-to-jpg': [
    'Les fichiers TIFF de photographie ou scanners pèsent souvent 20–100 Mo. La conversion en JPG crée des fichiers compacts pour web, e-mail et réseaux sociaux – réduction typique de plus de 95%.',
    "Transparence et calques sont perdus. Pour la photographie pure, c'est acceptable. À 85–90%, la qualité reste excellente tandis que la taille descend à quelques centaines de Ko.",
    "Les photographes en France peuvent convertir leurs TIFF localement et en conformité RGPD en JPG prêts à l'envoi – idéal pour présentations et galeries.",
  ],
  'tiff-to-png': [
    'Quand les fichiers TIFF sont nécessaires pour la retouche ou des sites avec transparence, le PNG est adapté – sans perte et universellement compatible.',
    'Le PNG préserve la pleine qualité et transparence du TIFF. Les fichiers sont plus petits que TIFF mais plus gros que JPEG/WebP. Pour Figma, Canva ou Photoshop, le PNG est idéal.',
    "Pour préparer des sorties scanner et images d'archives pour l'usage en ligne, la conversion locale offre un workflow sûr et rapide.",
  ],
  'tiff-to-webp': [
    "TIFF vers WebP offre la plus grande réduction : des fichiers de 20–100 Mo passent souvent à 200 Ko – 2 Mo. Pour publier des photos professionnelles sur le web, c'est le plus efficace.",
    'À 80–85%, le WebP maintient une excellente qualité visuelle. Pour galeries, portfolios et magazines en ligne : qualité professionnelle à une fraction de la taille originale.',
    'Les photographes et agences en France peuvent convertir des shootings haute résolution en formats web-optimisés localement – sans cloud, conforme au RGPD.',
  ],
  'tiff-to-avif': [
    "L'AVIF offre la compression la plus efficace pour les grands fichiers TIFF. Photos et scans haute résolution sont réduits drastiquement avec un minimum de perte de qualité.",
    "Pour galeries et portfolios web recherchant les meilleurs temps de chargement, TIFF vers AVIF est le workflow optimal. Chrome, Firefox et Safari 16+ supportent l'AVIF ; fallback WebP pour les anciens navigateurs.",
    'Les photographes et agences photo en France bénéficient du traitement local : photos clients haute résolution optimisées de manière sûre et conforme au RGPD.',
  ],
  'bmp-to-jpg': [
    "Les fichiers BMP proviennent souvent d'anciennes applications Windows ou scanners. Non comprimés et très volumineux, la conversion en JPG réduit la taille de plus de 95%.",
    "Un BMP de 10 Mo devient typiquement 200–400 Ko en JPG. Pour l'e-mail, la documentation et l'archivage, c'est le moyen le plus simple d'économiser de l'espace et d'assurer la compatibilité.",
    "Pour la migration d'archives d'images et la préparation de sorties scanner, la conversion locale offre une solution rapide et conforme aux données.",
  ],
  'bmp-to-png': [
    "BMP vers PNG réduit la taille par compression sans perte – la pleine qualité est préservée. Idéal pour graphiques avec bords nets, texte ou captures d'écran.",
    'Contrairement au JPG, le PNG préserve la qualité pixel exacte sans artefacts. Pour documentations techniques, captures et graphiques textuels, le PNG est le meilleur choix.',
    "La conversion locale est adaptée aux documents confidentiels et captures internes – rien n'est envoyé sur un serveur externe.",
  ],
  'bmp-to-webp': [
    "Les BMP sont inadaptés au web moderne – non comprimés et énormes. Le WebP réduit la taille jusqu'à 97% avec bonne qualité, modernisant les anciennes images pour le web.",
    'La conversion modernise les anciens stocks Windows pour les sites, CMS et boutiques actuels. Le WebP est supporté par tous les navigateurs modernes et améliore les temps de chargement.',
    "Pour les entreprises françaises préparant d'anciennes archives pour leur présence web, la conversion locale est efficace et conforme au RGPD.",
  ],
  'bmp-to-avif': [
    "L'AVIF offre la meilleure compression pour les BMP non comprimés : réductions de plus de 98%. Pour moderniser d'anciennes archives, BMP vers AVIF est le plus efficace.",
    "L'AVIF supporte HDR, espaces colorimétriques larges et jusqu'à 12 bits – la qualité originale est préservée au mieux. Chrome, Firefox et Safari 16+ le supportent nativement.",
    "La conversion locale permet la migration d'archives entières sans cloud – rapide, sûre et conforme aux données.",
  ],
  'bmp-to-gif': [
    "BMP vers GIF est utile pour les systèmes n'acceptant que le GIF ou les graphiques simples avec peu de couleurs où le GIF est plus compact.",
    'Le GIF ne supporte que 256 couleurs. Les images photoréalistes perdent en qualité. Pour les photos, JPG ou WebP sont préférables. GIF convient aux graphiques simples.',
    'Pour les exigences de compatibilité de systèmes anciens, la conversion locale offre une solution rapide et sécurisée.',
  ],
  'bmp-to-tiff': [
    'BMP vers TIFF est pertinent pour le support professionnel des métadonnées – archivage, prépresse ou traitement dans des logiciels professionnels.',
    "Le TIFF préserve la pleine qualité du BMP et ajoute : métadonnées EXIF, CMJN et calques. Pour l'archivage à long terme, le TIFF est nettement supérieur au BMP.",
    'Archives, bibliothèques et entreprises françaises numérisant des fonds anciens bénéficient de la conversion locale sans dépendance cloud.',
  ],
  'avif-to-jpg': [
    "L'AVIF n'est pas encore supporté par les anciens appareils, logiciels de retouche et certaines plateformes. La conversion en JPG assure la compatibilité maximale.",
    "À 85–90%, la qualité reste quasi identique à l'original AVIF. Utile pour l'e-mail vers des destinataires avec anciens systèmes ou plateformes d'impression n'acceptant que le JPEG.",
    'Pour les entreprises devant fournir des images weboptimisées (AVIF) et universelles (JPG), la conversion locale est un workflow efficace.',
  ],
  'avif-to-png': [
    'Les images AVIF avec transparence doivent parfois être converties en PNG – pour la retouche dans des logiciels graphiques ou plateformes sans support AVIF.',
    "Le PNG préserve transparence et qualité sans perte. Les fichiers sont plus gros que l'AVIF mais adaptés à Photoshop, Figma, Canva et à l'impression.",
    'Les graphistes en France utilisent la conversion locale pour préparer des assets AVIF pour différents canaux de sortie – sûr et conforme au RGPD.',
  ],
  'avif-to-webp': [
    "Le WebP offre un support navigateur plus large que l'AVIF (Safari 14+ vs 16+) avec bonne compression. Si votre audience utilise des navigateurs plus anciens, le WebP est plus sûr.",
    'AVIF vers WebP est pertinent pour les CMS et CDN sans support AVIF. Le WebP est supporté nativement par WordPress, Shopify, Cloudflare et tous les navigateurs modernes.',
    'Pour les projets web en France nécessitant une couverture navigateur maximale, le WebP reste le format moderne le plus fiable.',
  ],
};

function extractFormats(f) {
  const m = f.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { key: `${m[1]}-to-${m[2]}` } : null;
}
let updated = 0,
  skipped = 0;
const files = fs.readdirSync(TOOLS).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));
for (const file of files) {
  const fmt = extractFormats(file);
  if (!fmt || !P[fmt.key]) {
    skipped++;
    continue;
  }
  const [p1, p2, p3] = P[fmt.key];
  const fp = path.join(TOOLS, file);
  const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  const block = data.contentBlocks.find((b) => b.type === 'sectionInfo' && !b.html.includes('<table') && (b.title.includes('pratique') || b.title.includes('en pratique')));
  if (!block) {
    skipped++;
    continue;
  }
  block.html = `<p class="text-mid mb-4">${p1}</p><p class="text-mid mb-4">${p2}</p><p class="text-mid">${p3}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`FR sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
