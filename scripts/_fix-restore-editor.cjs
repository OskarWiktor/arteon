/**
 * Fix: restore image editor card that was accidentally removed from "Images" section.
 * Also remove unused RiImageEditLine import (old combined converter used it, not needed anymore).
 */
const fs = require('fs');
const path = require('path');

const BASE_IMG = '/assets/tools/free-image-editor-crop-resize-and-convert';

const EDITOR_DATA = {
  en: {
    title: 'Online image editor',
    alt: 'Online image editor Arteon',
    img: `${BASE_IMG}/online-image-editor-en.webp`,
    desc: 'Prepare the perfect crop for social media or your website. Choose a ready-made format or enter custom pixel dimensions and download the image in PNG, JPG, or WebP.',
    href: '/en/tools/online-image-editor',
    cta: 'Open tool',
  },
  es: {
    title: 'Editor de imágenes en línea',
    alt: 'Editor de imágenes en línea Arteon',
    img: `${BASE_IMG}/editor-de-imagenes-en-linea-es.webp`,
    desc: 'Prepare el recorte perfecto para redes sociales o su web. Elija un formato predefinido o introduzca dimensiones personalizadas y descargue la imagen en PNG, JPG o WebP.',
    href: '/es/herramientas/editor-de-imagenes-en-linea',
    cta: 'Abrir herramienta',
  },
  fr: {
    title: "Éditeur d'images en ligne",
    alt: "Éditeur d'images en ligne Arteon",
    img: `${BASE_IMG}/editeur-d-images-en-ligne-fr.webp`,
    desc: "Préparez le recadrage parfait pour les réseaux sociaux ou votre site. Choisissez un format prêt à l'emploi ou saisissez des dimensions personnalisées et téléchargez l'image en PNG, JPG ou WebP.",
    href: "/fr/outils/editeur-d-images-en-ligne",
    cta: "Ouvrir l'outil",
  },
  de: {
    title: 'Online-Bildeditor',
    alt: 'Online-Bildeditor Arteon',
    img: `${BASE_IMG}/online-bildeditor-de.webp`,
    desc: 'Den perfekten Zuschnitt für Social Media oder Ihre Website vorbereiten. Wählen Sie ein fertiges Format oder geben Sie eigene Pixelmaße ein und laden Sie das Bild als PNG, JPG oder WebP herunter.',
    href: '/de/werkzeuge/online-bildeditor',
    cta: 'Tool öffnen',
  },
  pt: {
    title: 'Editor de imagens online',
    alt: 'Editor de imagens online Arteon',
    img: `${BASE_IMG}/editor-de-imagens-online-pt.webp`,
    desc: 'Prepare o corte perfeito para redes sociais ou o seu site. Escolha um formato predefinido ou introduza dimensões personalizadas e descarregue a imagem em PNG, JPG ou WebP.',
    href: '/pt/ferramentas/editor-de-imagens-online',
    cta: 'Abrir ferramenta',
  },
  it: {
    title: 'Editor di immagini online',
    alt: 'Editor di immagini online Arteon',
    img: `${BASE_IMG}/editor-di-immagini-online-it.webp`,
    desc: "Prepara il ritaglio perfetto per i social media o il tuo sito. Scegli un formato pronto o inserisci dimensioni personalizzate e scarica l'immagine in PNG, JPG o WebP.",
    href: '/it/strumenti/editor-di-immagini-online',
    cta: 'Apri strumento',
  },
  ro: {
    title: 'Editor de imagini online',
    alt: 'Editor de imagini online Arteon',
    img: `${BASE_IMG}/editor-de-imagini-online-ro.webp`,
    desc: 'Pregătiți decupajul perfect pentru rețelele sociale sau site-ul dvs. Alegeți un format predefinit sau introduceți dimensiuni personalizate și descărcați imaginea în PNG, JPG sau WebP.',
    href: '/ro/instrumente/editor-de-imagini-online',
    cta: 'Deschide instrumentul',
  },
  nl: {
    title: 'Online afbeeldingseditor',
    alt: 'Online afbeeldingseditor Arteon',
    img: `${BASE_IMG}/online-afbeeldingseditor-nl.webp`,
    desc: 'Bereid de perfecte uitsnede voor social media of uw website voor. Kies een kant-en-klaar formaat of voer aangepaste pixelafmetingen in en download de afbeelding als PNG, JPG of WebP.',
    href: '/nl/tools/online-afbeeldingseditor',
    cta: 'Open tool',
  },
  hu: {
    title: 'Online képszerkesztő',
    alt: 'Online képszerkesztő Arteon',
    img: `${BASE_IMG}/online-kepszerkeszto-hu.webp`,
    desc: 'Készítse el a tökéletes vágást közösségi médiához vagy weboldalához. Válasszon kész formátumot vagy adjon meg egyéni pixelméreteket, és töltse le a képet PNG, JPG vagy WebP formátumban.',
    href: '/hu/eszkozok/online-kepszerkeszto',
    cta: 'Megnyitás',
  },
  cs: {
    title: 'Online editor obrázků',
    alt: 'Online editor obrázků Arteon',
    img: `${BASE_IMG}/editor-obrazku-cs.webp`,
    desc: 'Připravte ideální ořez pro sociální sítě nebo web. Vyberte hotový formát nebo zadejte vlastní rozměry a stáhněte obrázek jako PNG, JPG nebo WebP.',
    href: '/cs/nastroje/editor-obrazku',
    cta: 'Otevřít nástroj',
  },
  sv: {
    title: 'Bildredigerare online',
    alt: 'Bildredigerare online Arteon',
    img: `${BASE_IMG}/bildredigerare-online-sv.webp`,
    desc: 'Förbered den perfekta beskärningen för sociala medier eller din webbplats. Välj ett färdigt format eller ange egna pixelmått och ladda ner bilden som PNG, JPG eller WebP.',
    href: '/sv/verktyg/bildredigerare-online',
    cta: 'Öppna verktyg',
  },
  da: {
    title: 'Online billedredaktør',
    alt: 'Online billedredaktør Arteon',
    img: `${BASE_IMG}/online-billedredaktor-da.webp`,
    desc: 'Forbered den perfekte beskæring til sociale medier eller dit website. Vælg et færdigt format eller angiv brugerdefinerede pixelmål og download billedet som PNG, JPG eller WebP.',
    href: '/da/vaerktojer/online-billedredaktor',
    cta: 'Åbn værktøj',
  },
  no: {
    title: 'Bildeeditor online',
    alt: 'Bildeeditor online Arteon',
    img: `${BASE_IMG}/bildeeditor-online-no.webp`,
    desc: 'Forbered det perfekte bildet for sosiale medier eller nettstedet ditt. Velg et ferdig format eller angi egne pikselmål og last ned bildet som PNG, JPG eller WebP.',
    href: '/no/verktoy/bildeeditor-online',
    cta: 'Åpne verktøy',
  },
  fi: {
    title: 'Kuvaeditori verkossa',
    alt: 'Kuvaeditori verkossa Arteon',
    img: `${BASE_IMG}/kuvaeditori-fi.webp`,
    desc: 'Valmistele täydellinen rajaus sosiaaliseen mediaan tai verkkosivustollesi. Valitse valmis muoto tai syötä omat pikselimitat ja lataa kuva PNG-, JPG- tai WebP-muodossa.',
    href: '/fi/tyokalut/kuvaeditori',
    cta: 'Avaa työkalu',
  },
  el: {
    title: 'Επεξεργασία εικόνας online',
    alt: 'Επεξεργασία εικόνας online Arteon',
    img: `${BASE_IMG}/epexergasia-eikonas-el.webp`,
    desc: 'Προετοιμάστε την τέλεια περικοπή για κοινωνικά δίκτυα ή τον ιστότοπό σας. Επιλέξτε έτοιμη μορφή ή εισάγετε προσαρμοσμένες διαστάσεις και κατεβάστε την εικόνα σε PNG, JPG ή WebP.',
    href: '/el/ergaleia/epexergasia-eikonas',
    cta: 'Άνοιγμα εργαλείου',
  },
};

