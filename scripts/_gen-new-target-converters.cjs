/**
 * Generate all PL-only artifacts for 20 new target-format converters:
 * 1. Patch tool-registry.ts with 20 new entries (PL locale only)
 * 2. Create 20 JSON content files in data/pl/tools/
 * 3. Create 20 page.tsx files in app/(pl)/narzedzia/(tools)/
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const converters = [
  // → AVIF (8)
  { key: 'jpgToAvif', slug: 'konwerter-jpg-na-avif', title: 'Konwerter JPG na AVIF', desc: 'Zamień zdjęcia JPG na nowoczesny AVIF. Kompresja nawet 50% lepsza niż JPG przy zachowaniu jakości.', jsonFile: 'converter-jpg-to-avif' },
  { key: 'pngToAvif', slug: 'konwerter-png-na-avif', title: 'Konwerter PNG na AVIF', desc: 'Zamień grafiki PNG na AVIF z zachowaniem przezroczystości. Znacznie mniejsze pliki.', jsonFile: 'converter-png-to-avif' },
  { key: 'webpToAvif', slug: 'konwerter-webp-na-avif', title: 'Konwerter WebP na AVIF', desc: 'Zamień pliki WebP na AVIF. Jeszcze lepsza kompresja w nowoczesnym formacie.', jsonFile: 'converter-webp-to-avif' },
  { key: 'svgToAvif', slug: 'konwerter-svg-na-avif', title: 'Konwerter SVG na AVIF', desc: 'Zamień grafikę wektorową SVG na nowoczesny format rastrowy AVIF.', jsonFile: 'converter-svg-to-avif' },
  { key: 'bmpToAvif', slug: 'konwerter-bmp-na-avif', title: 'Konwerter BMP na AVIF', desc: 'Zamień nieskompresowane pliki BMP na nowoczesny AVIF. Ogromna redukcja rozmiaru.', jsonFile: 'converter-bmp-to-avif' },
  { key: 'gifToAvif', slug: 'konwerter-gif-na-avif', title: 'Konwerter GIF na AVIF', desc: 'Zamień pierwszą klatkę GIF na nowoczesny AVIF. Mniejszy plik, lepsza jakość.', jsonFile: 'converter-gif-to-avif' },
  { key: 'heicToAvif', slug: 'konwerter-heic-na-avif', title: 'Konwerter HEIC na AVIF', desc: 'Zamień zdjęcia HEIC z iPhone na AVIF. Nowoczesny format webowy o doskonałej kompresji.', jsonFile: 'converter-heic-to-avif' },
  { key: 'tiffToAvif', slug: 'konwerter-tiff-na-avif', title: 'Konwerter TIFF na AVIF', desc: 'Zamień pliki TIFF na nowoczesny AVIF. Idealne do publikacji skanów w internecie.', jsonFile: 'converter-tiff-to-avif' },
  // → GIF (5)
  { key: 'jpgToGif', slug: 'konwerter-jpg-na-gif', title: 'Konwerter JPG na GIF', desc: 'Zamień zdjęcia JPG na format GIF. Statyczny obraz w formacie obsługiwanym przez każdą platformę.', jsonFile: 'converter-jpg-to-gif' },
  { key: 'pngToGif', slug: 'konwerter-png-na-gif', title: 'Konwerter PNG na GIF', desc: 'Zamień grafiki PNG na GIF. Idealne do prostych ikon i grafik z ograniczoną paletą kolorów.', jsonFile: 'converter-png-to-gif' },
  { key: 'webpToGif', slug: 'konwerter-webp-na-gif', title: 'Konwerter WebP na GIF', desc: 'Zamień pliki WebP na GIF. Szeroka kompatybilność z programami i platformami.', jsonFile: 'converter-webp-to-gif' },
  { key: 'svgToGif', slug: 'konwerter-svg-na-gif', title: 'Konwerter SVG na GIF', desc: 'Zamień grafikę wektorową SVG na rastrowy GIF. Uniwersalny format dla prostych grafik.', jsonFile: 'converter-svg-to-gif' },
  { key: 'bmpToGif', slug: 'konwerter-bmp-na-gif', title: 'Konwerter BMP na GIF', desc: 'Zamień nieskompresowane pliki BMP na lekki GIF. Redukcja rozmiaru dla prostych grafik.', jsonFile: 'converter-bmp-to-gif' },
  // → TIFF (7)
  { key: 'jpgToTiff', slug: 'konwerter-jpg-na-tiff', title: 'Konwerter JPG na TIFF', desc: 'Zamień zdjęcia JPG na bezstratny TIFF. Idealne do druku i archiwizacji.', jsonFile: 'converter-jpg-to-tiff' },
  { key: 'pngToTiff', slug: 'konwerter-png-na-tiff', title: 'Konwerter PNG na TIFF', desc: 'Zamień grafiki PNG na profesjonalny format TIFF. Do druku i dalszej obróbki.', jsonFile: 'converter-png-to-tiff' },
  { key: 'webpToTiff', slug: 'konwerter-webp-na-tiff', title: 'Konwerter WebP na TIFF', desc: 'Zamień pliki WebP na bezstratny TIFF. Z formatu webowego do profesjonalnego.', jsonFile: 'converter-webp-to-tiff' },
  { key: 'svgToTiff', slug: 'konwerter-svg-na-tiff', title: 'Konwerter SVG na TIFF', desc: 'Zamień grafikę wektorową SVG na profesjonalny TIFF. Do druku i DTP.', jsonFile: 'converter-svg-to-tiff' },
  { key: 'bmpToTiff', slug: 'konwerter-bmp-na-tiff', title: 'Konwerter BMP na TIFF', desc: 'Zamień pliki BMP na profesjonalny TIFF. Zachowaj jakość w formacie do druku.', jsonFile: 'converter-bmp-to-tiff' },
  { key: 'avifToTiff', slug: 'konwerter-avif-na-tiff', title: 'Konwerter AVIF na TIFF', desc: 'Zamień pliki AVIF na bezstratny TIFF. Z formatu webowego do profesjonalnego.', jsonFile: 'converter-avif-to-tiff' },
  { key: 'heicToTiff', slug: 'konwerter-heic-na-tiff', title: 'Konwerter HEIC na TIFF', desc: 'Zamień zdjęcia HEIC z iPhone na profesjonalny TIFF. Do druku i archiwizacji.', jsonFile: 'converter-heic-to-tiff' },
];

// ── 1. Patch tool-registry.ts ────────────────────────────────────────
const registryPath = path.join(ROOT, 'lib', 'i18n', 'tool-registry.ts');
let registry = fs.readFileSync(registryPath, 'utf8');

const entries = converters.map(c => `  {
    key: '${c.key}',
    section: 'konwertery',
    icon: RiLoopLeftLine,
    image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    desktopOnly: false,
    locales: {
      pl: { slug: '${c.slug}', title: '${c.title}', description: '${c.desc}' },
    },
  }`).join(',\n');

registry = registry.replace(
  /\n\];\n\n\/\/ -{10,}\n\/\/ Helpers/,
  `,\n${entries},\n];\n\n// ---------------------------------------------------------------------------\n// Helpers`
);

fs.writeFileSync(registryPath, registry, 'utf8');
console.log('✓ Patched tool-registry.ts with 20 new entries');

// ── 2. Generate JSON content files ──────────────────────────────────
function getSourceLabel(key) {
  const map = { jpg: 'JPG', png: 'PNG', webp: 'WebP', svg: 'SVG', bmp: 'BMP', gif: 'GIF', avif: 'AVIF', heic: 'HEIC', tiff: 'TIFF' };
  const match = key.match(/^([a-z]+)To/);
  return match ? map[match[1]] || match[1].toUpperCase() : '';
}
function getTargetLabel(key) {
  const map = { Avif: 'AVIF', Gif: 'GIF', Tiff: 'TIFF' };
  const match = key.match(/To([A-Z][a-z]+)$/);
  return match ? map[match[1]] || match[1].toUpperCase() : '';
}

const featureListMap = {
  avif: ['Konwersja do AVIF', 'Regulacja jakosci (60-95%)', 'Konwersja wielu plikow', 'Przetwarzanie lokalne w przegladarce'],
  gif: ['Konwersja do GIF', 'Kwantyzacja do 256 kolorow', 'Konwersja wielu plikow', 'Przetwarzanie lokalne w przegladarce'],
  tiff: ['Konwersja do TIFF', 'Format bezstratny', 'Konwersja wielu plikow', 'Przetwarzanie lokalne w przegladarce'],
};

const stepsMap = {
  avif: [
    { name: 'Wgraj pliki', text: 'Przeciagnij pliki na strone lub kliknij, aby je wybrac z dysku.' },
    { name: 'Ustaw jakosc', text: 'Dostosuj suwak jakosci AVIF — nizsze wartosci daja mniejsze pliki.' },
    { name: 'Konwertuj', text: 'Kliknij Konwertuj — pliki zostana przetworzone lokalnie w przegladarce.' },
    { name: 'Pobierz', text: 'Pobierz gotowe pliki AVIF — pojedynczo lub wszystkie naraz.' },
  ],
  gif: [
    { name: 'Wgraj pliki', text: 'Przeciagnij pliki na strone lub kliknij, aby je wybrac z dysku.' },
    { name: 'Konwertuj', text: 'Kliknij Konwertuj — pliki zostana przetworzone lokalnie w przegladarce.' },
    { name: 'Pobierz', text: 'Pobierz gotowe pliki GIF — pojedynczo lub wszystkie naraz.' },
  ],
  tiff: [
    { name: 'Wgraj pliki', text: 'Przeciagnij pliki na strone lub kliknij, aby je wybrac z dysku.' },
    { name: 'Konwertuj', text: 'Kliknij Konwertuj — pliki zostana przetworzone lokalnie w przegladarce.' },
    { name: 'Pobierz', text: 'Pobierz gotowe pliki TIFF — pojedynczo lub wszystkie naraz.' },
  ],
};

const faqMap = {
  avif: [
    { q: 'Czym jest format AVIF?', a: 'AVIF to nowoczesny format obrazow oparty na kodeku AV1. Oferuje doskonala kompresje — pliki sa nawet o 50% mniejsze niz JPG przy zachowaniu porównywalnej jakosci. Obsluguje przezroczystosc i szerokie gamamy kolorow.' },
    { q: 'Czy AVIF dziala we wszystkich przegladarkach?', a: 'AVIF jest obslugiwany przez Chrome, Edge i Firefox. Safari nie wspiera kodowania AVIF — w takim przypadku narzedzie wyswietli odpowiedni komunikat.' },
    { q: 'Czy moje pliki sa wysylane na serwer?', a: 'Nie. Konwersja odbywa sie w calosci w przegladarce. Pliki nie opuszczaja komputera.' },
  ],
  gif: [
    { q: 'Czym jest format GIF?', a: 'GIF to format graficzny obslugujacy max 256 kolorow. Jest uniwersalnie obslugiwany przez wszystkie przegladarki i programy. Najlepiej nadaje sie do prostych grafik, ikon i logo.' },
    { q: 'Czy zdjecia beda dobrze wygladac w GIF?', a: 'Zdjecia fotograficzne moga stracic na jakosci po konwersji do GIF z powodu ograniczenia do 256 kolorow. GIF sprawdza sie najlepiej dla prostych grafik z ograniczona paleta kolorow.' },
    { q: 'Czy moje pliki sa wysylane na serwer?', a: 'Nie. Konwersja odbywa sie w calosci w przegladarce. Pliki nie opuszczaja komputera.' },
  ],
  tiff: [
    { q: 'Czym jest format TIFF?', a: 'TIFF to profesjonalny format bezstratny uzywany w druku, fotografii i archiwizacji. Zachowuje pelna jakosc obrazu bez kompresji stratnej.' },
    { q: 'Dlaczego pliki TIFF sa takie duze?', a: 'TIFF przechowuje dane obrazu bez kompresji stratnej, co gwarantuje pelna jakosc, ale skutkuje wiekszymi plikami. To pozadane w profesjonalnych zastosowaniach — druku, DTP i archiwizacji.' },
    { q: 'Czy moje pliki sa wysylane na serwer?', a: 'Nie. Konwersja odbywa sie w calosci w przegladarce. Pliki nie opuszczaja komputera.' },
  ],
};

for (const c of converters) {
  const srcLabel = getSourceLabel(c.key);
  const tgtLabel = getTargetLabel(c.key);
  const tgtLower = tgtLabel.toLowerCase();
  const steps = stepsMap[tgtLower];
  const faqs = faqMap[tgtLower];
  const featureList = featureListMap[tgtLower];

  const json = {
    toolKey: c.key,
    locale: 'pl',
    metadata: {
      title: `${c.title} — ${srcLabel} ${tgtLabel}`,
      description: c.desc,
      ogImage: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
      path: `/narzedzia/${c.slug}`,
    },
    hero: {
      title: c.title,
      description: c.desc,
      backgroundImage: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
    },
    breadcrumbs: {
      second: { href: '/narzedzia', label: 'Narzedzia' },
      third: { href: `/narzedzia/${c.slug}`, label: c.title },
    },
    schemas: {
      software: {
        name: c.title,
        applicationCategory: 'MultimediaApplication',
        applicationSubCategory: 'ImageConverter',
        description: c.desc,
        featureList,
      },
      howTo: {
        name: `${srcLabel} to ${tgtLabel}`,
        description: c.desc,
        steps: steps.map((s, i) => ({
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
    },
    contentBlocks: [
      {
        type: 'section',
        title: `Jak dziala ${c.title.replace('Konwerter ', 'konwerter ')}?`,
        html: `<p>${c.desc} Konwersja odbywa sie w calosci w przegladarce — pliki nie sa wysylane na serwer. Bez rejestracji, bez limitu plikow.</p>`,
      },
      {
        type: 'steps',
        title: `Jak przekonwertowac ${srcLabel} na ${tgtLabel}?`,
        steps: steps.map((s, i) => ({
          position: i + 1,
          title: s.name,
          description: s.text,
        })),
      },
      {
        type: 'faq',
        title: 'Najczesciej zadawane pytania',
        items: faqs.map(f => ({ question: f.q, answer: f.a })),
      },
      {
        type: 'contact',
        title: 'Potrzebujesz wiecej?',
        description: 'Skontaktuj sie z nami — pomozemy dobrac odpowiednie rozwiazanie.',
        href: '/kontakt',
        buttonText: 'Napisz do nas',
      },
      {
        type: 'toolsCarousel',
        title: 'Inne narzedzia',
      },
    ],
  };

  const jsonPath = path.join(ROOT, 'data', 'pl', 'tools', `${c.jsonFile}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`✓ JSON: ${c.jsonFile}.json`);
}

// ── 3. Generate page.tsx files ──────────────────────────────────────
for (const c of converters) {
  const pageDir = path.join(ROOT, 'app', '(pl)', 'narzedzia', '(tools)', c.slug);
  fs.mkdirSync(pageDir, { recursive: true });

  const pageTsx = `import ToolPageRenderer from '@/components/sections/tools/ToolPageRenderer';
import data from '@/data/pl/tools/${c.jsonFile}.json';
import type { ToolPageData } from '@/types/tool-page';
import type { Metadata } from 'next';

const d = data as unknown as ToolPageData;
export const metadata: Metadata = {
  title: d.metadata.title,
  description: d.metadata.description,
};

export default function Page() {
  return <ToolPageRenderer data={d} locale="pl" />;
}
`;
  fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageTsx, 'utf8');
  console.log(`✓ Page: ${c.slug}/page.tsx`);
}

console.log(`\n✅ Done: 20 registry entries, 20 JSON files, 20 page.tsx files`);
