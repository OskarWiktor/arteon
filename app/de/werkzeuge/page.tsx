import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import Script from 'next/script';
import {
  RiCropLine,
  RiAppsLine,
  RiFileTextLine,
  RiArticleLine,
  RiMailLine,
  RiContrast2Line,
  RiPaletteLine,
  RiPantoneLine,
  RiQrCodeLine,
  RiShieldCheckLine,
  RiInfinityFill,
  RiGlobalLine,
  RiLockLine,
  RiLoopLeftLine,
} from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';

export const metadata = {
  title: 'Kostenlose Online-Tools | Konverter, SEO, Farben, Favicon',
  description:
    '34 kostenlose Online-Tools: 24 Bildkonverter (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), Favicon-Generator, Bildeditor, Textzähler, Farbpaletten und QR-Codes. Ohne Registrierung.',
  alternates: getToolsIndexAlternates('de'),
  openGraph: {
    title: 'Kostenlose Online-Tools | Konverter, SEO, Farben, Favicon',
    description:
      '34 kostenlose Online-Tools: 24 Bildkonverter (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), Favicon-Generator, Bildeditor, Textzähler, Farbpaletten und QR-Codes. Ohne Registrierung.',
    url: toAbsoluteUrl('/de/werkzeuge'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Kostenlose Online-Tools — Bildkonverter, SEO, Farben, Favicon',
  description:
    '34 kostenlose Online-Tools: 24 Bildkonverter (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), Favicon-Generator, Bildeditor, Textzähler, Farbpaletten und QR-Codes. Ohne Registrierung.',
  url: toAbsoluteUrl('/de/werkzeuge'),
  inLanguage: 'de',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    { '@type': 'Thing', name: 'Bildoptimierung' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Farben und Branding' },
    { '@type': 'Thing', name: 'Online-Generatoren' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 34,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG- und PNG-zu-WebP-Konverter online',
        description:
          'Kostenloser Online-Konverter von JPG und PNG zu WebP. Reduziert die Dateigröße um bis zu 35\u00a0% ohne sichtbaren Qualitätsverlust. Ohne Registrierung - Dateien bleiben in Ihrem Browser.',
        url: toAbsoluteUrl('/de/werkzeuge/jpg-zu-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Online-Bildeditor',
        description: 'Bilder für Social Media und Websites zuschneiden und skalieren. Fertige Vorlagen, eigene Pixelmaße und runde Avatare.',
        url: toAbsoluteUrl('/de/werkzeuge/online-bildeditor'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Online-Favicon-Generator',
        description: 'Kostenloser Online-Favicon-Generator. Erstellt favicon.ico und PNG-Symbole (16×16 bis 512×512) aus einem einzigen Bild - passend für alle Browser und Lighthouse.',
        url: toAbsoluteUrl('/de/werkzeuge/kostenloser-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta-Tag-Checker',
        description:
          'Meta-Titel- und Beschreibungs-Checker mit Google-Vorschau. Zeigt Zeichenanzahl und Pixelbreite, damit Titel und Beschreibungen in den Suchergebnissen nicht abgeschnitten werden.',
        url: toAbsoluteUrl('/de/werkzeuge/meta-titel-beschreibung-laengenpruefer'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'HTML-E-Mail-Signatur-Generator',
        description: 'Kostenloser HTML-E-Mail-Signatur-Generator. Kontaktdaten, CTA-Link und Social-Media-Profile eintragen, fertigen HTML-Code in Gmail oder Outlook einfügen.',
        url: toAbsoluteUrl('/de/werkzeuge/kostenloser-e-mail-signatur-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Farbkontrast-Checker',
        description: 'Prüft Kontrast und Lesbarkeit von Text- und Hintergrundfarben gemäß WCAG. Berechnet das Kontrastverhältnis und hilft mit automatischer Farbanpassung.',
        url: toAbsoluteUrl('/de/werkzeuge/farbkontrast-checker'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Bild-Farbextraktor online',
        description: 'Kostenloser Online-Farbextraktor. Foto oder Logo hochladen und eine Palette mit bis zu 12 dominanten Farben (HEX und RGB) erhalten.',
        url: toAbsoluteUrl('/de/werkzeuge/bild-farbextraktor'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Farbpaletten-Generator online',
        description: 'Farbpaletten aus einer Basisfarbe generieren. Monochromatisch, triadisch, analog, komplementär und mehr - plus Pastell-, Dunkel- und minimalistische Varianten.',
        url: toAbsoluteUrl('/de/werkzeuge/farbpaletten-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Wort- und Zeichenzähler online',
        description: 'Kostenloser Wort- und Zeichenzähler mit Längenbewertung. Prüft, ob die Textlänge für Startseite, Dienstleistungsseite, Blogartikel oder Produktbeschreibung passt.',
        url: toAbsoluteUrl('/de/werkzeuge/wort-und-zeichenzaehler'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'QR-Code-Generator online',
        description: 'Kostenloser Online-QR-Code-Generator. Erstellen Sie QR-Codes für Websites, vCards, Speisekarten oder Flyer. Export als PNG und SVG, ohne Anmeldung, ohne Limits.',
        url: toAbsoluteUrl('/de/werkzeuge/kostenloser-qr-code-generator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'JPG zu WebP Konverter',
        description: 'JPG-Fotos in leichtes WebP umwandeln. Bildgewicht um bis zu 35% reduzieren.',
        url: toAbsoluteUrl('/de/werkzeuge/jpg-zu-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'PNG zu JPG Konverter',
        description: 'PNG-Dateien im Browser in JPG umwandeln. Ohne Dateilimit, ohne Registrierung.',
        url: toAbsoluteUrl('/de/werkzeuge/png-zu-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'WebP zu JPG Konverter',
        description: 'WebP-Dateien in universell kompatibles JPG umwandeln. Funktioniert überall.',
        url: toAbsoluteUrl('/de/werkzeuge/webp-zu-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'PNG zu WebP Konverter',
        description: 'PNG-Grafiken in WebP umwandeln. Kleinere Dateien bei erhaltener Transparenz.',
        url: toAbsoluteUrl('/de/werkzeuge/png-zu-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'JPG zu PNG Konverter',
        description: 'JPG-Bilder verlustfrei in PNG umwandeln. Lokale Verarbeitung, unbegrenzte Dateien.',
        url: toAbsoluteUrl('/de/werkzeuge/jpg-zu-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'WebP zu PNG Konverter',
        description: 'WebP-Bilder verlustfrei in PNG umwandeln. Lokale Konvertierung, kein Server-Upload.',
        url: toAbsoluteUrl('/de/werkzeuge/webp-zu-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'SVG zu PNG Konverter',
        description: 'SVG-Vektorgrafiken in Raster-PNG umwandeln. Ideal für Dokumente und Social Media.',
        url: toAbsoluteUrl('/de/werkzeuge/svg-zu-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'SVG zu JPG Konverter',
        description: 'SVG-Vektordateien in kompaktes JPG umwandeln. Kleinere Datei, volle Kompatibilität.',
        url: toAbsoluteUrl('/de/werkzeuge/svg-zu-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'BMP zu JPG Konverter',
        description: 'Unkomprimierte BMP-Dateien in leichtes JPG umwandeln. Massive Größenreduktion.',
        url: toAbsoluteUrl('/de/werkzeuge/bmp-zu-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'BMP zu PNG Konverter',
        description: 'BMP-Bilder verlustfrei in PNG umwandeln. Qualität erhalten, Dateigröße reduzieren.',
        url: toAbsoluteUrl('/de/werkzeuge/bmp-zu-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'GIF zu PNG Konverter',
        description: 'Erstes Bild eines GIFs als statisches PNG exportieren. Ohne Qualitätsverlust.',
        url: toAbsoluteUrl('/de/werkzeuge/gif-zu-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'GIF zu JPG Konverter',
        description: 'Erstes Bild eines GIFs als JPG exportieren. Kleinere Datei, schnelleres Laden.',
        url: toAbsoluteUrl('/de/werkzeuge/gif-zu-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'SVG zu WebP Konverter',
        description: 'SVG-Grafiken in leichtes WebP umwandeln. Ideal fur Websites.',
        url: toAbsoluteUrl('/de/werkzeuge/svg-zu-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'GIF zu WebP Konverter',
        description: 'Erstes GIF-Bild als leichtes WebP exportieren. Kleinere Datei.',
        url: toAbsoluteUrl('/de/werkzeuge/gif-zu-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'BMP zu WebP Konverter',
        description: 'BMP-Dateien in leichtes WebP umwandeln. Bis zu 95% kleiner.',
        url: toAbsoluteUrl('/de/werkzeuge/bmp-zu-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'AVIF zu JPG Konverter',
        description: 'AVIF-Dateien in universelles JPG umwandeln. Kompatibel uberall.',
        url: toAbsoluteUrl('/de/werkzeuge/avif-zu-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'AVIF zu PNG Konverter',
        description: 'AVIF-Dateien in verlustfreies PNG umwandeln. Volle Qualitat.',
        url: toAbsoluteUrl('/de/werkzeuge/avif-zu-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'AVIF zu WebP Konverter',
        description: 'AVIF-Dateien in WebP umwandeln. Breite Kompatibilitat.',
        url: toAbsoluteUrl('/de/werkzeuge/avif-zu-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'HEIC zu JPG Konverter',
        description: 'iPhone HEIC-Fotos in universelles JPG umwandeln. Ohne Registrierung.',
        url: toAbsoluteUrl('/de/werkzeuge/heic-zu-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'HEIC zu PNG Konverter',
        description: 'iPhone HEIC-Fotos in verlustfreies PNG umwandeln. Volle Qualitat.',
        url: toAbsoluteUrl('/de/werkzeuge/heic-zu-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'HEIC zu WebP Konverter',
        description: 'iPhone HEIC-Fotos in leichtes WebP umwandeln. Kleinere Datei.',
        url: toAbsoluteUrl('/de/werkzeuge/heic-zu-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'TIFF zu JPG Konverter',
        description: 'TIFF-Dateien in kompaktes JPG umwandeln. Ideal fur Scans.',
        url: toAbsoluteUrl('/de/werkzeuge/tiff-zu-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'TIFF zu PNG Konverter',
        description: 'TIFF-Dateien in verlustfreies PNG umwandeln. Volle Qualitat.',
        url: toAbsoluteUrl('/de/werkzeuge/tiff-zu-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'TIFF zu WebP Konverter',
        description: 'TIFF-Dateien in leichtes WebP umwandeln. Massive Reduktion.',
        url: toAbsoluteUrl('/de/werkzeuge/tiff-zu-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Was kosten die Tools?',
    answer: 'Nichts. Alle Tools sind kostenlos, ohne Abonnements und ohne versteckte Gebühren.',
  },
  {
    question: 'Werden meine Dateien an einen Server gesendet?',
    answer: 'Nein. Alle Tools laufen vollständig in Ihrem Browser. Dateien verlassen nie Ihren Computer und werden nirgendwo gespeichert.',
  },
  {
    question: 'Brauche ich ein Konto?',
    answer: 'Nein. Sie können die Tools sofort nutzen, ohne sich anzumelden oder ein Konto zu erstellen.',
  },
  {
    question: 'Gibt es ein Nutzungslimit?',
    answer: 'Nein. Nutzen Sie die Tools ohne Einschränkungen - kein Tageslimit, kein Dateilimit, keine Begrenzung bei Konvertierungen.',
  },
  {
    question: 'Wofür sind diese Tools gedacht?',
    answer:
      'Sie helfen bei der Vorbereitung von Materialien für Websites, Social Media und Druck: Bilder optimieren, Favicons erstellen, Textlänge prüfen, QR-Codes generieren, Farben auswählen und deren Lesbarkeit überprüfen.',
  },
  {
    question: 'Funktionieren die Tools auf dem Handy?',
    answer: 'Ja, aber einige Tools (z.\u00a0B. WebP-Konverter und Favicon-Generator) sind für den Desktop optimiert, da sie mit größeren Dateien arbeiten.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Kostenlose Online-Tools"
        description="24 Bildformat-Konverter, Bildeditor, Favicon-Generator, Textzähler, Farbtools und QR-Codes. Ohne Registrierung, ohne Limits — alles läuft in Ihrem Browser."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Bilder & Favicons"
          description="Tools zur Vorbereitung von Fotos, Grafiken und Symbolen für Websites und Social Media."
          grid="three"
          items={[
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Online-Bildeditor',
              topImageAlt: 'Online-Bildeditor Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/online-bildeditor-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Den perfekten Zuschnitt für Social Media oder Ihre Website vorbereiten. Wählen Sie ein fertiges Format oder geben Sie eigene Pixelmaße ein und laden Sie das Bild als PNG, JPG oder
                    WebP herunter.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/online-bildeditor">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon- & Symbol-Generator',
              topImageAlt: 'Favicon-Generator Arteon',
              topImageSrc: '/assets/tools/favicon-generator/kostenloser-favicon-generator-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Generieren Sie <strong>favicon.ico</strong> und PNG-Symbole 180x180, 192x192 und 512x512 aus einem einzigen Bild - konform mit Browser- und Lighthouse-Anforderungen.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/kostenloser-favicon-generator">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Bildformat-Konverter"
          description="12 Online-Bildkonverter — Formate wechseln zwischen JPG, PNG, WebP, SVG, BMP und GIF. Konvertierung im Browser, kein Server-Upload."
          grid="three"
          items={[
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JPG zu WebP Konverter',
              topImageAlt: 'JPG zu WebP Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>JPG-Fotos in leichtes WebP umwandeln. Bildgewicht um bis zu 35% reduzieren.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/jpg-zu-webp-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'PNG zu JPG Konverter',
              topImageAlt: 'PNG zu JPG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>PNG-Dateien im Browser in JPG umwandeln. Ohne Dateilimit, ohne Registrierung.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/png-zu-jpg-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'WebP zu JPG Konverter',
              topImageAlt: 'WebP zu JPG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>WebP-Dateien in universell kompatibles JPG umwandeln. Funktioniert überall.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/webp-zu-jpg-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'PNG zu WebP Konverter',
              topImageAlt: 'PNG zu WebP Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>PNG-Grafiken in WebP umwandeln. Kleinere Dateien bei erhaltener Transparenz.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/png-zu-webp-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JPG zu PNG Konverter',
              topImageAlt: 'JPG zu PNG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>JPG-Bilder verlustfrei in PNG umwandeln. Lokale Verarbeitung, unbegrenzte Dateien.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/jpg-zu-png-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'WebP zu PNG Konverter',
              topImageAlt: 'WebP zu PNG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>WebP-Bilder verlustfrei in PNG umwandeln. Lokale Konvertierung, kein Server-Upload.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/webp-zu-png-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'SVG zu PNG Konverter',
              topImageAlt: 'SVG zu PNG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>SVG-Vektorgrafiken in Raster-PNG umwandeln. Ideal für Dokumente und Social Media.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/svg-zu-png-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'SVG zu JPG Konverter',
              topImageAlt: 'SVG zu JPG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>SVG-Vektordateien in kompaktes JPG umwandeln. Kleinere Datei, volle Kompatibilität.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/svg-zu-jpg-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'BMP zu JPG Konverter',
              topImageAlt: 'BMP zu JPG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Unkomprimierte BMP-Dateien in leichtes JPG umwandeln. Massive Größenreduktion.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/bmp-zu-jpg-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'BMP zu PNG Konverter',
              topImageAlt: 'BMP zu PNG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>BMP-Bilder verlustfrei in PNG umwandeln. Qualität erhalten, Dateigröße reduzieren.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/bmp-zu-png-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'GIF zu PNG Konverter',
              topImageAlt: 'GIF zu PNG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Erstes Bild eines GIFs als statisches PNG exportieren. Ohne Qualitätsverlust.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/gif-zu-png-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'GIF zu JPG Konverter',
              topImageAlt: 'GIF zu JPG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Erstes Bild eines GIFs als JPG exportieren. Kleinere Datei, schnelleres Laden.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/gif-zu-jpg-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'SVG zu WebP Konverter',
              topImageAlt: 'SVG zu WebP Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>SVG-Grafiken in leichtes WebP umwandeln. Ideal fur Websites.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/svg-zu-webp-konverter">
                      Tool offnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'GIF zu WebP Konverter',
              topImageAlt: 'GIF zu WebP Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Erstes GIF-Bild als leichtes WebP exportieren. Kleinere Datei.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/gif-zu-webp-konverter">
                      Tool offnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'BMP zu WebP Konverter',
              topImageAlt: 'BMP zu WebP Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>BMP-Dateien in leichtes WebP umwandeln. Bis zu 95% kleiner.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/bmp-zu-webp-konverter">
                      Tool offnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'AVIF zu JPG Konverter',
              topImageAlt: 'AVIF zu JPG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>AVIF-Dateien in universelles JPG umwandeln. Kompatibel uberall.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/avif-zu-jpg-konverter">
                      Tool offnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'AVIF zu PNG Konverter',
              topImageAlt: 'AVIF zu PNG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>AVIF-Dateien in verlustfreies PNG umwandeln. Volle Qualitat.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/avif-zu-png-konverter">
                      Tool offnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'AVIF zu WebP Konverter',
              topImageAlt: 'AVIF zu WebP Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>AVIF-Dateien in WebP umwandeln. Breite Kompatibilitat.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/avif-zu-webp-konverter">
                      Tool offnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'HEIC zu JPG Konverter',
              topImageAlt: 'HEIC zu JPG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>iPhone HEIC-Fotos in universelles JPG umwandeln. Ohne Registrierung.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/heic-zu-jpg-konverter">
                      Tool offnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'HEIC zu PNG Konverter',
              topImageAlt: 'HEIC zu PNG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>iPhone HEIC-Fotos in verlustfreies PNG umwandeln. Volle Qualitat.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/heic-zu-png-konverter">
                      Tool offnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'HEIC zu WebP Konverter',
              topImageAlt: 'HEIC zu WebP Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>iPhone HEIC-Fotos in leichtes WebP umwandeln. Kleinere Datei.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/heic-zu-webp-konverter">
                      Tool offnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'TIFF zu JPG Konverter',
              topImageAlt: 'TIFF zu JPG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>TIFF-Dateien in kompaktes JPG umwandeln. Ideal fur Scans.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/tiff-zu-jpg-konverter">
                      Tool offnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'TIFF zu PNG Konverter',
              topImageAlt: 'TIFF zu PNG Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>TIFF-Dateien in verlustfreies PNG umwandeln. Volle Qualitat.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/tiff-zu-png-konverter">
                      Tool offnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'TIFF zu WebP Konverter',
              topImageAlt: 'TIFF zu WebP Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>TIFF-Dateien in leichtes WebP umwandeln. Massive Reduktion.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/tiff-zu-webp-konverter">
                      Tool offnen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Text & SEO"
          description="Tools zur Überprüfung von Textlänge, Meta-Tags und Vorschau Ihrer Seite in den Suchergebnissen."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Meta-Tag-Checker',
              topImageAlt: 'Meta-Titel- und Beschreibungs-Checker Arteon',
              topImageSrc: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-titel-beschreibung-laengenpruefer-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Prüfen Sie Zeichenanzahl, Wortanzahl und Pixelbreite - mit Vorschau, wie Ihre Seite in den Google-Suchergebnissen erscheint. Vermeiden Sie abgeschnittene Titel und Beschreibungen.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/meta-titel-beschreibung-laengenpruefer">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Wort- & Zeichenzähler',
              topImageAlt: 'Wort- und Zeichenzähler Arteon',
              topImageSrc: '/assets/tools/word-and-character-counter-with-text-formatting-tools/wort-und-zeichenzaehler-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Prüfen Sie, ob die Textlänge für eine Startseite, Dienstleistungsseite, einen Blogartikel oder eine Produktbeschreibung passt. Das Tool zählt Wörter, Zeichen, Absätze und schätzt
                    die Lesezeit.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/wort-und-zeichenzaehler">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-Mail & Kommunikation"
          description="Tools für eine professionelle E-Mail-Kommunikation und einen einheitlichen Markenauftritt."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Kostenloser HTML-E-Mail-Signatur-Generator',
              topImageAlt: 'Kostenloser HTML-E-Mail-Signatur-Generator Arteon',
              topImageSrc: '/assets/tools/free-html-email-signature-generator/kostenloser-e-mail-signatur-generator-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    In wenigen Minuten eine professionelle E-Mail-Signatur erstellen. Daten eingeben, Farben wählen und den fertigen HTML-Code in Gmail, Outlook oder andere E-Mail-Clients einfügen.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/kostenloser-e-mail-signatur-generator">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="QR-Codes"
          description="QR-Code-Generator für Websites, Visitenkarten, Speisekarten und Druckmaterialien."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Kostenloser QR-Code-Generator',
              topImageAlt: 'Kostenloser QR-Code-Generator Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/kostenloser-qr-code-generator-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>QR-Code für Website, vCard, Speisekarte oder Flyer erstellen. Export als PNG und SVG - ohne Anmeldung, ohne Limits.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/kostenloser-qr-code-generator">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Farben & Barrierefreiheit"
          description="Tools für die Arbeit mit Farben, Kontrast und WCAG-Barrierefreiheit."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Farbkontrast-Checker',
              topImageAlt: 'Farbkontrast-Checker Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/farbkontrast-checker-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Prüfen Sie, ob Text- und Hintergrundfarben gut lesbar sind. Farbcodes eingeben, Kontrastverhältnis nach <strong>WCAG</strong> ablesen und bei Bedarf die <strong>Match</strong>
                    -Funktion zur automatischen Korrektur nutzen.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/farbkontrast-checker">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Bild-Farbextraktor',
              topImageAlt: 'Bild-Farbextraktor Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/bild-farbextraktor-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Foto oder Logo hochladen - das Tool extrahiert die dominanten Farben. HEX-Codes mit einem Klick kopieren und überall verwenden.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/bild-farbextraktor">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Farbpaletten-Generator',
              topImageAlt: 'Farbpaletten-Generator Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/farbpaletten-generator-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Basisfarbe wählen und 9 Farbpaletten generieren: monochromatisch, komplementär, triadisch, Pastell, dunkel und mehr. HEX-Codes mit einem Klick kopieren.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/farbpaletten-generator">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Was sind Arteon-Tools?">
          <p className="mb-4">
            34 kostenlose Online-Tools zur Erstellung und Optimierung von Inhalten für Websites, Social Media und Druck - WebP-Konverter, Favicon-Generator, Textzähler, Farbextraktor,
            Paletten-Generator und QR-Codes.
          </p>
          <p>Alle Tools laufen in Ihrem Browser - Dateien werden nie an einen Server gesendet. Nutzen Sie sie ohne Registrierung und ohne Limits.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Warum Arteon-Tools nutzen?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Volle Privatsphäre',
              description: 'Alle Tools verarbeiten Dateien lokal in Ihrem Browser. Nichts wird an einen Server gesendet - die Daten verschwinden, wenn Sie den Tab schließen.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Keine Nutzungslimits',
              description: 'Nutzen Sie die Tools ohne Einschränkungen - kein Tageslimit, kein Dateilimit, keine Begrenzung bei Konvertierungen. So oft wie nötig.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Keine Registrierung',
              description: 'Kein Konto erforderlich. Öffnen Sie das Tool, nutzen Sie es, fertig.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Auf Deutsch verfügbar',
              description: 'Alle Tools sind auf Deutsch verfügbar - Oberfläche, Anleitungen und Meldungen.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Häufig gestellte Fragen zu unseren Tools" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-de" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