const appRoot = path.resolve(__dirname, '..', 'app');
const HUBS = [
  { locale: 'en', file: path.join(appRoot, 'en', 'tools', 'page.tsx') },
  { locale: 'es', file: path.join(appRoot, 'es', 'herramientas', 'page.tsx') },
  { locale: 'fr', file: path.join(appRoot, 'fr', 'outils', 'page.tsx') },
  { locale: 'de', file: path.join(appRoot, 'de', 'werkzeuge', 'page.tsx') },
  { locale: 'pt', file: path.join(appRoot, 'pt', 'ferramentas', 'page.tsx') },
  { locale: 'it', file: path.join(appRoot, 'it', 'strumenti', 'page.tsx') },
  { locale: 'ro', file: path.join(appRoot, 'ro', 'instrumente', 'page.tsx') },
  { locale: 'nl', file: path.join(appRoot, 'nl', 'tools', 'page.tsx') },
  { locale: 'hu', file: path.join(appRoot, 'hu', 'eszkozok', 'page.tsx') },
  { locale: 'cs', file: path.join(appRoot, 'cs', 'nastroje', 'page.tsx') },
  { locale: 'sv', file: path.join(appRoot, 'sv', 'verktyg', 'page.tsx') },
  { locale: 'da', file: path.join(appRoot, 'da', 'vaerktojer', 'page.tsx') },
  { locale: 'no', file: path.join(appRoot, 'no', 'verktoy', 'page.tsx') },
  { locale: 'fi', file: path.join(appRoot, 'fi', 'tyokalut', 'page.tsx') },
  { locale: 'el', file: path.join(appRoot, 'el', 'ergaleia', 'page.tsx') },
];

function escapeJsx(s) {
  return s.replace(/'/g, "\\'");
}

let fixed = 0;
for (const { locale, file } of HUBS) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  const ed = EDITOR_DATA[locale];
  if (!ed) { console.log(`  NO DATA: ${locale}`); continue; }

  // 1. Remove unused RiImageEditLine import
  content = content.replace(/\s*RiImageEditLine,\n/, '\n');

  // 2. Check if editor card is missing (RiCropLine not in items)
  // The Images section items should have RiCropLine for editor
  if (!content.includes('<RiCropLine className="h-8 w-8"')) {
    // Editor card is missing — insert it before the favicon card (RiAppsLine)
    const faviconPattern = /(\s*items=\{\[\n)(\s*\{\s*\n\s*icon: <RiAppsLine)/;
    if (faviconPattern.test(content)) {
      const editorCard = `            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: '${escapeJsx(ed.title)}',
              topImageAlt: '${escapeJsx(ed.alt)}',
              topImageSrc: '${ed.img}',
              description: (
                <div className="flex h-full flex-col">
                  <p>${escapeJsx(ed.desc)}</p>
                  <div className="mt-4">
                    <Button arrow link="${ed.href}">
                      ${ed.cta}
                    </Button>
                  </div>
                </div>
              ),
            },\n`;
      content = content.replace(faviconPattern, `$1${editorCard}$2`);
      console.log(`  Restored editor: ${locale}`);
    } else {
      console.log(`  WARN: Could not find favicon card in ${locale}`);
    }
  } else {
    console.log(`  Editor OK: ${locale}`);
  }

  fs.writeFileSync(file, content, 'utf8');
  fixed++;
}
console.log(`\nProcessed: ${fixed}`);
